let e=null;self.onmessage=async t=>{let n=t.data;try{if(n.type===`init`)e=await(await import(
/* @vite-ignore */
`${n.baseUrl}pyodide.mjs`)).loadPyodide({indexURL:n.baseUrl}),e.runPython(`
import sys, io, json, traceback, contextlib

def __pylearn_run(code, stdin, echo):
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
    import types
    variables = []
    for k, v in list(env.items()):
        if k.startswith("__") or k == "input" or isinstance(v, (types.ModuleType, types.FunctionType, type)):
            continue
        try:
            r = repr(v)
        except BaseException:
            r = "<repr hatası>"
        variables.append({"name": k, "type": type(v).__name__, "repr": r[:80]})
    return json.dumps({"stdout": buf.getvalue(), "error": err, "variables": variables})
`),self.postMessage({type:`ready`});else if(n.type===`run`&&e){let t=e.globals.get(`__pylearn_run`)(n.code,e.toPy(n.stdin),n.echoInput);self.postMessage({type:`result`,id:n.id,raw:t})}}catch(e){self.postMessage({type:`fatal`,id:n.id,message:String(e)})}};