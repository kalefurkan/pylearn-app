const e=`
import sys, io, json, traceback, contextlib, types

__TK_RUN = [0]

def __install_tkinter():
    mod = types.ModuleType("tkinter")
    mod.__file__ = "<tkinter-simülatör>"
    sys.modules["tkinter"] = mod
    exec(compile(__TK_SRC, "<tkinter>", "exec"), mod.__dict__)
    mod._install()

__install_tkinter()

def __pylearn_run(code, stdin, echo):
    __TK_RUN[0] += 1
    sys.modules["tkinter"]._reset(__TK_RUN[0])
    queue = list(stdin)
    buf = io.StringIO()
    def _input(prompt=""):
        if echo:
            buf.write(str(prompt))
        if not queue:
            raise EOFError("input() için veri kalmadı")
        v = queue.pop(0)
        if echo:
            buf.write(v + "\\n")
        return v
    env = {"__name__": "__main__", "input": _input}
    err = None
    with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(buf):
        try:
            exec(compile(code, "<kod>", "exec"), env)
        except SyntaxError as e:
            err = {"type": type(e).__name__, "message": e.msg or str(e), "line": e.lineno,
                   "traceback": "".join(traceback.format_exception_only(type(e), e))}
        except BaseException as e:
            line = None
            for fs in traceback.extract_tb(e.__traceback__):
                if fs.filename == "<kod>":
                    line = fs.lineno
            err = {"type": type(e).__name__, "message": str(e), "line": line,
                   "traceback": "".join(traceback.format_exception(type(e), e, e.__traceback__))}
    variables = []
    for k, v in list(env.items()):
        if k.startswith("__") or k == "input" or isinstance(v, (types.ModuleType, types.FunctionType, type)):
            continue
        try:
            r = repr(v)
        except BaseException:
            r = "<repr hatası>"
        variables.append({"name": k, "type": type(v).__name__, "repr": r[:80]})
    tk = None
    try:
        tk = sys.modules["tkinter"]._snapshot()
    except BaseException:
        tk = None
    return json.dumps({"stdout": buf.getvalue(), "error": err, "variables": variables, "tk": tk}, default=str)

def __pylearn_tk_event(raw):
    ev = json.loads(raw)
    tk = sys.modules["tkinter"]
    if ev.get("runId") != tk._S.run_id:
        return json.dumps({"stale": True})
    buf = io.StringIO()
    err = None
    with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(buf):
        try:
            tk._dispatch(ev)
        except BaseException as e:
            err = {"type": type(e).__name__, "message": str(e), "line": None, "traceback": traceback.format_exc()}
    return json.dumps({"snapshot": tk._snapshot(), "stdout": buf.getvalue(), "error": err}, default=str)
`.replace(`def __install_tkinter`,()=>`__TK_SRC = `+JSON.stringify(`"""PyLearn tkinter simulator.

Real tkinter needs a desktop GUI toolkit and does not exist in the browser (Pyodide). This module re-implements the
commonly taught part of the tkinter API in pure Python. It builds a widget tree; the app draws that tree as a window
preview and sends user events (clicks, typing, ...) back to \`_dispatch\`, which runs the student's callbacks.

Differences from real tkinter (documented in the lessons):
- mainloop() returns immediately; the window stays alive in the preview and callbacks run when the user interacts.
- Dialog functions (messagebox, simpledialog, filedialog) do not block: they show a small popup and return a default answer.
- Only a subset of widgets/options exists; unsupported options raise TclError like Tk's "unknown option".
"""
import sys
import traceback

__all__ = []

class TclError(Exception):
    pass

# ----------------------------------------------------------------------------- constants
NO = FALSE = OFF = 0
YES = TRUE = ON = 1
N, S, W, E, NW, SW, NE, SE, NS, EW, NSEW, CENTER = 'n', 's', 'w', 'e', 'nw', 'sw', 'ne', 'se', 'ns', 'ew', 'nsew', 'center'
NONE, X, Y, BOTH = 'none', 'x', 'y', 'both'
LEFT, TOP, RIGHT, BOTTOM = 'left', 'top', 'right', 'bottom'
RAISED, SUNKEN, FLAT, RIDGE, GROOVE, SOLID = 'raised', 'sunken', 'flat', 'ridge', 'groove', 'solid'
HORIZONTAL, VERTICAL = 'horizontal', 'vertical'
NORMAL, DISABLED, ACTIVE, HIDDEN = 'normal', 'disabled', 'active', 'hidden'
CHAR, WORD = 'char', 'word'
INSERT, END, CURRENT, ANCHOR, SEL, SEL_FIRST, SEL_LAST = 'insert', 'end', 'current', 'anchor', 'sel', 'sel.first', 'sel.last'
SINGLE, BROWSE, MULTIPLE, EXTENDED = 'single', 'browse', 'multiple', 'extended'
ALL = 'all'
TkVersion = 8.6
TclVersion = 8.6

_ALIASES = {'bg': 'background', 'fg': 'foreground', 'bd': 'borderwidth', 'cnf': None}


class _State:
    def __init__(self, run_id):
        self.run_id = run_id
        self.next_id = 1
        self.widgets = {}
        self.windows = []
        self.dialogs = []
        self.after = {}
        self.next_after = 1
        self.mainloop = False
        self.counters = {}
        self.clipboard = ''

    def new_id(self):
        i = self.next_id
        self.next_id += 1
        return i


_S = _State(0)


def _reset(run_id):
    global _S
    _S = _State(run_id)


def _canon(key):
    key = key.rstrip('_') if key in ('from_', 'class_') else key
    if key == 'from':
        return 'from_'
    return _ALIASES.get(key, key)


def _font(f):
    """Normalises a Tk font spec (string, tuple or Font) to a plain dict."""
    if f is None:
        return None
    if isinstance(f, Font):
        return dict(f._d)
    if isinstance(f, str):
        parts = f.split()
        if not parts:
            return None
        d = {'family': parts[0], 'size': 12, 'weight': 'normal', 'slant': 'roman', 'underline': False, 'overstrike': False}
        for p in parts[1:]:
            if p.lstrip('-').isdigit():
                d['size'] = int(p)
            elif p in ('bold', 'normal'):
                d['weight'] = p
            elif p in ('italic', 'roman'):
                d['slant'] = p
            elif p == 'underline':
                d['underline'] = True
            elif p == 'overstrike':
                d['overstrike'] = True
        return d
    if isinstance(f, (tuple, list)) and f:
        d = {'family': str(f[0]), 'size': 12, 'weight': 'normal', 'slant': 'roman', 'underline': False, 'overstrike': False}
        if len(f) > 1 and f[1] is not None:
            try:
                d['size'] = int(f[1])
            except (TypeError, ValueError):
                pass
        for p in f[2:]:
            for q in str(p).split():
                if q in ('bold', 'normal'):
                    d['weight'] = q
                elif q in ('italic', 'roman'):
                    d['slant'] = q
                elif q == 'underline':
                    d['underline'] = True
                elif q == 'overstrike':
                    d['overstrike'] = True
        return d
    return None


class Font:
    def __init__(self, root=None, font=None, family='TkDefaultFont', size=12, weight='normal', slant='roman', underline=False, overstrike=False, **kw):
        self._d = {'family': family, 'size': size, 'weight': weight, 'slant': slant, 'underline': bool(underline), 'overstrike': bool(overstrike)}
        if font is not None:
            base = _font(font)
            if base:
                self._d.update(base)

    def configure(self, **kw):
        self._d.update({k: v for k, v in kw.items() if k in self._d})
    config = configure

    def cget(self, key):
        return self._d[key]

    def measure(self, text):
        return int(len(str(text)) * self._d['size'] * 0.6)

    def metrics(self, name=None):
        return {'ascent': self._d['size'], 'descent': 3, 'linespace': int(self._d['size'] * 1.4), 'fixed': 0}[name] if name else {}


# ----------------------------------------------------------------------------- variables
class Variable:
    _default = ''

    def __init__(self, master=None, value=None, name=None):
        self._value = self._coerce(value) if value is not None else self._default
        self._traces = []

    def _coerce(self, v):
        return v

    def get(self):
        return self._value

    def set(self, value):
        self._value = self._coerce(value)
        for cb in list(self._traces):
            _call(cb, 'PY_VAR', '', 'write')

    def trace_add(self, mode, callback):
        self._traces.append(callback)
        return 'trace%d' % len(self._traces)

    trace = trace_variable = trace_add

    def trace_remove(self, mode, cbname):
        pass


class StringVar(Variable):
    _default = ''

    def _coerce(self, v):
        return str(v)


class IntVar(Variable):
    _default = 0

    def _coerce(self, v):
        try:
            return int(v)
        except (TypeError, ValueError):
            try:
                return int(float(v))
            except (TypeError, ValueError):
                raise TclError('expected integer but got "%s"' % (v,))


class DoubleVar(Variable):
    _default = 0.0

    def _coerce(self, v):
        try:
            return float(v)
        except (TypeError, ValueError):
            raise TclError('expected floating-point number but got "%s"' % (v,))


class BooleanVar(Variable):
    _default = False

    def _coerce(self, v):
        if isinstance(v, str):
            return v.strip().lower() in ('1', 'true', 'yes', 'on')
        return bool(v)


def _var_text(v):
    x = v.get()
    if isinstance(x, bool):
        return '1' if x else '0'
    return str(x)


# ----------------------------------------------------------------------------- callbacks and events
def _call(func, *args):
    """Runs a student callback; like Tk, an exception is reported and the app keeps running."""
    try:
        return func(*args)
    except SystemExit:
        raise
    except Exception:
        print('Exception in Tkinter callback')
        print(traceback.format_exc().rstrip())
        _S.callback_error = True
        return None


class Event:
    def __init__(self, **kw):
        self.widget = None
        self.x = self.y = self.x_root = self.y_root = 0
        self.char = ''
        self.keysym = ''
        self.num = 0
        self.delta = 0
        self.width = self.height = 0
        self.type = ''
        self.__dict__.update(kw)

    def __repr__(self):
        return '<Event keysym=%r x=%r y=%r>' % (self.keysym, self.x, self.y)


_KEY_ALIASES = {'Key': None, 'KeyPress': None, 'KeyRelease': 'release', 'space': 'space', 'Return': 'Return', 'Escape': 'Escape', 'BackSpace': 'BackSpace', 'Tab': 'Tab', 'Up': 'Up', 'Down': 'Down', 'Left': 'Left', 'Right': 'Right', 'Delete': 'Delete'}


def _seq_matches(seq, ev):
    """Does a bind() sequence like <Key>, <Return>, <Button-1>, <KeyPress-a> match this simulator event?"""
    s = seq.strip()
    if s.startswith('<<'):
        return s == ev.get('virtual')
    if not (s.startswith('<') and s.endswith('>')):
        return False
    body = s[1:-1]
    parts = [p for p in body.split('-') if p]
    kind = ev['kind']
    if kind == 'key':
        if not parts:
            return False
        if parts[0] in ('Key', 'KeyPress') and len(parts) == 1:
            return not ev.get('release')
        if parts[0] == 'KeyRelease':
            return bool(ev.get('release')) and (len(parts) == 1 or parts[1] == ev['keysym'])
        if ev.get('release'):
            return False
        if parts[0] in ('Key', 'KeyPress') and len(parts) >= 2:
            return parts[-1] == ev['keysym'] or parts[-1] == ev.get('char')
        return parts[-1] == ev['keysym'] or (len(parts[-1]) == 1 and parts[-1] == ev.get('char'))
    if kind == 'mouse':
        t = ev['type']
        num = ev.get('num', 1)
        if t == 'down':
            return len(parts) >= 1 and parts[0] in ('Button', 'ButtonPress') and (len(parts) == 1 or parts[1] == str(num))
        if t == 'dblclick':
            return parts[:1] == ['Double'] and len(parts) >= 2 and parts[1] in ('Button', 'ButtonPress') and (len(parts) == 2 or parts[2] == str(num))
        if t == 'up':
            return len(parts) >= 1 and parts[0] == 'ButtonRelease' and (len(parts) == 1 or parts[1] == str(num))
        if t == 'move':
            return parts == ['Motion'] or parts == ['B1', 'Motion']
        if t == 'enter':
            return parts == ['Enter']
        if t == 'leave':
            return parts == ['Leave']
    if kind == 'focus':
        return parts == [ev['type']]
    return False


# ----------------------------------------------------------------------------- base classes
_PACK_KEYS = {'side', 'fill', 'expand', 'padx', 'pady', 'ipadx', 'ipady', 'anchor', 'in_', 'before', 'after'}
_GRID_KEYS = {'row', 'column', 'rowspan', 'columnspan', 'sticky', 'padx', 'pady', 'ipadx', 'ipady', 'in_'}
_PLACE_KEYS = {'x', 'y', 'relx', 'rely', 'anchor', 'width', 'height', 'relwidth', 'relheight', 'bordermode', 'in_'}


class Misc:
    _kind = 'misc'
    _defaults = {}
    _valid = None  # None = accept every option

    def _setup(self, master, cnf, kw, kind=None):
        self._alive = True
        if kind:
            self._kind = kind
        self.master = master
        self._id = _S.new_id()
        _S.widgets[self._id] = self
        self._opts = dict(self._defaults)
        self._children = []
        self._geom = None
        self._manager = None
        self._order = []
        self._bindings = []
        self._grid_cfg = {'col': {}, 'row': {}}
        self._propagate = True
        base = self._basename()
        cnt = _S.counters.get((id(master), base), 0) + 1
        _S.counters[(id(master), base)] = cnt
        self._name = '!' + base + ('' if cnt == 1 else str(cnt))
        if master is not None:
            master._children.append(self)
        opts = {}
        if cnf:
            opts.update(cnf)
        opts.update(kw)
        self._apply(opts, creating=True)

    def _basename(self):
        return type(self).__name__.lower().replace('ttk_', '')

    @property
    def _path(self):
        if self.master is None or isinstance(self, Tk):
            return '.'
        p = self.master._path
        return ('.' if p == '.' else p + '.') + self._name

    def __repr__(self):
        return '<tkinter.%s object %s>' % (type(self).__name__, self._path)

    __str__ = lambda self: self._path

    def _check(self):
        if not self._alive:
            raise TclError('invalid command name "%s"' % self._path)

    def _apply(self, opts, creating=False):
        for key, value in opts.items():
            k = _canon(key)
            if k is None:
                continue
            if self._valid is not None and k not in self._valid and k not in ('command', 'textvariable', 'variable'):
                raise TclError('unknown option "-%s"' % key)
            self._opts[k] = value
        self._after_apply(opts)

    def _after_apply(self, opts):
        pass

    def configure(self, cnf=None, **kw):
        self._check()
        if cnf is None and not kw:
            return dict(self._opts)
        if isinstance(cnf, str):
            return self.cget(cnf)
        opts = {}
        if cnf:
            opts.update(cnf)
        opts.update(kw)
        self._apply(opts)

    config = configure

    def cget(self, key):
        self._check()
        k = _canon(key)
        if k not in self._opts:
            raise TclError('unknown option "-%s"' % key)
        return self._opts[k]

    def __getitem__(self, key):
        return self.cget(key)

    def __setitem__(self, key, value):
        self.configure(**{key: value})

    def keys(self):
        return list(self._opts.keys())

    # ---- geometry managers
    def _manage(self, manager, opts):
        self._check()
        m = self.master
        if m is None:
            raise TclError('cannot manage the root window')
        if m._manager not in (None, manager) and any(c._geom for c in m._children if c is not self):
            raise TclError('cannot use geometry manager %s inside %s which already has slaves managed by %s' % (manager, m._path, m._manager))
        if m._manager not in (None, manager) and not any(c._geom for c in m._children if c is not self):
            m._manager = None
        m._manager = manager
        self._geom = {'manager': manager, 'opts': opts}
        if self not in m._order:
            m._order.append(self)

    def pack(self, cnf=None, **kw):
        opts = dict(cnf or {}, **kw)
        for k in opts:
            if _canon(k) not in {_canon(x) for x in _PACK_KEYS}:
                raise TclError('bad option "-%s": must be -after, -anchor, -before, -expand, -fill, -in, -ipadx, -ipady, -padx, -pady, or -side' % k)
        o = {'side': 'top', 'fill': 'none', 'expand': False, 'padx': 0, 'pady': 0, 'ipadx': 0, 'ipady': 0, 'anchor': 'center'}
        for k, v in opts.items():
            o[k.rstrip('_')] = v
        o['expand'] = bool(o['expand']) and o['expand'] not in ('0', 'no', 'false')
        self._manage('pack', o)

    pack_configure = pack

    def pack_forget(self):
        self._unmanage()

    forget = pack_forget

    def grid(self, cnf=None, **kw):
        opts = dict(cnf or {}, **kw)
        for k in opts:
            if k.rstrip('_') not in {x.rstrip('_') for x in _GRID_KEYS}:
                raise TclError('bad option "-%s": must be -column, -columnspan, -in, -ipadx, -ipady, -padx, -pady, -row, -rowspan, or -sticky' % k)
        o = {'row': None, 'column': 0, 'rowspan': 1, 'columnspan': 1, 'sticky': '', 'padx': 0, 'pady': 0, 'ipadx': 0, 'ipady': 0}
        for k, v in opts.items():
            o[k.rstrip('_')] = v
        if o['row'] is None:
            rows = [c._geom['opts']['row'] + c._geom['opts']['rowspan'] - 1 for c in (self.master._children if self.master else []) if c._geom and c._geom['manager'] == 'grid' and c is not self]
            o['row'] = (max(rows) + 1) if rows else 0
        self._manage('grid', o)

    grid_configure = grid

    def grid_forget(self):
        self._unmanage()

    grid_remove = grid_forget

    def place(self, cnf=None, **kw):
        opts = dict(cnf or {}, **kw)
        for k in opts:
            if k.rstrip('_') not in {x.rstrip('_') for x in _PLACE_KEYS}:
                raise TclError('bad option "-%s"' % k)
        o = {'x': 0, 'y': 0, 'relx': None, 'rely': None, 'anchor': 'nw', 'width': None, 'height': None, 'relwidth': None, 'relheight': None}
        for k, v in opts.items():
            o[k.rstrip('_')] = v
        self._manage('place', o)

    place_configure = place

    def place_forget(self):
        self._unmanage()

    def _unmanage(self):
        self._geom = None
        if self.master and self in self.master._order:
            self.master._order.remove(self)
        if self.master and not any(c._geom for c in self.master._children):
            self.master._manager = None

    def grid_columnconfigure(self, index, weight=None, minsize=None, pad=None, **kw):
        c = self._grid_cfg['col'].setdefault(int(index), {})
        if weight is not None:
            c['weight'] = weight
        if minsize is not None:
            c['minsize'] = minsize
        if pad is not None:
            c['pad'] = pad

    columnconfigure = grid_columnconfigure

    def grid_rowconfigure(self, index, weight=None, minsize=None, pad=None, **kw):
        c = self._grid_cfg['row'].setdefault(int(index), {})
        if weight is not None:
            c['weight'] = weight
        if minsize is not None:
            c['minsize'] = minsize
        if pad is not None:
            c['pad'] = pad

    rowconfigure = grid_rowconfigure

    def pack_propagate(self, flag=True):
        self._propagate = bool(flag)

    grid_propagate = propagate = pack_propagate

    def grid_slaves(self, row=None, column=None):
        return [c for c in self._children if c._geom and c._geom['manager'] == 'grid']

    def pack_slaves(self):
        return [c for c in self._order if c._geom and c._geom['manager'] == 'pack']

    def place_slaves(self):
        return [c for c in self._children if c._geom and c._geom['manager'] == 'place']

    slaves = pack_slaves

    # ---- tree helpers
    def winfo_children(self):
        return list(self._children)

    def winfo_toplevel(self):
        w = self
        while w.master is not None:
            w = w.master
        return w

    def winfo_exists(self):
        return 1 if self._alive else 0

    def winfo_width(self):
        return int(self._opts.get('width') or 1)

    def winfo_height(self):
        return int(self._opts.get('height') or 1)

    def winfo_reqwidth(self):
        return self.winfo_width()

    def winfo_reqheight(self):
        return self.winfo_height()

    def winfo_screenwidth(self):
        return 1280

    def winfo_screenheight(self):
        return 800

    def winfo_x(self):
        return 0

    def winfo_y(self):
        return 0

    def winfo_rootx(self):
        return 0

    def winfo_rooty(self):
        return 0

    def winfo_pointerx(self):
        return 0

    def winfo_pointery(self):
        return 0

    def winfo_ismapped(self):
        return 1 if self._alive else 0

    def winfo_name(self):
        return self._name

    def winfo_class(self):
        return type(self).__name__

    def winfo_id(self):
        return self._id

    def update(self):
        pass

    def update_idletasks(self):
        pass

    def focus_set(self):
        _S.focus = self

    focus = focus_force = focus_set

    def focus_get(self):
        return getattr(_S, 'focus', None)

    def lift(self, *a):
        pass

    lower = tkraise = lift

    def grab_set(self):
        pass

    grab_release = grab_set

    def bell(self):
        pass

    def option_add(self, *a, **k):
        pass

    def clipboard_clear(self):
        _S.clipboard = ''

    def clipboard_append(self, s):
        _S.clipboard += str(s)

    def clipboard_get(self):
        return _S.clipboard

    def tk_focusNext(self):
        return self

    def nametowidget(self, name):
        for w in _S.widgets.values():
            if w._path == name or w._name == name:
                return w
        raise KeyError(name)

    def register(self, func):
        return 'cb%d' % id(func)

    # ---- events and timers
    def bind(self, sequence=None, func=None, add=None):
        if sequence is None:
            return [s for s, _ in self._bindings]
        if func is None:
            return None
        if add not in ('+', True):
            self._bindings = [(s, f) for s, f in self._bindings if s != sequence]
        self._bindings.append((sequence, func))
        return 'bind%d' % len(self._bindings)

    def unbind(self, sequence, funcid=None):
        self._bindings = [(s, f) for s, f in self._bindings if s != sequence]

    bind_all = bind_class = bind

    def event_generate(self, sequence, **kw):
        _dispatch_event(self, {'kind': 'key', 'keysym': sequence.strip('<>').split('-')[-1], 'char': '', 'virtual': sequence if sequence.startswith('<<') else None})

    def after(self, ms, func=None, *args):
        if func is None:
            return None
        jid = 'after#%d' % _S.next_after
        _S.next_after += 1
        _S.after[jid] = {'delay': max(0, int(ms)), 'func': func, 'args': args}
        return jid

    def after_idle(self, func, *args):
        return self.after(0, func, *args)

    def after_cancel(self, jid):
        _S.after.pop(jid, None)

    def destroy(self):
        if not self._alive:
            return
        for c in list(self._children):
            c.destroy()
        self._alive = False
        if self.master is not None and self in self.master._children:
            self.master._children.remove(self)
        if self.master is not None and self in self.master._order:
            self.master._order.remove(self)
        _S.widgets.pop(self._id, None)

    # ---- serialisation
    def _props(self):
        return {}

    def _snapshot(self):
        managed = [c for c in self._order if c._alive and c._geom]
        d = {
            'id': self._id, 'kind': self._kind, 'path': self._path, 'props': self._props(),
            'geom': self._geom,
            'children': [c._snapshot() for c in managed],
        }
        if self._grid_cfg['col'] or self._grid_cfg['row']:
            d['gridcfg'] = {'col': {str(k): v for k, v in self._grid_cfg['col'].items()}, 'row': {str(k): v for k, v in self._grid_cfg['row'].items()}}
        if not self._propagate:
            d['propagate'] = False
        return d


def _common(w):
    o = w._opts
    p = {}
    for k in ('foreground', 'background', 'relief', 'borderwidth', 'padx', 'pady', 'anchor', 'justify', 'width', 'height', 'wraplength', 'state', 'cursor', 'highlightthickness', 'activebackground', 'activeforeground', 'disabledforeground', 'highlightbackground', 'compound', 'underline'):
        if k in o and o[k] is not None and o[k] != '':
            p[k] = o[k]
    f = _font(o.get('font'))
    if f:
        p['font'] = f
    img = o.get('image')
    if img is not None:
        p['image'] = {'name': getattr(img, '_name', 'image'), 'width': getattr(img, '_w', 32), 'height': getattr(img, '_h', 32)}
    return p


class _Widget(Misc):
    def __init__(self, master=None, cnf=None, **kw):
        if master is None:
            master = _default_root()
        self._setup(master, cnf, kw)


def _default_root():
    for w in _S.windows:
        if w._alive and isinstance(w, Tk):
            return w
    return Tk()


# ----------------------------------------------------------------------------- windows
class _Window(Misc):
    def _window_setup(self, kind):
        self._title = 'tk' if isinstance(self, Tk) else 'toplevel'
        self._geometry = ''
        self._resizable = (True, True)
        self._protocols = {}
        self._menu = None
        self._closed = False
        _S.windows.append(self)

    def title(self, string=None):
        if string is None:
            return self._title
        self._title = str(string)

    wm_title = title

    def geometry(self, newGeometry=None):
        if newGeometry is None:
            return self._geometry or '1x1+0+0'
        self._geometry = str(newGeometry)

    wm_geometry = geometry

    def resizable(self, width=None, height=None):
        if width is None and height is None:
            return self._resizable
        self._resizable = (bool(width), bool(height))

    wm_resizable = resizable

    def protocol(self, name=None, func=None):
        if func is not None:
            self._protocols[name] = func

    wm_protocol = protocol

    def minsize(self, w=None, h=None):
        pass

    maxsize = iconbitmap = iconphoto = attributes = overrideredirect = transient = state = iconify = deiconify = withdraw = wm_attributes = minsize

    def mainloop(self, n=0):
        _S.mainloop = True

    def quit(self):
        self.destroy()

    def _after_apply(self, opts):
        if 'menu' in opts:
            self._menu = opts['menu']

    def destroy(self):
        if not self._alive:
            return
        Misc.destroy(self)
        self._closed = True
        if isinstance(self, Tk):
            for w in list(_S.windows):
                if w is not self and w._alive:
                    w.destroy()

    def _window_props(self):
        p = {'title': self._title, 'geometry': self._geometry, 'resizable': list(self._resizable), 'background': self._opts.get('background') or None, 'closed': self._closed}
        if self._menu is not None and getattr(self._menu, '_alive', False):
            p['menu'] = self._menu._menu_snapshot()
        return p

    def _snapshot(self):
        d = Misc._snapshot(self)
        d['props'] = self._window_props()
        d['kind'] = 'window'
        return d


class Tk(_Window):
    _defaults = {'background': None}

    def __init__(self, screenName=None, baseName=None, className='Tk', useTk=True, sync=False, use=None):
        self._setup(None, None, {}, kind='window')
        self._window_setup('tk')
        self._opts.setdefault('background', None)
        self._name = ''

    def report_callback_exception(self, exc, val, tb):
        traceback.print_exception(exc, val, tb)

    def destroy(self):
        _Window.destroy(self)


class Toplevel(_Window):
    def __init__(self, master=None, cnf=None, **kw):
        if master is None:
            master = _default_root()
        self._setup(master, cnf, kw, kind='window')
        self._window_setup('toplevel')


# ----------------------------------------------------------------------------- simple widgets
class Frame(_Widget):
    _kind = 'frame'
    _defaults = {'width': 0, 'height': 0}

    def _props(self):
        p = _common(self)
        p['width'] = self._opts.get('width') or 0
        p['height'] = self._opts.get('height') or 0
        return p


class LabelFrame(Frame):
    _kind = 'labelframe'

    def _props(self):
        p = Frame._props(self)
        p['text'] = str(self._opts.get('text', ''))
        return p


class Label(_Widget):
    _kind = 'label'
    _defaults = {'text': ''}

    def _text(self):
        tv = self._opts.get('textvariable')
        return _var_text(tv) if tv is not None else str(self._opts.get('text', ''))

    def _props(self):
        p = _common(self)
        p['text'] = self._text()
        return p


class Button(Label):
    _kind = 'button'

    def invoke(self):
        self._check()
        if self._opts.get('state') == 'disabled':
            return None
        cmd = self._opts.get('command')
        return _call(cmd) if cmd else None

    def flash(self):
        pass


class Entry(_Widget):
    _kind = 'entry'
    _defaults = {'width': 20}

    def _after_apply(self, opts):
        if not hasattr(self, '_text'):
            self._text = ''

    def _current(self):
        tv = self._opts.get('textvariable')
        return _var_text(tv) if tv is not None else self._text

    def _set_text(self, s):
        self._text = str(s)
        tv = self._opts.get('textvariable')
        if tv is not None:
            tv.set(self._text)

    def _idx(self, index, text=None):
        t = self._current() if text is None else text
        if index in ('end', END):
            return len(t)
        if index in ('insert', INSERT):
            return len(t)
        try:
            return max(0, min(int(index), len(t)))
        except (TypeError, ValueError):
            raise TclError('bad entry index "%s"' % (index,))

    def get(self):
        return self._current()

    def insert(self, index, string):
        t = self._current()
        i = self._idx(index, t)
        self._set_text(t[:i] + str(string) + t[i:])

    def delete(self, first, last=None):
        t = self._current()
        a = self._idx(first, t)
        b = a + 1 if last is None else self._idx(last, t)
        self._set_text(t[:a] + t[b:])

    def icursor(self, index):
        pass

    def select_range(self, a, b):
        pass

    selection_range = select_range

    def select_clear(self):
        pass

    def xview(self, *a):
        pass

    def _props(self):
        p = _common(self)
        p['text'] = self._current()
        p['show'] = self._opts.get('show') or ''
        return p


class Text(_Widget):
    _kind = 'text'
    _defaults = {'width': 80, 'height': 24}

    def _after_apply(self, opts):
        if not hasattr(self, '_text'):
            self._text = ''

    def _offset(self, index):
        full = self._text + '\\n'
        if index in ('end', END):
            return len(full)
        if isinstance(index, (int, float)):
            index = '%s' % index
        s = str(index)
        if s in ('insert', 'current'):
            return len(self._text)
        base = s
        adj = 0
        if '-' in s and s.split('-')[0] in ('end', '') and s.endswith('c'):
            base, rest = s.split('-', 1)
            try:
                adj = -int(rest[:-1])
            except ValueError:
                raise TclError('bad text index "%s"' % s)
        elif '+' in s and s.endswith('c'):
            base, rest = s.split('+', 1)
            try:
                adj = int(rest[:-1])
            except ValueError:
                raise TclError('bad text index "%s"' % s)
        if base in ('end', END):
            return max(0, min(len(full) + adj, len(full)))
        if '.' in base:
            ln, col = base.split('.', 1)
            try:
                line = int(ln)
            except ValueError:
                raise TclError('bad text index "%s"' % s)
            lines = full.split('\\n')
            if line < 1:
                return 0
            if line > len(lines):
                return len(full)
            start = sum(len(l) + 1 for l in lines[:line - 1])
            linelen = len(lines[line - 1])
            c = linelen if col == 'end' else int(col)
            return max(0, min(start + min(c, linelen) + adj, len(full)))
        raise TclError('bad text index "%s"' % s)

    def get(self, index1, index2=None):
        a = self._offset(index1)
        full = self._text + '\\n'
        b = a + 1 if index2 is None else self._offset(index2)
        return full[a:b]

    def insert(self, index, chars, *args):
        a = min(self._offset(index), len(self._text))
        self._text = self._text[:a] + str(chars) + self._text[a:]

    def delete(self, index1, index2=None):
        a = min(self._offset(index1), len(self._text))
        b = a + 1 if index2 is None else min(self._offset(index2), len(self._text))
        self._text = self._text[:a] + self._text[b:]

    def see(self, index):
        pass

    def yview(self, *a):
        pass

    xview = yview

    def edit_undo(self):
        pass

    def tag_configure(self, *a, **k):
        pass

    tag_add = tag_remove = tag_config = mark_set = tag_configure

    def _props(self):
        p = _common(self)
        p['text'] = self._text
        return p


class Checkbutton(_Widget):
    _kind = 'checkbutton'
    _defaults = {'text': '', 'onvalue': 1, 'offvalue': 0}

    def _after_apply(self, opts):
        if self._opts.get('variable') is None:
            self._opts['variable'] = IntVar()

    def _is_on(self):
        v = self._opts['variable'].get()
        on = self._opts['onvalue']
        return v == on or (isinstance(v, bool) and v and on in (1, True))

    def _set(self, on):
        var = self._opts['variable']
        var.set(self._opts['onvalue'] if on else self._opts['offvalue'])

    def select(self):
        self._set(True)

    def deselect(self):
        self._set(False)

    def toggle(self):
        self._set(not self._is_on())

    def invoke(self):
        if self._opts.get('state') == 'disabled':
            return None
        self.toggle()
        cmd = self._opts.get('command')
        return _call(cmd) if cmd else None

    def _props(self):
        p = _common(self)
        p['text'] = str(self._opts.get('text', ''))
        p['checked'] = bool(self._is_on())
        return p


class Radiobutton(_Widget):
    _kind = 'radiobutton'
    _defaults = {'text': '', 'value': ''}

    def _after_apply(self, opts):
        if self._opts.get('variable') is None:
            self._opts['variable'] = StringVar()

    def _is_on(self):
        return self._opts['variable'].get() == self._opts['value'] or str(self._opts['variable'].get()) == str(self._opts['value'])

    def select(self):
        self._opts['variable'].set(self._opts['value'])

    def deselect(self):
        pass

    def invoke(self):
        if self._opts.get('state') == 'disabled':
            return None
        self.select()
        cmd = self._opts.get('command')
        return _call(cmd) if cmd else None

    def _props(self):
        p = _common(self)
        p['text'] = str(self._opts.get('text', ''))
        p['checked'] = bool(self._is_on())
        p['group'] = id(self._opts['variable'])
        return p


class Listbox(_Widget):
    _kind = 'listbox'
    _defaults = {'width': 20, 'height': 10, 'selectmode': 'browse'}

    def _after_apply(self, opts):
        if not hasattr(self, '_items'):
            self._items = []
            self._sel = []

    def _i(self, index):
        if index in ('end', END):
            return len(self._items)
        if index in ('active', 'anchor'):
            return self._sel[0] if self._sel else 0
        return int(index)

    def insert(self, index, *elements):
        i = self._i(index)
        self._items[i:i] = [str(e) for e in elements]

    def delete(self, first, last=None):
        a = self._i(first)
        b = a if last is None else (len(self._items) - 1 if last in ('end', END) else self._i(last))
        del self._items[a:b + 1]
        self._sel = [s for s in self._sel if s < len(self._items)]

    def get(self, first, last=None):
        a = self._i(first)
        if last is None:
            return self._items[a] if 0 <= a < len(self._items) else ''
        b = len(self._items) - 1 if last in ('end', END) else self._i(last)
        return tuple(self._items[a:b + 1])

    def size(self):
        return len(self._items)

    def curselection(self):
        return tuple(self._sel)

    def selection_set(self, first, last=None):
        a = self._i(first)
        b = a if last is None else self._i(last)
        sel = list(range(a, b + 1))
        self._sel = sorted(set(self._sel + sel)) if self._opts.get('selectmode') in ('multiple', 'extended') else sel[:1]

    select_set = selection_set

    def selection_clear(self, first=None, last=None):
        self._sel = []

    select_clear = selection_clear

    def activate(self, index):
        pass

    def see(self, index):
        pass

    def yview(self, *a):
        pass

    def _props(self):
        p = _common(self)
        p['items'] = list(self._items)
        p['selected'] = list(self._sel)
        p['selectmode'] = self._opts.get('selectmode')
        return p


class Scale(_Widget):
    _kind = 'scale'
    _defaults = {'from_': 0, 'to': 100, 'orient': 'vertical', 'resolution': 1, 'length': 100}

    def _after_apply(self, opts):
        if not hasattr(self, '_value'):
            self._value = self._opts['from_']
        var = self._opts.get('variable')
        if var is not None and 'variable' in opts:
            self._value = var.get()

    def _fmt(self, v):
        res = self._opts.get('resolution') or 1
        v = round(float(v) / res) * res
        lo, hi = float(self._opts['from_']), float(self._opts['to'])
        v = max(min(lo, hi), min(max(lo, hi), v))
        return int(v) if float(res).is_integer() and float(v).is_integer() else round(v, 10)

    def get(self):
        var = self._opts.get('variable')
        return var.get() if var is not None else self._value

    def set(self, value):
        self._value = self._fmt(value)
        var = self._opts.get('variable')
        if var is not None:
            var.set(self._value)

    def _props(self):
        p = _common(self)
        p.update({'from': self._opts['from_'], 'to': self._opts['to'], 'orient': self._opts['orient'], 'value': self.get(), 'label': self._opts.get('label') or '', 'length': self._opts['length'], 'resolution': self._opts['resolution'], 'showvalue': self._opts.get('showvalue', True)})
        return p


class Spinbox(Entry):
    _kind = 'spinbox'
    _defaults = {'from_': 0, 'to': 0, 'increment': 1, 'width': 20}

    def _props(self):
        p = Entry._props(self)
        p['from'] = self._opts['from_']
        p['to'] = self._opts['to']
        p['increment'] = self._opts['increment']
        vals = self._opts.get('values')
        p['values'] = [str(v) for v in vals] if vals else None
        return p


class OptionMenu(_Widget):
    _kind = 'optionmenu'

    def __init__(self, master, variable, value, *values, **kwargs):
        self._setup(master, None, kwargs)
        self._var = variable
        self._values = [str(value)] + [str(v) for v in values]
        self._opts['command'] = kwargs.get('command')
        if not variable.get():
            variable.set(value)

    def _props(self):
        p = _common(self)
        p['text'] = _var_text(self._var)
        p['values'] = list(self._values)
        return p


class Scrollbar(_Widget):
    _kind = 'scrollbar'
    _defaults = {'orient': 'vertical'}

    def set(self, *a):
        pass

    def _props(self):
        p = _common(self)
        p['orient'] = self._opts['orient']
        return p


class PhotoImage:
    def __init__(self, master=None, name=None, file=None, data=None, width=32, height=32, **kw):
        self._name = file or name or 'image'
        self._w = width
        self._h = height

    def width(self):
        return self._w

    def height(self):
        return self._h

    def subsample(self, x, y=None):
        return self

    zoom = subsample


class Message(Label):
    pass


class Canvas(_Widget):
    _kind = 'canvas'
    _defaults = {'width': 300, 'height': 150, 'background': None}

    def _after_apply(self, opts):
        if not hasattr(self, '_items'):
            self._items = []
            self._next_item = 1
            self._tag_bindings = {}

    def _create(self, kind, coords, kw):
        item = {'id': self._next_item, 'kind': kind, 'coords': [float(c) for c in coords], 'opts': {}}
        self._next_item += 1
        for k, v in kw.items():
            k = _canon(k)
            if k == 'tags':
                item['tags'] = [v] if isinstance(v, str) else list(v)
            elif k == 'font':
                item['opts']['font'] = _font(v)
            else:
                item['opts'][k] = v
        item.setdefault('tags', [])
        self._items.append(item)
        return item['id']

    def _flat(self, args):
        out = []
        for a in args:
            if isinstance(a, (list, tuple)):
                out.extend(a)
            else:
                out.append(a)
        return out

    def create_line(self, *args, **kw):
        return self._create('line', self._flat(args), kw)

    def create_rectangle(self, *args, **kw):
        return self._create('rectangle', self._flat(args), kw)

    def create_oval(self, *args, **kw):
        return self._create('oval', self._flat(args), kw)

    def create_polygon(self, *args, **kw):
        return self._create('polygon', self._flat(args), kw)

    def create_arc(self, *args, **kw):
        return self._create('arc', self._flat(args), kw)

    def create_text(self, *args, **kw):
        return self._create('text', self._flat(args), kw)

    def create_image(self, *args, **kw):
        kw = dict(kw)
        kw.pop('image', None)
        return self._create('image', self._flat(args), kw)

    def _select(self, tag):
        if tag in ('all', ALL):
            return list(self._items)
        if isinstance(tag, int) or (isinstance(tag, str) and tag.isdigit()):
            return [i for i in self._items if i['id'] == int(tag)]
        return [i for i in self._items if tag in i['tags']]

    def coords(self, tag, *new):
        items = self._select(tag)
        if not items:
            return []
        if new:
            items[0]['coords'] = [float(c) for c in self._flat(new)]
            return None
        return list(items[0]['coords'])

    def move(self, tag, dx, dy):
        for i in self._select(tag):
            i['coords'] = [c + (dx if n % 2 == 0 else dy) for n, c in enumerate(i['coords'])]

    def delete(self, *tags):
        for t in tags:
            gone = self._select(t)
            self._items = [i for i in self._items if i not in gone]

    def itemconfigure(self, tag, **kw):
        for i in self._select(tag):
            for k, v in kw.items():
                k = _canon(k)
                if k == 'text':
                    i['opts']['text'] = v
                elif k == 'tags':
                    i['tags'] = [v] if isinstance(v, str) else list(v)
                elif k == 'font':
                    i['opts']['font'] = _font(v)
                else:
                    i['opts'][k] = v

    itemconfig = itemconfigure

    def itemcget(self, tag, key):
        items = self._select(tag)
        return items[0]['opts'].get(_canon(key)) if items else None

    def find_all(self):
        return tuple(i['id'] for i in self._items)

    def find_withtag(self, tag):
        return tuple(i['id'] for i in self._select(tag))

    def addtag_withtag(self, tag, other):
        for i in self._select(other):
            if tag not in i['tags']:
                i['tags'].append(tag)

    def gettags(self, item):
        s = self._select(item)
        return tuple(s[0]['tags']) if s else ()

    def tag_raise(self, tag, above=None):
        for i in self._select(tag):
            self._items.remove(i)
            self._items.append(i)

    def tag_lower(self, tag, below=None):
        for i in reversed(self._select(tag)):
            self._items.remove(i)
            self._items.insert(0, i)

    def bbox(self, tag):
        items = self._select(tag)
        if not items:
            return None
        xs = [c for i in items for c in i['coords'][0::2]]
        ys = [c for i in items for c in i['coords'][1::2]]
        return (int(min(xs)), int(min(ys)), int(max(xs)), int(max(ys)))

    def tag_bind(self, tag, sequence=None, func=None, add=None):
        self._tag_bindings.setdefault(sequence, []).append((tag, func))

    def tag_unbind(self, tag, sequence, funcid=None):
        self._tag_bindings[sequence] = [(t, f) for t, f in self._tag_bindings.get(sequence, []) if t != tag]

    def focus_set(self):
        _S.focus = self

    def _props(self):
        p = _common(self)
        p['width'] = self._opts.get('width', 300)
        p['height'] = self._opts.get('height', 150)
        p['items'] = [{'id': i['id'], 'kind': i['kind'], 'coords': i['coords'], 'opts': i['opts'], 'tags': i['tags']} for i in self._items]
        return p


# ----------------------------------------------------------------------------- menus
class Menu(Misc):
    _kind = 'menu'

    def __init__(self, master=None, cnf=None, **kw):
        if master is None:
            master = _default_root()
        self._setup(master, cnf, kw, kind='menu')
        if self in master._children:
            master._children.remove(self)  # menus are not placed by a geometry manager
        self._entries = []

    def _add(self, kind, kw):
        e = {'type': kind}
        for k, v in kw.items():
            e[_canon(k)] = v
        self._entries.append(e)

    def add_command(self, cnf=None, **kw):
        self._add('command', dict(cnf or {}, **kw))

    def add_cascade(self, cnf=None, **kw):
        self._add('cascade', dict(cnf or {}, **kw))

    def add_separator(self, cnf=None, **kw):
        self._add('separator', {})

    def add_checkbutton(self, cnf=None, **kw):
        self._add('checkbutton', dict(cnf or {}, **kw))

    def add_radiobutton(self, cnf=None, **kw):
        self._add('radiobutton', dict(cnf or {}, **kw))

    def add(self, itemType, cnf=None, **kw):
        self._add(itemType, dict(cnf or {}, **kw))

    def delete(self, index1, index2=None):
        if index1 in ('end', END):
            self._entries = []
            return
        a = int(index1) if not isinstance(index1, str) or index1.isdigit() else 0
        b = a if index2 is None else (len(self._entries) - 1 if index2 in ('end', END) else int(index2))
        del self._entries[a:b + 1]

    def entryconfigure(self, index, **kw):
        e = self._entries[int(index)]
        for k, v in kw.items():
            e[_canon(k)] = v

    entryconfig = entryconfigure

    def tk_popup(self, x, y, entry=''):
        pass

    def post(self, x, y):
        pass

    def invoke_entry(self, index):
        e = self._entries[index]
        if e['type'] == 'checkbutton':
            var = e.get('variable')
            if var is not None:
                var.set(e.get('offvalue', 0) if var.get() == e.get('onvalue', 1) else e.get('onvalue', 1))
        elif e['type'] == 'radiobutton':
            var = e.get('variable')
            if var is not None:
                var.set(e.get('value'))
        cmd = e.get('command')
        return _call(cmd) if cmd else None

    def _menu_snapshot(self):
        items = []
        for n, e in enumerate(self._entries):
            it = {'type': e['type'], 'index': n, 'label': str(e.get('label', '')), 'state': e.get('state', 'normal')}
            if e['type'] == 'cascade' and isinstance(e.get('menu'), Menu):
                it['menu'] = e['menu']._menu_snapshot()
            if e['type'] in ('checkbutton', 'radiobutton'):
                var = e.get('variable')
                if var is not None:
                    if e['type'] == 'checkbutton':
                        it['checked'] = var.get() == e.get('onvalue', 1)
                    else:
                        it['checked'] = var.get() == e.get('value')
            items.append(it)
        return {'id': self._id, 'items': items}


# ----------------------------------------------------------------------------- ttk
class _TtkMixin:
    _valid = None

    def state(self, spec=None):
        if spec is None:
            return ()
        specs = spec if isinstance(spec, (list, tuple)) else [spec]
        if 'disabled' in specs:
            self._opts['state'] = 'disabled'
        elif '!disabled' in specs:
            self._opts['state'] = 'normal'

    def instate(self, spec):
        return self._opts.get('state') == 'disabled' if 'disabled' in spec else False


class ttk_Label(_TtkMixin, Label):
    pass


class ttk_Button(_TtkMixin, Button):
    pass


class ttk_Entry(_TtkMixin, Entry):
    pass


class ttk_Frame(_TtkMixin, Frame):
    pass


class ttk_LabelFrame(_TtkMixin, LabelFrame):
    pass


class ttk_Checkbutton(_TtkMixin, Checkbutton):
    pass


class ttk_Radiobutton(_TtkMixin, Radiobutton):
    pass


class ttk_Scale(_TtkMixin, Scale):
    pass


class ttk_Spinbox(_TtkMixin, Spinbox):
    pass


class ttk_Scrollbar(_TtkMixin, Scrollbar):
    pass


class Combobox(_TtkMixin, Entry):
    _kind = 'combobox'
    _defaults = {'width': 20, 'values': ()}

    def current(self, newindex=None):
        vals = list(self._opts.get('values') or ())
        if newindex is None:
            t = self._current()
            return vals.index(t) if t in vals else -1
        self._set_text(vals[newindex])

    def set(self, value):
        self._set_text(value)

    def _props(self):
        p = Entry._props(self)
        p['values'] = [str(v) for v in (self._opts.get('values') or ())]
        return p


class Progressbar(_TtkMixin, _Widget):
    _kind = 'progressbar'
    _defaults = {'orient': 'horizontal', 'length': 100, 'maximum': 100, 'value': 0, 'mode': 'determinate'}

    def step(self, amount=1.0):
        self._opts['value'] = (self._opts['value'] + amount) % (self._opts['maximum'] or 1)

    def start(self, interval=None):
        pass

    def stop(self):
        pass

    def _props(self):
        p = _common(self)
        p.update({'orient': self._opts['orient'], 'length': self._opts['length'], 'maximum': self._opts['maximum'], 'value': self._opts['value'], 'mode': self._opts['mode']})
        return p


class Separator(_TtkMixin, _Widget):
    _kind = 'separator'
    _defaults = {'orient': 'horizontal'}

    def _props(self):
        return {'orient': self._opts['orient']}


class Notebook(_TtkMixin, _Widget):
    _kind = 'notebook'

    def _after_apply(self, opts):
        if not hasattr(self, '_tabs'):
            self._tabs = []
            self._selected = 0

    def add(self, child, **kw):
        self._tabs.append((child, str(kw.get('text', ''))))

    def select(self, tab_id=None):
        if tab_id is None:
            return self._tabs[self._selected][0] if self._tabs else None
        for n, (c, _) in enumerate(self._tabs):
            if c is tab_id or n == tab_id:
                self._selected = n

    def tabs(self):
        return [c for c, _ in self._tabs]

    def _props(self):
        return {'tabs': [{'id': c._id, 'text': t} for c, t in self._tabs if c._alive], 'selected': self._selected}

    def _snapshot(self):
        d = Misc._snapshot(self)
        d['children'] = [c._snapshot() for c, _ in self._tabs if c._alive]
        for ch in d['children']:
            ch['geom'] = {'manager': 'notebook', 'opts': {}}
        return d


class Style:
    def __init__(self, master=None):
        pass

    def configure(self, *a, **k):
        pass

    map = layout = theme_use = theme_names = configure


# ----------------------------------------------------------------------------- dialogs
def _dialog(kind, title, message, answer):
    _S.dialogs.append({'id': len(_S.dialogs) + 1, 'kind': kind, 'title': str(title or ''), 'message': str(message or ''), 'answer': answer if isinstance(answer, (str, bool, int, float, type(None))) else str(answer)})
    return answer


class _Messagebox:
    ERROR, INFO, QUESTION, WARNING = 'error', 'info', 'question', 'warning'
    ABORTRETRYIGNORE, OK, OKCANCEL, RETRYCANCEL, YESNO, YESNOCANCEL = 'abortretryignore', 'ok', 'okcancel', 'retrycancel', 'yesno', 'yesnocancel'

    @staticmethod
    def showinfo(title=None, message=None, **kw):
        return _dialog('showinfo', title, message, 'ok')

    @staticmethod
    def showwarning(title=None, message=None, **kw):
        return _dialog('showwarning', title, message, 'ok')

    @staticmethod
    def showerror(title=None, message=None, **kw):
        return _dialog('showerror', title, message, 'ok')

    @staticmethod
    def askyesno(title=None, message=None, **kw):
        return _dialog('askyesno', title, message, True)

    @staticmethod
    def askokcancel(title=None, message=None, **kw):
        return _dialog('askokcancel', title, message, True)

    @staticmethod
    def askretrycancel(title=None, message=None, **kw):
        return _dialog('askretrycancel', title, message, True)

    @staticmethod
    def askquestion(title=None, message=None, **kw):
        return _dialog('askquestion', title, message, 'yes')

    @staticmethod
    def askyesnocancel(title=None, message=None, **kw):
        return _dialog('askyesnocancel', title, message, True)


messagebox = _Messagebox()


class _Simpledialog:
    @staticmethod
    def askstring(title, prompt, **kw):
        return _dialog('askstring', title, prompt, None)

    @staticmethod
    def askinteger(title, prompt, **kw):
        return _dialog('askinteger', title, prompt, None)

    @staticmethod
    def askfloat(title, prompt, **kw):
        return _dialog('askfloat', title, prompt, None)


simpledialog = _Simpledialog()


class _Filedialog:
    @staticmethod
    def askopenfilename(**kw):
        return _dialog('askopenfilename', kw.get('title', 'Dosya aç'), 'Simülatörde dosya seçilemez; iptal edildi.', '')

    @staticmethod
    def asksaveasfilename(**kw):
        return _dialog('asksaveasfilename', kw.get('title', 'Farklı kaydet'), 'Simülatörde dosya seçilemez; iptal edildi.', '')

    @staticmethod
    def askdirectory(**kw):
        return _dialog('askdirectory', kw.get('title', 'Klasör seç'), 'Simülatörde klasör seçilemez; iptal edildi.', '')

    @staticmethod
    def askopenfilenames(**kw):
        return _dialog('askopenfilenames', kw.get('title', 'Dosya aç'), 'Simülatörde dosya seçilemez; iptal edildi.', ())


filedialog = _Filedialog()


class _Colorchooser:
    @staticmethod
    def askcolor(color=None, **kw):
        return _dialog('askcolor', kw.get('title', 'Renk seç'), 'Simülatörde renk seçici yoktur; iptal edildi.', (None, None))


colorchooser = _Colorchooser()


# ----------------------------------------------------------------------------- event dispatch
def _chain(widget):
    w = widget
    while w is not None:
        yield w
        w = w.master


def _dispatch_event(widget, ev, **extra):
    """Calls matching bind() callbacks on the widget and its ancestors (a simplification of Tk's bindtags)."""
    e = Event(widget=widget, **{k: v for k, v in ev.items() if k in ('x', 'y', 'char', 'keysym', 'num', 'delta', 'width', 'height', 'x_root', 'y_root')})
    for w in _chain(widget):
        for seq, func in list(w._bindings):
            if _seq_matches(seq, ev):
                _call(func, e)
    if isinstance(widget, Canvas) and ev['kind'] == 'mouse':
        for seq, lst in list(widget._tag_bindings.items()):
            if _seq_matches(seq, ev):
                hit = ev.get('items') or []
                for tag, func in lst:
                    ids = {i['id'] for i in widget._select(tag)}
                    if ids & set(hit):
                        _call(func, e)


def _dispatch(ev):
    """Entry point for UI events (see src/ui/TkWindow.tsx)."""
    k = ev.get('kind')
    wid = ev.get('id')
    w = _S.widgets.get(wid)
    if k == 'after':
        job = _S.after.pop(ev.get('job'), None)
        if job:
            _call(job['func'], *job['args'])
        return
    if k == 'close':
        win = w
        if win is None or not win._alive:
            return
        handler = getattr(win, '_protocols', {}).get('WM_DELETE_WINDOW')
        if handler:
            _call(handler)
        else:
            win.destroy()
        return
    if k == 'menu':
        m = w
        if isinstance(m, Menu):
            m.invoke_entry(int(ev.get('index', 0)))
        return
    if w is None or not w._alive:
        return
    if k == 'click':
        if isinstance(w, (Button, Checkbutton, Radiobutton)):
            w.invoke()
        _dispatch_event(w, {'kind': 'mouse', 'type': 'down', 'num': 1, 'x': ev.get('x', 0), 'y': ev.get('y', 0)})
    elif k == 'input':
        val = ev.get('value', '')
        if isinstance(w, Text):
            w._text = str(val)
        elif isinstance(w, Entry):
            w._set_text(val)
        elif isinstance(w, Scale):
            w.set(val)
            cmd = w._opts.get('command')
            if cmd:
                _call(cmd, str(w.get()))
    elif k == 'select':
        if isinstance(w, Listbox):
            w._sel = [int(i) for i in ev.get('indices', [])]
            _dispatch_event(w, {'kind': 'virtual', 'virtual': '<<ListboxSelect>>'})
        elif isinstance(w, Combobox):
            w._set_text(ev.get('value', ''))
            _dispatch_event(w, {'kind': 'virtual', 'virtual': '<<ComboboxSelected>>'})
        elif isinstance(w, OptionMenu):
            w._var.set(ev.get('value', ''))
            cmd = w._opts.get('command')
            if cmd:
                _call(cmd, ev.get('value', ''))
        elif isinstance(w, Notebook):
            w._selected = int(ev.get('index', 0))
            _dispatch_event(w, {'kind': 'virtual', 'virtual': '<<NotebookTabChanged>>'})
        elif isinstance(w, Spinbox):
            w._set_text(ev.get('value', ''))
            cmd = w._opts.get('command')
            if cmd:
                _call(cmd)
    elif k == 'key':
        _S.focus = w
        _dispatch_event(w, ev)
    elif k == 'mouse':
        _dispatch_event(w, ev)


def mainloop(n=0):
    _S.mainloop = True


def _snapshot():
    wins = [w for w in _S.windows if True]
    if not wins:
        return None
    jobs = [{'id': jid, 'delay': j['delay']} for jid, j in _S.after.items()]
    return {
        'runId': _S.run_id,
        'mainloop': _S.mainloop,
        'windows': [w._snapshot() for w in wins],
        'dialogs': list(_S.dialogs),
        'afterJobs': jobs,
    }


class _Sub:
    pass


def _install():
    """Registers tkinter.messagebox / ttk / ... as importable submodules."""
    import types
    root = sys.modules[__name__]

    def sub(name, attrs):
        m = types.ModuleType('tkinter.' + name)
        m.__dict__.update(attrs)
        sys.modules['tkinter.' + name] = m
        setattr(root, name, m)
        return m

    def methods(obj):
        return {n: getattr(obj, n) for n in dir(obj) if not n.startswith('_')}

    sub('messagebox', methods(messagebox))
    sub('simpledialog', methods(simpledialog))
    sub('filedialog', methods(filedialog))
    sub('colorchooser', methods(colorchooser))
    sub('font', {'Font': Font, 'families': lambda root=None: ('Arial', 'Courier', 'Helvetica', 'Times', 'Verdana'), 'nametofont': lambda name, root=None: Font(), 'NORMAL': 'normal', 'BOLD': 'bold', 'ITALIC': 'italic', 'ROMAN': 'roman'})
    sub('scrolledtext', {'ScrolledText': Text})
    sub('ttk', {
        'Label': ttk_Label, 'Button': ttk_Button, 'Entry': ttk_Entry, 'Frame': ttk_Frame, 'LabelFrame': ttk_LabelFrame, 'Labelframe': ttk_LabelFrame,
        'Checkbutton': ttk_Checkbutton, 'Radiobutton': ttk_Radiobutton, 'Scale': ttk_Scale, 'Spinbox': ttk_Spinbox, 'Scrollbar': ttk_Scrollbar,
        'Combobox': Combobox, 'Progressbar': Progressbar, 'Separator': Separator, 'Notebook': Notebook, 'Style': Style,
    })


__all__ = [n for n in list(globals()) if not n.startswith('_') and n not in (
    'sys', 'traceback', 'messagebox', 'simpledialog', 'filedialog', 'colorchooser', 'Style', 'Combobox', 'Progressbar', 'Separator',
    'Notebook', 'ttk_Label', 'ttk_Button', 'ttk_Entry', 'ttk_Frame', 'ttk_LabelFrame', 'ttk_Checkbutton', 'ttk_Radiobutton',
    'ttk_Scale', 'ttk_Spinbox', 'ttk_Scrollbar', 'Variable_', 'OptionMenu_')]
`)+`

def __install_tkinter`);let t=null;self.onmessage=async n=>{let r=n.data;try{if(r.type===`init`)t=await(await import(
/* @vite-ignore */
`${r.baseUrl}pyodide.mjs`)).loadPyodide({indexURL:r.baseUrl}),t.runPython(e),self.postMessage({type:`ready`});else if(r.type===`run`&&t){let e=t.globals.get(`__pylearn_run`)(r.code,t.toPy(r.stdin),r.echoInput);self.postMessage({type:`result`,id:r.id,raw:e})}else if(r.type===`tk`&&t){let e=t.globals.get(`__pylearn_tk_event`);self.postMessage({type:`tkresult`,id:r.id,raw:e(r.raw)})}}catch(e){self.postMessage({type:`fatal`,id:r.id,message:String(e)})}};