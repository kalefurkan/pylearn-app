const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Practice-DEeQZJ_r.js","assets/rolldown-runtime-XKyaHtl9.js","assets/chunk-OB3PAWPO-CAG0IXpN.js","assets/preload-helper-CHmBYsXX.js","assets/progress-CHrFOBPs.js","assets/AppContext-CTOenIfh.js","assets/repositories-D0RzHb_V.js","assets/StudentAccess-Bv8lx_4X.js","assets/AccountContext-PAVIDes-.js","assets/assignments-BCaOnbct.js","assets/states-BN4NpAF8.js","assets/Icon-BK9nSP2u.js","assets/widgets-BGl7CeRY.js","assets/ReviewViews-2gNxR7oG.js","assets/SkillViews-7odfuhmU.js","assets/Workbench-LNk0NtsT.js","assets/actions-385Y432i.js","assets/hash-DyiVAXZc.js","assets/grader-UqFgeSrO.js","assets/Teacher-BTG6_PNm.js","assets/Institution-5VgvQifR.js","assets/grade-BpEFHkdr.js","assets/TeacherAssignments-CcekfHHE.js","assets/Admin-BIBq1EeL.js","assets/Support-DJnguG0L.js","assets/Assignments-B13C4PfM.js","assets/Auth-B0oJmv-w.js","assets/Privacy-C9plknAD.js","assets/Onboarding-Dv9JCDqm.js","assets/Learn-qtIuGnx2.js","assets/Lesson-B-NSXjNt.js","assets/Account-Z7Evj5Y2.js","assets/TeacherReports-DcbbFSHo.js","assets/TeacherTasks-BqGwjAhL.js","assets/TaskPage-kCoQvCJP.js","assets/MiniTest-DvgQdNty.js","assets/Quiz-DxA3IbZQ.js","assets/QuizPage-DGXr85Ew.js","assets/esm-CmTkgZiW.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./rolldown-runtime-XKyaHtl9.js";import{a as n,d as r,f as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./chunk-OB3PAWPO-CAG0IXpN.js";import{C as d,S as f,T as p,_ as m,b as h,f as g,g as _,k as v,n as y,o as b,r as ee,s as te,t as ne,u as re,v as x,x as ie,y as ae}from"./AccountContext-PAVIDes-.js";import{t as S}from"./preload-helper-CHmBYsXX.js";import{f as oe,i as se,l as ce,n as le,o as ue,p as de,r as fe,s as pe}from"./progress-CHrFOBPs.js";import{n as me,t as he}from"./repositories-D0RzHb_V.js";import{b as ge,n as _e,t as ve}from"./AppContext-CTOenIfh.js";import{r as ye,t as be}from"./assignments-BCaOnbct.js";import{c as xe,i as Se,n as Ce,r as we,t as Te}from"./StudentAccess-Bv8lx_4X.js";import{n as C,r as w,t as Ee}from"./states-BN4NpAF8.js";import{t as De}from"./Icon-BK9nSP2u.js";import{a as Oe,i as ke,o as Ae,s as je}from"./widgets-BGl7CeRY.js";import{r as Me}from"./ReviewViews-2gNxR7oG.js";import{t as Ne}from"./Assignments-B13C4PfM.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Pe=t((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,te||(te=!0,S());else{var t=n(l);t!==null&&ce(ee,t.startTime-e)}}}var te=!1,ne=-1,re=5,x=-1;function ie(){return g?!0:!(e.unstable_now()-x<re)}function ae(){if(g=!1,te){var t=e.unstable_now();x=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ne),ne=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ie());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ce(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?S():te=!1}}}var S;if(typeof y==`function`)S=function(){y(ae)};else if(typeof MessageChannel<`u`){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=ae,S=function(){se.postMessage(null)}}else S=function(){_(ae,0)};function ce(t,n){ne=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):re=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ne),ne=-1):h=!0,ce(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te||(te=!0,S()))),r},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),Fe=t(((e,t)=>{t.exports=Pe()})),Ie=t((e=>{var t=i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`),s=Symbol.for(`react.recoverable`),c=Symbol.for(`react.optimistic_key`);function l(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:r===c?c:``+r,children:e,containerInfo:t,implementation:n}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.browser=function(e){return{$$typeof:s,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return l(e,t,null,r)},e.flushSync=function(e){var t=u.T,n=a.p;try{if(u.T=null,a.p=2,e)return e()}finally{u.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return u.H.useFormState(e,t,n)},e.useFormStatus=function(){return u.H.useHostTransitionStatus()},e.version=`19.3.1`})),Le=t(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Ie()})),Re=t((e=>{var t=Fe(),n=i(),r=Le();function a(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function c(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function d(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(a(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var c=!1,l=i.child;l;){if(l===n){c=!0,n=i,r=o;break}if(l===r){c=!0,r=i,n=o;break}l=l.sibling}if(!c){for(l=o.child;l;){if(l===n){c=!0,n=o,r=i;break}if(l===r){c=!0,r=o,n=i;break}l=l.sibling}if(!c)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function p(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&p(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function m(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function h(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function g(e){var t=[null,null],n=m(e);return n===null||_(t,e,n.child,{foundSelf:!1}),t}function _(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&_(e,t,n.child,r))return!0;n=n.sibling}return!1}function v(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(a(559))}}var y=null,b=null;function ee(e,t,n){return e===n||e===t&&(y=e,!0)}function te(e,t,n){return e===n?(b=e,!1):e===t&&(b!==null&&(y=e),!0)}function ne(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function re(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var x=Object.assign,ie=Symbol.for(`react.element`),ae=Symbol.for(`react.transitional.element`),S=Symbol.for(`react.portal`),oe=Symbol.for(`react.fragment`),se=Symbol.for(`react.strict_mode`),ce=Symbol.for(`react.profiler`),le=Symbol.for(`react.consumer`),ue=Symbol.for(`react.context`),de=Symbol.for(`react.forward_ref`),fe=Symbol.for(`react.suspense`),pe=Symbol.for(`react.suspense_list`),me=Symbol.for(`react.memo`),he=Symbol.for(`react.lazy`),ge=Symbol.for(`react.activity`),_e=Symbol.for(`react.legacy_hidden`),ve=Symbol.for(`react.memo_cache_sentinel`),ye=Symbol.for(`react.view_transition`),be=Symbol.for(`react.recoverable`),xe=Symbol.iterator;function Se(e){return typeof e!=`object`||!e?null:(e=xe&&e[xe]||e[`@@iterator`],typeof e==`function`?e:null)}var Ce=Symbol.for(`react.client.reference`);function we(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case oe:return`Fragment`;case ce:return`Profiler`;case se:return`StrictMode`;case fe:return`Suspense`;case pe:return`SuspenseList`;case ge:return`Activity`;case ye:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case S:return`Portal`;case ue:return e.displayName||`Context`;case le:return(e._context.displayName||`Context`)+`.Consumer`;case de:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case me:return t=e.displayName||null,t===null?we(e.type)||`Memo`:t;case he:t=e._payload,e=e._init;try{return we(e(t))}catch{}}return null}var Te=Array.isArray,C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},De=[],Oe=-1;function ke(e){return{current:e}}function Ae(e){0>Oe||(e.current=De[Oe],De[Oe]=null,Oe--)}function je(e,t){Oe++,De[Oe]=e.current,e.current=t}var Me=ke(null),Ne=ke(null),Pe=ke(null),Ie=ke(null);function Re(e,t){switch(je(Pe,t),je(Ne,e),je(Me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Ae(Me),je(Me,e)}function ze(){Ae(Me),Ae(Ne),Ae(Pe)}function T(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,je(Ie,e)),t=Me.current;var n=dp(t,e.type);t!==n&&(je(Ne,e),je(Me,n))}function Be(e){Ne.current===e&&(Ae(Me),Ae(Ne)),Ie.current===e&&(Ae(Ie),sh._currentValue=Ee)}var Ve,He;function Ue(e){if(Ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ve=t&&t[1]||``,He=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ve+e+He}var We=!1;function Ge(e,t){if(!e||We)return``;We=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{We=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ue(n):``}function Ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ue(e.type);case 16:return Ue(`Lazy`);case 13:return e.child!==t&&t!==null?Ue(`Suspense Fallback`):Ue(`Suspense`);case 19:return Ue(`SuspenseList`);case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return Ue(`Activity`);case 30:return Ue(`ViewTransition`);default:return``}}function qe(e){try{var t=``,n=null;do t+=Ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Je=Object.prototype.hasOwnProperty,Ye=t.unstable_scheduleCallback,Xe=t.unstable_cancelCallback,Ze=t.unstable_shouldYield,Qe=t.unstable_requestPaint,$e=t.unstable_now,et=t.unstable_getCurrentPriorityLevel,tt=t.unstable_ImmediatePriority,nt=t.unstable_UserBlockingPriority,rt=t.unstable_NormalPriority,it=t.unstable_LowPriority,at=t.unstable_IdlePriority,ot=t.log,st=t.unstable_setDisableYieldValue,ct=null,lt=null;function ut(e){if(typeof ot==`function`&&st(e),lt&&typeof lt.setStrictMode==`function`)try{lt.setStrictMode(ct,e)}catch{}}var dt=Math.clz32?Math.clz32:mt,ft=Math.log,pt=Math.LN2;function mt(e){return e>>>=0,e===0?32:31-(ft(e)/pt|0)|0}var ht=256,gt=262144,_t=4194304;function vt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=vt(n))):i=vt(o):i=vt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=vt(n))):i=vt(o)):i=vt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function bt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-dt(n),i=1<<r;t|=e[r],n&=~i}return t}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-dt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-dt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function kt(e,t){var n=t&-t;return n=n&42?1:At(n),(n&(e.suspendedLanes|t))===0?n:0}function At(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Mt(){var e=w.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Nt(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var Pt=Math.random().toString(36).slice(2),E=`__reactFiber$`+Pt,Ft=`__reactProps$`+Pt,It=`__reactContainer$`+Pt,Lt=`__reactEvents$`+Pt,Rt=`__reactListeners$`+Pt,zt=`__reactHandles$`+Pt,Bt=`__reactResources$`+Pt,Vt=`__reactMarker$`+Pt,Ht=`__reactLoad$`+Pt;function Ut(e){delete e[E],delete e[Ft],delete e[Rt],delete e[zt]}function Wt(e){var t;if(t=e[E])return t;for(var n=e.parentNode;n;){if(t=n[It]||n[E]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[E])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Gt(e){if(e=e[E]||e[It]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Kt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function qt(e){var t=e[Bt];return t||=e[Bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Jt(e){e[Vt]=!0}function Yt(e){e[Ht]=void 0}var Xt=new Set,Zt={};function Qt(e,t){$t(e,t),$t(e+`Capture`,t)}function $t(e,t){for(Zt[e]=t,e=0;e<t.length;e++)Xt.add(t[e])}var en=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),tn={},nn={};function rn(e){return Je.call(nn,e)?!0:Je.call(tn,e)?!1:en.test(e)?nn[e]=!0:(tn[e]=!0,!1)}var D=!1;function an(){var e=D;return D=!1,e}function on(e,t,n){if(rn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function sn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function cn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function ln(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function un(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function dn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fn(e){if(!e._valueTracker){var t=un(e)?`checked`:`value`;e._valueTracker=dn(e,t,``+e[t])}}function pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=un(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var mn=/[\n"\\]/g;function hn(e){return e.replace(mn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function gn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+ln(t)):e.value!==``+ln(t)&&(e.value=``+ln(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):vn(e,ln(n)):o===`number`&&e.value==t?vn(e,ln(e.value)):vn(e,ln(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+ln(s):e.removeAttribute(`name`)}function _n(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){fn(e);return}n=n==null?``:``+ln(n),t=t==null?n:``+ln(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),fn(e)}function vn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bn(e,t,n){t!=null&&(t=``+ln(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+ln(n)}function xn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(Te(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n??=``,t=n}n=ln(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),fn(e)}function Sn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function wn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Cn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,D=!0);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&(wn(e,i,r),D=!0)}else for(var o in t)t.hasOwnProperty(o)&&wn(e,o,t[o])}function En(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Dn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),On=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return On.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function An(){}var jn=null;function Mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nn=null,Pn=null;function Fn(e){var t=Gt(e);if(t&&(e=t.stateNode)){var n=e[Ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(gn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+hn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Ft]||null;if(!i)throw Error(a(90));gn(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&pn(r)}break a;case`textarea`:bn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}}}var In=!1;function Ln(e,t,n){if(In)return e(t,n);In=!0;try{return e(t)}finally{if(In=!1,(Nn!==null||Pn!==null)&&(Rd(),Nn&&(t=Nn,e=Pn,Pn=Nn=null,Fn(t),e)))for(t=0;t<e.length;t++)Fn(e[t])}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(a(231,t,typeof n));return n}var zn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Bn=!1;if(zn)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Bn=!0}}),window.addEventListener(`test`,Vn,Vn),window.removeEventListener(`test`,Vn,Vn)}catch{Bn=!1}var Hn=null,Un=null,Wn=null;function Gn(){if(Wn)return Wn;var e,t=Un,n=t.length,r,i=`value`in Hn?Hn.value:Hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Wn=i.slice(e,1<r?1-r:void 0)}function Kn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Jn(){return!1}function Yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?qn:Jn,this.isPropagationStopped=Jn,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=Yn(Xn),Qn=x({},Xn,{view:0,detail:0}),$n=Yn(Qn),er,tr,nr,O=x({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==nr&&(nr&&e.type===`mousemove`?(er=e.screenX-nr.screenX,tr=e.screenY-nr.screenY):tr=er=0,nr=e),er)},movementY:function(e){return`movementY`in e?e.movementY:tr}}),rr=Yn(O),ir=Yn(x({},O,{dataTransfer:0})),ar=Yn(x({},Qn,{relatedTarget:0})),or=Yn(x({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0})),sr=Yn(x({},Xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),cr=Yn(x({},Xn,{data:0})),lr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},ur={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},dr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function fr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dr[e])?!!t[e]:!1}function pr(){return fr}var mr=Yn(x({},Qn,{key:function(e){if(e.key){var t=lr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Kn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?ur[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(e){return e.type===`keypress`?Kn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Kn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),hr=Yn(x({},O,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gr=Yn(x({},Xn,{submitter:0})),_r=Yn(x({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr})),vr=Yn(x({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),yr=Yn(x({},O,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),br=Yn(x({},Xn,{newState:0,oldState:0,source:0})),xr=[9,13,27,32],Sr=zn&&`CompositionEvent`in window,Cr=null;zn&&`documentMode`in document&&(Cr=document.documentMode);var wr=zn&&`TextEvent`in window&&!Cr,Tr=zn&&(!Sr||Cr&&8<Cr&&11>=Cr),Er=` `,Dr=!1;function Or(e,t){switch(e){case`keyup`:return xr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function kr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Ar=!1;function jr(e,t){switch(e){case`compositionend`:return kr(t);case`keypress`:return t.which===32?(Dr=!0,Er):null;case`textInput`:return e=t.data,e===Er&&Dr?null:e;default:return null}}function Mr(e,t){if(Ar)return e===`compositionend`||!Sr&&Or(e,t)?(e=Gn(),Wn=Un=Hn=null,Ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Tr&&t.locale!==`ko`?null:t.data;default:return null}}var Nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Nr[e.type]:t===`textarea`}function Fr(e,t,n,r){Nn?Pn?Pn.push(r):Pn=[r]:Nn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Lr=null;function Rr(e){Vf(e,0)}function zr(e){if(pn(Kt(e)))return e}function Br(e,t){if(e===`change`)return t}var Vr=!1;if(zn){var Hr;if(zn){var Ur=`oninput`in document;if(!Ur){var Wr=document.createElement(`div`);Wr.setAttribute(`oninput`,`return;`),Ur=typeof Wr.oninput==`function`}Hr=Ur}else Hr=!1;Vr=Hr&&(!document.documentMode||9<document.documentMode)}function Gr(){Ir&&(Ir.detachEvent(`onpropertychange`,Kr),Lr=Ir=null)}function Kr(e){if(e.propertyName===`value`&&zr(Lr)){var t=[];Fr(t,Lr,e,Mn(e)),Ln(Rr,t)}}function qr(e,t,n){e===`focusin`?(Gr(),Ir=t,Lr=n,Ir.attachEvent(`onpropertychange`,Kr)):e===`focusout`&&Gr()}function Jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return zr(Lr)}function Yr(e,t){if(e===`click`)return zr(t)}function Xr(e,t){if(e===`input`||e===`change`)return zr(t)}function Zr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Qr=typeof Object.is==`function`?Object.is:Zr;function $r(e,t){if(Qr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Je.call(t,i)||!Qr(e[i],t[i]))return!1}return!0}function ei(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function k(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ti(e,t){var n=k(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=k(n)}}function ni(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ni(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ri(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ei(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var ai=zn&&`documentMode`in document&&11>=document.documentMode,oi=null,si=null,ci=null,li=!1;function ui(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;li||oi==null||oi!==ei(r)||(r=oi,`selectionStart`in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ci&&$r(ci,r)||(ci=r,r=Jf(si,`onSelect`),0<r.length&&(t=new Zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=oi)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var fi={animationend:di(`Animation`,`AnimationEnd`),animationiteration:di(`Animation`,`AnimationIteration`),animationstart:di(`Animation`,`AnimationStart`),transitionrun:di(`Transition`,`TransitionRun`),transitionstart:di(`Transition`,`TransitionStart`),transitioncancel:di(`Transition`,`TransitionCancel`),transitionend:di(`Transition`,`TransitionEnd`)},pi={},mi={};zn&&(mi=document.createElement(`div`).style,`AnimationEvent`in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),`TransitionEvent`in window||delete fi.transitionend.transition);function hi(e){if(pi[e])return pi[e];if(!fi[e])return e;var t=fi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mi)return pi[e]=t[n];return e}var gi=hi(`animationend`),_i=hi(`animationiteration`),vi=hi(`animationstart`),yi=hi(`transitionrun`),bi=hi(`transitionstart`),xi=hi(`transitioncancel`),Si=hi(`transitionend`),Ci=new Map,wi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);wi.push(`scrollEnd`);function Ti(e,t){Ci.set(e,t),Qt(t,[e])}var Ei=0;function Di(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=Ei++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Oi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function ki(e,t){return e=Oi(e),t=Oi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ji=[],Mi=0,Ni=0;function Pi(){for(var e=Mi,t=Ni=Mi=0;t<e;){var n=ji[t];ji[t++]=null;var r=ji[t];ji[t++]=null;var i=ji[t];ji[t++]=null;var a=ji[t];if(ji[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ri(n,i,a)}}function Fi(e,t,n,r){ji[Mi++]=e,ji[Mi++]=t,ji[Mi++]=n,ji[Mi++]=r,Ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ii(e,t,n,r){return Fi(e,t,n,r),zi(e)}function Li(e,t){return Fi(e,null,null,t),zi(e)}function Ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-dt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function zi(e){if(50<Od)throw Od=0,kd=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Bi={};function Vi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(e,t,n,r){return new Vi(e,t,n,r)}function Ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,t){var n=e.alternate;return n===null?(n=Hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Gi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ki(e,t,n,r,i,o){var s=0;if(r=e,typeof r==`function`)Ui(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ge:return e=Hi(31,n,t,i),e.elementType=ge,e.lanes=o,e;case oe:return qi(n.children,i,o,t);case se:s=8,i|=24;break;case ce:return e=Hi(12,n,t,i|2),e.elementType=ce,e.lanes=o,e;case fe:return e=Hi(13,n,t,i),e.elementType=fe,e.lanes=o,e;case pe:return e=Hi(19,n,t,i),e.elementType=pe,e.lanes=o,e;case _e:case ye:return e=i|32,e=Hi(30,n,t,e),e.elementType=ye,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ue:s=10;break a;case le:s=9;break a;case de:s=11;break a;case me:s=14;break a;case he:s=16,r=null;break a}s=29,n=Error(a(130,e===null?`null`:typeof e,``)),r=null}return t=Hi(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qi(e,t,n,r){return e=Hi(7,e,r,t),e.lanes=n,e}function Ji(e,t,n){return e=Hi(6,e,null,t),e.lanes=n,e}function Yi(e){var t=Hi(18,null,null,0);return t.stateNode=e,t}function Xi(e,t,n){return t=Hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zi=new WeakMap;function Qi(e,t){if(typeof e==`object`&&e){var n=Zi.get(e);return n===void 0?(t={value:e,source:t,stack:qe(t)},Zi.set(e,t),t):n}return{value:e,source:t,stack:qe(t)}}var $i=[],ea=0,ta=null,na=0,ra=[],ia=0,aa=null,oa=1,sa=``;function ca(e,t){$i[ea++]=na,$i[ea++]=ta,ta=e,na=t}function la(e,t,n){ra[ia++]=oa,ra[ia++]=sa,ra[ia++]=aa,aa=e;var r=oa;e=sa;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var a=32-dt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,oa=1<<32-dt(t)+i|n<<i|r,sa=a+e}else oa=1<<a|n<<i|r,sa=e}function ua(e){e.return!==null&&(ca(e,1),la(e,1,0))}function da(e){for(;e===ta;)ta=$i[--ea],$i[ea]=null,na=$i[--ea],$i[ea]=null;for(;e===aa;)aa=ra[--ia],ra[ia]=null,sa=ra[--ia],ra[ia]=null,oa=ra[--ia],ra[ia]=null}function fa(e,t){ra[ia++]=oa,ra[ia++]=sa,ra[ia++]=aa,oa=t.id,sa=t.overflow,aa=e}var pa=null,A=null,j=!1,ma=null,ha=!1,ga=Error(a(519));function _a(e){throw Sa(Qi(Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ga}function va(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[E]=e,t[Ft]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),_n(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),xn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||_a(e,!0)}function ya(e){for(pa=e.return;pa;)switch(pa.tag){case 5:case 31:case 13:ha=!1;return;case 27:case 3:ha=!0;return;default:pa=pa.return}}function M(e){if(e!==pa)return!1;if(!j)return ya(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&A&&_a(e),ya(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));A=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(317));A=dm(e)}else t===27?(t=A,Sp(e.type)?(e=um,um=null,A=e):A=t):A=pa?lm(e.stateNode.nextSibling):null;return!0}function ba(){A=pa=null,j=!1}function xa(){var e=ma;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),ma=null),e}function Sa(e){ma===null?ma=[e]:ma.push(e)}var Ca=ke(null),wa=null,Ta=null;function Ea(e,t,n){je(Ca,t._currentValue),t._currentValue=n}function Da(e){e._currentValue=Ca.current,Ae(Ca)}function Oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ka(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var s=i.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Oa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(a(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Oa(s,n,e),s=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Oa(i.return,n,e),s=i.child,s=s===null?null:s.sibling):s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Aa(e,t,n,r){e=null;for(var i=t,o=!1;i!==null;){if(!o){if(i.flags&524288)o=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(a(387));if(s=s.memoizedProps,s!==null){var c=i.type;Qr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===Ie.current){if(s=i.alternate,s===null)throw Error(a(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}i=i.return}return e!==null&&ka(t,e,n,r),t.flags|=262144,e!==null}function ja(e){for(e=e.firstContext;e!==null;){if(!Qr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){wa=e,Ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Na(e){return Fa(wa,e)}function Pa(e,t){return wa===null&&Ma(e),Fa(e,t)}function Fa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ta===null){if(e===null)throw Error(a(308));Ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ta=Ta.next=t;return n}var Ia=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},La=t.unstable_scheduleCallback,Ra=t.unstable_NormalPriority,za={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ba(){return{controller:new Ia,data:new Map,refCount:0}}function Va(e){e.refCount--,e.refCount===0&&La(Ra,function(){e.controller.abort()})}function Ha(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ua=null;function Wa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ga=null,Ka=0,qa=0,Ja=null;function Ya(e,t){if(Ga===null){var n=Ga=[];Ka=0,qa=Pf(),Ja={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ka++,t.then(Xa,Xa),t}function Xa(){if(--Ka===0&&(Ua=null,Ga!==null)){Ja!==null&&(Ja.status=`fulfilled`);var e=Ga;Ga=null,qa=0,Ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Za(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Qa=C.S;C.S=function(e,t){if(md=$e(),typeof t==`object`&&t&&typeof t.then==`function`&&Ya(e,t),Ua!==null)for(var n=bf;n!==null;)Ha(n,Ua),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ha(r,n),r=r.next;if(qa!==0){r=Ua,r===null&&(r=Ua=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Qa!==null&&Qa(e,t)};var $a=ke(null);function eo(){var e=$a.current;return e===null?Qu.pooledCache:e}function to(e,t){t===null?je($a,$a.current):je($a,t.pool)}function no(){var e=eo();return e===null?null:{parent:za._currentValue,pool:e}}var ro=Error(a(460)),io=Error(a(474)),ao=Error(a(542)),oo={then:function(){}};function so(e){return e=e.status,e===`fulfilled`||e===`rejected`}function co(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,po(e),e===void 0&&!(`reason`in t)?Error(a(600)):e;default:if(typeof t.status==`string`)t.then(An,An);else{if(e=Qu,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,po(e),e}throw uo=t,ro}}function lo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(uo=e,ro):e}}var uo=null;function fo(){if(uo===null)throw Error(a(459));var e=uo;return uo=null,e}function po(e){if(e===ro||e===ao)throw Error(a(483))}var mo=null,ho=0;function go(e){var t=ho;return ho+=1,mo===null&&(mo=[]),co(mo,e,t)}function _o(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function vo(e,t){throw t.$$typeof===ie?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function yo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Wi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ji(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===oe?(e=d(e,t,n.props.children,r,n.key),_o(e,n),e):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===he&&lo(a)===t.type)?(t=i(t,n.props),_o(t,n),t.return=e,t):(t=Ki(n.type,n.key,n.props,null,e.mode,r),_o(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Xi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=qi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ji(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ae:return n=Ki(t.type,t.key,t.props,null,e.mode,n),_o(n,t),n.return=e,n;case S:return t=Xi(t,e.mode,n),t.return=e,t;case he:return t=lo(t),f(e,t,n)}if(Te(t)||Se(t))return t=qi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,go(t),n);if(t.$$typeof===ue)return f(e,Pa(e,t),n);vo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ae:return n.key===i?l(e,t,n,r):null;case S:return n.key===i?u(e,t,n,r):null;case he:return n=lo(n),p(e,t,n,r)}if(Te(n)||Se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,go(n),r);if(n.$$typeof===ue)return p(e,t,Pa(e,n),r);vo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ae:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case S:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case he:return r=lo(r),m(e,t,n,r,i)}if(Te(r)||Se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,go(r),i);if(r.$$typeof===ue)return m(e,t,n,Pa(t,r),i);vo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&ca(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&ca(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&ca(i,h),l}function g(i,s,c,l){if(c==null)throw Error(a(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&ca(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&ca(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&ca(i,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===oe&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ae:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===oe){if(r.tag===7){n(e,r.sibling),c=i(r,o.props.children),_o(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===he&&lo(l)===r.type){n(e,r.sibling),c=i(r,o.props),_o(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===oe?(c=qi(o.props.children,e.mode,c,o.key),_o(c,o),c.return=e,e=c):(c=Ki(o.type,o.key,o.props,null,e.mode,c),_o(c,o),c.return=e,e=c)}return s(e);case S:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=i(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Xi(o,e.mode,c),c.return=e,e=c}return s(e);case he:return o=lo(o),_(e,r,o,c)}if(Te(o))return h(e,r,o,c);if(Se(o)){if(l=Se(o),typeof l!=`function`)throw Error(a(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,go(o),c);if(o.$$typeof===ue)return _(e,r,Pa(e,o),c);vo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,o),c.return=e,e=c):(n(e,r),c=Ji(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ho=0;var i=_(e,t,n,r);return mo=null,i}catch(t){if(t===ro||t===ao)throw t;var a=Hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var bo=yo(!0),xo=yo(!1),So=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function To(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Eo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=zi(e),Ri(e,null,n),t}return Fi(e,r,t,n),zi(e)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}function Oo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ko=!1;function Ao(){if(ko){var e=Ja;if(e!==null)throw e}}function jo(e,t,n,r){ko=!1;var i=e.updateQueue;So=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(X&f)===f:(r&f)===f){f!==0&&f===qa&&(ko=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=x({},d,f);break a;case 2:So=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ad|=o,e.lanes=o,e.memoizedState=d}}function Mo(e,t){if(typeof e!=`function`)throw Error(a(191,e));e.call(t)}function No(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Mo(n[e],t)}var Po=ke(null),Fo=ke(0);function Io(e,t){e=rd,je(Fo,e),je(Po,t),rd=e|t.baseLanes}function Lo(){je(Fo,rd),je(Po,Po.current)}function Ro(){rd=Fo.current,Ae(Po),Ae(Fo)}var zo=ke(null),Bo=null;function Vo(e){var t=e.alternate;je(Ko,Ko.current&1),je(zo,e),Bo===null&&(t===null||Po.current!==null||t.memoizedState!==null)&&(Bo=e)}function Ho(e){je(Ko,Ko.current),je(zo,e),Bo===null&&(Bo=e)}function Uo(e){e.tag===22?(je(Ko,Ko.current),je(zo,e),Bo===null&&(Bo=e)):Wo()}function Wo(){je(Ko,Ko.current),je(zo,zo.current)}function Go(e){Ae(zo),Bo===e&&(Bo=null),Ae(Ko)}var Ko=ke(0);function qo(e,t){je(zo,zo.current),je(Ko,t)}function Jo(e){Ae(Ko),Ae(zo),Bo===e&&(Bo=null)}function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var N=0,P=null,F=null,Xo=null,Zo=!1,Qo=!1,$o=!1,es=0,ts=0,ns=null,rs=0;function is(){throw Error(a(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qr(e[n],t[n]))return!1;return!0}function os(e,t,n,r,i,a){return N=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Cc:wc,$o=!1,a=n(r,i),$o=!1,Qo&&(a=cs(t,n,r,i)),ss(e),a}function ss(e){C.H=Sc;var t=F!==null&&F.next!==null;if(N=0,Xo=F=P=null,Zo=!1,ts=0,ns=null,t)throw Error(a(300));e===null||I||(e=e.dependencies,e!==null&&ja(e)&&(I=!0))}function cs(e,t,n,r){P=e;var i=0;do{if(Qo&&(ns=null),ts=0,Qo=!1,25<=i)throw Error(a(301));if(i+=1,Xo=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=Tc,o=t(n,r)}while(Qo);return o}function ls(){var e=C.H,t=e.useState()[0];return t=typeof t.then==`function`?gs(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function us(){var e=es!==0;return es=0,e}function ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fs(e){if(Zo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zo=!1}N=0,Xo=F=P=null,Qo=!1,ts=es=0,ns=null}function ps(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xo===null?P.memoizedState=Xo=e:Xo=Xo.next=e,Xo}function ms(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=Xo===null?P.memoizedState:Xo.next;if(t!==null)Xo=t,F=e;else{if(e===null)throw P.alternate===null?Error(a(467)):Error(a(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},Xo===null?P.memoizedState=Xo=e:Xo=Xo.next=e}return Xo}function hs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gs(e){var t=ts;return ts+=1,ns===null&&(ns=[]),e=co(ns,e,t),t=P,(Xo===null?t.memoizedState:Xo.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Cc:wc),e}function _s(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return gs(e);if(e.$$typeof===be)return;if(e.$$typeof===ue)return Na(e)}throw Error(a(438,String(e)))}function vs(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=hs(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ve;return t.index++,n}function ys(e,t){return typeof t==`function`?t(e):t}function bs(e){return xs(ms(),F,e)}function xs(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(N&f)===f:(X&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===qa&&(d=!0);else if((N&p)===p){u=u.next,p===qa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,ad|=p;f=u.action,$o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,ad|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Qr(o,e.memoizedState)&&(I=!0,d&&(n=Ja,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ss(e){var t=ms(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Qr(o,t.memoizedState)||(I=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cs(e,t,n){var r=P,i=ms(),o=j;if(o){if(n===void 0)throw Error(a(407));n=n()}else n=t();var s=!Qr((F||i).memoizedState,n);if(s&&(i.memoizedState=n,I=!0),i=i.queue,Js(Es.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||s||Xo!==null&&!!(Xo.memoizedState.tag&1),Us(e?9:8,{destroy:void 0},Ts.bind(null,r,i,n,t),null),e){if(r.flags|=2048,Qu===null)throw Error(a(349));o||N&127||ws(r,t,n)}return n}function ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=hs(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ts(e,t,n,r){t.value=n,t.getSnapshot=r,Ds(t)&&Os(e)}function Es(e,t,n){return n(function(){Ds(t)&&Os(e)})}function Ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qr(e,n)}catch{return!0}}function Os(e){var t=Li(e,2);t!==null&&Nd(t,e,2)}function ks(e){var t=ps();if(typeof e==`function`){var n=e;if(e=n(),$o){ut(!0);try{n()}finally{ut(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t}function As(e,t,n,r){return e.baseState=n,xs(e,F,typeof r==`function`?r:ys)}function js(e,t,n,r,i){if(yc(e))throw Error(a(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};C.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ms(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ms(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=C.T,o={};o.types=a===null?null:a.types,C.T=o;try{var s=n(i,r),c=C.S;c!==null&&c(o,s),Ns(e,t,s)}catch(n){Fs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),C.T=a}}else try{a=n(i,r),Ns(e,t,a)}catch(n){Fs(e,t,n)}}function Ns(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ps(e,t,n)},function(n){return Fs(e,t,n)}):Ps(e,t,n)}function Ps(e,t,n){t.status=`fulfilled`,t.value=n,Is(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ms(e,n)))}function Fs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Is(t),t=t.next;while(t!==r)}e.action=null}function Is(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ls(e,t){return t}function Rs(e,t){if(j){var n=Qu.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=ha;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=lm(i.nextSibling),r=i.data===`F!`;break a}}_a(r)}r=!1}r&&(t=n[0])}}return n=ps(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:t},n.queue=r,n=gc.bind(null,P,r),r.dispatch=n,r=ks(!1),a=vc.bind(null,P,!1,r.queue),r=ps(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=js.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function zs(e){return Bs(ms(),F,e)}function Bs(e,t,n){if(t=xs(e,t,Ls)[0],e=bs(ys)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=gs(t)}catch(e){throw e===ro?ao:e}else r=t;t=ms();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,Us(9,{destroy:void 0},Vs.bind(null,i,n),null)),[r,a,e]}function Vs(e,t){e.action=t}function Hs(e){var t=ms(),n=F;if(n!==null)return Bs(t,n,e);ms(),t=t.memoizedState,n=ms();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=hs(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ws(){return ms().memoizedState}function Gs(e,t,n,r){var i=ps();P.flags|=e,i.memoizedState=Us(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ks(e,t,n,r){var i=ms();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&as(r,F.memoizedState.deps)?i.memoizedState=Us(t,a,n,r):(P.flags|=e,i.memoizedState=Us(1|t,a,n,r))}function qs(e,t){Gs(8390656,8,e,t)}function Js(e,t){Ks(2048,8,e,t)}function Ys(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=hs(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Xs(e){var t=ms().memoizedState;return Ys({ref:t,nextImpl:e}),function(){if(J&2)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function Zs(e,t){return Ks(4,2,e,t)}function Qs(e,t){return Ks(4,4,e,t)}function $s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ec(e,t,n){n=n==null?null:n.concat([e]),Ks(4,4,$s.bind(null,t,e),n)}function tc(){}function nc(e,t){var n=ms();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rc(e,t){var n=ms();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&as(t,r[1]))return r[0];if(r=e(),$o){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r}function ic(e,t,n){return n===void 0||N&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),P.lanes|=e,ad|=e,n)}function ac(e,t,n,r){return Qr(n,t)?n:Po.current===null?!(N&106)||N&1073741824&&!(X&261930)?(I=!0,e.memoizedState=n):(e=jd(),P.lanes|=e,ad|=e,t):(e=ic(e,n,r),Qr(e,t)||(I=!0),e)}function oc(e,t,n,r,i){var a=w.p;w.p=a!==0&&8>a?a:8;var o=C.T,s={};s.types=o===null?null:o.types,C.T=s,vc(e,!1,t,n);try{var c=i(),l=C.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?_c(e,t,Za(c,r),Ad(e)):_c(e,t,r,Ad(e))}catch(n){_c(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{w.p=a,o!==null&&s.types!==null&&(o.types=s.types),C.T=o}}function sc(){}function cc(e,t,n,r){if(e.tag!==5)throw Error(a(476));var i=lc(e).queue;oc(e,i,t,Ee,n===null?sc:function(){return uc(e),n(r)})}function lc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:Ee},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uc(e){var t=lc(e);t.next===null&&(t=e.alternate.memoizedState),_c(e,t.next.queue,{},Ad())}function dc(){return Na(sh)}function fc(){return ms().memoizedState}function pc(){return ms().memoizedState}function mc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=To(n);var r=Eo(t,e,n);r!==null&&(Nd(r,t,n),Do(r,t,n)),t={cache:Ba()},e.payload=t;return}t=t.return}}function hc(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e)?bc(t,n):(n=Ii(e,t,n,r),n!==null&&(Nd(n,e,r),xc(n,t,r)))}function gc(e,t,n){_c(e,t,n,Ad())}function _c(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))bc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Qr(s,o))return Fi(e,t,i,0),Qu===null&&Pi(),!1}catch{}if(n=Ii(e,t,i,r),n!==null)return Nd(n,e,r),xc(n,t,r),!0}return!1}function vc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yc(e)){if(t)throw Error(a(479))}else t=Ii(e,n,r,2),t!==null&&Nd(t,e,2)}function yc(e){var t=e.alternate;return e===P||t!==null&&t===P}function bc(e,t){Qo=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}var Sc={readContext:Na,use:_s,useCallback:is,useContext:is,useEffect:is,useImperativeHandle:is,useLayoutEffect:is,useInsertionEffect:is,useMemo:is,useReducer:is,useRef:is,useState:is,useDebugValue:is,useDeferredValue:is,useTransition:is,useSyncExternalStore:is,useId:is,useHostTransitionStatus:is,useFormState:is,useActionState:is,useOptimistic:is,useMemoCache:is,useCacheRefresh:is,useEffectEvent:is},Cc={readContext:Na,use:_s,useCallback:function(e,t){return ps().memoizedState=[e,t===void 0?null:t],e},useContext:Na,useEffect:qs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Gs(4194308,4,$s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gs(4194308,4,e,t)},useInsertionEffect:function(e,t){Gs(4,2,e,t)},useMemo:function(e,t){var n=ps();t=t===void 0?null:t;var r=e();if($o){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ps();if(n!==void 0){var i=n(t);if($o){ut(!0);try{n(t)}finally{ut(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=hc.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=ps();return e={current:e},t.memoizedState=e},useState:function(e){e=ks(e);var t=e.queue,n=gc.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:tc,useDeferredValue:function(e,t){return ic(ps(),e,t)},useTransition:function(){var e=ks(!1);return e=oc.bind(null,P,e.queue,!0,!1),ps().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=ps();if(j){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Qu===null)throw Error(a(349));X&127||ws(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,qs(Es.bind(null,r,o,e),[e]),r.flags|=2048,Us(9,{destroy:void 0},Ts.bind(null,r,o,n,t),null),n},useId:function(){var e=ps(),t=Qu.identifierPrefix;if(j){var n=sa,r=oa;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=es++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=rs++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:dc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e){var t=ps();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=vc.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:vs,useCacheRefresh:function(){return ps().memoizedState=mc.bind(null,P)},useEffectEvent:function(e){var t=ps(),n={impl:e};return t.memoizedState=n,function(){if(J&2)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},wc={readContext:Na,use:_s,useCallback:nc,useContext:Na,useEffect:Js,useImperativeHandle:ec,useInsertionEffect:Zs,useLayoutEffect:Qs,useMemo:rc,useReducer:bs,useRef:Ws,useState:function(){return bs(ys)},useDebugValue:tc,useDeferredValue:function(e,t){return ac(ms(),F.memoizedState,e,t)},useTransition:function(){var e=bs(ys)[0],t=ms().memoizedState;return[typeof e==`boolean`?e:gs(e),t]},useSyncExternalStore:Cs,useId:fc,useHostTransitionStatus:dc,useFormState:zs,useActionState:zs,useOptimistic:function(e,t){return As(ms(),F,e,t)},useMemoCache:vs,useCacheRefresh:pc,useEffectEvent:Xs},Tc={readContext:Na,use:_s,useCallback:nc,useContext:Na,useEffect:Js,useImperativeHandle:ec,useInsertionEffect:Zs,useLayoutEffect:Qs,useMemo:rc,useReducer:Ss,useRef:Ws,useState:function(){return Ss(ys)},useDebugValue:tc,useDeferredValue:function(e,t){var n=ms();return F===null?ic(n,e,t):ac(n,F.memoizedState,e,t)},useTransition:function(){var e=Ss(ys)[0],t=ms().memoizedState;return[typeof e==`boolean`?e:gs(e),t]},useSyncExternalStore:Cs,useId:fc,useHostTransitionStatus:dc,useFormState:Hs,useActionState:Hs,useOptimistic:function(e,t){var n=ms();return F===null?(n.baseState=e,[e,n.queue.dispatch]):As(n,F,e,t)},useMemoCache:vs,useCacheRefresh:pc,useEffectEvent:Xs};function Ec(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=To(r);i.payload=t,n!=null&&(i.callback=n),t=Eo(e,i,r),t!==null&&(Nd(t,e,r),Do(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=To(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Eo(e,i,r),t!==null&&(Nd(t,e,r),Do(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=To(n);r.tag=2,t!=null&&(r.callback=t),t=Eo(e,r,n),t!==null&&(Nd(t,e,n),Do(t,e,n))}};function Oc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(i,a):!0}function kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dc.enqueueReplaceState(t,t.state,null)}function Ac(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=x({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function jc(e){Ai(e)}function Mc(e){console.error(e)}function Nc(e){Ai(e)}function Pc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Fc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ic(e,t,n){return n=To(n),n.tag=3,n.payload={element:null},n.callback=function(){Pc(e,t)},n}function Lc(e){return e=To(e),e.tag=3,e}function Rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Fc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Fc(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function zc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Aa(t,n,i,!0),n=zo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Bo===null?Gd():n.alternate===null&&id===0&&(id=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===oo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,i)),!1;case 22:return n.flags|=65536,r===oo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,i)),!1}throw Error(a(435,n.tag))}return mf(e,r,i),Gd(),!1}if(j)return t=zo.current,t===null?(r!==ga&&(t=Error(a(423),{cause:r}),Sa(Qi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Qi(r,n),i=Ic(e.stateNode,r,i),Oo(e,i),id!==4&&(id=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==ga&&(e=Error(a(422),{cause:r}),Sa(Qi(e,n)))),!1;var o=Error(a(520),{cause:r});if(o=Qi(o,n),ud===null?ud=[o]:ud.push(o),id!==4&&(id=2),t===null)return!0;r=Qi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Ic(n.stateNode,r,e),Oo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Lc(i),Rc(i,e,n,r),Oo(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Bc=Error(a(461)),I=!1;function L(e,t,n,r){t.child=e===null?xo(t,null,n,r):bo(t,e.child,n,r)}function R(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ma(t),r=os(e,t,n,o,a,i),s=us(),e!==null&&!I?(ds(e,t,i),sl(e,t,i)):(j&&s&&ua(t),t.flags|=1,L(e,t,r,i),t.child)}function z(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Vc(e,t,a,r,i)):(e=Ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!cl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?$r:n,n(o,r)&&e.ref===t.ref)return sl(e,t,i)}return t.flags|=1,e=Wi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if($r(a,r)&&e.ref===t.ref){if(I=!1,t.pendingProps=r=a,cl(e,i))e.flags&131072&&(I=!0);else return t.lanes=e.lanes,sl(e,t,i)}}return Uc(e,t,n,r,i)}function B(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return H(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&to(t,a===null?null:a.cachePool),a===null?Lo():Io(t,a),Uo(t);else return r=t.lanes=536870912,H(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&to(t,null),Lo(),Wo()):(to(t,a.cachePool),Io(t,a),Wo(),t.memoizedState=null);return L(e,t,i,n),t.child}function V(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function H(e,t,n,r,i){var a=eo();return a=a===null?null:{parent:za._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&to(t,null),Lo(),Uo(t),e!==null&&Aa(e,t,r,!0),t.childLanes=i,null}function U(e,t){return t=Qc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function W(e,t,n){return bo(t,e.child,null,n),e=U(t,t.pendingProps),e.flags|=2,Go(t),t.memoizedState=null,e}function G(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=U(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},V(null,e);if(Ho(t),(e=A)?(e=am(e,ha),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa===null?null:{id:oa,overflow:sa},retryLane:536870912,hydrationErrors:null},n=Yi(e),n.return=t,t.child=n,pa=t,A=null)):e=null,e===null)throw _a(t);return t.lanes=536870912,null}return U(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ho(t),i){if(t.flags&256)t.flags&=-257,t=W(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558))}else if(I||Aa(e,t,n,!1),i=(n&e.childLanes)!==0,I||i){if(Po.current===null){if(r=Qu,r!==null&&(s=kt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Li(e,s),Nd(r,e,s),Bc;Gd()}t=W(e,t,n)}else e=o.treeContext,A=lm(s.nextSibling),pa=t,j=!0,ma=null,ha=!1,e!==null&&fa(t,e),t=U(t,r),t.flags|=134221824;return t}return e=Wi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Uc(e,t,n,r,i){return Ma(t),n=os(e,t,n,r,void 0,i),r=us(),e!==null&&!I?(ds(e,t,i),sl(e,t,i)):(j&&r&&ua(t),t.flags|=1,L(e,t,n,i),t.child)}function Wc(e,t,n,r,i,a){return Ma(t),t.updateQueue=null,n=cs(t,r,n,i),ss(e),r=us(),e!==null&&!I?(ds(e,t,a),sl(e,t,a)):(j&&r&&ua(t),t.flags|=1,L(e,t,n,a),t.child)}function Gc(e,t,n,r,i){if(Ma(t),t.stateNode===null){var a=Bi,o=n.contextType;typeof o==`object`&&o&&(a=Na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Dc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Co(t),o=n.contextType,a.context=typeof o==`object`&&o?Na(o):Bi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ec(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Dc.enqueueReplaceState(a,a.state,null),jo(t,r,a,i),Ao(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ac(n,s);a.props=c;var l=a.context,u=n.contextType;o=Bi,typeof u==`object`&&u&&(o=Na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&kc(t,a,r,o),So=!1;var f=t.memoizedState;a.state=f,jo(t,r,a,i),Ao(),l=t.memoizedState,s||f!==l||So?(typeof d==`function`&&(Ec(t,n,d,r),l=t.memoizedState),(c=So||Oc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wo(e,t),o=t.memoizedProps,u=Ac(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Bi,typeof l==`object`&&l&&(c=Na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&kc(t,a,r,c),So=!1,f=t.memoizedState,a.state=f,jo(t,r,a,i),Ao();var p=t.memoizedState;o!==d||f!==p||So||e!==null&&e.dependencies!==null&&ja(e.dependencies)?(typeof s==`function`&&(Ec(t,n,s,r),p=t.memoizedState),(u=So||Oc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ja(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=bo(t,e.child,null,i),t.child=bo(t,null,n,i)):L(e,t,n,i),t.memoizedState=a.state,e=t.child):e=sl(e,t,i),e}function Kc(e,t,n,r){return ba(),t.flags|=256,L(e,t,n,r),t.child}var qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jc(e){return{baseLanes:e,cachePool:no()}}function Yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function Xc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Ko.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(j){if(i?Vo(t):Wo(),(e=A)?(e=am(e,ha),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa===null?null:{id:oa,overflow:sa},retryLane:536870912,hydrationErrors:null},n=Yi(e),n.return=t,t.child=n,pa=t,A=null)):e=null,e===null)throw _a(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Wo(),i=t.mode,a=Qc({mode:`hidden`,children:a},i),r=qi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Jc(n),r.childLanes=Yc(e,o,n),t.memoizedState=qc,V(null,r)):(Vo(t),Zc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return el(e,t,a,o,r,c,s,n)}return i?(Wo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Wi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=qi(i,a,n,null),i.flags|=2):i=Wi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,V(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Jc(n):(a=i.cachePool,a===null?a=no():(s=za._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Yc(e,o,n),t.memoizedState=qc,V(e.child,r)):(Vo(t),n=e.child,e=n.sibling,n=Wi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Zc(e,t){return t=Qc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Qc(e,t){return e=Hi(22,e,null,t),e.lanes=0,e}function $c(e,t,n){return bo(t,e.child,null,n),e=Zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function el(e,t,n,r,i,o,s,c){if(n)return t.flags&256?(Vo(t),t.flags&=-257,$c(e,t,c)):t.memoizedState===null?(Wo(),o=i.fallback,s=t.mode,i=Qc({mode:`visible`,children:i.children},s),o=qi(o,s,c,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,bo(t,e.child,null,c),i=t.child,i.memoizedState=Jc(c),i.childLanes=Yc(e,r,c),t.memoizedState=qc,V(null,i)):(Wo(),t.child=e.child,t.flags|=128,null);if(Vo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(i=Error(a(419)),i.stack=``,i.digest=r,Sa({value:i,source:null,stack:null})),$c(e,t,c)}if(I||Aa(e,t,c,!1),r=(c&e.childLanes)!==0,I||r){if(Po.current!==null)return $c(e,t,c);if(r=Qu,r!==null&&(i=kt(r,c),i!==0&&i!==s.retryLane))throw s.retryLane=i,Li(e,i),Nd(r,e,i),Bc;return om(o)||Gd(),$c(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,A=lm(o.nextSibling),pa=t,j=!0,ma=null,ha=!1,e!==null&&fa(t,e),t=Zc(t,i.children),t.flags|=134221824,t)}function tl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oa(e.return,t,n)}function nl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Yo(n)===null&&(t=e),e=e.sibling}return t}function rl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function il(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function al(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Ko.current;if(t.flags&128)return qo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,qo(t,o),i===`backwards`&&e!==null?(il(e),L(e,t,r,n),il(e)):L(e,t,r,n),r=j?na:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tl(e,n,t);else if(e.tag===19)tl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=nl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,il(t)),rl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rl(t,!0,n,null,a,r);break;case`together`:rl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=nl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rl(t,!1,i,n,a,r)}return t.child}function ol(e,t,n){var r=t.pendingProps;return Ea(t,t.type,r.value),L(e,t,r.children,n),t.child}function sl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ad|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Wi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ja(e)))}function ll(e,t,n){switch(t.tag){case 3:Re(t,t.stateNode.containerInfo),Ea(t,za,e.memoizedState.cache),ba();break;case 27:case 5:T(t);break;case 4:Re(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ho(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Vo(t),t.flags|=128,null;r=Aa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Xc(e,t,n):(Vo(t),e=sl(e,t,n),e===null?null:e.sibling)}Vo(t);break;case 19:if(t.flags&128)return al(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return al(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),qo(t,Ko.current),r)break;return null;case 22:return t.lanes=0,B(e,t,n,t.pendingProps);case 24:Ea(t,za,e.memoizedState.cache)}return sl(e,t,n)}function ul(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)I=!0;else{if(!cl(e,n)&&!(t.flags&128))return I=!1,ll(e,t,n);I=!!(e.flags&131072)}}else I=!1,j&&t.flags&1048576&&la(t,na,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=lo(t.elementType),t.type=e,typeof e==`function`)Ui(e)?(r=Ac(e,r),t.tag=1,t=Gc(null,t,e,r,n)):(t.tag=0,t=Uc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===de){t.tag=11,t=R(null,t,e,r,n);break a}if(i===me){t.tag=14,t=z(null,t,e,r,n);break a}if(i===ue){t.tag=10,t.type=e,t=ol(null,t,n);break a}}throw t=we(e)||e,Error(a(306,t,``))}}return t;case 0:return Uc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ac(r,t.pendingProps),Gc(e,t,r,i,n);case 3:a:{if(Re(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,wo(e,t),jo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ea(t,za,r),r!==o.cache&&ka(t,[za],n,!0),Ao(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Kc(e,t,r,n);break a}if(r!==i){i=Qi(Error(a(424)),t),Sa(i),t=Kc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=lm(e.firstChild),pa=t,j=!0,ma=null,ha=!0,n=xo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ba(),r===i){t=sl(e,t,n);break a}L(e,t,r,n)}t=t.child}return t;case 26:return Hc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(t.stateNode=fp(t.type,t.pendingProps,Pe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return T(t),e===null&&j&&(r=t.stateNode=hm(t.type,t.pendingProps,Pe.current),pa=t,ha=!0,i=A,Sp(t.type)?(um=i,A=lm(r.firstChild)):A=i),L(e,t,t.pendingProps.children,n),Hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=rm(r,t.type,t.pendingProps,ha),r===null?i=!1:(t.stateNode=r,pa=t,A=lm(r.firstChild),ha=!1,i=!0)),i||_a(t)),T(t),i=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(i,o)?r=null:s!==null&&pp(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=os(e,t,ls,null,null,n),sh._currentValue=i),Hc(e,t),L(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=im(n,t.pendingProps,ha),n===null?e=!1:(t.stateNode=n,pa=t,A=null,e=!0)),e||_a(t)),null;case 13:return Xc(e,t,n);case 4:return Re(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bo(t,null,r,n):L(e,t,r,n),t.child;case 11:return R(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Hc(e,t),L(e,t,r,n),t.child;case 8:return L(e,t,t.pendingProps.children,n),t.child;case 12:return L(e,t,t.pendingProps.children,n),t.child;case 10:return ol(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,Ma(t),i=Na(i),r=r(i),t.flags|=1,L(e,t,r,n),t.child;case 14:return z(e,t,t.type,t.pendingProps,n);case 15:return Vc(e,t,t.type,t.pendingProps,n);case 19:return al(e,t,n);case 31:return G(e,t,n);case 22:return B(e,t,n,t.pendingProps);case 24:return Ma(t),r=Na(za),e===null?(i=eo(),i===null&&(i=Qu,o=Ba(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},Co(t),Ea(t,za,i)):((e.lanes&n)!==0&&(wo(e,t),jo(t,null,null,n),Ao()),i=e.memoizedState,o=t.memoizedState,i.parent===r?(r=o.cache,Ea(t,za,r),r!==i.cache&&ka(t,[za],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,za,r))),L(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:j&&ua(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Hc(e,t),L(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function dl(e){e.flags|=4}function fl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw uo=oo,io}}else e.flags&=-16777217}function pl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Hd())e.flags|=8192;else throw uo=oo,io}}function ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ct(),e.lanes|=t,ld|=t)}function hl(e,t){if(!j)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function K(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gl(e,t,n){var r=t.pendingProps;switch(da(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return K(t),null;case 1:return K(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Da(za),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(M(t)?dl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xa())),K(t),null;case 26:var i=t.type,o=t.memoizedState;return e===null?(dl(t),o===null?(K(t),fl(t,i,null,r,n)):(K(t),pl(t,o))):o?o===e.memoizedState?(K(t),t.flags&=-16777217):(dl(t),K(t),pl(t,o)):(e=e.memoizedProps,e!==r&&dl(t),K(t),fl(t,i,e,r,n)),null;case 27:if(Be(t),n=Pe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&dl(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return K(t),t.subtreeFlags&=-33554433,null}e=Me.current,M(t)?va(t,e):(e=hm(i,r,n),t.stateNode=e,dl(t))}return K(t),t.subtreeFlags&=-33554433,null;case 5:if(Be(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&dl(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return K(t),t.subtreeFlags&=-33554433,null}if(o=Me.current,M(t))va(t,o);else{var s=lp(Pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}o[E]=t,o[Ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&dl(t)}}return K(t),t.subtreeFlags&=-33554433,fl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&dl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(a(166));if(e=Pe.current,M(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=pa,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[E]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||_a(t,!0)}else e=lp(e).createTextNode(r),e[E]=t,t.stateNode=e}return K(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=M(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(a(557));e[E]=t}else ba(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;K(t),e=!1}else n=xa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Go(t),t):(Go(t),null);if(t.flags&128)throw Error(a(558))}return K(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=M(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(a(317));i[E]=t}else ba(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;K(t),i=!1}else i=xa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Go(t),t):(Go(t),null)}return Go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ml(t,t.updateQueue),K(t),null);case 4:return ze(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,K(t),null;case 10:return Da(t.type),K(t),null;case 19:if(Jo(t),r=t.memoizedState,r===null)return K(t),null;if(i=!!(t.flags&128),o=r.rendering,o===null){if(i)hl(r,!1);else{if(id!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Yo(e),o!==null){for(t.flags|=128,hl(r,!1),e=o.updateQueue,t.updateQueue=e,ml(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Gi(n,e),n=n.sibling;return qo(t,Ko.current&1|2),j&&ca(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&$e()>hd&&(t.flags|=128,i=!0,hl(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Yo(o),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ml(t,e),hl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!j)return K(t),null}else 2*$e()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,i=!0,hl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=$e(),e.sibling=null,o=Ko.current,o=i?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||j?qo(t,o):(n=o,je(zo,t),je(Ko,n),Bo===null&&(Bo=t)),j&&ca(t,r.treeForkCount),e}return K(t),null;case 22:case 23:return Go(t),Ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(K(t),t.subtreeFlags&6&&(t.flags|=8192)):K(t),n=t.updateQueue,n!==null&&ml(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Ae($a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Da(za),K(t),null;case 25:return null;case 30:return t.flags|=33554432,K(t),null}throw Error(a(156,t.tag))}function _l(e,t){switch(da(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Da(za),ze(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Be(t),null;case 31:if(t.memoizedState!==null){if(Go(t),t.alternate===null)throw Error(a(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Jo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ze(),null;case 10:return Da(t.type),null;case 22:case 23:return Go(t),Ro(),e!==null&&Ae($a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Da(za),null;case 25:return null;default:return null}}function vl(e,t){switch(da(t),t.tag){case 3:Da(za),ze();break;case 26:case 27:case 5:Be(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&Go(t);break;case 13:Go(t);break;case 19:Jo(t);break;case 10:Da(t.type);break;case 22:case 23:Go(t),Ro(),e!==null&&Ae($a);break;case 24:Da(za)}}function yl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){pf(t,t.return,e)}}function bl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){pf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){pf(t,t.return,e)}}function xl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{No(t,n)}catch(t){pf(e,e.return,t)}}}function Sl(e,t,n){n.props=Ac(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){pf(e,t,n)}}function Cl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=Di(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);p(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){pf(e,t,n)}}function wl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){pf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){pf(e,t,n)}else n.current=null}}function Tl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function El(e){for(var t=e.return;t!==null&&(kl(t)&&em(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Dl(e){for(var t=e.return;t!==null&&(kl(t)&&tm(e.stateNode,t.stateNode),!Ol(t));)t=t.return}function Ol(e){return e.tag===5||e.tag===3||e.tag===27}function kl(e){return e&&e.tag===7&&e.stateNode!==null}function Al(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){pf(e,e.return,t)}}function jl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Ft]=t}catch(t){pf(e,e.return,t)}}function Ml(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Nl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ml(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An)),Tl(e,r),D=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Pl(e,t,n,r),e=e.sibling;e!==null;)Pl(e,t,n,r),e=e.sibling}function Fl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Tl(e,r),D=!0;else if(i!==4&&(i===27&&(Tl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Fl(e,t,n,r),e=e.sibling;e!==null;)Fl(e,t,n,r),e=e.sibling}function Il(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[E]=e,t[Ft]=n}catch(t){pf(e,e.return,t)}}var Ll=!1,Rl=null;function zl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ll=!0)}var Bl=null;function Vl(){var e=Bl;return Bl=null,e}var Hl=0;function Ul(e,t,n,r,i){return Hl=0,Wl(e.child,t,n,r,i)}function Wl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Ll=!0,Tp(o,Hl===0?t:t+`_`+Hl,n),Hl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Wl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Gl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Gl(e.child,t)),e=e.sibling}function Kl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Kl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(a(544));var n=t.name;t=ki(t.default,t.share),t!==`none`&&(Ul(e,n,t,null,!1)||Gl(e.child,!1))}e=e.sibling}}function ql(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=Di(r,n),a=ki(r.default,n.paired?r.share:r.enter);a===`none`?Kl(e):Ul(e,i,a,null,!1)?(Kl(e),n.paired||t||Md(e,r.onEnter)):Gl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e,t),e=e.sibling;else Kl(e)}function Jl(e){if(Rl!==null&&Rl.size!==0){var t=Rl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=ki(n.default,n.share);if(a!==`none`&&(Ul(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Gl(e.child,!1)),t.delete(r),t.size===0)break}}}Jl(e)}e=e.sibling}}}function Yl(e){if(e.tag===30){var t=e.memoizedProps,n=Di(t,e.stateNode),r=Rl===null?void 0:Rl.get(n),i=ki(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Ul(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Rl.delete(n),Md(e,t.onShare)):Gl(e.child,!1)),Rl!==null&&Jl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e),e=e.sibling;else Rl!==null&&Jl(e)}function Xl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Di(t,e.stateNode);t=ki(t.default,t.update),e.flags&=-5,t!==`none`&&Ul(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Xl(e);e=e.sibling}}function Zl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Gl(e.child,!1))}Zl(e)}e=e.sibling}}function Ql(e){if(e.tag===30)e.stateNode.paired=null,Gl(e.child,!1),Zl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e),e=e.sibling;else Zl(e)}function $l(e){for(e=e.child;e!==null;)e.tag===30?Gl(e.child,!1):e.subtreeFlags&33554432&&$l(e),e=e.sibling}function eu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Hl<a.length){var l=a[Hl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Hl===0?n:n+`_`+Hl,i),s&&e.flags&4||(Bl===null&&(Bl=[]),Bl.push(c,Hl===0?r:r+`_`+Hl,t.memoizedProps)),Hl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:eu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function tu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=Di(n,r),a=ki(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Hl=0,i=eu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&tu(e,t);e=e.sibling}}var nu=!1,q=!1,ru=!1,iu=!1,au=typeof WeakSet==`function`?WeakSet:Set,ou=null,su=!1,cu=!1,lu=!1,uu=!1;function du(e,t,n){if(e=e.containerInfo,sp=gh,e=ri(e),ii(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ou=t,t=n?9270:1024;ou!==null;){if(e=ou,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Yl(r[a]);if(e.alternate===null&&e.flags&2)n&&zl(e),fu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Yl(r),fu(n);continue}if(r!==null&&r.memoizedState!==null){n&&zl(e),fu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ou=r):(n&&Xl(e),fu(n))}}Rl=null}function fu(e){for(;ou!==null;){var t=ou,n=e,r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(i&1024&&r!==null){n=void 0,i=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Ac(t.type,i);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){pf(t,t.return,e)}}break;case 3:if(i&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=Di(r.memoizedProps,r.stateNode),i=t.memoizedProps,i=ki(i.default,i.update),i!==`none`&&Ul(r,n,i,r.memoizedState=[],!0));break;default:if(i&1024)throw Error(a(163))}if(r=t.sibling,r!==null){r.return=t.return,ou=r;break}ou=t.return}}function pu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nu(e,n),r&4&&yl(5,n);break;case 1:if(Nu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){pf(n,n.return,e)}else{var i=Ac(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){pf(n,n.return,e)}}}r&64&&xl(n),r&512&&Cl(n,n.return);break;case 3:if(Nu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{No(e,t)}catch(e){pf(n,n.return,e)}}break;case 27:t===null&&r&4&&Il(n);case 26:case 5:Nu(e,n),t===null&&r&4&&Al(n),r&512&&Cl(n,n.return);break;case 12:Nu(e,n);break;case 31:Nu(e,n),r&4&&Su(e,n);break;case 13:Nu(e,n),r&4&&Cu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||nu,!r){var a=t!==null&&t.memoizedState!==null||q;t=nu,i=q,nu=r,(q=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Fu(e,n,r)):Nu(e,n),nu=t,q=i}break;case 30:Nu(e,n),r&512&&Cl(n,n.return);break;case 7:r&512&&Cl(n,n.return);default:Nu(e,n)}}function mu(e,t){for(e=e.child;e!==null;)hu(e,t),e=e.sibling}function hu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){pf(e,e.return,t)}gu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,D=!0}catch(t){pf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){pf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&mu(e,t);break;default:mu(e,t)}}function gu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:hu(n,r);break a;case 22:n.memoizedState===null&&gu(n,r);break a;default:gu(n,r)}}e=e.sibling}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ut(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vu=null,yu=!1;function bu(e,t,n){for(n=n.child;n!==null;)xu(e,t,n),n=n.sibling}function xu(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount==`function`)try{lt.onCommitFiberUnmount(ct,n)}catch{}switch(n.tag){case 26:q||wl(n,t),bu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!q&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:q||wl(n,t),Dl(n);var r=vu,i=yu;Sp(n.type)&&(vu=n.stateNode,yu=!1),bu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),vu=r,yu=i;break;case 5:q||wl(n,t),Dl(n);case 6:if(n.tag===6&&Dl(n),r=vu,i=yu,vu=null,bu(e,t,n),vu=r,yu=i,vu!==null){if(yu)try{(vu.nodeType===9?vu.body:vu.nodeName===`HTML`?vu.ownerDocument.body:vu).removeChild(n.stateNode),D=!0}catch(e){pf(n,t,e)}else try{vu.removeChild(n.stateNode),D=!0}catch(e){pf(n,t,e)}}break;case 18:vu!==null&&(yu?(e=vu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(vu,n.stateNode));break;case 4:r=vu,i=yu,vu=n.stateNode.containerInfo,yu=!0,bu(e,t,n),vu=r,yu=i;break;case 0:case 11:case 14:case 15:bl(2,n,t),q||bl(4,n,t),bu(e,t,n);break;case 1:q||(wl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Sl(n,t,r)),bu(e,t,n);break;case 21:bu(e,t,n);break;case 22:q=(r=q)||n.memoizedState!==null,bu(e,t,n),q=r;break;case 30:wl(n,t),bu(e,t,n);break;case 7:q||wl(n,t),bu(e,t,n);break;default:bu(e,t,n)}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){pf(t,t.return,e)}}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){pf(t,t.return,e)}}function wu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new au),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new au),t;default:throw Error(a(435,e.tag))}}function Tu(e,t){var n=wu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Eu(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){vu=l.stateNode,yu=!1;break a}break;case 5:vu=l.stateNode,yu=!1;break a;case 3:case 4:vu=l.stateNode.containerInfo,yu=!0;break a}l=l.return}if(vu===null)throw Error(a(160));xu(s,c,o),vu=null,yu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ou(t,e,n),t=t.sibling}var Du=null;function Ou(e,t,n){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Eu(t,e,n),ku(e),i&4&&(bl(3,e,e.return),yl(3,e),bl(5,e,e.return));break;case 1:Eu(t,e,n),ku(e),i&512&&(q||r===null||wl(r,r.return)),i&64&&nu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Du,Eu(t,e,n),ku(e),i&512&&(q||r===null||wl(r,r.return)),i&4){if(i=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(nu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,i=o.ownerDocument||o;b:switch(t){case`title`:r=i.getElementsByTagName(`title`)[0],(!r||r[Vt]||r[E]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=i.createElement(t),i.head.insertBefore(r,i.querySelector(`head > title`))),np(r,t,n),r[E]=e,Jt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,i).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,i).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=i.createElement(t),np(r,t,n),i.head.appendChild(r);break;default:throw Error(a(468,t))}r[E]=e,Jt(r),t=r}e.stateNode=t}}else nu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else i===n?n===null&&e.stateNode!==null&&jl(e,e.memoizedProps,r.memoizedProps):(i===null?(t=r.stateNode,t===null||q||t.parentNode.removeChild(t)):i.count--,n===null?nu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Eu(t,e,n),ku(e),i&512&&(q||r===null||wl(r,r.return)),r!==null&&i&4&&jl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ru,ru=!1,Eu(t,e,n),ru=o,ku(e),i&512&&(q||r===null||wl(r,r.return)),e.flags&32){t=e.stateNode;try{Sn(t,``),D=!0}catch(t){pf(e,e.return,t)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,jl(e,t,r===null?t:r.memoizedProps)),i&1024&&(iu=!0);break;case 6:if(Eu(t,e,n),ku(e),i&4){if(e.stateNode===null)throw Error(a(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,D=!0}catch(t){pf(e,e.return,t)}}break;case 3:if(D=!1,Wm=null,o=Du,Du=bm(t.containerInfo),Eu(t,e,n),Du=o,ku(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){pf(e,e.return,t)}iu&&(iu=!1,Au(e)),D=!1;break;case 4:i=ru,ru=nu,r=an(),o=Du,Du=bm(e.stateNode.containerInfo),Eu(t,e,n),ku(e),Du=o,D&&cu&&(lu=!0),D=r,ru=i;break;case 12:Eu(t,e,n),ku(e);break;case 31:Eu(t,e,n),ku(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 13:Eu(t,e,n),ku(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=$e()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=nu,l=q,u=ru;nu=c||o,ru=u||o,q=l||s,Eu(t,e,n),q=l,ru=u,nu=c,ku(e),i&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||nu||q||(t=s||q,n=nu,r=q,nu=o||nu,q=t,Pu(e,2),nu=n,q=r),!o&&ru||mu(e,o)),i&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Tu(e,n))));break;case 19:Eu(t,e,n),ku(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 30:i&512&&(q||r===null||wl(r,r.return)),i=an(),o=cu,s=(n&335544064)===n,c=e.memoizedProps,cu=s&&ki(c.default,c.update)!==`none`,Eu(t,e,n),ku(e),s&&r!==null&&D&&(e.flags|=4),cu=o,D=i;break;case 21:break;case 7:i&512&&(q||r===null||wl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Eu(t,e,n),ku(e)}}function ku(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ml(r)){n=r;break}r=r.return}r=null;for(var i=e.return;i!==null;){if(kl(i)){var o=i.stateNode;r===null?r=[o]:r.push(o)}if(Ol(i))break;i=i.return}var s=r;if(n==null)throw Error(a(160));switch(n.tag){case 27:var c=n.stateNode;Fl(e,Nl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(Sn(l,``),n.flags&=-33),Fl(e,Nl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Pl(e,Nl(e),u,s);break;default:throw Error(a(161))}}catch(t){pf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Au(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Au(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function ju(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling;else tu(t,!1)}function Mu(e,t){var n=e.alternate;if(n===null)ql(e,!1);else switch(e.tag){case 3:if(uu=su=!1,Vl(),ju(t,e),!su&&!lu){if(e=Bl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),uu=!0}Bl=null;break;case 5:ju(t,e);break;case 4:r=su,su=!1,ju(t,e),su&&(lu=!0),su=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?ju(t,e):ql(e,!1));break;case 30:r=su,i=Vl(),su=!1,ju(t,e),su&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=Di(a,o),o=Di(n.memoizedProps,o);var s=ki(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Hl=0,t=eu(e,n,t,o,s,a,!0),Hl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),Bl=i):i!==null&&(i.push.apply(i,Bl),Bl=i),su=e.flags&32?!0:r;break;default:ju(t,e)}}function Nu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pu(e,t.alternate,t),t=t.sibling}function Pu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:bl(4,n,n.return),Pu(n,r);break;case 1:wl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Sl(n,n.return,i),Pu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:wl(n,n.return),n.tag!==5&&n.tag!==27||Dl(n),Pu(n,r);break;case 6:Dl(n);break;case 26:wl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||q||i.parentNode.removeChild(i),Pu(n,r);break;case 22:n.memoizedState===null&&Pu(n,r);break;case 30:wl(n,n.return),Pu(n,r);break;case 7:wl(n,n.return);default:Pu(n,r)}e=e.sibling}}function Fu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Fu(i,a,n),yl(4,a);break;case 1:if(Fu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){pf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Mo(l[i],c)}catch(e){pf(r,r.return,e)}}s&&o&64&&xl(a),Cl(a,a.return);break;case 27:n&2&&Il(a);case 5:a.tag!==5&&a.tag!==27||El(a),Fu(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 6:El(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||nu||Km(bm(c.ownerDocument),a.type,c),Fu(i,a,n),s&&r===null&&o&4&&Al(a),Cl(a,a.return);break;case 12:Fu(i,a,n);break;case 31:Fu(i,a,n),s&&o&4&&Su(i,a);break;case 13:Fu(i,a,n),s&&o&4&&Cu(i,a);break;case 22:a.memoizedState===null&&Fu(i,a,n),Cl(a,a.return);break;case 30:Fu(i,a,n),Cl(a,a.return);break;case 7:Cl(a,a.return);default:Fu(i,a,n)}t=t.sibling}}function Iu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Va(n))}function Lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e))}function Ru(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)zu(e,t,n,r),t=t.sibling;else i&&$l(t)}function zu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ql(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ru(e,t,n,r),a&2048&&yl(9,t);break;case 1:Ru(e,t,n,r);break;case 3:Ru(e,t,n,r),i&&uu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Va(a)));break;case 12:if(a&2048){Ru(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){pf(t,t.return,e)}}else Ru(e,t,n,r);break;case 31:Ru(e,t,n,r);break;case 13:Ru(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Ql(t),o._visibility&2?Ru(e,t,n,r):(o._visibility|=2,Bu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Ql(s),o._visibility&2?Ru(e,t,n,r):Vu(e,t)),a&2048&&Iu(s,t);break;case 24:Ru(e,t,n,r),a&2048&&Lu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Gl(a.child,!0),Gl(t.child,!0))),Ru(e,t,n,r);break;default:Ru(e,t,n,r)}}function Bu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bu(a,o,s,c,i),yl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bu(a,o,s,c,i)):u._visibility&2?Bu(a,o,s,c,i):Vu(a,o),i&&l&2048&&Iu(o.alternate,o);break;case 24:Bu(a,o,s,c,i),i&&l&2048&&Lu(o.alternate,o);break;default:Bu(a,o,s,c,i)}t=t.sibling}}function Vu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vu(n,r),i&2048&&Iu(r.alternate,r);break;case 24:Vu(n,r),i&2048&&Lu(r.alternate,r);break;default:Vu(n,r)}t=t.sibling}}var Hu=8192;function Uu(e,t,n){if(e.subtreeFlags&Hu)for(e=e.child;e!==null;)Wu(e,t,n),e=e.sibling}function Wu(e,t,n){switch(e.tag){case 26:Uu(e,t,n),e.flags&Hu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Du,e.memoizedState,e.memoizedProps));break;case 5:Uu(e,t,n),e.flags&Hu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Du;Du=bm(e.stateNode.containerInfo),Uu(e,t,n),Du=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hu,Hu=16777216,Uu(e,t,n),Hu=r):Uu(e,t,n));break;case 30:if((e.flags&Hu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Rl===null&&(Rl=new Map),Rl.set(r,i)}Uu(e,t,n);break;default:Uu(e,t,n)}}function Gu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ku(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qu(e),e=e.sibling}function qu(e){switch(e.tag){case 0:case 11:case 15:Ku(e),e.flags&2048&&bl(9,e,e.return);break;case 3:Ku(e);break;case 12:Ku(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ju(e)):Ku(e);break;default:Ku(e)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bl(8,t,t.return),Ju(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ju(t));break;default:Ju(t)}e=e.sibling}}function Yu(e,t){for(;ou!==null;){var n=ou;switch(n.tag){case 0:case 11:case 15:bl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Va(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ou=r;else a:for(n=e;ou!==null;){r=ou;var i=r.sibling,a=r.return;if(_u(r),r===n){ou=null;break a}if(i!==null){i.return=a,ou=i;break a}ou=a}}}var Xu={getCacheForType:function(e){var t=Na(za),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Na(za).controller.signal}},Zu=typeof WeakMap==`function`?WeakMap:Map,J=0,Qu=null,Y=null,X=0,Z=0,$u=null,ed=!1,td=!1,nd=!1,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return J&2&&X!==0?X&-X:C.T===null?Mt():Pf()}function jd(){if(cd===0){if(!(X&536870912)||j){var e=gt;gt<<=1,!(gt&3932160)&&(gt=262144),cd=e}else cd=536870912}return e=zo.current,e!==null&&(e.flags|=32),cd}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(Di(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===Qu&&(Z===2||Z===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,X,cd,!1)),Tt(e,n),(!(J&2)||e!==Qu)&&(e===Qu&&(!(J&2)&&(od|=n),id===4&&Ld(e,X,cd,!1)),Ef(e))}function Pd(e,t,n){if(J&6)throw Error(a(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||bt(e,t),i=r?Jd(e,t):Kd(e,t,!0),o=r;do{if(i===0){td&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n))i=Kd(e,t,!1),o=!1;else{if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Kd(c,s,!1),s!==2&&s!==6){if(nd&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,i=4;break a}o=dd,dd=i,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}i=s}if(o=!1,i!==2)continue}}if(i===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=i,o){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,cd,!ed);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(i=pd+300-$e(),10<i)){if(Ld(r,t,cd,!ed),yt(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=gp(Fd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,ed,o,`Throttled`,-0,0),i);break a}Fd(r,n,dd,gd,fd,t,cd,od,ld,ed,o,null,-0,0)}break}}while(1);Ef(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Rl=null,Wu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-$e():(a&4194048)===a?md-$e():0,m=eh(d,m),m!==null)?(xd=a,e.cancelPendingCommit=m(tf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l)):tf(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Qr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=xt(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-dt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Dt(e,n,t)}function Rd(){return J&6?!0:(Df(0,!1),!1)}function zd(){if(Y!==null){if(Z===0)var e=Y.return;else e=Y,Ta=wa=null,fs(e),mo=null,ho=0,e=Y;for(;e!==null;)vl(e.alternate,e),e=e.return;Y=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),Qu=e,Y=n=Wi(e.current,null),X=t,Z=0,$u=null,ed=!1,td=bt(e,t),nd=!1,ld=cd=sd=od=ad=id=0,dd=ud=null,fd=!1,rd=xt(e,t),Pi(),n}function Vd(e,t){P=null,C.H=Sc,t===ro||t===ao?(t=fo(),Z=3):t===io?(t=fo(),Z=4):Z=t===Bc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$u=t,Y===null&&(id=1,Pc(e,Qi(t,e.current)))}function Hd(){var e=zo.current;return e===null?!0:(X&4194048)===X?Bo===null:(X&62914560)===X||X&536870912?e===Bo:!1}function Ud(){var e=C.H;return C.H=Sc,e===null?Sc:e}function Wd(){var e=C.A;return C.A=Xu,e}function Gd(){id=4,ed||(X&4194048)!==X&&zo.current!==null||(td=!0),!(ad&134217727)&&!(od&134217727)||Qu===null||Ld(Qu,X,cd,!1)}function Kd(e,t,n){var r=J;J|=2;var i=Ud(),a=Wd();(Qu!==e||X!==t)&&(gd=null,Bd(e,t)),t=!1;var o=id;a:do try{if(Z!==0&&Y!==null){var s=Y,c=$u;switch(Z){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:zo.current===null&&(t=!0);var l=Z;if(Z=0,$u=null,Qd(e,s,c,l),n&&td){o=0;break a}break;default:l=Z,Z=0,$u=null,Qd(e,s,c,l)}}qd(),o=id;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,Ta=wa=null,J=r,C.H=i,C.A=a,Y===null&&(Qu=null,X=0,Pi()),o}function qd(){for(;Y!==null;)Xd(Y)}function Jd(e,t){var n=J;J|=2;var r=Ud(),i=Wd();Qu!==e||X!==t?(gd=null,hd=$e()+500,Bd(e,t)):td=bt(e,t);a:do try{if(Z!==0&&Y!==null){t=Y;var o=$u;b:switch(Z){case 1:Z=0,$u=null,Qd(e,t,o,1);break;case 2:case 9:if(so(o)){Z=0,$u=null,Zd(t);break}t=function(){Z!==2&&Z!==9||Qu!==e||(Z=7),Ef(e)},o.then(t,t);break a;case 3:Z=7;break a;case 4:Z=5;break a;case 7:so(o)?(Z=0,$u=null,Zd(t)):(Z=0,$u=null,Qd(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Ym(s):c.stateNode.complete){Z=0,$u=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,$d(u))}break b}}Z=0,$u=null,Qd(e,t,o,5);break;case 6:Z=0,$u=null,Qd(e,t,o,6);break;case 8:zd(),id=6;break a;default:throw Error(a(462))}}Yd();break}catch(t){Vd(e,t)}while(1);return Ta=wa=null,C.H=r,C.A=i,J=n,Y===null?(Qu=null,X=0,Pi(),id):0}function Yd(){for(;Y!==null&&!Ze();)Xd(Y)}function Xd(e){var t=ul(e.alternate,e,rd);e.memoizedProps=e.pendingProps,t===null?$d(e):Y=t}function Zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Wc(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Wc(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:fs(t);var r=t;r===pa&&(j?(ya(r),r.tag===5&&r.stateNode!=null&&(A=r.stateNode)):(ya(r),j=!0));default:vl(n,t),t=Y=Gi(t,rd),t=ul(n,t,rd)}e.memoizedProps=e.pendingProps,t===null?$d(e):Y=t}function Qd(e,t,n,r){Ta=wa=null,fs(t),mo=null,ho=0;var i=t.return;try{if(zc(e,i,t,n,X)){id=1,Pc(e,Qi(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;id=1,Pc(e,Qi(n,e.current)),Y=null;return}t.flags&32768?(j||r===1?e=!0:td||X&536870912?e=!1:(ed=e=!0,(r===2||r===9||r===3||r===6)&&(r=zo.current,r!==null&&r.tag===13&&(r.flags|=16384))),ef(t,e)):$d(t)}function $d(e){var t=e;do{if(t.flags&32768){ef(t,ed);return}e=t.return;var n=gl(t.alternate,t,rd);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);id===0&&(id=5)}function ef(e,t){do{var n=_l(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);id=6,Y=null}function tf(e,t,n,r,i,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do uf();while(vd!==0);if(J&6)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));e===Qu&&(Y=Qu=null,X=0),bd=t,yd=e,xd=n,Cd=i,wd=r,nf(e,t,n,s,c,l,f)}}function nf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=Ni,Et(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Wa(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(rt,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),Ll=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=C.T,C.T=null,i=w.p,w.p=2,a=J,J|=4;try{du(e,t,n)}finally{J=a,w.p=i,C.T=r}}vd=1,Ll?Td=Mp(o,e.containerInfo,Dd,of,sf,af,cf,df,rf,null,null):(of(),sf(),cf())}function rf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function af(){vd===3&&(vd=0,Mu(bd,yd),vd=4)}function of(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=C.T,C.T=null;var i=w.p;w.p=2;var a=J;J|=4;try{cu=lu=!1,Ou(t,e,n),n=cp;var o=ri(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ni(s.ownerDocument.documentElement,s)){if(c!==null&&ii(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=ti(s,h),v=ti(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{J=a,w.p=i,C.T=r}}e.current=t,vd=2}}function sf(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=C.T,C.T=null;var r=w.p;w.p=2;var i=J;J|=4;try{pu(e,t.alternate,t)}finally{J=i,w.p=r,C.T=n}}vd=3}}function cf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,Qe();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,lf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),jt(r),n=n.stateNode,lt&&typeof lt.onCommitFiberRoot==`function`)try{lt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=C.T,a=w.p,w.p=2,C.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{C.T=n,w.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&uf(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Df(0,!1)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Va(t)))}function uf(){return Td!==null&&(Td.skipTransition(),Td=null),of(),sf(),cf(),df()}function df(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=jt(xd),r=C.T,i=w.p;try{w.p=32>n?32:n,C.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,J&6)throw Error(a(331));var c=J;if(J|=4,qu(o.current),zu(o,o.current,s,n),J=c,Df(0,!1),lt&&typeof lt.onPostCommitFiberRoot==`function`)try{lt.onPostCommitFiberRoot(ct,o)}catch{}return!0}finally{w.p=i,C.T=r,lf(e,t)}}function ff(e,t,n){t=Qi(n,t),t=Ic(e.stateNode,t,2),e=Eo(e,t,2),e!==null&&(Tt(e,2),Ef(e))}function pf(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=Qi(n,e),n=Lc(2),r=Eo(t,n,2),r!==null&&(Rc(n,r,t,e),Tt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qu===e&&(X&n)===n&&(id===4||id===3&&(X&62914560)===X&&300>$e()-pd?J&2?sd|=n:Bd(e,0):sd|=n,ld===X&&(ld=0)),Ef(e)}function gf(e,t){t===0&&(t=Ct()),e=Li(e,t),e!==null&&(Tt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ye(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-dt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=X,a=yt(r,r===Qu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||bt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=$e(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}vd!==0&&vd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-dt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=St(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Qu,n=X,n=yt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Z===2||Z===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Xe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Xe(r),jt(n)){case 2:case 8:n=nt;break;case 32:n=rt;break;case 268435456:n=at;break;default:n=rt}return r=jf.bind(null,e),n=Ye(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Xe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var r=X;return r=yt(e,e===Qu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),Af(e,$e()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(uf())return null;Pd(e,t,!0)}function Nf(){bp(function(){J&6?Ye(tt,Of):kf()})}function Pf(){if(Tf===0){var e=qa;e===0&&(e=ht,ht<<=1,!(ht&261888)&&(ht=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:kn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Ft]||null).action),o=r.submitter;o&&(t=(t=o[Ft]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Zn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);cc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),cc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<wi.length;Lf++){var Rf=wi[Lf];Ti(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}Ti(gi,`onAnimationEnd`),Ti(_i,`onAnimationIteration`),Ti(vi,`onAnimationStart`),Ti(`dblclick`,`onDoubleClick`),Ti(`focusin`,`onFocus`),Ti(`focusout`,`onBlur`),Ti(yi,`onTransitionRun`),Ti(bi,`onTransitionStart`),Ti(xi,`onTransitionCancel`),Ti(Si,`onTransitionEnd`),$t(`onMouseEnter`,[`mouseout`,`mouseover`]),$t(`onMouseLeave`,[`mouseout`,`mouseover`]),$t(`onPointerEnter`,[`pointerout`,`pointerover`]),$t(`onPointerLeave`,[`pointerout`,`pointerover`]),Qt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Qt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Qt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Qt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Lt];n===void 0&&(n=t[Lt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Xt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=Wt(c),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){r=a=o;continue a}c=c.parentNode}}r=r.return}Ln(function(){var r=a,i=Mn(n),o=[];a:{var c=Ci.get(e);if(c!==void 0){var l=Zn,u=e;switch(e){case`keypress`:if(Kn(n)===0)break a;case`keydown`:case`keyup`:l=mr;break;case`focusin`:u=`focus`,l=ar;break;case`focusout`:u=`blur`,l=ar;break;case`beforeblur`:case`afterblur`:l=ar;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=rr;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=ir;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=_r;break;case gi:case _i:case vi:l=or;break;case Si:l=vr;break;case`scroll`:case`scrollend`:l=$n;break;case`wheel`:l=yr;break;case`copy`:case`cut`:case`paste`:l=sr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=hr;break;case`submit`:l=gr;break;case`toggle`:case`beforetoggle`:l=br}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Rn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),o.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==jn&&(u=n.relatedTarget||n.fromElement)&&(Wt(u)||u[It]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Wt(l):null,l!==null&&(f=s(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=rr,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=hr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Kt(c),h=l==null?u:Kt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Wt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?re(c,l,Yf):null,c!==null&&Xf(o,u,c,d,!1),l!==null&&f!==null&&Xf(o,f,l,d,!0)))}a:{if(c=r?Kt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Br;else if(Pr(c)){if(Vr)_=Xr;else{_=Jr;var v=qr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&En(r.elementType)&&(_=Br):_=Yr;if(_&&=_(e,r)){Fr(o,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Kt(r):window,e){case`focusin`:(Pr(v)||v.contentEditable===`true`)&&(oi=v,si=r,ci=null);break;case`focusout`:ci=si=oi=null;break;case`mousedown`:li=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:li=!1,ui(o,n,i);break;case`selectionchange`:if(ai)break;case`keydown`:case`keyup`:ui(o,n,i)}var y;if(Sr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else Ar?Or(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Tr&&n.locale!==`ko`&&(Ar||b!==`onCompositionStart`?b===`onCompositionEnd`&&Ar&&(y=Gn()):(Hn=i,Un=`value`in Hn?Hn.value:Hn.textContent,Ar=!0)),v=Jf(r,b),0<v.length&&(b=new cr(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:(y=kr(n),y!==null&&(b.data=y)))),(y=wr?jr(e,n):Mr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new cr(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:v,listeners:b}),v.data=y)),If(o,e,r,n,i)}Vf(o,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Rn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Rn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Rn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Rn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,i,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&Sn(e,``+r);else return;break;case`className`:sn(e,`class`,r);break;case`tabIndex`:sn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:sn(e,n,r);break;case`style`:Tn(e,r,o);return;case`data`:if(t!==`object`){sn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=An);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=kn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),on(e,`popover`,r);break;case`xlinkActuate`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:on(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Dn.get(n)||n,on(e,n,r);else return}D=!0}function tp(e,t,n,r,i,o){switch(n){case`style`:Tn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(a(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(a(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)Sn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=An);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Zt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),o=n.slice(2,i?n.length-7:void 0),t=e[Ft]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,i);break a}D=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):on(e,n,r)}return}D=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:$(e,t,o,s,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(a(137,t));break;default:$(e,t,r,d,n,null)}}_n(e,o,c,l,u,s,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&yn(e,!!r,n,!0):yn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(a(91));break;default:$(e,t,s,c,n,null)}xn(e,r,i,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(a(137,t));default:$(e,t,u,r,n,null)}return;default:if(En(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(D=!0),o=m;break;case`name`:m!==f&&(D=!0),i=m;break;case`checked`:m!==f&&(D=!0),u=m;break;case`defaultChecked`:m!==f&&(D=!0),d=m;break;case`value`:m!==f&&(D=!0),s=m;break;case`defaultValue`:m!==f&&(D=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(a(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}gn(e,s,c,l,u,d,o,i);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(i in r)if(o=r[i],l=n[i],r.hasOwnProperty(i)&&(o!=null||l!=null))switch(i){case`value`:o!==l&&(D=!0),p=o;break;case`defaultValue`:o!==l&&(D=!0),c=o;break;case`multiple`:o!==l&&(D=!0),s=o;default:o!==l&&$(e,t,i,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?yn(e,!!n,n?[]:``,!1):yn(e,!!n,t,!0)):yn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(s in r)if(i=r[s],o=n[s],r.hasOwnProperty(s)&&(i!=null||o!=null))switch(s){case`value`:i!==o&&(D=!0),p=i;break;case`defaultValue`:i!==o&&(D=!0),m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(a(91));break;default:i!==o&&$(e,t,s,i,r,o)}bn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(D=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(a(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(En(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[E]=r,n[Ft]=t,np(n,e,t),Jt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:x({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),p(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return v(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return v(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=m(this._fragmentFiber);if(t===null)return!0;t=v(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){p(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=v(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];p(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=m(this._fragmentFiber);e!==null&&(e=v(e),e=lp(e).activeElement,e!==null&&p(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=v(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),p(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=v(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),p(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=v(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return p(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=v(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=m(this._fragmentFiber);return t===null?this:v(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=m(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];p(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=v(t);if(n.length===0){if(n=r,h(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=g(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=v(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=v(n[0]),i=v(n[n.length-1]);var a=h(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Wt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=m(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=re(n,a,ne),t===null?t=!1:(p(t,!0,ee,a,n),a=y,y=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=re(r,a,ne),t===null?t=!1:(p(t,!0,te,a,r),a=y,b=y=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(a(566));var t=[];p(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=g(this._fragmentFiber);if(r=n?r[1]||r[0]||m(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=v(r),Zp(e,n);return}if(r=v(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=v(i),Zp(i,n)):v(i).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=v(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Ut(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(a(452));return e;case`head`:if(e=t.head,!e)throw Error(a(453));return e;case`body`:if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===An&&(e.onclick=null),Ut(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ut(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=w.d;w.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Rd();return e||t}function Cm(e){var t=Gt(e);t!==null&&t.tag===5&&t.type===`form`?uc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=hn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Jt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+hn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+hn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+hn(n.imageSizes)+`"]`)):i+=`[href="`+hn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=x({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Ht]=!0,o.onload=o.onerror=function(){Yt(o)}),Jt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+hn(r)+`"][href="`+hn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=x({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Jt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=qt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=x({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Jt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=qt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=x({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Jt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=qt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=x({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Jt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var i=(i=Pe.current)?bm(i):null;if(!i)throw Error(a(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=qt(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=qt(i).hoistableStyles,s=o.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=i.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(i,e,o,s.state))),t&&r===null)throw Error(a(528,``));return s}if(t&&r!==null)throw Error(a(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=qt(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Pm(e){return`href="`+hn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ht]){r.loading=1;return}}else t=e.createElement(`link`),t[Ht]=!0,t.onload=t.onerror=Yt.bind(null,t),np(t,`link`,n),Jt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+hn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+hn(n.href)+`"]`);if(r)return t.instance=r,Jt(r),r;var i=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Jt(r),np(r,`style`,i),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Pm(n.href);var o=e.querySelector(Fm(i));if(o)return t.state.loading|=4,t.instance=o,Jt(o),o;r=Im(n),(i=vm.get(i))&&Hm(r,i),o=(e.ownerDocument||e).createElement(`link`),Jt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(i=e.querySelector(zm(o)))?(t.instance=i,Jt(i),i):(r=n,(i=vm.get(o))&&(r=x({},n),Um(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Jt(i),np(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(a(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Vt]||a[E]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Jt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Jt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ue,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Hi(3,null,null,t),e.current=a,a.stateNode=e,t=Ba(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Co(a),e}function uh(e){return e?(e=Bi,e):Bi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=To(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Eo(e,r,t),n!==null&&(Nd(n,e,t),Do(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Li(e,67108864);t!==null&&Nd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=Ad();t=At(t);var n=Li(e,t);n!==null&&Nd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=2,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function vh(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=8,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Gt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=vt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-dt(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(J&6)&&(hd=$e()+500,Df(0,!1))}}break;case 31:case 13:s=Li(a,2),s!==null&&Nd(s,a,2),Rd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Mn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Wt(e),e!==null){var t=s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=c(t),e!==null)return e;e=null}else if(n===31){if(e=l(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(et()){case tt:return 2;case nt:return 8;case rt:case it:return 32;case at:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Gt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Wt(e.target);if(t!==null){var n=s(t);if(n!==null){if(t=n.tag,t===13){if(t=c(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=l(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jn=r,n.target.dispatchEvent(r),jn=null}else return t=Gt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Gt(n);a!==null&&(e.splice(t,3),t-=3,cc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ft]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ft]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current;dh(n,Ad(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Rd(),t[It]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(a(527,Kh,`19.3.1`));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(a(188)):(e=Object.keys(e).join(`,`),Error(a(268,e)));return e=d(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:C,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{ct=Jh.inject(qh),lt=Jh}catch{}}e.createRoot=function(e,t){if(!o(e))throw Error(a(299));var n=!1,r=``,i=jc,s=Mc,c=Nc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,i,s,c,Uh),e[It]=t.current,Wf(e),new Wh(t)}})),ze=t(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=Re()})),T=e(i(),1),Be=ze(),Ve=`sb_publishable_KSA1QN0oGDy_QwDlUW8k4A_BbJIu9N9`,He=`students.pylearn.app`,Ue=!!Ve,We=Symbol.for(`@supabase/supabase-js.traceContextExtractor`);function Ge(){return globalThis[We]}function Ke(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function qe(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var Je=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ye=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},Xe=class extends Ye{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},Ze=class extends Ye{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},Qe=class extends Ye{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},$e;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})($e||={});var et=class{constructor(e,{headers:t={},customFetch:n,region:r=$e.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=Je(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return qe(this,arguments,void 0,function*(e,t={}){var n;let r,i,a;try{let{headers:n,method:o,body:s,signal:c,timeout:l}=t,u={},{region:d}=t;d||=this.region;let f=new URL(`${this.url}/${e}`);d&&d!==`any`&&(u[`x-region`]=d,f.searchParams.set(`forceFunctionRegion`,d));let p,m=!!n&&Object.keys(n).some(e=>e.toLowerCase()===`content-type`);s&&!m?typeof Blob<`u`&&s instanceof Blob||s instanceof ArrayBuffer?(u[`Content-Type`]=s.type||`application/octet-stream`,p=s):typeof s==`string`?(u[`Content-Type`]=`text/plain`,p=s):typeof FormData<`u`&&s instanceof FormData?p=s:(u[`Content-Type`]=`application/json`,p=JSON.stringify(s)):p=s&&typeof s!=`string`&&!(typeof Blob<`u`&&s instanceof Blob)&&!(s instanceof ArrayBuffer)&&!(typeof FormData<`u`&&s instanceof FormData)?JSON.stringify(s):s;let h=c;l&&(i=new AbortController,r=setTimeout(()=>i.abort(),l),c?(h=i.signal,a=()=>i.abort(),c.addEventListener(`abort`,a)):h=i.signal);let g=yield this.fetch(f.toString(),{method:o||`POST`,headers:Object.assign(Object.assign(Object.assign({},u),this.headers),n),body:p,signal:h}).catch(e=>{throw new Xe(e)}),_=g.headers.get(`x-relay-error`);if(_&&_===`true`)throw new Ze(g);if(!g.ok)throw new Qe(g);let v=(g.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim().toLowerCase(),y;return y=v===`application/json`?yield g.json():v===`application/octet-stream`||v===`application/pdf`?yield g.blob():v===`text/event-stream`?g:v===`multipart/form-data`?yield g.formData():yield g.text(),{data:y,error:null,response:g}}catch(e){return{data:null,error:e,response:e instanceof Qe||e instanceof Ze?e.context:void 0}}finally{r&&clearTimeout(r),a&&((n=t.signal)==null||n.removeEventListener(`abort`,a))}})}},tt=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}},nt=3,rt=e=>Math.min(1e3*2**e,3e4),it=[520,503],at=[`GET`,`HEAD`,`OPTIONS`];function ot(e){"@babel/helpers - typeof";return ot=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ot(e)}function st(e,t){if(ot(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ot(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ct(e){var t=st(e,`string`);return ot(t)==`symbol`?t:t+``}function lt(e,t,n){return(t=ct(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ut(Object(n),!0).forEach(function(t){lt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ft(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function pt(e,t,n,r){return!(!r||n>=nt||!at.includes(e)||!it.includes(t))}async function mt(e,t,n,r){let i=0;for(;;){let a=dt({},n.headers);i>0&&(a[`X-Retry-Count`]=String(i));let o;try{o=await e(t,{method:n.method,headers:a,body:n.body,signal:n.signal})}catch(e){if(e?.name===`AbortError`||e?.code===`ABORT_ERR`||e?.name===`TimeoutError`&&n.signal?.aborted||!at.includes(n.method))throw e;if(r&&i<nt){let e=rt(i);i++,await ft(e,n.signal);continue}throw e}if(pt(n.method,o.status,i,r)){let e=o.headers?.get(`Retry-After`)??null,t=e===null?rt(i):Math.max(0,parseInt(e,10)||0)*1e3;await o.text(),i++,await ft(t,n.signal)}else return o}}var ht=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,this.fetch=e.fetch?e.fetch:fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e={};n.headers.forEach((t,n)=>{e[n]=t});let t=await mt(r,n.url.toString(),{method:n.method,headers:e,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal},n.retryEnabled);return await n.processResponse(t)})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let i=await e.text();if(i!==``){if(t.headers.get(`Accept`)===`text/csv`)r=i;else if(t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`))r=i;else try{r=JSON.parse(i)}catch{if(n={message:i},r=null,t.shouldThrowOnError)throw new tt({message:i,details:``,hint:``,code:``})}}}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);if(s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)){if(r.length>1){if(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`,t.shouldThrowOnError)throw new tt(dt(dt({},n),{},{hint:n.hint??``}))}else r=r.length===1?r[0]:null}}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new tt(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},gt=class extends ht{throwOnError(){return super.throwOnError()}select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},_t=RegExp(`[,()]`),vt=class extends gt{throwOnError(){return super.throwOnError()}eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&_t.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&_t.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},yt=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new vt({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new vt({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new vt({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new vt({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new vt({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function bt(e,t){try{let t=JSON.parse(e);if(t&&typeof t==`object`&&!Array.isArray(t))return new tt({message:String(t.message??e),details:t.details??``,hint:t.hint??``,code:t.code??``})}catch{}return new tt({message:e||t,details:``,hint:``,code:``})}function xt(e,t,n){let r=e;return{success:!1,error:new tt({message:`${r?.name??`FetchError`}: ${r?.message}`,details:``,hint:``,code:``}),data:null,count:null,status:t,statusText:n}}var St=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;this.fetch=i!==void 0&&i>0?(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,dt(dt({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,dt(dt({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new yt(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}async getOpenApiSpec(){var e=this;let t=new Headers(e.headers);t.set(`Accept`,`application/openapi+json`),e.schemaName&&t.set(`Accept-Profile`,e.schemaName);let n={};t.forEach((e,t)=>{n[t]=e});let r=e.fetch??globalThis.fetch,i;try{i=await mt(r,`${e.url}/`,{method:`GET`,headers:n},e.retry??!0)}catch(e){return xt(e,0,``)}let a;try{a=await i.text()}catch(e){return xt(e,i.status,i.statusText)}if(i.ok)try{return{success:!0,error:null,data:JSON.parse(a),count:null,status:i.status,statusText:i.statusText}}catch{}return{success:!1,error:bt(a,i.statusText),data:null,count:null,status:i.status,statusText:i.statusText}}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new vt({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},Ct=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node)return{type:`unsupported`,error:`Node.js detected but native WebSocket not found.`,workaround:`Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.`}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type===`native`}catch{return!1}}},wt=`realtime-js/2.118.0`,Tt=`1.0.0`,Et=`2.0.0`,Dt=Et,Ot=1e4,kt=15e3,At=1e4,jt={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Mt={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},Nt={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},Pt=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=new TextEncoder,i=r.encode(e.topic),a=r.encode(e.ref??``),o=r.encode(e.join_ref??``),s=r.encode(e.payload.event),c=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},l=r.encode(Object.keys(c).length===0?``:JSON.stringify(c));if(o.length>255)throw Error(`joinRef length ${o.length} exceeds maximum of 255`);if(a.length>255)throw Error(`ref length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`topic length ${i.length} exceeds maximum of 255`);if(s.length>255)throw Error(`userEvent length ${s.length} exceeds maximum of 255`);if(l.length>255)throw Error(`metadata length ${l.length} exceeds maximum of 255`);let u=this.USER_BROADCAST_PUSH_META_LENGTH+o.length+a.length+i.length+s.length+l.length,d=new ArrayBuffer(this.HEADER_LENGTH+u),f=new DataView(d),p=new Uint8Array(d),m=0;f.setUint8(m++,this.KINDS.userBroadcastPush),f.setUint8(m++,o.length),f.setUint8(m++,a.length),f.setUint8(m++,i.length),f.setUint8(m++,s.length),f.setUint8(m++,l.length),f.setUint8(m++,t),p.set(o,m),m+=o.length,p.set(a,m),m+=a.length,p.set(i,m),m+=i.length,p.set(s,m),m+=s.length,p.set(l,m),m+=l.length;var h=new Uint8Array(d.byteLength+n.byteLength);return h.set(new Uint8Array(d),0),h.set(new Uint8Array(n),d.byteLength),h.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},E;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(E||={});var Ft=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=It(i,e,t,r),n),{}):{}},It=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?Lt(i,a):Rt(a)},Lt=(e,t)=>{if(e.charAt(0)===`_`)return Ht(t,e.slice(1,e.length));switch(e){case E.bool:return zt(t);case E.float4:case E.float8:case E.int2:case E.int4:case E.int8:case E.numeric:case E.oid:return Bt(t);case E.json:case E.jsonb:return Vt(t);case E.timestamp:return Ut(t);case E.abstime:case E.date:case E.daterange:case E.int4range:case E.int8range:case E.money:case E.reltime:case E.text:case E.time:case E.timestamptz:case E.timetz:case E.tsrange:case E.tstzrange:return Rt(t);default:return Rt(t)}},Rt=e=>e,zt=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},Bt=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Vt=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},Ht=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>Lt(t,e))}return e},Ut=e=>typeof e==`string`?e.replace(` `,`T`):e,Wt=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},Gt=e=>typeof e==`function`?e:function(){return e},Kt=typeof self<`u`?self:null,qt=typeof window<`u`?window:null,Jt=Kt||qt||globalThis,Yt=`2.0.0`,Xt=1e4,Zt=1e3,Qt=100,$t={connecting:0,open:1,closing:2,closed:3},en={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},tn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},nn={longpoll:`longpoll`,websocket:`websocket`},rn={complete:4},D=`base64url.bearer.phx.`,an=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},on=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},sn=class{constructor(e,t,n){this.state=en.closed,this.topic=e,this.params=Gt(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new an(this,tn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new on(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=en.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=en.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=en.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=en.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new an(this,tn.leave,Gt({}),this.timeout).send(),this.state=en.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(tn.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=en.closed,this.bindings=[]}onClose(e){this.on(tn.close,e)}onError(e){return this.on(tn.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>n.event!==e||t!==void 0&&t!==n.ref)}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new an(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=en.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(tn.close,`leave`)},n=new an(this,tn.leave,Gt({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=en.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===en.closed}isErrored(){return this.state===en.errored}isJoined(){return this.state===en.joined}isJoining(){return this.state===en.joining}isLeaving(){return this.state===en.leaving}},cn=class{static request(e,t,n,r,i,a,o){if(Jt.XDomainRequest){let n=new Jt.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}if(Jt.XMLHttpRequest){let s=new Jt.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}if(Jt.fetch&&Jt.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),Jt.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===rn.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},ln=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},un=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(D)&&(this.authToken=atob(t[1].slice(D.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=$t.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+nn.websocket),`$1/`+nn.longpoll)}endpointURL(){return cn.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=$t.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===$t.open||this.readyState===$t.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=$t.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=ln(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e,t=0){this.awaitingBatchAck=!0;let n=t+Qt,r=e.slice(t,n);this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},r.join(`
`),()=>this.onerror(`timeout`),t=>{!t||t.status!==200?(this.awaitingBatchAck=!1,this.onerror(t&&t.status),this.closeAndRetry(1011,`internal server error`,!1)):n<e.length?this.batchSend(e,n):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=$t.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=cn.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},dn=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state=Object.create(null),this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.toNullProtoObj(this.clone(e));t=this.toNullProtoObj(t);let a=Object.create(null),o=Object.create(null);return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){e=this.toNullProtoObj(e);let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(n=>{t[n]=e[n]}),t}static clone(e){return JSON.parse(JSON.stringify(e))}},fn={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=new TextEncoder,s=o.encode(t),c=o.encode(n),l=o.encode(i),u=o.encode(r);this.assertFieldSize(s.byteLength,`join_ref`),this.assertFieldSize(c.byteLength,`ref`),this.assertFieldSize(l.byteLength,`topic`),this.assertFieldSize(u.byteLength,`event`);let d=this.META_LENGTH+s.byteLength+c.byteLength+l.byteLength+u.byteLength,f=new ArrayBuffer(this.HEADER_LENGTH+d),p=new Uint8Array(f),m=new DataView(f),h=0;m.setUint8(h++,this.KINDS.push),m.setUint8(h++,s.byteLength),m.setUint8(h++,c.byteLength),m.setUint8(h++,l.byteLength),m.setUint8(h++,u.byteLength),p.set(s,h),h+=s.byteLength,p.set(c,h),h+=c.byteLength,p.set(l,h),h+=l.byteLength,p.set(u,h),h+=u.byteLength;var g=new Uint8Array(f.byteLength+a.byteLength);return g.set(p,0),g.set(new Uint8Array(a),f.byteLength),g.buffer},assertFieldSize(e,t){if(e>255)throw Error(`unable to convert ${t} to binary: must be less than or equal to 255 bytes, but is ${e} bytes`)},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:tn.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},pn=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||Xt,this.transport=t.transport||Jt.WebSocket||un,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=Jt&&Jt.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=fn.encode.bind(fn),this.defaultDecoder=fn.decode.bind(fn),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===un?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;qt&&qt.addEventListener&&(qt.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),qt.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),qt.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=Gt(t.params||{}),this.endPoint=`${e}/${nn.websocket}`,this.vsn=t.vsn||Yt,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new on(()=>{this.pageHidden?(this.log(`Not reconnecting as page is hidden!`),this.teardown()):this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken&&Gt(t.authToken)}getLongPollTransport(){return un}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=cn.appendParams(cn.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=Gt(e)),(!this.conn||this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==un?this.connectWithFallback(un,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case un:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${D}${btoa(this.authToken()).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a,o=this.transportName(e),s=t=>{this.log(`transport`,`falling back to ${o}...`,t),this.off([i,a]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${o}`))return s(`memorized`);this.fallbackTimer=setTimeout(s,t),a=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),s(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(s,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Zt,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){n===5||!e.bufferedAmount?t():setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){n===5||e.readyState===$t.closed?t():setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(tn.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case $t.connecting:return`connecting`;case $t.open:return`open`;case $t.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new sn(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return this.ref=e===this.ref?0:e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected())try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}else if(this.pendingHeartbeatRef)this.heartbeatTimeout();else{this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},mn=class e{constructor(t,n){let r=_n(n);this.presence=new dn(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=gn(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=hn(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:vn(t),newPresences:hn(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:vn(t),leftPresences:hn(n)}}};function hn(e){return e.metas.map(e=>{let t=Object.getOwnPropertyDescriptors(e),n=Object.defineProperties({},t);return n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n})}function gn(e){return JSON.parse(JSON.stringify(e))}function _n(e){return e?.events&&{events:e.events}}function vn(e){return e?.metas?hn(e):[]}var yn;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(yn||={});var bn=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new mn(this.channel.channelAdapter,t)}};function xn(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var Sn=class{constructor(e,t,n){let r=Cn(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===jt.joined}isJoined(){return this.state===jt.joined}isJoining(){return this.state===jt.joining}isClosed(){return this.state===jt.closed}isLeaving(){return this.state===jt.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function Cn(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var wn=/[,()"\\]/,Tn=e=>wn.test(e)||e!==e.trim(),En=e=>`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`)}"`,Dn=e=>{let t=e===null?`null`:String(e);return Tn(t)?En(t):t},On=e=>e===null?`null`:String(e),kn=(e,t)=>{if(e===`in`){let e=Array.isArray(t)?t:[t];if(e.length===0)throw Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(e)).map(e=>Dn(e)).join(`,`)})`}return e===`is`?`is.${On(t)}`:`${e}.${Dn(t)}`},An=class{constructor(){this.filters=[]}add(e,t,n,r=!1){let i=r?`not.`:``;return this.filters.push(`${e}=${i}${kn(t,n)}`),this}eq(e,t){return this.add(e,`eq`,t)}neq(e,t){return this.add(e,`neq`,t)}gt(e,t){return this.add(e,`gt`,t)}gte(e,t){return this.add(e,`gte`,t)}lt(e,t){return this.add(e,`lt`,t)}lte(e,t){return this.add(e,`lte`,t)}in(e,t){return this.add(e,`in`,t)}like(e,t){return this.add(e,`like`,t)}ilike(e,t){return this.add(e,`ilike`,t)}match(e,t){return this.add(e,`match`,t)}imatch(e,t){return this.add(e,`imatch`,t)}is(e,t){return this.add(e,`is`,t)}isDistinct(e,t){return this.add(e,`isdistinct`,t)}not(e,t,n){return this.add(e,t,n,!0)}build(){return this.filters.join(`,`)}toString(){return this.build()}},jn;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(jn||={});var Mn;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(Mn||={});var Nn;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(Nn||={});var Pn=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new Sn(this.socket.socketAdapter,e,this.params),this.presence=new bn(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Wt(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i,postgres_changes_options:a}}=this.params,o=this.bindings.postgres_changes?.map(e=>e.filter)??[],s=!!this.bindings[Mn.PRESENCE]&&this.bindings[Mn.PRESENCE].length>0||this.params.config.presence?.enabled===!0,c={},l=Object.assign({broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:s}),postgres_changes:o,private:i},a?{postgres_changes_options:a}:{});this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(Nn.CHANNEL_ERROR,xn(t))}),this._onClose(()=>e?.(Nn.CLOSED)),this.updateJoinPayload(Object.assign({config:l},c)),this._updateFilterMessage();let u=a?.wait&&o.length>0?Math.max(t,(a.timeout??kt)+At):t;this.channelAdapter.subscribe(u).receive(`ok`,async({postgres_changes:t})=>{this.socket._isManualToken()||this.socket.setAuth(),t===void 0?e?.(Nn.SUBSCRIBED):this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=jt.errored;let n=Object.values(t).join(`, `)||`error`;e?.(Nn.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(Nn.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=jt.errored,n?.(Nn.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=jt.errored&&n&&n(Nn.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Mn.PRESENCE||e===Mn.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r=t instanceof ArrayBuffer||ArrayBuffer.isView(t),i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":r?`application/octet-stream`:`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a=new URL(this.broadcastEndpointURL);a.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&a.searchParams.set(`private`,`true`);let o={method:`POST`,headers:i,body:r?t:JSON.stringify(t)},s=await this._fetchWithTimeout(a.toString(),o,n.timeout??this.timeout);if(s.status===202)return{success:!0};if(s.status===404)return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));let c=s.statusText;try{let e=await s.json();c=e.error||e.message||c}catch{}return Promise.reject(Error(c))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){let n=`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`;this.socket.hasLogger()?this.socket.log(`channel`,n):console.warn(n);let{event:r,payload:i}=e,a={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);let o={method:`POST`,headers:a,body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:i,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,o,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(t,n,r){let i=t.toLocaleLowerCase(),a=n?.filter;if((a instanceof An||typeof a==`object`&&a&&typeof a.build==`function`)&&(n=Object.assign(Object.assign({},n),{filter:a.build()})),i===Mn.POSTGRES_CHANGES&&this.bindings[i]?.find(t=>e.isSamePostgresFilter(t.filter,n)))return this.socket.log(`error`,`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,n),this;let o=this.channelAdapter.on(t,r),s={type:i,filter:n,callback:r,ref:o};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r)){if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}}return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=Mt;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}static isSamePostgresFilter(t,n){let r=(t?.select)?.join()??void 0,i=(n?.select)?.join()??void 0;return t?.event===n?.event&&e.isFilterValueEqual(t?.schema,n?.schema)&&e.isFilterValueEqual(t?.table,n?.table)&&e.isFilterValueEqual(t?.filter,n?.filter)&&r===i}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=Ft(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=Ft(e.columns,e.old_record)),t}},Fn=class{constructor(e,t){this.socket=new pn(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}hasLogger(){return this.socket.hasLogger()}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Nt.connecting}isDisconnecting(){return this.socket.connectionState()==Nt.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},In={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Ln=[1e3,2e3,5e3,1e4],Rn=1e4;function zn(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function Bn(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return zn()}var Vn=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,Hn=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new Pt,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new Fn(e,n),this.httpEndpoint=Wt(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}hasLogger(){return this.socketAdapter.hasLogger()}connectionState(){return this.socketAdapter.connectionState()||Nt.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new Pn(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){let t=++this._authGeneration,n=this._performAuth(e,t);t===this._authGeneration&&(this._authPromise=n);try{await n}finally{this._authPromise===n&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0?(this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect()):(this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`))}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,t){let n,r=!1;if(e)n=e,r=!0;else if(this.accessToken)try{n=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),n=this.accessTokenValue}else n=this.accessTokenValue;t===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:r&&(this._manuallySetToken=!0),this.accessTokenValue!=n&&(this.accessTokenValue=n,this.channels.forEach(e=>{let t={access_token:n,version:wt};e.updateJoinPayload(t),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(Mt.access_token,{access_token:n})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t!==`disconnected`&&(t==`sent`&&this._setAuthSafely(),e&&e(t,n))}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([Vn],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??Ot,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??In.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??In.HEARTBEAT_INTERVAL),t.transport=e?.transport??Ct.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??Bn(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>Ln[e-1]||Rn);let n,r,i=e?.vsn??Dt;switch(i){case Tt:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case Et:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},Un=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Wn(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function Gn(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function Kn(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=Wn(e.baseUrl,r,i),c=await Gn(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new Un(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function qn(e){return e.join(``)}var Jn=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:qn(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${qn(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${qn(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${qn(e.namespace)}`}),!0}catch(e){if(e instanceof Un&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof Un&&e.status===409)return;throw e}}};function Yn(e){return e.join(``)}var Xn=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Yn(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Yn(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Yn(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Yn(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Yn(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Yn(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof Un&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof Un&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},Zn=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=Kn({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new Jn(this.client,t),this.tableOps=new Xn(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function Qn(e){"@babel/helpers - typeof";return Qn=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qn(e)}function $n(e,t){if(Qn(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Qn(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function er(e){var t=$n(e,`string`);return Qn(t)==`symbol`?t:t+``}function tr(e,t,n){return(t=er(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nr(Object(n),!0).forEach(function(t){tr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var rr=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function ir(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var ar=class extends rr{constructor(e,t,n,r=`storage`,i){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n,this.code=i}toJSON(){return O(O({},super.toJSON()),{},{code:this.code})}},or=class extends rr{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function sr(e,t,n){let r=O({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function cr(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var lr=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),ur=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dr=e=>{if(Array.isArray(e))return e.map(e=>dr(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=dr(n)}),t},fr=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),pr=e=>e.split(`/`).map(encodeURIComponent).join(`/`),mr=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},hr=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new ar(mr(e),i,n,r,e?.code))}).catch(()=>{let e=i+``;t(new ar(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new or(mr(e),e,r))},gr=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return O(O({},i),n);if(ur(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=sr(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),O(O({},i),n)};async function _r(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,gr(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>hr(e,c,r,o))})}function vr(e=`storage`){return{get:async(t,n,r,i)=>_r(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>_r(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>_r(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>_r(t,`HEAD`,n,O(O({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>_r(t,`DELETE`,n,i,a,r,e)}}var{get:yr,post:br,put:xr,head:Sr,remove:Cr}=vr(`storage`),wr=vr(`vectors`),Tr=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=cr(t),this.fetch=lr(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=sr(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(ir(e))return{data:null,error:e};throw e}}},Er=Symbol.toStringTag,Dr=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Er]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(ir(t))return{data:null,error:t};throw t}}},Or=Symbol.toStringTag,kr=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Or]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new Dr(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(ir(t))return{data:null,error:t};throw t}}},Ar={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},jr={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},Mr=class extends Tr{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=O(O({},jr),r),s=O(O({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob||typeof FormData<`u`&&n instanceof FormData?a=i.prepareUploadFormData(n,o):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,o.contentEncoding&&(s[`content-encoding`]=o.contentEncoding),c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=sr(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?xr:br)(i.fetch,`${i.url}/object/${u}`,a,O({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=O(O({},jr),r),o=O(O({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob||typeof FormData<`u`&&n instanceof FormData?e=i.prepareUploadFormData(n,t):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,t.contentEncoding&&(o[`content-encoding`]=t.contentEncoding),c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=sr(o,e,t);return{path:a,fullPath:(await xr(i.fetch,s.toString(),e,O({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=O({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await br(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new rr(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await br(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket,sourceVersionId:n?.sourceVersionId},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>{let i=n;return{path:(await br(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket,sourceVersionId:n?.sourceVersionId,copyMetadata:typeof i?.copyMetadata==`boolean`?i.copyMetadata:void 0,metadata:i?.copyMetadata===!1?i.metadata:void 0},{headers:r.headers})).Key}})}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await br(r.fetch,`${r.url}/object/sign/${i}`,O(O({expiresIn:t},a?{transform:n.transform}:{}),n?.versionId==null?{}:{versionId:n.versionId}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await br(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>O(O({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce)),t?.versionId!=null&&i.set(`versionId`,String(t.versionId));let a=i.toString(),o=this._getFinalPath(e);return new kr(()=>yr(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e,t){var n=this;let r=n._getFinalPath(e),i=new URLSearchParams;t?.versionId!=null&&i.set(`versionId`,String(t.versionId));let a=i.toString();return n.handleOperation(async()=>dr(await yr(n.fetch,`${n.url}/object/info/${r}${a?`?${a}`:``}`,{headers:n.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await Sr(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(ir(e)){let t=e instanceof ar?e.status:e instanceof or?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce)),t?.versionId!=null&&r.set(`versionId`,String(t.versionId));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await Cr(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async purgeCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=pr(r._getFinalPath(e)),a=new URLSearchParams;t?.transformations&&a.set(`transformations`,`true`);let o=a.toString();return await Cr(r.fetch,`${r.url}/cdn/${i}${o?`?${o}`:``}`,{},{headers:r.headers},n)})}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=t?.sortBy?O(O({},Ar.sortBy),t.sortBy):Ar.sortBy,a=O(O(O({},Ar),t),{},{sortBy:i,prefix:e||``});return await br(r.fetch,`${r.url}/object/list/${r.bucketId}`,a,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=O({},e);return await br(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}prepareUploadFormData(e,t){let n=new FormData,r=[];e instanceof FormData?e.forEach((e,t)=>{typeof e==`string`?n.append(t,e):r.push([t,e])}):r.push([``,e]),n.has(`cacheControl`)||n.append(`cacheControl`,t.cacheControl),t.metadata&&!n.has(`metadata`)&&n.append(`metadata`,this.encodeMetadata(t.metadata)),t.contentEncoding&&!n.has(`contentEncoding`)&&n.append(`contentEncoding`,t.contentEncoding);for(let[e,t]of r)n.append(e,t);return n}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},Nr={"X-Client-Info":`storage-js/2.118.0`},Pr=class extends Tr{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=O(O({},Nr),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await yr(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await yr(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await br(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes,versioning_status:t.versioningStatus},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await xr(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes,versioning_status:t.versioningStatus},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await br(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Cr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}async getBucketLifecycle(e){var t=this;return t.handleOperation(async()=>await yr(t.fetch,t.bucketLifecycleUrl(e),{headers:t.headers}))}async updateBucketLifecycle(e,t){var n=this;return n.handleOperation(async()=>await xr(n.fetch,n.bucketLifecycleUrl(e),t,{headers:n.headers}))}async deleteBucketLifecycle(e){var t=this;return t.handleOperation(async()=>await Cr(t.fetch,t.bucketLifecycleUrl(e),{},{headers:t.headers}))}async purgeBucketCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=new URLSearchParams;t?.transformations&&i.set(`transformations`,`true`);let a=i.toString();return await Cr(r.fetch,`${r.url}/cdn/${pr(e)}${a?`?${a}`:``}`,{},{headers:r.headers},n)})}bucketLifecycleUrl(e){return`${this.url}/bucket/${pr(e)}/lifecycle`}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},Fr=class extends Tr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=O(O({},Nr),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await br(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await yr(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Cr(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!fr(e))throw new rr(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new Zn({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},Ir=class extends Tr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=O(O({},Nr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await wr.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await wr.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},Lr=class extends Tr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=O(O({},Nr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},Rr=class extends Tr{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=O(O({},Nr),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await wr.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},zr=class extends Rr{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new Br(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},Br=class extends Ir{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,O(O({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,O(O({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new Vr(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},Vr=class extends Lr{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,O(O({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,O(O({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,O(O({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,O(O({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,O(O({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},Hr=class extends Pr{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new Mr(this.url,this.headers,e,this.fetch)}get vectors(){return new zr(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new Fr(this.url+`/iceberg`,this.headers,this.fetch)}},Ur=`2.118.0`,Wr=3e4,Gr=3*Wr,Kr=2*Wr,qr=`http://localhost:9999`,Jr=`supabase.auth.token`,Yr={"X-Client-Info":`gotrue-js/${Ur}`},Xr=`X-Supabase-Api-Version`,Zr={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},Qr=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,$r=`sb_flow_id`,ei=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function k(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var ti=class extends ei{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function ni(e){return k(e)&&e.name===`AuthApiError`}var ri=class extends ei{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},ii=class extends ei{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},ai=class extends ii{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function oi(e){return k(e)&&e.name===`AuthSessionMissingError`}var si=class extends ii{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},ci=class extends ii{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},li=class extends ii{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function ui(e){return k(e)&&e.name===`AuthImplicitGrantRedirectError`}var di=class extends ii{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},fi=class extends ii{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},pi=class extends ii{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function mi(e){return k(e)&&e.name===`AuthRetryableFetchError`}var hi=class extends ii{constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`){super(e,`AuthRefreshDiscardedError`,409,void 0)}};function gi(e){return k(e)&&e.name===`AuthRefreshDiscardedError`}var _i=class extends ii{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},vi=class extends ii{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},yi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),bi=` 	
\r=`.split(``),xi=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<bi.length;t+=1)e[bi[t].charCodeAt(0)]=-2;for(let t=0;t<yi.length;t+=1)e[yi[t].charCodeAt(0)]=t;return e})();function Si(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(yi[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(yi[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function Ci(e,t,n){let r=xi[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function wi(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{Di(e,r,n)};for(let t=0;t<e.length;t+=1)Ci(e.charCodeAt(t),i,a);return t.join(``)}function Ti(e,t){if(e<=127)t(e);else if(e<=2047)t(192|e>>6),t(128|e&63);else if(e<=65535)t(224|e>>12),t(128|e>>6&63),t(128|e&63);else if(e<=1114111)t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);else throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function Ei(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}Ti(r,t)}}function Di(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function Oi(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)Ci(e.charCodeAt(t),n,r);return new Uint8Array(t)}function ki(e){let t=[];return Ei(e,e=>t.push(e)),new Uint8Array(t)}function Ai(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>Si(e,n,r)),Si(null,n,r),t.join(``)}function ji(e){return Math.round(Date.now()/1e3)+e}function Mi(){return Symbol(`auth-callback`)}var Ni=()=>typeof window<`u`&&typeof document<`u`,Pi={tested:!1,writable:!1},Fi=()=>{if(!Ni())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(Pi.tested)return Pi.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Pi.tested=!0,Pi.writable=!0}catch{Pi.tested=!0,Pi.writable=!1}return Pi.writable};function Ii(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Li=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ri=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,zi=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},Bi=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},Vi=async(e,t)=>{await e.removeItem(t)},Hi=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};Hi.promiseConstructor=Promise;function Ui(e){let t=e.split(`.`);if(t.length!==3)throw new vi(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!Qr.test(t[e]))throw new vi(`JWT not in base64url format`);return{header:JSON.parse(wi(t[0])),payload:JSON.parse(wi(t[1])),signature:Oi(t[2]),raw:{header:t[0],payload:t[1]}}}async function Wi(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Gi(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function Ki(e){return(`0`+e.toString(16)).substr(-2)}function qi(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,Ki).join(``)}async function Ji(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function Yi(e){if(typeof crypto>`u`||crypto.subtle===void 0||typeof TextEncoder>`u`)return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await Ji(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}var Xi=/^[a-zA-Z0-9_-]{8,64}$/;function Zi(e){return typeof e==`string`&&Xi.test(e)?e:null}function Qi(){if(typeof crypto<`u`&&typeof crypto.getRandomValues==`function`){let e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Ki).join(``)}let e=``;for(let t=0;t<32;t++)e+=Math.floor(Math.random()*16).toString(16);return e}var $i=(e,t)=>`${e}-flow-${t}-code-verifier`,ea=e=>`${e}-flows-code-verifier`;async function ta(e,t){let n=await Bi(e,ea(t));return Array.isArray(n)?n.filter(e=>Zi(e)!==null):[]}async function na(e,t,n,r,i){await zi(e,$i(t,n),r);let a=(await ta(e,t)).filter(e=>e!==n);for(a.push(n);a.length>5;){let n=a.shift();await Vi(e,$i(t,n)),i?.(n)}await zi(e,ea(t),a),await zi(e,`${t}-code-verifier`,r)}async function ra(e,t,n){if(n){let r=await Bi(e,$i(t,n));return{verifier:typeof r==`string`?r:null,flowId:n}}let r=await Bi(e,`${t}-code-verifier`);return{verifier:typeof r==`string`?r:null,flowId:null}}async function ia(e,t,n){let r=`${t}-code-verifier`;if(!n){await Vi(e,r);return}let i=$i(t,n),a=await Bi(e,i);await Vi(e,i);let o=await ta(e,t),s=o.filter(e=>e!==n);s.length!==o.length&&(s.length>0?await zi(e,ea(t),s):await Vi(e,ea(t))),a!=null&&a===await Bi(e,r)&&await Vi(e,r)}async function aa(e,t){let n=await ta(e,t);for(let r of n)await Vi(e,$i(t,r));await Vi(e,ea(t)),await Vi(e,`${t}-code-verifier`)}function oa(e,t){let n=e.indexOf(`#`),r=n===-1?e:e.slice(0,n),i=n===-1?``:e.slice(n),a=r.indexOf(`?`);if(a!==-1){let e=r.slice(0,a),t=r.slice(a+1).split(`&`).filter(e=>e!==``&&e!==`sb_flow_id`&&!e.startsWith(`sb_flow_id=`));r=t.length>0?`${e}?${t.join(`&`)}`:e}let o=r.includes(`?`)?`&`:`?`;return`${r}${o}${$r}=${encodeURIComponent(t)}${i}`}async function sa(e,t,n=!1,r){let i=qi(),a=i;n&&(a+=`/recovery`);let o=Qi();await na(e,t,o,a,r);let s=await Yi(i);return[s,i===s?`plain`:`s256`,o]}var ca=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function la(e){let t=e.headers.get(Xr);if(!t||!t.match(ca))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function ua(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function da(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var fa=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function pa(e){if(!fa.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function A(e){if(!e.recoveryCodes)throw Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).")}function j(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function ma(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function ha(e){return JSON.parse(JSON.stringify(e))}var ga=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},_a=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function va(e){if(!Ri(e))throw new pi(ga(e),0);let t;try{t=await e.json()}catch(t){throw _a.includes(e.status)?new pi(e.statusText||`HTTP ${e.status}`,e.status):new ri(ga(t),t)}if(_a.includes(e.status))throw new pi(ga(t),e.status);let n,r=la(e);if(r&&r.getTime()>=Zr[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new _i(ga(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new _i(ga(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new ai;throw new ti(ga(t),e.status||500,n)}var ya=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function M(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[Xr]=Zr[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await ba(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function ba(e,t,n,r,i,a){let o=ya(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw new pi(ga(e),0)}if(s.ok||await va(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await va(e)}}function xa(e){let t=null;Da(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=ji(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function Sa(e){let t=xa(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function Ca(e){return{data:{user:e.user??e},error:null}}function wa(e){return{data:e,error:null}}function Ta(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=Ke(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function Ea(e){return e}function Da(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var Oa=[`global`,`local`,`others`],ka=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Li(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=Oa[0]){if(Oa.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${Oa.join(`, `)}`);try{return await M(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(k(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await M(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Ca})}catch(e){if(k(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=Ke(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await M(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:Ta,redirectTo:t?.redirectTo})}catch(e){if(k(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await M(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ca})}catch(e){if(k(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await M(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Ea});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(k(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){pa(e);try{return await M(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ca})}catch(e){if(k(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){pa(e);try{return await M(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Ca})}catch(e){if(k(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){pa(e);try{return await M(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Ca})}catch(e){if(k(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){pa(e.userId);try{let{data:t,error:n}=await M(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(k(e))return{data:null,error:e};throw e}}async _deleteFactor(e){pa(e.userId),pa(e.id);try{return{data:await M(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(k(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await M(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:Ea});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(k(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await M(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await M(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await M(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await M(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(k(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await M(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await M(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(k(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await M(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await M(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await M(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await M(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(k(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){pa(e.userId);try{return await M(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(k(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){pa(e.userId),pa(e.passkeyId);try{return await M(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(k(e))return{data:null,error:e};throw e}}};function Aa(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}globalThis&&Fi()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);var ja=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}};function Ma(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function Na(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function Pa(e){return parseInt(e,16)}function Fa(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function Ia(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=Na(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var La=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},Ra=class extends La{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function za({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new La({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new La({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new La({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new La({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new La({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new La({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new La({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new La({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Ka(t))return new La({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new La({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new La({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new La({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new La({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Ba({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new La({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new La({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Ka(t))return new La({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new La({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new La({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new La({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var Va=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function Ha(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=Ke(e,[`challenge`,`user`,`excludeCredentials`]),a=Oi(t).buffer,o=Object.assign(Object.assign({},n),{id:Oi(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:Oi(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function Ua(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=Ke(e,[`challenge`,`allowCredentials`]),i=Oi(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:Oi(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function Wa(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:Ai(new Uint8Array(e.response.attestationObject)),clientDataJSON:Ai(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function Ga(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:Ai(new Uint8Array(r.authenticatorData)),clientDataJSON:Ai(new Uint8Array(r.clientDataJSON)),signature:Ai(new Uint8Array(r.signature)),userHandle:r.userHandle?Ai(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function Ka(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function qa(){return!!(Ni()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function Ja(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Ra(`Browser returned unexpected credential type`,t)}:{data:null,error:new Ra(`Empty credential response`,t)}}catch(t){return{data:null,error:za({error:t,options:e})}}}async function Ya(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Ra(`Browser returned unexpected credential type`,t)}:{data:null,error:new Ra(`Empty credential response`,t)}}catch(t){return{data:null,error:Ba({error:t,options:e})}}}var Xa={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},Za={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function Qa(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0){if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];r[e]=t(n)?Qa(n,a):Qa(a)}else r[e]=a}}return r}function $a(e,t){return Qa(Xa,e,t||{})}function eo(e,t){return Qa(Za,e,t||{})}var to=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??Va.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await Ja({publicKey:$a(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=eo(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await Ya(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return k(e)?{data:null,error:e}:{data:null,error:new ri(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new ei(`rpId is required for WebAuthn authentication`)};try{if(!qa())return{data:null,error:new ri(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return k(e)?{data:null,error:e}:{data:null,error:new ri(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new ei(`rpId is required for WebAuthn registration`)};try{if(!qa())return{data:null,error:new ri(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status===`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return k(e)?{data:null,error:e}:{data:null,error:new ri(`Unexpected error in register`,e)}}}};Ma();var no={url:qr,storageKey:Jr,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Yr,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},ro={},io=!1,ao=class e{get jwks(){return ro[this.storageKey]?.jwks??{keys:[]}}set jwks(e){ro[this.storageKey]=Object.assign(Object.assign({},ro[this.storageKey]),{jwks:e})}get jwks_cached_at(){return ro[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){ro[this.storageKey]=Object.assign(Object.assign({},ro[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},no),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&Ni()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new ka({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Li(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock,io||(io=!0,console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`))),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new to(this),recoveryCodes:{getStatus:this._getRecoveryCodesStatus.bind(this),generate:this._generateRecoveryCodes.bind(this),verify:this._verifyRecoveryCode.bind(this),regenerate:this._regenerateRecoveryCodes.bind(this),unenroll:this._unenrollRecoveryCodes.bind(this)}},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:Fi()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Aa(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=Aa(this.memoryStorage)),Ni()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e),(e.data.event===`TOKEN_REFRESHED`||e.data.event===`SIGNED_IN`)&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Ur}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock==null?await this._initialize():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))();let e=await this.initializePromise,t=this._pendingInitNotifications??[];this._pendingInitNotifications=null;for(let e of t)await this._notifyAllSubscribers(e.event,e.session,e.broadcast);return e}async _initialize(){try{let e={},t=`none`;if(Ni()&&(e=Ii(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),Ni()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),ui(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return k(e)?this._returnResult({error:e}):this._returnResult({error:new ri(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await M(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:xa});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){let t=null;try{let n;if(`email`in e){let{email:r,password:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod()),n=await M(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t),body:{email:r,password:i,data:a?.data??{},gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},xform:xa})}else if(`phone`in e){let{phone:t,password:r,options:i}=e;n=await M(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:t,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:xa})}else throw new ci(`You must provide either an email or phone number and a password`);let{data:r,error:i}=n;if(i||!r)return await ia(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:i});let a=r.session,o=r.user;return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(await ia(this.storage,this.storageKey,t),k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await M(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Sa})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await M(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:Sa})}else throw new ci(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new si;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e,t){return await this.initializePromise,this.lock==null?this._exchangeCodeForSession(e,t):this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,t))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!Ni()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=Na(l[0]),d=o?.signInWithEthereum?.chainId;d||=Pa(await s.request({method:`eth_chainId`})),t=Ia({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[Fa(t),u]})}try{let{data:r,error:i}=await M(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:xa});if(i)throw i;if(!r||!r.session||!r.user){let e=new si;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!Ni()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await M(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:Ai(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:xa});if(i)throw i;if(!r||!r.session||!r.user){let e=new si;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e,t){let n=t?.flowId!=null,r=n?Zi(t?.flowId):Ni()?Zi(Ii(window.location.href)[$r]):null;n&&!r&&this._debug(`#_exchangeCodeForSession()`,`provided flowId is not a valid flow id`,t?.flowId);let{verifier:i,flowId:a}=n&&!r?{verifier:null,flowId:null}:await ra(this.storage,this.storageKey,r),[o,s]=(i??``).split(`/`);try{if(!o&&this.flowType===`pkce`)throw new fi;let{data:t,error:n}=await M(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:xa});if(await ia(this.storage,this.storageKey,a),n)throw n;if(!t||!t.session||!t.user){let e=new si;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(s===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,t.session)),this._returnResult({data:Object.assign(Object.assign({},t),{redirectType:s??null}),error:n})}catch(e){if(await ia(this.storage,this.storageKey,a),k(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await M(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:xa});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new si;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){let t=null;try{if(`email`in e){let{email:n,options:r}=e,i=null,a=null;this.flowType===`pkce`&&([i,a,t]=await this._getCodeChallengeAndMethod());let{error:o}=await M(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:n,data:r?.data??{},create_user:r?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:r?.captchaToken},code_challenge:i,code_challenge_method:a},redirectTo:this._maybeAppendFlowIdToRedirect(r?.emailRedirectTo,t)});return this._returnResult({data:{user:null,session:null},error:o})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await M(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new ci(`You must provide either an email or phone number.`)}catch(e){if(await ia(this.storage,this.storageKey,t),k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await M(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:xa});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){let t=null;try{let n=null,r=null;this.flowType===`pkce`&&([n,r,t]=await this._getCodeChallengeAndMethod());let i=await M(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect(e.options?.redirectTo,t)}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:n,code_challenge_method:r}),headers:this.headers,xform:wa});return i.data?.url&&Ni()&&!e.options?.skipBrowserRedirect&&window.location.assign(i.data.url),this._returnResult(i)}catch(e){if(await ia(this.storage,this.storageKey,t),k(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,this.lock==null?await this._reauthenticate():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new ai;let{error:r}=await M(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let t=null;try{let n=`${this.url}/resend`;if(`email`in e){let{email:r,type:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod());let{error:c}=await M(this.fetch,`POST`,n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t)});return c&&await ia(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:c})}if(`phone`in e){let{phone:t,type:r,options:i}=e,{data:a,error:o}=await M(this.fetch,`POST`,n,{headers:this.headers,body:{phone:t,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new ci(`You must provide either an email or phone number and a type`)}catch(e){if(await ia(this.storage,this.storageKey,t),k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,this.lock==null?await this._useSession(async e=>e):await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lock!=null&&!this.lockAcquired&&this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await Bi(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<Gr:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n)return{data:{session:await this._hydrateSessionUser(e)},error:null};let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);if(i){let e=await Bi(this.storage,this.storageKey);return e&&this._isValidSession(e)&&e.expires_at&&e.expires_at*1e3>Date.now()?this._returnResult({data:{session:await this._hydrateSessionUser(e)},error:null}):this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async _hydrateSessionUser(e){if(this.userStorage){let t=await Bi(this.userStorage,this.storageKey+`-user`);e.user=t?.user?t.user:j()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=ma(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return e}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return t=this.lock==null?await this._getUser():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await M(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ca}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new ai}:await M(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:Ca})})}catch(e){if(k(e))return oi(e)&&await this._removeSession(),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,this.lock==null?await this._updateUser(e,t):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){let n=null;try{return await this._useSession(async r=>{let{data:i,error:a}=r;if(a)throw a;if(!i.session)throw new ai;let o=i.session,s=null,c=null;this.flowType===`pkce`&&e.email!=null&&([s,c,n]=await this._getCodeChallengeAndMethod());let{data:l,error:u}=await M(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t?.emailRedirectTo,n),body:Object.assign(Object.assign({},e),{code_challenge:s,code_challenge_method:c}),jwt:o.access_token,xform:Ca});if(u)throw u;return o.user=l.user,await this._saveSession(o),await this._notifyAllSubscribers(`USER_UPDATED`,o),this._returnResult({data:{user:o.user},error:null})})}catch(e){if(await ia(this.storage,this.storageKey,n),k(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,this.lock==null?await this._setSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new ai;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=Ui(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(k(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,this.lock==null?await this._refreshSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new ai;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!Ni())throw new li(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new li(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new di(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new li(`Not a valid implicit grant flow url.`)}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new di(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code,{flowId:e[$r]});if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),r.searchParams.delete($r),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new li(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(k(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;let t=Zi(e[$r]);return t&&await Bi(this.storage,$i(this.storageKey,t))?!0:!!await Bi(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:`global`}){return await this.initializePromise,this.lock==null?await this._signOut(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let n=async()=>{await this._removeSession()},{data:r,error:i}=t;if(i&&!oi(i))return this._returnResult({error:i});let a=r.session?.access_token;if(a){let{error:t}=await this.admin.signOut(a,e);if(t&&!(ni(t)&&(t.status===404||t.status===401||t.status===403)||oi(t)))return e!==`others`&&await n(),this._returnResult({error:t})}return e!==`others`&&await n(),this._returnResult({error:null})})}onAuthStateChange(e){let t=Mi(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,this.lock==null?await this._emitInitialSession(t):await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){if(await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),gi(t))return;oi(t)||mi(t)||ni(t)&&(t.code===`refresh_token_not_found`||t.code===`refresh_token_already_used`||t.code===`session_expired`)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null,i=null;this.flowType===`pkce`&&([n,r,i]=await this._getCodeChallengeAndMethod(!0));try{return await M(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t.redirectTo,i)})}catch(e){if(await ia(this.storage,this.storageKey,i),k(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){let t=null;try{let{data:n,error:r}=await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;let{url:a,flowId:o}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return t=o,await M(this.fetch,`GET`,a,{headers:this.headers,jwt:r.session?.access_token??void 0})});if(r)throw r;return Ni()&&!e.options?.skipBrowserRedirect&&window.location.assign(n?.url),this._returnResult({data:{provider:e.provider,url:n?.url,flowId:t},error:null})}catch(n){if(k(n))return this._returnResult({data:{provider:e.provider,url:null,flowId:t},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await M(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:xa});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new si}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await ia(this.storage,this.storageKey,null),k(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await M(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken()`;this._debug(t,`begin`);try{let n=Date.now();return await Gi(async n=>(n>0&&await Wi(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await M(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:xa})),(e,t)=>{let r=200*2**e;return t&&mi(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),k(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let{url:n,flowId:r}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),Ni()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n,flowId:r},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await Bi(this.storage,this.storageKey);if(t&&this.userStorage){let e=await Bi(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await zi(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??j()}else if(t&&!t.user&&!t.user){let e=await Bi(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await Vi(this.storage,this.storageKey+`-user`),await zi(this.storage,this.storageKey,t)):t.user=j()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<Gr;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${Gr}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(gi(n)?this._debug(e,`refresh discarded by commit guard`,n):this._debug(e,`refresh failed`,n))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),mi(t)?console.warn(t):console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new ai;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug(`#_callRefreshToken()`,`returning cached failure (cooldown active)`),this.lastRefreshFailure.result;let r=`#_callRefreshToken()`;this._debug(r,`begin`);try{this.refreshingDeferred=new Hi,this.refreshingDeferred.promise.then(void 0,()=>{});let t=await Bi(this.storage,this.storageKey),{data:n,error:i}=await this._refreshAccessToken(e);if(i)throw i;if(!n.session)throw new ai;let a=await Bi(this.storage,this.storageKey);if(t!==null&&(a===null||a.refresh_token!==t.refresh_token)){this._debug(r,`commit guard: storage changed since refresh started, discarding rotated tokens`,{startedWith:`present`,nowHolds:a?`replaced`:`cleared`});let e={data:null,error:new hi};return this.refreshingDeferred.resolve(e),e}let o=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==o){this._debug(r,`commit guard (post-save): _removeSession ran during _saveSession, undoing write`),await Vi(this.storage,this.storageKey),this.userStorage&&await Vi(this.userStorage,this.storageKey+`-user`);let e={data:null,error:new hi};return this.refreshingDeferred.resolve(e),e}await this._notifyAllSubscribers(`TOKEN_REFRESHED`,n.session);let s={data:n.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(s),s}catch(i){if(this._debug(r,`error`,i),k(i)){let n={data:null,error:i};if(!mi(i)){let e=await Bi(this.storage,this.storageKey);e?.expires_at&&e.expires_at*1e3>Date.now()?this._debug(r,`proactive refresh failed, access token still valid — preserving session`):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:n,expiresAt:Date.now()+Kr},(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:t,broadcast:n});return}let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0;let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await zi(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=ha(e);await zi(this.storage,this.storageKey,r)}else{let e=ha(t);await zi(this.storage,this.storageKey,e)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug(`#_removeSession()`),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await Vi(this.storage,this.storageKey),await aa(this.storage,this.storageKey),await Vi(this.storage,this.storageKey+`-user`),this.userStorage&&await Vi(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Ni()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),Wr);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)==null||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug(`#_autoRefreshTokenTick()`,`begin`),this.lock!=null)try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Wr);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Wr}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof ja)this._debug(`auto refresh token tick lock not available`);else throw e}else if(this.refreshingDeferred!==null)this._debug(`#_autoRefreshTokenTick()`,`refresh already in flight, skipping`);else try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Wr);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Wr}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!Ni()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`){if(this.autoRefreshToken&&this._startAutoRefresh(),!e){if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{document.visibilityState===`visible`?await this._recoverAndRefresh():this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`)});else{if(document.visibilityState!==`visible`){this._debug(t,`visibilityState is no longer visible, skipping recovery`);return}await this._recoverAndRefresh()}}}else document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=n?.redirectTo,i=null,a=null,o=null;this.flowType===`pkce`&&([i,a,o]=await this._getCodeChallengeAndMethod(),r=this._maybeAppendFlowIdToRedirect(r,o));let s=[`provider=${encodeURIComponent(t)}`];if(r&&s.push(`redirect_to=${encodeURIComponent(r)}`),n?.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),i!=null&&a!=null){let e=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(e.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);s.push(e.toString())}return n?.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),{url:`${e}?${s.join(`&`)}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,t){return!e||!t||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:oa(e,t)}async _getCodeChallengeAndMethod(e=!1){return sa(this.storage,this.storageKey,e,e=>this._debug(`#_getCodeChallengeAndMethod()`,`evicted oldest pending PKCE verifier slot`,e))}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await M(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await M(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?Wa(e.webauthn.credential_response):Ga(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await M(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challenge(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await M(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ha(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ua(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[],recovery_code:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&t.factor_type in n&&Array.isArray(n[t.factor_type])&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=Ui(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=Ui(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getRecoveryCodesStatus(){A(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await M(this.fetch,`GET`,`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _generateRecoveryCodes(e){A(this.experimental);try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let{data:i,error:a}=await M(this.fetch,`POST`,`${this.url}/factors/recovery-codes`,{body:e?.friendlyName?{friendly_name:e.friendlyName}:void 0,headers:this.headers,jwt:n?.session?.access_token});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _verifyRecoveryCode(e){A(this.experimental);let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let{data:i,error:a}=await M(this.fetch,`POST`,`${this.url}/factors/recovery-codes/verify`,{body:{code:e.code},headers:this.headers,jwt:n?.session?.access_token});if(a)return this._returnResult({data:null,error:a});let o=Object.assign({expires_at:ji(i.expires_in)},i);return await this._saveSession(o),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,o),this._returnResult({data:i,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _regenerateRecoveryCodes(){A(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await M(this.fetch,`POST`,`${this.url}/factors/recovery-codes/regenerate`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _unenrollRecoveryCodes(){A(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await M(this.fetch,`DELETE`,`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await M(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new ai})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new ai});let a=await M(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&Ni()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new ai});let a=await M(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&Ni()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await M(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new ai})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await M(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new ai})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await M(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=Ui(n);if(!t?.allowExpired)try{ua(i.exp)}catch(e){throw new vi(e instanceof Error?e.message:`JWT validation failed`)}let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=da(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,ki(`${o}.${s}`)))throw new vi(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){try{if(!qa())return this._returnResult({data:null,error:new ri(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Ya({publicKey:Ua(t.options),signal:e?.options?.signal??Va.createNewAbortSignal(),mediation:e?.options?.mediation});if(i||!r)return this._returnResult({data:null,error:i??new ri(`WebAuthn ceremony failed`,null)});let a=Ga(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){try{if(!qa())return this._returnResult({data:null,error:new ri(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Ja({publicKey:Ha(t.options),signal:e?.options?.signal??Va.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new ri(`WebAuthn ceremony failed`,null)});let a=Wa(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new ai});let{data:r,error:i}=await M(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new ai});let{data:i,error:a}=await M(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){try{let{data:t,error:n}=await M(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){try{let{data:t,error:n}=await M(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:xa});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new ai});let{data:r,error:i}=await M(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new ai});let{data:i,error:a}=await M(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new ai});let{error:i}=await M(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(k(e))return this._returnResult({data:null,error:e});throw e}}};ao.nextInstanceID={};var oo=ao,so=`2.118.0`,co=``,lo;if(typeof Deno<`u`)co=`deno`,lo=Deno.version?.deno;else if(typeof document<`u`)co=`web`;else if(typeof navigator<`u`&&navigator.product===`ReactNative`)co=`react-native`;else{var uo;co=`node`;let e=globalThis.process;lo=e==null||(uo=e.version)==null?void 0:uo.replace(/^v/,``)}var fo=[`runtime=${co}`];lo&&fo.push(`runtime-version=${lo}`);var po={headers:{"X-Client-Info":`supabase-js/${so}; ${fo.join(`; `)}`}},mo={schema:`public`},ho={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},go={},_o={enabled:!1,respectSamplingDecision:!0};function vo(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function yo(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(bo(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function bo(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function xo(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function So(e){"@babel/helpers - typeof";return So=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},So(e)}function Co(e,t){if(So(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(So(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function wo(e){var t=Co(e,`string`);return So(t)==`symbol`?t:t+``}function To(e,t,n){return(t=wo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Do(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Eo(Object(n),!0).forEach(function(t){To(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Oo=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),ko=()=>Headers,Ao=e=>e.startsWith(`sb_publishable_`)||e.startsWith(`sb_secret_`),jo=`sb_temp_`,Mo=new Set,No=e=>{if(!e.startsWith(`sb_`)||Ao(e)||e.startsWith(jo))return;let t=e.match(/^sb_[a-zA-Z0-9]+_/)?.[0]??`unknown`;Mo.has(t)||(Mo.add(t),console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`))},Po=(e,t,n,r,i,a)=>{let o=Oo(r),s=ko(),c=i?.enabled===!0,l=i?.respectSamplingDecision!==!1,u=c?xo(t):null,d=!(a?.omitApiKeyAsBearer&&Ao(e));return async(t,r)=>{let i=await n(),a=new s(r?.headers);if(a.has(`apikey`)||a.set(`apikey`,e),!a.has(`Authorization`)){let t=i??(d?e:null);t&&a.set(`Authorization`,`Bearer ${t}`)}if(u){let e=Lo(t,u,l);e&&(e.traceparent&&!a.has(`traceparent`)&&a.set(`traceparent`,e.traceparent),e.tracestate&&!a.has(`tracestate`)&&a.set(`tracestate`,e.tracestate),e.baggage&&!a.has(`baggage`)&&a.set(`baggage`,e.baggage))}return o(t,Do(Do({},r),{},{headers:a}))}},Fo=!1,Io=!1;function Lo(e,t,n){let r=Ge();if(!r)return Fo||(Fo=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!yo(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let i=r();if(!i||!i.traceparent){var a;if(i!=null&&(a=i.carrierKeys)!=null&&a.length&&!Io){Io=!0;let e=i.carrierKeys.includes(`sentry-trace`)?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":` Configure your tracing SDK to emit W3C trace context on outgoing requests.`;console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${i.carrierKeys.join(`, `)}] and no W3C traceparent header, so trace headers will not be attached.`+e)}return null}if(n){let e=vo(i.traceparent);if(e&&!e.isSampled)return{traceparent:i.traceparent}}return i}function Ro(e){return typeof e==`boolean`?{enabled:e}:e}function zo(e){return e.endsWith(`/`)?e:e+`/`}var Bo=!1;function Vo(e){Bo||typeof e==`object`&&e&&`schema`in e&&e.schema!==void 0&&(Bo=!0,console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`))}function Ho(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=Ro(e.tracePropagation),d=Ro(t.tracePropagation),f={db:Do(Do({},o),n),auth:Do(Do({},s),r),realtime:Do(Do({},c),i),storage:{},global:Do(Do(Do({},l),a),{},{headers:Do(Do({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function Uo(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(zo(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var Wo=class extends oo{constructor(e){super(e)}},Go=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Uo(e);if(!t)throw Error(`supabaseKey is required.`);No(t),Vo(n),this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:mo,realtime:go,auth:Do(Do({},ho),{},{storageKey:i}),global:po,tracePropagation:_o},o=Ho(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=Po(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation),this.functionsFetch=Po(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(Do({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new St(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit,retry:o.db.retry}),this.storage=new Hr(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new et(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}getOpenApiSpec(){return this.rest.getOpenApiSpec()}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??null}async _getAccessToken(){var e=this;return await e._getSessionToken()??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Wo({url:this.authUrl.href,headers:Do(Do({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new Hn(this.realtimeUrl.href,Do(Do({},e),{},{params:Do(Do({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`||e===`INITIAL_SESSION`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Ko=(e,t,n)=>new Go(e,t,n);function qo(){if(typeof window<`u`||globalThis.Deno!==void 0)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=20:!1}qo()&&console.warn(`⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);function Jo(e){let t=(e?.message??``).toLowerCase();return t.includes(`invalid login`)||t.includes(`invalid credentials`)?new p(`invalid_credentials`,e.message):t.includes(`already registered`)||t.includes(`already been registered`)?new p(`email_taken`,e.message):t.includes(`password`)&&(t.includes(`least`)||t.includes(`weak`)||t.includes(`short`))?new p(`weak_password`,e.message):t.includes(`email`)&&t.includes(`invalid`)?new p(`invalid_email`,e.message):e?.status===429||t.includes(`rate limit`)?new p(`rate_limited`,e?.message??`rate limit`):t.includes(`fetch`)||t.includes(`network`)||e?.name===`AuthRetryableFetchError`?new p(`network`,e?.message??`network`):new p(`unknown`,e?.message??`unknown`)}var Yo=class{sb;listeners=new Set;holdEvents=!1;constructor(e){this.sb=e??Ko(`https://zpqryxstnspvklzthvct.supabase.co`,`sb_publishable_KSA1QN0oGDy_QwDlUW8k4A_BbJIu9N9`,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),this.sb.auth.onAuthStateChange((e,t)=>{e===`TOKEN_REFRESHED`||this.holdEvents||setTimeout(async()=>{let e=t?await this.toUser(t.user):null;this.listeners.forEach(t=>t(e))},0)})}emit(e){this.listeners.forEach(t=>t(e))}async toUser(e){let{data:t,error:n}=await this.sb.from(`profiles`).select(`role, display_name, username, institution, institution_type, institution_campus`).eq(`id`,e.id).maybeSingle();return n||!t?null:{id:e.id,role:t.role,displayName:t.display_name,username:t.username??void 0,institution:t.institution??void 0,institutionType:t.institution_type??void 0,campus:t.institution_campus??void 0,email:t.username?void 0:e.email??void 0}}async getSession(){let{data:e}=await this.sb.auth.getSession();return e.session?this.toUser(e.session.user):null}onChange(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}async signUp(e){let{data:t,error:n}=await this.sb.auth.signUp({email:e.email.trim(),password:e.password,options:{data:{display_name:e.displayName.trim(),role:e.role,...e.role===`teacher`&&e.institution?{institution:e.institution.name.trim(),institution_type:e.institution.type,...e.institution.type===`private`?{institution_campus:(e.institution.campus??``).trim()}:{}}:{}}}});if(n)throw Jo(n);if(t.user&&(t.user.identities?.length??1)===0)throw new p(`email_taken`,`already registered`);return t.session?{user:t.user?await this.toUser(t.user):null,needsEmailConfirmation:!1}:{user:null,needsEmailConfirmation:!0}}async signIn(e,t,n){this.holdEvents=!0;try{let{data:r,error:i}=await this.sb.auth.signInWithPassword({email:e.trim(),password:t});if(i)throw Jo(i);let a=await this.toUser(r.user);if(!a)throw await this.sb.auth.signOut({scope:`local`}),new p(`unknown`,`profile_missing`);if(n&&a.role!==n&&!(n===`individual`&&v(a.role)))throw await this.sb.auth.signOut({scope:`local`}),new p(`wrong_role`,`wrong_role`,a.role);return this.holdEvents=!1,this.emit(a),a}finally{this.holdEvents=!1}}async signInStudent(e,t){this.holdEvents=!0;try{let{data:n,error:r}=await this.sb.auth.signInWithPassword({email:`${e.trim().toLowerCase()}@${He}`,password:t});if(r)throw Jo(r);let i=await this.toUser(n.user);if(!i||i.role!==`student`)throw await this.sb.auth.signOut({scope:`local`}),new p(`invalid_credentials`,`not_a_student`);return this.holdEvents=!1,this.emit(i),i}finally{this.holdEvents=!1}}async signOut(){await this.sb.auth.signOut({scope:`local`})}async deleteAccount(){let{error:e}=await this.sb.functions.invoke(`delete-account`,{body:{}});if(e)throw new p(`unknown`,e.message);await this.sb.auth.signOut({scope:`local`}).catch(()=>void 0)}async updateDisplayName(e){let{data:t}=await this.sb.auth.getUser();if(!t.user)return;let{error:n}=await this.sb.from(`profiles`).update({display_name:e.trim().slice(0,60)}).eq(`id`,t.user.id);if(n)throw Jo(n)}async updateInstitution(e){let{data:t}=await this.sb.auth.getUser();if(!t.user)return;let n=e.type===`private`&&e.campus?.trim().slice(0,120)||null,{error:r}=await this.sb.from(`profiles`).update({institution:e.name.trim().slice(0,120)||null,institution_type:e.type,institution_campus:n}).eq(`id`,t.user.id);if(r)throw Jo(r);this.emit(await this.toUser(t.user))}async pullUserData(){let{data:e}=await this.sb.auth.getUser();if(!e.user)return null;let{data:t,error:n}=await this.sb.from(`user_data`).select(`progress, settings, updated_at`).eq(`user_id`,e.user.id).maybeSingle();if(n)throw Jo(n);return t?{progress:t.progress,settings:t.settings,updatedAt:t.updated_at}:null}async trackEvents(e){let t=globalThis.Capacitor?.isNativePlatform?.(),{error:n}=await this.sb.rpc(`track_events`,{p_events:e,p_platform:t?`ios`:`web`,p_version:`0.1.0`});if(n)throw Jo(n)}async pushUserData(e,t){let{data:n}=await this.sb.auth.getUser();if(!n.user)return;let{error:r}=await this.sb.from(`user_data`).upsert({user_id:n.user.id,progress:e,settings:t});if(r)throw Jo(r)}get client(){return this.sb}},N=r(),P=(e,t)=>Array.from(new Set([...e,...t])).sort();function F(e,t){let n={...e};for(let[e,r]of Object.entries(t))n[e]=Math.max(n[e]??0,r);return Object.fromEntries(Object.entries(n).sort(([e],[t])=>e.localeCompare(t)))}var Xo={snoozed:0,started:1,done:2};function Zo(e,t){let n=new Map;for(let r of[...t,...e]){let e=n.get(r.key);(!e||Xo[r.status]>Xo[e.status]||Xo[r.status]===Xo[e.status]&&r.at>=e.at)&&n.set(r.key,r)}return[...n.values()].sort((e,t)=>e.at-t.at).slice(-300)}function Qo(e,t){let n={...e};for(let[e,r]of Object.entries(t))n[e]=Math.min(n[e]??r,r);return Object.fromEntries(Object.entries(n).sort(([e],[t])=>e.localeCompare(t)))}function $o(e,t){let n={};for(let r of new Set([...Object.keys(e),...Object.keys(t)])){let i=new Map;for(let n of[...e[r]??[],...t[r]??[]])i.set(n.at,n);n[r]=[...i.values()].sort((e,t)=>e.at-t.at)}return Object.fromEntries(Object.entries(n).sort(([e],[t])=>e.localeCompare(t)))}function es(e,t){let n=me(e),r=me(t),i=(n.lastStudyDay??``)>=(r.lastStudyDay??``)?n:r;return{...se(),schemaVersion:1,completedLessonIds:P(n.completedLessonIds,r.completedLessonIds),completedExerciseIds:P(n.completedExerciseIds,r.completedExerciseIds),skippedLessonIds:P(n.skippedLessonIds,r.skippedLessonIds),completedTaskKeys:P(n.completedTaskKeys,r.completedTaskKeys),reviewLog:Zo(n.reviewLog,r.reviewLog),passedQuizIds:P(n.passedQuizIds,r.passedQuizIds),lessonChecksPassed:P(n.lessonChecksPassed,r.lessonChecksPassed),solutionViewedExerciseIds:P(n.solutionViewedExerciseIds,r.solutionViewedExerciseIds),earnedAchievements:P(n.earnedAchievements,r.earnedAchievements),lessonBlocksViewed:F(n.lessonBlocksViewed,r.lessonBlocksViewed),lessonAttempts:F(n.lessonAttempts,r.lessonAttempts),quizBestScores:F(n.quizBestScores,r.quizBestScores),studyDaysSec:F(n.studyDaysSec,r.studyDaysSec),quizFirstScores:{...r.quizFirstScores,...n.quizFirstScores},lessonCompletedAt:Qo(n.lessonCompletedAt,r.lessonCompletedAt),quizPassedAt:Qo(n.quizPassedAt,r.quizPassedAt),quizAttemptCounts:F(n.quizAttemptCounts,r.quizAttemptCounts),exerciseAttempts:$o(n.exerciseAttempts,r.exerciseAttempts),lastOpenedLessonId:n.lastOpenedLessonId??r.lastOpenedLessonId,currentStreak:i.currentStreak,lastStudyDay:i.lastStudyDay,longestStreak:Math.max(n.longestStreak,r.longestStreak,i.currentStreak),totalStudyTimeSec:Math.max(n.totalStudyTimeSec,r.totalStudyTimeSec)}}var ts=(e,t)=>JSON.stringify(es(e,se()))===JSON.stringify(es(t,se())),ns=e=>ts(e,se());function rs(e,t){let n={...he(),...t&&typeof t==`object`?t:{}};return{...n,onboarded:e.onboarded||n.onboarded,displayName:n.displayName||e.displayName}}var is=`pylearn`,as=[`progress`,`drafts`,`settings`];function os(e=is){return new Promise((t,n)=>{let r=indexedDB.open(e,1);r.onupgradeneeded=()=>{let e=r.result;for(let t of as)e.objectStoreNames.contains(t)||e.createObjectStore(t)},r.onsuccess=()=>{r.result.onversionchange=()=>r.result.close(),t(r.result)},r.onerror=()=>n(r.error)})}function ss(e,t,n,r){return new Promise((i,a)=>{let o=e.transaction(t,n),s=r(o.objectStore(t));o.oncomplete=()=>i(s.result),o.onerror=()=>a(o.error),o.onabort=()=>a(o.error)})}var cs=class{dbp;constructor(e){this.dbp=e}async load(){let e=await ss(await this.dbp,`progress`,`readonly`,e=>e.get(`main`));return e?me(e):se()}async save(e){await ss(await this.dbp,`progress`,`readwrite`,t=>t.put(e,`main`))}getDraft(e){return this.dbp.then(t=>ss(t,`drafts`,`readonly`,t=>t.get(e)))}async saveDraft(e,t){await ss(await this.dbp,`drafts`,`readwrite`,n=>n.put(t,e))}async clearDraft(e){await ss(await this.dbp,`drafts`,`readwrite`,t=>t.delete(e))}async resetAll(){let e=await this.dbp;await ss(e,`progress`,`readwrite`,e=>e.clear()),await ss(e,`drafts`,`readwrite`,e=>e.clear())}},ls=class{dbp;constructor(e){this.dbp=e}async load(){let e=await ss(await this.dbp,`settings`,`readonly`,e=>e.get(`main`));return{...he(),...e??{}}}async save(e){await ss(await this.dbp,`settings`,`readwrite`,t=>t.put(e,`main`))}};function us(e){return new Promise(t=>{try{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>t(),n.onerror=()=>t(),n.onblocked=()=>t()}catch{t()}})}var ds=(0,T.createContext)({state:`idle`,at:null,firstDone:!0,syncNow:()=>void 0}),fs=()=>(0,T.useContext)(ds),ps=1500,ms=6e4;function hs({children:e}){let{service:t,user:n}=ee(),r=_e(),i=(0,T.useRef)(r);i.current=r;let[a,o]=(0,T.useState)(`idle`),[s,c]=(0,T.useState)(null),[l,u]=(0,T.useState)(!1),d=(0,T.useRef)(!1),f=(0,T.useRef)(!1),p=(0,T.useRef)(!1),m=(0,T.useRef)({progress:r.progress,settings:r.settings});m.current={progress:r.progress,settings:r.settings};let h=(0,T.useCallback)(async()=>{if(n){if(d.current)f.current=!0;else{d.current=!0,o(`syncing`);try{let e=await t.pullUserData(),{progress:r,settings:a}=m.current,s=r;if(!e&&ns(s)&&n.role!==`student`&&!p.current){p.current=!0;let e=await new cs(os()).load().catch(()=>null);e&&!ns(e)&&window.confirm(`Bu cihazdaki misafir ilerlemeni hesabına aktarmak ister misin?`)&&(s=es(s,e))}let l=es(s,e?.progress??{});ts(l,r)||i.current.update(()=>l),r=l;let u=rs(a,e?.settings);(!e||JSON.stringify(u)!==JSON.stringify(a))&&i.current.updateSettings({...u,displayName:u.displayName||n.displayName}),a={...u,displayName:u.displayName||n.displayName},e&&ts(me(e.progress),l)&&JSON.stringify(rs(a,e.settings))===JSON.stringify(a)||await t.pushUserData(l,a),o(`ok`),c(Date.now())}catch(e){let t=e.code;o(t===`network`||!navigator.onLine?`offline`:`error`)}finally{d.current=!1,u(!0),f.current&&(f.current=!1,setTimeout(()=>void h(),250))}}}},[t,n]);return(0,T.useEffect)(()=>{p.current=!1,n&&r.ready&&h()},[n?.id,r.ready]),(0,T.useEffect)(()=>{if(!n||!r.ready)return;let e=setTimeout(()=>void h(),ps);return()=>clearTimeout(e)},[r.progress,r.settings]),(0,T.useEffect)(()=>{if(!n)return;let e=()=>{document.visibilityState!==`hidden`&&h()};window.addEventListener(`online`,e),document.addEventListener(`visibilitychange`,e);let t=setInterval(e,ms);return()=>{window.removeEventListener(`online`,e),document.removeEventListener(`visibilitychange`,e),clearInterval(t)}},[n,h]),(0,N.jsx)(ds.Provider,{value:{state:a,at:s,firstDone:!n||l,syncNow:()=>void h()},children:e})}function gs(e){(0,T.useEffect)(()=>{ge.track(e)},[e])}function _s(e,t){let n=me(e),r=le(t,n);return{lessonsDone:r.done,lessonsTotal:r.total,percent:r.percent,exercisesDone:n.completedExerciseIds.length,points:de(t,n),quizzesPassed:n.passedQuizIds.length,streak:n.currentStreak,lastStudyDay:n.lastStudyDay,studySec:n.totalStudyTimeSec}}var vs=864e5;function ys(e,t=new Date){if(!e)return null;let[n,r,i]=e.split(`-`).map(Number),a=new Date(n,r-1,i).getTime(),o=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();return Math.max(0,Math.round((o-a)/vs))}function bs(e,t=new Date){let n=ys(e,t);return n===null?`Henüz çalışmadı`:n===0?`Bugün`:n===1?`Dün`:`${n} gün önce`}function xs(e){return e.split(/\r?\n/).map(e=>e.trim()).filter(Boolean)}function Ss(e){let t=e=>`"${e.replace(/"/g,`""`)}"`;return`﻿`+[`Ad Soyad;Kullanıcı adı;Şifre`,...e.map(e=>[t(e.displayName),t(e.username),t(e.password)].join(`;`))].join(`\r
`)}function Cs(e,t=14,n=new Date){let r=e.map(e=>me(e));return Array.from({length:t},(e,i)=>{let a=new Date(n.getFullYear(),n.getMonth(),n.getDate()-(t-1-i)),o=fe(a),s=r.map(e=>e.studyDaysSec[o]??0);return{day:o,label:`${a.getDate()}.${a.getMonth()+1}`,active:s.filter(e=>e>0).length,minutes:Math.round(s.reduce((e,t)=>e+t,0)/60)}})}var ws=[`Başlamadı`,`%1–25`,`%26–50`,`%51–75`,`%76–100`];function Ts(e){let t=[0,0,0,0,0];for(let n of e)t[n<=0?0:n<=25?1:n<=50?2:n<=75?3:4]++;return t}function Es({rows:e}){let t=Math.max(1,...e.map(e=>e.active)),n=560/e.length;return(0,N.jsxs)(`svg`,{viewBox:`0 0 560 162`,role:`img`,"aria-label":`Son ${e.length} gün çalışan öğrenci sayısı`,style:{width:`100%`,height:`auto`},children:[e.map((e,r)=>{let i=e.active/t*140;return(0,N.jsxs)(`g`,{children:[(0,N.jsx)(`rect`,{x:r*n+4,y:140-i,width:n-8,height:Math.max(i,e.active?2:0),rx:4,fill:`var(--primary, #8ab4ff)`,opacity:e.active?1:.2,children:(0,N.jsx)(`title`,{children:`${e.label}: ${e.active} öğrenci, ${e.minutes} dk`})}),e.active>0&&(0,N.jsx)(`text`,{x:r*n+n/2,y:140-i-4,textAnchor:`middle`,fontSize:`11`,fill:`currentColor`,children:e.active}),r%2==0&&(0,N.jsx)(`text`,{x:r*n+n/2,y:156,textAnchor:`middle`,fontSize:`10`,fill:`currentColor`,opacity:`0.7`,children:e.label})]},e.day)}),(0,N.jsx)(`line`,{x1:`0`,x2:560,y1:140,y2:140,stroke:`currentColor`,opacity:`0.2`})]})}function Ds({counts:e,total:t}){let n=[`var(--border, #556)`,`#e8a23a`,`#c8c04a`,`#6fc18a`,`#3fa56a`];return(0,N.jsxs)(`div`,{className:`stack`,style:{gap:8},role:`img`,"aria-label":`İlerleme dağılımı: ${ws.map((t,n)=>`${t} ${e[n]} öğrenci`).join(`, `)}`,children:[(0,N.jsx)(`div`,{style:{display:`flex`,height:18,borderRadius:9,overflow:`hidden`,background:`var(--surface-2, #2a3142)`},children:e.map((e,r)=>e>0&&(0,N.jsx)(`div`,{style:{width:`${e/Math.max(t,1)*100}%`,background:n[r]},title:`${ws[r]}: ${e}`},r))}),(0,N.jsx)(`ul`,{className:`row small`,style:{listStyle:`none`,padding:0,margin:0,gap:14},children:e.map((e,t)=>(0,N.jsxs)(`li`,{className:`row`,style:{gap:6},children:[(0,N.jsx)(`span`,{"aria-hidden":!0,style:{width:10,height:10,borderRadius:3,background:n[t],display:`inline-block`}}),ws[t],` `,(0,N.jsx)(`strong`,{children:e})]},t))})]})}function Os(){gs(`teacher_dashboard_viewed`);let{teacher:e,user:t}=ee(),{content:n}=_e(),[r,i]=(0,T.useState)(null),[a,s]=(0,T.useState)(!1);if((0,T.useEffect)(()=>{let t=!0;return(async()=>{let t=await e.listClasses();return Promise.all(t.map(async t=>({cls:t,students:await e.listStudents(t.id),assignments:await e.listAssignments(t.id)})))})().then(e=>t&&i(e)).catch(()=>t&&s(!0)),()=>{t=!1}},[e]),a)return(0,N.jsx)(C,{title:`Panel yüklenemedi`,message:`İnternet bağlantını kontrol edip tekrar dene.`,backTo:`/teacher`,backLabel:`Öğretmen paneli`});if(!r)return(0,N.jsx)(w,{label:`Sınıfların yükleniyor…`});let c=(0,N.jsxs)(`h1`,{children:[`Merhaba`,t?.displayName?`, ${t.displayName}`:``]});if(!r.length)return(0,N.jsxs)(`div`,{className:`stack`,children:[c,(0,N.jsxs)(`section`,{className:`card stack`,children:[(0,N.jsx)(`h2`,{children:`Başlayalım`}),(0,N.jsx)(`p`,{className:`muted`,children:`Henüz sınıfın yok. Sınıf oluşturup öğrenci ekleyince ilerlemeyi burada izleyebilirsin.`}),(0,N.jsx)(o,{className:`btn primary`,to:`/teacher`,children:`Sınıf oluştur →`})]})]});let l=r.flatMap(e=>e.students.map(t=>({s:t,cls:e.cls,sum:_s(t.progress,n.course)}))).filter((e,t,n)=>n.findIndex(t=>t.s.id===e.s.id)===t),u=l.filter(e=>{let t=ys(e.sum.lastStudyDay);return t!==null&&t<=7}).length,d=l.filter(e=>{let t=ys(e.sum.lastStudyDay);return t===null||t>7}),f=r.flatMap(e=>e.assignments.map(t=>{let n=e.students.map(e=>be(t.items,e.progress));return{a:t,cls:e.cls,done:n.filter(e=>e.complete).length,total:n.length,due:ye(t.dueAt)}})),p=f.filter(e=>e.total===0||e.done<e.total),m=p.filter(e=>e.due.state===`overdue`),h=l.length?Math.round(l.reduce((e,t)=>e+t.sum.percent,0)/l.length):0,g=e=>e.total?Math.round(e.done/e.total*100):0;return(0,N.jsxs)(`div`,{className:`stack`,style:{gap:18},children:[c,(0,N.jsxs)(`div`,{className:`grid`,style:{display:`grid`,gap:12,gridTemplateColumns:`repeat(auto-fit, minmax(150px, 1fr))`},children:[(0,N.jsx)(Ae,{icon:`groups`,label:`Öğrenci`,value:l.length,sub:`${r.length} sınıf`}),(0,N.jsx)(Ae,{icon:`bolt`,label:`Bu hafta aktif`,value:u,unit:`/ ${l.length}`,tone:`secondary`}),(0,N.jsx)(Ae,{icon:`assignment`,label:`Açık ödev`,value:p.length,sub:m.length?`${m.length} süresi geçti`:void 0}),(0,N.jsx)(Ae,{icon:`insights`,label:`Ort. ilerleme`,value:`%${h}`})]}),(0,N.jsxs)(`section`,{className:`card stack`,"aria-labelledby":`td-act`,children:[(0,N.jsx)(`h2`,{id:`td-act`,style:{margin:0},children:`Son 14 gün: çalışan öğrenci`}),(0,N.jsx)(Es,{rows:Cs(l.map(e=>e.s.progress))})]}),(0,N.jsxs)(`section`,{className:`card stack`,"aria-labelledby":`td-dist`,children:[(0,N.jsx)(`h2`,{id:`td-dist`,style:{margin:0},children:`İlerleme dağılımı`}),(0,N.jsx)(Ds,{counts:Ts(l.map(e=>e.sum.percent)),total:l.length})]}),(0,N.jsxs)(`section`,{className:`card stack`,"aria-labelledby":`td-assign`,children:[(0,N.jsxs)(`div`,{className:`row`,style:{justifyContent:`space-between`},children:[(0,N.jsx)(`h2`,{id:`td-assign`,style:{margin:0},children:`Ödev takibi`}),(0,N.jsx)(o,{to:`/teacher-assignments`,children:`Tüm ödevler →`})]}),f.length?(0,N.jsx)(`ul`,{className:`stack`,style:{listStyle:`none`,padding:0,margin:0,gap:12},children:f.slice(0,8).map(e=>(0,N.jsxs)(`li`,{className:`stack`,style:{gap:4},children:[(0,N.jsxs)(`div`,{className:`row small`,style:{justifyContent:`space-between`},children:[(0,N.jsxs)(`strong`,{children:[e.a.title,` `,(0,N.jsxs)(`span`,{className:`muted`,children:[`· `,e.cls.name]})]}),(0,N.jsxs)(`span`,{className:e.due.state===`overdue`?`danger-text`:`muted`,children:[e.done,`/`,e.total,` tamamladı · `,e.due.text]})]}),(0,N.jsx)(ke,{value:g(e),label:`${e.a.title} tamamlanma`,thin:!0})]},e.a.id))}):(0,N.jsx)(`p`,{className:`muted`,children:`Henüz ödev vermedin. Bir sınıfı açıp "Ödev ver"i kullan.`})]}),(0,N.jsxs)(`section`,{className:`card stack`,"aria-labelledby":`td-class`,children:[(0,N.jsx)(`h2`,{id:`td-class`,style:{margin:0},children:`Sınıf ilerlemesi`}),(0,N.jsx)(`ul`,{className:`stack`,style:{listStyle:`none`,padding:0,margin:0,gap:12},children:r.map(({cls:e,students:t})=>{let r=t.length?Math.round(t.reduce((e,t)=>e+_s(t.progress,n.course).percent,0)/t.length):0;return(0,N.jsxs)(`li`,{className:`stack`,style:{gap:4},children:[(0,N.jsxs)(`div`,{className:`row small`,style:{justifyContent:`space-between`},children:[(0,N.jsx)(o,{to:`/teacher/class/${e.id}`,children:(0,N.jsx)(`strong`,{children:e.name})}),(0,N.jsxs)(`span`,{className:`muted`,children:[t.length,` öğrenci · %`,r]})]}),(0,N.jsx)(ke,{value:r,label:`${e.name} ortalama ilerleme`,thin:!0})]},e.id)})})]}),(0,N.jsxs)(`section`,{className:`card stack`,"aria-labelledby":`td-watch`,children:[(0,N.jsxs)(`h2`,{id:`td-watch`,className:`row`,style:{gap:8,margin:0},children:[(0,N.jsx)(De,{name:`notifications`,size:22}),`Dikkat gerektirenler`]}),d.length?(0,N.jsx)(`ul`,{className:`stack`,style:{listStyle:`none`,padding:0,margin:0,gap:6},children:d.slice(0,8).map(({s:e,cls:t,sum:n})=>(0,N.jsxs)(`li`,{className:`row small`,style:{justifyContent:`space-between`},children:[(0,N.jsxs)(`span`,{children:[e.displayName,` `,(0,N.jsxs)(`span`,{className:`muted`,children:[`· `,t.name]})]}),(0,N.jsx)(`span`,{className:`muted`,children:n.lastStudyDay?`${ys(n.lastStudyDay)} gündür çalışmadı`:`Henüz çalışmadı`})]},e.id))}):(0,N.jsx)(`p`,{className:`muted`,children:`Herkes son 7 günde çalıştı. 🎉`})]})]})}var ks=e=>e<60?`${e} sn`:e<3600?`${Math.round(e/60)} dk`:`${(e/3600).toFixed(1)} sa`;function As(){let{content:e,progress:t,settings:n}=_e(),{user:r}=ee(),i=Se(),s=fs();if(r&&!s.firstDone)return(0,N.jsx)(w,{label:`Hesabın hazırlanıyor…`});if(v(r?.role))return(0,N.jsx)(a,{to:`/admin`,replace:!0});if(i.isStudent)return(0,N.jsx)(js,{});if(r?.role===`teacher`)return(0,N.jsx)(Os,{});if(r?.role!==`student`&&!n.onboarded&&!t.lastOpenedLessonId&&t.completedExerciseIds.length===0)return(0,N.jsx)(a,{to:`/onboarding`,replace:!0});let c=le(e.course,t),l=de(e.course,t),u=t.lastOpenedLessonId?e.lessonById.get(t.lastOpenedLessonId):void 0,d=u&&!t.completedLessonIds.includes(u.id)&&ue(u,t)?u:oe(e.course,t),f=d?e.moduleById.get(d.moduleId):void 0,p=d?.contentBlocks.find(e=>e.type===`code`),m=Math.round((t.studyDaysSec[fe(new Date)]??0)/60),h=[...e.exerciseById.values()].find(({exercise:e,lesson:n})=>!t.completedExerciseIds.includes(e.id)&&n.prerequisites.every(e=>t.completedLessonIds.includes(e))),g=[...e.lessonById.values()].find(e=>e.quiz&&!t.passedQuizIds.includes(e.quiz.id)&&e.prerequisites.every(e=>t.completedLessonIds.includes(e)));return(0,N.jsxs)(`div`,{className:`stack`,style:{gap:24},children:[(0,N.jsxs)(`section`,{className:`row`,style:{justifyContent:`space-between`,flexWrap:`nowrap`},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`h1`,{style:{marginBottom:4},children:[`Merhaba`,n.displayName?`, ${n.displayName}`:``,`! 👋`]}),(0,N.jsx)(`p`,{className:`muted small`,style:{margin:0},children:`Bugün Python yolculuğunda bir adım daha at.`})]}),(0,N.jsx)(Oe,{value:c.percent,size:52,label:`Kurs %${c.percent}`})]}),!n.onboarded&&r?.role!==`student`&&(0,N.jsx)(o,{className:`callout`,to:`/onboarding`,children:`Öğrenme hedefini belirle →`}),(0,N.jsx)(Me,{course:e.course,progress:t}),(0,N.jsxs)(`section`,{className:`stats-strip`,"aria-label":`Günlük özet`,children:[(0,N.jsx)(Ae,{icon:`local_fire_department`,tone:`tertiary`,label:`Seri`,value:`${t.currentStreak} Gün`,sub:`Kesintisiz`}),(0,N.jsx)(Ae,{icon:`bolt`,tone:`secondary`,label:`Puan`,value:l,sub:`Seviye ${ce(l).level}`}),(0,N.jsx)(Ae,{icon:`schedule`,tone:`primary`,label:`Hedef`,value:`${m}/${n.dailyGoalMinutes}`,sub:`Dakika`})]}),(0,N.jsxs)(`div`,{className:`two-col`,children:[(0,N.jsxs)(`div`,{className:`stack`,style:{gap:24},children:[d?(0,N.jsxs)(`section`,{className:`hero-card`,"aria-label":`Kaldığın yer`,children:[(0,N.jsxs)(`div`,{className:`row`,style:{justifyContent:`space-between`},children:[(0,N.jsxs)(`span`,{className:`chip`,style:{background:`var(--primary-soft)`,color:`var(--primary-text)`},children:[`Modül `,f?.order,` • `,f?.title]}),(0,N.jsxs)(`span`,{className:`row small`,style:{gap:4,color:`var(--secondary)`},children:[(0,N.jsx)(De,{name:`play_circle`,size:16}),u&&d.id===u.id?`Kaldığın Yer`:`Sıradaki Ders`]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`h2`,{style:{marginBottom:4},children:[`Ders `,f?.order,`.`,d.order,`: `,d.title]}),(0,N.jsx)(`p`,{className:`muted small`,style:{margin:0},children:d.learningObjectives[0]})]}),p?.type===`code`&&(0,N.jsx)(`div`,{className:`code-preview`,"aria-hidden":!0,children:p.code.split(`
`).slice(0,4).join(`
`)}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{className:`row small muted`,style:{justifyContent:`space-between`,marginBottom:6},children:[(0,N.jsxs)(`span`,{children:[Math.min(t.lessonBlocksViewed[d.id]??0,d.contentBlocks.length),` / `,d.contentBlocks.length,` bölüm`]}),(0,N.jsxs)(`b`,{style:{color:`var(--primary-text)`},children:[`%`,pe(d,t),` Tamamlandı`]})]}),(0,N.jsx)(ke,{thin:!0,value:pe(d,t),label:`Ders ilerlemesi`})]}),(0,N.jsxs)(o,{className:`btn primary`,to:`/learn/lesson/${d.id}`,children:[`Dersine Devam Et `,(0,N.jsx)(De,{name:`arrow_forward`,size:18})]})]}):(0,N.jsx)(`div`,{className:`card`,children:`Tüm mevcut dersleri tamamladın! 🎉 Yeni modüller hazırlanıyor.`}),(0,N.jsxs)(`section`,{children:[(0,N.jsxs)(`div`,{className:`section-head`,children:[(0,N.jsx)(`h2`,{children:`Günün Görevleri`}),(0,N.jsxs)(`span`,{className:`small`,style:{color:`var(--secondary)`},children:[[h,g].filter(Boolean).length,` Görev`]})]}),(0,N.jsxs)(`div`,{className:`stack`,style:{gap:8},children:[h&&(0,N.jsxs)(`div`,{className:`task`,children:[(0,N.jsx)(`span`,{className:`ico`,children:(0,N.jsx)(De,{name:`code_blocks`,size:22})}),(0,N.jsxs)(`div`,{className:`grow`,children:[(0,N.jsx)(`strong`,{children:h.exercise.title}),(0,N.jsxs)(`div`,{className:`small`,children:[(0,N.jsx)(`span`,{style:{color:`var(--secondary)`},children:h.exercise.difficulty}),` `,(0,N.jsx)(`span`,{className:`muted`,children:`•`}),` `,(0,N.jsxs)(`span`,{style:{color:`var(--tertiary)`},children:[`+`,h.exercise.points,` puan`]})]})]}),(0,N.jsx)(o,{className:`mini-btn`,to:`/practice/${h.exercise.id}`,children:`Çöz`})]}),g?.quiz&&(0,N.jsxs)(`div`,{className:`task`,children:[(0,N.jsx)(`span`,{className:`ico`,children:(0,N.jsx)(De,{name:`quiz`,size:22})}),(0,N.jsxs)(`div`,{className:`grow`,children:[(0,N.jsx)(`strong`,{children:g.quiz.title}),(0,N.jsxs)(`div`,{className:`small muted`,children:[g.quiz.questions.length,` soru`]})]}),(0,N.jsx)(o,{className:`mini-btn`,to:`/quizzes/${g.quiz.id}`,children:`Başla`})]}),!h&&!g&&(0,N.jsxs)(`div`,{className:`task done`,children:[(0,N.jsx)(`span`,{className:`ico`,children:(0,N.jsx)(De,{name:`check_circle`,fill:!0,size:22})}),(0,N.jsx)(`strong`,{children:`Bugün için açık görev kalmadı`})]})]})]})]}),(0,N.jsxs)(`div`,{className:`stack`,style:{gap:24},children:[(0,N.jsxs)(`section`,{children:[(0,N.jsxs)(`div`,{className:`section-head`,children:[(0,N.jsx)(`h2`,{children:`Öğrenme Yolun`}),(0,N.jsx)(o,{className:`small`,to:`/learn`,children:`Tümünü Gör ›`})]}),(0,N.jsx)(`div`,{className:`timeline`,children:e.course.modules.filter(e=>e.status===`available`).map(e=>{let n=e.lessons.filter(e=>t.completedLessonIds.includes(e.id)).length,r=n===e.lessons.length,i=f?.id===e.id;return(0,N.jsxs)(o,{to:`/learn/module/${e.id}`,className:`tl-item`,style:{textDecoration:`none`,color:`inherit`},children:[(0,N.jsx)(`span`,{className:`node ${r?`done`:i?`current`:``}`,children:(0,N.jsx)(De,{name:r?`check_circle`:i?`edit`:`radio_button_unchecked`,fill:r,size:18})}),(0,N.jsxs)(`div`,{className:`mod-card ${i?`current`:``}`,children:[(0,N.jsxs)(`div`,{className:`row`,style:{justifyContent:`space-between`},children:[(0,N.jsxs)(`span`,{className:`muted small`,children:[`Modül `,e.order]}),(0,N.jsxs)(`span`,{className:`chip`,children:[Math.round(n/e.lessons.length*100),`%`]})]}),(0,N.jsx)(`strong`,{children:e.title}),i&&!r&&(0,N.jsx)(ke,{thin:!0,value:Math.round(n/e.lessons.length*100)})]})]},e.id)})})]}),(0,N.jsxs)(`section`,{children:[(0,N.jsx)(`div`,{className:`section-head`,children:(0,N.jsx)(`h2`,{children:`Pratik & Meydan Okuma`})}),(0,N.jsxs)(`div`,{className:`grid`,style:{gridTemplateColumns:`1fr 1fr`},children:[(0,N.jsxs)(o,{className:`card link`,to:`/practice`,children:[(0,N.jsx)(De,{name:`timer`,size:24}),(0,N.jsx)(`h3`,{style:{marginTop:8},children:`Alıştırmalar`}),(0,N.jsx)(`span`,{className:`small`,style:{color:`var(--primary-text)`},children:`Başla →`})]}),(0,N.jsxs)(o,{className:`card link`,to:`/progress`,children:[(0,N.jsx)(De,{name:`military_tech`,size:24}),(0,N.jsx)(`h3`,{style:{marginTop:8},children:`Başarılar`}),(0,N.jsx)(`span`,{className:`small`,style:{color:`var(--tertiary)`},children:`Gör →`})]})]})]})]})]})]})}function js(){let{progress:e,settings:t}=_e(),{ready:n,assignments:r,stale:i}=Se(),{content:a}=_e(),s=de(a.course,e),c=Math.round((e.studyDaysSec[fe(new Date)]??0)/60),{open:l,done:u}=xe(r,e);return(0,N.jsxs)(`div`,{className:`stack`,style:{gap:24},children:[(0,N.jsxs)(`header`,{children:[(0,N.jsxs)(`h1`,{style:{marginBottom:4},children:[`Merhaba`,t.displayName?`, ${t.displayName}`:``,`! 👋`]}),(0,N.jsx)(`p`,{className:`muted small`,style:{margin:0},children:l.length>0?`${l.length} açık ödevin var.`:`Şu an açık ödevin yok.`})]}),(0,N.jsxs)(`section`,{className:`stats-strip`,"aria-label":`Günlük özet`,children:[(0,N.jsx)(Ae,{icon:`local_fire_department`,tone:`tertiary`,label:`Seri`,value:`${e.currentStreak} Gün`,sub:`Kesintisiz`}),(0,N.jsx)(Ae,{icon:`bolt`,tone:`secondary`,label:`Puan`,value:s,sub:`Seviye ${ce(s).level}`}),(0,N.jsx)(Ae,{icon:`assignment_turned_in`,tone:`primary`,label:`Ödev`,value:`${u.length}/${r.length}`,sub:`Tamamlanan`})]}),(0,N.jsx)(Me,{course:a.course,progress:e}),i&&(0,N.jsx)(`div`,{className:`callout warning`,role:`status`,children:`Ödevler güncellenemedi; son kaydedilen liste gösteriliyor.`}),!n&&(0,N.jsx)(w,{label:`Ödevlerin yükleniyor…`}),n&&r.length===0&&(0,N.jsx)(Ee,{title:`Şu an ödevin yok`,children:`Öğretmenin ödev verdiğinde burada görünecek. Çalışmaların öğretmeninin verdiği ödevler üzerinden ilerler.`}),l.length>0&&(0,N.jsxs)(`section`,{className:`stack`,style:{gap:12},"aria-label":`Açık ödevler`,children:[(0,N.jsxs)(`div`,{className:`section-head`,children:[(0,N.jsx)(`h2`,{children:`Açık ödevlerin`}),(0,N.jsxs)(`span`,{className:`small`,style:{color:`var(--secondary)`},children:[c,`/`,t.dailyGoalMinutes,` dk bugün`]})]}),l.map(e=>(0,N.jsx)(Ne,{a:e},e.id))]}),u.length>0&&(0,N.jsxs)(o,{className:`callout`,to:`/assignments`,style:{textDecoration:`none`},children:[`✅ `,u.length,` tamamlanan ödevin var →`]})]})}var Ms=(0,T.createContext)({loading:!1,membership:null,isAdmin:!1,can:()=>!0,refresh:()=>void 0}),Ns=()=>(0,T.useContext)(Ms);function Ps({children:e}){let{user:t,institution:n}=ee(),[r,i]=(0,T.useState)(null),[a,o]=(0,T.useState)(!1),[s,c]=(0,T.useState)(0),l=(0,T.useCallback)(()=>c(e=>e+1),[]);(0,T.useEffect)(()=>{if(t?.role!==`teacher`){i(null),o(!1);return}let e=!0;return o(!0),n.my().then(t=>{e&&i(t)}).catch(()=>{e&&i(null)}).finally(()=>{e&&o(!1)}),()=>{e=!1}},[t?.id,t?.role,n,s]);let u=(0,T.useMemo)(()=>({loading:a,membership:r,isAdmin:r?.role===`admin`,refresh:l,can:e=>!r||r.role===`admin`||r.permissions[e]!==!1}),[a,r,l]);return(0,N.jsx)(Ms.Provider,{value:u,children:e})}function Fs(e){let[t,n]=(0,T.useState)(()=>typeof matchMedia!=`function`||matchMedia(e).matches);return(0,T.useEffect)(()=>{if(typeof matchMedia!=`function`)return;let t=matchMedia(e),r=()=>n(t.matches);return r(),t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),t}var Is=()=>Fs(`(min-width: 900px)`),Ls=[{to:`/`,label:`Ana Sayfa`,icon:`home`,end:!0},{to:`/learn`,label:`Öğren`,icon:`menu_book`},{to:`/practice`,label:`Alıştırmalar`,icon:`code`},{to:`/projects`,label:`Projeler`,icon:`extension`},{to:`/progress`,label:`İlerleme`,icon:`insights`},{to:`/skills`,label:`Beceriler`,icon:`psychology`},{to:`/profile`,label:`Profil`,icon:`account_circle`},{to:`/settings`,label:`Ayarlar`,icon:`settings`}],Rs=[`/`,`/learn`,`/practice`,`/profile`],zs={to:`/teacher`,label:`Öğretmen`,icon:`school`},Bs={to:`/teacher-assignments`,label:`Ödevler`,icon:`assignment`},Vs={to:`/institution`,label:`Kurum`,icon:`apartment`},Hs=[{to:`/admin`,label:`Yönetim`,icon:`admin_panel_settings`},{to:`/profile`,label:`Profil`,icon:`account_circle`},{to:`/settings`,label:`Ayarlar`,icon:`settings`}],Us=[{to:`/`,label:`Ana Sayfa`,icon:`home`,end:!0},{to:`/assignments`,label:`Ödevlerim`,icon:`assignment`},{to:`/progress`,label:`İlerleme`,icon:`insights`},{to:`/skills`,label:`Beceriler`,icon:`psychology`},{to:`/profile`,label:`Profil`,icon:`account_circle`},{to:`/settings`,label:`Ayarlar`,icon:`settings`}];function Ws(){let{user:e}=ee(),t=e?.role===`teacher`,n=e?.role===`student`,r=Ns();if(v(e?.role))return{full:Hs,mobile:Hs};let i=n?Us:t?[...Ls.slice(0,3),zs,Bs,...r.membership?[Vs]:[],...Ls.slice(3)]:Ls,a=n?[`/`,`/assignments`,`/progress`,`/profile`]:t?[`/`,`/teacher`,`/teacher-assignments`,`/profile`]:Rs;return{full:i,mobile:i.filter(e=>a.includes(e.to))}}function Gs({items:e}){return(0,N.jsx)(N.Fragment,{children:e.map(e=>(0,N.jsxs)(c,{to:e.to,end:e.end,className:({isActive:e})=>`nav-link${e?` active`:``}`,children:[(0,N.jsx)(De,{name:e.icon,size:24,className:`nav-ico`}),(0,N.jsx)(`span`,{children:e.label})]},e.to))})}function Ks(){let{full:e}=Ws();return(0,N.jsxs)(`nav`,{className:`sidebar`,"aria-label":`Ana gezinme`,children:[(0,N.jsxs)(`div`,{className:`brand`,children:[(0,N.jsx)(`span`,{className:`logo`,children:(0,N.jsx)(De,{name:`terminal`,size:20})}),`PyLearn`]}),(0,N.jsx)(Gs,{items:e})]})}function qs(){let{mobile:e}=Ws();return(0,N.jsx)(`nav`,{className:`bottom-nav`,"aria-label":`Ana gezinme`,children:(0,N.jsx)(Gs,{items:e})})}function Js(){let{progress:e,settings:t}=_e(),n=(t.displayName.trim()[0]??``).toUpperCase();return(0,N.jsxs)(`header`,{className:`topbar-app`,children:[(0,N.jsxs)(`div`,{className:`brand`,children:[(0,N.jsx)(`span`,{className:`logo`,children:(0,N.jsx)(De,{name:`terminal`,size:20})}),`PyLearn`]}),(0,N.jsxs)(`div`,{className:`row`,style:{gap:8,flexWrap:`nowrap`},children:[(0,N.jsx)(je,{streak:e.currentStreak}),(0,N.jsx)(c,{to:`/profile`,className:`avatar`,"aria-label":`Profil`,children:n||(0,N.jsx)(De,{name:`person`,fill:!0,size:18})})]})]})}function Ys(){let{progress:e,settings:t,content:n}=_e(),r=(t.displayName.trim()[0]??``).toUpperCase();return(0,N.jsxs)(`header`,{className:`ws-header`,children:[(0,N.jsxs)(c,{to:`/`,className:`brand`,style:{textDecoration:`none`,color:`inherit`},children:[(0,N.jsx)(`span`,{className:`logo`,children:(0,N.jsx)(De,{name:`terminal`,size:20})}),`PyLearn`]}),(0,N.jsx)(`nav`,{className:`ws-nav`,"aria-label":`Ana gezinme`,children:Ls.filter(e=>[`/`,`/learn`,`/practice`,`/progress`].includes(e.to)).map(e=>(0,N.jsx)(c,{to:e.to,end:e.end,className:({isActive:e})=>e?`active`:``,children:e.label},e.to))}),(0,N.jsx)(`span`,{className:`grow`}),(0,N.jsx)(je,{streak:e.currentStreak}),(0,N.jsxs)(`span`,{className:`streak-chip`,style:{color:`var(--secondary)`},children:[(0,N.jsx)(De,{name:`bolt`,fill:!0,size:18}),de(n.course,e)]}),(0,N.jsx)(c,{to:`/profile`,className:`avatar`,"aria-label":`Profil`,children:r||(0,N.jsx)(De,{name:`person`,fill:!0,size:18})})]})}function Xs({children:e}){let t=Is(),n=Fs(`(min-width: 1024px)`),{pathname:r}=l(),i=n&&/^\/(learn\/lesson|practice)\/[^/]+/.test(r);return/^\/(onboarding|login|register|privacy)$/.test(r)?(0,N.jsx)(`div`,{className:`shell bare`,children:(0,N.jsx)(`main`,{className:`main bare`,id:`main`,children:e})}):i?(0,N.jsxs)(`div`,{className:`shell desktop ws`,children:[(0,N.jsx)(Ys,{}),(0,N.jsx)(`main`,{className:`main ws`,id:`main`,children:e})]}):(0,N.jsxs)(`div`,{className:`shell ${t?`desktop`:`mobile`}`,children:[t&&(0,N.jsx)(Ks,{}),(0,N.jsxs)(`main`,{className:`main`,id:`main`,children:[(0,N.jsx)(Js,{}),e]}),!t&&(0,N.jsx)(qs,{})]})}var Zs=(0,T.lazy)(()=>S(()=>import(`./Practice-DEeQZJ_r.js`).then(e=>({default:e.PracticePage})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),Qs=(0,T.lazy)(()=>S(()=>import(`./Practice-DEeQZJ_r.js`).then(e=>({default:e.ExercisePage})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))),$s=(0,T.lazy)(()=>S(()=>import(`./Teacher-BTG6_PNm.js`).then(e=>({default:e.TeacherHomePage})),__vite__mapDeps([19,1,2,3,8,6,4,5,9,10,11,12,14,13,20,17,18,21,22]))),ec=(0,T.lazy)(()=>S(()=>import(`./Teacher-BTG6_PNm.js`).then(e=>({default:e.ClassPage})),__vite__mapDeps([19,1,2,3,8,6,4,5,9,10,11,12,14,13,20,17,18,21,22]))),tc=(0,T.lazy)(()=>S(()=>import(`./Teacher-BTG6_PNm.js`).then(e=>({default:e.StudentPage})),__vite__mapDeps([19,1,2,3,8,6,4,5,9,10,11,12,14,13,20,17,18,21,22]))),nc=(0,T.lazy)(()=>S(()=>import(`./Teacher-BTG6_PNm.js`).then(e=>({default:e.RequireTeacher})),__vite__mapDeps([19,1,2,3,8,6,4,5,9,10,11,12,14,13,20,17,18,21,22]))),rc=(0,T.lazy)(()=>S(()=>import(`./Admin-BIBq1EeL.js`).then(e=>({default:e.AdminPage})),__vite__mapDeps([23,1,2,3,8,10,11,12,4]))),ic=(0,T.lazy)(()=>S(()=>import(`./Admin-BIBq1EeL.js`).then(e=>({default:e.RequireStaff})),__vite__mapDeps([23,1,2,3,8,10,11,12,4]))),ac=(0,T.lazy)(()=>S(()=>import(`./Support-DJnguG0L.js`).then(e=>({default:e.SupportPage})),__vite__mapDeps([24,1,2,3,8,10,11]))),oc=(0,T.lazy)(()=>S(()=>import(`./TeacherAssignments-CcekfHHE.js`).then(e=>({default:e.TeacherAssignmentsPage})),__vite__mapDeps([22,1,2,3,8,5,4,6,9,10,11,12,17]))),sc=(0,T.lazy)(()=>S(()=>import(`./Assignments-B13C4PfM.js`).then(e=>e.n).then(e=>({default:e.AssignmentsPage})),__vite__mapDeps([25,1,2,3,8,6,4,5,9,7,10,11,12]))),cc=(0,T.lazy)(()=>S(()=>import(`./Auth-B0oJmv-w.js`).then(e=>({default:e.LoginPage})),__vite__mapDeps([26,1,2,3,8,5,4,6,11]))),lc=(0,T.lazy)(()=>S(()=>import(`./Auth-B0oJmv-w.js`).then(e=>({default:e.RegisterPage})),__vite__mapDeps([26,1,2,3,8,5,4,6,11]))),uc=(0,T.lazy)(()=>S(()=>import(`./Privacy-C9plknAD.js`).then(e=>({default:e.PrivacyPage})),__vite__mapDeps([27,2,1,3]))),dc=(0,T.lazy)(()=>S(()=>import(`./Onboarding-Dv9JCDqm.js`).then(e=>({default:e.OnboardingPage})),__vite__mapDeps([28,1,2,3,5,4,6,11]))),fc=(0,T.lazy)(()=>S(()=>import(`./Learn-qtIuGnx2.js`).then(e=>({default:e.LearnPage})),__vite__mapDeps([29,1,2,3,4,5,6,10,11,12]))),pc=(0,T.lazy)(()=>S(()=>import(`./Learn-qtIuGnx2.js`).then(e=>({default:e.ModulePage})),__vite__mapDeps([29,1,2,3,4,5,6,10,11,12]))),mc=(0,T.lazy)(()=>S(()=>import(`./Lesson-B-NSXjNt.js`).then(e=>({default:e.LessonPage})),__vite__mapDeps([30,1,2,3,8,4,5,6,7,9,10,11,12,13,14,16,15,17,18]))),hc=(0,T.lazy)(()=>S(()=>import(`./Account-Z7Evj5Y2.js`).then(e=>({default:e.ProfilePage})),__vite__mapDeps([31,1,2,3,8,4,5,6,9,7,10,11,12,14]))),gc=(0,T.lazy)(()=>S(()=>import(`./Account-Z7Evj5Y2.js`).then(e=>({default:e.SkillsPage})),__vite__mapDeps([31,1,2,3,8,4,5,6,9,7,10,11,12,14]))),_c=(0,T.lazy)(()=>S(()=>import(`./TeacherReports-DcbbFSHo.js`).then(e=>({default:e.TeacherReportsPage})),__vite__mapDeps([32,1,2,3,8,6,4,5,9,10,11,12]))),vc=(0,T.lazy)(()=>S(()=>import(`./TeacherTasks-BqGwjAhL.js`).then(e=>({default:e.TeacherTasksPage})),__vite__mapDeps([33,1,2,3,8,5,4,6,10,11,21]))),yc=(0,T.lazy)(()=>S(()=>import(`./TeacherTasks-BqGwjAhL.js`).then(e=>({default:e.TeacherTaskEditorPage})),__vite__mapDeps([33,1,2,3,8,5,4,6,10,11,21]))),bc=(0,T.lazy)(()=>S(()=>import(`./TaskPage-kCoQvCJP.js`).then(e=>({default:e.TaskPage})),__vite__mapDeps([34,1,2,3,8,5,4,6,9,7,10,15,11,16,17,18,21]))),xc=(0,T.lazy)(()=>S(()=>import(`./MiniTest-DvgQdNty.js`).then(e=>({default:e.MiniTestPage})),__vite__mapDeps([35,1,2,3,5,4,6,10,36,11]))),Sc=(0,T.lazy)(()=>S(()=>import(`./Institution-5VgvQifR.js`).then(e=>({default:e.InstitutionPage})),__vite__mapDeps([20,1,2,3,8,5,4,6,10,11,12,14]))),Cc=(0,T.lazy)(()=>S(()=>import(`./Institution-5VgvQifR.js`).then(e=>({default:e.InstitutionClassPage})),__vite__mapDeps([20,1,2,3,8,5,4,6,10,11,12,14]))),wc=(0,T.lazy)(()=>S(()=>import(`./Account-Z7Evj5Y2.js`).then(e=>({default:e.ProgressPage})),__vite__mapDeps([31,1,2,3,8,4,5,6,9,7,10,11,12,14]))),Tc=(0,T.lazy)(()=>S(()=>import(`./Account-Z7Evj5Y2.js`).then(e=>({default:e.ProjectsPage})),__vite__mapDeps([31,1,2,3,8,4,5,6,9,7,10,11,12,14]))),Ec=(0,T.lazy)(()=>S(()=>import(`./Account-Z7Evj5Y2.js`).then(e=>({default:e.SettingsPage})),__vite__mapDeps([31,1,2,3,8,4,5,6,9,7,10,11,12,14]))),Dc=(0,T.lazy)(()=>S(()=>import(`./QuizPage-DGXr85Ew.js`).then(e=>({default:e.QuizPage})),__vite__mapDeps([37,2,1,3,4,5,6,7,8,9,10,16,36,11])));function Oc(){let{ready:e,loadError:t,content:r}=_e();return e?(0,N.jsxs)(Xs,{children:[t&&(0,N.jsx)(`div`,{className:`callout warning`,role:`alert`,style:{marginBottom:16},children:t}),r.issues.length>0&&(0,N.jsxs)(`div`,{className:`callout warning`,role:`alert`,style:{marginBottom:16},children:[r.issues.length,` ders içeriği doğrulanamadı ve gizlendi.`]}),(0,N.jsx)(T.Suspense,{fallback:(0,N.jsx)(w,{}),children:(0,N.jsxs)(s,{children:[(0,N.jsx)(n,{path:`/`,element:(0,N.jsx)(As,{})}),(0,N.jsx)(n,{path:`/login`,element:(0,N.jsx)(cc,{})}),(0,N.jsx)(n,{path:`/register`,element:(0,N.jsx)(lc,{})}),(0,N.jsx)(n,{path:`/admin`,element:(0,N.jsx)(ic,{children:(0,N.jsx)(rc,{})})}),(0,N.jsx)(n,{path:`/support`,element:(0,N.jsx)(ac,{})}),(0,N.jsx)(n,{path:`/teacher-assignments`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(oc,{})})}),(0,N.jsx)(n,{path:`/institution`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(Sc,{})})}),(0,N.jsx)(n,{path:`/institution/class/:classId`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(Cc,{})})}),(0,N.jsx)(n,{path:`/teacher/tasks`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(vc,{})})}),(0,N.jsx)(n,{path:`/teacher/tasks/:taskId`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(yc,{})})}),(0,N.jsx)(n,{path:`/teacher/reports`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(_c,{})})}),(0,N.jsx)(n,{path:`/teacher`,element:(0,N.jsx)(nc,{children:(0,N.jsx)($s,{})})}),(0,N.jsx)(n,{path:`/teacher/class/:classId`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(ec,{})})}),(0,N.jsx)(n,{path:`/teacher/class/:classId/student/:studentId`,element:(0,N.jsx)(nc,{children:(0,N.jsx)(tc,{})})}),(0,N.jsx)(n,{path:`/assignments`,element:(0,N.jsx)(sc,{})}),(0,N.jsx)(n,{path:`/privacy`,element:(0,N.jsx)(uc,{})}),(0,N.jsx)(n,{path:`/onboarding`,element:(0,N.jsx)(dc,{})}),(0,N.jsx)(n,{path:`/learn`,element:(0,N.jsx)(Ce,{children:(0,N.jsx)(fc,{})})}),(0,N.jsx)(n,{path:`/learn/module/:moduleId`,element:(0,N.jsx)(Ce,{children:(0,N.jsx)(pc,{})})}),(0,N.jsx)(n,{path:`/learn/lesson/:lessonId`,element:(0,N.jsx)(Te,{kind:`lesson`,param:`lessonId`,children:(0,N.jsx)(mc,{})})}),(0,N.jsx)(n,{path:`/practice`,element:(0,N.jsx)(Ce,{children:(0,N.jsx)(Zs,{})})}),(0,N.jsx)(n,{path:`/practice/:exerciseId`,element:(0,N.jsx)(Te,{kind:`exercise`,param:`exerciseId`,children:(0,N.jsx)(Qs,{})})}),(0,N.jsx)(n,{path:`/task/:taskId/:version`,element:(0,N.jsx)(bc,{})}),(0,N.jsx)(n,{path:`/review/test/:skillId`,element:(0,N.jsx)(xc,{})}),(0,N.jsx)(n,{path:`/quizzes/:quizId`,element:(0,N.jsx)(Te,{kind:`quiz`,param:`quizId`,children:(0,N.jsx)(Dc,{})})}),(0,N.jsx)(n,{path:`/projects`,element:(0,N.jsx)(Ce,{children:(0,N.jsx)(Tc,{})})}),(0,N.jsx)(n,{path:`/progress`,element:(0,N.jsx)(wc,{})}),(0,N.jsx)(n,{path:`/skills`,element:(0,N.jsx)(gc,{})}),(0,N.jsx)(n,{path:`/profile`,element:(0,N.jsx)(hc,{})}),(0,N.jsx)(n,{path:`/settings`,element:(0,N.jsx)(Ec,{})}),(0,N.jsx)(n,{path:`*`,element:(0,N.jsx)(C,{title:`Sayfa bulunamadı`,backTo:`/`})})]})})]}):(0,N.jsx)(w,{label:`Verilerin yükleniyor…`})}var kc=f().min(1),Ac=x(`type`,[ie({type:ae(`text`),id:kc,body:f().min(1)}),ie({type:ae(`code`),id:kc,title:f().optional(),code:f().min(1),explanation:f().min(1),stdin:m(f()).optional()}),ie({type:ae(`callout`),id:kc,tone:_([`info`,`warning`,`tip`]),body:f().min(1)})]),jc=ie({id:kc,description:f().min(1),stdin:m(f()).default([]),append:f().optional(),expectedStdout:f().optional(),sourceMustMatch:f().optional()}).refine(e=>e.expectedStdout!==void 0||e.sourceMustMatch!==void 0,{message:`Test needs expectedStdout or sourceMustMatch`}),Mc=ie({id:kc,kind:_([`code`,`bugfix`]).default(`code`),bugs:m(ie({type:f().min(1),description:f().min(1)})).optional(),title:f().min(1),instructions:f().min(1),starterCode:f(),successCriteria:m(f().min(1)).min(1),hints:m(f().min(1)).min(1),solutionCode:f().min(1),testCases:m(jc).min(1),difficulty:_([`kolay`,`orta`,`zor`]),points:h().int().positive()}),Nc=ie({id:kc,title:f().min(1),passScore:h().min(0).max(1),questions:m(ie({id:kc,prompt:f().min(1),code:f().optional(),tag:f().optional(),options:m(f().min(1)).min(2),correctIndex:h().int().min(0),explanation:f().min(1)}).refine(e=>e.correctIndex<e.options.length,{message:`correctIndex out of range`})).min(1)}),Pc=ie({id:kc,moduleId:kc,title:f().min(1),order:h().int().positive(),estimatedMinutes:h().int().positive(),learningObjectives:m(f().min(1)).min(1),prerequisites:m(kc).default([]),contentBlocks:m(Ac).min(1),exercises:m(Mc).default([]),practice:m(Mc).default([]),quiz:Nc.optional()}),Fc=ie({id:kc,courseId:kc,title:f().min(1),description:f().min(1),order:h().int().positive(),status:_([`available`,`planned`]),lessons:m(Pc)});ie({id:kc,title:f().min(1),description:f().min(1),level:_([`başlangıç`,`orta`,`ileri`]),modules:m(Fc).min(1)});function Ic(e,t){let n=[],r=[];for(let e of t){let t=[];for(let r of e.lessons){let i=Pc.safeParse(r);i.success?t.push(i.data):n.push({where:`${e.id}/${r?.id??`?`}`,message:i.error.issues.map(e=>`${e.path.join(`.`)}: ${e.message}`).join(`; `)})}let i=Fc.safeParse({...e,lessons:t});i.success?r.push({...i.data,lessons:i.data.lessons.sort((e,t)=>e.order-t.order)}):n.push({where:e.id,message:i.error.issues.map(e=>e.message).join(`; `)})}r.sort((e,t)=>e.order-t.order);let i={...e,modules:r.length?r:[]},a=new Map,o=new Map,s=new Map;for(let e of r){o.set(e.id,e);for(let t of e.lessons){a.set(t.id,t);for(let e of t.exercises)s.set(e.id,{exercise:e,lesson:t,practice:!1});for(let e of t.practice)s.set(e.id,{exercise:e,lesson:t,practice:!0})}}return{course:i,issues:n,lessonById:a,moduleById:o,exerciseById:s}}var Lc={id:`m1`,courseId:`python-baslangic`,title:`Python ile Tanışma`,order:1,status:`available`,description:`Python nedir, kod nasıl çalışır ve hata mesajları nasıl okunur.`,lessons:[{id:`m1-l1`,moduleId:`m1`,title:`Python nedir?`,order:1,estimatedMinutes:8,prerequisites:[],learningObjectives:[`Python'un ne için kullanıldığını söylemek`,`İlk Python kodunu çalıştırmak`],contentBlocks:[{type:`text`,id:`b1`,body:`Python, okunması kolay bir programlama dilidir (programming language). Web siteleri, veri analizi, otomasyon ve yapay zekâ gibi birçok alanda kullanılır. Bilgisayara ne yapacağını anlatan yazılı talimatlara kod (code) denir.`},{type:`code`,id:`b2`,title:`İlk programın`,code:`print("Merhaba, dünya!")`,explanation:`print() bir fonksiyondur (function); parantez içine yazdığın şeyi ekrana yazar. Tırnak içindeki metne string (metin) denir.`},{type:`callout`,id:`b3`,tone:`tip`,body:`Kodu çalıştırmaktan korkma: yanlış bir şey yazarsan en kötü ihtimalle bir hata mesajı görürsün ve düzeltip tekrar denersin.`}],exercises:[{id:`m1-l1-e1`,title:`Kendini tanıt`,difficulty:`kolay`,points:10,instructions:`Aşağıdaki kodu değiştirerek ekrana tam olarak "Merhaba, ben Python öğreniyorum!" yazdır.`,starterCode:`print("Merhaba, dünya!")`,successCriteria:[`Çıktı: Merhaba, ben Python öğreniyorum!`],hints:[`Tırnak içindeki metni değiştirmen yeterli.`,`Büyük/küçük harf ve noktalama işaretleri çıktıda aynen görünmeli.`],solutionCode:`print("Merhaba, ben Python öğreniyorum!")`,testCases:[{id:`t1`,description:`Doğru cümle yazdırılıyor`,expectedStdout:`Merhaba, ben Python öğreniyorum!`}]}]},{id:`m1-l2`,moduleId:`m1`,title:`Kod nasıl çalışır? Yorum satırları`,order:2,estimatedMinutes:8,prerequisites:[`m1-l1`],learningObjectives:[`Kodun yukarıdan aşağıya çalıştığını bilmek`,`Yorum satırı (comment) yazmak`],contentBlocks:[{type:`text`,id:`b1`,body:`Python kodu satır satır, yukarıdan aşağıya çalıştırır. Her satır bir talimattır. Sıra önemlidir.`},{type:`code`,id:`b2`,code:`print("Bir")
print("İki")
print("Üç")`,explanation:`Üç satır, yazıldığı sırayla çalışır ve her print() yeni bir satıra yazar.`},{type:`text`,id:`b3`,body:`Kod içine kendine not yazmak için # işaretini kullanırsın. # işaretinden sonra satır sonuna kadar olan her şey yorum satırıdır (comment) ve Python tarafından yok sayılır.`},{type:`code`,id:`b4`,code:`# Bu satır çalışmaz, sadece nottur
print("Bu satır çalışır")  # satır sonu yorumu`,explanation:`Sadece ikinci satır çıktı üretir. Yorumlar kodu açıklamak içindir.`}],exercises:[{id:`m1-l2-e1`,title:`Sırayı düzelt`,difficulty:`kolay`,points:10,instructions:`Kod şu an sırayla "Üç", "İki", "Bir" yazdırıyor. Satırların sırasını değiştirerek "Bir", "İki", "Üç" çıktısını al.`,starterCode:`print("Üç")
print("İki")
print("Bir")`,successCriteria:[`Çıktı üç satır: Bir, İki, Üç`],hints:[`Satırları kes-yapıştır ile yer değiştir.`],solutionCode:`print("Bir")
print("İki")
print("Üç")`,testCases:[{id:`t1`,description:`Sıra Bir, İki, Üç`,expectedStdout:`Bir
İki
Üç`}]}]},{id:`m1-l3`,moduleId:`m1`,title:`Hata mesajlarını okumak`,order:3,estimatedMinutes:10,prerequisites:[`m1-l2`],learningObjectives:[`Hata almanın normal olduğunu kabul etmek`,`SyntaxError mesajını okuyup düzeltmek`],contentBlocks:[{type:`text`,id:`b1`,body:`Her programcı hata (error) alır. Hata mesajı bir düşman değil, ipucudur: hangi satırda ve ne tür bir sorun olduğunu söyler.`},{type:`text`,id:`b2`,body:`Yazım kurallarına uymazsan SyntaxError alırsın. Örneğin kapanmayan tırnak ya da parantez en sık yapılan hatalardandır.`},{type:`callout`,id:`b3`,tone:`warning`,body:`print("Merhaba) satırında tırnak kapatılmamıştır; Python metnin nerede bittiğini anlayamaz.`},{type:`code`,id:`b4`,code:`print("Hata yok")`,explanation:`Tırnaklar ve parantezler eşleşiyor, bu yüzden kod sorunsuz çalışır.`}],exercises:[{id:`m1-l3-e1`,kind:`bugfix`,bugs:[{type:`SyntaxError`,description:`Metnin kapanış tırnağı eksik`}],title:`Hatayı bul`,difficulty:`kolay`,points:15,instructions:`Aşağıdaki kod SyntaxError veriyor. Hatayı düzelt ve ekrana "Hatayı düzelttim" yazdır.`,starterCode:`print("Hatayı düzelttim)`,successCriteria:[`Kod hatasız çalışır`,`Çıktı: Hatayı düzelttim`],hints:[`Hata mesajındaki satır numarasına bak.`,`Metnin sonunda kapanış tırnağı eksik.`],solutionCode:`print("Hatayı düzelttim")`,testCases:[{id:`t1`,description:`Kod çalışıyor ve doğru çıktıyı veriyor`,expectedStdout:`Hatayı düzelttim`}]}],quiz:{id:`m1-quiz`,title:`Modül 1 mini sınavı`,passScore:.66,questions:[{id:`q1`,prompt:`Python yorum satırı hangi işaretle başlar?`,options:[`//`,`#`,`--`,`/*`],correctIndex:1,explanation:`Python'da yorumlar # ile başlar.`},{id:`q2`,prompt:`print("Merhaba) neden hata verir?`,options:[`print yazılmamış`,`Kapanış tırnağı eksik`,`Büyük harf kullanılmış`,`Parantez fazla`],correctIndex:1,explanation:`String, açılan tırnakla aynı tırnakla kapatılmalıdır.`},{id:`q4`,tag:`Kod Çıktısı Analizi`,prompt:`Bu kod çalıştırılınca ekrana ne yazdırılır?`,code:`# print("A")
print("B")
print("C")`,options:[`A B C`,`B
C`,`A
B
C`,`Hata verir`],correctIndex:1,explanation:`# ile başlayan satır yorumdur ve çalışmaz. Geriye B ve C kalır; her print() yeni satıra yazar.`},{id:`q3`,prompt:`Python kodu hangi sırayla çalıştırır?`,options:[`Rastgele`,`Aşağıdan yukarıya`,`Yukarıdan aşağıya`,`Alfabetik`],correctIndex:2,explanation:`Kod satır satır, yukarıdan aşağıya çalışır.`}]}}]},Rc={id:`m2`,courseId:`python-baslangic`,title:`print() ve İlk Kod`,order:2,status:`available`,description:`Ekrana çıktı vermenin tüm temel yolları.`,lessons:[{id:`m2-l1`,moduleId:`m2`,title:`print() ile metin yazdırma`,order:1,estimatedMinutes:8,prerequisites:[`m1-l3`],learningObjectives:[`Tek ve çift tırnak kullanmak`,`Sayıları yazdırmak`],contentBlocks:[{type:`text`,id:`b1`,body:`Metinler (string) tek tırnak '...' ya da çift tırnak "..." içine yazılır. Sayılar ise tırnaksız yazılır ve doğrudan yazdırılabilir.`},{type:`code`,id:`b2`,code:`print("Çift tırnak")
print('Tek tırnak')
print(2025)`,explanation:`Üç farklı değer yazdırıldı: iki metin ve bir sayı.`}],exercises:[{id:`m2-l1-e1`,title:`Üç satır`,difficulty:`kolay`,points:10,instructions:`print() kullanarak sırayla şu üç satırı yazdır: Python, 3, güzel`,starterCode:`# Kodunu buraya yaz
`,successCriteria:[`Üç satır: Python / 3 / güzel`],hints:[`Her satır için ayrı bir print() yaz.`,`Sayıyı tırnaksız yazabilirsin.`],solutionCode:`print("Python")
print(3)
print("güzel")`,testCases:[{id:`t1`,description:`Çıktı doğru`,expectedStdout:`Python
3
güzel`}]}]},{id:`m2-l2`,moduleId:`m2`,title:`Birden fazla değer: sep ve end`,order:2,estimatedMinutes:10,prerequisites:[`m2-l1`],learningObjectives:[`print() içine birden çok değer yazmak`,`sep ve end parametrelerini kullanmak`],contentBlocks:[{type:`text`,id:`b1`,body:`print() virgülle ayrılmış birden fazla değer alabilir; bunları araya boşluk koyarak yazar. Bu boşluğu sep (separator, ayırıcı) ile, satır sonunu end ile değiştirebilirsin.`},{type:`code`,id:`b2`,code:`print("Ali", "Veli", "Ayşe")
print("2025", "10", "18", sep="-")
print("Merhaba", end=" ")
print("dünya")`,explanation:`sep="-" değerleri tire ile ayırır. end=" " satır sonu yerine boşluk koyar, bu yüzden son iki print aynı satırda görünür.`}],exercises:[{id:`m2-l2-e1`,title:`Tarih biçimi`,difficulty:`orta`,points:15,instructions:`sep kullanarak tek bir print() ile 18.10.2025 çıktısını üret. (Değerler: "18", "10", "2025")`,starterCode:`print("18", "10", "2025")`,successCriteria:[`Çıktı: 18.10.2025`,`Tek print() kullanılmış`],hints:[`sep="." yazmayı dene.`],solutionCode:`print("18", "10", "2025", sep=".")`,testCases:[{id:`t1`,description:`Çıktı 18.10.2025`,expectedStdout:`18.10.2025`},{id:`t2`,description:`sep kullanılmış`,sourceMustMatch:`sep\\s*=`}]}]},{id:`m2-l3`,moduleId:`m2`,title:`Kaçış karakterleri ve çok satırlı metin`,order:3,estimatedMinutes:10,prerequisites:[`m2-l2`],learningObjectives:[`\\n ve \\t kullanmak`,`Üç tırnaklı metin yazmak`],contentBlocks:[{type:`text`,id:`b1`,body:`Metin içinde özel karakterler için ters bölü (backslash) kullanılır: \\n yeni satır, \\t tab boşluğu demektir. Bunlara kaçış karakteri (escape character) denir.`},{type:`code`,id:`b2`,code:`print("Birinci satır\\nİkinci satır")
print("Ad:\\tAli")`,explanation:`\\n metni iki satıra böler, \\t araya tab boşluğu koyar.`},{type:`code`,id:`b3`,code:`print("""Uzun
metinler
böyle yazılır""")`,explanation:`Üç çift tırnak, metnin birden fazla satıra yayılmasına izin verir.`}],exercises:[{id:`m2-l3-e1`,title:`Tek print, iki satır`,difficulty:`orta`,points:15,instructions:`Tek bir print() ile ekrana iki satır yazdır: önce "Merhaba", ardından alt satırda "Python".`,starterCode:`print("Merhaba Python")`,successCriteria:[`Çıktı iki satır: Merhaba / Python`],hints:[`Aradaki satır sonu için \\n kullan.`],solutionCode:`print("Merhaba\\nPython")`,testCases:[{id:`t1`,description:`İki satır çıktı`,expectedStdout:`Merhaba
Python`}]}],quiz:{id:`m2-quiz`,title:`Modül 2 mini sınavı`,passScore:.66,questions:[{id:`q1`,prompt:`print("a", "b", sep="-") ne yazdırır?`,options:[`a b`,`a-b`,`ab`,`a,b`],correctIndex:1,explanation:`sep değerleri verilen ayırıcıyla birleştirir.`},{id:`q2`,prompt:`Hangisi yeni satır karakteridir?`,options:[`\\t`,`\\n`,`\\s`,`\\r\\t`],correctIndex:1,explanation:`\\n yeni satır (newline) demektir.`},{id:`q4`,tag:`Kod Çıktısı Analizi`,prompt:`Bu kodun çıktısı nedir?`,code:`print("x", "y", sep="+")
print("z")`,options:[`x y
z`,`x+y
z`,`x+y z`,`xyz`],correctIndex:1,explanation:`sep="+" ilk print() içindeki değerleri + ile birleştirir; ikinci print() yeni satıra yazar.`},{id:`q3`,prompt:`print("A", end="")  ardından print("B") çıktısı?`,options:[`A
B`,`AB`,`A B`,`B`],correctIndex:1,explanation:`end="" satır sonunu boş yapar, bu yüzden AB aynı satırda çıkar.`}]}}]},zc={id:`m3`,courseId:`python-baslangic`,title:`Değişkenler ve Veri Türleri`,order:3,status:`available`,description:`Bilgiyi saklamak ve türlerini tanımak.`,lessons:[{id:`m3-l1`,moduleId:`m3`,title:`Değişken nedir?`,order:1,estimatedMinutes:9,prerequisites:[`m2-l3`],learningObjectives:[`Değişken oluşturmak`,`Değişkenin değerini değiştirmek`],contentBlocks:[{type:`text`,id:`b1`,body:`Değişken (variable), bir değere verdiğin isimdir. Eşittir (=) işareti değeri isme atar (assignment).`},{type:`code`,id:`b2`,code:`ad = "Ayşe"
yas = 20
print(ad)
print(yas)
yas = 21
print(yas)`,explanation:`ad ve yas değişkenleri oluşturuldu. Sonra yas yeniden atanarak 21 oldu; print() her seferinde güncel değeri gösterir.`},{type:`callout`,id:`b3`,tone:`info`,body:`Değişken adları harf veya _ ile başlar, boşluk içermez ve büyük/küçük harf ayrımı vardır: yas ile Yas farklıdır.`}],exercises:[{id:`m3-l1-e1`,title:`Şehir değişkeni`,difficulty:`kolay`,points:10,instructions:`sehir adında bir değişken oluştur, değeri "İzmir" olsun ve print() ile yazdır.`,starterCode:`# sehir değişkenini oluştur
`,successCriteria:[`Çıktı: İzmir`,`sehir değişkeni kullanılmış`],hints:[`sehir = "İzmir" şeklinde başla.`,`Sonra print(sehir) yaz.`],solutionCode:`sehir = "İzmir"
print(sehir)`,testCases:[{id:`t1`,description:`Çıktı İzmir`,expectedStdout:`İzmir`},{id:`t2`,description:`sehir değişkeni tanımlı`,sourceMustMatch:`sehir\\s*=`}]}]},{id:`m3-l2`,moduleId:`m3`,title:`Veri türleri: int, float, str, bool`,order:2,estimatedMinutes:12,prerequisites:[`m3-l1`],learningObjectives:[`Dört temel veri türünü tanımak`,`type() ile tür sorgulamak`],contentBlocks:[{type:`text`,id:`b1`,body:`Her değerin bir türü (type) vardır: int tam sayı, float ondalıklı sayı, str metin, bool ise True/False (doğru/yanlış) değeridir.`},{type:`code`,id:`b2`,code:`print(type(7))
print(type(3.14))
print(type("merhaba"))
print(type(True))`,explanation:`type() değerin türünü verir. Ondalık ayracı Python'da virgül değil noktadır.`}],exercises:[{id:`m3-l2-e1`,title:`Türleri tanı`,difficulty:`orta`,points:15,instructions:`a = 5, b = 2.5, c = "5", d = False değişkenlerini tanımla ve her birinin type() sonucunu sırayla yazdır.`,starterCode:`a = 5
b = 2.5
c = "5"
d = False
# type() sonuçlarını yazdır
`,successCriteria:[`Dört satır tür çıktısı: int, float, str, bool`],hints:[`print(type(a)) şeklinde yaz.`],solutionCode:`a = 5
b = 2.5
c = "5"
d = False
print(type(a))
print(type(b))
print(type(c))
print(type(d))`,testCases:[{id:`t1`,description:`Türler doğru sırada`,expectedStdout:`<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>`}]}]},{id:`m3-l3`,moduleId:`m3`,title:`f-string ve tür dönüşümü`,order:3,estimatedMinutes:12,prerequisites:[`m3-l2`],learningObjectives:[`f-string ile değişkenleri metne yerleştirmek`,`int(), str() ile dönüşüm yapmak`],contentBlocks:[{type:`text`,id:`b1`,body:`Metnin içine değişken yerleştirmenin en rahat yolu f-string'dir (formatted string): tırnağın önüne f yaz, değişkeni süslü parantez içine koy.`},{type:`code`,id:`b2`,code:`ad = "Can"
yas = 15
print(f"{ad} {yas} yaşında")`,explanation:`{ad} ve {yas} yerlerine değişkenlerin değeri yazılır.`},{type:`text`,id:`b3`,body:`Türleri birbirine çevirmek için int(), float() ve str() kullanılır. Örneğin int("12") metni sayıya çevirir.`},{type:`code`,id:`b4`,code:`sayi = int("12")
print(sayi + 8)
print(str(sayi) + " adet")`,explanation:`Metin sayıya çevrilince toplama yapılabilir; sayı str() ile metne çevrilince metne eklenebilir.`}],exercises:[{id:`m3-l3-e1`,title:`Tanıtım cümlesi`,difficulty:`orta`,points:20,instructions:`ad = "Elif" ve yas = 22 değişkenleriyle f-string kullanarak "Elif 22 yaşında" yazdır.`,starterCode:`ad = "Elif"
yas = 22
`,successCriteria:[`Çıktı: Elif 22 yaşında`,`f-string kullanılmış`],hints:[`print(f"{ad} ...") şeklinde başla.`],solutionCode:`ad = "Elif"
yas = 22
print(f"{ad} {yas} yaşında")`,testCases:[{id:`t1`,description:`Çıktı doğru`,expectedStdout:`Elif 22 yaşında`},{id:`t2`,description:`f-string kullanılmış`,sourceMustMatch:`f["']`}]}],quiz:{id:`m3-quiz`,title:`Modül 3 mini sınavı`,passScore:.66,questions:[{id:`q1`,prompt:`3.14 hangi türdedir?`,options:[`int`,`str`,`float`,`bool`],correctIndex:2,explanation:`Ondalıklı sayılar float türündedir.`},{id:`q2`,prompt:`x = 4 ardından x = 9 yazılırsa print(x) ne yazdırır?`,options:[`4`,`9`,`13`,`Hata`],correctIndex:1,explanation:`Değişkenin son atanan değeri geçerlidir.`},{id:`q4`,tag:`Kod Çıktısı Analizi`,prompt:`Bu kod çalıştırıldığında konsola ne yazdırılır?`,code:`ad = "Ada"
puan = 95
print(f"{ad}: {puan + 5} puan!")`,options:[`Ada: 955 puan!`,`Ada: 100 puan!`,`Ada: 95 + 5 puan!`,`TypeError`],correctIndex:1,explanation:`Süslü parantez içindeki ifade çalışma anında hesaplanır: 95 + 5 = 100. Sayıyı metne çevirmek için ayrıca str() gerekmez.`},{id:`q3`,prompt:`int("20") + 1 sonucu nedir?`,options:[`21`,`"201"`,`Hata`,`20`],correctIndex:0,explanation:`int() metni sayıya çevirir, ardından toplama yapılır.`}]}}]},Bc={id:`m4`,courseId:`python-baslangic`,title:`input() ile Kullanıcıdan Veri Alma`,order:4,status:`available`,description:`Programı kullanıcıyla etkileşimli hâle getirmek.`,lessons:[{id:`m4-l1`,moduleId:`m4`,title:`input() fonksiyonu`,order:1,estimatedMinutes:9,prerequisites:[`m3-l3`],learningObjectives:[`input() ile metin almak`,`Alınan değeri değişkende saklamak`],contentBlocks:[{type:`text`,id:`b1`,body:`input() kullanıcıdan bir metin ister ve girilen değeri geri verir. Parantez içine yazdığın metin kullanıcıya gösterilen sorudur (prompt).`},{type:`code`,id:`b2`,code:`ad = input("Adın nedir? ")
print("Merhaba", ad)`,explanation:`Kullanıcının yazdığı değer ad değişkenine kaydedilir ve sonra yazdırılır. Bu sayfadaki örnek için "Zeynep" cevabı otomatik verilir.`,stdin:[`Zeynep`]}],exercises:[{id:`m4-l1-e1`,title:`Selamlayıcı`,difficulty:`kolay`,points:15,instructions:`Kullanıcıdan adını iste ve "Merhaba, <ad>!" biçiminde selamla. Örnek: ad Mert ise Merhaba, Mert!`,starterCode:`ad = input("Adın: ")
# selamla
`,successCriteria:[`Farklı adlarla doğru selamlama`],hints:[`f-string kullanabilirsin: f"Merhaba, {ad}!"`],solutionCode:`ad = input("Adın: ")
print(f"Merhaba, {ad}!")`,testCases:[{id:`t1`,description:`ad = Mert`,stdin:[`Mert`],expectedStdout:`Merhaba, Mert!`},{id:`t2`,description:`ad = Selin`,stdin:[`Selin`],expectedStdout:`Merhaba, Selin!`}]}]},{id:`m4-l2`,moduleId:`m4`,title:`input() ve sayılar`,order:2,estimatedMinutes:10,prerequisites:[`m4-l1`],learningObjectives:[`input() sonucunun her zaman str olduğunu bilmek`,`int() ile sayıya çevirmek`],contentBlocks:[{type:`text`,id:`b1`,body:`input() her zaman metin (str) döndürür; kullanıcı 5 yazsa bile elinde "5" metni vardır. Hesap yapmak için int() veya float() ile çevirmelisin.`},{type:`code`,id:`b2`,code:`yas = int(input("Yaşın: "))
print("Gelecek yıl", yas + 1)`,explanation:`input() sonucu hemen int() ile sayıya çevrildi, böylece yas + 1 hesaplanabildi.`,stdin:[`17`]},{type:`callout`,id:`b3`,tone:`warning`,body:`Çevirme yapmadan "5" + 1 yazarsan TypeError alırsın: metin ile sayı toplanamaz.`}],exercises:[{id:`m4-l2-e1`,title:`Gelecek yıl`,difficulty:`orta`,points:20,instructions:`Kullanıcıdan yaşını sor (soru metni olmadan input() kullan) ve "Gelecek yıl X yaşında olacaksın" yazdır. X, yaşından bir fazla olmalı.`,starterCode:`yas = input()
`,successCriteria:[`yas 17 için: Gelecek yıl 18 yaşında olacaksın`,`yas 30 için: Gelecek yıl 31 yaşında olacaksın`],hints:[`int(input()) kullan.`,`Sonuçta f-string ile yaz: f"Gelecek yıl {yas + 1} yaşında olacaksın"`],solutionCode:`yas = int(input())
print(f"Gelecek yıl {yas + 1} yaşında olacaksın")`,testCases:[{id:`t1`,description:`yaş = 17`,stdin:[`17`],expectedStdout:`Gelecek yıl 18 yaşında olacaksın`},{id:`t2`,description:`yaş = 30`,stdin:[`30`],expectedStdout:`Gelecek yıl 31 yaşında olacaksın`}]}]},{id:`m4-l3`,moduleId:`m4`,title:`Mini program: tanışma robotu`,order:3,estimatedMinutes:12,prerequisites:[`m4-l2`],learningObjectives:[`Birden fazla input() kullanmak`,`Öğrendiklerini küçük bir programda birleştirmek`],contentBlocks:[{type:`text`,id:`b1`,body:`Bu derste print(), değişkenler, f-string ve input() bir arada kullanılıyor. Birden fazla input() sırayla çalışır ve her cevap ayrı bir değişkene kaydedilir.`},{type:`code`,id:`b2`,code:`ad = input("Ad: ")
sehir = input("Şehir: ")
print(f"{ad} {sehir} şehrinde yaşıyor.")`,explanation:`İki cevap iki değişkende tutuldu ve tek cümlede birleştirildi.`,stdin:[`Deniz`,`Bursa`]}],exercises:[{id:`m4-l3-e1`,title:`Tanışma robotu`,difficulty:`orta`,points:25,instructions:`Önce ad, sonra yaş iste (soru metni olmadan input() kullan). Çıktı: "<ad> <yaş> yaşında." Yaşı sayı olarak al.`,starterCode:`ad = input()
`,successCriteria:[`ad=Ece, yaş=19 için: Ece 19 yaşında.`,`yaş sayıya çevrilmiş`],hints:[`İkinci input() için yeni bir değişken aç.`,`int(input()) kullan.`],solutionCode:`ad = input()
yas = int(input())
print(f"{ad} {yas} yaşında.")`,testCases:[{id:`t1`,description:`Ece 19`,stdin:[`Ece`,`19`],expectedStdout:`Ece 19 yaşında.`},{id:`t2`,description:`Kaan 40`,stdin:[`Kaan`,`40`],expectedStdout:`Kaan 40 yaşında.`},{id:`t3`,description:`int() kullanılmış`,stdin:[`A`,`1`],sourceMustMatch:`int\\(`}]}],quiz:{id:`m4-quiz`,title:`Modül 4 mini sınavı`,passScore:.66,questions:[{id:`q1`,prompt:`input() hangi türde değer döndürür?`,options:[`int`,`float`,`str`,`bool`],correctIndex:2,explanation:`input() her zaman str döndürür.`},{id:`q2`,prompt:`Kullanıcının girdiği sayıyla toplama yapmak için ne gerekir?`,options:[`Hiçbir şey`,`int() ile çevirmek`,`print() eklemek`,`Tırnak koymak`],correctIndex:1,explanation:`Metni sayıya int() ile çevirmen gerekir.`},{id:`q4`,tag:`Kod Çıktısı Analizi`,prompt:`Kullanıcı 5 girerse bu kod ne yazdırır?`,code:`x = input()
print(x + x)`,options:[`10`,`55`,`5 5`,`TypeError`],correctIndex:1,explanation:`input() metin döndürür; metin + metin birleştirir: "5" + "5" = "55".`},{id:`q3`,prompt:`input("Ad: ") içindeki "Ad: " ne işe yarar?`,options:[`Cevabı saklar`,`Kullanıcıya gösterilen sorudur`,`Hata yakalar`,`Türü belirler`],correctIndex:1,explanation:`Parantez içindeki metin kullanıcıya gösterilen sorudur.`}]}}]},I=String.raw,L=(e,t)=>({type:`text`,id:e,body:t}),R=(e,t,n,r,i)=>({type:`code`,id:e,code:t,explanation:n,...r?{stdin:r}:{},...i?{title:i}:{}}),z=(e,t,n)=>({type:`callout`,id:e,tone:t,body:n}),Vc=e=>e.map((e,t)=>({id:`t${t+1}`,description:e.d,stdin:e.stdin??[],...e.append?{append:e.append}:{},...e.out===void 0?{}:{expectedStdout:e.out},...e.src?{sourceMustMatch:e.src}:{}})),B=(e,t,n,r,i,a,o,s,c,l,u={})=>({id:e,title:t,difficulty:n,points:r,instructions:i,starterCode:a,solutionCode:o,hints:c,successCriteria:l,testCases:Vc(s),kind:u.kind??`code`,...u.bugs?{bugs:u.bugs}:{}}),V=(e,t,n,r,i,a,o,s,c,l)=>B(e,t,n,r,i,o,s,c,l,[`Kod hatasız çalışır`,...a.map(e=>`${e.type} düzeltildi`)],{kind:`bugfix`,bugs:a}),H=(e,t,n,r,i,a)=>({id:e,prompt:t,options:n,correctIndex:r,explanation:i,...a?{code:a,tag:`Kod Çıktısı Analizi`}:{}}),U=(e,t,n)=>({id:e,title:t,passScore:.66,questions:n}),W=(e,t,n,r,i,a,o,s,c={})=>({id:`${e}-l${t}`,moduleId:e,title:r,order:t,estimatedMinutes:i,prerequisites:n?[n]:[],learningObjectives:a,contentBlocks:o,exercises:s,practice:c.practice??[],...c.quiz?{quiz:c.quiz}:{}}),G=(e,t,n,r,i)=>{let a=`m${e}`;return{id:a,courseId:`python-baslangic`,title:t,order:e,status:`available`,description:n,lessons:i(e=>e===1?r:`${a}-l${e-1}`)}},Hc=G(5,`Matematiksel İşlemler`,`Aritmetik operatörler, bölme/kalan ve işlem sırası.`,`m4-l3`,e=>[W(`m5`,1,e(1),`Aritmetik operatörler`,10,[`+, -, *, /, ** operatörlerini kullanmak`,`int ve float sonuç farkını görmek`],[L(`b1`,`Python bir hesap makinesi gibi çalışır. Toplama için +, çıkarma için -, çarpma için *, bölme için / ve üs alma için ** operatörlerini (operator) kullanırsın.`),R(`b2`,I`print(7 + 3)
print(7 - 3)
print(7 * 3)
print(7 / 2)
print(2 ** 5)`,`Bölme (/) sonucu her zaman ondalıklı sayıdır (float): 7 / 2 işleminin sonucu 3.5'tir. 2 ** 5 ise 2'nin 5. kuvvetidir, yani 32.`),z(`b3`,`info`,`İki tam sayıyı çarptığında sonuç int, bölerken ise float olur. 8 / 2 bile 4 değil 4.0 verir.`)],[B(`m5-l1-e1`,`Dikdörtgen alanı ve çevresi`,`kolay`,15,`en = 8 ve boy = 3 değişkenleri verildi. Önce alanı (en × boy), sonra çevreyi (2 × (en + boy)) iki ayrı satırda yazdır.`,`en = 8
boy = 3
`,`en = 8
boy = 3
print(en * boy)
print(2 * (en + boy))`,[{d:`Alan 24, çevre 22`,out:`24
22`}],[`İki ayrı print() yaz.`,`Çevre için parantez kullan: 2 * (en + boy)`],[`Çıktı iki satır: 24 ve 22`])]),W(`m5`,2,e(2),`Bölme, tam bölme ve kalan`,10,[`// ile tam bölme yapmak`,`% ile kalanı bulmak`],[L(`b1`,`Tam bölme (floor division) // operatörü sonucu aşağı yuvarlayarak tam sayı verir. Kalan (modulo) % operatörü ise bölme işleminden artan sayıyı verir.`),R(`b2`,I`print(17 // 5)
print(17 % 5)
print(20 % 2)`,`17 = 3 × 5 + 2 olduğu için 17 // 5 sonucu 3, 17 % 5 sonucu 2'dir. Bir sayı çiftse 2'ye bölümünden kalan 0 olur.`),L(`b3`,`Bu iki operatör birlikte çok işe yarar: örneğin dakikayı saat ve dakikaya ayırmak için saat = dakika // 60, kalan = dakika % 60 yazılır.`)],[B(`m5-l2-e1`,`Dakikayı saate çevir`,`orta`,20,`Kullanıcıdan toplam dakikayı (tam sayı) al ve "X saat Y dakika" biçiminde yazdır. Örnek: 135 → 2 saat 15 dakika.`,`dakika = int(input())
`,`dakika = int(input())
print(f"{dakika // 60} saat {dakika % 60} dakika")`,[{d:`135 dakika`,stdin:[`135`],out:`2 saat 15 dakika`},{d:`60 dakika`,stdin:[`60`],out:`1 saat 0 dakika`},{d:`200 dakika`,stdin:[`200`],out:`3 saat 20 dakika`}],[`Saat için // 60, kalan için % 60 kullan.`,`f-string içinde işlem yazabilirsin: {dakika // 60}`],[`135 → 2 saat 15 dakika`])],{practice:[V(`p-m5-div`,`Yanlış bölme`,`kolay`,20,`Kod 7 kişiyi 2'şerli masalara oturtunca kaç tam masa dolduğunu (3) yazdırmalı ama 3.5 yazdırıyor. Hatayı düzelt.`,[{type:`Mantık hatası`,description:`/ ondalıklı sonuç verir; tam masa sayısı için tam bölme gerekir`}],`print(7 / 2)`,`print(7 // 2)`,[{d:`Çıktı 3`,out:`3`}],[`Tam bölme operatörü hangisiydi?`])]}),W(`m5`,3,e(3),`İşlem sırası, round() ve abs()`,12,[`İşlem önceliğini bilmek`,`round(), abs(), min(), max() fonksiyonlarını kullanmak`],[L(`b1`,`Python matematikteki işlem sırasını izler: önce parantez, sonra üs (**), sonra çarpma/bölme (*, /, //, %), en son toplama/çıkarma. Emin olmadığında parantez kullan.`),R(`b2`,I`print(2 + 3 * 4)
print((2 + 3) * 4)
print(round(3.14159, 2))
print(abs(-7))
print(max(4, 9, 2), min(4, 9, 2))`,`2 + 3 * 4 sonucu 14, parantezle (2 + 3) * 4 sonucu 20 olur. round(x, 2) sayıyı 2 ondalık basamağa yuvarlar, abs() mutlak değeri, max() ve min() en büyük ve en küçük değeri verir.`)],[B(`m5-l3-e1`,`Üç notun ortalaması`,`orta`,25,`Kullanıcıdan üç tam sayı (soru metni olmadan) al, ortalamalarını 2 ondalık basamağa yuvarlayıp yazdır. Örnek: 3, 4, 5 → 4.0`,`a = int(input())
b = int(input())
c = int(input())
`,`a = int(input())
b = int(input())
c = int(input())
print(round((a + b + c) / 3, 2))`,[{d:`3, 4, 5`,stdin:[`3`,`4`,`5`],out:`4.0`},{d:`1, 2, 2`,stdin:[`1`,`2`,`2`],out:`1.67`},{d:`round() kullanılmış`,stdin:[`1`,`1`,`1`],src:`round\\(`}],[`Toplamı parantez içine al: (a + b + c) / 3`,`round(sonuç, 2) ile yuvarla.`],[`3, 4, 5 için 4.0`,`round() kullanılmış`])],{quiz:U(`m5-quiz`,`Modül 5 mini sınavı`,[H(`q1`,`17 % 5 işleminin sonucu nedir?`,[`3`,`2`,`3.4`,`12`],1,`17 = 3 × 5 + 2 olduğundan kalan 2'dir.`),H(`q2`,`2 + 3 * 4 sonucu nedir?`,[`20`,`14`,`24`,`9`],1,`Çarpma toplamadan önce yapılır: 3 * 4 = 12, 2 + 12 = 14.`),H(`q3`,`Bu kod ne yazdırır?`,[`3`,`3.5`,`4`,`2`],0,`// tam bölmedir: 7 // 2 = 3.`,`print(7 // 2)`)]),practice:[B(`p-m5-parity`,`Çift mi tek mi?`,`kolay`,20,`Kullanıcıdan bir tam sayı al. Sayı çiftse 0, tekse 1 yazdır (kalan işlemini kullan).`,`n = int(input())
`,`n = int(input())
print(n % 2)`,[{d:`8 → 0`,stdin:[`8`],out:`0`},{d:`7 → 1`,stdin:[`7`],out:`1`}],[`2'ye bölümünden kalan ne olur?`],[`Çift sayı için 0`,`Tek sayı için 1`])]})]),Uc=G(6,`Karar Yapıları`,`if, elif, else ve mantıksal operatörlerle kararlar vermek.`,`m5-l3`,e=>[W(`m6`,1,e(1),`if ve else`,12,[`Karşılaştırma operatörlerini kullanmak`,`if / else ile iki yollu karar vermek`],[L(`b1`,`Programlar bazen bir koşula (condition) göre farklı işler yapmalıdır. Karşılaştırma operatörleri True veya False (bool) verir: == eşit mi, != eşit değil mi, <, >, <=, >=.`),R(`b2`,I`yas = 20
if yas >= 18:
    print("Reşit")
else:
    print("Reşit değil")`,`Koşuldan sonra iki nokta (:) gelir ve bağlı satırlar içeriden başlar (girinti, 4 boşluk). Koşul doğruysa if bloğu, değilse else bloğu çalışır.`),z(`b3`,`warning`,`Eşitlik kontrolü için çift eşittir (==) kullanılır. Tek eşittir (=) değer atar, karşılaştırma yapmaz.`)],[B(`m6-l1-e1`,`Reşit mi?`,`kolay`,15,`Kullanıcıdan yaşını (tam sayı) al. 18 veya daha büyükse "Reşit", değilse "Reşit değil" yazdır.`,`yas = int(input())
`,`yas = int(input())
if yas >= 18:
    print("Reşit")
else:
    print("Reşit değil")`,[{d:`20`,stdin:[`20`],out:`Reşit`},{d:`17`,stdin:[`17`],out:`Reşit değil`},{d:`18 (sınır)`,stdin:[`18`],out:`Reşit`}],[`Koşul: yas >= 18`,`if ve else satırlarının sonunda iki nokta unutma.`],[`18 ve üstü: Reşit`,`18 altı: Reşit değil`])],{practice:[V(`p-m6-colon`,`Eksik iki nokta`,`kolay`,20,`Kod 10 sayısı 5'ten büyük olduğu için "büyük" yazdırmalı ama SyntaxError veriyor. Düzelt.`,[{type:`SyntaxError`,description:`if satırının sonunda iki nokta (:) eksik`}],`x = 10
if x > 5
    print("büyük")`,`x = 10
if x > 5:
    print("büyük")`,[{d:`Çıktı büyük`,out:`büyük`}],[`Hata mesajı hangi satırı gösteriyor?`])]}),W(`m6`,2,e(2),`elif ile çok yollu karar`,12,[`elif ile birden fazla durumu ayırmak`,`Koşulların yukarıdan aşağıya sınandığını bilmek`],[L(`b1`,`İkiden fazla seçenek olduğunda elif (else if) kullanılır. Python koşulları yukarıdan aşağıya sınar ve ilk doğru olanın bloğunu çalıştırıp gerisini atlar.`),R(`b2`,I`puan = 75
if puan >= 85:
    print("Pekiyi")
elif puan >= 70:
    print("İyi")
elif puan >= 50:
    print("Geçti")
else:
    print("Kaldı")`,`75 için ilk koşul yanlıştır, ikincisi (>= 70) doğrudur; "İyi" yazılır ve kalan koşullara bakılmaz.`)],[B(`m6-l2-e1`,`Not harfi`,`orta`,20,`Kullanıcıdan notu (tam sayı) al. 85 ve üstü "Pekiyi", 70 ve üstü "İyi", 50 ve üstü "Geçti", diğerleri "Kaldı" yazdır.`,`puan = int(input())
`,`puan = int(input())
if puan >= 85:
    print("Pekiyi")
elif puan >= 70:
    print("İyi")
elif puan >= 50:
    print("Geçti")
else:
    print("Kaldı")`,[{d:`90`,stdin:[`90`],out:`Pekiyi`},{d:`75`,stdin:[`75`],out:`İyi`},{d:`50`,stdin:[`50`],out:`Geçti`},{d:`49`,stdin:[`49`],out:`Kaldı`}],[`En yüksek eşikten başla: 85, sonra 70, sonra 50.`],[`Dört durum da doğru yazdırılır`])]),W(`m6`,3,e(3),`and, or, not`,12,[`Mantıksal operatörleri kullanmak`,`Birleşik koşullar yazmak`],[L(`b1`,`Birden fazla koşulu birleştirmek için and (ikisi de doğru), or (en az biri doğru) ve not (tersi) kullanılır.`),R(`b2`,I`yas = 25
bilet = True
if yas >= 18 and bilet:
    print("Girebilirsin")
if yas < 7 or yas >= 65:
    print("İndirimli")
print(not bilet)`,`"and" için iki koşul da doğru olmalıdır. Burada yas < 7 yanlış, yas >= 65 yanlış olduğundan "İndirimli" yazılmaz. not bilet ise False verir.`)],[B(`m6-l3-e1`,`Bilet fiyatı`,`orta`,25,`Kullanıcıdan yaşı al. 7 yaşından küçük veya 65 ve üstü ise "Ücretsiz", 18'den küçükse "Yarım", diğer durumlarda "Tam" yazdır.`,`yas = int(input())
`,`yas = int(input())
if yas < 7 or yas >= 65:
    print("Ücretsiz")
elif yas < 18:
    print("Yarım")
else:
    print("Tam")`,[{d:`5`,stdin:[`5`],out:`Ücretsiz`},{d:`70`,stdin:[`70`],out:`Ücretsiz`},{d:`12`,stdin:[`12`],out:`Yarım`},{d:`30`,stdin:[`30`],out:`Tam`},{d:`or kullanılmış`,stdin:[`30`],src:`\\bor\\b`}],[`İlk koşulda or kullan.`,`Önce ücretsiz durumu sına, sonra yarım fiyatı.`],[`Dört yaş grubu doğru`,`or kullanılmış`])],{quiz:U(`m6-quiz`,`Modül 6 mini sınavı`,[H(`q1`,`Eşitlik kontrolü hangi operatörle yapılır?`,[`=`,`==`,`===`,`eq`],1,`= atama yapar, == karşılaştırır.`),H(`q2`,`Bu kodun çıktısı nedir?`,[`A`,`B`,`C`,`Hiçbir şey`],1,`x > 5 yanlış, x > 2 doğrudur; ilk doğru blok çalışır ve gerisi atlanır.`,`x = 4
if x > 5:
    print("A")
elif x > 2:
    print("B")
else:
    print("C")`),H(`q3`,`True and False sonucu nedir?`,[`True`,`False`,`Hata`,`None`],1,`and için iki taraf da True olmalıdır.`)]),practice:[B(`p-m6-sign`,`Pozitif, negatif, sıfır`,`kolay`,20,`Kullanıcıdan bir tam sayı al. Sıfırdan büyükse "Pozitif", küçükse "Negatif", sıfırsa "Sıfır" yazdır.`,`n = int(input())
`,`n = int(input())
if n > 0:
    print("Pozitif")
elif n < 0:
    print("Negatif")
else:
    print("Sıfır")`,[{d:`5`,stdin:[`5`],out:`Pozitif`},{d:`-3`,stdin:[`-3`],out:`Negatif`},{d:`0`,stdin:[`0`],out:`Sıfır`}],[`Üç durum için if, elif, else kullan.`],[`Üç durum doğru`])]})]),Wc=G(7,`for ve while Döngüleri`,`Tekrarlayan işleri otomatikleştirmek.`,`m6-l3`,e=>[W(`m7`,1,e(1),`for döngüsü ve range()`,12,[`for ile belirli sayıda tekrar yapmak`,`range() fonksiyonunu kullanmak`],[L(`b1`,`Aynı işi birçok kez yapmak için döngü (loop) kullanılır. for döngüsü bir diziyi sırayla dolaşır. range(n) 0'dan n-1'e kadar sayılar üretir; range(1, n + 1) ise 1'den n'e kadar.`),R(`b2`,I`for i in range(3):
    print(i)
for i in range(1, 4):
    print("Sayı:", i)`,`range(3) 0, 1, 2 üretir; son sayı dahil değildir. Girintili satırlar her turda çalışır. range(1, 4) ise 1, 2, 3 üretir.`),z(`b3`,`tip`,`range(a, b) bitiş değerini (b) içermez. 1'den 5'e kadar saymak için range(1, 6) yaz.`)],[B(`m7-l1-e1`,`1'den n'e say`,`kolay`,15,`Kullanıcıdan bir n sayısı al ve 1'den n'e kadar (n dahil) sayıları alt alta yazdır.`,`n = int(input())
`,`n = int(input())
for i in range(1, n + 1):
    print(i)`,[{d:`n = 3`,stdin:[`3`],out:`1
2
3`},{d:`n = 5`,stdin:[`5`],out:`1
2
3
4
5`},{d:`for kullanılmış`,stdin:[`2`],src:`\\bfor\\b`}],[`range(1, n + 1) kullan.`],[`n dahil sayılar yazdırılır`,`for kullanılmış`])],{practice:[V(`p-m7-off`,`Bir eksik sayı`,`kolay`,20,`Kod 1'den 5'e kadar yazdırmalı ama 0'dan 4'e kadar yazdırıyor. Düzelt.`,[{type:`Mantık hatası`,description:`range(5) 0'dan başlar ve 5'i içermez`}],`for i in range(5):
    print(i)`,`for i in range(1, 6):
    print(i)`,[{d:`1'den 5'e`,out:`1
2
3
4
5`}],[`range() iki sayı alabilir: başlangıç ve bitiş.`])]}),W(`m7`,2,e(2),`while döngüsü`,12,[`Koşul doğru olduğu sürece tekrarlamak`,`Sonsuz döngüden kaçınmak`],[L(`b1`,`while döngüsü koşul doğru olduğu sürece tekrar eder. Koşulu değiştiren bir satır olmazsa döngü sonsuza kadar sürer; bu yüzden sayaç gibi bir değişkeni her turda güncellemelisin.`),R(`b2`,I`sayac = 3
while sayac > 0:
    print(sayac)
    sayac = sayac - 1
print("Başla!")`,`sayac her turda 1 azalır. 0 olunca koşul (sayac > 0) yanlış olur ve döngü biter.`),z(`b3`,`warning`,`Sayacı güncellemeyi unutursan program sonsuz döngüye girer. Bu platformda uzun süren kodlar zaman aşımıyla durdurulur.`)],[B(`m7-l2-e1`,`Geri sayım`,`orta`,20,`Kullanıcıdan bir n sayısı al. n'den 1'e kadar geri sayıp alt alta yazdır, en sonda "Başla!" yazdır.`,`n = int(input())
`,`n = int(input())
while n > 0:
    print(n)
    n = n - 1
print("Başla!")`,[{d:`n = 3`,stdin:[`3`],out:`3
2
1
Başla!`},{d:`n = 1`,stdin:[`1`],out:`1
Başla!`},{d:`while kullanılmış`,stdin:[`1`],src:`\\bwhile\\b`}],[`Döngü içinde n değerini 1 azalt.`],[`Geri sayım doğru`,`while kullanılmış`])]),W(`m7`,3,e(3),`break, continue ve toplam biriktirme`,14,[`Toplam biriktirmek`,`break ve continue kullanmak`],[L(`b1`,`Döngüde sonuçları biriktirmek için önce başlangıç değeri verilir (toplam = 0), sonra her turda eklenir. break döngüyü hemen bitirir, continue ise o turu atlayıp bir sonrakine geçer.`),R(`b2`,I`toplam = 0
for i in range(1, 6):
    toplam = toplam + i
print(toplam)
for i in range(1, 10):
    if i == 4:
        break
    print(i)`,`İlk döngü 1+2+3+4+5 = 15 toplamını bulur. İkinci döngü i 4 olunca break ile hemen biter, bu yüzden 1, 2, 3 yazılır.`),R(`b3`,I`for i in range(1, 6):
    if i == 3:
        continue
    print(i)`,`i 3 olduğunda continue o turu atlar ve döngü bir sonraki sayıyla devam eder; bu yüzden 1, 2, 4, 5 yazılır (3 yazılmaz).`)],[B(`m7-l3-e1`,`1'den n'e toplam`,`orta`,25,`Kullanıcıdan n al. 1'den n'e kadar (n dahil) tüm sayıların toplamını bir döngüyle hesaplayıp yazdır.`,`n = int(input())
toplam = 0
`,`n = int(input())
toplam = 0
for i in range(1, n + 1):
    toplam = toplam + i
print(toplam)`,[{d:`n = 10`,stdin:[`10`],out:`55`},{d:`n = 100`,stdin:[`100`],out:`5050`},{d:`Döngü kullanılmış`,stdin:[`3`],src:`\\b(for|while)\\b`}],[`Her turda toplam = toplam + i yaz.`],[`10 için 55`,`Döngü kullanılmış`])],{quiz:U(`m7-quiz`,`Modül 7 mini sınavı`,[H(`q1`,`range(1, 4) hangi sayıları üretir?`,[`1, 2, 3, 4`,`1, 2, 3`,`0, 1, 2, 3`,`2, 3, 4`],1,`Bitiş değeri dahil değildir.`),H(`q2`,`Bu kod ne yazdırır?`,[`6`,`10`,`3`,`0`],0,`0+1+2+3 = 6.`,`toplam = 0
for i in range(4):
    toplam = toplam + i
print(toplam)`),H(`q3`,`break ne yapar?`,[`Turu atlar`,`Döngüyü hemen bitirir`,`Programı kapatır`,`Hata verir`],1,`break döngüden çıkar; continue ise yalnızca o turu atlar.`)]),practice:[B(`p-m7-table`,`Çarpım tablosu`,`orta`,25,`Kullanıcıdan bir n al ve "n x 1 = ..." biçiminde 1'den 3'e kadar çarpım satırlarını yazdır. Örnek: n = 4 → 4 x 1 = 4`,`n = int(input())
`,`n = int(input())
for i in range(1, 4):
    print(f"{n} x {i} = {n * i}")`,[{d:`n = 4`,stdin:[`4`],out:`4 x 1 = 4
4 x 2 = 8
4 x 3 = 12`},{d:`n = 7`,stdin:[`7`],out:`7 x 1 = 7
7 x 2 = 14
7 x 3 = 21`}],[`f-string içinde {n * i} yaz.`],[`3 satır çarpım tablosu`])]})]),Gc=G(8,`Listeler ve Sözlükler`,`Birden fazla değeri tek değişkende saklamak.`,`m7-l3`,e=>[W(`m8`,1,e(1),`Listeler (list)`,12,[`Liste oluşturmak ve elemanlara index ile erişmek`,`append() ve len() kullanmak`],[L(`b1`,`Liste (list), birden fazla değeri sırayla tutan bir koleksiyondur. Köşeli parantez içinde virgülle yazılır. Elemanlara sıra numarasıyla (index) erişilir; index 0'dan başlar.`),R(`b2`,I`meyveler = ["elma", "armut", "muz"]
print(meyveler[0])
print(meyveler[-1])
meyveler.append("kiraz")
print(meyveler)
print(len(meyveler))`,`meyveler[0] ilk, meyveler[-1] son elemandır. append() listenin sonuna ekler, len() eleman sayısını verir.`),z(`b3`,`warning`,`Olmayan bir index'e erişirsen IndexError alırsın. 3 elemanlı listede en büyük index 2'dir.`)],[B(`m8-l1-e1`,`Listeye ekle`,`kolay`,15,`meyveler listesine "muz" ekle, ardından önce listeyi, sonra eleman sayısını yazdır.`,`meyveler = ["elma", "armut"]
`,`meyveler = ["elma", "armut"]
meyveler.append("muz")
print(meyveler)
print(len(meyveler))`,[{d:`Liste ve uzunluk`,out:`['elma', 'armut', 'muz']
3`},{d:`append kullanılmış`,src:`append\\(`}],[`liste.append(değer) listenin sonuna ekler.`],[`Liste: ['elma', 'armut', 'muz']`,`Uzunluk: 3`])],{practice:[V(`p-m8-index`,`Olmayan index`,`kolay`,20,`Kod listenin son elemanı olan "muz"u yazdırmalı ama IndexError veriyor. Düzelt.`,[{type:`IndexError`,description:`3 elemanlı listede 3 numaralı index yoktur`}],`meyveler = ["elma", "armut", "muz"]
print(meyveler[3])`,`meyveler = ["elma", "armut", "muz"]
print(meyveler[2])`,[{d:`Çıktı muz`,out:`muz`}],[`Index 0'dan başlar; son elemanın index'i kaç?`])]}),W(`m8`,2,e(2),`Listelerde döngü ve hazır fonksiyonlar`,12,[`for ile listeyi dolaşmak`,`sum(), max(), min(), sorted() kullanmak`],[L(`b1`,`for döngüsü listenin elemanlarını sırayla dolaşabilir. Ayrıca sum() toplamı, max() en büyüğü, min() en küçüğü, sorted() ise sıralı yeni bir liste verir.`),R(`b2`,I`sayilar = [4, 9, 2, 7]
for s in sayilar:
    print(s * 2)
print(sum(sayilar))
print(max(sayilar))
print(sorted(sayilar))`,`Döngü her elemanı s değişkenine atar. sum() 22, max() 9 verir; sorted() orijinal listeyi bozmadan sıralı bir kopya üretir.`)],[B(`m8-l2-e1`,`Toplam ve en büyük`,`kolay`,20,`sayilar listesinin toplamını ve en büyük elemanını (sum() ve max() ile) alt alta yazdır.`,`sayilar = [4, 9, 2, 7]
`,`sayilar = [4, 9, 2, 7]
print(sum(sayilar))
print(max(sayilar))`,[{d:`Toplam 22, en büyük 9`,out:`22
9`},{d:`sum ve max kullanılmış`,src:`sum\\(.*[\\s\\S]*max\\(`}],[`print(sum(sayilar)) ve print(max(sayilar))`],[`22 ve 9`])]),W(`m8`,3,e(3),`Sözlükler (dict)`,14,[`Anahtar-değer çiftleriyle sözlük oluşturmak`,`items() ile sözlüğü dolaşmak`],[L(`b1`,`Sözlük (dictionary), değerleri anahtarlarla (key) saklar. Süslü parantez içinde anahtar: değer biçiminde yazılır. Değere sıra numarasıyla değil anahtarıyla ulaşılır.`),R(`b2`,I`ogrenci = {"ad": "Ada", "yas": 20}
print(ogrenci["ad"])
ogrenci["sehir"] = "İzmir"
for anahtar, deger in ogrenci.items():
    print(f"{anahtar}: {deger}")`,`Yeni bir anahtara değer atayarak sözlüğe eleman eklenir. items() her turda (anahtar, değer) çifti verir.`),z(`b3`,`warning`,`Sözlükte olmayan bir anahtarı okumaya çalışırsan KeyError alırsın.`)],[B(`m8-l3-e1`,`Öğrenci kartı`,`orta`,25,`ogrenci sözlüğüne "sehir": "İzmir" ekle. Ardından items() ile tüm çiftleri "anahtar: değer" biçiminde alt alta yazdır.`,`ogrenci = {"ad": "Ada", "yas": 20}
`,`ogrenci = {"ad": "Ada", "yas": 20}
ogrenci["sehir"] = "İzmir"
for anahtar, deger in ogrenci.items():
    print(f"{anahtar}: {deger}")`,[{d:`Üç satır`,out:`ad: Ada
yas: 20
sehir: İzmir`},{d:`items kullanılmış`,src:`items\\(`}],[`ogrenci["sehir"] = "İzmir"`,`for anahtar, deger in ogrenci.items():`],[`Üç satır doğru`,`items() kullanılmış`])],{quiz:U(`m8-quiz`,`Modül 8 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`b`,`a`,`c`,`Hata`],0,`Index 1, ikinci elemandır.`,`x = ["a", "b", "c"]
print(x[1])`),H(`q2`,`Sözlükte olmayan bir anahtar okunursa hangi hata oluşur?`,[`IndexError`,`KeyError`,`ValueError`,`NameError`],1,`Olmayan anahtar KeyError verir; olmayan index ise IndexError.`),H(`q3`,`Listenin sonuna eleman eklemek için hangisi kullanılır?`,[`add()`,`append()`,`push()`,`insert_end()`],1,`Python listelerinde append() kullanılır.`)]),practice:[V(`p-m8-key`,`Olmayan anahtar`,`orta`,25,`Kod kişinin adını ("Ada") yazdırmalı ama KeyError veriyor. Düzelt.`,[{type:`KeyError`,description:`Sözlükte "isim" anahtarı yok; anahtar "ad"`}],`kisi = {"ad": "Ada", "yas": 20}
print(kisi["isim"])`,`kisi = {"ad": "Ada", "yas": 20}
print(kisi["ad"])`,[{d:`Çıktı Ada`,out:`Ada`}],[`Sözlüğün anahtarlarına bak.`]),B(`p-m8-evens`,`Çift sayıları ayır`,`orta`,30,`sayilar listesinden yalnızca çift sayıları cift adlı yeni bir listeye ekle ve cift listesini yazdır.`,`sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
cift = []
`,`sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
cift = []
for s in sayilar:
    if s % 2 == 0:
        cift.append(s)
print(cift)`,[{d:`Çiftler`,out:`[2, 4, 6, 8, 10]`}],[`for ile dolaş, if ile çift mi diye sına, append ile ekle.`],[`[2, 4, 6, 8, 10]`])]})]),Kc=G(9,`Fonksiyonlar`,`Kodu yeniden kullanılabilir parçalara bölmek.`,`m8-l3`,e=>[W(`m9`,1,e(1),`Fonksiyon tanımlamak (def)`,12,[`def ile fonksiyon tanımlamak`,`Fonksiyonu çağırmak`],[L(`b1`,`Fonksiyon (function), bir iş yapan ve adı olan kod bloğudur. def ile tanımlanır, adıyla çağrılır. Tanımlamak fonksiyonu çalıştırmaz; çalışması için çağırman gerekir.`),R(`b2`,I`def selamla():
    print("Merhaba!")
    print("Hoş geldin.")

selamla()
selamla()`,`Fonksiyon bir kez tanımlandı, iki kez çağrıldı. Her çağrıda girintili satırlar çalışır. Bu sayede aynı kodu tekrar yazmazsın.`),z(`b3`,`info`,`Alıştırmaların başlangıç kodunda gördüğün pass, "burada henüz bir şey yok" anlamına gelen bir yer tutucudur (placeholder). Boş bir fonksiyonun hata vermemesini sağlar; kendi kodunu yazarken pass satırını silersin.`)],[B(`m9-l1-e1`,`Selamla fonksiyonu`,`kolay`,15,`selamla adında parametresiz bir fonksiyon yaz; çağrıldığında ekrana "Merhaba!" yazdırsın.`,`def selamla():
    pass
`,`def selamla():
    print("Merhaba!")`,[{d:`selamla() çağrısı`,append:`selamla()`,out:`Merhaba!`},{d:`İki çağrı`,append:`selamla()
selamla()`,out:`Merhaba!
Merhaba!`}],[`def selamla(): satırından sonra girintili bir print() yaz.`,`pass satırını sil.`],[`selamla() "Merhaba!" yazdırır`])]),W(`m9`,2,e(2),`Parametre ve return`,14,[`Fonksiyona değer göndermek (parametre)`,`return ile sonuç döndürmek`],[L(`b1`,`Parametre (parameter), fonksiyona dışarıdan gönderilen değerdir. return ise fonksiyonun bir sonuç geri vermesini sağlar. return olmayan fonksiyon None döndürür.`),R(`b2`,I`def kare(x):
    return x * x

sonuc = kare(5)
print(sonuc)
print(kare(3) + 1)`,`kare(5) çağrısında x değişkeni 5 olur; fonksiyon 25 döndürür. Dönen değer bir değişkene atanabilir veya doğrudan işlemde kullanılabilir.`),z(`b3`,`warning`,`print() ekrana yazar, return ise değeri çağırana verir. İkisi aynı şey değildir.`)],[B(`m9-l2-e1`,`Kare alan fonksiyon`,`orta`,20,`kare(x) fonksiyonunu yaz: x'in karesini döndürsün (yazdırmasın).`,`def kare(x):
    pass
`,`def kare(x):
    return x * x`,[{d:`kare(4)`,append:`print(kare(4))`,out:`16`},{d:`kare(-3)`,append:`print(kare(-3))`,out:`9`},{d:`return kullanılmış`,append:`print(kare(2))`,src:`return`}],[`return x * x yaz.`],[`kare(4) = 16`,`return kullanılmış`])],{practice:[V(`p-m9-return`,`Unutulan return`,`orta`,25,`topla(2, 3) çağrısı 5 yazdırmalı ama None yazdırıyor. Düzelt.`,[{type:`Mantık hatası`,description:`Fonksiyon sonucu hesaplıyor ama döndürmüyor`}],`def topla(a, b):
    a + b

print(topla(2, 3))`,`def topla(a, b):
    return a + b

print(topla(2, 3))`,[{d:`Çıktı 5`,out:`5`}],[`Fonksiyonun sonucu geri vermesi için hangi anahtar kelime gerekir?`])]}),W(`m9`,3,e(3),`Varsayılan parametreler`,12,[`Varsayılan değerli parametre tanımlamak`,`Birden fazla parametre kullanmak`],[L(`b1`,`Parametreye varsayılan bir değer verirsen, çağrıda o değeri göndermek zorunlu olmaz. Gönderirsen varsayılan değer yerine gönderilen kullanılır.`),R(`b2`,I`def selam(ad, mesaj="Merhaba"):
    return f"{mesaj}, {ad}!"

print(selam("Ada"))
print(selam("Ali", "Selam"))`,`İlk çağrıda mesaj verilmediği için varsayılan "Merhaba" kullanıldı. İkincisinde "Selam" varsayılanı geçersiz kıldı.`)],[B(`m9-l3-e1`,`Selam fonksiyonu`,`orta`,25,`selam(ad, mesaj="Merhaba") fonksiyonunu yaz: "<mesaj>, <ad>!" metnini döndürsün.`,`def selam(ad, mesaj="Merhaba"):
    pass
`,`def selam(ad, mesaj="Merhaba"):
    return f"{mesaj}, {ad}!"`,[{d:`Varsayılan mesaj`,append:`print(selam("Ada"))`,out:`Merhaba, Ada!`},{d:`Özel mesaj`,append:`print(selam("Ali", "Selam"))`,out:`Selam, Ali!`}],[`f-string ile iki parametreyi birleştir.`],[`selam("Ada") → Merhaba, Ada!`])],{quiz:U(`m9-quiz`,`Modül 9 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`6`,`None`,`3`,`Hata`],0,`f(3) 3 * 2 = 6 döndürür ve print() onu yazar.`,`def f(x):
    return x * 2
print(f(3))`),H(`q2`,`return olmayan bir fonksiyon ne döndürür?`,[`0`,`None`,`False`,`Hata verir`],1,`return yoksa fonksiyon None döndürür.`),H(`q3`,`Fonksiyon tanımlamak için hangi anahtar kelime kullanılır?`,[`function`,`fn`,`def`,`func`],2,`Python'da fonksiyonlar def ile tanımlanır.`)]),practice:[B(`p-m9-even`,`Çift mi?`,`kolay`,20,`cift_mi(n) fonksiyonunu yaz: n çiftse True, değilse False döndürsün.`,`def cift_mi(n):
    pass
`,`def cift_mi(n):
    return n % 2 == 0`,[{d:`cift_mi(4)`,append:`print(cift_mi(4))`,out:`True`},{d:`cift_mi(7)`,append:`print(cift_mi(7))`,out:`False`}],[`n % 2 == 0 ifadesi zaten True veya False verir.`],[`4 için True`,`7 için False`])]})]),qc=G(10,`Hata Yönetimi`,`try / except ile programın çökmesini önlemek.`,`m9-l3`,e=>[W(`m10`,1,e(1),`Hata türleri ve traceback okumak`,12,[`Yaygın hata türlerini tanımak`,`Hata mesajından satır ve türü okumak`],[L(`b1`,`Python bir hata bulduğunda programı durdurur ve bir hata mesajı (traceback) gösterir. Mesajın sonunda hata türü ve açıklama, üstünde ise hatanın olduğu satır yer alır.`),L(`b2`,`Sık görülen hatalar: ZeroDivisionError (sıfıra bölme), ValueError (uygun olmayan değer, örn. int("abc")), TypeError (uyumsuz türler), NameError (tanımsız ad), IndexError ve KeyError.`),R(`b3`,I`print(10 / 2)
# print(10 / 0)   # ZeroDivisionError verirdi
print(int("42"))`,`Yorum satırına alınan satır çalışsaydı ZeroDivisionError oluşurdu. Hata mesajını okumak çözümün yarısıdır.`)],[V(`m10-l1-e1`,`Sıfıra bölme`,`kolay`,15,`Kod 10 / 0 yüzünden ZeroDivisionError veriyor. Bölen 0 yerine 5 olacak şekilde düzelt; çıktı 2.0 olmalı.`,[{type:`ZeroDivisionError`,description:`Bölen sıfır olamaz`}],`bolen = 0
print(10 / bolen)`,`bolen = 5
print(10 / bolen)`,[{d:`Çıktı 2.0`,out:`2.0`}],[`Hata mesajı hangi satırı gösteriyor?`,`bolen değişkeninin değerini değiştir.`])]),W(`m10`,2,e(2),`try ve except`,14,[`Hatayı try / except ile yakalamak`,`Belirli bir hata türünü yakalamak`],[L(`b1`,`try bloğundaki kod hata verirse program çökmez; Python except bloğuna geçer. Hangi hatayı beklediğini belirtmek iyi bir alışkanlıktır.`),R(`b2`,I`try:
    print(10 / 0)
except ZeroDivisionError:
    print("Sıfıra bölünemez")
print("Program devam ediyor")`,`Hata oluşunca try bloğunun geri kalanı atlanır, except bloğu çalışır ve program normal akışına devam eder.`)],[B(`m10-l2-e1`,`Güvenli bölme`,`orta`,25,`Kullanıcıdan iki tam sayı (a, b) al ve a / b sonucunu yazdır. b sıfırsa program çökmesin, "Sıfıra bölünemez" yazdırsın.`,`a = int(input())
b = int(input())
`,`a = int(input())
b = int(input())
try:
    print(a / b)
except ZeroDivisionError:
    print("Sıfıra bölünemez")`,[{d:`10 / 2`,stdin:[`10`,`2`],out:`5.0`},{d:`5 / 0`,stdin:[`5`,`0`],out:`Sıfıra bölünemez`},{d:`try kullanılmış`,stdin:[`1`,`1`],src:`\\btry\\b`}],[`Bölme işlemini try bloğuna al.`,`except ZeroDivisionError: yaz.`],[`Normal bölme çalışır`,`Sıfıra bölme yakalanır`])],{practice:[V(`p-m10-except`,`Eksik except`,`orta`,25,`Kod "Hata yakalandı" yazdırmalı ama SyntaxError veriyor. try bloğunun yanında ne eksik?`,[{type:`SyntaxError`,description:`try bloğunun except veya finally karşılığı yok`}],`try:
    print(1 / 0)
print("Hata yakalandı")`,`try:
    print(1 / 0)
except ZeroDivisionError:
    print("Hata yakalandı")`,[{d:`Çıktı Hata yakalandı`,out:`Hata yakalandı`}],[`try tek başına kullanılamaz.`])]}),W(`m10`,3,e(3),`ValueError, else ve finally`,14,[`Kullanıcı girdisindeki hatayı yakalamak`,`else ile "hata olmadıysa" bloğu yazmak`,`finally ile her durumda çalışan kod yazmak`],[L(`b1`,`Kullanıcının yazdığı veriyi sayıya çevirirken sık hata çıkar: int("abc") ValueError verir. except ValueError ile bunu yakalarsın. finally bloğu hata olsa da olmasa da en sonda çalışır.`),R(`b2`,I`try:
    sayi = int("abc")
    print(sayi)
except ValueError:
    print("Geçersiz sayı")
finally:
    print("Bitti")`,`"abc" sayıya çevrilemez; except bloğu çalışır. finally ise her durumda en sonda çalıştığı için "Bitti" yazılır.`),L(`b3`,`try / except yapısına bir de else ekleyebilirsin: else bloğu yalnızca try bloğunda hata OLMADIĞINDA çalışır. Böylece "başarılı durum" kodunu hata yakalayan kodun dışında tutarsın.`),R(`b4`,I`try:
    sayi = int("25")
except ValueError:
    print("Geçersiz sayı")
else:
    print("Başarılı:", sayi)
finally:
    print("Bitti")`,`"25" sayıya çevrilebildiği için except atlanır, else bloğu çalışır; finally yine en sonda çalışır.`)],[B(`m10-l3-e1`,`Güvenli sayı alma`,`orta`,30,`Kullanıcıdan bir değer al. Sayıya çevrilebiliyorsa "Sayı: X", çevrilemiyorsa "Geçersiz sayı" yazdır. Her iki durumda da sonda "Bitti" yazdır (finally kullan).`,`giris = input()
`,`giris = input()
try:
    n = int(giris)
    print(f"Sayı: {n}")
except ValueError:
    print("Geçersiz sayı")
finally:
    print("Bitti")`,[{d:`42`,stdin:[`42`],out:`Sayı: 42
Bitti`},{d:`abc`,stdin:[`abc`],out:`Geçersiz sayı
Bitti`},{d:`finally kullanılmış`,stdin:[`1`],src:`\\bfinally\\b`}],[`int(giris) try içinde olmalı.`,`finally: bloğuna print("Bitti") koy.`],[`Geçerli ve geçersiz girdi`,`finally kullanılmış`])],{quiz:U(`m10-quiz`,`Modül 10 mini sınavı`,[H(`q1`,`int("abc") hangi hatayı verir?`,[`TypeError`,`ValueError`,`NameError`,`KeyError`],1,`Değerin türü doğru (metin) ama içeriği sayıya uygun değil: ValueError.`),H(`q2`,`Bu kod ne yazdırır?`,[`A`,`B`,`A
B`,`Hata`],1,`1 / 0 hata verir, except çalışır; "A" yazılmaz.`,`try:
    1 / 0
    print("A")
except ZeroDivisionError:
    print("B")`),H(`q3`,`finally bloğu ne zaman çalışır?`,[`Yalnızca hata olursa`,`Yalnızca hata olmazsa`,`Her durumda`,`Hiçbir zaman`],2,`finally hata olsa da olmasa da çalışır.`)]),practice:[B(`p-m10-index`,`Listede güvenli erişim`,`orta`,30,`sayilar[10] IndexError verir. try / except IndexError ile hatayı yakala ve "Index yok" yazdır.`,`sayilar = [1, 2, 3]
`,`sayilar = [1, 2, 3]
try:
    print(sayilar[10])
except IndexError:
    print("Index yok")`,[{d:`Çıktı Index yok`,out:`Index yok`},{d:`try kullanılmış`,src:`\\btry\\b`}],[`sayilar[10] satırını try içine al.`],[`Index yok yazdırılır`])]})]),Jc=G(11,`Modüller`,`Hazır kodları import ile kullanmak.`,`m10-l3`,e=>[W(`m11`,1,e(1),`import ve math modülü`,12,[`Modül (module) kavramını anlamak`,`math modülünü kullanmak`],[L(`b1`,`Modül (module), hazır fonksiyon ve değerler içeren bir Python dosyasıdır. import ile programına çağırırsın ve modül_adı.isim biçiminde kullanırsın. math modülü matematik fonksiyonlarını içerir.`),R(`b2`,I`import math

print(math.sqrt(16))
print(math.pi)
print(math.floor(3.7), math.ceil(3.2))`,`math.sqrt() karekök, math.pi π sayısıdır. floor() aşağı, ceil() yukarı yuvarlar: 3.7 → 3, 3.2 → 4.`),z(`b3`,`info`,`Python'un yanında gelen modül kümesine standart kütüphane (standard library) denir; bu derste kullandıkların ek kurulum gerektirmez.`)],[B(`m11-l1-e1`,`Daire alanı`,`orta`,20,`Kullanıcıdan yarıçapı (tam sayı) al ve daire alanını (π × r²) 2 ondalık basamağa yuvarlayıp yazdır. math modülünü kullan.`,`import math
r = int(input())
`,`import math
r = int(input())
print(round(math.pi * r ** 2, 2))`,[{d:`r = 2`,stdin:[`2`],out:`12.57`},{d:`r = 1`,stdin:[`1`],out:`3.14`},{d:`math.pi kullanılmış`,stdin:[`1`],src:`math\\.pi`}],[`r ** 2 yarıçapın karesidir.`,`round(değer, 2) ile yuvarla.`],[`r = 2 için 12.57`,`math.pi kullanılmış`])],{practice:[V(`p-m11-attr`,`Olmayan fonksiyon`,`kolay`,20,`Kod 16'nın karekökünü (4.0) yazdırmalı ama AttributeError veriyor. Düzelt.`,[{type:`AttributeError`,description:`math modülünde squareroot adında bir fonksiyon yok`}],`import math
print(math.squareroot(16))`,`import math
print(math.sqrt(16))`,[{d:`Çıktı 4.0`,out:`4.0`}],[`Karekök fonksiyonunun kısa adı nedir?`])]}),W(`m11`,2,e(2),`from ... import ve as`,12,[`from ile tek bir fonksiyon almak`,`as ile takma ad vermek`],[L(`b1`,`from modül import isim ile yalnızca ihtiyacın olan şeyi alırsın ve modül adını yazmadan kullanırsın. as ile de takma ad (alias) verebilirsin.`),R(`b2`,I`from math import sqrt
import math as m

print(sqrt(25))
print(m.floor(2.9))`,`sqrt doğrudan kullanıldı; math modülü "m" takma adıyla çağrıldı, bu yüzden m.floor() yazıldı.`)],[B(`m11-l2-e1`,`Hipotenüs`,`orta`,25,`Dik üçgenin iki kenarını (a, b) kullanıcıdan al; hipotenüsü (a² + b² değerinin karekökü) from math import sqrt ile hesaplayıp yazdır.`,`from math import sqrt
a = int(input())
b = int(input())
`,`from math import sqrt
a = int(input())
b = int(input())
print(sqrt(a ** 2 + b ** 2))`,[{d:`3, 4`,stdin:[`3`,`4`],out:`5.0`},{d:`5, 12`,stdin:[`5`,`12`],out:`13.0`}],[`sqrt(a ** 2 + b ** 2)`],[`3, 4 için 5.0`])]),W(`m11`,3,e(3),`random ve datetime`,12,[`random ile rastgele sayı üretmek`,`datetime ile tarih kullanmak`],[L(`b1`,`random modülü rastgele değerler üretir: random.randint(1, 6) 1 ile 6 arasında (6 dahil) bir tam sayı verir. datetime modülündeki date ile tarih nesneleri oluşturabilirsin.`),R(`b2`,I`import random
from datetime import date

zar = random.randint(1, 6)
print(1 <= zar <= 6)
d = date(2025, 3, 15)
print(d.year, d.month, d.day)`,`Rastgele sayı her çalıştırmada değişse de her zaman 1 ile 6 arasındadır, bu yüzden çıktı True olur. date(2025, 3, 15) belirli bir tarih oluşturur.`),z(`b3`,`info`,`Python'da kendi modülünü yazmak, kodunu ayrı bir .py dosyasına koyup import etmek demektir. Bu platformda tek bir kod penceresi olduğu için bunu burada denemeyeceksin; ama kendi bilgisayarında aynı mantıkla çalışır.`)],[B(`m11-l3-e1`,`Zar at`,`orta`,25,`random modülünü kullanarak 1 ile 6 arasında (6 dahil) rastgele bir sayıyı zar değişkenine ata.`,`import random
`,`import random
zar = random.randint(1, 6)`,[{d:`zar 1-6 arasında`,append:`print(1 <= zar <= 6)`,out:`True`},{d:`randint kullanılmış`,append:`print(zar)`,src:`randint\\(`}],[`random.randint(1, 6)`],[`zar değişkeni 1 ile 6 arasında`])],{quiz:U(`m11-quiz`,`Modül 11 mini sınavı`,[H(`q1`,`Bir modülü programa eklemek için hangi anahtar kelime kullanılır?`,[`include`,`import`,`using`,`require`],1,`Python'da modüller import ile eklenir.`),H(`q2`,`Bu kod ne yazdırır?`,[`3`,`4`,`3.5`,`Hata`],1,`math.ceil() yukarı yuvarlar: 3.2 → 4.`,`import math
print(math.ceil(3.2))`),H(`q3`,`from math import sqrt yazdıysan karekökü nasıl alırsın?`,[`math.sqrt(9)`,`sqrt(9)`,`import sqrt(9)`,`math(sqrt, 9)`],1,`from ile aldığın isim modül adı olmadan kullanılır.`)]),practice:[B(`p-m11-ceil`,`Kaç sayfa lazım?`,`orta`,25,`Bir kitapta sayfa başına 10 satır var. Kullanıcıdan satır sayısını al; tüm satırlar için gereken sayfa sayısını yukarı yuvarlayarak yazdır. (25 satır → 3 sayfa)`,`import math
satir = int(input())
`,`import math
satir = int(input())
print(math.ceil(satir / 10))`,[{d:`25 satır`,stdin:[`25`],out:`3`},{d:`40 satır`,stdin:[`40`],out:`4`}],[`math.ceil() yukarı yuvarlar.`],[`25 için 3`,`40 için 4`])]})]),Yc=G(12,`Nesne Tabanlı Programlama`,`Sınıflar, nesneler, metotlar ve kalıtım.`,`m11-l3`,e=>[W(`m12`,1,e(1),`Sınıf ve nesne`,14,[`class ile sınıf tanımlamak`,`__init__ ile nesnenin özelliklerini ayarlamak`],[L(`b1`,`Sınıf (class), nesnelerin (object) şablonudur. Sınıftan oluşturulan her nesne kendi özelliklerini (attribute) taşır. __init__ metodu nesne oluşturulurken otomatik çalışır; self, o nesnenin kendisini temsil eder.`),R(`b2`,I`class Kedi:
    def __init__(self, ad, yas):
        self.ad = ad
        self.yas = yas

k = Kedi("Pamuk", 3)
print(k.ad, k.yas)
k2 = Kedi("Boncuk", 1)
print(k2.ad)`,`Kedi("Pamuk", 3) çağrısı __init__ metodunu çalıştırır ve self.ad, self.yas değerlerini atar. Her nesnenin değerleri birbirinden bağımsızdır.`),z(`b3`,`info`,`Başlangıç kodlarında gördüğün pass, içi henüz boş olan bir sınıf veya fonksiyon için yer tutucudur. Gerçek kodunu yazarken pass satırını silersin.`)],[B(`m12-l1-e1`,`Öğrenci sınıfı`,`orta`,25,`Ogrenci sınıfını yaz: __init__(self, ad, yas) metodu ad ve yas özelliklerini nesneye kaydetsin.`,`class Ogrenci:
    pass
`,`class Ogrenci:
    def __init__(self, ad, yas):
        self.ad = ad
        self.yas = yas`,[{d:`Özellikler okunuyor`,append:`o = Ogrenci("Ada", 20)
print(o.ad, o.yas)`,out:`Ada 20`},{d:`İki nesne bağımsız`,append:`a = Ogrenci("Ali", 18)
b = Ogrenci("Bora", 19)
print(a.ad, b.ad)`,out:`Ali Bora`}],[`def __init__(self, ad, yas): ile başla.`,`self.ad = ad yaz.`],[`Nesne özellikleri saklanır`])]),W(`m12`,2,e(2),`Metotlar`,14,[`Sınıfa metot eklemek`,`Nesnenin durumunu metotla değiştirmek`],[L(`b1`,`Sınıfın içindeki fonksiyonlara metot (method) denir. İlk parametreleri her zaman self'tir; böylece nesnenin özelliklerine erişirler. Nesne üzerinden nesne.metot() biçiminde çağrılır.`),R(`b2`,I`class Sayac:
    def __init__(self):
        self.sayi = 0

    def artir(self):
        self.sayi = self.sayi + 1

s = Sayac()
s.artir()
s.artir()
print(s.sayi)`,`artir() her çağrıldığında nesnenin sayi özelliğini bir artırır. Çağrıda self yazılmaz; Python onu kendisi gönderir.`),z(`b3`,`warning`,`Metot tanımında self'i yazmayı unutursan çağrıda TypeError alırsın.`)],[B(`m12-l2-e1`,`Sayaç sınıfı`,`orta`,25,`Sayac sınıfını yaz: başlangıçta sayi 0 olsun, artir() metodu sayiyi 1 artırsın.`,`class Sayac:
    pass
`,`class Sayac:
    def __init__(self):
        self.sayi = 0

    def artir(self):
        self.sayi = self.sayi + 1`,[{d:`İki artırma`,append:`s = Sayac()
s.artir()
s.artir()
print(s.sayi)`,out:`2`},{d:`Başlangıç 0`,append:`print(Sayac().sayi)`,out:`0`}],[`__init__ içinde self.sayi = 0 yaz.`,`artir(self) metodunda self.sayi'yi artır.`],[`artir() iki kez → 2`])],{practice:[V(`p-m12-self`,`Unutulan self`,`orta`,30,`artir() çağrısı TypeError veriyor. Çıktı 1 olmalı. Metot tanımını düzelt.`,[{type:`TypeError`,description:`Metot self parametresini almıyor`}],`class Sayac:
    def __init__(self):
        self.sayi = 0

    def artir():
        self.sayi = self.sayi + 1

s = Sayac()
s.artir()
print(s.sayi)`,`class Sayac:
    def __init__(self):
        self.sayi = 0

    def artir(self):
        self.sayi = self.sayi + 1

s = Sayac()
s.artir()
print(s.sayi)`,[{d:`Çıktı 1`,out:`1`}],[`Metotların ilk parametresi neydi?`])]}),W(`m12`,3,e(3),`Kalıtım`,14,[`Başka bir sınıftan miras almak`,`Metodu ezmek (override)`],[L(`b1`,`Kalıtım (inheritance), bir sınıfın başka bir sınıfın özelliklerini ve metotlarını devralmasıdır. class Alt(Ust): biçiminde yazılır. Alt sınıf aynı adlı metodu yeniden yazarsa üstteki yerine o çalışır (override).`),R(`b2`,I`class Hayvan:
    def ses(self):
        return "..."

class Kedi(Hayvan):
    def ses(self):
        return "Miyav"

print(Hayvan().ses())
print(Kedi().ses())`,`Kedi sınıfı Hayvan'dan türedi ama ses() metodunu kendine göre yeniden yazdı. Hayvan nesnesi "...", Kedi nesnesi "Miyav" döndürür.`)],[B(`m12-l3-e1`,`Köpek sınıfı`,`zor`,30,`Hayvan sınıfı zaten var. Ondan türeyen Kopek sınıfını yaz; ses() metodu "Hav!" döndürsün.`,`class Hayvan:
    def ses(self):
        return "..."

class Kopek(Hayvan):
    pass
`,`class Hayvan:
    def ses(self):
        return "..."

class Kopek(Hayvan):
    def ses(self):
        return "Hav!"`,[{d:`Kopek sesi`,append:`print(Kopek().ses())`,out:`Hav!`},{d:`Hayvan sesi değişmedi`,append:`print(Hayvan().ses())`,out:`...`}],[`Kopek sınıfının içinde ses(self) metodunu yeniden yaz.`],[`Kopek "Hav!" der`,`Hayvan "..." der`])],{quiz:U(`m12-quiz`,`Modül 12 mini sınavı`,[H(`q1`,`__init__ metodu ne zaman çalışır?`,[`Nesne oluşturulurken`,`Nesne silinirken`,`Program bitince`,`Hiçbir zaman`],0,`__init__ nesne oluşturulurken otomatik çalışır.`),H(`q2`,`Bu kod ne yazdırır?`,[`3`,`0`,`Hata`,`None`],0,`a.x özelliği __init__ içinde 3 olarak atanır.`,`class A:
    def __init__(self):
        self.x = 3
print(A().x)`),H(`q3`,`class B(A): ifadesi ne anlama gelir?`,[`B sınıfı A'dan miras alır`,`A sınıfı B'den miras alır`,`B, A'nın kopyasıdır`,`Hata verir`],0,`Parantez içindeki sınıf üst sınıftır; B onun özelliklerini devralır.`)]),practice:[B(`p-m12-rect`,`Dikdörtgen sınıfı`,`orta`,30,`Dikdortgen(en, boy) sınıfını yaz; alan() metodu en × boy değerini döndürsün.`,`class Dikdortgen:
    pass
`,`class Dikdortgen:
    def __init__(self, en, boy):
        self.en = en
        self.boy = boy

    def alan(self):
        return self.en * self.boy`,[{d:`4 x 5`,append:`print(Dikdortgen(4, 5).alan())`,out:`20`},{d:`3 x 3`,append:`print(Dikdortgen(3, 3).alan())`,out:`9`}],[`self.en ve self.boy'u __init__ içinde sakla.`],[`4 x 5 → 20`])]})]),Xc=G(13,`Dosya İşlemleri`,`Dosyaya yazmak ve dosyadan okumak.`,`m12-l3`,e=>[W(`m13`,1,e(1),`Dosya yazma ve okuma`,14,[`open() ve with ile dosya açmak`,`"w" ve "r" kiplerini ayırt etmek`],[L(`b1`,`Dosya açmak için open(dosya_adı, kip) kullanılır. "w" yazma kipidir (dosya varsa içeriği silinir), "r" okuma kipidir. with bloğu işin bitince dosyayı otomatik kapatır.`),R(`b2`,I`with open("not.txt", "w") as f:
    f.write("Merhaba dosya")

with open("not.txt", "r") as f:
    icerik = f.read()
print(icerik)`,`Önce "w" kipiyle dosyaya yazdık, sonra "r" kipiyle aynı dosyayı okuyup içeriği yazdırdık.`),z(`b3`,`warning`,`Bu platformda Python tarayıcıda çalışır. Dosyalar geçici bir sanal dosya sisteminde tutulur; gerçek bilgisayarındaki dosyalara erişilmez ve veriler kalıcı olmayabilir.`)],[B(`m13-l1-e1`,`Yaz ve oku`,`orta`,25,`"selam.txt" dosyasına "Merhaba dosya" yaz, sonra aynı dosyayı okuyup içeriğini ekrana yazdır.`,`# önce yaz, sonra oku
`,`with open("selam.txt", "w") as f:
    f.write("Merhaba dosya")
with open("selam.txt", "r") as f:
    print(f.read())`,[{d:`Dosyadan okunan içerik`,out:`Merhaba dosya`},{d:`open kullanılmış`,src:`open\\(`}],[`İki ayrı with bloğu kullan: biri "w", diğeri "r" kipiyle.`],[`Çıktı: Merhaba dosya`])],{practice:[V(`p-m13-mode`,`Yanlış dosya kipi`,`orta`,25,`Kod dosyaya yazmaya çalışırken hata veriyor. Düzelt; çıktı "tamam" olmalı.`,[{type:`UnsupportedOperation`,description:`Dosya okuma kipinde ("r") açılmış, yazılamaz`}],`with open("a.txt", "r") as f:
    f.write("x")
print("tamam")`,`with open("a.txt", "w") as f:
    f.write("x")
print("tamam")`,[{d:`Çıktı tamam`,out:`tamam`}],[`Yazmak için hangi kip gerekir?`])]}),W(`m13`,2,e(2),`Satır satır okuma ve ekleme`,14,[`Dosyayı satır satır dolaşmak`,`"a" kipiyle sona eklemek`],[L(`b1`,`Dosya nesnesi üzerinde for döngüsü kullanarak satırları tek tek okuyabilirsin. Her satırın sonunda yeni satır karakteri (\\n) bulunur; strip() onu temizler. "a" (append) kipi dosyanın içeriğini silmeden sona ekleme yapar.`),R(`b2`,I`with open("liste.txt", "w") as f:
    f.write("elma\narmut\n")
with open("liste.txt", "a") as f:
    f.write("muz\n")
with open("liste.txt", "r") as f:
    for satir in f:
        print(satir.strip())`,`"w" ile iki satır yazıldı, "a" ile üçüncü satır eklendi. Döngü her satırı okur; strip() sondaki \\n karakterini kaldırır.`)],[B(`m13-l2-e1`,`Numaralı liste`,`orta`,30,`"meyve.txt" dosyasına elma, armut ve muz kelimelerini ayrı satırlara yaz. Sonra dosyayı satır satır okuyup "1: elma" biçiminde numaralayarak yazdır.`,`# dosyaya üç satır yaz, sonra numaralayarak oku
`,`with open("meyve.txt", "w") as f:
    f.write("elma\\narmut\\nmuz\\n")
sira = 1
with open("meyve.txt", "r") as f:
    for satir in f:
        print(f"{sira}: {satir.strip()}")
        sira = sira + 1`,[{d:`Numaralı çıktı`,out:`1: elma
2: armut
3: muz`}],[`Yazarken her kelimenin sonuna \\n ekle.`,`sira adlı bir sayaç tut ve her satırda artır.`],[`Üç numaralı satır`])]),W(`m13`,3,e(3),`Olmayan dosya: FileNotFoundError`,12,[`Dosya bulunamadığında oluşan hatayı yakalamak`],[L(`b1`,`Olmayan bir dosyayı okumaya çalışırsan FileNotFoundError oluşur. Modül 10'da öğrendiğin try / except ile bunu güvenle yönetebilirsin.`),R(`b2`,I`try:
    with open("yok.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("Dosya bulunamadı")`,`Dosya yoksa open() hata verir ve except bloğu çalışır; program çökmez.`)],[B(`m13-l3-e1`,`Güvenli okuma`,`orta`,25,`"yok.txt" dosyasını okumayı dene. Dosya yoksa program çökmesin, "Dosya bulunamadı" yazdırsın.`,`with open("yok.txt", "r") as f:
    print(f.read())
`,`try:
    with open("yok.txt", "r") as f:
        print(f.read())
except FileNotFoundError:
    print("Dosya bulunamadı")`,[{d:`Hata yakalanıyor`,out:`Dosya bulunamadı`},{d:`try kullanılmış`,src:`\\btry\\b`}],[`Dosyayı açan satırları try bloğuna al.`],[`Dosya bulunamadı yazdırılır`])],{quiz:U(`m13-quiz`,`Modül 13 mini sınavı`,[H(`q1`,`Dosyayı silmeden sona eklemek için hangi kip kullanılır?`,[`"r"`,`"w"`,`"a"`,`"x"`],2,`"a" (append) kipi içeriği korur ve sona ekler. "w" içeriği siler.`),H(`q2`,`with open(...) as f: yapısının avantajı nedir?`,[`Dosyayı otomatik kapatır`,`Dosyayı şifreler`,`Daha hızlı yazar`,`Hata vermez`],0,`with bloğu bitince dosya otomatik kapatılır.`),H(`q3`,`Olmayan bir dosyayı okuyunca hangi hata oluşur?`,[`KeyError`,`FileNotFoundError`,`ValueError`,`IndexError`],1,`Bu durumda FileNotFoundError oluşur.`)]),practice:[B(`p-m13-count`,`Satır sayısı`,`orta`,30,`"veri.txt" dosyasına üç satır ("a", "b", "c") yaz; sonra dosyayı okuyup satır sayısını yazdır.`,`# dosyaya yaz, sonra satırları say
`,`with open("veri.txt", "w") as f:
    f.write("a\\nb\\nc\\n")
sayi = 0
with open("veri.txt", "r") as f:
    for satir in f:
        sayi = sayi + 1
print(sayi)`,[{d:`Çıktı 3`,out:`3`}],[`Her satırda bir sayacı artır.`],[`3 satır sayılır`])]})]),Zc=G(14,`Uygulamalı Projeler`,`Öğrendiklerini birleştiren üç mini proje.`,`m13-l3`,e=>[W(`m14`,1,e(1),`Proje 1: Not hesaplayıcı`,18,[`Girdi, hesaplama ve karar yapılarını birleştirmek`],[L(`b1`,`Bu projede üç sınav notu alıp ortalamasını hesaplayacak ve geçip geçmediğini söyleyeceksin. Kullanacakların: input(), int(), toplama/bölme, round(), if / else ve f-string.`),R(`b2`,I`n1 = int(input())
n2 = int(input())
n3 = int(input())
ort = round((n1 + n2 + n3) / 3, 1)
if ort >= 50:
    print(f"Ortalama: {ort} - Geçti")
else:
    print(f"Ortalama: {ort} - Kaldı")`,`Üç not alınır, ortalama bir ondalık basamağa yuvarlanır ve 50 eşiğine göre karar verilir.`,[`60`,`40`,`80`])],[B(`m14-l1-e1`,`Not hesaplayıcıyı yaz`,`orta`,40,`Üç notu (tam sayı, soru metni olmadan) input() ile al. Ortalamayı 1 ondalık basamağa yuvarla. Ortalama 50 veya üstündeyse "Ortalama: X - Geçti", değilse "Ortalama: X - Kaldı" yazdır.`,`n1 = int(input())
`,`n1 = int(input())
n2 = int(input())
n3 = int(input())
ort = round((n1 + n2 + n3) / 3, 1)
if ort >= 50:
    print(f"Ortalama: {ort} - Geçti")
else:
    print(f"Ortalama: {ort} - Kaldı")`,[{d:`60, 40, 80`,stdin:[`60`,`40`,`80`],out:`Ortalama: 60.0 - Geçti`},{d:`30, 40, 50`,stdin:[`30`,`40`,`50`],out:`Ortalama: 40.0 - Kaldı`},{d:`50, 50, 50 (sınır)`,stdin:[`50`,`50`,`50`],out:`Ortalama: 50.0 - Geçti`},{d:`70, 71, 70`,stdin:[`70`,`71`,`70`],out:`Ortalama: 70.3 - Geçti`}],[`Üç ayrı input() ve üç değişken kullan.`,`Karar için if ort >= 50:`],[`Dört senaryo doğru`])]),W(`m14`,2,e(2),`Proje 2: Sayı tahmin oyunu`,20,[`while döngüsü ve karar yapılarıyla bir oyun yazmak`],[L(`b1`,`Bilgisayar gizli bir sayı tutar (burada 7). Oyuncu doğru tahmin edene kadar tahmin girer. Her yanlış tahminde "Çok büyük" veya "Çok küçük" denir; doğru bilince kaç denemede bulduğu yazdırılır.`),R(`b2`,I`gizli = 7
deneme = 0
while True:
    tahmin = int(input())
    deneme = deneme + 1
    if tahmin == gizli:
        print(f"Bildin! {deneme} denemede")
        break
    elif tahmin > gizli:
        print("Çok büyük")
    else:
        print("Çok küçük")`,`while True sonsuz bir döngüdür; doğru tahminde break ile çıkılır. deneme sayacı her turda artar.`,[`3`,`9`,`7`]),z(`b3`,`tip`,`while True döngüsünde mutlaka bir break olmalı; yoksa program hiç bitmez.`)],[B(`m14-l2-e1`,`Tahmin oyununu yaz`,`zor`,50,`gizli = 7 olsun. Tahminleri input() ile (int olarak) oku. Küçükse "Çok küçük", büyükse "Çok büyük" yazdır. Doğru bilince "Bildin! N denemede" yazdırıp döngüden çık (N: deneme sayısı).`,`gizli = 7
deneme = 0
`,`gizli = 7
deneme = 0
while True:
    tahmin = int(input())
    deneme = deneme + 1
    if tahmin == gizli:
        print(f"Bildin! {deneme} denemede")
        break
    elif tahmin > gizli:
        print("Çok büyük")
    else:
        print("Çok küçük")`,[{d:`İlk denemede bil`,stdin:[`7`],out:`Bildin! 1 denemede`},{d:`Üç deneme`,stdin:[`3`,`9`,`7`],out:`Çok küçük
Çok büyük
Bildin! 3 denemede`},{d:`Döngü kullanılmış`,stdin:[`7`],src:`\\bwhile\\b`}],[`while True: ile başla, doğru tahminde break yaz.`,`deneme sayacını her turda artırmayı unutma.`],[`Üç senaryo doğru`,`while kullanılmış`])]),W(`m14`,3,e(3),`Proje 3: Alışveriş sepeti`,22,[`Sözlük, döngü ve hata yönetimini birleştirmek`],[L(`b1`,`Bir fiyat listesi (sözlük) var. Kullanıcı ürün adlarını tek tek girer ve "bitti" yazınca alışveriş sonlanır. Ürün listede varsa fiyat toplama eklenir; yoksa "Ürün yok" yazılır. Sonda toplam yazdırılır. Bir anahtarın sözlükte olup olmadığını "in" operatörüyle denetlersin: "elma" in fiyatlar sonucu True veya False verir.`),R(`b2`,I`fiyatlar = {"elma": 10, "ekmek": 8, "süt": 20}
toplam = 0
while True:
    urun = input()
    if urun == "bitti":
        break
    if urun in fiyatlar:
        toplam = toplam + fiyatlar[urun]
    else:
        print("Ürün yok")
print(f"Toplam: {toplam} TL")`,`"in" operatörü anahtarın sözlükte olup olmadığını denetler; böylece KeyError oluşmaz.`,[`elma`,`süt`,`bitti`])],[B(`m14-l3-e1`,`Sepeti yaz`,`zor`,60,`fiyatlar sözlüğü verildi. input() ile ürün adlarını oku. "bitti" yazılınca dur. Ürün sözlükte varsa fiyatı toplama ekle, yoksa "Ürün yok" yazdır. Sonda "Toplam: X TL" yazdır.`,`fiyatlar = {"elma": 10, "ekmek": 8, "süt": 20}
toplam = 0
`,`fiyatlar = {"elma": 10, "ekmek": 8, "süt": 20}
toplam = 0
while True:
    urun = input()
    if urun == "bitti":
        break
    if urun in fiyatlar:
        toplam = toplam + fiyatlar[urun]
    else:
        print("Ürün yok")
print(f"Toplam: {toplam} TL")`,[{d:`elma ve süt`,stdin:[`elma`,`süt`,`bitti`],out:`Toplam: 30 TL`},{d:`Olmayan ürün`,stdin:[`elma`,`muz`,`ekmek`,`bitti`],out:`Ürün yok
Toplam: 18 TL`},{d:`Boş sepet`,stdin:[`bitti`],out:`Toplam: 0 TL`}],[`urun in fiyatlar ile ürünün var olup olmadığına bak.`,`"bitti" için break kullan.`],[`Üç senaryo doğru`])],{quiz:U(`m14-quiz`,`Proje modülü mini sınavı`,[H(`q1`,`Sözlükte bir anahtarın olup olmadığını denetlemek için hangisi kullanılır?`,[`in`,`has`,`exists`,`==`],0,`"anahtar in sozluk" True veya False verir.`),H(`q2`,`while True: döngüsünden çıkmanın yolu nedir?`,[`break`,`stop`,`exit()`,`return`],0,`break döngüyü hemen bitirir.`),H(`q3`,`Bu kod ne yazdırır?`,[`2`,`3`,`5`,`8`],1,`range(1, 3) 1 ve 2 değerlerini üretir; toplam 1 + 2 = 3 olur.`,`toplam = 0
for i in range(1, 3):
    toplam = toplam + i
print(toplam)`)])})]),Qc=G(15,`Metinler I: İndeks ve Dilimleme`,`Metnin harflerine ulaşmak, parçalar almak ve metinde gezinmek.`,`m14-l3`,e=>[W(`m15`,1,e(1),`Metnin harflerine ulaşmak`,10,[`Metindeki harflere index ile erişmek`,`Negatif index ve len() kullanmak`],[L(`b1`,`Bir metin (string), sırayla dizilmiş harflerden oluşur. Tıpkı listelerde olduğu gibi her harfin bir sıra numarası (index) vardır ve sayma 0'dan başlar. Harfe köşeli parantezle ulaşılır.`),R(`b2`,I`kelime = "Python"
print(kelime[0])
print(kelime[3])
print(kelime[-1])
print(len(kelime))`,`kelime[0] ilk harf, kelime[3] dördüncü harftir. Negatif index sondan sayar: kelime[-1] son harftir. len() harf sayısını verir.`),z(`b3`,`warning`,`Metinler değiştirilemez: kelime[0] = "J" yazarsan TypeError alırsın. Yeni bir metin oluşturman gerekir. Olmayan bir index için de IndexError alırsın.`)],[B(`m15-l1-e1`,`İlk ve son harf`,`kolay`,15,`kelime değişkenindeki metnin ilk harfini ve son harfini alt alta yazdır.`,`kelime = "Merhaba"
`,`kelime = "Merhaba"
print(kelime[0])
print(kelime[-1])`,[{d:`M ve a`,out:`M
a`},{d:`index kullanılmış`,src:`\\[0\\][\\s\\S]*\\[-1\\]`}],[`İlk harf için kelime[0], son harf için kelime[-1] yaz.`],[`İlk harf: M`,`Son harf: a`])]),W(`m15`,2,e(2),`Dilimleme (slicing)`,12,[`[başla:bitir] ile metinden parça almak`,`Adım (step) kullanmak`],[L(`b1`,`Dilimleme (slicing), metinden bir parça almaktır: metin[başla:bitir]. Başlangıç dahildir, bitiş dahil değildir. Başlangıcı boş bırakırsan baştan, bitişi boş bırakırsan sona kadar alır.`),R(`b2`,I`kelime = "Programlama"
print(kelime[0:4])
print(kelime[:7])
print(kelime[7:])
print(kelime[-4:])`,`kelime[0:4] 0, 1, 2, 3 numaralı harfleri alır: "Prog". kelime[:7] baştan 7. harfe kadar, kelime[7:] 7. harften sona kadardır. kelime[-4:] son dört harfi verir.`),L(`b3`,`Üçüncü bir sayı adım (step) belirler: metin[başla:bitir:adım]. Adımı -1 yaparsan metni tersten okursun.`),R(`b4`,I`kelime = "Python"
print(kelime[::2])
print(kelime[::-1])`,`kelime[::2] bir harf atlayarak alır: "Pto". kelime[::-1] metni tersine çevirir: "nohtyP".`)],[B(`m15-l2-e1`,`Dilim al`,`orta`,25,`metin değişkeninden ilk 7 harfi ("Merhaba") ve son 5 harfi ("dünya") dilimleme ile alıp alt alta yazdır.`,`metin = "Merhaba dünya"
`,`metin = "Merhaba dünya"
print(metin[:7])
print(metin[-5:])`,[{d:`İki dilim`,out:`Merhaba
dünya`},{d:`Dilimleme kullanılmış`,src:`\\[[^\\]]*:[^\\]]*\\]`}],[`İlk 7 harf için metin[:7]; son 5 harf için metin[-5:].`],[`Merhaba`,`dünya`])]),W(`m15`,3,e(3),`Metinde gezinmek ve metin işlemleri`,12,[`for ile harfleri dolaşmak`,`in operatörü ile arama yapmak`,`Metinleri + ve * ile birleştirmek`],[L(`b1`,`for döngüsü bir metnin harflerini sırayla dolaşır. in operatörü bir parçanın metinde olup olmadığını True/False olarak söyler. + metinleri birleştirir, * ise bir metni tekrarlar.`),R(`b2`,I`for harf in "abc":
    print(harf)
print("ka" in "kalem")
print("z" in "kalem")
print("Py" + "thon")
print("ha" * 3)`,`Döngü her harfi sırayla harf değişkenine atar. "ka" metinde olduğu için True, "z" olmadığı için False yazılır. "ha" * 3 sonucu "hahaha"dır.`),z(`b3`,`tip`,`Büyük/küçük harf farklıdır: "A" in "kalem" sonucu False olur. Metin ile sayıyı + ile toplayamazsın; önce str() ile çevir.`)],[B(`m15-l3-e1`,`Harfleri say`,`orta`,25,`kelime içinde kaç tane "a" harfi olduğunu bir döngüyle say ve sonucu yazdır.`,`kelime = "kalabalik"
sayac = 0
`,`kelime = "kalabalik"
sayac = 0
for harf in kelime:
    if harf == "a":
        sayac = sayac + 1
print(sayac)`,[{d:`3 tane a`,out:`3`},{d:`Döngü kullanılmış`,src:`for\\s+\\w+\\s+in`}],[`for harf in kelime: ile her harfi dolaş.`,`harf == "a" ise sayac değişkenini bir artır.`],[`Çıktı: 3`,`for döngüsü kullanılmış`])],{quiz:U(`m15-quiz`,`Modül 15 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`thon`,`Pyth`,`ytho`,`Hata`],0,`kelime[2:] 2. indexten sona kadar olan harfleri verir: "thon".`,`kelime = "Python"
print(kelime[2:])`),H(`q2`,`Bu kod ne yazdırır?`,[`olleH`,`Hello`,`Hlo`,`Hata`],0,`[::-1] metni tersine çevirir.`,`print("Hello"[::-1])`),H(`q3`,`kelime = "Python" iken kelime[0] = "J" satırı ne yapar?`,[`TypeError verir (metinler değiştirilemez)`,`Metni Jython yapar`,`Hiçbir şey yapmaz`,`IndexError verir`],0,`Metinler değiştirilemez (immutable); harfi değiştirmeye çalışmak TypeError verir.`),H(`q4`,`"ha" * 3 işleminin sonucu nedir?`,[`hahaha`,`ha3`,`hhhaaa`,`Hata`],0,`Metni sayıyla çarpmak onu o kadar tekrarlar.`)]),practice:[V(`p-m15-index`,`Son harfi bul`,`kolay`,20,`Kod "Python" metninin son harfini ("n") yazdırmalı ama IndexError veriyor. Düzelt.`,[{type:`IndexError`,description:`6 harfli metinde 6 numaralı index yoktur`}],`kelime = "Python"
print(kelime[6])`,`kelime = "Python"
print(kelime[5])`,[{d:`Çıktı n`,out:`n`}],[`Index 0'dan başlar; son harfin index'i kaç? Ya da negatif index dene.`]),B(`p-m15-reverse`,`Kelimeyi ters çevir`,`kolay`,20,`kelime değişkenindeki metni tersine çevirip yazdır (dilimleme ile).`,`kelime = "araba"
`,`kelime = "araba"
print(kelime[::-1])`,[{d:`Ters kelime`,out:`abara`},{d:`Dilimleme kullanılmış`,src:`\\[::-1\\]`}],[`Adımı -1 yapmak metni tersten okur.`],[`Çıktı: abara`])]})]),$c=G(16,`Metin Metotları`,`Metinleri temizlemek, bölmek, birleştirmek ve biçimlendirmek.`,`m15-l3`,e=>[W(`m16`,1,e(1),`Büyük/küçük harf ve temizlik`,10,[`upper(), lower(), title() kullanmak`,`strip() ile baştaki ve sondaki boşlukları silmek`],[L(`b1`,`Metinlerin hazır işlevleri vardır; bunlara metot (method) denir ve metin.metot() biçiminde çağrılır. upper() hepsini büyütür, lower() küçültür, title() her kelimenin ilk harfini büyütür. strip() baştaki ve sondaki boşlukları siler.`),R(`b2`,I`ad = "  python ogren  "
print(ad.upper())
print(ad.strip())
print(ad.strip().title())`,`upper() harfleri büyütür, boşluklar kalır. strip() baştaki ve sondaki boşlukları siler. title() her kelimenin baş harfini büyük yapar.`),z(`b3`,`warning`,`Metotlar metni değiştirmez, yeni bir metin döndürür. Sonucu kullanmak için bir değişkene ata ya da yazdır: ad = ad.strip().`)],[B(`m16-l1-e1`,`Adı düzenle`,`kolay`,15,`ad değişkenindeki metnin baştaki ve sondaki boşluklarını sil, her kelimenin ilk harfini büyüt ve yazdır.`,`ad = "  mehmet  "
`,`ad = "  mehmet  "
print(ad.strip().title())`,[{d:`Mehmet`,out:`Mehmet`},{d:`strip kullanılmış`,src:`strip\\(`}],[`ad.strip() boşlukları siler, sonuna .title() ekleyebilirsin.`],[`Çıktı: Mehmet`])]),W(`m16`,2,e(2),`split, join ve replace`,12,[`split() ile metni parçalara ayırmak`,`join() ile parçaları birleştirmek`,`replace() ile değiştirmek`],[L(`b1`,`split() metni belirlediğin ayırıcıdan bölüp bir liste yapar; ayırıcı vermezsen boşluklardan böler. join() tersini yapar: listedeki parçaları aralarına bir metin koyarak birleştirir. replace() bir parçayı başka bir parçayla değiştirir.`),R(`b2`,I`meyveler = "elma,armut,muz".split(",")
print(meyveler)
print(" - ".join(meyveler))
cumle = "bir iki üç"
print(cumle.split())
print(cumle.replace(" ", "_"))`,`split(",") virgülden böler ve bir liste verir. " - ".join(...) listeyi tireyle birleştirir. split() boşluktan böler; replace(" ", "_") boşlukları alt çizgiyle değiştirir.`),z(`b3`,`tip`,`join() ayırıcı metnin üzerinde çağrılır: "-".join(liste). Listenin elemanları metin olmalıdır.`)],[B(`m16-l2-e1`,`Kelime say ve birleştir`,`orta`,25,`cumle içindeki kelimelerin sayısını (split ile) yazdır; sonra boşlukları tire (-) ile değiştirilmiş hâlini yazdır.`,`cumle = "bir iki üç dört"
`,`cumle = "bir iki üç dört"
print(len(cumle.split()))
print(cumle.replace(" ", "-"))`,[{d:`4 kelime ve tireli hâl`,out:`4
bir-iki-üç-dört`},{d:`split kullanılmış`,src:`split\\(`}],[`len(cumle.split()) kelime sayısını verir.`,`cumle.replace(" ", "-") boşlukları tireye çevirir.`],[`Kelime sayısı: 4`,`Tireli cümle`])]),W(`m16`,3,e(3),`Arama, kontrol ve biçimlendirme`,14,[`find(), count(), startswith(), endswith() kullanmak`,`f-string ile sayıları biçimlendirmek`],[L(`b1`,`count() bir parçanın kaç kez geçtiğini sayar. find() parçanın ilk bulunduğu index'i verir; bulamazsa -1 döner. startswith() ve endswith() metnin başını ve sonunu denetler; sonuçları True/False'tur.`),R(`b2`,I`dosya = "rapor.pdf"
print(dosya.endswith(".pdf"))
print(dosya.find("p"))
print(dosya.count("r"))
print("123".isdigit())`,`endswith(".pdf") True verir. find("p") ilk "p" harfinin index'ini (2) verir. count("r") "r" harfini sayar (2). isdigit() metnin yalnızca rakamlardan oluşup oluşmadığını söyler.`),L(`b3`,`f-string içinde süslü parantezin içine iki nokta ve bir biçim yazarak sayıları düzenleyebilirsin. {x:.2f} sayıyı virgülden sonra 2 basamakla gösterir.`),R(`b4`,I`fiyat = 12.5
print(f"Fiyat: {fiyat:.2f} TL")
print(f"%{0.256 * 100:.1f}")`,`{fiyat:.2f} 12.5 değerini "12.50" olarak yazar. İkinci satırda 25.6 sayısı bir basamakla gösterilir.`)],[B(`m16-l3-e1`,`Dosya adı kontrolü`,`orta`,25,`dosya adının ".pdf" ile bitip bitmediğini, büyük harfli hâlini ve içinde kaç tane "r" harfi olduğunu alt alta yazdır.`,`dosya = "rapor.pdf"
`,`dosya = "rapor.pdf"
print(dosya.endswith(".pdf"))
print(dosya.upper())
print(dosya.count("r"))`,[{d:`Üç satır`,out:`True
RAPOR.PDF
2`},{d:`Metotlar kullanılmış`,src:`endswith\\([\\s\\S]*upper\\([\\s\\S]*count\\(`}],[`endswith, upper ve count metotlarını sırayla kullan.`],[`True`,`RAPOR.PDF`,`2`])],{quiz:U(`m16-quiz`,`Modül 16 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`['a', 'b', 'c']`,`a-b-c`,`abc`,`Hata`],0,`split(",") metni virgülden bölüp liste yapar.`,`print("a,b,c".split(","))`),H(`q2`,`Bu kod ne yazdırır?`,[`a-b-c`,`['a', 'b', 'c']`,`abc`,`a b c`],0,`join() liste elemanlarını aradaki metinle birleştirir.`,`print("-".join(["a", "b", "c"]))`),H(`q3`,`ad = "ali" iken ad.upper() yazıldıktan sonra ad değişkeninin değeri ne olur?`,[`"ali" (metotlar metni değiştirmez)`,`"ALI"`,`"Ali"`,`Hata verir`],0,`Metotlar yeni metin döndürür; ad değişkeni, sonucu ona atamazsan değişmez.`),H(`q4`,`f"{3.14159:.2f}" ifadesi ne üretir?`,[`3.14`,`3.1`,`3.14159`,`3.00`],0,`.2f sayıyı virgülden sonra 2 basamağa yuvarlayarak gösterir.`)]),practice:[V(`p-m16-strip`,`Boşluk metotla silinmedi`,`kolay`,20,`Program "ayse" yazdırmalı ama boşluklu yazdırıyor. Metot sonucunun kullanılmadığını bul ve düzelt.`,[{type:`Mantık hatası`,description:`strip() sonucu hiçbir yere atanmamış; ad değişmeden kalıyor`}],`ad = "  ayse  "
ad.strip()
print("[" + ad + "]")`,`ad = "  ayse  "
ad = ad.strip()
print("[" + ad + "]")`,[{d:`Boşluksuz çıktı`,out:`[ayse]`}],[`Metotlar metni değiştirmez; sonucu değişkene ata.`]),B(`p-m16-title`,`Cümleyi başlık yap`,`kolay`,20,`baslik değişkenindeki cümlenin her kelimesinin ilk harfini büyütüp yazdır.`,`baslik = "python ile programlama"
`,`baslik = "python ile programlama"
print(baslik.title())`,[{d:`Başlık biçimi`,out:`Python Ile Programlama`},{d:`title kullanılmış`,src:`title\\(`}],[`title() metodunu dene.`],[`Çıktı: Python Ile Programlama`])]})]),el=G(17,`Listeler II`,`Listeleri dilimlemek, değiştirmek, sıralamak ve iç içe kullanmak.`,`m16-l3`,e=>[W(`m17`,1,e(1),`Dilimleme, ekleme ve silme`,12,[`Listeden dilim almak`,`insert(), remove() ve pop() kullanmak`],[L(`b1`,`Listelerde de metinlerdeki gibi dilimleme çalışır: liste[başla:bitir]. Metinlerden farklı olarak listenin elemanını index ile değiştirebilirsin. insert(index, değer) araya ekler, remove(değer) ilk bulduğu değeri siler, pop() son elemanı (ya da verdiğin index'tekini) çıkarıp geri verir.`),R(`b2`,I`sayilar = [10, 20, 30, 40, 50]
print(sayilar[1:4])
sayilar[0] = 5
sayilar.insert(1, 15)
sayilar.remove(30)
son = sayilar.pop()
print(sayilar)
print(son)`,`sayilar[1:4] 20, 30, 40 verir. İlk eleman 5 yapıldı; 1. index'e 15 eklendi; 30 silindi; pop() son elemanı (50) çıkarıp son değişkenine verdi. Kalan liste [5, 15, 20, 40]'tır.`),z(`b3`,`warning`,`remove() listede olmayan bir değeri silmeye çalışırsan ValueError verir. pop() boş listede IndexError verir.`)],[B(`m17-l1-e1`,`Listeyi düzenle`,`kolay`,20,`liste içindeki son elemanı pop() ile çıkar, sonra listenin başına (0. index) 0 ekle ve listeyi yazdır.`,`liste = [1, 2, 3, 4, 5]
`,`liste = [1, 2, 3, 4, 5]
liste.pop()
liste.insert(0, 0)
print(liste)`,[{d:`Düzenlenmiş liste`,out:`[0, 1, 2, 3, 4]`},{d:`pop ve insert kullanılmış`,src:`pop\\([\\s\\S]*insert\\(`}],[`liste.pop() son elemanı çıkarır.`,`liste.insert(0, 0) başa 0 ekler.`],[`[0, 1, 2, 3, 4]`])]),W(`m17`,2,e(2),`Sıralama ve arama`,12,[`sort() ve sorted() farkını bilmek`,`in, index() ve count() kullanmak`],[L(`b1`,`sort() listeyi yerinde sıralar ve None döndürür. sorted() ise orijinali bozmadan sıralı yeni bir liste verir. İkisinde de reverse=True büyükten küçüğe sıralar. in bir değerin listede olup olmadığını, index() konumunu, count() kaç kez geçtiğini söyler.`),R(`b2`,I`sayilar = [5, 2, 8, 2]
print(sorted(sayilar))
sayilar.sort(reverse=True)
print(sayilar)
print(2 in sayilar)
print(sayilar.index(8))
print(sayilar.count(2))`,`sorted() yeni sıralı liste verir. sort(reverse=True) listeyi yerinde büyükten küçüğe sıralar: [8, 5, 2, 2]. 8 listenin 0. index'indedir ve 2 iki kez geçer.`),z(`b3`,`tip`,`sayilar = sayilar.sort() yazma: sort() None döndürür ve listen kaybolur. Sadece sayilar.sort() yaz ya da sorted() kullan.`)],[B(`m17-l2-e1`,`En yüksek üç puan`,`orta`,25,`puanlar listesindeki en yüksek üç puanı büyükten küçüğe sıralı bir liste olarak yazdır (sorted ve dilimleme ile).`,`puanlar = [70, 45, 90, 60]
`,`puanlar = [70, 45, 90, 60]
print(sorted(puanlar, reverse=True)[:3])`,[{d:`İlk üç puan`,out:`[90, 70, 60]`},{d:`sorted kullanılmış`,src:`sorted\\(`}],[`sorted(puanlar, reverse=True) büyükten küçüğe sıralı liste verir.`,`Sonuna [:3] ekleyerek ilk üçünü al.`],[`[90, 70, 60]`])]),W(`m17`,3,e(3),`İç içe listeler ve kopyalama`,14,[`Liste içinde liste (tablo) kullanmak`,`Kopya ile aynı listeyi ayırt etmek`],[L(`b1`,`Bir listenin elemanları da liste olabilir; böylece satır ve sütunlu bir tablo (matris) yapabilirsin. Önce satıra, sonra sütuna index verirsin: tablo[satır][sütun].`),R(`b2`,I`tablo = [[1, 2, 3], [4, 5, 6]]
print(tablo[1][2])
for satir in tablo:
    print(satir)
toplam = 0
for satir in tablo:
    for sayi in satir:
        toplam = toplam + sayi
print(toplam)`,`tablo[1][2] ikinci satırın üçüncü elemanıdır: 6. İç içe döngü her satırı ve satırdaki her sayıyı dolaşır; toplam 21 olur.`),L(`b3`,`Dikkat: b = a yazmak listeyi kopyalamaz; iki isim de aynı listeyi gösterir. Gerçek bir kopya için a.copy() kullan.`),R(`b4`,I`a = [1, 2]
b = a
b.append(3)
print(a)
c = a.copy()
c.append(4)
print(a)
print(c)`,`b ve a aynı listedir, bu yüzden b.append(3) a'yı da değiştirir: [1, 2, 3]. c ise bağımsız bir kopyadır; c'ye eklenen 4 a'yı etkilemez.`)],[B(`m17-l3-e1`,`Tablodaki sayıların toplamı`,`orta`,30,`Aşağıdaki iç içe listedeki tüm sayıların toplamını iç içe iki döngüyle bul ve yazdır.`,`tablo = [[1, 2], [3, 4], [5, 6]]
toplam = 0
`,`tablo = [[1, 2], [3, 4], [5, 6]]
toplam = 0
for satir in tablo:
    for sayi in satir:
        toplam = toplam + sayi
print(toplam)`,[{d:`Toplam 21`,out:`21`},{d:`İç içe döngü`,src:`for[\\s\\S]*for`}],[`Önce her satırı dolaş, sonra satırdaki her sayıyı toplama ekle.`],[`Çıktı: 21`])],{quiz:U(`m17-quiz`,`Modül 17 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`[2, 3]`,`[1, 2]`,`[2, 3, 4]`,`[1, 2, 3]`],0,`liste[1:3] 1. ve 2. index'teki elemanları verir.`,`liste = [1, 2, 3, 4]
print(liste[1:3])`),H(`q2`,`x = [3, 1, 2] iken "x = x.sort()" yazılırsa x ne olur?`,[`None`,`[1, 2, 3]`,`[3, 2, 1]`,`Hata verir`],0,`sort() listeyi yerinde sıralar ve None döndürür; atama listeyi None ile değiştirir.`),H(`q3`,`a = [1]; b = a; b.append(2); print(a) ne yazdırır?`,[`[1, 2]`,`[1]`,`[2]`,`Hata`],0,`b = a kopya oluşturmaz; ikisi de aynı listeyi gösterir.`),H(`q4`,`tablo = [[1, 2], [3, 4]] iken tablo[1][0] kaçtır?`,[`3`,`2`,`1`,`4`],0,`tablo[1] ikinci satırdır ([3, 4]); onun 0. elemanı 3'tür.`)]),practice:[V(`p-m17-copy`,`Kopya değil, aynı liste`,`orta`,30,`Kod orijinal listeyi bozmadan kopyayı değiştirmeli: a hâlâ [1, 2] kalmalı. Hatayı bul ve düzelt.`,[{type:`Mantık hatası`,description:`b = a kopya oluşturmaz; iki isim aynı listeyi gösterir`}],`a = [1, 2]
b = a
b.append(3)
print(a)`,`a = [1, 2]
b = a.copy()
b.append(3)
print(a)`,[{d:`a değişmedi`,out:`[1, 2]`}],[`Gerçek kopya için copy() metodunu kullan.`]),B(`p-m17-remove`,`Tekrar eden değeri sil`,`orta`,25,`sayilar listesinden 3 değerini bir kez sil ve listeyi yazdır.`,`sayilar = [1, 3, 5, 3]
`,`sayilar = [1, 3, 5, 3]
sayilar.remove(3)
print(sayilar)`,[{d:`İlk 3 silindi`,out:`[1, 5, 3]`},{d:`remove kullanılmış`,src:`remove\\(`}],[`remove() ilk bulduğu değeri siler.`],[`[1, 5, 3]`])]})]),tl=G(18,`Demetler ve Kümeler`,`Değişmeyen demetler (tuple) ve tekrarsız kümelerle (set) çalışmak.`,`m17-l3`,e=>[W(`m18`,1,e(1),`Demetler (tuple)`,10,[`Demet oluşturmak`,`Demeti açmak (unpacking)`,`Değerleri takas etmek`],[L(`b1`,`Demet (tuple), listeye benzer ama değiştirilemez bir koleksiyondur. Normal parantezle yazılır: (3, 4). Elemanlara index ile erişirsin ama eleman ekleyemez, silemez ya da değiştiremezsin. Konum, tarih gibi sabit verileri tutmak için uygundur.`),R(`b2`,I`nokta = (3, 4)
print(nokta[0])
x, y = nokta
print(x, y)
a, b = 1, 2
a, b = b, a
print(a, b)`,`nokta[0] ilk elemandır. x, y = nokta demeti iki değişkene açar. Aynı yolla a, b = b, a iki değişkenin değerini takas eder: a 2, b 1 olur.`),z(`b3`,`warning`,`Demet değişmez: nokta[0] = 9 yazarsan TypeError alırsın. Tek elemanlı demet için virgül gerekir: (5,).`)],[B(`m18-l1-e1`,`Koordinatı aç`,`kolay`,15,`nokta demetini x ve y değişkenlerine aç, sonra "x=3 y=4" biçiminde yazdır (f-string ile).`,`nokta = (3, 4)
`,`nokta = (3, 4)
x, y = nokta
print(f"x={x} y={y}")`,[{d:`x=3 y=4`,out:`x=3 y=4`},{d:`Demet açılmış`,src:`\\w+\\s*,\\s*\\w+\\s*=\\s*nokta`}],[`x, y = nokta yazarak demeti aç.`],[`Çıktı: x=3 y=4`])]),W(`m18`,2,e(2),`Kümeler (set)`,12,[`Küme oluşturmak`,`Tekrarlanan değerleri silmek`,`add(), remove() ve in kullanmak`],[L(`b1`,`Küme (set), tekrarsız değerler tutan bir koleksiyondur. Süslü parantezle yazılır: {1, 2, 3}. Aynı değeri iki kez yazsan da bir kez tutulur. Kümelerin sırası yoktur, bu yüzden index ile erişilmez. Listedeki tekrarları silmenin en kolay yolu onu kümeye çevirmektir.`),R(`b2`,I`renkler = {"kırmızı", "mavi", "kırmızı"}
print(len(renkler))
renkler.add("yeşil")
print("mavi" in renkler)
print(sorted(set([1, 2, 2, 3, 3, 3])))`,`Küme tekrarları atar: "kırmızı" bir kez sayıldığı için uzunluk 2'dir. add() eleman ekler. in aramayı çok hızlı yapar. set(liste) tekrarları siler; sorted() sıralı bir liste verir: [1, 2, 3].`),z(`b3`,`tip`,`Boş küme { } değil set() ile yazılır; { } boş bir sözlüktür. Kümeyi yazdırınca sıra değişebilir; düzenli çıktı için sorted() kullan.`)],[B(`m18-l2-e1`,`Benzersiz sayılar`,`orta`,25,`sayilar listesindeki benzersiz sayıların adedini, sonra bu sayıları küçükten büyüğe sıralı bir liste olarak alt alta yazdır (set ve sorted ile).`,`sayilar = [4, 2, 4, 7, 2, 9]
`,`sayilar = [4, 2, 4, 7, 2, 9]
benzersiz = set(sayilar)
print(len(benzersiz))
print(sorted(benzersiz))`,[{d:`4 ve sıralı liste`,out:`4
[2, 4, 7, 9]`},{d:`set kullanılmış`,src:`set\\(`}],[`set(sayilar) tekrarları siler.`,`sorted(...) sıralı liste verir.`],[`Adet: 4`,`Liste: [2, 4, 7, 9]`])]),W(`m18`,3,e(3),`Küme işlemleri`,12,[`Kesişim, birleşim ve fark almak`],[L(`b1`,`Kümelerle matematikteki küme işlemleri yapılır: & kesişim (ortak elemanlar), | birleşim (hepsi), - fark (birinde olup diğerinde olmayanlar). Aynı işlemler intersection(), union() ve difference() metotlarıyla da yapılır.`),R(`b2`,I`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a & b))
print(sorted(a | b))
print(sorted(a - b))`,`Ortak elemanlar [3, 4]. Birleşim [1, 2, 3, 4, 5]. a - b yalnızca a'da olanları verir: [1, 2].`),z(`b3`,`tip`,`Kümeler "kimler hem A hem B'de?" gibi soruları tek satırda cevaplar. Listelerle bunu döngü ile yapardın.`)],[B(`m18-l3-e1`,`Ortak öğrenciler`,`orta`,25,`a ve b kümelerindeki ortak öğrencileri (kesişim) sıralı bir liste olarak yazdır.`,`a = {"Ada", "Can", "Ece"}
b = {"Can", "Ece", "Eda"}
`,`a = {"Ada", "Can", "Ece"}
b = {"Can", "Ece", "Eda"}
print(sorted(a & b))`,[{d:`Ortaklar`,out:`['Can', 'Ece']`},{d:`Kesişim kullanılmış`,src:`&|intersection`}],[`a & b iki kümenin ortak elemanlarını verir.`],[`['Can', 'Ece']`])],{quiz:U(`m18-quiz`,`Modül 18 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`3`,`5`,`2`,`4`],0,`Küme tekrarları atar: {1, 2, 3}.`,`print(len({1, 2, 2, 3, 3}))`),H(`q2`,`Demet için hangisi doğrudur?`,[`Oluşturulduktan sonra elemanları değiştirilemez`,`Elemanları append() ile eklenebilir`,`Süslü parantezle yazılır`,`Tekrarlı elemanları otomatik siler`],0,`Demet (tuple) değişmezdir.`),H(`q3`,`a, b = 1, 2 sonra a, b = b, a yapılırsa a kaç olur?`,[`2`,`1`,`3`,`Hata verir`],0,`a, b = b, a iki değeri takas eder: a 2, b 1 olur.`),H(`q4`,`Bu kod ne yazdırır?`,[`[1, 2]`,`[3, 4]`,`[1, 2, 3, 4, 5]`,`[]`],0,`a - b yalnızca a'da bulunan elemanları verir.`,`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a - b))`)]),practice:[V(`p-m18-tuple`,`Demet değiştirilemez`,`kolay`,20,`Kod konumun x değerini 10 yapıp yazdırmalı ama TypeError veriyor. Demetin değişmez olduğunu hatırlayıp düzelt (yeni bir demet oluştur).`,[{type:`TypeError`,description:`Demetin elemanı yerinde değiştirilemez`}],`konum = (3, 4)
konum[0] = 10
print(konum)`,`konum = (3, 4)
konum = (10, konum[1])
print(konum)`,[{d:`Yeni demet`,out:`(10, 4)`}],[`Demeti değiştiremezsin; yeni bir demet kurup değişkene ata.`]),B(`p-m18-dedupe`,`Tekrarları temizle`,`kolay`,20,`isimler listesindeki tekrarları silip kalan isimleri alfabetik sıralı bir liste olarak yazdır.`,`isimler = ["Can", "Ada", "Can", "Ece", "Ada"]
`,`isimler = ["Can", "Ada", "Can", "Ece", "Ada"]
print(sorted(set(isimler)))`,[{d:`Benzersiz ve sıralı`,out:`['Ada', 'Can', 'Ece']`},{d:`set kullanılmış`,src:`set\\(`}],[`set() tekrarları siler, sorted() sıralar.`],[`['Ada', 'Can', 'Ece']`])]})]),nl=G(19,`Sözlükler II`,`get(), sayma kalıbı ve iç içe sözlüklerle gerçek veriyi modellemek.`,`m18-l3`,e=>[W(`m19`,1,e(1),`get(), in ve silme`,12,[`Güvenli okumak için get() kullanmak`,`in ile anahtar aramak`,`del ve pop() ile silmek`],[L(`b1`,`Olmayan bir anahtarı sözlükten okursan KeyError alırsın. get(anahtar, varsayılan) bu hatayı önler: anahtar yoksa verdiğin varsayılan değeri döndürür. in operatörü anahtarın sözlükte olup olmadığını söyler. keys() anahtarları, values() değerleri verir. del ve pop() bir elemanı siler.`),R(`b2`,I`stok = {"elma": 5, "armut": 2}
print(stok.get("elma", 0))
print(stok.get("muz", 0))
print("armut" in stok)
stok["armut"] = stok["armut"] + 3
del stok["elma"]
print(stok)
print(list(stok.keys()))
print(list(stok.values()))`,`get("muz", 0) muz olmadığı için 0 verir ve hata çıkmaz. in anahtarı arar. Armut 5'e çıktı, elma silindi: {'armut': 5}. keys() ve values() anahtarları ve değerleri liste olarak verir.`),z(`b3`,`tip`,`in sözlüklerde değerleri değil anahtarları arar: "armut" in stok True, 5 in stok ise False'tur.`)],[B(`m19-l1-e1`,`Stok güncelle`,`kolay`,20,`stok sözlüğünde "muz" anahtarı yoksa get() ile 0 değerini yazdır. Sonra "armut" stokuna 3 ekle ve yeni değerini yazdır.`,`stok = {"elma": 5, "armut": 2}
`,`stok = {"elma": 5, "armut": 2}
print(stok.get("muz", 0))
stok["armut"] = stok["armut"] + 3
print(stok["armut"])`,[{d:`0 ve 5`,out:`0
5`},{d:`get kullanılmış`,src:`get\\(`}],[`stok.get("muz", 0) olmayan anahtar için 0 verir.`,`stok["armut"] = stok["armut"] + 3`],[`İlk satır: 0`,`İkinci satır: 5`])]),W(`m19`,2,e(2),`Sayma kalıbı`,14,[`Sözlükle sayaç tutmak`,`Metindeki harfleri ve kelimeleri saymak`],[L(`b1`,`Sözlüklerin en sık kullanımlarından biri saymaktır: anahtar sayılan şey, değer ise kaç kez geçtiğidir. Her turda sayaç[anahtar] = sayaç.get(anahtar, 0) + 1 yazarsın; get() ilk karşılaşmada 0 ile başlatır.`),R(`b2`,I`sayac = {}
for harf in "elma":
    sayac[harf] = sayac.get(harf, 0) + 1
print(sayac)
kelimeler = "bir iki bir bir".split()
sayim = {}
for k in kelimeler:
    sayim[k] = sayim.get(k, 0) + 1
print(sayim)`,`Önce boş bir sözlük açılır. Her harf için sayaç 1 artar. Kelimeler için de aynı kalıp kullanılır: "bir" üç kez, "iki" bir kez geçer.`),z(`b3`,`tip`,`Sözlükler ekleme sırasını korur; bu yüzden çıktı elemanların ilk görüldüğü sırayla gelir.`)],[B(`m19-l2-e1`,`Kelimeleri say`,`orta`,30,`cumle içindeki her kelimenin kaç kez geçtiğini bir sözlükte say ve sözlüğü yazdır (get() ile).`,`cumle = "a b a c b a"
sayac = {}
`,`cumle = "a b a c b a"
sayac = {}
for k in cumle.split():
    sayac[k] = sayac.get(k, 0) + 1
print(sayac)`,[{d:`Sayım`,out:`{'a': 3, 'b': 2, 'c': 1}`},{d:`get kullanılmış`,src:`get\\(`}],[`cumle.split() kelimelerin listesidir.`,`sayac[k] = sayac.get(k, 0) + 1`],[`{'a': 3, 'b': 2, 'c': 1}`])]),W(`m19`,3,e(3),`İç içe sözlükler ve sözlük listeleri`,14,[`Sözlüğün içinde sözlük/liste kullanmak`,`Sözlük listesinde dolaşmak`],[L(`b1`,`Sözlüğün değeri başka bir sözlük ya da liste olabilir. Böylece gerçek dünyadaki veriyi modelleyebilirsin: önce anahtarla iç veriye, sonra onun anahtarı veya index'iyle asıl değere ulaşırsın. Bir sözlük listesi ise tablodaki satırlara benzer: her satır bir sözlüktür.`),R(`b2`,I`ogrenciler = {
    "Ada": {"yas": 20, "notlar": [80, 90]},
    "Can": {"yas": 21, "notlar": [70, 60]},
}
print(ogrenciler["Ada"]["notlar"][1])
liste = [{"ad": "Ece", "not": 80}, {"ad": "Eda", "not": 60}]
for kayit in liste:
    print(kayit["ad"], kayit["not"])`,`ogrenciler["Ada"] iç sözlüğü, ["notlar"] listeyi, [1] ise ikinci notu (90) verir. Sözlük listesinde döngü her kaydı (sözlüğü) sırayla verir.`),z(`b3`,`tip`,`Çok katmanlı veride adım adım ilerle: önce ogrenciler["Ada"] yazıp bak, sonra sonuna ["notlar"] ekle.`)],[B(`m19-l3-e1`,`Not ortalaması`,`orta`,30,`ogrenciler listesindeki öğrencilerin "not" değerlerinin ortalamasını hesaplayıp yazdır.`,`ogrenciler = [{"ad": "Ada", "not": 80}, {"ad": "Can", "not": 60}]
toplam = 0
`,`ogrenciler = [{"ad": "Ada", "not": 80}, {"ad": "Can", "not": 60}]
toplam = 0
for o in ogrenciler:
    toplam = toplam + o["not"]
print(toplam / len(ogrenciler))`,[{d:`Ortalama 70.0`,out:`70.0`},{d:`Döngü kullanılmış`,src:`for\\s+\\w+\\s+in`}],[`Her öğrencinin ["not"] değerini toplama ekle.`,`Toplamı len(ogrenciler) ile böl.`],[`Çıktı: 70.0`])],{quiz:U(`m19-quiz`,`Modül 19 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`0`,`KeyError`,`5`,`None`],0,`get() anahtar yoksa verdiğin varsayılan değeri (0) döndürür.`,`stok = {"elma": 5}
print(stok.get("muz", 0))`),H(`q2`,`Bu kod ne yazdırır?`,[`2`,`1`,`3`,`Hata`],0,`"a" anahtarının değeri iki kez artırıldı.`,`sayac = {}
for h in "aba":
    sayac[h] = sayac.get(h, 0) + 1
print(sayac["a"])`),H(`q3`,`"elma" in stok ifadesi sözlükte neyi arar?`,[`Anahtarları`,`Değerleri`,`Hem anahtar hem değer`,`Sıra numaralarını`],0,`in operatörü sözlüklerde anahtar arar.`),H(`q4`,`veri = {"a": {"b": [10, 20]}} iken veri["a"]["b"][1] kaçtır?`,[`20`,`10`,`"b"`,`Hata`],0,`veri["a"] iç sözlük, ["b"] liste, [1] ise ikinci eleman olan 20'dir.`)]),practice:[V(`p-m19-keyerror`,`Olmayan anahtar`,`orta`,25,`Kod sepette olmayan "muz" için 0 yazdırmalı ama KeyError veriyor. Hatayı get() ile çöz.`,[{type:`KeyError`,description:`"muz" anahtarı sözlükte yok`}],`sepet = {"elma": 2}
print(sepet["muz"])`,`sepet = {"elma": 2}
print(sepet.get("muz", 0))`,[{d:`Çıktı 0`,out:`0`}],[`get() olmayan anahtar için varsayılan değer verir.`]),B(`p-m19-count`,`Harfleri say`,`orta`,30,`kelime içindeki her harfin kaç kez geçtiğini bir sözlükte say ve yazdır.`,`kelime = "banana"
sayac = {}
`,`kelime = "banana"
sayac = {}
for h in kelime:
    sayac[h] = sayac.get(h, 0) + 1
print(sayac)`,[{d:`Harf sayımı`,out:`{'b': 1, 'a': 3, 'n': 2}`},{d:`get kullanılmış`,src:`get\\(`}],[`Sayma kalıbını kullan.`],[`{'b': 1, 'a': 3, 'n': 2}`])]})]),rl=G(20,`Liste ve Sözlük Üreteçleri`,`Döngü yazmadan tek satırda liste, sözlük ve küme üretmek (comprehension).`,`m19-l3`,e=>[W(`m20`,1,e(1),`Liste üreteci (list comprehension)`,12,[`[ifade for eleman in dizi] kalıbını kullanmak`,`if ile süzmek`],[L(`b1`,`Liste üreteci (list comprehension), bir for döngüsünü ve append() adımını tek satıra sığdırır: [ifade for eleman in dizi]. Sonuna if koşulu eklersen yalnızca koşulu sağlayan elemanlar alınır.`),R(`b2`,I`ikiler = [x * 2 for x in range(5)]
print(ikiler)
sayilar = [1, 2, 3, 4, 5, 6]
ciftler = [x for x in sayilar if x % 2 == 0]
print(ciftler)`,`İlk üreç range(5) sayılarını ikiyle çarpar. İkincisi yalnızca çift sayıları (x % 2 == 0) alır. Aynı işi döngü ve append() ile de yapabilirdin; üreç daha kısadır.`),z(`b3`,`tip`,`Okuma sırası: "sayilar içindeki her x için, x çiftse x'i listeye al".`)],[B(`m20-l1-e1`,`Kareler listesi`,`kolay`,20,`1'den 5'e kadar (5 dahil) sayıların karelerinden oluşan bir listeyi liste üreteciyle oluştur ve yazdır.`,``,`kareler = [x ** 2 for x in range(1, 6)]
print(kareler)`,[{d:`Kareler`,out:`[1, 4, 9, 16, 25]`},{d:`Üreteç kullanılmış`,src:`\\[[^\\]]*\\bfor\\b[^\\]]*\\]`}],[`[x ** 2 for x in range(1, 6)] kalıbını dene.`],[`[1, 4, 9, 16, 25]`])]),W(`m20`,2,e(2),`Dönüştürme ve koşullu değer`,12,[`Her elemanı dönüştürmek`,`if-else ifadesiyle değer seçmek`],[L(`b1`,`Üreçle bir listeyi başka bir listeye dönüştürebilirsin: her eleman için bir ifade hesaplanır. İfadenin kendisinde de if-else kullanılabilir; bu durumda if-else for'dan ÖNCE yazılır: [a if koşul else b for x in dizi].`),R(`b2`,I`kelimeler = ["elma", "armut", "muz"]
print([k.upper() for k in kelimeler])
print([len(k) for k in kelimeler])
sayilar = [1, 2, 3, 4]
print(["çift" if x % 2 == 0 else "tek" for x in sayilar])`,`İlk üreç her kelimeyi büyütür, ikincisi uzunluklarını bulur. Üçüncüsü her sayı için "çift" ya da "tek" metnini seçer.`),z(`b3`,`warning`,`Yalnızca süzmek için if sonda ([x for x in a if koşul]); iki seçenekten biri için if-else başta ([a if koşul else b for x in dizi]).`)],[B(`m20-l2-e1`,`Uzunluklar`,`kolay`,20,`kelimeler listesindeki her kelimenin uzunluğundan oluşan bir liste üret ve yazdır (liste üreteci ile).`,`kelimeler = ["elma", "armut", "muz"]
`,`kelimeler = ["elma", "armut", "muz"]
print([len(k) for k in kelimeler])`,[{d:`Uzunluklar`,out:`[4, 5, 3]`},{d:`Üreteç kullanılmış`,src:`\\[[^\\]]*\\bfor\\b[^\\]]*\\]`}],[`[len(k) for k in kelimeler]`],[`[4, 5, 3]`])]),W(`m20`,3,e(3),`Sözlük ve küme üreteçleri`,12,[`Sözlük üreteci yazmak`,`Küme üreteci yazmak`],[L(`b1`,`Aynı fikir sözlük ve küme için de geçerlidir. Sözlük üreteci {anahtar: değer for ... in ...} biçimindedir. Küme üreteci ise {ifade for ... in ...} yazılır ve tekrarları otomatik atar.`),R(`b2`,I`kelimeler = ["elma", "armut", "muz"]
uzunluk = {k: len(k) for k in kelimeler}
print(uzunluk)
kareler = {x: x * x for x in range(1, 5)}
print(kareler)
print(sorted({len(k) for k in ["aa", "bb", "ccc"]}))`,`Sözlük üreteci her kelimeyi uzunluğuyla eşler. İkincisi sayıyı karesiyle eşler. Küme üreteci uzunlukları toplar; "aa" ve "bb" aynı uzunlukta olduğu için {2, 3} kalır.`),z(`b3`,`tip`,`Üreçler çok karmaşıklaşırsa okunması zorlaşır. Üç parçadan fazlasını sığdırmak yerine normal döngü yaz.`)],[B(`m20-l3-e1`,`Kare sözlüğü`,`orta`,25,`1'den 4'e kadar (4 dahil) her sayıyı karesiyle eşleyen bir sözlüğü sözlük üreteciyle oluştur ve yazdır.`,``,`kareler = {x: x * x for x in range(1, 5)}
print(kareler)`,[{d:`Kare sözlüğü`,out:`{1: 1, 2: 4, 3: 9, 4: 16}`},{d:`Sözlük üreteci`,src:`\\{[^}]*:[^}]*\\bfor\\b[^}]*\\}`}],[`{x: x * x for x in range(1, 5)} kalıbını kullan.`],[`{1: 1, 2: 4, 3: 9, 4: 16}`])],{quiz:U(`m20-quiz`,`Modül 20 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`[0, 1, 4]`,`[1, 4, 9]`,`[0, 2, 4]`,`[0, 1, 2]`],0,`x ** 2 her sayının karesidir: 0, 1, 4.`,`print([x ** 2 for x in range(3)])`),H(`q2`,`Bu kod ne yazdırır?`,[`[2, 4]`,`[1, 3]`,`[1, 2, 3, 4]`,`[]`],0,`if koşulu yalnızca çift sayıları alır.`,`print([x for x in [1, 2, 3, 4] if x % 2 == 0])`),H(`q3`,`Bu kod ne yazdırır?`,[`{'a': 1, 'bb': 2}`,`{1: 'a', 2: 'bb'}`,`[1, 2]`,`Hata`],0,`Sözlük üreteci her kelimeyi uzunluğuyla eşler.`,`print({k: len(k) for k in ["a", "bb"]})`),H(`q4`,`["çift" if x % 2 == 0 else "tek" for x in [1, 2]] sonucu nedir?`,[`['tek', 'çift']`,`['çift', 'tek']`,`['tek']`,`Hata`],0,`1 tek, 2 çifttir.`)]),practice:[V(`p-m20-filter`,`Süzme koşulu yanlış yerde`,`orta`,25,`Kod yalnızca 10'dan büyük sayıları listelemeli: [12, 15]. Ama hata veriyor. Koşulu doğru yere koy.`,[{type:`SyntaxError`,description:`Yalnızca süzmek için if, for ifadesinden SONRA yazılır`}],`sayilar = [3, 12, 7, 15]
print([x if x > 10 for x in sayilar])`,`sayilar = [3, 12, 7, 15]
print([x for x in sayilar if x > 10])`,[{d:`Büyük sayılar`,out:`[12, 15]`}],[`Süzmek için if sonda yazılır: [x for x in sayilar if koşul].`]),B(`p-m20-upper`,`Büyük harfe çevir`,`kolay`,20,`isimler listesindeki her ismi büyük harfe çeviren yeni bir liste üret ve yazdır.`,`isimler = ["ada", "can"]
`,`isimler = ["ada", "can"]
print([i.upper() for i in isimler])`,[{d:`Büyük harfli liste`,out:`['ADA', 'CAN']`},{d:`Üreteç kullanılmış`,src:`\\[[^\\]]*\\bfor\\b[^\\]]*\\]`}],[`[i.upper() for i in isimler]`],[`['ADA', 'CAN']`])]})]),il=G(21,`Döngü Kalıpları`,`enumerate, zip, iç içe döngüler ve ekrana desenler çizmek.`,`m20-l3`,e=>[W(`m21`,1,e(1),`enumerate ve zip`,12,[`enumerate() ile sıra numarası almak`,`zip() ile iki listeyi birlikte dolaşmak`],[L(`b1`,`Hem elemana hem sıra numarasına ihtiyacın varsa enumerate() kullan: her turda (sıra, eleman) çifti verir; start= ile saymaya 1'den başlayabilirsin. İki listeyi yan yana dolaşmak için zip() kullanılır: aynı sıradaki elemanları çift çift verir.`),R(`b2`,I`isimler = ["Ada", "Can", "Ece"]
for sira, ad in enumerate(isimler, start=1):
    print(sira, ad)
puanlar = [80, 90, 70]
for ad, puan in zip(isimler, puanlar):
    print(f"{ad}: {puan}")`,`enumerate sıra numarasını ve elemanı birlikte verir. zip isimler ve puanlar listelerinin aynı konumdaki elemanlarını eşleştirir.`),z(`b3`,`tip`,`range(len(liste)) ile index kullanmak yerine enumerate() daha okunaklıdır.`)],[B(`m21-l1-e1`,`İsim ve puan`,`orta`,25,`adlar ve puanlar listelerini zip() ile birlikte dolaşıp her çifti "Ada: 80" biçiminde alt alta yazdır.`,`adlar = ["Ada", "Can"]
puanlar = [80, 90]
`,`adlar = ["Ada", "Can"]
puanlar = [80, 90]
for ad, puan in zip(adlar, puanlar):
    print(f"{ad}: {puan}")`,[{d:`İki satır`,out:`Ada: 80
Can: 90`},{d:`zip kullanılmış`,src:`zip\\(`}],[`for ad, puan in zip(adlar, puanlar): kalıbını kullan.`],[`Ada: 80`,`Can: 90`])]),W(`m21`,2,e(2),`İç içe döngüler`,14,[`Döngünün içinde döngü kullanmak`,`Çarpım tablosu üretmek`],[L(`b1`,`Bir döngünün gövdesinde başka bir döngü olabilir. Dış döngünün her turunda iç döngü baştan sona çalışır. Satır ve sütunlu işlerde (tablolar, desenler) çok kullanılır. print(*liste) listenin elemanlarını araya boşluk koyarak tek satırda yazar.`),R(`b2`,I`for i in range(1, 4):
    satir = []
    for j in range(1, 4):
        satir.append(i * j)
    print(*satir)`,`Dış döngü satırları (i), iç döngü sütunları (j) dolaşır. Her satır için çarpımlar listeye eklenir ve print(*satir) tek satırda yazar. Sonuç 3x3 çarpım tablosudur.`),z(`b3`,`tip`,`İç içe döngüde toplam tur sayısı çarpılır: 3 x 3 = 9. Büyük sayılarda program yavaşlayabilir.`)],[B(`m21-l2-e1`,`Çarpım tablosu`,`orta`,30,`İç içe iki döngüyle 1'den 3'e kadar çarpım tablosunu satır satır yazdır (her satırda sayılar aralarında boşlukla).`,``,`for i in range(1, 4):
    satir = []
    for j in range(1, 4):
        satir.append(i * j)
    print(*satir)`,[{d:`3x3 tablo`,out:`1 2 3
2 4 6
3 6 9`},{d:`İç içe döngü`,src:`for[\\s\\S]*for`}],[`Dış döngü i, iç döngü j olsun; her satırda i * j değerlerini bir listeye ekle.`,`print(*satir) elemanları boşlukla yazar.`],[`Üç satır doğru`,`İç içe döngü kullanılmış`])]),W(`m21`,3,e(3),`Desenler çizmek`,12,[`Döngü ve metin çarpımıyla desen çizmek`],[L(`b1`,`Döngü ve metin çarpımı (*) birleşince ekrana desenler çizebilirsin: "*" * 3 sonucu "***"dır. Satır numarasına göre yıldız ve boşluk sayısını değiştirerek merdiven ya da piramit elde edersin.`),R(`b2`,I`for i in range(1, 5):
    print("*" * i)
print()
for i in range(1, 4):
    print(" " * (3 - i) + "*" * (2 * i - 1))`,`İlk döngü her satırda bir yıldız artırarak merdiven çizer. İkinci döngü soldaki boşluk sayısını azaltıp yıldız sayısını artırarak ortalanmış bir piramit çizer.`),z(`b3`,`tip`,`Desen sorularında önce kâğıda her satırdaki boşluk ve yıldız sayısını yaz; sonra bunu satır numarasına bağlayan bir formül ara.`)],[B(`m21-l3-e1`,`Merdiven`,`orta`,25,`Bir döngüyle 1'den 4'e kadar her satırda o satır numarası kadar "*" yazarak dört basamaklı merdiven çiz.`,``,`for i in range(1, 5):
    print("*" * i)`,[{d:`Merdiven`,out:`*
**
***
****`},{d:`Döngü ve çarpma`,src:`for[\\s\\S]*\\*\\s*\\w+|\\w+\\s*\\*\\s*"\\*"`}],[`for i in range(1, 5): ve print("*" * i)`],[`Dört satır doğru`])],{quiz:U(`m21-quiz`,`Modül 21 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`1 a`,`0 a`,`a 1`,`Hata`],0,`start=1 ile sayma 1'den başlar; ilk eleman "a"dır.`,`for i, h in enumerate("ab", start=1):
    print(i, h)
    break`),H(`q2`,`zip([1, 2], ["a", "b"]) hangi çiftleri verir?`,[`(1, "a") ve (2, "b")`,`(1, 2) ve ("a", "b")`,`(1, "b") ve (2, "a")`,`Hata`],0,`zip aynı konumdaki elemanları eşleştirir.`),H(`q3`,`İç içe döngülerde dış döngü 3, iç döngü 4 tur dönüyorsa iç gövde toplam kaç kez çalışır?`,[`12`,`7`,`3`,`4`],0,`Dış döngünün her turunda iç döngü 4 kez çalışır: 3 x 4 = 12.`),H(`q4`,`print("*" * 3) ne yazdırır?`,[`***`,`*3`,`3`,`Hata`],0,`Metin sayıyla çarpılınca tekrarlanır.`)]),practice:[V(`p-m21-enumerate`,`Sıra numarası 0'dan başlıyor`,`kolay`,20,`Liste 1'den başlayarak numaralanmalı: "1 Ada" ve "2 Can". Şu an 0'dan başlıyor. Düzelt.`,[{type:`Mantık hatası`,description:`enumerate varsayılan olarak 0'dan başlar; start=1 verilmeli`}],`for sira, ad in enumerate(["Ada", "Can"]):
    print(sira, ad)`,`for sira, ad in enumerate(["Ada", "Can"], start=1):
    print(sira, ad)`,[{d:`1'den başlayan numaralar`,out:`1 Ada
2 Can`}],[`enumerate(liste, start=1) kullan.`]),B(`p-m21-triangle`,`Ters merdiven`,`orta`,25,`4'ten 1'e doğru her satırda o kadar "*" yazarak ters bir merdiven çiz.`,``,`for i in range(4, 0, -1):
    print("*" * i)`,[{d:`Ters merdiven`,out:`****
***
**
*`},{d:`Döngü kullanılmış`,src:`for\\s+\\w+\\s+in`}],[`range(4, 0, -1) 4'ten 1'e doğru sayar.`],[`Dört satır doğru`])]})]),al=G(22,`Fonksiyonlar II`,`*args, **kwargs, kapsam (scope) ve lambda ile esnek fonksiyonlar yazmak.`,`m21-l3`,e=>[W(`m22`,1,e(1),`*args ve **kwargs`,12,[`Sınırsız sayıda argüman almak`,`Anahtar kelimeli argümanları toplamak`],[L(`b1`,`Bir fonksiyon kaç argüman alacağını önceden bilmiyorsa parametrenin önüne * koyarsın: *sayilar. Fonksiyon içinde bu bir demettir (tuple) ve gönderilen tüm değerleri içerir. İsimli argümanlar için ** kullanılır: **bilgiler bir sözlük olur.`),R(`b2`,I`def topla(*sayilar):
    toplam = 0
    for s in sayilar:
        toplam = toplam + s
    return toplam

print(topla(1, 2, 3))
print(topla(10))

def tanit(**bilgiler):
    for anahtar, deger in bilgiler.items():
        print(anahtar, deger)

tanit(ad="Ada", yas=20)`,`topla() kaç sayı gönderirsen onları toplar. tanit() isimli argümanları bir sözlükte toplar ve items() ile yazdırır.`),z(`b3`,`tip`,`Adlar sadece gelenektir (*args, **kwargs); önemli olan * ve ** işaretleridir. Normal parametreler her zaman *args'tan önce gelir.`)],[B(`m22-l1-e1`,`Sınırsız not ortalaması`,`orta`,25,`Kaç not gönderilirse gönderilsin ortalamalarını döndüren ortalama(*notlar) fonksiyonunu yaz.`,`def ortalama(*notlar):
    pass
`,`def ortalama(*notlar):
    return sum(notlar) / len(notlar)`,[{d:`Üç not`,append:`print(ortalama(70, 80, 90))`,out:`80.0`},{d:`Tek not`,append:`print(ortalama(50))`,out:`50.0`}],[`*notlar gönderilen tüm notları bir demet yapar.`,`sum(notlar) / len(notlar)`],[`ortalama(70, 80, 90) 80.0 verir`,`ortalama(50) 50.0 verir`])]),W(`m22`,2,e(2),`Kapsam (scope)`,12,[`Yerel ve genel değişkeni ayırt etmek`,`global anahtar kelimesini bilmek`],[L(`b1`,`Bir fonksiyonun içinde oluşturulan değişken yalnızca o fonksiyonda yaşar: buna yerel (local) değişken denir. Fonksiyonun dışındaki değişken geneldir (global). Fonksiyon aynı isimli yerel bir değişken oluşturursa dıştakini etkilemez.`),R(`b2`,I`x = 10

def degistir():
    x = 5
    print("içeride:", x)

degistir()
print("dışarıda:", x)

sayac = 0
def artir():
    global sayac
    sayac = sayac + 1

artir()
artir()
print(sayac)`,`degistir() içindeki x yereldir; dışarıdaki x değişmez. global sayac dersek fonksiyon dıştaki sayac değişkenini değiştirebilir: iki çağrıdan sonra 2 olur.`),z(`b3`,`warning`,`global gerektiği durumlarda genellikle değeri return ile geri vermek daha temizdir. Fonksiyonun içinde global olmadan genel bir değişkeni artırmaya çalışırsan UnboundLocalError alırsın.`)],[B(`m22-l2-e1`,`Genel sayacı artır`,`orta`,25,`artir() fonksiyonu dışarıdaki sayac değişkenini bir artırsın (global kullan).`,`sayac = 0

def artir():
    pass
`,`sayac = 0

def artir():
    global sayac
    sayac = sayac + 1`,[{d:`İki çağrı`,append:`artir()
artir()
print(sayac)`,out:`2`},{d:`global kullanılmış`,src:`global\\s+sayac`}],[`Fonksiyonun ilk satırı global sayac olsun.`],[`İki çağrıdan sonra sayac 2 olur`])]),W(`m22`,3,e(3),`lambda`,12,[`lambda ile tek satırlık fonksiyon yazmak`,`Fonksiyonu başka fonksiyona argüman vermek`],[L(`b1`,`lambda, adı olmayan tek satırlık küçük bir fonksiyondur: lambda parametre: ifade. İfadenin sonucu otomatik döndürülür. Fonksiyonlar Python'da değerdir; bir değişkene atanabilir ya da başka bir fonksiyona argüman olarak verilebilir.`),R(`b2`,I`ikiyle = lambda x: x * 2
print(ikiyle(5))
print((lambda a, b: a + b)(2, 3))

def uygula(f, deger):
    return f(deger)

print(uygula(lambda x: x + 1, 5))
print(uygula(len, "merhaba"))`,`ikiyle bir lambda'ya verilen isimdir. İki parametreli lambda hemen çağrılabilir. uygula() ona verilen fonksiyonu değere uygular: lambda 5'i 6 yapar, len ise "merhaba"nın uzunluğunu (7) bulur.`),z(`b3`,`tip`,`lambda küçük işler içindir. Birden fazla satır gerekiyorsa normal def kullan.`)],[B(`m22-l3-e1`,`Küp lambdası`,`kolay`,20,`Verilen sayının küpünü (üçüncü kuvvetini) hesaplayan kup adında bir lambda yaz.`,`# kup adlı lambda'yı yaz
`,`kup = lambda x: x ** 3`,[{d:`2 için 8`,append:`print(kup(2))`,out:`8`},{d:`3 için 27`,append:`print(kup(3))`,out:`27`},{d:`lambda kullanılmış`,src:`lambda`}],[`kup = lambda x: x ** 3`],[`kup(2) 8 verir`,`kup(3) 27 verir`])],{quiz:U(`m22-quiz`,`Modül 22 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`6`,`3`,`(1, 2, 3)`,`Hata`],0,`*sayilar gönderilen üç değeri bir demete toplar; döngü onları toplar.`,`def topla(*sayilar):
    return sum(sayilar)
print(topla(1, 2, 3))`),H(`q2`,`Bu kod ne yazdırır?`,[`10`,`5`,`Hata`,`None`],0,`Fonksiyondaki x yereldir; dıştaki x değişmez.`,`x = 10
def f():
    x = 5
f()
print(x)`),H(`q3`,`Fonksiyon içinde dıştaki bir değişkeni değiştirmek için ne yazılır?`,[`global değişken_adı`,`outer değişken_adı`,`extern değişken_adı`,`Hiçbir şey gerekmez`],0,`global anahtar kelimesi fonksiyonun dıştaki değişkeni kullanmasını sağlar.`),H(`q4`,`(lambda x: x + 1)(4) sonucu nedir?`,[`5`,`4`,`lambda`,`Hata`],0,`Lambda 4'e bir ekler ve sonucu döndürür.`)]),practice:[V(`p-m22-global`,`Fonksiyon sayacı artıramıyor`,`orta`,30,`artir() çağrılınca sayac 1 olmalı ama UnboundLocalError veriyor. Düzelt.`,[{type:`UnboundLocalError`,description:`Fonksiyon içinde atama yapıldığı için sayac yerel sayılıyor; global bildirilmeli`}],`sayac = 0
def artir():
    sayac = sayac + 1
artir()
print(sayac)`,`sayac = 0
def artir():
    global sayac
    sayac = sayac + 1
artir()
print(sayac)`,[{d:`Çıktı 1`,out:`1`}],[`Fonksiyonun içinde global sayac yaz.`]),B(`p-m22-kwargs`,`Bilgi kartı`,`orta`,25,`kart(**bilgiler) fonksiyonu her bilgiyi "anahtar: değer" biçiminde alt alta yazdırsın.`,`def kart(**bilgiler):
    pass
`,`def kart(**bilgiler):
    for anahtar, deger in bilgiler.items():
        print(f"{anahtar}: {deger}")`,[{d:`İki bilgi`,append:`kart(ad="Ada", yas=20)`,out:`ad: Ada
yas: 20`}],[`bilgiler bir sözlüktür; items() ile dolaş.`],[`ad: Ada`,`yas: 20`])]})]),ol=G(23,`Özyineleme`,`Kendini çağıran fonksiyonlar: faktöriyel, Fibonacci ve sınırları.`,`m22-l3`,e=>[W(`m23`,1,e(1),`Kendini çağıran fonksiyon`,12,[`Özyinelemenin (recursion) mantığını anlamak`,`Bitiş koşulu (base case) yazmak`],[L(`b1`,`Özyineleme (recursion), bir fonksiyonun kendi kendini çağırmasıdır. Her özyinelemeli fonksiyonun iki parçası olmalıdır: işi durduran bir bitiş koşulu (base case) ve problemi küçülten bir özyinelemeli çağrı. Bitiş koşulu olmazsa fonksiyon sonsuza kadar kendini çağırır.`),R(`b2`,I`def geri_say(n):
    if n == 0:
        print("Bitti!")
        return
    print(n)
    geri_say(n - 1)

geri_say(3)`,`n 0 olunca bitiş koşulu çalışır ve fonksiyon durur. Aksi hâlde sayıyı yazar ve n - 1 ile kendini çağırır: 3, 2, 1, sonra "Bitti!".`),z(`b3`,`tip`,`Özyinelemeyi kurarken önce "hangi durumda durmalıyım?" sorusunu cevapla, sonra "problemi nasıl küçültürüm?".`)],[B(`m23-l1-e1`,`Geri sayım`,`orta`,25,`geri_say(n) fonksiyonu n'den 1'e kadar sayıları alt alta yazdırsın, sonra "Başla!" yazsın. Döngü değil, özyineleme kullan.`,`def geri_say(n):
    pass
`,`def geri_say(n):
    if n == 0:
        print("Başla!")
        return
    print(n)
    geri_say(n - 1)`,[{d:`3'ten geri say`,append:`geri_say(3)`,out:`3
2
1
Başla!`},{d:`Fonksiyon kendini çağırıyor`,src:`geri_say\\([^)]*\\)[\\s\\S]*geri_say\\(`}],[`n == 0 olunca "Başla!" yazıp dur.`,`Diğer durumda n'i yaz ve geri_say(n - 1) çağır.`],[`3, 2, 1 ve Başla! alt alta`])]),W(`m23`,2,e(2),`Faktöriyel ve toplam`,14,[`Değer döndüren özyinelemeli fonksiyon yazmak`],[L(`b1`,`Özyineleme sonucu hesaplamak için de kullanılır. Faktöriyel: n! = n × (n-1)!, ve 0! = 1. Yani faktoriyel(n) fonksiyonu n * faktoriyel(n - 1) değerini döndürür; bitiş koşulu n 0 olduğunda 1 döndürmektir.`),R(`b2`,I`def faktoriyel(n):
    if n == 0:
        return 1
    return n * faktoriyel(n - 1)

print(faktoriyel(5))

def toplam(n):
    if n == 0:
        return 0
    return n + toplam(n - 1)

print(toplam(4))`,`faktoriyel(5) = 5 × 4 × 3 × 2 × 1 = 120. toplam(4) = 4 + 3 + 2 + 1 + 0 = 10. Her çağrı küçük bir problemi çözüp sonucu bir üstteki çağrıya verir.`),z(`b3`,`warning`,`Bitiş koşulunu unutursan Python yaklaşık 1000 çağrıdan sonra RecursionError verir.`)],[B(`m23-l2-e1`,`Faktöriyel`,`orta`,30,`faktoriyel(n) fonksiyonunu özyinelemeli olarak yaz: 0 için 1, diğer durumlarda n * faktoriyel(n - 1).`,`def faktoriyel(n):
    pass
`,`def faktoriyel(n):
    if n == 0:
        return 1
    return n * faktoriyel(n - 1)`,[{d:`5! = 120`,append:`print(faktoriyel(5))`,out:`120`},{d:`0! = 1`,append:`print(faktoriyel(0))`,out:`1`},{d:`Fonksiyon kendini çağırıyor`,src:`faktoriyel\\([^)]*\\)[\\s\\S]*faktoriyel\\(`}],[`Bitiş koşulu: n == 0 için 1 döndür.`,`Diğer durumda n * faktoriyel(n - 1)`],[`faktoriyel(5) 120`,`faktoriyel(0) 1`])]),W(`m23`,3,e(3),`Fibonacci ve özyinelemenin sınırları`,14,[`İki çağrılı özyinelemeyi anlamak`,`Özyineleme ile döngüyü karşılaştırmak`],[L(`b1`,`Fibonacci dizisinde her sayı kendinden önceki iki sayının toplamıdır: 0, 1, 1, 2, 3, 5, 8... Özyinelemeli yazılışı fib(n) = fib(n-1) + fib(n-2) şeklindedir; bitiş koşulları fib(0) = 0 ve fib(1) = 1'dir.`),R(`b2`,I`def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(6))
print([fib(i) for i in range(8)])`,`n < 2 ise sayının kendisi döner (fib(0)=0, fib(1)=1). fib(6) = 8. Liste üreteci ilk sekiz Fibonacci sayısını verir: [0, 1, 1, 2, 3, 5, 8, 13].`),z(`b3`,`warning`,`Her fib() çağrısı iki yeni çağrı açar; büyük n için çok yavaşlar. Aynı işi bir döngüyle yapmak çoğu zaman daha hızlıdır. Özyineleme ağaç gibi iç içe yapılarda (klasör içinde klasör) parlar.`)],[B(`m23-l3-e1`,`Fibonacci`,`orta`,30,`fib(n) fonksiyonunu özyinelemeli yaz: n < 2 ise n, değilse fib(n - 1) + fib(n - 2).`,`def fib(n):
    pass
`,`def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)`,[{d:`fib(6) = 8`,append:`print(fib(6))`,out:`8`},{d:`fib(10) = 55`,append:`print(fib(10))`,out:`55`}],[`n < 2 ise n döndür.`,`Aksi hâlde iki önceki sayıyı topla.`],[`fib(6) 8`,`fib(10) 55`])],{quiz:U(`m23-quiz`,`Modül 23 mini sınavı`,[H(`q1`,`Özyinelemeli bir fonksiyonda bitiş koşulu (base case) neden gereklidir?`,[`Fonksiyonun sonsuza kadar kendini çağırmasını önlemek için`,`Fonksiyonu hızlandırmak için`,`Parametre sayısını azaltmak için`,`Gerekli değildir`],0,`Bitiş koşulu olmazsa fonksiyon sonsuza kadar kendini çağırır ve RecursionError oluşur.`),H(`q2`,`Bu kod ne yazdırır?`,[`6`,`3`,`1`,`0`],0,`toplam(3) = 3 + 2 + 1 + 0 = 6.`,`def toplam(n):
    if n == 0:
        return 0
    return n + toplam(n - 1)
print(toplam(3))`),H(`q3`,`faktoriyel(4) kaçtır?`,[`24`,`10`,`16`,`12`],0,`4 × 3 × 2 × 1 = 24.`),H(`q4`,`Bitiş koşulu olmayan özyinelemeli fonksiyon çalıştırılırsa Python hangi hatayı verir?`,[`RecursionError`,`ValueError`,`SyntaxError`,`KeyError`],0,`Çağrı sayısı sınırı (yaklaşık 1000) aşılınca RecursionError oluşur.`)]),practice:[V(`p-m23-base`,`Bitiş koşulu eksik`,`orta`,30,`toplam(3) 6 vermeli ama RecursionError veriyor. Eksik bitiş koşulunu ekle.`,[{type:`RecursionError`,description:`n 0 olduğunda durmayan özyineleme sonsuza kadar sürer`}],`def toplam(n):
    return n + toplam(n - 1)
print(toplam(3))`,`def toplam(n):
    if n == 0:
        return 0
    return n + toplam(n - 1)
print(toplam(3))`,[{d:`Çıktı 6`,out:`6`}],[`n == 0 için 0 döndüren bir koşul ekle.`]),B(`p-m23-power`,`Üs alma`,`zor`,35,`us(taban, kuvvet) fonksiyonunu özyinelemeli yaz: kuvvet 0 ise 1; değilse taban * us(taban, kuvvet - 1).`,`def us(taban, kuvvet):
    pass
`,`def us(taban, kuvvet):
    if kuvvet == 0:
        return 1
    return taban * us(taban, kuvvet - 1)`,[{d:`2 üssü 5`,append:`print(us(2, 5))`,out:`32`},{d:`Herhangi bir sayının 0. kuvveti`,append:`print(us(7, 0))`,out:`1`}],[`Bitiş koşulu: kuvvet == 0.`],[`us(2, 5) 32`,`us(7, 0) 1`])]})]),sl=G(24,`map, filter ve sorted`,`Fonksiyonları argüman olarak vermek: listeleri dönüştür, süz ve sırala.`,`m23-l3`,e=>[W(`m24`,1,e(1),`map() ile dönüştürmek`,10,[`map() ile her elemana fonksiyon uygulamak`,`Sonucu list() ile listeye çevirmek`],[L(`b1`,`map(fonksiyon, dizi) dizinin her elemanına fonksiyonu uygular. Sonuç hemen bir liste olmaz; list() ile listeye çevirirsin. Fonksiyon olarak hazır bir fonksiyon (str.upper, len) ya da lambda kullanabilirsin.`),R(`b2`,I`sayilar = [1, 2, 3]
print(list(map(lambda x: x * 10, sayilar)))
kelimeler = ["elma", "armut"]
print(list(map(len, kelimeler)))
print(list(map(str.upper, kelimeler)))`,`İlk map her sayıyı 10 ile çarpar. İkincisi len fonksiyonunu her kelimeye uygular. Üçüncüsü her kelimeyi büyük harfe çevirir.`),z(`b3`,`tip`,`map ile liste üreteci aynı işi görür: [x * 10 for x in sayilar]. Hangisi sana okunaklı geliyorsa onu kullan.`)],[B(`m24-l1-e1`,`Kareleri map ile al`,`kolay`,20,`sayilar listesindeki her sayının karesini map() ve lambda ile hesapla; sonucu liste olarak yazdır.`,`sayilar = [1, 2, 3]
`,`sayilar = [1, 2, 3]
print(list(map(lambda x: x * x, sayilar)))`,[{d:`Kareler`,out:`[1, 4, 9]`},{d:`map kullanılmış`,src:`map\\(`}],[`list(map(lambda x: x * x, sayilar))`],[`[1, 4, 9]`])]),W(`m24`,2,e(2),`filter() ile süzmek`,10,[`filter() ile koşulu sağlayanları almak`],[L(`b1`,`filter(fonksiyon, dizi) yalnızca fonksiyonun True döndürdüğü elemanları tutar. Yine sonucu list() ile listeye çevirirsin.`),R(`b2`,I`sayilar = [3, 12, 7, 15, 20]
buyukler = list(filter(lambda x: x > 10, sayilar))
print(buyukler)
isimler = ["Ada", "", "Can", ""]
print(list(filter(lambda s: s != "", isimler)))`,`İlk filter 10'dan büyük sayıları tutar. İkincisi boş metinleri eler.`),z(`b3`,`tip`,`filter() yerine [x for x in sayilar if x > 10] da yazabilirsin; ikisi aynı sonucu verir.`)],[B(`m24-l2-e1`,`10'dan büyükleri süz`,`kolay`,20,`sayilar listesinden yalnızca 10'dan büyük olanları filter() ve lambda ile süz ve liste olarak yazdır.`,`sayilar = [3, 12, 7, 15]
`,`sayilar = [3, 12, 7, 15]
print(list(filter(lambda x: x > 10, sayilar)))`,[{d:`Büyük sayılar`,out:`[12, 15]`},{d:`filter kullanılmış`,src:`filter\\(`}],[`list(filter(lambda x: x > 10, sayilar))`],[`[12, 15]`])]),W(`m24`,3,e(3),`sorted() ve key`,14,[`key= ile sıralama ölçütü belirlemek`,`min() ve max() ile key kullanmak`],[L(`b1`,`sorted() varsayılan olarak elemanları kendi değerlerine göre sıralar. key= parametresi ile sıralama ölçütünü değiştirirsin: key her elemana uygulanan bir fonksiyondur ve sıralama onun sonucuna göre yapılır. reverse=True büyükten küçüğe sıralar.`),R(`b2`,I`kelimeler = ["muz", "elma", "armut"]
print(sorted(kelimeler, key=len))
ogrenciler = [("Ada", 80), ("Can", 60), ("Ece", 90)]
print(sorted(ogrenciler, key=lambda o: o[1], reverse=True))
print(max(ogrenciler, key=lambda o: o[1]))`,`key=len kelimeleri uzunluklarına göre sıralar. İkinci örnekte her öğrenci (ad, not) çiftidir; lambda notu (index 1) seçer ve liste büyükten küçüğe sıralanır. max() de key ile en yüksek notlu öğrenciyi bulur.`),z(`b3`,`tip`,`key= bir fonksiyon bekler, çağrı yazma: key=len doğru, key=len() yanlıştır.`)],[B(`m24-l3-e1`,`Notuna göre sırala`,`orta`,30,`ogrenciler listesini nota göre büyükten küçüğe sırala ve yalnızca isimleri sırayla bir liste olarak yazdır.`,`ogrenciler = [("Ada", 80), ("Can", 60), ("Ece", 90)]
`,`ogrenciler = [("Ada", 80), ("Can", 60), ("Ece", 90)]
sirali = sorted(ogrenciler, key=lambda o: o[1], reverse=True)
print([o[0] for o in sirali])`,[{d:`Sıralı isimler`,out:`['Ece', 'Ada', 'Can']`},{d:`key kullanılmış`,src:`key\\s*=`}],[`sorted(ogrenciler, key=lambda o: o[1], reverse=True)`,`Sonra isimleri bir liste üreteciyle al.`],[`['Ece', 'Ada', 'Can']`])],{quiz:U(`m24-quiz`,`Modül 24 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`[2, 4, 6]`,`[1, 2, 3]`,`<map object>`,`Hata`],0,`map her sayıyı ikiyle çarpar; list() sonucu listeye çevirir.`,`print(list(map(lambda x: x * 2, [1, 2, 3])))`),H(`q2`,`Bu kod ne yazdırır?`,[`[2, 4]`,`[1, 3]`,`[1, 2, 3, 4]`,`[]`],0,`filter yalnızca fonksiyonun True döndürdüğü (çift) elemanları tutar.`,`print(list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4])))`),H(`q3`,`Bu kod ne yazdırır?`,[`['at', 'kedi', 'balık']`,`['balık', 'kedi', 'at']`,`['at', 'balık', 'kedi']`,`Hata`],0,`key=len kelimeleri uzunluğa göre küçükten büyüğe sıralar.`,`print(sorted(["balık", "at", "kedi"], key=len))`),H(`q4`,`sorted(liste, key=len()) yazılırsa ne olur?`,[`Hata verir; key fonksiyonun kendisini ister, çağrısını değil`,`Uzunluğa göre sıralar`,`Listeyi ters çevirir`,`Hiçbir şey olmaz`],0,`key=len yazılır (parantezsiz); len() argümansız çağrılırsa TypeError verir.`)]),practice:[V(`p-m24-key`,`key yanlış yazılmış`,`orta`,25,`Kelimeleri uzunluklarına göre sıralaman gerekiyor ama TypeError alıyorsun. key kullanımını düzelt.`,[{type:`TypeError`,description:`key= fonksiyonu çağırmaz, fonksiyonun kendisini ister: len() yerine len`}],`kelimeler = ["muz", "elma", "kiraz"]
print(sorted(kelimeler, key=len()))`,`kelimeler = ["muz", "elma", "kiraz"]
print(sorted(kelimeler, key=len))`,[{d:`Uzunluğa göre`,out:`['muz', 'elma', 'kiraz']`}],[`Parantezleri sil.`]),B(`p-m24-longest`,`En uzun kelime`,`orta`,25,`kelimeler listesindeki en uzun kelimeyi max() ve key ile bul ve yazdır.`,`kelimeler = ["elma", "karpuz", "kivi"]
`,`kelimeler = ["elma", "karpuz", "kivi"]
print(max(kelimeler, key=len))`,[{d:`En uzun kelime`,out:`karpuz`},{d:`key kullanılmış`,src:`key\\s*=`}],[`max(kelimeler, key=len)`],[`Çıktı: karpuz`])]})]),cl=G(25,`collections ve itertools`,`Counter, defaultdict, deque ve itertools ile güçlü hazır araçlar.`,`m24-l3`,e=>[W(`m25`,1,e(1),`Counter ile saymak`,12,[`Counter ile eleman saymak`,`most_common() kullanmak`],[L(`b1`,`Modül 19'da sözlükle saymayı öğrendin. collections modülündeki Counter bu işi tek satırda yapar: Counter(dizi) her elemanın kaç kez geçtiğini sayar. most_common(n) en sık geçen n elemanı (eleman, sayı) çiftleri olarak verir.`),R(`b2`,I`from collections import Counter

sayac = Counter("banana")
print(sayac["a"])
print(sayac.most_common(2))
kelimeler = "kedi köpek kedi kuş kedi".split()
print(Counter(kelimeler).most_common(1))`,`Counter("banana") harfleri sayar: a üç, n iki, b bir kez geçer. most_common(2) en sık iki harfi verir. Kelimeler için de aynı yöntem kullanılır.`),z(`b3`,`tip`,`Counter bir sözlüğün özel hâlidir: olmayan bir anahtarı okursan KeyError yerine 0 verir.`)],[B(`m25-l1-e1`,`En sık kelime`,`orta`,25,`kelimeler listesinde en çok geçen kelimeyi Counter ve most_common(1) ile bul; yalnızca kelimeyi yazdır.`,`from collections import Counter
kelimeler = "kedi köpek kedi kuş kedi köpek".split()
`,`from collections import Counter
kelimeler = "kedi köpek kedi kuş kedi köpek".split()
print(Counter(kelimeler).most_common(1)[0][0])`,[{d:`En sık kelime`,out:`kedi`},{d:`Counter kullanılmış`,src:`Counter\\(`}],[`most_common(1) tek elemanlı bir liste verir: [(kelime, sayı)].`,`[0][0] kelimeyi seçer.`],[`Çıktı: kedi`])]),W(`m25`,2,e(2),`defaultdict ve deque`,14,[`defaultdict ile gruplamak`,`deque ile kuyruk kurmak`],[L(`b1`,`defaultdict, olmayan bir anahtar istenince otomatik varsayılan değer oluşturan bir sözlüktür: defaultdict(list) olmayan anahtar için boş liste açar. Gruplama için çok uygundur. deque ise iki ucundan hızlı ekleme/çıkarma yapılabilen bir listedir; kuyruk (queue) için kullanılır.`),R(`b2`,I`from collections import defaultdict, deque

gruplar = defaultdict(list)
for ad, sinif in [("Ada", "5A"), ("Can", "5B"), ("Ece", "5A")]:
    gruplar[sinif].append(ad)
print(dict(gruplar))

kuyruk = deque(["Ada", "Can"])
kuyruk.append("Ece")
print(kuyruk.popleft())
print(list(kuyruk))`,`gruplar[sinif] olmayan sınıf için boş liste açar, bu yüzden KeyError çıkmaz. deque'de append sona ekler, popleft baştan çıkarır: önce "Ada" kuyruktan çıkar.`),z(`b3`,`tip`,`Sıradan bir listede baştan eleman çıkarmak (pop(0)) yavaştır; deque.popleft() ise hızlıdır.`)],[B(`m25-l2-e1`,`İlk harfe göre grupla`,`orta`,30,`kelimeler listesindeki kelimeleri ilk harflerine göre defaultdict(list) ile grupla ve dict olarak yazdır.`,`from collections import defaultdict
kelimeler = ["elma", "erik", "armut", "ayva"]
gruplar = defaultdict(list)
`,`from collections import defaultdict
kelimeler = ["elma", "erik", "armut", "ayva"]
gruplar = defaultdict(list)
for k in kelimeler:
    gruplar[k[0]].append(k)
print(dict(gruplar))`,[{d:`Gruplar`,out:`{'e': ['elma', 'erik'], 'a': ['armut', 'ayva']}`},{d:`append kullanılmış`,src:`append\\(`}],[`k[0] kelimenin ilk harfidir.`,`gruplar[k[0]].append(k)`],[`{'e': ['elma', 'erik'], 'a': ['armut', 'ayva']}`])]),W(`m25`,3,e(3),`itertools: kombinasyonlar`,12,[`combinations(), permutations() ve product() kullanmak`],[L(`b1`,`itertools modülü tekrar eden işler için hazır araçlar sunar. combinations(dizi, r) sırası önemsiz r'li seçimleri, permutations(dizi, r) sıralı dizilimleri, product(a, b) iki dizinin tüm eşleşmelerini verir. Sonuçlar tembel üretilir; list() ile listeye çevir.`),R(`b2`,I`from itertools import combinations, permutations, product

print(list(combinations([1, 2, 3], 2)))
print(len(list(permutations("abc"))))
print(list(product(["x", "y"], [1, 2])))`,`Üç sayıdan ikili seçimler (1,2), (1,3), (2,3) olur. "abc"nin 6 farklı dizilimi vardır. product her harfi her sayıyla eşleştirir: 2 x 2 = 4 çift.`),z(`b3`,`tip`,`combinations ("kim kiminle?") sırayı önemsemez: (1, 2) ile (2, 1) aynı seçimdir. permutations ise sırayı önemser.`)],[B(`m25-l3-e1`,`İkili takımlar`,`orta`,25,`isimler listesinden seçilebilecek tüm ikili takımları combinations ile liste olarak yazdır.`,`from itertools import combinations
isimler = ["Ada", "Can", "Ece"]
`,`from itertools import combinations
isimler = ["Ada", "Can", "Ece"]
print(list(combinations(isimler, 2)))`,[{d:`Takımlar`,out:`[('Ada', 'Can'), ('Ada', 'Ece'), ('Can', 'Ece')]`},{d:`combinations kullanılmış`,src:`combinations\\(`}],[`combinations(isimler, 2)`],[`[('Ada', 'Can'), ('Ada', 'Ece'), ('Can', 'Ece')]`])],{quiz:U(`m25-quiz`,`Modül 25 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`[('a', 2)]`,`[('b', 1)]`,`{'a': 2}`,`Hata`],0,`most_common(1) en sık elemanı (eleman, sayı) çifti olarak verir.`,`from collections import Counter
print(Counter("aab").most_common(1))`),H(`q2`,`defaultdict(list) ile olmayan bir anahtara ilk kez erişilirse ne olur?`,[`O anahtar için boş bir liste oluşur`,`KeyError verir`,`None döner`,`Program durur`],0,`defaultdict olmayan anahtar için varsayılan değeri (boş liste) oluşturur.`),H(`q3`,`Kuyrukta baştaki elemanı çıkarmak için deque'in hangi metodu kullanılır?`,[`popleft()`,`pop()`,`remove()`,`shift()`],0,`popleft() soldan (baştan) eleman çıkarır.`),H(`q4`,`len(list(combinations([1, 2, 3, 4], 2))) kaçtır?`,[`6`,`12`,`8`,`4`],0,`Dört elemandan ikili seçim sayısı 6'dır: 12, 13, 14, 23, 24, 34.`)]),practice:[V(`p-m25-keyerror`,`Gruplamada KeyError`,`orta`,30,`Kod sınıflara göre öğrencileri gruplamalı ama KeyError veriyor. Sıradan sözlüğü uygun bir koleksiyonla değiştir.`,[{type:`KeyError`,description:`Sıradan sözlükte olmayan anahtar için liste yoktur; defaultdict(list) bunu otomatik açar`}],`gruplar = {}
for ad, sinif in [("Ada", "5A"), ("Can", "5A")]:
    gruplar[sinif].append(ad)
print(gruplar)`,`from collections import defaultdict
gruplar = defaultdict(list)
for ad, sinif in [("Ada", "5A"), ("Can", "5A")]:
    gruplar[sinif].append(ad)
print(dict(gruplar))`,[{d:`Gruplanmış çıktı`,out:`{'5A': ['Ada', 'Can']}`}],[`defaultdict(list) kullan ve yazdırırken dict() ile sar.`]),B(`p-m25-product`,`Tüm eşleşmeler`,`orta`,25,`renkler ve bedenler için tüm (renk, beden) eşleşmelerinin sayısını product ile bul ve yazdır.`,`from itertools import product
renkler = ["kırmızı", "mavi"]
bedenler = ["S", "M", "L"]
`,`from itertools import product
renkler = ["kırmızı", "mavi"]
bedenler = ["S", "M", "L"]
print(len(list(product(renkler, bedenler))))`,[{d:`Eşleşme sayısı`,out:`6`},{d:`product kullanılmış`,src:`product\\(`}],[`len(list(product(renkler, bedenler)))`],[`Çıktı: 6`])]})]),ll=G(26,`Tarih ve Saat`,`datetime ile tarih oluşturmak, hesaplamak ve biçimlendirmek.`,`m25-l3`,e=>[W(`m26`,1,e(1),`Tarih oluşturmak ve karşılaştırmak`,12,[`date ile tarih oluşturmak`,`Tarihleri karşılaştırmak ve farkını bulmak`],[L(`b1`,`datetime modülündeki date sınıfı bir günü (yıl, ay, gün) temsil eder: date(2025, 3, 15). year, month ve day özellikleriyle parçalarına ulaşırsın. Tarihler <, > ile karşılaştırılabilir; iki tarihi çıkarınca bir fark (timedelta) elde edersin ve .days ile gün sayısını alırsın.`),R(`b2`,I`from datetime import date

d1 = date(2025, 1, 1)
d2 = date(2025, 12, 31)
print(d1.year, d1.month, d1.day)
print(d1 < d2)
print((d2 - d1).days)
print(d1.isoformat())`,`d1.year, d1.month, d1.day tarihin parçalarıdır. d1 < d2 True verir. İki tarihin farkı 364 gündür. isoformat() tarihi "2025-01-01" biçiminde verir.`),z(`b3`,`tip`,`Aylar 1'den 12'ye kadardır (0 değil). Olmayan bir tarih (örneğin 30 Şubat) yazarsan ValueError alırsın.`)],[B(`m26-l1-e1`,`İki tarih arası`,`kolay`,20,`d1 ve d2 tarihlerinden d1'in d2'den önce olup olmadığını (True/False) ve aralarındaki gün sayısını alt alta yazdır.`,`from datetime import date
d1 = date(2025, 1, 1)
d2 = date(2025, 12, 31)
`,`from datetime import date
d1 = date(2025, 1, 1)
d2 = date(2025, 12, 31)
print(d1 < d2)
print((d2 - d1).days)`,[{d:`True ve 364`,out:`True
364`},{d:`days kullanılmış`,src:`\\.days`}],[`d1 < d2 bir karşılaştırmadır.`,`(d2 - d1).days gün sayısını verir.`],[`True`,`364`])]),W(`m26`,2,e(2),`timedelta ile hesap`,12,[`timedelta ile tarihe gün eklemek`,`Gün sayısını hesaplamak`],[L(`b1`,`timedelta bir zaman aralığıdır: timedelta(days=30). Bir tarihe timedelta ekleyerek ya da çıkararak yeni bir tarih bulursun. Ay sonları ve artık yıllar otomatik hesaplanır.`),R(`b2`,I`from datetime import date, timedelta

d = date(2025, 1, 31)
print(d + timedelta(days=30))
print(d - timedelta(days=31))
print(timedelta(days=2, hours=3))
print((date(2025, 12, 25) - date(2025, 10, 18)).days)`,`31 Ocak + 30 gün 2 Mart olur (Şubat 28 gün). Çıkarma geriye gider. timedelta(days=2, hours=3) "2 days, 3:00:00" olarak yazılır. 18 Ekim ile 25 Aralık arası 68 gündür.`),z(`b3`,`tip`,`date + date yazılamaz (iki tarihi toplamanın anlamı yok), ama date - date bir timedelta verir.`)],[B(`m26-l2-e1`,`100 gün sonrası`,`orta`,25,`baslangic tarihinden 100 gün sonraki tarihi timedelta ile hesaplayıp yazdır.`,`from datetime import date, timedelta
baslangic = date(2025, 1, 1)
`,`from datetime import date, timedelta
baslangic = date(2025, 1, 1)
print(baslangic + timedelta(days=100))`,[{d:`100 gün sonra`,out:`2025-04-11`},{d:`timedelta kullanılmış`,src:`timedelta\\(`}],[`baslangic + timedelta(days=100)`],[`Çıktı: 2025-04-11`])]),W(`m26`,3,e(3),`Biçimlendirme ve ayrıştırma`,14,[`strftime() ile tarihi metne çevirmek`,`strptime() ile metinden tarih okumak`],[L(`b1`,`datetime sınıfı tarih ve saati birlikte tutar: datetime(2025, 3, 15, 14, 30). strftime(biçim) tarihi istediğin biçimde metne çevirir: %d gün, %m ay, %Y yıl, %H saat, %M dakika. strptime(metin, biçim) tersini yapar: bir metni tarihe çevirir.`),R(`b2`,I`from datetime import datetime

an = datetime(2025, 3, 15, 14, 30)
print(an.strftime("%d.%m.%Y %H:%M"))
okunan = datetime.strptime("18.10.2025", "%d.%m.%Y")
print(okunan.year, okunan.month, okunan.day)
print(okunan.strftime("%Y-%m-%d"))`,`strftime("%d.%m.%Y %H:%M") "15.03.2025 14:30" üretir. strptime aynı biçim işaretleriyle "18.10.2025" metnini bir tarihe çevirir.`),z(`b3`,`warning`,`Biçim, metinle birebir uyuşmalıdır: "18.10.2025" metnini "%d/%m/%Y" ile okumaya çalışırsan ValueError alırsın. Şu anki zamanı veren datetime.now() her çalıştırmada farklıdır; bu derste sabit tarihler kullanıyoruz.`)],[B(`m26-l3-e1`,`Biçim değiştir`,`orta`,30,`"25.12.2025" metnini strptime ile tarihe çevir, sonra "2025-12-25" biçiminde (strftime ile) yazdır.`,`from datetime import datetime
metin = "25.12.2025"
`,`from datetime import datetime
metin = "25.12.2025"
tarih = datetime.strptime(metin, "%d.%m.%Y")
print(tarih.strftime("%Y-%m-%d"))`,[{d:`Çevrilmiş tarih`,out:`2025-12-25`},{d:`strptime ve strftime`,src:`strptime\\([\\s\\S]*strftime\\(`}],[`datetime.strptime(metin, "%d.%m.%Y") tarihi okur.`,`Sonra .strftime("%Y-%m-%d") ile yazdır.`],[`Çıktı: 2025-12-25`])],{quiz:U(`m26-quiz`,`Modül 26 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`30`,`29`,`31`,`1`],0,`İki tarihin farkı 30 gündür.`,`from datetime import date
print((date(2025, 1, 31) - date(2025, 1, 1)).days)`),H(`q2`,`Bu kod ne yazdırır?`,[`2025-02-03`,`2025-01-03`,`2025-02-01`,`Hata`],0,`31 Ocak + 3 gün = 3 Şubat.`,`from datetime import date, timedelta
print(date(2025, 1, 31) + timedelta(days=3))`),H(`q3`,`strftime("%d.%m.%Y") ifadesindeki %Y neyi gösterir?`,[`Dört haneli yılı`,`Ayı`,`Günü`,`Saati`],0,`%Y yılı (2025 gibi), %m ayı, %d günü gösterir.`),H(`q4`,`datetime.strptime("18/10/2025", "%d.%m.%Y") ne yapar?`,[`ValueError verir (biçim metinle uyuşmuyor)`,`Tarihi başarıyla okur`,`None döndürür`,`Tarihi bugüne çevirir`],0,`Biçimdeki ayırıcı (.) metindeki ayırıcıyla (/) uyuşmadığı için ValueError oluşur.`)]),practice:[V(`p-m26-format`,`Biçim uyuşmuyor`,`orta`,30,`Program "15.03.2025" metnini tarihe çevirmeli ama ValueError veriyor. Biçimi düzelt.`,[{type:`ValueError`,description:`Biçimde ayırıcı / yazılmış ama metinde nokta var`}],`from datetime import datetime
t = datetime.strptime("15.03.2025", "%d/%m/%Y")
print(t.year)`,`from datetime import datetime
t = datetime.strptime("15.03.2025", "%d.%m.%Y")
print(t.year)`,[{d:`Yıl`,out:`2025`}],[`Biçim, metinle aynı ayırıcıyı kullanmalı.`]),B(`p-m26-days`,`Yıl sonuna kaç gün?`,`kolay`,20,`bugun ve yilsonu tarihleri arasındaki gün sayısını yazdır.`,`from datetime import date
bugun = date(2025, 10, 18)
yilsonu = date(2025, 12, 31)
`,`from datetime import date
bugun = date(2025, 10, 18)
yilsonu = date(2025, 12, 31)
print((yilsonu - bugun).days)`,[{d:`Kalan gün`,out:`74`},{d:`days kullanılmış`,src:`\\.days`}],[`(yilsonu - bugun).days`],[`Çıktı: 74`])]})]),ul=G(27,`Düzenli İfadeler`,`re modülüyle metinde desen aramak, eşleştirmek ve değiştirmek.`,`m26-l3`,e=>[W(`m27`,1,e(1),`re ile arama`,12,[`re.search() ve re.findall() kullanmak`,`Ham metin (r"...") yazmak`],[L(`b1`,`Düzenli ifade (regular expression), metinde bir deseni tarif etmenin kısa yoludur. Python'da re modülüyle kullanılır. re.search(desen, metin) deseni arar ve bulursa bir eşleşme nesnesi, bulamazsa None döndürür; .group() bulunan metni verir. re.findall() tüm eşleşmeleri liste olarak verir. Desenleri r"..." ile (ham metin) yazarsın; ters bölüler olduğu gibi kalır. \\d bir rakamı, + "bir veya daha fazla" demektir.`),R(`b2`,I`import re

m = re.search(r"\d+", "Sipariş no: 12345")
print(m.group())
print(re.findall(r"\d+", "a1b22c333"))
print(re.search(r"\d+", "rakam yok"))`,`\\d+ bir veya daha fazla rakamdır. search ilk eşleşmeyi bulur ("12345"). findall tüm sayıları liste yapar. Eşleşme yoksa search None verir.`),z(`b3`,`warning`,`search() None döndürebilir; sonucu .group() ile kullanmadan önce if m: ile kontrol et.`)],[B(`m27-l1-e1`,`Metindeki sayıların toplamı`,`orta`,30,`metin içindeki tüm sayıları re.findall ile bul, tam sayıya çevirip toplamlarını yazdır.`,`import re
metin = "elma 3 armut 12 muz 5"
`,`import re
metin = "elma 3 armut 12 muz 5"
sayilar = re.findall(r"\\d+", metin)
print(sum(int(s) for s in sayilar))`,[{d:`Toplam 20`,out:`20`},{d:`findall kullanılmış`,src:`findall\\(`}],[`re.findall(r"\\d+", metin) rakam dizilerini metin olarak verir.`,`Her birini int() ile çevirip topla.`],[`Çıktı: 20`])]),W(`m27`,2,e(2),`Desen parçaları`,14,[`Karakter sınıflarını ve niceleyicileri bilmek`,`fullmatch() ile tüm metni denetlemek`],[L(`b1`,`Başlıca parçalar: \\d rakam, \\w harf/rakam/alt çizgi, \\s boşluk, . herhangi bir karakter, [A-Z] aralıktan bir karakter. Niceleyiciler: + bir veya daha fazla, * sıfır veya daha fazla, ? sıfır veya bir, {n} tam n kez, {n,m} n ile m arası. re.fullmatch() desenin TÜM metne uyup uymadığına bakar.`),R(`b2`,I`import re

print(bool(re.fullmatch(r"\d{4}-\d{2}", "2025-10")))
print(bool(re.fullmatch(r"\d{4}-\d{2}", "2025-1")))
print(re.findall(r"[A-Z]\w+", "Ada ve Can Ankara'da"))
print(bool(re.fullmatch(r"colou?r", "color")))`,`\\d{4}-\\d{2} dört rakam, tire, iki rakam demektir. "2025-1" ikinci kısımda tek rakam içerdiği için uymaz. [A-Z]\\w+ büyük harfle başlayan kelimeleri bulur. ? kendinden önceki karakteri isteğe bağlı yapar.`),z(`b3`,`tip`,`Deseni tek seferde yazmaya çalışma: önce basit bir desen dene, sonra parçaları ekleyerek geliştir.`)],[B(`m27-l2-e1`,`Plaka deseni`,`zor`,35,`desen değişkenine şu biçimdeki plakalara uyan bir düzenli ifade yaz: 2 rakam, boşluk, 1-3 büyük harf, boşluk, 2-4 rakam (örn. "34 ABC 123").`,`import re
desen = r""
`,`import re
desen = r"\\d{2} [A-Z]{1,3} \\d{2,4}"`,[{d:`Geçerli plaka`,append:`print(bool(re.fullmatch(desen, "34 ABC 123")))`,out:`True`},{d:`Tek rakamlı il kodu geçersiz`,append:`print(bool(re.fullmatch(desen, "3 ABC 123")))`,out:`False`},{d:`Küçük harf geçersiz`,append:`print(bool(re.fullmatch(desen, "34 abc 123")))`,out:`False`},{d:`Kısa sayı geçersiz`,append:`print(bool(re.fullmatch(desen, "06 A 1")))`,out:`False`}],[`\\d{2} tam iki rakamdır.`,`[A-Z]{1,3} bir ila üç büyük harftir.`],[`Dört örnek de doğru sınıflanır`])]),W(`m27`,3,e(3),`Gruplar, sub ve split`,14,[`Parantezle grup yakalamak`,`re.sub() ile değiştirmek`,`re.split() ile bölmek`],[L(`b1`,`Desende parantez bir grup oluşturur; eşleşmenin o kısmını ayrı almanı sağlar: m.group(1), m.groups(). re.sub(desen, yerine, metin) eşleşmeleri başka bir metinle değiştirir. re.split(desen, metin) metni desene göre böler.`),R(`b2`,I`import re

m = re.search(r"(\d{2})\.(\d{2})\.(\d{4})", "Tarih: 18.10.2025")
print(m.groups())
print(m.group(3))
print(re.sub(r"\d", "#", "Tel: 0532 123"))
print(re.sub(r"\s+", " ", "çok   fazla    boşluk"))
print(re.split(r"[,;]", "a,b;c"))`,`Üç parantez gün, ay ve yılı ayrı gruplar yapar. sub, her rakamı # ile değiştirir; ikinci sub arka arkaya gelen boşlukları tek boşluğa indirir. split hem virgülden hem noktalı virgülden böler.`),z(`b3`,`tip`,`Düzenli ifadeler güçlüdür ama zor okunur. Basit işlerde (split, replace, in) metin metotlarını tercih et.`)],[B(`m27-l3-e1`,`Telefonu maskele`,`orta`,30,`metin içindeki her rakamı re.sub ile "#" karakterine çevir ve sonucu yazdır.`,`import re
metin = "Tel: 0532 123 45 67"
`,`import re
metin = "Tel: 0532 123 45 67"
print(re.sub(r"\\d", "#", metin))`,[{d:`Maskeli metin`,out:`Tel: #### ### ## ##`},{d:`sub kullanılmış`,src:`sub\\(`}],[`re.sub(r"\\d", "#", metin)`],[`Çıktı: Tel: #### ### ## ##`])],{quiz:U(`m27-quiz`,`Modül 27 mini sınavı`,[H(`q1`,`Bu kod ne yazdırır?`,[`['1', '22']`,`['1', '2', '2']`,`['122']`,`Hata`],0,`\\d+ art arda gelen rakamları tek parça yakalar.`,`import re
print(re.findall(r"\\d+", "a1b22"))`),H(`q2`,`re.search() eşleşme bulamazsa ne döndürür?`,[`None`,`False`,`Boş metin`,`Hata fırlatır`],0,`Eşleşme yoksa search() None döndürür; bu yüzden sonucu kontrol etmek gerekir.`),H(`q3`,`r"\\d{3}" deseni neyi eşleştirir?`,[`Tam üç rakamı`,`En az üç rakamı`,`3 harfi`,`d harfini üç kez`],0,`{3} kendinden öncekinin tam 3 kez tekrarlanmasını ister; \\d bir rakamdır.`),H(`q4`,`Bu kod ne yazdırır?`,[`a b`,`a  b`,`a_b`,`Hata`],0,`\\s+ art arda gelen boşlukları tek boşlukla değiştirir.`,`import re
print(re.sub(r"\\s+", " ", "a   b"))`)]),practice:[V(`p-m27-none`,`None üzerinde group()`,`orta`,30,`Kod metinde sayı yoksa "Sayı yok" yazdırmalı ama AttributeError veriyor. Eşleşmeyi kontrol et.`,[{type:`AttributeError`,description:`search() eşleşme bulamayınca None döner; None üzerinde group() çağrılamaz`}],`import re
m = re.search(r"\\d+", "rakam yok")
print(m.group())`,`import re
m = re.search(r"\\d+", "rakam yok")
if m:
    print(m.group())
else:
    print("Sayı yok")`,[{d:`Sayı yok`,out:`Sayı yok`}],[`Önce if m: ile eşleşme var mı bak.`]),B(`p-m27-split`,`Birden çok ayırıcı`,`orta`,25,`metni hem virgülden hem noktalı virgülden re.split ile bölüp liste olarak yazdır.`,`import re
metin = "elma,armut;muz"
`,`import re
metin = "elma,armut;muz"
print(re.split(r"[,;]", metin))`,[{d:`Bölünmüş liste`,out:`['elma', 'armut', 'muz']`},{d:`split kullanılmış`,src:`split\\(`}],[`re.split(r"[,;]", metin)`],[`['elma', 'armut', 'muz']`])]})]),dl=G(28,`JSON ve CSV`,`Veriyi JSON ve CSV biçiminde okumak, yazmak ve dönüştürmek.`,`m27-l3`,e=>[W(`m28`,1,e(1),`JSON metni`,12,[`json.dumps() ile sözlüğü JSON metnine çevirmek`,`json.loads() ile JSON metnini okumak`],[L(`b1`,`JSON, programların veri alışverişinde kullandığı yaygın bir metin biçimidir; Python sözlüğüne ve listesine çok benzer. json modülünde dumps() Python verisini JSON metnine, loads() JSON metnini Python verisine çevirir. Türkçe karakterler bozulmasın diye ensure_ascii=False yaz.`),R(`b2`,I`import json

veri = {"ad": "Ece", "notlar": [80, 90], "aktif": True}
metin = json.dumps(veri, ensure_ascii=False)
print(metin)
geri = json.loads(metin)
print(geri["notlar"][1])
print(json.dumps(veri, ensure_ascii=False, indent=2))`,`dumps sözlüğü JSON metnine çevirir; True, JSON'da true olur. loads metni tekrar sözlüğe çevirir. indent=2 çıktıyı okunaklı, girintili yazar.`),z(`b3`,`tip`,`JSON'da anahtarlar her zaman metindir ve demetler listeye dönüşür. None, null olarak yazılır.`)],[B(`m28-l1-e1`,`Sözlüğü JSON yap`,`kolay`,20,`veri sözlüğünü json.dumps ile JSON metnine çevirip yazdır (ensure_ascii=False kullan).`,`import json
veri = {"ad": "Ece", "notlar": [80, 90]}
`,`import json
veri = {"ad": "Ece", "notlar": [80, 90]}
print(json.dumps(veri, ensure_ascii=False))`,[{d:`JSON metni`,out:`{"ad": "Ece", "notlar": [80, 90]}`},{d:`dumps kullanılmış`,src:`dumps\\(`}],[`json.dumps(veri, ensure_ascii=False)`],[`{"ad": "Ece", "notlar": [80, 90]}`])]),W(`m28`,2,e(2),`JSON dosyası`,12,[`json.dump() ile dosyaya yazmak`,`json.load() ile dosyadan okumak`],[L(`b1`,`Dosyaya yazmak için json.dump(veri, dosya), okumak için json.load(dosya) kullanılır (s harfi yok: dosya ile çalışırlar). Dosyalar with open(...) ile açılır. Bu platformda dosyalar tarayıcının geçici sanal dosya sisteminde durur.`),R(`b2`,I`import json

ayarlar = {"tema": "koyu", "yazi": 16}
with open("ayarlar.json", "w") as f:
    json.dump(ayarlar, f)

with open("ayarlar.json", "r") as f:
    okunan = json.load(f)
print(okunan["tema"])
print(okunan == ayarlar)`,`Önce sözlük dosyaya yazıldı, sonra aynı dosyadan okundu. Okunan veri orijinalle aynı olduğu için karşılaştırma True verir.`),z(`b3`,`warning`,`dumps/loads metinle, dump/load dosyayla çalışır. Bozuk bir JSON dosyası json.JSONDecodeError (ValueError) verir; try / except ile yakalayabilirsin.`)],[B(`m28-l2-e1`,`Yaz ve oku`,`orta`,30,`kisi sözlüğünü kisi.json dosyasına json.dump ile yaz, sonra aynı dosyayı json.load ile oku ve "ad" değerini yazdır.`,`import json
kisi = {"ad": "Ada", "yas": 20}
`,`import json
kisi = {"ad": "Ada", "yas": 20}
with open("kisi.json", "w") as f:
    json.dump(kisi, f)
with open("kisi.json", "r") as f:
    veri = json.load(f)
print(veri["ad"])`,[{d:`Okunan ad`,out:`Ada`},{d:`dump ve load`,src:`dump\\([\\s\\S]*load\\(`}],[`Önce "w" kipiyle aç ve json.dump(kisi, f) yaz.`,`Sonra "r" kipiyle aç ve json.load(f) ile oku.`],[`Çıktı: Ada`])]),W(`m28`,3,e(3),`CSV verisi`,14,[`csv.DictReader ile satırları sözlük olarak okumak`,`csv.writer ile yazmak`],[L(`b1`,`CSV, tablo verisini virgülle ayrılmış satırlar olarak saklar; ilk satır genellikle başlıktır. csv.DictReader her satırı başlık adlarıyla bir sözlük olarak verir. Okunan her değer metindir; sayı gerekiyorsa int() ile çevir. Bu derste dosya yerine io.StringIO ile bellekte bir metni dosya gibi kullanıyoruz.`),R(`b2`,I`import csv
import io

veri = "ad,not\nAda,80\nCan,60\nEce,100"
okuyucu = csv.DictReader(io.StringIO(veri))
notlar = []
for satir in okuyucu:
    print(satir["ad"], satir["not"])
    notlar.append(int(satir["not"]))
print(sum(notlar) / len(notlar))

cikti = io.StringIO()
yazici = csv.writer(cikti)
yazici.writerow(["ad", "not"])
yazici.writerow(["Ali", 75])
print(cikti.getvalue().strip())`,`DictReader başlık satırındaki adları anahtar yapar. Notlar metin olarak gelir, bu yüzden int() ile çevrildi. csv.writer ise satırları virgülle ayrılmış metne yazar.`),z(`b3`,`tip`,`Alanlar virgül içeriyorsa csv modülü onları otomatik tırnağa alır; bu yüzden metni kendin split(",") ile bölmektense csv modülünü kullan.`)],[B(`m28-l3-e1`,`Not ortalaması`,`orta`,30,`CSV metnindeki "not" sütununu DictReader ile oku ve notların ortalamasını yazdır.`,`import csv
import io
veri = "ad,not\\nAda,80\\nCan,60"
`,`import csv
import io
veri = "ad,not\\nAda,80\\nCan,60"
toplam = 0
satirlar = list(csv.DictReader(io.StringIO(veri)))
for s in satirlar:
    toplam = toplam + int(s["not"])
print(toplam / len(satirlar))`,[{d:`Ortalama 70.0`,out:`70.0`},{d:`DictReader kullanılmış`,src:`DictReader\\(`}],[`list(csv.DictReader(io.StringIO(veri))) satırların listesidir.`,`int(s["not"]) metni sayıya çevirir.`],[`Çıktı: 70.0`])],{quiz:U(`m28-quiz`,`Modül 28 mini sınavı`,[H(`q1`,`Python sözlüğünü JSON metnine çeviren fonksiyon hangisidir?`,[`json.dumps()`,`json.loads()`,`json.load()`,`json.read()`],0,`dumps() Python verisini JSON metnine çevirir; loads() tersini yapar.`),H(`q2`,`Bu kod ne yazdırır?`,[`20`,`"20"`,`yas`,`Hata`],0,`loads JSON metnini sözlüğe çevirir; değer sayı olarak kalır.`,`import json
print(json.loads('{"yas": 20}')["yas"])`),H(`q3`,`csv.DictReader ile okunan "80" değeri hangi türdedir?`,[`Metin (str)`,`Tam sayı (int)`,`Ondalıklı sayı (float)`,`Bool`],0,`CSV'den okunan her değer metindir; sayı için int() ile çevirmek gerekir.`),H(`q4`,`JSON dosyasına yazmak için hangisi kullanılır?`,[`json.dump(veri, dosya)`,`json.dumps(veri, dosya)`,`json.write(veri)`,`json.save(veri)`],0,`dump dosyaya yazar; dumps ise metin döndürür.`)]),practice:[V(`p-m28-str`,`Notlar metin olarak toplanıyor`,`orta`,30,`Kod notların toplamını (140) yazdırmalı ama "8060" gibi bir şey yazdırıyor. Hatayı düzelt.`,[{type:`Mantık hatası`,description:`CSV'den okunan değerler metindir; toplamadan önce sayıya çevrilmeli`}],`import csv, io
satirlar = csv.DictReader(io.StringIO("ad,not\\nAda,80\\nCan,60"))
toplam = ""
for s in satirlar:
    toplam = toplam + s["not"]
print(toplam)`,`import csv, io
satirlar = csv.DictReader(io.StringIO("ad,not\\nAda,80\\nCan,60"))
toplam = 0
for s in satirlar:
    toplam = toplam + int(s["not"])
print(toplam)`,[{d:`Toplam 140`,out:`140`}],[`Toplamı 0 ile başlat ve int() ile çevir.`]),B(`p-m28-loads`,`JSON'dan değer al`,`kolay`,20,`metin içindeki JSON'u json.loads ile oku ve "sehir" değerini yazdır.`,`import json
metin = '{"ad": "Ece", "sehir": "İzmir"}'
`,`import json
metin = '{"ad": "Ece", "sehir": "İzmir"}'
print(json.loads(metin)["sehir"])`,[{d:`Şehir`,out:`İzmir`},{d:`loads kullanılmış`,src:`loads\\(`}],[`json.loads(metin)["sehir"]`],[`Çıktı: İzmir`])]})]),fl=G(29,`OOP II: Özel Metotlar ve property`,`__str__, __eq__, __add__, @property, sınıf ve statik metotlarla sınıflarını daha doğal hâle getirmek.`,`m28-l3`,e=>[W(`m29`,1,e(1),`__str__ ve __repr__`,12,[`__str__ ile nesnenin yazdırılışını belirlemek`,`__repr__ ile geliştirici gösterimi yazmak`],[L(`b1`,`Bir nesneyi print() ile yazdırınca varsayılan olarak anlamsız bir adres görürsün. Bunu düzeltmek için sınıfa __str__ metodu yazarsın: print() ve str() onu çağırır. __repr__ ise geliştiriciye yönelik gösterimdir (listeleri yazdırırken ve hata ayıklarken görünür); ideal olarak nesneyi yeniden oluşturan kodu gösterir.`),R(`b2`,I`class Kitap:
    def __init__(self, ad, yazar):
        self.ad = ad
        self.yazar = yazar

    def __str__(self):
        return f"{self.ad} - {self.yazar}"

    def __repr__(self):
        return f"Kitap({self.ad!r}, {self.yazar!r})"

k = Kitap("Sefiller", "Hugo")
print(k)
print([k])
print(repr(k))`,`print(k) __str__ metodunu çağırır. Liste içindeki nesneler ise __repr__ ile gösterilir. {self.ad!r} değeri tırnaklı (repr) yazar.`),z(`b3`,`tip`,`Yalnızca birini yazacaksan __repr__ yaz: __str__ yoksa Python onu kullanır.`)],[B(`m29-l1-e1`,`Noktayı güzel yazdır`,`kolay`,20,`Nokta sınıfına __str__ ekle: print(Nokta(3, 4)) çıktısı "(3, 4)" olsun.`,`class Nokta:
    def __init__(self, x, y):
        self.x = x
        self.y = y
`,`class Nokta:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"`,[{d:`İlk nokta`,append:`print(Nokta(3, 4))`,out:`(3, 4)`},{d:`Başka nokta`,append:`print(Nokta(-1, 0))`,out:`(-1, 0)`},{d:`__str__ tanımlı`,src:`__str__`}],[`def __str__(self): ile başla.`,`return f"({self.x}, {self.y})"`],[`(3, 4)`,`(-1, 0)`])]),W(`m29`,2,e(2),`İşlem ve karşılaştırma metotları`,14,[`__add__, __eq__, __lt__ ve __len__ yazmak`,`Nesneleri +, == ve < ile kullanmak`],[L(`b1`,`Python'da a + b aslında a.__add__(b) çağrısıdır. Kendi sınıfına bu özel metotları (çift alt çizgili, "dunder") yazarak nesnelerin +, ==, < gibi işleçlerle ve len() gibi fonksiyonlarla çalışmasını sağlarsın: __add__ toplama, __eq__ eşitlik, __lt__ küçüktür, __len__ uzunluk.`),R(`b2`,I`class Para:
    def __init__(self, tutar):
        self.tutar = tutar

    def __add__(self, diger):
        return Para(self.tutar + diger.tutar)

    def __eq__(self, diger):
        return self.tutar == diger.tutar

    def __lt__(self, diger):
        return self.tutar < diger.tutar

    def __str__(self):
        return f"{self.tutar} TL"

print(Para(10) + Para(5))
print(Para(7) == Para(7))
print(Para(3) < Para(4))
print(sorted([Para(30), Para(10), Para(20)])[0])`,`+ __add__ ile yeni bir Para üretir. == ve < karşılaştırma metotlarını çağırır. sorted() elemanları karşılaştırmak için __lt__ kullanır; bu yüzden Para nesneleri sıralanabilir.`),z(`b3`,`warning`,`Özel metotlar yeni bir nesne döndürmelidir; __add__ içinde kendini (self) değiştirip döndürmek yanlış sürprizler yaratır.`)],[B(`m29-l2-e1`,`Vektör toplama`,`orta`,30,`Vektor sınıfına __add__ ekle: Vektor(1, 2) + Vektor(3, 4) yeni bir Vektor(4, 6) versin. (__str__ hazır.)`,`class Vektor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"
`,`class Vektor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, diger):
        return Vektor(self.x + diger.x, self.y + diger.y)

    def __str__(self):
        return f"({self.x}, {self.y})"`,[{d:`(1,2) + (3,4)`,append:`print(Vektor(1, 2) + Vektor(3, 4))`,out:`(4, 6)`},{d:`Negatif bileşen`,append:`print(Vektor(5, 5) + Vektor(-2, 1))`,out:`(3, 6)`}],[`def __add__(self, diger): yeni bir Vektor döndürmeli.`],[`(4, 6)`,`(3, 6)`])]),W(`m29`,3,e(3),`@property, @classmethod, @staticmethod`,14,[`@property ile metodu özellik gibi kullanmak`,`Sınıf ve statik metotları ayırt etmek`],[L(`b1`,`@property bir metodu parantezsiz, bir özellik gibi okunabilir yapar; hesaplanan değerler için idealdir. @classmethod ilk parametre olarak nesne yerine sınıfın kendisini (cls) alır ve genellikle alternatif kurucu olarak kullanılır. @staticmethod ise ne nesneye ne sınıfa ihtiyaç duyan, sınıfın içine konmuş sıradan bir fonksiyondur.`),R(`b2`,I`class Daire:
    def __init__(self, yaricap):
        self.yaricap = yaricap

    @property
    def cap(self):
        return self.yaricap * 2

    @classmethod
    def capindan(cls, cap):
        return cls(cap / 2)

    @staticmethod
    def gecerli_mi(yaricap):
        return yaricap > 0

d = Daire(3)
print(d.cap)
print(Daire.capindan(10).yaricap)
print(Daire.gecerli_mi(-1))`,`d.cap parantezsiz okunur çünkü @property. capindan() bir sınıf metodudur: çapı yarıçapa çevirip yeni bir Daire üretir. gecerli_mi() nesneye ihtiyaç duymayan yardımcı bir fonksiyondur.`),z(`b3`,`tip`,`Sadece okunabilir özellik için @property yeterlidir. Değer atanırken kontrol gerekiyorsa @özellik.setter ile bir "atama" metodu da yazabilirsin.`)],[B(`m29-l3-e1`,`Daire alanı`,`orta`,25,`Daire sınıfına alan adında bir @property ekle: 3.14 * yaricap ** 2 değerini versin. Parantezsiz okunacak: Daire(2).alan.`,`class Daire:
    def __init__(self, yaricap):
        self.yaricap = yaricap
`,`class Daire:
    def __init__(self, yaricap):
        self.yaricap = yaricap

    @property
    def alan(self):
        return 3.14 * self.yaricap ** 2`,[{d:`Yarıçap 2`,append:`print(Daire(2).alan)`,out:`12.56`},{d:`Yarıçap 1`,append:`print(Daire(1).alan)`,out:`3.14`},{d:`@property kullanılmış`,src:`@property`}],[`@property satırını metodun üstüne yaz.`,`return 3.14 * self.yaricap ** 2`],[`Daire(2).alan 12.56`,`Daire(1).alan 3.14`])],{quiz:U(`m29-quiz`,`Modül 29 mini sınavı`,[H(`q1`,`print(nesne) hangi özel metodu çağırır?`,[`__str__`,`__init__`,`__print__`,`__repr__ yoksa hata verir`],0,`print() ve str() nesnenin __str__ metodunu kullanır.`),H(`q2`,`a + b ifadesi arka planda hangi çağrıya dönüşür?`,[`a.__add__(b)`,`a.add(b)`,`b.__add__(a)`,`__plus__(a, b)`],0,`+ işleci sol nesnenin __add__ metodunu çağırır.`),H(`q3`,`@property ile işaretlenen bir metot nasıl kullanılır?`,[`Parantezsiz, bir özellik gibi: nesne.alan`,`Parantezli: nesne.alan()`,`Yalnızca sınıf adıyla: Sinif.alan`,`Yalnızca dışarıdan değer atayarak`],0,`@property metodu özellik gibi okunabilir hâle getirir.`),H(`q4`,`@classmethod ile yazılan metodun ilk parametresi nedir?`,[`cls (sınıfın kendisi)`,`self (nesne)`,`Hiçbir şey almaz`,`Her zaman bir metin`],0,`Sınıf metotları nesne yerine sınıfı (cls) alır.`)]),practice:[V(`p-m29-str`,`Nesne adres olarak yazılıyor`,`kolay`,20,`print(k) çıktısı "Sefiller - Hugo" olmalı ama anlamsız bir adres yazılıyor. Hatayı bul ve düzelt.`,[{type:`Mantık hatası`,description:`Metot adı yanlış: Python __str__ arar, __string__ değil`}],`class Kitap:
    def __init__(self, ad, yazar):
        self.ad = ad
        self.yazar = yazar
    def __string__(self):
        return f"{self.ad} - {self.yazar}"
k = Kitap("Sefiller", "Hugo")
print(k)`,`class Kitap:
    def __init__(self, ad, yazar):
        self.ad = ad
        self.yazar = yazar
    def __str__(self):
        return f"{self.ad} - {self.yazar}"
k = Kitap("Sefiller", "Hugo")
print(k)`,[{d:`Çıktı`,out:`Sefiller - Hugo`}],[`Özel metodun adı tam olarak __str__ olmalı.`]),B(`p-m29-eq`,`Eşitlik karşılaştır`,`orta`,25,`Kisi sınıfına __eq__ ekle: ad ve yaş aynıysa iki kişi eşit sayılsın.`,`class Kisi:
    def __init__(self, ad, yas):
        self.ad = ad
        self.yas = yas
`,`class Kisi:
    def __init__(self, ad, yas):
        self.ad = ad
        self.yas = yas

    def __eq__(self, diger):
        return self.ad == diger.ad and self.yas == diger.yas`,[{d:`Aynı kişi`,append:`print(Kisi("Ada", 20) == Kisi("Ada", 20))`,out:`True`},{d:`Farklı yaş`,append:`print(Kisi("Ada", 20) == Kisi("Ada", 21))`,out:`False`}],[`__eq__ True veya False döndürmeli.`],[`Aynı kişi True`,`Farklı yaş False`])]})]),pl=G(30,`OOP III: Çok Biçimlilik ve Soyut Sınıflar`,`super(), çok biçimlilik, kompozisyon ve abc ile soyut sınıflar.`,`m29-l3`,e=>[W(`m30`,1,e(1),`super() ve kalıtım zinciri`,12,[`Üst sınıfın __init__ metodunu super() ile çağırmak`,`Alt sınıfa yeni özellik eklemek`],[L(`b1`,`Alt sınıf (child), üst sınıfın (parent) özelliklerini devralır. Ama alt sınıfta kendi __init__ metodunu yazarsan üst sınıfınki çalışmaz. Üst sınıfın kurulumunu da yapmak için super().__init__(...) çağır; sonra alt sınıfa özgü özellikleri ekle.`),R(`b2`,I`class Hayvan:
    def __init__(self, ad):
        self.ad = ad

    def tanit(self):
        return f"Ben {self.ad}"

class Kopek(Hayvan):
    def __init__(self, ad, cins):
        super().__init__(ad)
        self.cins = cins

    def tanit(self):
        return super().tanit() + f", bir {self.cins}"

k = Kopek("Karabaş", "çoban köpeği")
print(k.tanit())
print(k.ad, k.cins)`,`super().__init__(ad) üst sınıfın kurulumunu yapar (ad atanır). Kopek ek olarak cins özelliğini tutar. super().tanit() üst sınıfın metodunu çağırıp sonucuna ekleme yapmamızı sağlar.`),z(`b3`,`warning`,`super().__init__() çağrısını unutursan üst sınıfın özellikleri oluşmaz ve AttributeError alırsın.`)],[B(`m30-l1-e1`,`Öğrenci sınıfı`,`orta`,25,`Ogrenci sınıfı Kisi sınıfından türesin. __init__(self, ad, no) içinde super().__init__(ad) çağır ve no özelliğini de ata.`,`class Kisi:
    def __init__(self, ad):
        self.ad = ad

class Ogrenci(Kisi):
    pass
`,`class Kisi:
    def __init__(self, ad):
        self.ad = ad

class Ogrenci(Kisi):
    def __init__(self, ad, no):
        super().__init__(ad)
        self.no = no`,[{d:`Ad ve numara`,append:`o = Ogrenci("Ada", 7)
print(o.ad, o.no)`,out:`Ada 7`},{d:`super kullanılmış`,src:`super\\(\\)\\.__init__`}],[`Ogrenci.__init__ iki parametre alsın: ad ve no.`,`super().__init__(ad) ile ad atansın.`],[`Ada 7`])]),W(`m30`,2,e(2),`Çok biçimlilik ve kompozisyon`,14,[`Aynı metot adıyla farklı davranışlar yazmak`,`Kompozisyonla nesneyi parça olarak kullanmak`],[L(`b1`,`Çok biçimlilik (polymorphism), farklı sınıfların aynı adlı metoda farklı cevap vermesidir. Kodu yazan kişi nesnenin hangi sınıftan olduğunu bilmeden metodu çağırır. Kompozisyon ise "bir şey başka bir şeye sahiptir" ilişkisidir: Araba bir Motor'a sahiptir; Motor nesnesi Araba'nın bir özelliğidir (kalıtım "bir şey başka bir şeydir" der).`),R(`b2`,I`class Kare:
    def __init__(self, kenar):
        self.kenar = kenar
    def alan(self):
        return self.kenar ** 2

class Dikdortgen:
    def __init__(self, en, boy):
        self.en = en
        self.boy = boy
    def alan(self):
        return self.en * self.boy

for sekil in [Kare(3), Dikdortgen(2, 5)]:
    print(sekil.alan())

class Motor:
    def calistir(self):
        return "Brrr"

class Araba:
    def __init__(self):
        self.motor = Motor()
    def calistir(self):
        return self.motor.calistir()

print(Araba().calistir())`,`Döngü, şeklin Kare mi Dikdörtgen mi olduğunu bilmeden alan() çağırır: bu çok biçimliliktir. Araba, Motor nesnesini bir özellik olarak taşır (kompozisyon) ve işi ona yaptırır.`),z(`b3`,`tip`,`Kalıtım mı kompozisyon mu? Şüphedeysen kompozisyonu seç: daha esnektir ve sınıflar birbirine daha az bağımlı kalır.`)],[B(`m30-l2-e1`,`Şekillerin alanı`,`orta`,30,`Kare(kenar) ve Dikdortgen(en, boy) sınıflarını yaz; ikisinin de alan() metodu olsun.`,`class Kare:
    pass

class Dikdortgen:
    pass
`,`class Kare:
    def __init__(self, kenar):
        self.kenar = kenar
    def alan(self):
        return self.kenar ** 2

class Dikdortgen:
    def __init__(self, en, boy):
        self.en = en
        self.boy = boy
    def alan(self):
        return self.en * self.boy`,[{d:`İki şekil`,append:`for s in [Kare(3), Dikdortgen(2, 5)]:
    print(s.alan())`,out:`9
10`},{d:`Başka ölçüler`,append:`print(Kare(4).alan(), Dikdortgen(1, 7).alan())`,out:`16 7`}],[`Her sınıfa __init__ ve alan() yaz.`],[`Kare(3) 9`,`Dikdörtgen(2, 5) 10`])]),W(`m30`,3,e(3),`Soyut sınıflar (abc)`,14,[`abc ile soyut sınıf tanımlamak`,`Alt sınıfları metot yazmaya zorlamak`],[L(`b1`,`Soyut sınıf (abstract class), yalnızca şablon olarak kullanılan, doğrudan nesnesi oluşturulamayan sınıftır. abc modülünden ABC'yi miras alırsın ve alt sınıfların yazması zorunlu metotları @abstractmethod ile işaretlersin. Bir alt sınıf bu metotları yazmazsa nesnesi oluşturulamaz (TypeError).`),R(`b2`,I`from abc import ABC, abstractmethod

class Hayvan(ABC):
    @abstractmethod
    def ses(self):
        pass

class Kedi(Hayvan):
    def ses(self):
        return "Miyav"

class Sessiz(Hayvan):
    pass

print(Kedi().ses())
try:
    Hayvan()
except TypeError:
    print("Hayvan doğrudan oluşturulamaz")
try:
    Sessiz()
except TypeError:
    print("Sessiz ses() yazmadı")`,`Kedi ses() metodunu yazdığı için nesnesi oluşturulabilir. Hayvan soyut olduğu için doğrudan nesne olmaz. Sessiz ise zorunlu metodu yazmadığı için nesne oluşturulamaz.`),z(`b3`,`tip`,`Soyut sınıf bir "sözleşme"dir: "benden türeyen herkes şu metotları yazmalı". Takım çalışmasında beklentileri netleştirir.`)],[B(`m30-l3-e1`,`Zorunlu metodu yaz`,`orta`,30,`Hayvan soyut sınıfı verilmiş. Kedi sınıfı Hayvan'dan türesin ve ses() metodu "Miyav" döndürsün.`,`from abc import ABC, abstractmethod

class Hayvan(ABC):
    @abstractmethod
    def ses(self):
        pass

class Kedi(Hayvan):
    pass
`,`from abc import ABC, abstractmethod

class Hayvan(ABC):
    @abstractmethod
    def ses(self):
        pass

class Kedi(Hayvan):
    def ses(self):
        return "Miyav"`,[{d:`Kedi sesi`,append:`print(Kedi().ses())`,out:`Miyav`},{d:`Kedi bir Hayvan`,append:`print(isinstance(Kedi(), Hayvan))`,out:`True`}],[`Kedi sınıfının içine def ses(self): yaz.`],[`Miyav`,`isinstance True`])],{quiz:U(`m30-quiz`,`Modül 30 mini sınavı`,[H(`q1`,`Alt sınıfın __init__ metodunda üst sınıfın kurulumunu da çalıştırmak için ne yazılır?`,[`super().__init__(...)`,`parent.__init__()`,`self.super()`,`Hiçbir şey gerekmez`],0,`super().__init__(...) üst sınıfın __init__ metodunu çağırır.`),H(`q2`,`Çok biçimlilik (polymorphism) nedir?`,[`Farklı sınıfların aynı adlı metoda farklı cevap vermesi`,`Bir sınıfın birden çok üst sınıftan türemesi`,`Bir metodun birden çok parametre alması`,`Nesnelerin otomatik silinmesi`],0,`Aynı metot adı farklı sınıflarda farklı davranabilir.`),H(`q3`,`"Araba bir Motor'a sahiptir" ilişkisi hangi kavramla kurulur?`,[`Kompozisyon`,`Kalıtım`,`Soyutlama`,`Çok biçimlilik`],0,`"Sahiptir" ilişkisi için nesne bir özellik olarak taşınır: kompozisyon.`),H(`q4`,`Soyut metodu yazmayan bir alt sınıftan nesne oluşturulursa ne olur?`,[`TypeError verir`,`Sessizce çalışır`,`None döndürür`,`Üst sınıf metodu çalışır`],0,`Soyut metotlar yazılmadıysa sınıf soyut kalır ve nesne oluşturulamaz (TypeError).`)]),practice:[V(`p-m30-super`,`Üst sınıf kurulmuyor`,`orta`,30,`Kod "Karabaş" yazdırmalı ama AttributeError veriyor. Üst sınıfın kurulumunu unutmuşuz; düzelt.`,[{type:`AttributeError`,description:`Alt sınıfın __init__ metodu super().__init__() çağırmadığı için ad özelliği oluşmuyor`}],`class Hayvan:
    def __init__(self, ad):
        self.ad = ad
class Kopek(Hayvan):
    def __init__(self, ad, cins):
        self.cins = cins
k = Kopek("Karabaş", "çoban")
print(k.ad)`,`class Hayvan:
    def __init__(self, ad):
        self.ad = ad
class Kopek(Hayvan):
    def __init__(self, ad, cins):
        super().__init__(ad)
        self.cins = cins
k = Kopek("Karabaş", "çoban")
print(k.ad)`,[{d:`Çıktı`,out:`Karabaş`}],[`__init__ içinde super().__init__(ad) çağır.`]),B(`p-m30-poly`,`Sesleri çıkar`,`orta`,25,`Kedi ve Kopek sınıflarının ses() metodu sırasıyla "Miyav" ve "Hav" döndürsün.`,`class Kedi:
    pass

class Kopek:
    pass
`,`class Kedi:
    def ses(self):
        return "Miyav"

class Kopek:
    def ses(self):
        return "Hav"`,[{d:`İki hayvan`,append:`for h in [Kedi(), Kopek()]:
    print(h.ses())`,out:`Miyav
Hav`}],[`Her sınıfa ses() yaz.`],[`Miyav`,`Hav`])]})]),ml=G(31,`dataclass, enum ve Tip İpuçları`,`Veri sınıfları, sabit değer kümeleri (enum) ve tip ipuçları (typing).`,`m30-l3`,e=>[W(`m31`,1,e(1),`dataclass`,12,[`@dataclass ile veri sınıfı yazmak`,`Varsayılan değer vermek`],[L(`b1`,`Çoğu sınıf yalnızca veri tutar ve __init__, __repr__, __eq__ gibi sıkıcı metotları elle yazmayı gerektirir. @dataclass bunları senin için otomatik üretir: alanları sınıf gövdesine "ad: tür" biçiminde yazarsın. Alanlara = ile varsayılan değer verebilirsin.`),R(`b2`,I`from dataclasses import dataclass

@dataclass
class Urun:
    ad: str
    fiyat: float
    stok: int = 0

u = Urun("Kalem", 5.5)
print(u)
print(u == Urun("Kalem", 5.5))
u.stok = 10
print(u.stok)`,`@dataclass __init__ (ad, fiyat, stok alır), __repr__ (güzel yazdırma) ve __eq__ (alanları karşılaştırma) metotlarını otomatik yazdı. stok için varsayılan 0 verildi.`),z(`b3`,`warning`,`Varsayılan değerli alanlar, varsayılansız alanlardan sonra gelmelidir. Liste gibi değiştirilebilir varsayılanlar için field(default_factory=list) kullanılır.`)],[B(`m31-l1-e1`,`Ürün veri sınıfı`,`kolay`,20,`Urun adında bir dataclass yaz: ad (str), fiyat (float) ve stok (int, varsayılan 0) alanları olsun.`,`from dataclasses import dataclass

class Urun:
    pass
`,`from dataclasses import dataclass

@dataclass
class Urun:
    ad: str
    fiyat: float
    stok: int = 0`,[{d:`Varsayılan stok`,append:`print(Urun("Kalem", 5.5))`,out:`Urun(ad='Kalem', fiyat=5.5, stok=0)`},{d:`Stok verilmiş`,append:`print(Urun("Defter", 12.0, 3).stok)`,out:`3`},{d:`dataclass kullanılmış`,src:`@dataclass`}],[`Sınıfın üstüne @dataclass koy.`,`stok: int = 0`],[`Urun(ad='Kalem', fiyat=5.5, stok=0)`,`stok 3`])]),W(`m31`,2,e(2),`enum`,12,[`Sabit değer kümesi tanımlamak`,`name ve value özelliklerini kullanmak`],[L(`b1`,`Enum (sayım), birbiriyle ilişkili sabit değerlere anlamlı isimler vermek içindir: haftanın günleri, zorluk seviyeleri, durumlar. Enum sınıfından türetirsin ve her üyeye bir değer atarsın. Üyenin adına .name, değerine .value ile ulaşılır. Aynı enum'dan yalnızca tanımlı değerler seçilebilir; yazım hatası Python'da hemen hata verir.`),R(`b2`,I`from enum import Enum

class Renk(Enum):
    KIRMIZI = 1
    MAVI = 2
    YESIL = 3

r = Renk.MAVI
print(r)
print(r.name, r.value)
print(Renk(3))
for renk in Renk:
    print(renk.name)
print(r == Renk.MAVI)`,`Renk.MAVI bir enum üyesidir. .name "MAVI", .value 2 verir. Renk(3) değerden üyeyi bulur. for döngüsü tüm üyeleri dolaşır.`),z(`b3`,`tip`,`Sihirli sayılar ("durum == 2") yerine enum kullan: kod kendini açıklar (durum == Durum.BEKLIYOR).`)],[B(`m31-l2-e1`,`Zorluk seviyesi`,`orta`,25,`Seviye adlı bir Enum yaz: KOLAY = 1, ORTA = 2, ZOR = 3.`,`from enum import Enum
`,`from enum import Enum

class Seviye(Enum):
    KOLAY = 1
    ORTA = 2
    ZOR = 3`,[{d:`Ad ve değer`,append:`print(Seviye.ORTA.name, Seviye.ORTA.value)`,out:`ORTA 2`},{d:`Değerden üye`,append:`print(Seviye(3).name)`,out:`ZOR`},{d:`Enum kullanılmış`,src:`Enum\\)`}],[`class Seviye(Enum): ile başla.`],[`ORTA 2`,`ZOR`])]),W(`m31`,3,e(3),`Tip ipuçları (typing)`,14,[`Parametre ve dönüş türlerini yazmak`,`Tip ipuçlarının zorlayıcı olmadığını bilmek`],[L(`b1`,`Tip ipucu (type hint), bir değişkenin ya da fonksiyonun hangi türde değer beklediğini belirtir: parametre: tür ve fonksiyon sonuna -> dönüş_türü. Python bunları çalışırken zorlamaz; amaç kodu okuyan insana ve editörlere/araçlara bilgi vermektir. Koleksiyonlar için list[int], dict[str, int] gibi yazılır.`),R(`b2`,I`def topla(a: int, b: int) -> int:
    return a + b

def selamla(ad: str, tekrar: int = 1) -> str:
    return ("Merhaba " + ad + "! ") * tekrar

print(topla(2, 3))
print(selamla("Ada"))
print(topla("a", "b"))

notlar: list[int] = [80, 90]
ogrenci: dict[str, int] = {"Ada": 80}
print(topla.__annotations__)`,`Fonksiyonlar tip ipuçlarıyla da aynen çalışır. topla("a", "b") tip ipucuna aykırı olsa da Python hata vermez ve "ab" üretir; ipuçlarını kontrol eden ayrı araçlar (mypy gibi) vardır. __annotations__ ipuçlarını bir sözlük olarak verir.`),z(`b3`,`warning`,`Tip ipucu bir zorlama değildir: topla("a", "b") hatasız çalışır. Beklenmeyen türleri yakalamak istersen kodunda ayrıca kontrol et.`)],[B(`m31-l3-e1`,`Tip ipuçlu fonksiyon`,`kolay`,20,`carp(a, b) fonksiyonunu yaz: iki sayıyı çarpıp döndürsün. Parametrelere int, dönüş değerine de int tip ipucu ekle.`,`def carp(a, b):
    pass
`,`def carp(a: int, b: int) -> int:
    return a * b`,[{d:`3 x 4`,append:`print(carp(3, 4))`,out:`12`},{d:`Tip ipuçları yazılmış`,src:`a\\s*:\\s*int[\\s\\S]*->\\s*int`}],[`def carp(a: int, b: int) -> int:`],[`carp(3, 4) 12`,`Tip ipuçları var`])],{quiz:U(`m31-quiz`,`Modül 31 mini sınavı`,[H(`q1`,`@dataclass bir sınıf için neyi otomatik üretir?`,[`__init__, __repr__ ve __eq__ gibi metotları`,`Yalnızca dosyaya yazma metodunu`,`Hiçbir şeyi`,`Sınıfın alt sınıflarını`],0,`dataclass sıkıcı kodları (kurucu, yazdırma, karşılaştırma) senin için yazar.`),H(`q2`,`Bu kod ne yazdırır?`,[`ZOR 3`,`ORTA 2`,`3 ZOR`,`Hata`],0,`name üyenin adı, value değeridir.`,`from enum import Enum
class Seviye(Enum):
    KOLAY = 1
    ZOR = 3
print(Seviye.ZOR.name, Seviye.ZOR.value)`),H(`q3`,`def topla(a: int, b: int) -> int: fonksiyonuna topla("a", "b") yazılırsa Python ne yapar?`,[`Hata vermez, çalıştırır ("ab" üretir)`,`TypeError verir`,`SyntaxError verir`,`Metni otomatik sayıya çevirir`],0,`Tip ipuçları çalışma anında zorlanmaz; yalnızca bilgi verir.`),H(`q4`,`Enum kullanmanın başlıca yararı nedir?`,[`Sihirli sayılar yerine anlamlı isimler kullanmak`,`Programı hızlandırmak`,`Daha az bellek kullanmak`,`Otomatik hata düzeltmek`],0,`Enum kodu okunaklı yapar: durum == 2 yerine durum == Durum.BEKLIYOR.`)]),practice:[V(`p-m31-default`,`Varsayılan alan sırası`,`orta`,30,`Kod hata veriyor: varsayılan değerli alan, varsayılansız alandan önce yazılmış. Sırayı düzelt.`,[{type:`TypeError`,description:`dataclass'ta varsayılan değerli alandan sonra varsayılansız alan gelemez`}],`from dataclasses import dataclass
@dataclass
class Kisi:
    yas: int = 18
    ad: str
print(Kisi("Ada"))`,`from dataclasses import dataclass
@dataclass
class Kisi:
    ad: str
    yas: int = 18
print(Kisi("Ada"))`,[{d:`Çıktı`,out:`Kisi(ad='Ada', yas=18)`}],[`Varsayılansız alanı (ad) başa al.`]),B(`p-m31-enum`,`Gün enum'u`,`orta`,25,`Gun adlı bir Enum yaz: PAZARTESI = 1, SALI = 2. Sonra üyelerin adlarını döngüyle yazdıracağız.`,`from enum import Enum
`,`from enum import Enum

class Gun(Enum):
    PAZARTESI = 1
    SALI = 2`,[{d:`Üye adları`,append:`for g in Gun:
    print(g.name)`,out:`PAZARTESI
SALI`}],[`class Gun(Enum): kullan.`],[`PAZARTESI`,`SALI`])]})]),hl=G(32,`İstisnalar II ve Hata Ayıklama`,`raise, özel hata sınıfları, assert ve hata ayıklama teknikleri.`,`m31-l3`,e=>[W(`m32`,1,e(1),`raise ve özel hata sınıfları`,14,[`raise ile hata fırlatmak`,`Kendi hata sınıfını yazmak`,`except ... as e ile hata mesajını okumak`],[L(`b1`,`Python'un hatalarını yakalamayı öğrendin; kendin de hata fırlatabilirsin: raise HataTürü("mesaj"). Bu, bir fonksiyonun geçersiz girdiyi sessizce kabul etmek yerine sorunu bildirmesini sağlar. except HataTürü as e ile hata nesnesini yakalar, str(e) veya doğrudan print(e) ile mesajı okursun. Kendi hata sınıfını Exception'dan türeterek yazabilirsin.`),R(`b2`,I`def yas_kontrol(yas):
    if yas < 0:
        raise ValueError("Yaş negatif olamaz")
    return yas

try:
    yas_kontrol(-5)
except ValueError as e:
    print("Hata:", e)

class YetersizBakiye(Exception):
    pass

def cek(bakiye, tutar):
    if tutar > bakiye:
        raise YetersizBakiye(f"{tutar - bakiye} TL eksik")
    return bakiye - tutar

try:
    cek(100, 150)
except YetersizBakiye as e:
    print(e)`,`raise ValueError(...) hatayı fırlatır; except ... as e ile yakalanır ve e mesajı taşır. YetersizBakiye, Exception'dan türeyen özel bir hata sınıfıdır; böylece hatayı adıyla ayırt edebiliriz.`),z(`b3`,`tip`,`Mümkün olan en özel hata türünü yakala. Hepsini birden yakalayan boş "except:" gerçek hataları gizleyebilir.`)],[B(`m32-l1-e1`,`Yaş kontrolü`,`orta`,30,`yas_kontrol(yas) fonksiyonu yaş negatifse ValueError("Yaş negatif olamaz") fırlatsın, değilse yaşı döndürsün.`,`def yas_kontrol(yas):
    pass
`,`def yas_kontrol(yas):
    if yas < 0:
        raise ValueError("Yaş negatif olamaz")
    return yas`,[{d:`Geçerli yaş`,append:`print(yas_kontrol(20))`,out:`20`},{d:`Negatif yaş hata verir`,append:`try:
    yas_kontrol(-5)
except ValueError as e:
    print(e)`,out:`Yaş negatif olamaz`},{d:`raise kullanılmış`,src:`raise\\s+ValueError`}],[`yaş < 0 ise raise ValueError("Yaş negatif olamaz")`,`Değilse return yas`],[`20`,`Yaş negatif olamaz`])]),W(`m32`,2,e(2),`assert`,12,[`assert ile varsayımı denetlemek`,`assert ile raise farkını bilmek`],[L(`b1`,`assert koşul, "mesaj" yazdığın yerde koşulun doğru olduğunu varsayarsın; yanlışsa AssertionError oluşur ve mesaj gösterilir. assert, programcının kendi hatalarını (olmaması gereken durumları) yakalamak içindir. Kullanıcının hatalı girdisi gibi beklenen durumlar için raise ve try / except kullan.`),R(`b2`,I`def bol(a, b):
    assert b != 0, "Bölen sıfır olamaz"
    return a / b

print(bol(10, 2))
try:
    bol(1, 0)
except AssertionError as e:
    print("Yakalandı:", e)

notlar = [80, 90]
assert len(notlar) > 0, "Liste boş"
print("Her şey yolunda")`,`Koşul doğruysa assert hiçbir şey yapmaz. bol(1, 0) çağrısında b != 0 yanlış olduğu için AssertionError fırlar ve mesajı e ile okunur.`),z(`b3`,`warning`,`Python en iyileştirme modunda (-O) assert satırlarını yok sayar; bu yüzden girdi doğrulaması için assert'e güvenme.`)],[B(`m32-l2-e1`,`Güvenli bölme`,`kolay`,20,`bol(a, b) fonksiyonuna assert ekle: b sıfırsa "Bölen sıfır olamaz" mesajıyla AssertionError oluşsun; değilse a / b döndürsün.`,`def bol(a, b):
    return a / b
`,`def bol(a, b):
    assert b != 0, "Bölen sıfır olamaz"
    return a / b`,[{d:`Normal bölme`,append:`print(bol(10, 4))`,out:`2.5`},{d:`Sıfıra bölme`,append:`try:
    bol(1, 0)
except AssertionError as e:
    print(e)`,out:`Bölen sıfır olamaz`},{d:`assert kullanılmış`,src:`assert\\s+`}],[`assert b != 0, "Bölen sıfır olamaz"`],[`2.5`,`Bölen sıfır olamaz`])]),W(`m32`,3,e(3),`Hata ayıklama teknikleri`,14,[`Traceback'i alttan yukarı okumak`,`print ile hata ayıklamak`,`Sorunu küçültmek`],[L(`b1`,`Hata ayıklama (debugging) programcının günlük işidir. Dört temel alışkanlık: (1) traceback'i her zaman en alttan oku: son satır hata türünü ve mesajını, üstündeki satırlar hatanın hangi satırda ve hangi fonksiyon çağrılarıyla oluştuğunu söyler. (2) Şüpheli yerlere print() koyup değişkenlerin gerçek değerlerine bak. (3) Sorunu küçült: hatayı gösteren en kısa kodu bul. (4) Tek seferde tek şey değiştir.`),R(`b2`,I`def ortalama(liste):
    toplam = 0
    for i in range(1, len(liste)):
        toplam = toplam + liste[i]
        print("debug: i =", i, "toplam =", toplam)
    return toplam / len(liste)

print(ortalama([2, 4, 6]))`,`Beklenen sonuç 4.0 ama 3.33 çıkıyor. print satırları i'nin 1'den başladığını gösterir: ilk eleman (index 0) hiç toplanmıyor. range(1, ...) yerine range(len(liste)) yazmak hatayı çözer.`),z(`b3`,`tip`,`Kodun neden çalışmadığını bir arkadaşına (ya da bir oyuncak ördeğe) yüksek sesle anlatmak çoğu zaman hatayı kendiliğinden ortaya çıkarır.`)],[V(`m32-l3-e1`,`Ortalama neden yanlış?`,`orta`,30,`ortalama([2, 4, 6]) 4.0 vermeli ama 3.3333333333333335 veriyor. Döngüdeki hatayı bul ve düzelt.`,[{type:`Mantık hatası`,description:`Döngü range(1, ...) ile başladığı için ilk eleman toplanmıyor`}],`def ortalama(liste):
    toplam = 0
    for i in range(1, len(liste)):
        toplam = toplam + liste[i]
    return toplam / len(liste)
`,`def ortalama(liste):
    toplam = 0
    for i in range(len(liste)):
        toplam = toplam + liste[i]
    return toplam / len(liste)
`,[{d:`2, 4, 6`,append:`print(ortalama([2, 4, 6]))`,out:`4.0`},{d:`10, 20`,append:`print(ortalama([10, 20]))`,out:`15.0`}],[`Döngü index 0'dan başlamalı.`])],{quiz:U(`m32-quiz`,`Modül 32 mini sınavı`,[H(`q1`,`Bir fonksiyonda hata fırlatmak için hangi anahtar kelime kullanılır?`,[`raise`,`throw`,`error`,`except`],0,`Python'da hata fırlatmak için raise kullanılır.`),H(`q2`,`Kendi hata sınıfını yazmak için hangi sınıftan türetirsin?`,[`Exception`,`Error`,`str`,`object yazmak zorunlu`],0,`Özel hata sınıfları genellikle Exception'dan türetilir.`),H(`q3`,`assert koşul, "mesaj" yazıldığında koşul yanlışsa ne olur?`,[`AssertionError oluşur`,`Program sessizce devam eder`,`ValueError oluşur`,`Koşul otomatik düzeltilir`],0,`Yanlış bir assert AssertionError oluşturur.`),H(`q4`,`Traceback nasıl okunmalıdır?`,[`En alttan yukarı: son satır hata türü ve mesajıdır`,`En üstten aşağı, ilk satır hata mesajıdır`,`Yalnızca en üst satır önemlidir`,`Okumaya gerek yoktur`],0,`Son satır hata türünü ve mesajını, üstündeki satırlar hatanın yerini gösterir.`)]),practice:[V(`p-m32-raise`,`Hata fırlatılmıyor`,`orta`,30,`sil() boş listede "Liste boş" mesajıyla IndexError fırlatmalı ama sessizce hiçbir şey yapmıyor. Düzelt.`,[{type:`Mantık hatası`,description:`Uyarı yalnızca yazdırılıyor, raise ile hata fırlatılmıyor`}],`def sil(liste):
    if not liste:
        print("Uyarı: boş liste")
        return
    return liste.pop()
try:
    sil([])
except IndexError as e:
    print(e)`,`def sil(liste):
    if not liste:
        raise IndexError("Liste boş")
    return liste.pop()
try:
    sil([])
except IndexError as e:
    print(e)`,[{d:`Yakalanan mesaj`,out:`Liste boş`}],[`print yerine raise IndexError("Liste boş") yaz.`]),B(`p-m32-custom`,`Özel hata`,`orta`,30,`GecersizNot adında Exception'dan türeyen bir hata sınıfı yaz. not_kontrol(n) fonksiyonu not 0-100 dışındaysa bu hatayı fırlatsın.`,`def not_kontrol(n):
    return n
`,`class GecersizNot(Exception):
    pass

def not_kontrol(n):
    if n < 0 or n > 100:
        raise GecersizNot(f"Geçersiz not: {n}")
    return n`,[{d:`Geçerli not`,append:`print(not_kontrol(85))`,out:`85`},{d:`Geçersiz not`,append:`try:
    not_kontrol(120)
except GecersizNot as e:
    print(e)`,out:`Geçersiz not: 120`}],[`class GecersizNot(Exception): pass`],[`85`,`Geçersiz not: 120`])]})]),K=`import io
import unittest

def calistir(sinif):
    """Verilen test sınıfını çalıştırır ve sonucu döndürür."""
    yukleyici = unittest.defaultTestLoader
    sonuc = unittest.TextTestRunner(stream=io.StringIO()).run(yukleyici.loadTestsFromTestCase(sinif))
    return sonuc
`,gl=`import doctest

def doktest_calistir(f):
    """Fonksiyonun docstring örneklerini çalıştırır; (deneme, hata) sayısını döndürür."""
    kosucu = doctest.DocTestRunner()
    for test in doctest.DocTestFinder().find(f, f.__name__, globs=globals()):
        kosucu.run(test)
    return kosucu.tries, kosucu.failures
`,_l=G(33,`Test Yazma`,`assert, unittest ve doctest ile kodunun doğruluğunu otomatik denetlemek.`,`m32-l3`,e=>[W(`m33`,1,e(1),`assert ile test`,12,[`Küçük test fonksiyonları yazmak`,`Test başarısızsa nasıl göründüğünü bilmek`],[L(`b1`,`Test, kodunun beklediğin gibi çalıştığını otomatik denetleyen küçük programdır. En basit test, bilinen girdiler için sonucu assert ile denetler. Test fonksiyonlarının adı geleneksel olarak test_ ile başlar. Bir assert başarısız olursa AssertionError oluşur ve test hata verir; hiçbir şey olmazsa test geçmiş demektir.`),R(`b2`,I`def kare(n):
    return n * n

def test_kare():
    assert kare(3) == 9
    assert kare(-2) == 4
    assert kare(0) == 0

test_kare()
print("Tüm testler geçti")

def hatali_kare(n):
    return n + n

def test_hatali():
    assert hatali_kare(3) == 9, "3 için 9 bekleniyordu"

try:
    test_hatali()
except AssertionError as e:
    print("Test başarısız:", e)`,`Üç assert da doğru olduğu için test_kare sessizce biter. hatali_kare(3) 6 döndürür; assert başarısız olur ve mesajı yakalanıp yazdırılır.`),z(`b3`,`tip`,`İyi test, sınır durumlarını da dener: sıfır, negatif sayı, boş liste gibi. Hatalar genellikle orada saklanır.`)],[B(`m33-l1-e1`,`İlk testini yaz`,`orta`,30,`topla(a, b) fonksiyonu verilmiş. test_topla() fonksiyonunu yaz: topla(2, 3) == 5 ve topla(-1, 1) == 0 olduğunu assert ile denetlesin. (Testin hatalı bir topla fonksiyonunu da yakalaması gerekir.)`,`def topla(a, b):
    return a + b

def test_topla():
    pass
`,`def topla(a, b):
    return a + b

def test_topla():
    assert topla(2, 3) == 5
    assert topla(-1, 1) == 0`,[{d:`Doğru fonksiyonda test geçer`,append:`test_topla()
print("geçti")`,out:`geçti`},{d:`Hatalı fonksiyonu yakalar`,append:`def topla(a, b):
    return a - b
try:
    test_topla()
    print("hata yakalanmadı")
except AssertionError:
    print("hata yakalandı")`,out:`hata yakalandı`},{d:`assert kullanılmış`,src:`assert\\s+`}],[`test_topla() içinde assert topla(2, 3) == 5 yaz.`,`İkinci bir assert ekle.`],[`Doğru fonksiyonda "geçti"`,`Hatalı fonksiyonda "hata yakalandı"`])]),W(`m33`,2,e(2),`unittest`,14,[`unittest.TestCase ile test sınıfı yazmak`,`assertEqual gibi denetimleri kullanmak`],[L(`b1`,`unittest Python'un hazır test kütüphanesidir. Testler unittest.TestCase'ten türeyen bir sınıfta, adı test ile başlayan metotlar olarak yazılır. Denetimler self.assertEqual(a, b), self.assertTrue(x), self.assertRaises(Hata) gibi metotlarla yapılır; başarısızlıkta hangi değerlerin beklendiği güzel bir mesajla gösterilir. Bu platformda testleri bir yardımcı fonksiyonla çalıştırıyoruz (aşağıdaki calistir).`),R(`b2`,I`import io
import unittest

def kare(n):
    return n * n

class TestKare(unittest.TestCase):
    def test_pozitif(self):
        self.assertEqual(kare(3), 9)

    def test_sifir(self):
        self.assertEqual(kare(0), 0)

    def test_tur(self):
        with self.assertRaises(TypeError):
            kare("a" + 1)

def calistir(sinif):
    yukleyici = unittest.defaultTestLoader
    return unittest.TextTestRunner(stream=io.StringIO()).run(yukleyici.loadTestsFromTestCase(sinif))

sonuc = calistir(TestKare)
print(sonuc.testsRun, sonuc.wasSuccessful())`,`Üç test metodu çalıştı ve hepsi geçti. assertRaises, with bloğundaki kodun beklenen hatayı fırlattığını denetler (burada "a" + 1 TypeError verir).`),z(`b3`,`tip`,`Her test metodunun adı test ile başlamalıdır; yoksa unittest onu çalıştırmaz. Her test yalnızca bir şeyi denetlemelidir.`)],[B(`m33-l2-e1`,`TestCase yaz`,`orta`,35,`TestKare sınıfına iki test metodu yaz: test_pozitif (kare(3) 9 olmalı) ve test_negatif (kare(-2) 4 olmalı). self.assertEqual kullan.`,`${K}\ndef kare(n):\n    return n * n\n\nclass TestKare(unittest.TestCase):\n    pass\n`,`${K}\ndef kare(n):\n    return n * n\n\nclass TestKare(unittest.TestCase):\n    def test_pozitif(self):\n        self.assertEqual(kare(3), 9)\n\n    def test_negatif(self):\n        self.assertEqual(kare(-2), 4)\n`,[{d:`İki test çalışır ve geçer`,append:`s = calistir(TestKare)
print(s.testsRun, s.wasSuccessful())`,out:`2 True`},{d:`assertEqual kullanılmış`,src:`assertEqual`}],[`def test_pozitif(self): ve def test_negatif(self): yaz.`,`İçlerinde self.assertEqual(kare(...), ...) kullan.`],[`2 test çalışır`,`Hepsi geçer`])]),W(`m33`,3,e(3),`doctest`,12,[`Docstring içine çalıştırılabilir örnek yazmak`,`Örnekleri otomatik test olarak çalıştırmak`],[L(`b1`,`doctest, fonksiyonun açıklama metnine (docstring) yazdığın örnekleri test olarak çalıştırır. Örnekler, etkileşimli Python'daki gibi >>> ile başlar; hemen altına beklenen çıktı yazılır. Hem dokümantasyon hem test olduğu için küçük fonksiyonlarda çok işe yarar.`),R(`b2`,I`import doctest

def cift_mi(n):
    """Sayı çiftse True döndürür.

    >>> cift_mi(4)
    True
    >>> cift_mi(7)
    False
    """
    return n % 2 == 0

def doktest_calistir(f):
    kosucu = doctest.DocTestRunner()
    for test in doctest.DocTestFinder().find(f, f.__name__, globs=globals()):
        kosucu.run(test)
    return kosucu.tries, kosucu.failures

print(doktest_calistir(cift_mi))`,`Docstring'teki iki örnek çalıştırıldı: 2 deneme, 0 hata. Beklenen çıktı gerçek çıktıyla uyuşmazsa doctest hata raporlar.`),z(`b3`,`tip`,`Beklenen çıktıyı birebir yazmalısın; fazladan boşluk bile hata sayılır. Karmaşık testler için unittest daha uygundur.`)],[B(`m33-l3-e1`,`Doctest örneği yaz`,`orta`,35,`cift_mi(n) fonksiyonunu tamamla: docstring'e iki doctest örneği (>>> ile) yaz ve fonksiyon sayı çiftse True, değilse False döndürsün.`,`${gl}\ndef cift_mi(n):\n    """Sayı çiftse True döndürür."""\n    pass\n`,`${gl}\ndef cift_mi(n):\n    """Sayı çiftse True döndürür.\n\n    >>> cift_mi(4)\n    True\n    >>> cift_mi(7)\n    False\n    """\n    return n % 2 == 0\n`,[{d:`İki örnek ve hata yok`,append:`print(doktest_calistir(cift_mi))`,out:`(2, 0)`},{d:`Fonksiyon doğru çalışıyor`,append:`print(cift_mi(10), cift_mi(3))`,out:`True False`}],[`Docstring içine >>> cift_mi(4) ve altına True yaz.`,`İkinci örnek: >>> cift_mi(7) ve altına False.`],[`(2, 0) sonucu`,`cift_mi doğru çalışır`])],{quiz:U(`m33-quiz`,`Modül 33 mini sınavı`,[H(`q1`,`unittest'te bir test metodunun adı nasıl başlamalıdır?`,[`test`,`check`,`verify`,`Fark etmez`],0,`unittest yalnızca adı test ile başlayan metotları çalıştırır.`),H(`q2`,`self.assertEqual(kare(3), 9) neyi denetler?`,[`kare(3) değerinin 9'a eşit olduğunu`,`kare fonksiyonunun var olduğunu`,`kare(3) değerinin metin olduğunu`,`Hiçbir şeyi`],0,`assertEqual iki değerin eşit olduğunu denetler.`),H(`q3`,`doctest örnekleri docstring içinde hangi işaretle başlar?`,[`>>>`,`###`,`---`,`///`],0,`Etkileşimli Python'daki gibi >>> ile başlar.`),H(`q4`,`Bir testte assert başarısız olursa hangi hata oluşur?`,[`AssertionError`,`ValueError`,`TestError`,`SyntaxError`],0,`Başarısız assert AssertionError oluşturur.`)]),practice:[V(`p-m33-expected`,`Test yanlış beklenti içeriyor`,`orta`,30,`Test, doğru çalışan bir fonksiyonu başarısız gösteriyor. Hata testte: beklenen değeri düzelt.`,[{type:`Mantık hatası`,description:`5 + 3 sonucu 8'dir; test yanlışlıkla 9 bekliyor`}],`def topla(a, b):
    return a + b
def test_topla():
    assert topla(5, 3) == 9
try:
    test_topla()
    print("geçti")
except AssertionError:
    print("kaldı")`,`def topla(a, b):
    return a + b
def test_topla():
    assert topla(5, 3) == 8
try:
    test_topla()
    print("geçti")
except AssertionError:
    print("kaldı")`,[{d:`Test geçer`,out:`geçti`}],[`5 + 3 kaç eder?`]),B(`p-m33-raises`,`Hata bekleyen test`,`zor`,35,`assertRaises ile bir test yaz: bol(1, 0) ZeroDivisionError fırlattığını denetlesin.`,`${K}\ndef bol(a, b):\n    return a / b\n\nclass TestBol(unittest.TestCase):\n    pass\n`,`${K}\ndef bol(a, b):\n    return a / b\n\nclass TestBol(unittest.TestCase):\n    def test_sifira_bolme(self):\n        with self.assertRaises(ZeroDivisionError):\n            bol(1, 0)\n`,[{d:`Bir test geçer`,append:`s = calistir(TestBol)
print(s.testsRun, s.wasSuccessful())`,out:`1 True`},{d:`assertRaises kullanılmış`,src:`assertRaises`}],[`with self.assertRaises(ZeroDivisionError): bloğu yaz.`],[`1 test geçer`])]})]),vl=G(34,`Okunabilir Kod`,`PEP 8, anlamlı isimler, docstring ve yeniden düzenleme (refactoring).`,`m33-l3`,e=>[W(`m34`,1,e(1),`PEP 8 ve isimlendirme`,12,[`PEP 8 biçim kurallarını bilmek`,`Anlamlı değişken ve fonksiyon adları seçmek`],[L(`b1`,`Kod yazıldığından çok daha sık okunur. PEP 8, Python topluluğunun ortak biçim kılavuzudur. Temel kurallar: değişken ve fonksiyon adları küçük harfli ve alt çizgili (snake_case: kdv_hesapla), sınıf adları BüyükHarfle başlar (KitapListesi), sabitler büyük harfledir (KDV_ORANI). Girinti 4 boşluktur. Operatörlerin çevresinde boşluk bırakılır: a + b. Ve en önemlisi: adlar ne yaptığını söylemelidir; a, b, f yerine fiyat, oran, hesapla yaz.`),R(`b2`,I`# Kötü
def f(a, b):
    x = a*b
    return x

# İyi
KDV_ORANI = 0.2

def kdv_hesapla(fiyat, oran=KDV_ORANI):
    kdv = fiyat * oran
    return kdv

print(f(50, 0.2), kdv_hesapla(50))`,`İki fonksiyon aynı işi yapar, ama ikincisi ne yaptığını adıyla söyler ve sihirli sayıyı (0.2) adlandırılmış bir sabite (KDV_ORANI) taşır. Okuyan kişi neden 0.2 yazıldığını hemen anlar.`),z(`b3`,`tip`,`Tek harfli adlar sadece çok küçük, bariz yerlerde (döngü sayacı i gibi) kabul edilir. İsim bulmak zorsa fonksiyon fazla iş yapıyor olabilir.`)],[B(`m34-l1-e1`,`Adları düzelt`,`kolay`,20,`f(a, b) fonksiyonunun adını kdv_hesapla, parametrelerini fiyat ve oran yap; fiyat * oran değerini döndürsün.`,`def f(a, b):
    return a * b
`,`def kdv_hesapla(fiyat, oran):
    return fiyat * oran`,[{d:`Konumsal argümanlar`,append:`print(kdv_hesapla(200, 0.5))`,out:`100.0`},{d:`İsimli argümanlar`,append:`print(kdv_hesapla(fiyat=50, oran=0.2))`,out:`10.0`}],[`def kdv_hesapla(fiyat, oran): yaz.`],[`kdv_hesapla(200, 0.5) 100.0`,`İsimli argümanlar çalışır`])]),W(`m34`,2,e(2),`Docstring ve yorumlar`,12,[`Docstring yazmak`,`Yorum ile docstring farkını bilmek`],[L(`b1`,`Docstring, bir fonksiyonun, sınıfın ya da modülün ilk satırına üç tırnakla yazılan açıklamadır. help(fonksiyon) ve fonksiyon.__doc__ ile okunur. İyi docstring ne işe yaradığını, parametreleri ve dönüş değerini kısaca anlatır. Yorum (#) ise kodun neden öyle yazıldığını açıklar; kodun ne yaptığını tekrar etmek (x = x + 1  # x'i bir artır) gereksizdir.`),R(`b2`,I`def alan(en, boy):
    """Dikdörtgenin alanını döndürür.

    en ve boy aynı birimde olmalıdır.
    """
    return en * boy

print(alan.__doc__.splitlines()[0])
print(alan(3, 4))

# KDV oranı 2024'te yasal olarak değiştirildi, bu yüzden 0.20 kullanıyoruz.
oran = 0.20
print(oran)`,`alan.__doc__ docstring metnini verir; splitlines()[0] ilk satırını alır. Yorum, değerin neden 0.20 olduğunu (kodun göstermediği bilgiyi) açıklar.`),z(`b3`,`tip`,`Docstring "nasıl kullanılır?", yorum "neden böyle?" sorusunu cevaplar. Kodu açıklamak yerine kodu daha okunaklı yazmayı tercih et.`)],[B(`m34-l2-e1`,`Docstring ekle`,`kolay`,20,`kare(n) fonksiyonuna tam olarak "Sayının karesini döndürür." metnini taşıyan tek satırlık bir docstring ekle.`,`def kare(n):
    return n * n
`,`def kare(n):
    """Sayının karesini döndürür."""
    return n * n`,[{d:`Docstring doğru`,append:`print(kare.__doc__)`,out:`Sayının karesini döndürür.`},{d:`Fonksiyon hâlâ çalışıyor`,append:`print(kare(4))`,out:`16`}],[`Fonksiyonun ilk satırına üç tırnaklı metin yaz.`],[`Docstring: Sayının karesini döndürür.`,`kare(4) 16`])]),W(`m34`,3,e(3),`Yeniden düzenleme (refactoring)`,14,[`Tekrar eden kodu fonksiyona çıkarmak`,`Sihirli sayıları sabite çevirmek`],[L(`b1`,`Yeniden düzenleme (refactoring), kodun davranışını değiştirmeden yapısını iyileştirmektir. Başlıca hareketler: tekrar eden kodu bir fonksiyona taşımak (DRY: kendini tekrar etme), sihirli sayıları adlandırılmış sabitlere çevirmek, uzun fonksiyonları kısa parçalara bölmek, iç içe if'leri erken return ile düzleştirmek.`),R(`b2`,I`# Önce: aynı hesap üç kez
print(round(100 * 1.18, 2))
print(round(50 * 1.18, 2))
print(round(20 * 1.18, 2))

# Sonra: tek fonksiyon
KDV_CARPANI = 1.18

def kdvli(fiyat):
    return round(fiyat * KDV_CARPANI, 2)

for fiyat in [100, 50, 20]:
    print(kdvli(fiyat))`,`İki bölüm de aynı çıktıyı verir. İkinci bölümde hesap tek yerde durur: oran değişirse yalnızca KDV_CARPANI değiştirilir.`),z(`b3`,`tip`,`Refactoring yaparken davranış aynı kalmalı. Önce testlerin (ya da örnek çıktıların) olsun, sonra değiştir, sonra tekrar çalıştırıp karşılaştır.`)],[B(`m34-l3-e1`,`Tekrarı kaldır`,`orta`,30,`Üç kez tekrarlanan hesabı kdvli(fiyat) fonksiyonuna taşı: fiyatı 1.18 ile çarpıp round(..., 2) ile iki basamağa yuvarlayıp döndürsün. 1.18 değerini KDV_CARPANI sabitine koy.`,`print(round(100 * 1.18, 2))
print(round(50 * 1.18, 2))
print(round(20 * 1.18, 2))
`,`KDV_CARPANI = 1.18

def kdvli(fiyat):
    return round(fiyat * KDV_CARPANI, 2)
`,[{d:`100 için`,append:`print(kdvli(100))`,out:`118.0`},{d:`20 için`,append:`print(kdvli(20))`,out:`23.6`},{d:`Sabit kullanılmış`,src:`KDV_CARPANI\\s*=\\s*1\\.18`}],[`Önce sabiti tanımla, sonra def kdvli(fiyat): yaz.`],[`kdvli(100) 118.0`,`kdvli(20) 23.6`])],{quiz:U(`m34-quiz`,`Modül 34 mini sınavı`,[H(`q1`,`PEP 8'e göre fonksiyon adları nasıl yazılır?`,[`küçük harfli ve alt çizgili (snake_case)`,`BüyükHarfle (PascalCase)`,`tümü büyük harf`,`Fark etmez`],0,`Fonksiyon ve değişken adları snake_case, sınıf adları PascalCase, sabitler BÜYÜK_HARF yazılır.`),H(`q2`,`Docstring ile yorum (#) arasındaki temel fark nedir?`,[`Docstring "nasıl kullanılır", yorum "neden böyle" sorusunu yanıtlar`,`İkisi aynı şeydir`,`Docstring çalıştırılmaz, yorum çalıştırılır`,`Yorum fonksiyonlara yazılamaz`],0,`Docstring kullanımı anlatır; yorum kararın nedenini açıklar.`),H(`q3`,`Yeniden düzenleme (refactoring) nedir?`,[`Davranışı değiştirmeden kodun yapısını iyileştirmek`,`Programa yeni özellik eklemek`,`Hataları silmek için kodu baştan yazmak`,`Kodu sıkıştırmak`],0,`Refactoring davranışı korurken okunabilirliği ve yapıyı iyileştirir.`),H(`q4`,`Kodda 0.18 gibi açıklamasız sayılar (sihirli sayı) için ne yapılır?`,[`Adlandırılmış bir sabite çevrilir`,`Silinir`,`Yoruma alınır`,`Metne çevrilir`],0,`KDV_ORANI = 0.18 gibi bir sabit, sayının ne olduğunu anlatır.`)]),practice:[V(`p-m34-style`,`Yanlış adlandırma çağrıyı bozuyor`,`kolay`,20,`Çağrı hata veriyor: fonksiyon adı PEP 8'e uygun yazılmış (snake_case) ama çağrıda başka bir ad kullanılmış. Çağrıyı düzelt.`,[{type:`NameError`,description:`Çağrıdaki ad, tanımdaki adla aynı değil`}],`def alan_hesapla(en, boy):
    return en * boy
print(AlanHesapla(3, 4))`,`def alan_hesapla(en, boy):
    return en * boy
print(alan_hesapla(3, 4))`,[{d:`Çıktı`,out:`12`}],[`Python büyük/küçük harfi ayırt eder.`]),B(`p-m34-extract`,`Fonksiyona çıkar`,`orta`,25,`Aynı selamlama iki kez yazılmış. selamla(ad) fonksiyonuna taşı: "Merhaba, <ad>!" döndürsün.`,`print("Merhaba, " + "Ada" + "!")
print("Merhaba, " + "Can" + "!")
`,`def selamla(ad):
    return "Merhaba, " + ad + "!"
`,[{d:`İki selamlama`,append:`print(selamla("Ada"))
print(selamla("Can"))`,out:`Merhaba, Ada!
Merhaba, Can!`}],[`def selamla(ad): yaz ve metni döndür.`],[`Merhaba, Ada!`,`Merhaba, Can!`])]})]),yl=G(35,`Dekoratörler ve with`,`Fonksiyonları sarmalayan dekoratörler ve context manager (with).`,`m34-l3`,e=>[W(`m35`,1,e(1),`Dekoratör nedir?`,14,[`İç içe fonksiyonları anlamak`,`Basit bir dekoratör yazmak ve @ ile kullanmak`],[L(`b1`,`Dekoratör (decorator), bir fonksiyonu alıp onu saran yeni bir fonksiyon döndüren fonksiyondur. Amaç, asıl fonksiyonun kodunu değiştirmeden ona yeni davranış (kayıt tutma, kontrol, hesaplama) eklemektir. Dekoratörü bir fonksiyonun üstüne @dekoratör_adı yazarak kullanırsın. Sarmal fonksiyonda argümanları *args ile iletmek, her fonksiyonla çalışmasını sağlar.`),R(`b2`,I`def logla(f):
    def sarmal(*args):
        print(f"{f.__name__} çağrıldı")
        sonuc = f(*args)
        print("bitti")
        return sonuc
    return sarmal

@logla
def topla(a, b):
    return a + b

print(topla(2, 3))`,`@logla yazmak topla = logla(topla) demektir. topla artık sarmal fonksiyondur: önce mesajı yazar, asıl fonksiyonu çağırır, sonra "bitti" yazar ve sonucu döndürür.`),z(`b3`,`tip`,`@dekoratör satırı, fonksiyon tanımının hemen üstünde durur. Birden çok dekoratör alt alta yazılabilir.`)],[B(`m35-l1-e1`,`Sonucu iki katla`,`orta`,30,`iki_kati dekoratörünü yaz: dekore edilen fonksiyonun döndürdüğü değeri iki katına çıkarsın. arttir(x) fonksiyonu @iki_kati ile işaretli.`,`def iki_kati(f):
    pass

@iki_kati
def arttir(x):
    return x + 1
`,`def iki_kati(f):
    def sarmal(*args):
        return f(*args) * 2
    return sarmal

@iki_kati
def arttir(x):
    return x + 1
`,[{d:`3 için`,append:`print(arttir(3))`,out:`8`},{d:`0 için`,append:`print(arttir(0))`,out:`2`}],[`İç içe bir sarmal(*args) fonksiyonu yaz ve onu döndür.`,`sarmal içinde f(*args) * 2 döndür.`],[`arttir(3) 8`,`arttir(0) 2`])]),W(`m35`,2,e(2),`Önbellek ve hazır dekoratörler`,12,[`functools.lru_cache ile sonuçları önbelleğe almak`,`Hazır dekoratörleri tanımak`],[L(`b1`,`Python'da hazır dekoratörler vardır. functools.lru_cache bir fonksiyonun sonuçlarını hatırlar: aynı argümanlarla ikinci kez çağrılınca yeniden hesaplamaz, önbellekten verir. Özyinelemeli Fibonacci gibi aynı değerleri tekrar tekrar hesaplayan fonksiyonlarda inanılmaz bir hızlanma sağlar. Daha önce gördüğün @property, @staticmethod ve @classmethod da dekoratördür.`),R(`b2`,I`from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(30))
print(fib(80))
print(fib.cache_info().hits > 0)`,`Önbellek olmadan fib(30) yüz binlerce çağrı yapardı ve fib(80) yıllar sürerdi. lru_cache her n için sonucu bir kez hesaplar. cache_info() kaç kez önbellekten cevap verildiğini gösterir.`),z(`b3`,`warning`,`lru_cache yalnızca aynı argümanlar aynı sonucu veriyorsa (saf fonksiyonlar) güvenlidir. Argümanlar değiştirilemez (hashable) türde olmalıdır: sayı, metin, demet; liste olmaz.`)],[B(`m35-l2-e1`,`Hızlı Fibonacci`,`orta`,30,`fib(n) fonksiyonuna @lru_cache(maxsize=None) dekoratörünü ekle ki aynı değerler tekrar tekrar hesaplanmasın.`,`from functools import lru_cache

def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
`,`from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
`,[{d:`fib(25)`,append:`print(fib(25))`,out:`75025`},{d:`lru_cache kullanılmış`,src:`@lru_cache`}],[`Fonksiyonun üstüne @lru_cache(maxsize=None) yaz.`],[`fib(25) doğru hesaplanır`,`@lru_cache kullanılmış`])]),W(`m35`,3,e(3),`with ve context manager`,14,[`with bloğunun ne yaptığını anlamak`,`__enter__ ve __exit__ ile kendi context manager'ını yazmak`],[L(`b1`,`with bloğu, bir kaynağı (dosya, bağlantı, kilit) açar ve iş bittiğinde hata olsa bile temizlemeyi garanti eder. Dosyalarda with open(...) bunu yapar. with'in arkasında context manager protokolü vardır: bir sınıf __enter__ (bloğa girerken) ve __exit__ (çıkarken) metotlarını yazarsa with ile kullanılabilir. as ile __enter__'ın döndürdüğü değeri alırsın.`),R(`b2`,I`class Mesajli:
    def __enter__(self):
        print("giriş")
        return self

    def __exit__(self, tur, deger, iz):
        print("çıkış")

with Mesajli():
    print("içeride")

try:
    with Mesajli():
        print("hata geliyor")
        raise ValueError("deneme")
except ValueError:
    print("hata yakalandı")`,`Blok başlarken __enter__, biterken __exit__ çalışır. İkinci örnekte blok içinde hata çıksa bile "çıkış" yine yazılır: temizlik garantilidir.`),z(`b3`,`tip`,`Dosyayı elle open() ile açıp close() demeyi unutabilirsin; with bunu senin yerine yapar. Bu yüzden her zaman with open(...) kullan.`)],[B(`m35-l3-e1`,`Kendi with'ini yaz`,`orta`,30,`Mesajli sınıfına __enter__ ("giriş" yazdırsın ve self döndürsün) ve __exit__ ("çıkış" yazdırsın) metotlarını ekle.`,`class Mesajli:
    pass
`,`class Mesajli:
    def __enter__(self):
        print("giriş")
        return self

    def __exit__(self, tur, deger, iz):
        print("çıkış")
`,[{d:`with akışı`,append:`with Mesajli():
    print("içeride")`,out:`giriş
içeride
çıkış`},{d:`Hata olsa da çıkış yazılır`,append:`try:
    with Mesajli():
        raise ValueError("x")
except ValueError:
    print("yakalandı")`,out:`giriş
çıkış
yakalandı`}],[`__enter__ ve __exit__ metotlarını yaz.`,`__exit__ üç parametre alır: tur, deger, iz.`],[`giriş, içeride, çıkış`,`Hata durumunda da çıkış`])],{quiz:U(`m35-quiz`,`Modül 35 mini sınavı`,[H(`q1`,`@logla yazmak neye eşdeğerdir?`,[`topla = logla(topla)`,`logla = topla(logla)`,`topla(logla)`,`Hiçbir şeye`],0,`Dekoratör, fonksiyonu alıp yerine yeni bir fonksiyon koyar.`),H(`q2`,`Dekoratörün sarmal (iç) fonksiyonu neden genellikle *args alır?`,[`Her türlü argümanla çalışan fonksiyonları sarmak için`,`Daha hızlı çalışmak için`,`Hata mesajı yazmak için`,`Zorunlu değildir ve işe yaramaz`],0,`*args, sarılan fonksiyonun aldığı argümanları iletmeyi sağlar.`),H(`q3`,`lru_cache ne işe yarar?`,[`Aynı argümanlı çağrıların sonucunu hatırlayıp yeniden hesaplamaz`,`Hataları gizler`,`Fonksiyonu paralel çalıştırır`,`Sonuçları dosyaya yazar`],0,`Önbellek, daha önce hesaplanan sonuçları tekrar kullanır.`),H(`q4`,`with bloğunda __exit__ ne zaman çalışır?`,[`Blok bitince, hata olsa bile`,`Yalnızca hata olursa`,`Blok başlarken`,`Hiçbir zaman otomatik çalışmaz`],0,`__exit__ blok bitince (ya da hata çıkınca) temizlik için çalışır.`)]),practice:[V(`p-m35-return`,`Dekoratör sonucu yutuyor`,`orta`,30,`Dekore edilen fonksiyon 6 döndürmeli ama None yazdırıyor: sarmal fonksiyon sonucu geri vermiyor. Düzelt.`,[{type:`Mantık hatası`,description:`sarmal fonksiyon f'nin sonucunu return etmiyor`}],`def logla(f):
    def sarmal(*args):
        print("çağrıldı")
        f(*args)
    return sarmal
@logla
def topla(a, b):
    return a + b
print(topla(2, 4))`,`def logla(f):
    def sarmal(*args):
        print("çağrıldı")
        return f(*args)
    return sarmal
@logla
def topla(a, b):
    return a + b
print(topla(2, 4))`,[{d:`Çıktı`,out:`çağrıldı
6`}],[`f(*args) sonucunu return et.`]),B(`p-m35-sayac`,`Çağrı sayacı`,`zor`,35,`sayac dekoratörünü yaz: dekore edilen fonksiyon her çağrıldığında sarmal.cagri adlı özellik 1 artsın.`,`def sayac(f):
    pass

@sayac
def selam():
    return "merhaba"
`,`def sayac(f):
    def sarmal(*args):
        sarmal.cagri += 1
        return f(*args)
    sarmal.cagri = 0
    return sarmal

@sayac
def selam():
    return "merhaba"
`,[{d:`Üç çağrı`,append:`selam()
selam()
selam()
print(selam.cagri)`,out:`3`}],[`Fonksiyonlara da özellik atanabilir: sarmal.cagri = 0`],[`Üç çağrıdan sonra 3`])]})]),bl=G(36,`Üreteçler ve İteratörler`,`yield ile tembel (lazy) veri üreten fonksiyonlar ve iteratör protokolü.`,`m35-l3`,e=>[W(`m36`,1,e(1),`İteratör nedir?`,12,[`iter() ve next() fonksiyonlarını kullanmak`,`for döngüsünün arkasındaki mekanizmayı anlamak`],[L(`b1`,`for döngüsü bir diziyi dolaşırken arka planda iteratör kullanır. iter(dizi) bir iteratör üretir; next(iteratör) her çağrıldığında bir sonraki elemanı verir. Elemanlar bitince StopIteration hatası oluşur ve for döngüsü bunu yakalayıp durur. Liste, metin, sözlük gibi dolaşılabilen nesnelere "iterable" denir.`),R(`b2`,I`it = iter([10, 20, 30])
print(next(it))
print(next(it))
print(list(it))
try:
    next(it)
except StopIteration:
    print("bitti")

for harf in "ab":
    print(harf)`,`next() sırayla 10 ve 20 verir. Geriye kalanlar list(it) ile alınır; iteratör artık tükendi. Tükenmiş iteratörde next() StopIteration fırlatır. for döngüsü aynı mekanizmayı otomatik yönetir.`),z(`b3`,`tip`,`İteratör tek kullanımlıktır: bir kez tükendikten sonra baştan dolaşılamaz. Gerekirse iter() ile yeni bir tane üret.`)],[B(`m36-l1-e1`,`next ile ilerle`,`kolay`,20,`it iteratöründen next() ile iki eleman al ve alt alta yazdır; sonra kalanları list(it) ile liste olarak yazdır.`,`it = iter([10, 20, 30])
`,`it = iter([10, 20, 30])
print(next(it))
print(next(it))
print(list(it))`,[{d:`İki next ve kalan`,out:`10
20
[30]`},{d:`next kullanılmış`,src:`next\\(`}],[`print(next(it)) iki kez yaz.`,`Sonra print(list(it)).`],[`10`,`20`,`[30]`])]),W(`m36`,2,e(2),`yield ile üreteç`,14,[`yield ile üreteç fonksiyonu yazmak`,`Tembel hesaplamanın mantığını anlamak`],[L(`b1`,`Normal bir fonksiyon return ile tek bir değer verip biter. İçinde yield olan fonksiyon ise bir üreteçtir (generator): her yield bir değer verir ve fonksiyonun durumu orada dondurulur; sonraki next() çağrısı kaldığı yerden devam eder. Değerler ihtiyaç oldukça (tembel/lazy) üretilir, bütün liste bellekte tutulmaz.`),R(`b2`,I`def geri_say(n):
    while n > 0:
        yield n
        n = n - 1

g = geri_say(3)
print(next(g))
print(next(g))
print(list(g))

def kareler(n):
    for i in range(1, n + 1):
        yield i * i

for k in kareler(4):
    print(k)`,`geri_say çağrılınca fonksiyon hemen çalışmaz; üreteç nesnesi verir. Her next() bir yield'e kadar çalışır. Kalan değerler list(g) ile alınır. for döngüsü üreteçleri de doğrudan dolaşabilir.`),z(`b3`,`tip`,`Üreteçler büyük (hatta sonsuz) veri akışları için idealdir: ilk milyon sayıyı bellekte tutmak yerine her seferinde bir tane üretirsin.`)],[B(`m36-l2-e1`,`Kareler üreteci`,`orta`,30,`kareler(n) üreteç fonksiyonunu yaz: 1'den n'e kadar (n dahil) her sayının karesini sırayla yield etsin.`,`def kareler(n):
    pass
`,`def kareler(n):
    for i in range(1, n + 1):
        yield i * i
`,[{d:`n = 4`,append:`print(list(kareler(4)))`,out:`[1, 4, 9, 16]`},{d:`n = 1`,append:`print(list(kareler(1)))`,out:`[1]`},{d:`yield kullanılmış`,src:`yield`}],[`for i in range(1, n + 1): ile dolaş ve yield i * i yaz.`],[`kareler(4) [1, 4, 9, 16]`,`kareler(1) [1]`])]),W(`m36`,3,e(3),`Üreteç ifadeleri ve sonsuz akışlar`,14,[`Üreteç ifadesi yazmak`,`Sonsuz üretecin güvenli kullanımı`],[L(`b1`,`Liste üretecinin köşeli parantezlerini normal parantezle değiştirirsen üreteç ifadesi (generator expression) elde edersin: (x * x for x in range(5)). Listeyi bellekte oluşturmaz, değerleri tek tek üretir. sum(), max(), min() gibi fonksiyonlara doğrudan verebilirsin. Sonsuz döngülü üreteçler de yazılabilir; yalnızca ihtiyacın kadarını next() ya da itertools.islice ile alırsın.`),R(`b2`,I`toplam = sum(x for x in range(1, 101) if x % 3 == 0)
print(toplam)

def sayac():
    n = 0
    while True:
        yield n
        n = n + 1

from itertools import islice
print(list(islice(sayac(), 5)))`,`1'den 100'e kadar 3'e bölünenlerin toplamı 1683'tür; hiçbir liste oluşturulmadan hesaplandı. sayac() sonsuz bir üreteçtir; islice ilk beş değeri alır ve durur.`),z(`b3`,`warning`,`Sonsuz üreteci list() ile bütünüyle listeye çevirmeye çalışma: program sonsuza kadar sürer. Her zaman bir sınır koy.`)],[B(`m36-l3-e1`,`Üreteç ifadesiyle topla`,`orta`,25,`1'den 100'e kadar (100 dahil) 3'e tam bölünen sayıların toplamını, liste oluşturmadan sum() ve bir üreteç ifadesiyle hesaplayıp yazdır.`,``,`print(sum(x for x in range(1, 101) if x % 3 == 0))`,[{d:`Toplam 1683`,out:`1683`},{d:`Üreteç ifadesi kullanılmış`,src:`sum\\([^\\[\\]]*\\bfor\\b`}],[`sum(x for x in range(1, 101) if x % 3 == 0)`],[`Çıktı: 1683`])],{quiz:U(`m36-quiz`,`Modül 36 mini sınavı`,[H(`q1`,`next() ile tükenmiş bir iteratörden eleman istenirse ne olur?`,[`StopIteration hatası oluşur`,`None döner`,`Baştan başlar`,`Boş metin döner`],0,`Elemanlar bitince StopIteration fırlar; for döngüsü bunu yakalayıp durur.`),H(`q2`,`İçinde yield bulunan bir fonksiyon çağrılınca ne olur?`,[`Hemen çalışmaz; bir üreteç nesnesi döndürür`,`Hemen bütün değerleri döndürür`,`Hata verir`,`Sonsuz döngüye girer`],0,`Üreteç fonksiyonu çağrıldığında kod çalışmaz; her next() bir yield'e kadar çalıştırır.`),H(`q3`,`Bu kod ne yazdırır?`,[`[1, 4, 9]`,`[0, 1, 4]`,`<generator object>`,`Hata`],0,`list() üreteci tüketip kareleri listeye çevirir.`,`g = (x * x for x in range(1, 4))
print(list(g))`),H(`q4`,`Üreteçlerin liste üzerindeki başlıca yararı nedir?`,[`Tüm veriyi bellekte tutmadan tek tek üretirler`,`Daha okunaklıdır`,`Her zaman daha hızlıdır`,`İndeksle erişilebilir`],0,`Üreteçler tembel çalışır; büyük veride bellek tasarrufu sağlar.`)]),practice:[V(`p-m36-return`,`return yerine yield`,`orta`,30,`sayilar(3) 1, 2, 3 değerlerini sırayla üretmeli ama yalnızca [1] yazdırıyor. Fonksiyon return ile ilk değerde bitiyor. Düzelt.`,[{type:`Mantık hatası`,description:`return fonksiyonu ilk değerde bitirir; birden çok değer için yield kullanılmalı`}],`def sayilar(n):
    for i in range(1, n + 1):
        return i
print(list(sayilar(3)))`,`def sayilar(n):
    for i in range(1, n + 1):
        yield i
print(list(sayilar(3)))`,[{d:`Çıktı`,out:`[1, 2, 3]`}],[`return yerine yield kullan.`]),B(`p-m36-fib`,`Fibonacci üreteci`,`zor`,40,`fibonacci(n) üreteci ilk n Fibonacci sayısını (0, 1, 1, 2, ...) sırayla yield etsin.`,`def fibonacci(n):
    pass
`,`def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
`,[{d:`İlk 8 sayı`,append:`print(list(fibonacci(8)))`,out:`[0, 1, 1, 2, 3, 5, 8, 13]`},{d:`yield kullanılmış`,src:`yield`}],[`a, b = 0, 1 ile başla; her turda a'yı yield et ve a, b = b, a + b yap.`],[`[0, 1, 1, 2, 3, 5, 8, 13]`])]})]),xl=`^(?![\\s\\S]*(sorted\\(|\\.sort\\())`,Sl=G(37,`Arama ve Sıralama Algoritmaları`,`Doğrusal ve ikili arama; kabarcık, seçmeli ve araya ekleme sıralaması.`,`m36-l3`,e=>[W(`m37`,1,e(1),`Doğrusal ve ikili arama`,14,[`Doğrusal aramayı yazmak`,`Sıralı listede ikili aramayı anlamak`],[L(`b1`,`Algoritma, bir problemi adım adım çözen tarifnamedir. Bir listede değer aramak en temel örnektir. Doğrusal arama (linear search) elemanları baştan sona sırayla kontrol eder; liste büyüdükçe adım sayısı da büyür. Liste sıralıysa ikili arama (binary search) çok daha hızlıdır: her adımda ortadaki elemana bakar ve aramanın yarısını eler.`),R(`b2`,I`def dogrusal_ara(liste, hedef):
    for i, x in enumerate(liste):
        if x == hedef:
            return i
    return -1

def ikili_ara(liste, hedef):
    sol, sag = 0, len(liste) - 1
    while sol <= sag:
        orta = (sol + sag) // 2
        if liste[orta] == hedef:
            return orta
        elif liste[orta] < hedef:
            sol = orta + 1
        else:
            sag = orta - 1
    return -1

sayilar = [2, 5, 8, 12, 16, 23, 38]
print(dogrusal_ara(sayilar, 16))
print(ikili_ara(sayilar, 23))
print(ikili_ara(sayilar, 7))`,`Her iki fonksiyon da hedefin index'ini verir; bulamazsa -1 döner. İkili arama sol ve sağ sınırlar arasındaki ortaya bakar: hedef ortadakinden büyükse sol sınırı ortanın sağına, küçükse sağ sınırı ortanın soluna çeker.`),z(`b3`,`warning`,`İkili arama yalnızca SIRALI listelerde çalışır. Sırasız listede doğru sonuç vermez.`)],[B(`m37-l1-e1`,`İkili arama`,`zor`,40,`ikili_ara(liste, hedef) fonksiyonunu yaz: sıralı listede hedefin index'ini döndürsün, yoksa -1 döndürsün.`,`def ikili_ara(liste, hedef):
    pass
`,`def ikili_ara(liste, hedef):
    sol, sag = 0, len(liste) - 1
    while sol <= sag:
        orta = (sol + sag) // 2
        if liste[orta] == hedef:
            return orta
        elif liste[orta] < hedef:
            sol = orta + 1
        else:
            sag = orta - 1
    return -1
`,[{d:`Ortadaki eleman`,append:`print(ikili_ara([1, 3, 5, 7, 9, 11], 7))`,out:`3`},{d:`Olmayan eleman`,append:`print(ikili_ara([1, 3, 5, 7, 9, 11], 4))`,out:`-1`},{d:`İlk eleman`,append:`print(ikili_ara([1, 3, 5, 7, 9, 11], 1))`,out:`0`},{d:`Son eleman`,append:`print(ikili_ara([1, 3, 5, 7, 9, 11], 11))`,out:`5`}],[`sol = 0, sag = len(liste) - 1 ile başla.`,`while sol <= sag: döngüsünde orta = (sol + sag) // 2 kullan.`],[`Dört durum da doğru`])]),W(`m37`,2,e(2),`Kabarcık ve seçmeli sıralama`,14,[`Kabarcık sıralamasını yazmak`,`Seçmeli sıralamayı anlamak`],[L(`b1`,`Sıralama algoritmaları bir listeyi küçükten büyüğe dizer. Kabarcık sıralaması (bubble sort) yan yana elemanları karşılaştırır ve yanlış sıradaysa yer değiştirir; en büyük eleman her turda sona "kabarcık gibi" yükselir. Seçmeli sıralama (selection sort) her turda kalan en küçük elemanı bulup doğru yerine koyar.`),R(`b2`,I`def kabarcik(liste):
    liste = liste[:]
    n = len(liste)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if liste[j] > liste[j + 1]:
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
    return liste

def secmeli(liste):
    liste = liste[:]
    for i in range(len(liste)):
        en_kucuk = i
        for j in range(i + 1, len(liste)):
            if liste[j] < liste[en_kucuk]:
                en_kucuk = j
        liste[i], liste[en_kucuk] = liste[en_kucuk], liste[i]
    return liste

print(kabarcik([5, 2, 9, 1, 5, 6]))
print(secmeli([64, 25, 12, 22, 11]))`,`İki fonksiyon da önce listenin bir kopyasını (liste[:]) alır, böylece orijinali bozmaz. İç içe döngüler karşılaştırma yapar; a, b = b, a ile iki eleman yer değiştirir.`),z(`b3`,`tip`,`Bu algoritmalar öğrenmek içindir. Gerçek programlarda sorted() ve sort() kullan: çok daha hızlıdırlar.`)],[B(`m37-l2-e1`,`Seçmeli sıralama`,`zor`,40,`secmeli(liste) fonksiyonunu yaz: listenin sıralı yeni bir kopyasını döndürsün (sorted() ve sort() KULLANMADAN, iç içe döngülerle).`,`def secmeli(liste):
    pass
`,`def secmeli(liste):
    liste = liste[:]
    for i in range(len(liste)):
        en_kucuk = i
        for j in range(i + 1, len(liste)):
            if liste[j] < liste[en_kucuk]:
                en_kucuk = j
        liste[i], liste[en_kucuk] = liste[en_kucuk], liste[i]
    return liste
`,[{d:`Karışık liste`,append:`print(secmeli([64, 25, 12, 22, 11]))`,out:`[11, 12, 22, 25, 64]`},{d:`Tekrarlı elemanlar`,append:`print(secmeli([3, 3, 1]))`,out:`[1, 3, 3]`},{d:`Boş liste`,append:`print(secmeli([]))`,out:`[]`},{d:`Orijinal bozulmaz`,append:`x = [2, 1]
secmeli(x)
print(x)`,out:`[2, 1]`},{d:`sorted/sort kullanılmamış`,src:xl}],[`Önce liste = liste[:] ile kopya al.`,`Her turda kalan kısımdaki en küçüğün index'ini bul ve i. elemanla yer değiştir.`],[`Sıralı kopya döner`,`sorted ve sort kullanılmaz`])]),W(`m37`,3,e(3),`Araya ekleme ve karşılaştırma`,14,[`Araya ekleme sıralamasını yazmak`,`Algoritmaların adım sayısını karşılaştırmak`],[L(`b1`,`Araya ekleme sıralaması (insertion sort) elemanları sırayla alır ve her birini kendinden önceki sıralı kısımda doğru yere sokar; tıpkı elindeki iskambil kâğıtlarını sıralaman gibi. Küçük veya zaten neredeyse sıralı listelerde çok iyi çalışır.`),R(`b2`,I`def araya_ekle(liste):
    liste = liste[:]
    for i in range(1, len(liste)):
        anahtar = liste[i]
        j = i - 1
        while j >= 0 and liste[j] > anahtar:
            liste[j + 1] = liste[j]
            j = j - 1
        liste[j + 1] = anahtar
    return liste

print(araya_ekle([5, 2, 4, 6, 1, 3]))
print(araya_ekle([1, 2, 3]))

def adim_say(liste):
    adim = 0
    for i in range(len(liste)):
        for j in range(len(liste) - 1 - i):
            adim = adim + 1
    return adim

print(adim_say(list(range(10))))
print(adim_say(list(range(100))))`,`Her eleman, solundaki daha büyükleri sağa kaydırıp kendi yerine oturur. Son iki satır, kabarcık sıralamasındaki karşılaştırma sayısını ölçer: 10 elemanda 45, 100 elemanda 4950 adım. Eleman sayısı 10 kat artınca adım sayısı yaklaşık 100 kat arttı.`),z(`b3`,`tip`,`Üç yöntemin de iç içe döngüsü vardır; bu yüzden büyük listelerde yavaşlar. Python'un hazır sorted() fonksiyonu çok daha akıllı bir yöntem kullanır.`)],[B(`m37-l3-e1`,`Araya ekleme sıralaması`,`zor`,40,`araya_ekle(liste) fonksiyonunu yaz: listenin sıralı yeni bir kopyasını döndürsün (sorted() ve sort() KULLANMADAN).`,`def araya_ekle(liste):
    pass
`,`def araya_ekle(liste):
    liste = liste[:]
    for i in range(1, len(liste)):
        anahtar = liste[i]
        j = i - 1
        while j >= 0 and liste[j] > anahtar:
            liste[j + 1] = liste[j]
            j = j - 1
        liste[j + 1] = anahtar
    return liste
`,[{d:`Karışık liste`,append:`print(araya_ekle([5, 2, 4, 6, 1, 3]))`,out:`[1, 2, 3, 4, 5, 6]`},{d:`Ters sıralı`,append:`print(araya_ekle([9, 7, 5, 3]))`,out:`[3, 5, 7, 9]`},{d:`Tek eleman`,append:`print(araya_ekle([4]))`,out:`[4]`},{d:`sorted/sort kullanılmamış`,src:xl}],[`İkinci elemandan başla: anahtar = liste[i].`,`Solundaki daha büyük elemanları bir sağa kaydır, sonra anahtarı yerine koy.`],[`Üç durumda da sıralı kopya`])],{quiz:U(`m37-quiz`,`Modül 37 mini sınavı`,[H(`q1`,`İkili arama (binary search) hangi koşulda çalışır?`,[`Liste sıralıysa`,`Liste yalnızca sayı içeriyorsa`,`Liste kısaysa`,`Her zaman`],0,`İkili arama, ortadaki elemana bakıp aramayı yarıya indirdiği için listenin sıralı olmasını gerektirir.`),H(`q2`,`Kabarcık sıralamasında her turda ne olur?`,[`Yan yana elemanlar karşılaştırılıp gerekirse yer değiştirir`,`En küçük eleman başa alınır ve diğerleri silinir`,`Liste ortadan ikiye bölünür`,`Rastgele eleman seçilir`],0,`Kabarcık sıralaması yan yana elemanları karşılaştırır; en büyük eleman sona doğru ilerler.`),H(`q3`,`Sıralama fonksiyonunda "liste = liste[:]" satırı ne işe yarar?`,[`Orijinal listeyi bozmamak için kopya alır`,`Listeyi sıralar`,`Listeyi tersine çevirir`,`Listeyi siler`],0,`liste[:] listenin bir kopyasını verir; fonksiyon orijinal listeyi değiştirmez.`),H(`q4`,`Gerçek programlarda bir listeyi sıralamak için ne kullanılmalıdır?`,[`sorted() ya da sort()`,`Kendi yazdığın kabarcık sıralaması`,`Her zaman ikili arama`,`input()`],0,`Python'un hazır sıralaması çok hızlıdır ve iyi test edilmiştir.`)]),practice:[V(`p-m37-binary`,`İkili arama son elemanı bulamıyor`,`zor`,40,`ikili_ara([1, 3, 5, 7, 9], 9) 4 döndürmeli ama -1 döndürüyor. Döngü koşulundaki hatayı bul ve düzelt.`,[{type:`Mantık hatası`,description:`while sol < sag koşulu, tek elemanlı kalan aralığı denetlemeden döngüyü bitirir; sol <= sag olmalı`}],`def ikili_ara(liste, hedef):
    sol, sag = 0, len(liste) - 1
    while sol < sag:
        orta = (sol + sag) // 2
        if liste[orta] == hedef:
            return orta
        elif liste[orta] < hedef:
            sol = orta + 1
        else:
            sag = orta - 1
    return -1
print(ikili_ara([1, 3, 5, 7, 9], 9))`,`def ikili_ara(liste, hedef):
    sol, sag = 0, len(liste) - 1
    while sol <= sag:
        orta = (sol + sag) // 2
        if liste[orta] == hedef:
            return orta
        elif liste[orta] < hedef:
            sol = orta + 1
        else:
            sag = orta - 1
    return -1
print(ikili_ara([1, 3, 5, 7, 9], 9))`,[{d:`Çıktı 4`,out:`4`}],[`Tek elemanlı kalan aralık da denetlenmeli: < yerine <= kullan.`]),B(`p-m37-linear`,`Tüm eşleşmeleri bul`,`orta`,30,`tumunu_bul(liste, hedef) fonksiyonu hedefin geçtiği TÜM index'leri liste olarak döndürsün.`,`def tumunu_bul(liste, hedef):
    pass
`,`def tumunu_bul(liste, hedef):
    sonuc = []
    for i, x in enumerate(liste):
        if x == hedef:
            sonuc.append(i)
    return sonuc
`,[{d:`Birden çok eşleşme`,append:`print(tumunu_bul([1, 2, 1, 3, 1], 1))`,out:`[0, 2, 4]`},{d:`Eşleşme yok`,append:`print(tumunu_bul([1, 2], 9))`,out:`[]`}],[`enumerate ile index ve elemanı birlikte dolaş.`],[`[0, 2, 4]`,`[]`])]})]),Cl=G(38,`Yığın, Kuyruk ve Bağlı Liste`,`Temel veri yapılarını kendin kur: stack, queue ve linked list.`,`m37-l3`,e=>[W(`m38`,1,e(1),`Yığın (stack)`,14,[`Yığının "son giren ilk çıkar" (LIFO) mantığını anlamak`,`Parantez dengesini yığınla denetlemek`],[L(`b1`,`Veri yapısı, veriyi düzenli tutmanın bir yoludur. Yığın (stack), üst üste dizilmiş tabaklara benzer: son koyduğunu ilk alırsın (LIFO: last in, first out). Python'da yığın için liste yeterlidir: append() üste koyar, pop() üstten alır. Yığınlar "geri al" (undo) düğmesinde, fonksiyon çağrılarında ve parantez eşleştirmede kullanılır.`),R(`b2`,I`yigin = []
yigin.append("a")
yigin.append("b")
yigin.append("c")
print(yigin.pop())
print(yigin)

def dengeli_mi(metin):
    yigin = []
    for harf in metin:
        if harf == "(":
            yigin.append(harf)
        elif harf == ")":
            if not yigin:
                return False
            yigin.pop()
    return not yigin

print(dengeli_mi("(a(b)c)"))
print(dengeli_mi("(()"))
print(dengeli_mi(")("))`,`pop() en son eklenen "c"yi verir. Parantez denetiminde açan parantez yığına konur, kapatan parantez yığından bir tane çıkarır. İş bitince yığın boşsa parantezler dengelidir.`),z(`b3`,`warning`,`Boş yığında pop() yapmak IndexError verir; önce yığının boş olup olmadığına bak.`)],[B(`m38-l1-e1`,`Parantez denetimi`,`zor`,40,`parantez_dengeli(metin) fonksiyonunu yaz: metindeki ( ve ) işaretleri doğru eşleşiyorsa True, aksi hâlde False döndürsün (yığın kullan).`,`def parantez_dengeli(metin):
    pass
`,`def parantez_dengeli(metin):
    yigin = []
    for harf in metin:
        if harf == "(":
            yigin.append(harf)
        elif harf == ")":
            if not yigin:
                return False
            yigin.pop()
    return not yigin
`,[{d:`Dengeli`,append:`print(parantez_dengeli("(())"))`,out:`True`},{d:`Kapanmayan`,append:`print(parantez_dengeli("(()"))`,out:`False`},{d:`Yanlış sıra`,append:`print(parantez_dengeli(")("))`,out:`False`},{d:`Parantezsiz`,append:`print(parantez_dengeli("a(b)c"))`,out:`True`},{d:`Boş metin`,append:`print(parantez_dengeli(""))`,out:`True`}],[`"(" görünce yığına ekle, ")" görünce yığından çıkar.`,`Boş yığından çıkarmaya çalışırsan False döndür.`,`Sonunda yığın boşsa True.`],[`Beş durum da doğru`])]),W(`m38`,2,e(2),`Kuyruk (queue)`,12,[`Kuyruğun "ilk giren ilk çıkar" (FIFO) mantığını anlamak`,`deque ile kuyruk kurmak`],[L(`b1`,`Kuyruk (queue), bir bilet kuyruğuna benzer: ilk gelen ilk hizmet alır (FIFO: first in, first out). Python'da kuyruk için collections.deque kullanılır: append() sona ekler, popleft() baştan alır. Listede pop(0) de çalışır ama büyük listelerde yavaştır; deque ise iki uçta da hızlıdır.`),R(`b2`,I`from collections import deque

kuyruk = deque()
kuyruk.append("Ada")
kuyruk.append("Can")
kuyruk.append("Ece")
print(kuyruk.popleft())
print(len(kuyruk))
print(list(kuyruk))

def sira_islet(kisiler):
    kuyruk = deque(kisiler)
    while kuyruk:
        ad = kuyruk.popleft()
        print(f"{ad} hizmet aldı")

sira_islet(["Deniz", "Eda"])`,`İlk eklenen "Ada" ilk çıkar. while kuyruk: döngüsü kuyruk boşalana kadar sürer. Yazıcı kuyruğu, bilet sırası gibi "gelen sırayla işle" problemleri bu yapıyla çözülür.`),z(`b3`,`tip`,`Yığın = son giren ilk çıkar (tabak istifi). Kuyruk = ilk giren ilk çıkar (market sırası). Hangisinin gerektiğini sorunun doğasından anlarsın.`)],[B(`m38-l2-e1`,`Sırayla hizmet`,`orta`,30,`sira_islet(kisiler) fonksiyonunu yaz: kişileri bir deque kuyruğuna koysun ve geliş sırasıyla "<ad> hizmet aldı" yazdırsın.`,`from collections import deque

def sira_islet(kisiler):
    pass
`,`from collections import deque

def sira_islet(kisiler):
    kuyruk = deque(kisiler)
    while kuyruk:
        ad = kuyruk.popleft()
        print(f"{ad} hizmet aldı")
`,[{d:`İki kişi`,append:`sira_islet(["Ada", "Can"])`,out:`Ada hizmet aldı
Can hizmet aldı`},{d:`Boş sıra`,append:`sira_islet([])
print("bitti")`,out:`bitti`},{d:`popleft kullanılmış`,src:`popleft\\(`}],[`kuyruk = deque(kisiler) ile başla.`,`while kuyruk: döngüsünde popleft() ile baştan al.`],[`Ada ve Can sırayla`,`Boş sırada hiçbir şey yazılmaz`])]),W(`m38`,3,e(3),`Bağlı liste`,16,[`Düğüm (node) kavramını anlamak`,`Bağlı listeye ekleme ve listeyi dolaşma`],[L(`b1`,`Bağlı liste (linked list) elemanları bellekte yan yana değil, zincir gibi birbirine bağlı tutar. Her eleman bir düğümdür (node): bir değer ve bir sonraki düğüme işaret (referans). Son düğümün sonrakisi None'dır. Listenin başını (baslangic) bilmek yeterlidir; diğer düğümlere zincir boyunca gidilir. Baştan eklemek çok hızlıdır; ortadaki elemana ulaşmak ise zincir boyunca yürümeyi gerektirir.`),R(`b2`,I`class Dugum:
    def __init__(self, deger):
        self.deger = deger
        self.sonraki = None

class BagliListe:
    def __init__(self):
        self.baslangic = None

    def ekle(self, deger):
        yeni = Dugum(deger)
        if self.baslangic is None:
            self.baslangic = yeni
            return
        simdiki = self.baslangic
        while simdiki.sonraki is not None:
            simdiki = simdiki.sonraki
        simdiki.sonraki = yeni

    def listele(self):
        sonuc = []
        simdiki = self.baslangic
        while simdiki is not None:
            sonuc.append(simdiki.deger)
            simdiki = simdiki.sonraki
        return sonuc

b = BagliListe()
b.ekle(10)
b.ekle(20)
b.ekle(30)
print(b.listele())`,`ekle() zincirin sonuna kadar yürüyüp yeni düğümü bağlar. listele() baştan başlayıp her düğümün değerini toplar ve sonraki düğüme geçer; sonraki None olunca durur.`),z(`b3`,`tip`,`Python'un hazır listesi çoğu iş için daha uygundur. Bağlı liste, veri yapılarının nasıl çalıştığını anlamak ve mülakat sorularına hazırlanmak için önemlidir.`)],[B(`m38-l3-e1`,`Düğüm say`,`orta`,35,`BagliListe sınıfına uzunluk() metodunu ekle: zincirdeki düğüm sayısını döndürsün.`,`class Dugum:
    def __init__(self, deger):
        self.deger = deger
        self.sonraki = None

class BagliListe:
    def __init__(self):
        self.baslangic = None

    def ekle(self, deger):
        yeni = Dugum(deger)
        if self.baslangic is None:
            self.baslangic = yeni
            return
        simdiki = self.baslangic
        while simdiki.sonraki is not None:
            simdiki = simdiki.sonraki
        simdiki.sonraki = yeni

    def uzunluk(self):
        pass
`,`class Dugum:
    def __init__(self, deger):
        self.deger = deger
        self.sonraki = None

class BagliListe:
    def __init__(self):
        self.baslangic = None

    def ekle(self, deger):
        yeni = Dugum(deger)
        if self.baslangic is None:
            self.baslangic = yeni
            return
        simdiki = self.baslangic
        while simdiki.sonraki is not None:
            simdiki = simdiki.sonraki
        simdiki.sonraki = yeni

    def uzunluk(self):
        sayi = 0
        simdiki = self.baslangic
        while simdiki is not None:
            sayi = sayi + 1
            simdiki = simdiki.sonraki
        return sayi
`,[{d:`Üç düğüm`,append:`b = BagliListe()
b.ekle(1)
b.ekle(2)
b.ekle(3)
print(b.uzunluk())`,out:`3`},{d:`Boş liste`,append:`print(BagliListe().uzunluk())`,out:`0`}],[`simdiki = self.baslangic ile başla.`,`simdiki None olana kadar sayacı artır ve simdiki.sonraki'ne geç.`],[`Üç düğümde 3`,`Boş listede 0`])],{quiz:U(`m38-quiz`,`Modül 38 mini sınavı`,[H(`q1`,`Yığın (stack) hangi mantıkla çalışır?`,[`Son giren ilk çıkar (LIFO)`,`İlk giren ilk çıkar (FIFO)`,`Rastgele eleman çıkar`,`Sıralı çıkar`],0,`Yığında en son eklenen eleman ilk çıkar.`),H(`q2`,`Kuyruk (queue) için Python'da hangisi önerilir?`,[`collections.deque`,`set`,`tuple`,`str`],0,`deque iki ucundan hızlı ekleme/çıkarma sağlar; kuyruk için idealdir.`),H(`q3`,`Bağlı listede son düğümün "sonraki" değeri nedir?`,[`None`,`0`,`İlk düğüm`,`Boş liste`],0,`Zincirin sonunu None belirtir.`),H(`q4`,`Bu kod ne yazdırır?`,[`c`,`a`,`b`,`Hata`],0,`pop() yığının en üstündeki (son eklenen) elemanı verir.`,`y = []
y.append("a")
y.append("b")
y.append("c")
print(y.pop())`)]),practice:[V(`p-m38-empty`,`Boş yığında pop`,`orta`,30,`ust_al([]) None döndürmeli ama IndexError veriyor. Boş yığını kontrol et.`,[{type:`IndexError`,description:`Boş listeden pop() yapılamaz; önce boş olup olmadığına bakılmalı`}],`def ust_al(yigin):
    return yigin.pop()
print(ust_al([]))`,`def ust_al(yigin):
    if not yigin:
        return None
    return yigin.pop()
print(ust_al([]))`,[{d:`Çıktı None`,out:`None`}],[`if not yigin: ile boş mu kontrol et.`]),B(`p-m38-reverse`,`Yığınla ters çevir`,`orta`,30,`ters_cevir(metin) fonksiyonu harfleri bir yığına koyup tek tek çıkararak metni tersine çevirsin (dilimleme kullanma).`,`def ters_cevir(metin):
    pass
`,`def ters_cevir(metin):
    yigin = []
    for harf in metin:
        yigin.append(harf)
    sonuc = ""
    while yigin:
        sonuc = sonuc + yigin.pop()
    return sonuc
`,[{d:`Python`,append:`print(ters_cevir("python"))`,out:`nohtyp`},{d:`Boş metin`,append:`print(repr(ters_cevir("")))`,out:`''`},{d:`append ve pop`,src:`append\\([\\s\\S]*pop\\(`}],[`Önce tüm harfleri append ile yığına koy, sonra pop() ile çıkar.`],[`nohtyp`,`Boş metin boş kalır`])]})]),wl=G(39,`Algoritmik Düşünme`,`Sözde kod, problemi parçalama ve karmaşıklık (Big-O) fikri.`,`m38-l3`,e=>[W(`m39`,1,e(1),`Sözde kod ve problemi parçalama`,12,[`Sözde kod (pseudocode) yazmak`,`Büyük problemi küçük adımlara bölmek`],[L(`b1`,`Kod yazmadan önce çözümü düşün. Sözde kod (pseudocode), çözümü Türkçe cümlelerle, programlama dilinin kurallarına takılmadan adım adım yazmaktır. Büyük problemi parçalara böl, her parçayı ayrı çöz, sonra birleştir. Sözde kod hazırsa kodu yazmak çoğunlukla satır satır çeviridir.`),R(`b2`,I`# Problem: bir listedeki en büyük sayıyı bul
# Sözde kod:
#   en_buyuk = listenin ilk elemanı
#   listedeki her eleman için:
#       eğer eleman en_buyuk'ten büyükse:
#           en_buyuk = eleman
#   en_buyuk'u döndür

def en_buyuk_bul(liste):
    en_buyuk = liste[0]
    for eleman in liste:
        if eleman > en_buyuk:
            en_buyuk = eleman
    return en_buyuk

print(en_buyuk_bul([3, 9, 2, 7]))`,`Yorumlardaki sözde kod, koddaki her satıra karşılık gelir. Bu fonksiyon hazır max() ile aynı sonucu verir; amaç, problem çözme sürecini görmektir.`),z(`b3`,`tip`,`Takıldığında kendine sor: "Bunu elle (kâğıt üstünde) nasıl çözerdim?" Adımları yaz; kod o adımların çevirisidir.`)],[B(`m39-l1-e1`,`Ortalamanın üstündekiler`,`orta`,30,`ortalama_ustu(liste) fonksiyonunu yaz: listenin ortalamasını bulup, ortalamadan BÜYÜK olan sayıları (sırayı bozmadan) liste olarak döndürsün. Önce sözde kodu düşün: 1) ortalamayı hesapla, 2) büyük olanları topla.`,`def ortalama_ustu(liste):
    pass
`,`def ortalama_ustu(liste):
    ortalama = sum(liste) / len(liste)
    sonuc = []
    for x in liste:
        if x > ortalama:
            sonuc.append(x)
    return sonuc
`,[{d:`Bir sayı üstte`,append:`print(ortalama_ustu([1, 2, 3, 4, 10]))`,out:`[10]`},{d:`Hepsi eşit`,append:`print(ortalama_ustu([5, 5, 5]))`,out:`[]`},{d:`İki sayı`,append:`print(ortalama_ustu([1, 9]))`,out:`[9]`},{d:`Birkaç sayı üstte`,append:`print(ortalama_ustu([10, 2, 8, 4]))`,out:`[10, 8]`}],[`Ortalama = sum(liste) / len(liste)`,`Ortalamadan büyük olanları yeni bir listeye ekle.`],[`Dört durum da doğru`])]),W(`m39`,2,e(2),`Karmaşıklık: Big-O fikri`,14,[`Algoritmanın büyüdükçe ne kadar yavaşladığını düşünmek`,`O(1), O(n) ve O(n²) kavramlarını ayırt etmek`],[L(`b1`,`Bir algoritmanın hızı, saniyeyle değil girdi büyüdükçe adım sayısının nasıl arttığıyla ölçülür. Buna karmaşıklık (complexity) denir; Big-O gösterimiyle yazılır. O(1): girdi ne kadar büyük olursa olsun hep aynı sayıda adım (örn. listenin ilk elemanı). O(n): adım sayısı girdiyle orantılı (tek döngü). O(n²): adım sayısı girdinin karesiyle artar (iç içe iki döngü). O(log n): her adımda problem yarıya iner (ikili arama) ve çok yavaş büyür.`),R(`b2`,I`def say_tek(n):
    adim = 0
    for i in range(n):
        adim = adim + 1
    return adim

def say_ic_ice(n):
    adim = 0
    for i in range(n):
        for j in range(n):
            adim = adim + 1
    return adim

for n in [10, 100, 1000]:
    print(n, say_tek(n), say_ic_ice(n))

def ikili_adim(n):
    sol, sag, adim = 0, n - 1, 0
    hedef = n - 1
    while sol <= sag:
        adim = adim + 1
        orta = (sol + sag) // 2
        if orta == hedef:
            break
        sol = orta + 1
    return adim

print(ikili_adim(1000), ikili_adim(1000000))`,`Girdi 10 kat artınca tek döngü 10 kat, iç içe döngü 100 kat daha fazla adım atar. İkili aramada ise 1000 elemanda 10 adım, bir milyon elemanda yalnızca 20 adım yeter: O(log n) çok verimlidir.`),z(`b3`,`tip`,`Küçük listelerde fark hissedilmez. Karmaşıklık, veri milyonlarca satıra ulaştığında hayat kurtarır.`)],[B(`m39-l2-e1`,`Adımları say`,`orta`,30,`ic_ice(n) fonksiyonunu yaz: iç içe iki for döngüsünün (her biri n tur) içindeki satırın kaç kez çalıştığını bir sayaçla sayıp döndürsün.`,`def ic_ice(n):
    pass
`,`def ic_ice(n):
    adim = 0
    for i in range(n):
        for j in range(n):
            adim = adim + 1
    return adim
`,[{d:`n = 3`,append:`print(ic_ice(3))`,out:`9`},{d:`n = 10`,append:`print(ic_ice(10))`,out:`100`},{d:`n = 0`,append:`print(ic_ice(0))`,out:`0`},{d:`İç içe döngü`,src:`for[\\s\\S]*for`}],[`Bir sayaçla başla ve iç döngünün içinde artır.`],[`3 için 9`,`10 için 100`])]),W(`m39`,3,e(3),`Problem çözme kalıpları`,14,[`Sözlükle aramayı hızlandırmak`,`İki işaretçi (two pointers) kalıbını bilmek`],[L(`b1`,`Çoğu problem birkaç tanıdık kalıba dayanır. (1) Sözlük/küme kalıbı: "bunu daha önce gördüm mü?" sorusunu listede aramak O(n), sözlükte aramak neredeyse O(1)'dir. (2) İki işaretçi kalıbı: bir dizinin iki ucundan (ya da iki konumundan) aynı anda ilerleyerek iç içe döngüden kurtulursun. Palindrom kontrolü bunun klasik örneğidir.`),R(`b2`,I`def iki_toplam(liste, hedef):
    gorulen = {}
    for i, x in enumerate(liste):
        aranan = hedef - x
        if aranan in gorulen:
            return (gorulen[aranan], i)
        gorulen[x] = i
    return None

print(iki_toplam([2, 7, 11, 15], 9))
print(iki_toplam([1, 2], 10))

def palindrom_mu(metin):
    sol, sag = 0, len(metin) - 1
    while sol < sag:
        if metin[sol] != metin[sag]:
            return False
        sol = sol + 1
        sag = sag - 1
    return True

print(palindrom_mu("kayak"), palindrom_mu("araba"))`,`iki_toplam, toplamı hedefe eşit olan iki sayının index'lerini TEK döngüyle bulur: daha önce gördüğü sayıları sözlükte tutar. palindrom_mu iki ucun harflerini karşılaştırıp ortaya doğru ilerler.`),z(`b3`,`tip`,`İç içe döngü yazmak üzereysen dur ve sor: "Bir sözlük, küme ya da iki işaretçi bunu tek döngüye indirir mi?"`)],[B(`m39-l3-e1`,`İki sayının toplamı`,`zor`,40,`iki_toplam(liste, hedef) fonksiyonunu yaz: toplamı hedefe eşit olan iki elemanın index'lerini (kücük_index, büyük_index) demeti olarak döndürsün; yoksa None döndürsün. Tek bir döngü ve bir sözlük kullan.`,`def iki_toplam(liste, hedef):
    pass
`,`def iki_toplam(liste, hedef):
    gorulen = {}
    for i, x in enumerate(liste):
        aranan = hedef - x
        if aranan in gorulen:
            return (gorulen[aranan], i)
        gorulen[x] = i
    return None
`,[{d:`İlk iki eleman`,append:`print(iki_toplam([2, 7, 11, 15], 9))`,out:`(0, 1)`},{d:`Sonraki iki eleman`,append:`print(iki_toplam([3, 2, 4], 6))`,out:`(1, 2)`},{d:`Çözüm yok`,append:`print(iki_toplam([1, 2], 10))`,out:`None`}],[`Gördüğün sayıları sözlükte (sayı: index) sakla.`,`Her x için hedef - x daha önce görüldü mü diye bak.`],[`Üç durum da doğru`])],{quiz:U(`m39-quiz`,`Modül 39 mini sınavı`,[H(`q1`,`Sözde kod (pseudocode) nedir?`,[`Çözümü programlama diline bağlı olmadan adım adım yazmak`,`Hatalı kod`,`Derlenmiş kod`,`Bir kütüphane`],0,`Sözde kod, çözümü normal cümlelerle adım adım tarif eder.`),H(`q2`,`Tek bir for döngüsünün karmaşıklığı nedir?`,[`O(n)`,`O(1)`,`O(n²)`,`O(log n)`],0,`Adım sayısı eleman sayısıyla orantılıdır: O(n).`),H(`q3`,`İç içe iki döngü (her biri n tur) yaklaşık kaç adım atar?`,[`n × n`,`n + n`,`2`,`log n`],0,`İç içe döngüde adım sayısı çarpılır: O(n²).`),H(`q4`,`Bir değerin daha önce görülüp görülmediğini hızlı kontrol etmek için hangi yapı uygundur?`,[`Sözlük veya küme`,`Liste`,`Demet`,`Metin`],0,`Sözlük ve kümede arama neredeyse sabit sürede yapılır.`)]),practice:[V(`p-m39-palin`,`Palindrom kontrolü yanlış`,`orta`,30,`palindrom_mu("kayak") True vermeli ama False veriyor. İki işaretçinin ilerleyişindeki hatayı bul ve düzelt.`,[{type:`Mantık hatası`,description:`Sağ işaretçi ilerlemek yerine artırılıyor; sag = sag - 1 olmalı`}],`def palindrom_mu(metin):
    sol, sag = 0, len(metin) - 1
    while sol < sag:
        if metin[sol] != metin[sag]:
            return False
        sol = sol + 1
        sag = sag + 1
    return True
print(palindrom_mu("kayak"))`,`def palindrom_mu(metin):
    sol, sag = 0, len(metin) - 1
    while sol < sag:
        if metin[sol] != metin[sag]:
            return False
        sol = sol + 1
        sag = sag - 1
    return True
print(palindrom_mu("kayak"))`,[{d:`Çıktı True`,out:`True`}],[`Sağ işaretçi ortaya doğru, yani sola gitmeli.`]),B(`p-m39-dup`,`Tekrarlayan var mı?`,`orta`,30,`tekrar_var_mi(liste) fonksiyonu listede en az bir değer iki kez geçiyorsa True, değilse False döndürsün (küme kullan).`,`def tekrar_var_mi(liste):
    pass
`,`def tekrar_var_mi(liste):
    gorulen = set()
    for x in liste:
        if x in gorulen:
            return True
        gorulen.add(x)
    return False
`,[{d:`Tekrar var`,append:`print(tekrar_var_mi([1, 2, 3, 2]))`,out:`True`},{d:`Tekrar yok`,append:`print(tekrar_var_mi([1, 2, 3]))`,out:`False`},{d:`Boş liste`,append:`print(tekrar_var_mi([]))`,out:`False`}],[`Gördüğün elemanları bir kümede tut.`],[`Üç durum doğru`])]})]),Tl=G(40,`Sayılar ve Sayı Oyunları`,`Asal sayılar, Fibonacci, OBEB/OKEK, statistics ve fractions.`,`m39-l3`,e=>[W(`m40`,1,e(1),`Asal sayılar ve bölenler`,14,[`Bir sayının asal olup olmadığını denetlemek`,`Bölenleri bulmak`],[L(`b1`,`Asal sayı, yalnızca 1'e ve kendisine bölünebilen 1'den büyük sayıdır: 2, 3, 5, 7, 11... Bir sayının asal olup olmadığını anlamak için 2'den başlayıp karekökünü geçmeyene kadar bölenleri denemek yeter: karekökten büyük bir bölen varsa karşılığında karekökten küçük bir bölen de vardır. Bölünebilirlik kalan operatörüyle (%) denetlenir: n % i == 0.`),R(`b2`,I`import math

def asal_mi(n):
    if n < 2:
        return False
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0:
            return False
    return True

print([n for n in range(2, 30) if asal_mi(n)])
print(asal_mi(1), asal_mi(97))

def bolenler(n):
    return [i for i in range(1, n + 1) if n % i == 0]

print(bolenler(12))`,`math.isqrt(n) tam sayı karekökünü verir. 2'den bu değere kadar bölen bulunamazsa sayı asaldır. bolenler() 1'den n'e kadar kalansız bölen sayıları toplar.`),z(`b3`,`warning`,`0 ve 1 asal değildir; 2 tek çift asal sayıdır. Bu özel durumları fonksiyonun başında ele al.`)],[B(`m40-l1-e1`,`Asal mı?`,`orta`,35,`asal_mi(n) fonksiyonunu yaz: n asalsa True, değilse False döndürsün. (n < 2 için False.)`,`import math

def asal_mi(n):
    pass
`,`import math

def asal_mi(n):
    if n < 2:
        return False
    for i in range(2, math.isqrt(n) + 1):
        if n % i == 0:
            return False
    return True
`,[{d:`En küçük asal`,append:`print(asal_mi(2))`,out:`True`},{d:`Asal değil`,append:`print(asal_mi(15))`,out:`False`},{d:`Asal`,append:`print(asal_mi(17))`,out:`True`},{d:`1 asal değildir`,append:`print(asal_mi(1))`,out:`False`},{d:`0 asal değildir`,append:`print(asal_mi(0))`,out:`False`}],[`n < 2 ise hemen False döndür.`,`2'den math.isqrt(n) dahil olacak şekilde bölen ara.`],[`Beş durum da doğru`])]),W(`m40`,2,e(2),`OBEB, OKEK ve Fibonacci`,14,[`Öklid algoritmasıyla OBEB bulmak`,`OKEK'i OBEB'den hesaplamak`,`Fibonacci dizisini döngüyle üretmek`],[L(`b1`,`Öklid algoritması iki sayının en büyük ortak bölenini (OBEB) bulur: büyük sayıyı küçüğe bölüp kalanı al; sayıları (küçük, kalan) ile değiştir; kalan 0 olunca küçük sayı OBEB'dir. En küçük ortak kat (OKEK) ise a × b / OBEB formülüyle bulunur. Fibonacci dizisi (0, 1, 1, 2, 3, 5, 8...) bir döngüyle de üretilebilir: iki değişkeni birlikte kaydır.`),R(`b2`,I`def obeb(a, b):
    while b:
        a, b = b, a % b
    return a

def okek(a, b):
    return a * b // obeb(a, b)

print(obeb(48, 18), okek(4, 6))
print(obeb(17, 5), okek(17, 5))

def fibonacci_listesi(n):
    sonuc = []
    a, b = 0, 1
    for _ in range(n):
        sonuc.append(a)
        a, b = b, a + b
    return sonuc

print(fibonacci_listesi(10))`,`obeb(48, 18): (48, 18) → (18, 12) → (12, 6) → (6, 0); sonuç 6. okek(4, 6) = 4 × 6 / 2 = 12. Fibonacci döngüsü a ve b'yi birlikte kaydırır. Python'da math.gcd() ve math.lcm() hazır fonksiyonlardır.`),z(`b3`,`tip`,`a, b = b, a % b gibi eşzamanlı atama, geçici değişkene ihtiyaç bırakmadan iki değeri aynı anda günceller.`)],[B(`m40-l2-e1`,`OBEB ve OKEK`,`orta`,35,`obeb(a, b) fonksiyonunu Öklid algoritmasıyla (a, b = b, a % b), okek(a, b) fonksiyonunu da OBEB kullanarak yaz.`,`def obeb(a, b):
    pass

def okek(a, b):
    pass
`,`def obeb(a, b):
    while b:
        a, b = b, a % b
    return a

def okek(a, b):
    return a * b // obeb(a, b)
`,[{d:`48 ve 18 / 4 ve 6`,append:`print(obeb(48, 18), okek(4, 6))`,out:`6 12`},{d:`Aralarında asal`,append:`print(obeb(17, 5), okek(17, 5))`,out:`1 85`},{d:`Biri diğerinin katı`,append:`print(obeb(100, 10), okek(100, 10))`,out:`10 100`}],[`while b: döngüsünde a, b = b, a % b yaz.`,`okek = a * b // obeb(a, b)`],[`Üç çift de doğru`])]),W(`m40`,3,e(3),`statistics ve fractions`,14,[`statistics ile ortalama, ortanca, tepe değer bulmak`,`Fraction ile kesirli sayılarla tam hesap yapmak`],[L(`b1`,`statistics modülü temel istatistikleri hazır verir: mean() ortalama, median() ortanca (sıralıyken ortadaki değer), mode() en sık geçen değerdir. fractions.Fraction ise kesirli sayılarla kesin hesap yapar: 1/3 + 1/6 tam olarak 1/2 olur. Bu, ondalık sayıların (float) ikilik tabandaki yaklaşık gösteriminden doğan küçük hataları (0.1 + 0.2 = 0.30000000000000004) önler. Parayla çalışırken decimal.Decimal de benzer bir güvence sağlar.`),R(`b2`,I`from statistics import mean, median, mode
from fractions import Fraction
from decimal import Decimal

notlar = [70, 85, 90, 85, 60]
print(mean(notlar), median(notlar), mode(notlar))
print(median([1, 3, 2, 10]))

print(Fraction(1, 3) + Fraction(1, 6))
print(Fraction(3, 4) * 2)
print(0.1 + 0.2)
print(Decimal("0.1") + Decimal("0.2"))`,`mean 78, median (sıralı ortadaki) 85, mode 85. Çift sayıda elemanın ortancası iki ortadaki değerin ortalamasıdır: 2.5. Fraction kesirleri kesin toplar. float ile 0.1 + 0.2 tam 0.3 olmaz; Decimal olur.`),z(`b3`,`tip`,`Ondalık hassasiyetin kritik olduğu yerlerde (para, ölçüm) float yerine Decimal ya da tam sayı (kuruş cinsinden) kullan.`)],[B(`m40-l3-e1`,`Not istatistikleri`,`kolay`,20,`notlar listesinin ortalamasını, ortancasını ve tepe değerini (en sık geçen) statistics modülüyle alt alta yazdır.`,`from statistics import mean, median, mode
notlar = [70, 85, 90, 85, 60]
`,`from statistics import mean, median, mode
notlar = [70, 85, 90, 85, 60]
print(mean(notlar))
print(median(notlar))
print(mode(notlar))`,[{d:`Üç istatistik`,out:`78
85
85`},{d:`mean, median, mode`,src:`mean\\(`}],[`print(mean(notlar)), print(median(notlar)), print(mode(notlar))`],[`78`,`85`,`85`])],{quiz:U(`m40-quiz`,`Modül 40 mini sınavı`,[H(`q1`,`Bir sayının asal olup olmadığını denetlerken bölenleri neden karekökünde bırakmak yeter?`,[`Karekökten büyük bir bölenin karşılığında karekökten küçük bir bölen de vardır`,`Karekök asal sayıdır`,`Python daha ötesini hesaplayamaz`,`Yalnızca hız için, doğruluğu etkiler`],0,`Bölenler çiftler hâlinde gelir; küçük olanı bulmak yeterlidir.`),H(`q2`,`obeb(48, 18) kaçtır?`,[`6`,`3`,`9`,`12`],0,`Öklid: (48, 18) → (18, 12) → (12, 6) → (6, 0); OBEB 6.`),H(`q3`,`median([1, 3, 2, 10]) kaçtır?`,[`2.5`,`3`,`2`,`4`],0,`Sıralı liste 1, 2, 3, 10; iki ortadaki 2 ve 3'ün ortalaması 2.5'tir.`),H(`q4`,`Fraction(1, 3) + Fraction(1, 6) sonucu nedir?`,[`1/2`,`2/9`,`0.5 (float)`,`1/9`],0,`Kesirler tam olarak toplanır: 2/6 + 1/6 = 3/6 = 1/2.`)]),practice:[V(`p-m40-prime`,`1 asal sayılıyor`,`orta`,30,`asal_mi(1) False vermeli ama True veriyor. Özel durumu ekle.`,[{type:`Mantık hatası`,description:`1 asal değildir ama fonksiyon bunu denetlemiyor`}],`def asal_mi(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
print(asal_mi(1), asal_mi(7), asal_mi(9))`,`def asal_mi(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
print(asal_mi(1), asal_mi(7), asal_mi(9))`,[{d:`Çıktı`,out:`False True False`}],[`n < 2 için False döndür.`]),B(`p-m40-digits`,`Rakamlar toplamı`,`orta`,30,`rakam_toplami(n) fonksiyonu sayının rakamlarının toplamını döndürsün (örn. 1234 için 10). Sayıyı metne çevirmeden, % ve // ile çöz.`,`def rakam_toplami(n):
    pass
`,`def rakam_toplami(n):
    toplam = 0
    while n > 0:
        toplam = toplam + n % 10
        n = n // 10
    return toplam
`,[{d:`1234`,append:`print(rakam_toplami(1234))`,out:`10`},{d:`Tek rakam`,append:`print(rakam_toplami(7))`,out:`7`},{d:`Sıfır`,append:`print(rakam_toplami(0))`,out:`0`},{d:`str() kullanılmamış`,src:`^(?![\\s\\S]*str\\()`}],[`n % 10 son rakamdır; n // 10 son rakamı atar.`],[`1234 için 10`])]})]),El=G(41,`tkinter'a Giriş`,`İlk pencereni aç: Tk(), başlık, boyut, Label ve mainloop. Pencereyi ekranda gör.`,`m40-l3`,e=>[W(`m41`,1,e(1),`İlk pencerem`,14,[`Grafik arayüz (GUI) kavramını anlamak`,`tkinter ile pencere açmak, başlık ve boyut vermek`,`mainloop()'un ne yaptığını bilmek`],[L(`b1`,`Şimdiye kadar programların siyah bir terminalde çalıştı. Gerçek uygulamalar ise pencereler, düğmeler ve kutularla konuşur: buna grafik arayüz (GUI) denir. Python'un hazır GUI kütüphanesi tkinter'dır. Önce kütüphaneyi içe aktarır, sonra Tk() ile ana pencereyi oluşturursun. title() başlığı, geometry("genişlikxyükseklik") boyutu belirler. Son satırda mainloop() yazarsın: pencereyi açık tutan ve tıklamalarını dinleyen olay döngüsüdür.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("İlk Penceren")
pencere.geometry("300x150")
pencere.mainloop()`,`Çalıştırınca kodun altında bir "Pencere önizleme" görünür: başlığı "İlk Penceren" olan 300x150 boyutunda boş bir pencere. Üstteki x işaretiyle kapatabilirsin.`),z(`b3`,`info`,`PyLearn'de gerçek tkinter yerine onu taklit eden bir simülatör çalışır. Kod, gerçek bilgisayarında yazacağın kodla aynıdır; pencere sayfanın içinde çizilir. Önemli fark: gerçek Python'da mainloop() pencere kapanana kadar bekler; burada hemen döner ve pencere açık kalır.`)],[B(`m41-l1-e1`,`Pencereyi oluştur`,`kolay`,20,`tkinter'ı tk adıyla içe aktar. pencere adında bir Tk() penceresi oluştur; başlığı "Merhaba tkinter", boyutu 300x150 olsun. En sonda mainloop() çağır.`,I`import tkinter as tk

# pencereyi oluştur
`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Merhaba tkinter")
pencere.geometry("300x150")
pencere.mainloop()
`,[{d:`Başlık`,append:`print(pencere.title())`,out:`Merhaba tkinter`},{d:`Boyut`,append:`print(pencere.geometry())`,out:`300x150`},{d:`mainloop çağrılmış`,src:`mainloop\\(\\)`}],[`pencere = tk.Tk() ile başla.`,`pencere.title("...") ve pencere.geometry("300x150")`],[`Başlık: Merhaba tkinter`,`Boyut: 300x150`])]),W(`m41`,2,e(2),`Label: ekrana yazı yazmak`,14,[`Label bileşeni oluşturmak`,`Yazı tipi ve renk vermek`,`pack() ile pencereye yerleştirmek`],[L(`b1`,`Pencerelerin içindeki parçalara bileşen (widget) denir. Label, ekrana yazı gösteren bileşendir: tk.Label(pencere, text="Merhaba"). İlk parametre bileşenin hangi pencerede (ya da çerçevede) duracağını söyler. Bileşen oluşturmak yetmez; ekranda görünmesi için bir yerleştirici çağırmalısın. En basiti pack()'tir: bileşeni pencerenin içine alt alta dizer. font, fg (yazı rengi) ve bg (arka plan) seçenekleriyle görünümü değiştirirsin.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Etiketler")

baslik = tk.Label(pencere, text="Merhaba, Dünya!", font=("Arial", 22, "bold"), fg="navy")
baslik.pack(pady=10)

alt_yazi = tk.Label(pencere, text="İlk etiketim", fg="white", bg="darkgreen", padx=10, pady=5)
alt_yazi.pack()

pencere.mainloop()`,`İki Label oluşturuldu ve pack() ile alt alta yerleştirildi. font=("Arial", 22, "bold") yazı tipi, boyut ve kalınlığı verir; fg yazı rengi, bg arka plan rengidir; pady dikey boşluk bırakır.`),z(`b3`,`warning`,`Çok sık yapılan hata: etiket = tk.Label(...).pack() yazmak. pack() hiçbir şey döndürmez (None), yani etiket None olur. Önce Label'ı oluştur, sonra ayrı satırda pack() yaz.`)],[B(`m41-l2-e1`,`Mavi bir karşılama`,`kolay`,20,`pencere içinde etiket adında bir Label oluştur: metni "Merhaba, Dünya!", yazı tipi ("Arial", 20), yazı rengi (fg) "blue" olsun. Sonra pack() ile yerleştir.`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Selam")

pencere.mainloop()
`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Selam")

etiket = tk.Label(pencere, text="Merhaba, Dünya!", font=("Arial", 20), fg="blue")
etiket.pack()

pencere.mainloop()
`,[{d:`Metin`,append:`print(etiket.cget("text"))`,out:`Merhaba, Dünya!`},{d:`Yazı rengi`,append:`print(etiket.cget("fg"))`,out:`blue`},{d:`Yerleştirilmiş`,append:`print(len(pencere.pack_slaves()))`,out:`1`}],[`etiket = tk.Label(pencere, text=..., font=..., fg=...)`,`Ayrı bir satırda etiket.pack()`],[`Metin doğru`,`Renk mavi`,`pack() çağrılmış`])]),W(`m41`,3,e(3),`Özellikleri değiştirmek`,12,[`config() ile bileşen özelliklerini değiştirmek`,`cget() ile okumak`,`Pencereyi yeniden boyutlandırılamaz yapmak`],[L(`b1`,`Bir bileşen oluşturulduktan sonra da özellikleri değiştirilebilir. config(özellik=değer) (ya da configure) bir veya birkaç özelliği günceller; cget("özellik") değerini okur; köşeli parantez de çalışır: etiket["text"]. Pencerenin kendisi de bir bileşen gibidir: configure(bg="...") arka planı değiştirir; resizable(False, False) kullanıcının pencereyi büyütüp küçültmesini engeller.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Özellikler")
pencere.configure(bg="lightyellow")
pencere.resizable(False, False)

etiket = tk.Label(pencere, text="Eski metin", bg="lightyellow")
etiket.pack(padx=20, pady=20)

etiket.config(text="Yeni metin", fg="red")
etiket["font"] = ("Arial", 16)
print(etiket.cget("text"), etiket["fg"])
print(pencere.resizable())

pencere.mainloop()`,`Etiket önce "Eski metin" ile oluşturuldu, hemen ardından config() ile "Yeni metin" ve kırmızı renk verildi. cget ve [] ile özellikler okunabilir; print() çıktıları kodun üstündeki çıktı kutusunda görünür.`),z(`b3`,`tip`,`Programın çalışırken bileşenleri güncelleyebilmesi (örneğin bir düğmeye basınca etiket metnini değiştirmesi) tkinter'ın en önemli fikridir. Bunu bir sonraki modülde yapacaksın.`)],[B(`m41-l3-e1`,`Pencereyi ayarla`,`kolay`,20,`pencere'nin arka planını (bg) "lightyellow" yap ve pencerenin yeniden boyutlandırılmasını (genişlik ve yükseklik için) engelle.`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Ayarlar")

pencere.mainloop()
`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Ayarlar")
pencere.configure(bg="lightyellow")
pencere.resizable(False, False)

pencere.mainloop()
`,[{d:`Arka plan rengi`,append:`print(pencere.cget("bg"))`,out:`lightyellow`},{d:`Boyutlandırma kapalı`,append:`print(pencere.resizable())`,out:`(False, False)`}],[`pencere.configure(bg="lightyellow")`,`pencere.resizable(False, False)`],[`Arka plan lightyellow`,`resizable (False, False)`])],{quiz:U(`m41-quiz`,`Modül 41 mini sınavı`,[H(`q1`,`tkinter ile ana pencere nasıl oluşturulur?`,[`tk.Tk()`,`tk.Window()`,`tk.Pencere()`,`tk.Main()`],0,`tkinter'da ana pencere tk.Tk() ile oluşturulur.`),H(`q2`,`mainloop() ne işe yarar?`,[`Pencereyi açık tutar ve olayları (tıklamalar vb.) dinler`,`Pencereyi kapatır`,`Pencerenin rengini değiştirir`,`Programı hızlandırır`],0,`mainloop() olay döngüsünü başlatır; pencere kapanana kadar tıklamaları, tuşları dinler.`),H(`q3`,`etiket = tk.Label(pencere, text="Merhaba").pack() satırından sonra etiket neye eşit olur?`,[`None`,`Label nesnesi`,`"Merhaba"`,`Hata verir`],0,`pack() None döndürür; bu yüzden bileşen oluşturma ve yerleştirme ayrı satırlarda yazılmalıdır.`),H(`q4`,`Bir etiketin metnini sonradan değiştirmek için hangisi kullanılır?`,[`etiket.config(text="Yeni")`,`etiket.text = "Yeni"`,`etiket.set("Yeni")`,`etiket.write("Yeni")`],0,`config() ile (ya da etiket["text"] = ...) özellikler güncellenir.`)]),practice:[V(`p-m41-pack`,`Etiket None olmuş`,`orta`,25,`Kod "Selam" yazdırmalı ama AttributeError veriyor: etiket değişkeni None. Nedenini bul ve düzelt.`,[{type:`AttributeError`,description:`Label(...).pack() tek satırda yazılınca değişkene pack()'in sonucu (None) atanır`}],I`import tkinter as tk
pencere = tk.Tk()
etiket = tk.Label(pencere, text="Selam").pack()
print(etiket.cget("text"))`,I`import tkinter as tk
pencere = tk.Tk()
etiket = tk.Label(pencere, text="Selam")
etiket.pack()
print(etiket.cget("text"))`,[{d:`Çıktı`,out:`Selam`}],[`Label oluşturmayı ve pack() çağırmayı iki ayrı satıra böl.`]),B(`p-m41-title`,`Başlık ve etiket`,`kolay`,20,`pencere'nin başlığını "Notlar" yap ve içine metni "Bugünün notu" olan bir etiket (adı not_etiketi) koy ve pack() ile yerleştir.`,I`import tkinter as tk
pencere = tk.Tk()
`,I`import tkinter as tk
pencere = tk.Tk()
pencere.title("Notlar")
not_etiketi = tk.Label(pencere, text="Bugünün notu")
not_etiketi.pack()
`,[{d:`Başlık`,append:`print(pencere.title())`,out:`Notlar`},{d:`Etiket metni`,append:`print(not_etiketi.cget("text"))`,out:`Bugünün notu`},{d:`Yerleştirilmiş`,append:`print(len(pencere.pack_slaves()))`,out:`1`}],[`pencere.title("Notlar") yaz.`],[`Başlık Notlar`,`Etiket metni doğru`])]})]),Dl=G(42,`Düğmeler ve Olaylar`,`Button, command, Entry ve StringVar ile tıklanabilir uygulamalar.`,`m41-l3`,e=>[W(`m42`,1,e(1),`Button ve command`,14,[`Düğme oluşturmak`,`command ile düğmeye fonksiyon bağlamak`,`Olay güdümlü programlamayı anlamak`],[L(`b1`,`Grafik arayüzlü programlar olay güdümlüdür: program bekler, kullanıcı bir şey yapınca (tıklama, tuş) ilgili fonksiyon çalışır. Düğme tk.Button ile oluşturulur. command seçeneğine tıklanınca çalışacak fonksiyonun ADINI verirsin. Dikkat: parantez koyma! command=selamla fonksiyonu bağlar; command=selamla() ise fonksiyonu hemen şimdi çalıştırır ve sonucunu bağlar.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Düğme")

etiket = tk.Label(pencere, text="Henüz tıklanmadı", font=("Arial", 14))
etiket.pack(pady=10)

def tikla():
    etiket.config(text="Düğmeye tıklandı!")

dugme = tk.Button(pencere, text="Bana tıkla", command=tikla)
dugme.pack(pady=10)

pencere.mainloop()`,`Önizlemedeki düğmeye tıkla: tikla() fonksiyonu çalışır ve etiketin metni değişir. Programın başka hiçbir satırı yeniden çalışmaz; yalnızca bağlı fonksiyon çağrılır.`),z(`b3`,`warning`,`command=tikla() yazarsan fonksiyon düğmeye basmadan, düğme oluşturulurken bir kez çalışır. Parantezsiz yaz: command=tikla.`)],[B(`m42-l1-e1`,`Tıklayınca değiştir`,`orta`,30,`tikla() fonksiyonunu yaz: etiket'in metnini "Tıklandı!" yapsın. Sonra "Tıkla" yazan, command'i tikla olan dugme adında bir Button oluştur ve pack() ile yerleştir.`,I`import tkinter as tk

pencere = tk.Tk()
etiket = tk.Label(pencere, text="Bekliyor")
etiket.pack()

def tikla():
    pass

pencere.mainloop()
`,I`import tkinter as tk

pencere = tk.Tk()
etiket = tk.Label(pencere, text="Bekliyor")
etiket.pack()

def tikla():
    etiket.config(text="Tıklandı!")

dugme = tk.Button(pencere, text="Tıkla", command=tikla)
dugme.pack()

pencere.mainloop()
`,[{d:`Başlangıç metni`,append:`print(etiket.cget("text"))`,out:`Bekliyor`},{d:`Tıklayınca değişir`,append:`dugme.invoke()
print(etiket.cget("text"))`,out:`Tıklandı!`},{d:`Düğme metni`,append:`print(dugme.cget("text"))`,out:`Tıkla`}],[`def tikla(): içinde etiket.config(text="Tıklandı!")`,`dugme = tk.Button(pencere, text="Tıkla", command=tikla)`],[`Başlangıç Bekliyor`,`Tıklayınca Tıklandı!`])]),W(`m42`,2,e(2),`Entry: kullanıcıdan yazı almak`,14,[`Entry ile giriş kutusu oluşturmak`,`get(), insert() ve delete() kullanmak`],[L(`b1`,`Terminaldeki input() yerine pencerede Entry (giriş kutusu) kullanılır. Kutuya yazılanı giris.get() ile okursun; her zaman metin (str) olarak gelir. insert(0, "yazı") başa metin ekler, delete(0, tk.END) kutuyu temizler. Genellikle bir düğmenin command fonksiyonu içinde get() çağırırsın: kullanıcı yazar, düğmeye basar, program okur.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Selamlama")

tk.Label(pencere, text="Adın:").pack()
giris = tk.Entry(pencere, width=20)
giris.pack()

sonuc = tk.Label(pencere, text="", font=("Arial", 14))
sonuc.pack(pady=8)

def selamla():
    ad = giris.get()
    sonuc.config(text=f"Merhaba {ad}!")
    giris.delete(0, tk.END)

tk.Button(pencere, text="Selamla", command=selamla).pack()

pencere.mainloop()`,`Giriş kutusuna adını yaz ve "Selamla"ya bas: selamla() kutudaki metni get() ile okur, etikete yazar ve delete(0, tk.END) ile kutuyu temizler.`),z(`b3`,`tip`,`Sayı bekliyorsan get() sonucunu int() ya da float() ile çevirmeyi unutma; kullanıcı sayı yerine harf yazarsa ValueError almamak için try / except kullan (Modül 10).`)],[B(`m42-l2-e1`,`Kişiye selam`,`orta`,30,`selamla() fonksiyonunu yaz: giris kutusundaki adı oku ve etiket'in metnini "Merhaba <ad>!" yap.`,I`import tkinter as tk

pencere = tk.Tk()
giris = tk.Entry(pencere)
giris.pack()
etiket = tk.Label(pencere, text="")
etiket.pack()

def selamla():
    pass

tk.Button(pencere, text="Selamla", command=selamla).pack()
pencere.mainloop()
`,I`import tkinter as tk

pencere = tk.Tk()
giris = tk.Entry(pencere)
giris.pack()
etiket = tk.Label(pencere, text="")
etiket.pack()

def selamla():
    ad = giris.get()
    etiket.config(text=f"Merhaba {ad}!")

tk.Button(pencere, text="Selamla", command=selamla).pack()
pencere.mainloop()
`,[{d:`Ada`,append:`giris.insert(0, "Ada")
selamla()
print(etiket.cget("text"))`,out:`Merhaba Ada!`},{d:`Can`,append:`giris.insert(0, "Can")
selamla()
print(etiket.cget("text"))`,out:`Merhaba Can!`},{d:`get kullanılmış`,src:`get\\(\\)`}],[`ad = giris.get() ile kutudaki metni al.`,`etiket.config(text=f"Merhaba {ad}!")`],[`Merhaba Ada!`,`Merhaba Can!`])]),W(`m42`,3,e(3),`StringVar ve IntVar`,14,[`Kontrol değişkenlerini (StringVar, IntVar) kullanmak`,`textvariable ile bileşeni değişkene bağlamak`],[L(`b1`,`tkinter'ın kendi değişken türleri vardır: StringVar (metin), IntVar (tam sayı), DoubleVar (ondalık) ve BooleanVar. Bir bileşeni textvariable ile bu değişkene bağlarsan değişkenin değeri değiştiğinde bileşen kendiliğinden güncellenir; ayrıca config() çağırmana gerek kalmaz. Değer .get() ile okunur, .set() ile yazılır.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Sayaç")

sayi = tk.IntVar(value=0)
metin = tk.StringVar(value="Sayı: 0")

tk.Label(pencere, textvariable=metin, font=("Arial", 18)).pack(pady=10)

def artir():
    sayi.set(sayi.get() + 1)
    metin.set(f"Sayı: {sayi.get()}")

tk.Button(pencere, text="+1", command=artir).pack(pady=10)

pencere.mainloop()`,`Etiket textvariable=metin ile bağlandığı için metin.set(...) çağrıldığında ekrandaki yazı kendiliğinden güncellenir. IntVar ise sayıyı saklar.`),z(`b3`,`tip`,`Aynı değişkeni birden çok bileşene bağlayabilirsin: biri değişince hepsi birlikte güncellenir. Bu, birbirine bağlı ekranlar için çok kullanışlıdır.`)],[B(`m42-l3-e1`,`Sayaç`,`orta`,30,`artir() fonksiyonunu yaz: sayi değişkenini 1 artırsın ve metin değişkenini "Sayı: <değer>" yapsın.`,I`import tkinter as tk

pencere = tk.Tk()
sayi = tk.IntVar(value=0)
metin = tk.StringVar(value="Sayı: 0")
tk.Label(pencere, textvariable=metin).pack()

def artir():
    pass

tk.Button(pencere, text="+1", command=artir).pack()
pencere.mainloop()
`,I`import tkinter as tk

pencere = tk.Tk()
sayi = tk.IntVar(value=0)
metin = tk.StringVar(value="Sayı: 0")
tk.Label(pencere, textvariable=metin).pack()

def artir():
    sayi.set(sayi.get() + 1)
    metin.set(f"Sayı: {sayi.get()}")

tk.Button(pencere, text="+1", command=artir).pack()
pencere.mainloop()
`,[{d:`Başlangıç`,append:`print(sayi.get(), metin.get())`,out:`0 Sayı: 0`},{d:`Üç tıklama`,append:`artir()
artir()
artir()
print(sayi.get(), metin.get())`,out:`3 Sayı: 3`}],[`sayi.set(sayi.get() + 1)`,`metin.set(f"Sayı: {sayi.get()}")`],[`Başlangıç 0`,`Üç artıştan sonra 3`])],{quiz:U(`m42-quiz`,`Modül 42 mini sınavı`,[H(`q1`,`Düğmeye tıklanınca çalışacak fonksiyon nasıl bağlanır?`,[`command=fonksiyon_adi (parantezsiz)`,`command=fonksiyon_adi()`,`click=fonksiyon_adi`,`on_click(fonksiyon_adi)`],0,`command seçeneğine fonksiyonun adı parantezsiz verilir.`),H(`q2`,`command=tikla() yazılırsa ne olur?`,[`Fonksiyon düğme oluşturulurken hemen çalışır`,`Düğmeye basınca çalışır`,`Hiçbir zaman çalışmaz`,`SyntaxError oluşur`],0,`Parantez fonksiyonu çağırır; sonucu (None) command'e atanır.`),H(`q3`,`Entry kutusundaki metin nasıl okunur?`,[`giris.get()`,`giris.text`,`giris.read()`,`giris.value`],0,`Entry.get() kutudaki metni (str) verir.`),H(`q4`,`Bir etiketin textvariable ile bağlandığı StringVar değişince ne olur?`,[`Etiketin yazısı kendiliğinden güncellenir`,`Hiçbir şey olmaz`,`Pencere kapanır`,`Hata oluşur`],0,`textvariable bileşeni değişkene bağlar; değişken değişince bileşen güncellenir.`)]),practice:[V(`p-m42-parens`,`Düğme yerine hemen çalışıyor`,`orta`,30,`Program açılır açılmaz "tıklandı" yazıyor, düğmeye basınca ise hiçbir şey yazmıyor. command'deki hatayı bul ve düzelt.`,[{type:`Mantık hatası`,description:`command=tikla() fonksiyonu hemen çalıştırır; parantez olmamalı`}],I`import tkinter as tk
pencere = tk.Tk()
def tikla():
    print("tıklandı")
dugme = tk.Button(pencere, text="x", command=tikla())
dugme.pack()`,I`import tkinter as tk
pencere = tk.Tk()
def tikla():
    print("tıklandı")
dugme = tk.Button(pencere, text="x", command=tikla)
dugme.pack()`,[{d:`Oluşturulurken yazmamalı`,out:``},{d:`Tıklayınca yazar`,append:`dugme.invoke()`,out:`tıklandı`}],[`command=tikla yaz (parantezsiz).`]),B(`p-m42-clear`,`Kutuyu temizle`,`kolay`,20,`temizle() fonksiyonu giris kutusundaki yazıyı silsin.`,I`import tkinter as tk
pencere = tk.Tk()
giris = tk.Entry(pencere)
giris.pack()
giris.insert(0, "silinecek yazı")

def temizle():
    pass
`,I`import tkinter as tk
pencere = tk.Tk()
giris = tk.Entry(pencere)
giris.pack()
giris.insert(0, "silinecek yazı")

def temizle():
    giris.delete(0, tk.END)
`,[{d:`Başta dolu`,append:`print(repr(giris.get()))`,out:`'silinecek yazı'`},{d:`Temizlenir`,append:`temizle()
print(repr(giris.get()))`,out:`''`}],[`giris.delete(0, tk.END)`],[`Başta dolu`,`Temizledikten sonra boş`])]})]),Ol=G(43,`Yerleşim: pack, grid, place`,`Bileşenleri Frame'lerle düzenle ve pencereyi güzel yerleştir.`,`m42-l3`,e=>[W(`m43`,1,e(1),`pack: alt alta ve yan yana`,14,[`pack() seçeneklerini (side, fill, expand, padx, pady) kullanmak`],[L(`b1`,`Bileşenleri pencereye yerleştirmenin üç yolu vardır: pack, grid ve place. Bu derste pack'i öğreniyorsun: bileşenleri pencerenin bir kenarına doğru dizer. side hangi kenara yaslanacağını belirler ("top" üst, "bottom" alt, "left" sol, "right" sağ; varsayılan "top"). fill="x" yatayda, fill="y" dikeyde, fill="both" iki yönde bileşeni boş alana yayar. expand=True kalan boş alanı bileşene verir. padx ve pady çevresine boşluk bırakır.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("pack örneği")
pencere.geometry("320x200")

ust = tk.Label(pencere, text="Başlık çubuğu", bg="navy", fg="white")
ust.pack(side="top", fill="x")

alt = tk.Label(pencere, text="Durum çubuğu", bg="gray")
alt.pack(side="bottom", fill="x")

sol = tk.Label(pencere, text="Sol menü", bg="lightblue")
sol.pack(side="left", fill="y", padx=5, pady=5)

icerik = tk.Label(pencere, text="Ana içerik", bg="lightyellow")
icerik.pack(side="left", fill="both", expand=True, padx=5, pady=5)

pencere.mainloop()`,`Başlık üste, durum çubuğu alta yaslandı ve fill="x" ile yatayda uzadı. Sol menü sola yaslandı ve dikeyde uzadı. İçerik, kalan boş alanı expand=True ile doldurdu. Sıra önemlidir: pack() bileşenleri çağrıldığı sırayla yerleştirir.`),z(`b3`,`tip`,`Ekranda beklediğin gibi durmuyorsa önce pack() çağrılarının sırasına bak: önce üst ve alt çubukları, sonra kenarları, en son ortadaki içeriği yerleştirmek en sağlıklısıdır.`)],[B(`m43-l1-e1`,`Üç etiketi yerleştir`,`orta`,25,`pencere içinde üç Label oluştur ve pack() ile yerleştir: ust (side "top", fill "x"), sol (side "left") ve sag (side "right"). Metinleri istediğin gibi olabilir.`,I`import tkinter as tk

pencere = tk.Tk()
`,I`import tkinter as tk

pencere = tk.Tk()
ust = tk.Label(pencere, text="Üst")
ust.pack(side="top", fill="x")
sol = tk.Label(pencere, text="Sol")
sol.pack(side="left")
sag = tk.Label(pencere, text="Sağ")
sag.pack(side="right")
`,[{d:`ust`,append:`print(ust.pack_info()["side"], ust.pack_info()["fill"])`,out:`top x`},{d:`sol`,append:`print(sol.pack_info()["side"])`,out:`left`},{d:`sag`,append:`print(sag.pack_info()["side"])`,out:`right`}],[`ust = tk.Label(pencere, text="Üst") ve ust.pack(side="top", fill="x")`,`Aynı şekilde sol ve sag.`],[`ust: top ve x`,`sol: left`,`sag: right`])]),W(`m43`,2,e(2),`grid: satır ve sütunlar`,14,[`grid() ile tablo düzeni kurmak`,`sticky ve columnspan kullanmak`],[L(`b1`,`Formlar ve hesap makinesi gibi tablo biçimli düzenler için grid kullanılır: her bileşene row (satır) ve column (sütun) verirsin; numaralar 0'dan başlar. sticky bileşenin hücrede hangi yöne yaslanacağını belirler ("w" sola, "e" sağa, "ew" iki yana yayılır; pusula yönleri: n, s, e, w). columnspan bir bileşeni birden çok sütuna yayar. padx ve pady yine boşluk bırakır.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Kayıt formu")

tk.Label(pencere, text="Ad:").grid(row=0, column=0, sticky="e", padx=5, pady=3)
tk.Entry(pencere, width=20).grid(row=0, column=1, padx=5)

tk.Label(pencere, text="Soyad:").grid(row=1, column=0, sticky="e", padx=5, pady=3)
tk.Entry(pencere, width=20).grid(row=1, column=1, padx=5)

tk.Button(pencere, text="Kaydet").grid(row=2, column=0, columnspan=2, pady=10)

pencere.mainloop()`,`Etiketler 0. sütunda ve sağa yaslı (sticky="e"), giriş kutuları 1. sütunda. Düğme columnspan=2 ile iki sütuna yayılıp ortalandı.`),z(`b3`,`warning`,`Aynı pencerede (ya da çerçevede) pack ile grid'i karıştıramazsın: TclError alırsın. Bir kabın içinde yalnızca birini seç. Farklı çerçevelerde farklı yöntemler kullanabilirsin.`)],[B(`m43-l2-e1`,`Form düzeni`,`orta`,30,`grid ile 2 satırlı bir form kur: ad_etiket ("Ad:") 0. satır 0. sütun, sticky "w"; ad_giris (Entry) 0. satır 1. sütun; soyad_etiket ("Soyad:") 1. satır 0. sütun; soyad_giris 1. satır 1. sütun.`,I`import tkinter as tk

pencere = tk.Tk()
`,I`import tkinter as tk

pencere = tk.Tk()
ad_etiket = tk.Label(pencere, text="Ad:")
ad_etiket.grid(row=0, column=0, sticky="w")
ad_giris = tk.Entry(pencere)
ad_giris.grid(row=0, column=1)
soyad_etiket = tk.Label(pencere, text="Soyad:")
soyad_etiket.grid(row=1, column=0, sticky="w")
soyad_giris = tk.Entry(pencere)
soyad_giris.grid(row=1, column=1)
`,[{d:`Ad satırı`,append:`print(ad_etiket.grid_info()["row"], ad_etiket.grid_info()["column"], ad_giris.grid_info()["column"])`,out:`0 0 1`},{d:`Soyad satırı`,append:`print(soyad_etiket.grid_info()["row"], soyad_giris.grid_info()["row"], soyad_giris.grid_info()["column"])`,out:`1 1 1`},{d:`Sola yaslı`,append:`print(ad_etiket.grid_info()["sticky"])`,out:`w`}],[`Her bileşeni önce oluştur, sonra .grid(row=..., column=...) çağır.`,`Etiketler için sticky="w".`],[`Ad satırı 0, soyad satırı 1`,`Etiketler sola yaslı`])]),W(`m43`,3,e(3),`Frame ve place`,14,[`Frame ile bileşenleri gruplamak`,`place() ile tam konum vermek`],[L(`b1`,`Frame, başka bileşenleri içinde tutan görünmez bir kutudur. Karmaşık pencereleri Frame'lerle parçalara böl: her çerçevenin içinde kendi düzenleyicisini (pack ya da grid) kullanabilirsin; çerçevenin kendisi de ana pencerede yerleştirilir. place(x=..., y=...) ise bileşeni piksel olarak tam konumuna koyar (relx ve rely 0 ile 1 arasında oransal konum verir). place esnek değildir ama oyun alanı ve özel tasarımlar için kullanışlıdır.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Frame örneği")
pencere.geometry("300x200")

ust_cerceve = tk.Frame(pencere, bg="lightgray")
ust_cerceve.pack(fill="x")
tk.Button(ust_cerceve, text="Aç").pack(side="left", padx=2, pady=2)
tk.Button(ust_cerceve, text="Kaydet").pack(side="left", padx=2, pady=2)

alan = tk.Frame(pencere, bg="white")
alan.pack(fill="both", expand=True)
tk.Label(alan, text="Sabit konumdaki yazı", bg="yellow").place(x=40, y=30)

pencere.mainloop()`,`ust_cerceve düğmeleri yan yana tutan bir araç çubuğudur. alan ise geri kalan boş yeri dolduran beyaz bir çerçevedir; içindeki etiket place ile (40, 30) pikselinde durur. Çerçeve içindeki bileşenlerin üst bileşeni (ilk parametre) pencere değil, çerçevedir.`),z(`b3`,`tip`,`Düzeni tasarlarken önce kâğıda dikdörtgenlerle çiz: her dikdörtgen bir Frame, içindekiler onun çocukları. Sonra kodu yaz.`)],[B(`m43-l3-e1`,`Araç çubuğu`,`orta`,30,`pencere içinde cerceve adında bir Frame oluştur ve pack() ile yerleştir. İçine iki Button koy (cerceve üst bileşen olsun), ikisi de pack(side="left") ile yan yana dursun.`,I`import tkinter as tk

pencere = tk.Tk()
`,I`import tkinter as tk

pencere = tk.Tk()
cerceve = tk.Frame(pencere)
cerceve.pack()
tk.Button(cerceve, text="Aç").pack(side="left")
tk.Button(cerceve, text="Kaydet").pack(side="left")
`,[{d:`Çerçevede iki düğme`,append:`print(len(cerceve.winfo_children()), cerceve.winfo_class())`,out:`2 Frame`},{d:`Düğmeler yan yana`,append:`print([b.pack_info()["side"] for b in cerceve.winfo_children()])`,out:`['left', 'left']`},{d:`Çerçeve yerleştirilmiş`,append:`print(cerceve.pack_info()["side"])`,out:`top`}],[`cerceve = tk.Frame(pencere); cerceve.pack()`,`Düğmelerin ilk parametresi cerceve olmalı.`],[`Çerçevede iki düğme`,`İkisi de side=left`])],{quiz:U(`m43-quiz`,`Modül 43 mini sınavı`,[H(`q1`,`pack(side="left", fill="y") ne yapar?`,[`Bileşeni sola yaslar ve dikeyde uzatır`,`Bileşeni sağa yaslar`,`Bileşeni yatayda uzatır`,`Bileşeni gizler`],0,`side="left" sola yaslar; fill="y" dikeyde yayar.`),H(`q2`,`grid ile bileşeni 2. satır, 1. sütuna (sayma 0'dan) koymak için ne yazılır?`,[`grid(row=2, column=1)`,`grid(row=1, column=2)`,`grid(2, 1, 0)`,`grid(x=2, y=1)`],0,`row satır, column sütun numarasıdır; ikisi de 0'dan başlar.`),H(`q3`,`Aynı pencerede bir bileşeni pack, diğerini grid ile yerleştirirsen ne olur?`,[`TclError oluşur`,`İkisi de çalışır`,`Pencere kapanır`,`grid pack'i geçersiz kılar`],0,`Aynı kapta pack ve grid birlikte kullanılamaz.`),H(`q4`,`Frame ne işe yarar?`,[`Başka bileşenleri gruplayan bir kutudur`,`Pencereyi kapatır`,`Yazı gösterir`,`Dosya açar`],0,`Frame, bileşenleri gruplayıp düzeni parçalara bölmeyi sağlar.`)]),practice:[V(`p-m43-mix`,`pack ve grid karışmış`,`orta`,30,`Kod TclError veriyor: aynı pencerede hem pack hem grid kullanılmış. İkinci etiketi de pack ile yerleştirerek düzelt.`,[{type:`TclError`,description:`Aynı kapta pack ve grid birlikte kullanılamaz`}],I`import tkinter as tk
pencere = tk.Tk()
a = tk.Label(pencere, text="a")
a.pack()
b = tk.Label(pencere, text="b")
b.grid(row=0, column=0)
print("tamam")`,I`import tkinter as tk
pencere = tk.Tk()
a = tk.Label(pencere, text="a")
a.pack()
b = tk.Label(pencere, text="b")
b.pack()
print("tamam")`,[{d:`Hatasız çalışır`,out:`tamam`}],[`İkisini de aynı yöntemle yerleştir.`]),B(`p-m43-span`,`Başlığı yay`,`orta`,30,`baslik adlı bir etiketi grid ile 0. satırda, 0. sütundan başlayıp iki sütuna yay (columnspan=2) ve yatayda doldur (sticky "ew"). Altındaki satırda iki düğme (sütun 0 ve 1) olsun.`,I`import tkinter as tk
pencere = tk.Tk()
`,I`import tkinter as tk
pencere = tk.Tk()
baslik = tk.Label(pencere, text="Başlık")
baslik.grid(row=0, column=0, columnspan=2, sticky="ew")
tk.Button(pencere, text="Sol").grid(row=1, column=0)
tk.Button(pencere, text="Sağ").grid(row=1, column=1)
`,[{d:`Yayılmış başlık`,append:`i = baslik.grid_info()
print(i["row"], i["column"], i["columnspan"], i["sticky"])`,out:`0 0 2 ew`},{d:`İki düğme altta`,append:`print(sorted((w.grid_info()["row"], w.grid_info()["column"]) for w in pencere.winfo_children() if w is not baslik))`,out:`[(1, 0), (1, 1)]`}],[`baslik.grid(row=0, column=0, columnspan=2, sticky="ew")`],[`Başlık iki sütuna yayılmış`,`Düğmeler 1. satırda`])]})]),kl=G(44,`Seçim Bileşenleri`,`Checkbutton, Radiobutton, Listbox, Scale, Spinbox ve Combobox.`,`m43-l3`,e=>[W(`m44`,1,e(1),`Checkbutton ve Radiobutton`,14,[`Onay kutusunu (Checkbutton) bir değişkene bağlamak`,`Tek seçimli düğmeleri (Radiobutton) gruplamak`],[L(`b1`,`Checkbutton, açık/kapalı bir seçenek için onay kutusudur; BooleanVar (ya da IntVar) ile bağlanır: işaretliyse True, değilse False. Radiobutton ise "birini seç" durumları içindir: aynı gruptaki düğmeler aynı değişkene bağlanır ve her biri farklı bir value taşır; değişkenin değeri seçilen düğmenin value'sudur. Seçimin ne zaman değiştiğini yakalamak için command kullanılabilir.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Seçenekler")

bulten = tk.BooleanVar()
boyut = tk.StringVar(value="orta")
sonuc = tk.Label(pencere, text="-", fg="darkgreen")

def guncelle():
    sonuc.config(text=f"Bülten: {bulten.get()}, boyut: {boyut.get()}")

tk.Checkbutton(pencere, text="Bültene abone ol", variable=bulten, command=guncelle).pack(anchor="w")
for metin, deger in [("Küçük", "kucuk"), ("Orta", "orta"), ("Büyük", "buyuk")]:
    tk.Radiobutton(pencere, text=metin, variable=boyut, value=deger, command=guncelle).pack(anchor="w")
sonuc.pack(pady=8)
guncelle()

pencere.mainloop()`,`Onay kutusunu işaretle ve bir boyut seç: command ile bağlı guncelle() değişkenlerin değerlerini etikete yazar. Üç Radiobutton aynı boyut değişkenini paylaştığı için aynı anda yalnızca biri seçilir.`),z(`b3`,`tip`,`Radiobutton'ların hepsinin variable'ı aynı nesne olmalı; yoksa her biri ayrı bir grup olur ve birden çok seçim yapılabilir.`)],[B(`m44-l1-e1`,`Boyut seçimi`,`orta`,30,`kutu adında bir Checkbutton (variable=onay) ve kucuk, buyuk adlarında iki Radiobutton oluştur (variable=boyut; value'ları sırasıyla "kucuk" ve "buyuk"). Üçünü de pack() ile yerleştir.`,I`import tkinter as tk

pencere = tk.Tk()
onay = tk.BooleanVar()
boyut = tk.StringVar(value="kucuk")
`,I`import tkinter as tk

pencere = tk.Tk()
onay = tk.BooleanVar()
boyut = tk.StringVar(value="kucuk")

kutu = tk.Checkbutton(pencere, text="Onay", variable=onay)
kutu.pack()
kucuk = tk.Radiobutton(pencere, text="Küçük", variable=boyut, value="kucuk")
kucuk.pack()
buyuk = tk.Radiobutton(pencere, text="Büyük", variable=boyut, value="buyuk")
buyuk.pack()
`,[{d:`Onay kutusu`,append:`print(onay.get())
kutu.invoke()
print(onay.get())`,out:`False
True`},{d:`Radiobutton seçimi`,append:`print(boyut.get())
buyuk.invoke()
print(boyut.get())`,out:`kucuk
buyuk`},{d:`Geri seçim`,append:`buyuk.invoke()
kucuk.invoke()
print(boyut.get())`,out:`kucuk`}],[`tk.Checkbutton(pencere, text="Onay", variable=onay)`,`Radiobutton'larda value="kucuk" ve value="buyuk".`],[`invoke() ile onay değişir`,`Radiobutton değişkeni günceller`])]),W(`m44`,2,e(2),`Listbox ve Combobox`,14,[`Listbox'a eleman eklemek ve seçileni okumak`,`ttk.Combobox ile açılır liste kullanmak`],[L(`b1`,`Listbox, alt alta seçenekler gösteren bir listedir. insert(tk.END, "eleman") sona ekler; curselection() seçilen elemanların sıra numaralarını bir demet olarak verir; get(sıra) o elemanın metnini döndürür. Bir şey seçilmediyse curselection() boştur, bunu kontrol et. ttk.Combobox ise aynı işi açılır liste (aşağı oklu kutu) ile yapar: values ile seçenekleri verirsin, get() seçileni okur. ttk, tkinter'ın daha modern görünümlü bileşenlerini içeren alt modüldür.`),R(`b2`,I`import tkinter as tk
from tkinter import ttk

pencere = tk.Tk()
pencere.title("Listeler")

liste = tk.Listbox(pencere, height=4)
for meyve in ["Elma", "Armut", "Muz", "Kiraz"]:
    liste.insert(tk.END, meyve)
liste.pack(padx=10, pady=5)

sonuc = tk.Label(pencere, text="Bir meyve seç")
sonuc.pack()

def sec(olay):
    secilen = liste.curselection()
    if secilen:
        sonuc.config(text="Seçilen: " + liste.get(secilen[0]))

liste.bind("<<ListboxSelect>>", sec)

sehir = ttk.Combobox(pencere, values=["Ankara", "İzmir", "Bursa"])
sehir.pack(pady=5)
sehir.set("Ankara")

pencere.mainloop()`,`Listeden bir meyve seçince <<ListboxSelect>> olayı sec() fonksiyonunu çalıştırır; curselection() ile sıra numarası, get() ile metin alınır. Combobox'ta set() ilk değeri belirler, get() seçileni okur.`),z(`b3`,`tip`,`bind("<<ListboxSelect>>", fonksiyon) ile bağlanan fonksiyon bir olay (event) parametresi alır; kullanmasan da yazmak zorundasın.`)],[B(`m44-l2-e1`,`Meyve listesi`,`orta`,30,`liste adlı Listbox'a "Elma", "Armut" ve "Muz" elemanlarını (bu sırayla) ekle. secileni_al() fonksiyonu seçili elemanın metnini döndürsün; seçili eleman yoksa "Yok" döndürsün.`,I`import tkinter as tk

pencere = tk.Tk()
liste = tk.Listbox(pencere)
liste.pack()

def secileni_al():
    pass
`,I`import tkinter as tk

pencere = tk.Tk()
liste = tk.Listbox(pencere)
liste.pack()
liste.insert(tk.END, "Elma")
liste.insert(tk.END, "Armut")
liste.insert(tk.END, "Muz")

def secileni_al():
    secilen = liste.curselection()
    if not secilen:
        return "Yok"
    return liste.get(secilen[0])
`,[{d:`Eleman sayısı`,append:`print(liste.size(), liste.get(0))`,out:`3 Elma`},{d:`Seçilen`,append:`liste.selection_set(1)
print(secileni_al())`,out:`Armut`},{d:`Seçim yokken`,append:`print(secileni_al())`,out:`Yok`}],[`liste.insert(tk.END, "Elma") gibi üç kez yaz.`,`liste.curselection() boş demettir.`],[`3 eleman`,`Seçileni döndürür`,`Seçim yoksa Yok`])]),W(`m44`,3,e(3),`Scale ve Spinbox`,12,[`Kaydırıcı (Scale) ile sayı seçmek`,`Spinbox ile sayı aralığında gezmek`],[L(`b1`,`Scale, fareyle sürüklenen bir kaydırıcıdır: from_ en küçük, to en büyük değerdir (from tek başına Python'da anahtar kelime olduğu için sonuna alt çizgi konur), orient="horizontal" yatay yapar. get() değeri verir; set() değeri ayarlar; command ile değer değişince bir fonksiyon çalıştırabilirsin (fonksiyon değeri metin olarak parametre alır). Spinbox ise küçük oklarla sayıyı artırıp azaltan bir giriş kutusudur.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Ses ayarı")

etiket = tk.Label(pencere, text="Ses: 30", font=("Arial", 14))
etiket.pack(pady=5)

def goster(deger):
    etiket.config(text="Ses: " + deger)

olcek = tk.Scale(pencere, from_=0, to=100, orient="horizontal", command=goster, length=200)
olcek.set(30)
olcek.pack(padx=10)

adet = tk.Spinbox(pencere, from_=1, to=10, width=5)
adet.pack(pady=8)

pencere.mainloop()`,`Kaydırıcıyı sürüklerken goster() her değişimde yeni değeri alır. set(30) başlangıç değeridir. Spinbox'ın oklarıyla 1 ile 10 arasında gezilir; değeri get() ile okunur.`),z(`b3`,`warning`,`Scale'in command fonksiyonu değeri metin olarak alır ("30"). Hesap yapacaksan int() ya da float() ile çevir.`)],[B(`m44-l3-e1`,`Kaydırıcı ve etiket`,`orta`,30,`olcek adında 0 ile 10 arasında (yatay) bir Scale oluştur. goster(deger) fonksiyonu etiket'in metnini "Değer: <deger>" yapsın.`,I`import tkinter as tk

pencere = tk.Tk()
etiket = tk.Label(pencere, text="Değer: 0")
etiket.pack()

def goster(deger):
    pass
`,I`import tkinter as tk

pencere = tk.Tk()
etiket = tk.Label(pencere, text="Değer: 0")
etiket.pack()

def goster(deger):
    etiket.config(text=f"Değer: {deger}")

olcek = tk.Scale(pencere, from_=0, to=10, orient="horizontal", command=goster)
olcek.pack()
`,[{d:`Aralık`,append:`print(olcek.cget("from"), olcek.cget("to"))`,out:`0 10`},{d:`set ve get`,append:`olcek.set(7)
print(olcek.get())`,out:`7`},{d:`goster`,append:`goster(4)
print(etiket.cget("text"))`,out:`Değer: 4`}],[`olcek = tk.Scale(pencere, from_=0, to=10, orient="horizontal", command=goster)`,`goster içinde etiket.config(text=f"Değer: {deger}")`],[`Aralık 0-10`,`goster doğru yazar`])],{quiz:U(`m44-quiz`,`Modül 44 mini sınavı`,[H(`q1`,`Radiobutton'lar aynı anda yalnızca biri seçilsin diye nasıl gruplanır?`,[`Hepsi aynı variable'a bağlanır`,`Hepsi aynı Frame içine konur`,`Hepsine aynı value verilir`,`Hepsi grid ile yerleştirilir`],0,`Aynı değişkene bağlı Radiobutton'lar bir grup oluşturur.`),H(`q2`,`Listbox'ta seçili elemanların sıra numaralarını hangi metot verir?`,[`curselection()`,`selected()`,`get_selected()`,`index()`],0,`curselection() seçili sıra numaralarını bir demet olarak verir.`),H(`q3`,`Scale oluştururken en küçük değer hangi seçenekle verilir?`,[`from_`,`from`,`min`,`start`],0,`from Python'da anahtar kelime olduğu için tkinter from_ adını kullanır.`),H(`q4`,`Checkbutton'ın işaretli olup olmadığını öğrenmek için ne yapılır?`,[`Bağlı olduğu değişkenin get() değerine bakılır`,`checkbutton.checked yazılır`,`checkbutton.text okunur`,`command çağrılır`],0,`Checkbutton, variable ile verilen değişkene True/False (ya da 1/0) yazar.`)]),practice:[V(`p-m44-radio`,`İki grup olmuş`,`orta`,30,`İki Radiobutton aynı anda seçilebiliyor: beklenen sonuç yalnızca "b" seçiliyken "b" yazdırmak. Düzelt.`,[{type:`Mantık hatası`,description:`Radiobutton'lar ayrı değişkenlere bağlı; aynı değişkeni paylaşmalı`}],I`import tkinter as tk
pencere = tk.Tk()
v1 = tk.StringVar()
v2 = tk.StringVar()
a = tk.Radiobutton(pencere, text="A", variable=v1, value="a")
b = tk.Radiobutton(pencere, text="B", variable=v2, value="b")
a.pack()
b.pack()
a.invoke()
b.invoke()
print(v1.get() or v2.get())`,I`import tkinter as tk
pencere = tk.Tk()
v = tk.StringVar()
a = tk.Radiobutton(pencere, text="A", variable=v, value="a")
b = tk.Radiobutton(pencere, text="B", variable=v, value="b")
a.pack()
b.pack()
a.invoke()
b.invoke()
print(v.get())`,[{d:`Son seçilen b`,out:`b`}],[`İkisi de aynı StringVar'a bağlanmalı.`]),B(`p-m44-spin`,`Adet kutusu`,`kolay`,20,`adet adında 1 ile 5 arasında bir Spinbox oluştur ve pack() ile yerleştir.`,I`import tkinter as tk
pencere = tk.Tk()
`,I`import tkinter as tk
pencere = tk.Tk()
adet = tk.Spinbox(pencere, from_=1, to=5)
adet.pack()
`,[{d:`Aralık`,append:`print(adet.cget("from"), adet.cget("to"))`,out:`1 5`},{d:`Yerleştirilmiş`,append:`print(len(pencere.pack_slaves()))`,out:`1`}],[`tk.Spinbox(pencere, from_=1, to=5)`],[`Aralık 1-5`])]})]),Al=G(45,`Menüler ve Açılır Pencereler`,`Menu, messagebox ve Toplevel ile menü çubuğu, uyarı kutuları ve ek pencereler.`,`m44-l3`,e=>[W(`m45`,1,e(1),`Menü çubuğu`,14,[`Menu ile menü çubuğu kurmak`,`add_command, add_cascade ve add_separator kullanmak`],[L(`b1`,`Uygulamaların üstündeki "Dosya, Düzen, Yardım" çubuğu menü çubuğudur. Önce tk.Menu(pencere) ile ana çubuğu oluşturursun. Her açılan menü de ayrı bir Menu'dür (tearoff=0 menünün koparılabilir kesikli çizgisini kaldırır). add_command(label=..., command=...) menüye bir komut ekler, add_separator() ayırıcı çizgi koyar; add_cascade(label=..., menu=...) alt menüyü çubuğa bağlar. Son olarak pencere.config(menu=cubuk) ile çubuk pencereye takılır.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Menülü uygulama")
pencere.geometry("300x150")

etiket = tk.Label(pencere, text="Bir menü komutu seç")
etiket.pack(pady=20)

def ac():
    etiket.config(text="Aç seçildi")

cubuk = tk.Menu(pencere)
dosya = tk.Menu(cubuk, tearoff=0)
dosya.add_command(label="Aç", command=ac)
dosya.add_separator()
dosya.add_command(label="Çıkış", command=pencere.destroy)
cubuk.add_cascade(label="Dosya", menu=dosya)
pencere.config(menu=cubuk)

pencere.mainloop()`,`Pencerenin üstünde "Dosya" menüsü görünür: tıklayınca Aç, çizgi ve Çıkış açılır. "Aç" etiketi değiştirir; "Çıkış" pencereyi kapatır (command=pencere.destroy: parantezsiz!).`),z(`b3`,`tip`,`Menü komutlarının command'ı da düğmelerdeki gibi parantezsiz fonksiyon adı alır.`)],[B(`m45-l1-e1`,`Dosya menüsü`,`orta`,30,`dosya adında bir Menu oluştur (üst bileşeni cubuk, tearoff=0). İçine sırasıyla "Aç" komutu, bir ayırıcı ve "Çıkış" komutu (command=pencere.destroy) ekle. Sonra cubuk'a "Dosya" adıyla bağla ve cubuk'u pencerenin menüsü yap.`,I`import tkinter as tk

pencere = tk.Tk()
cubuk = tk.Menu(pencere)
`,I`import tkinter as tk

pencere = tk.Tk()
cubuk = tk.Menu(pencere)

dosya = tk.Menu(cubuk, tearoff=0)
dosya.add_command(label="Aç")
dosya.add_separator()
dosya.add_command(label="Çıkış", command=pencere.destroy)
cubuk.add_cascade(label="Dosya", menu=dosya)
pencere.config(menu=cubuk)
`,[{d:`Menü girdileri`,append:`print(dosya.index("end"), dosya.entrycget(0, "label"), dosya.type(1), dosya.entrycget(2, "label"))`,out:`2 Aç separator Çıkış`},{d:`Çubuğa bağlı`,append:`print(cubuk.entrycget(0, "label"), cubuk.type(0))`,out:`Dosya cascade`},{d:`Pencereye takılı`,append:`print(pencere.cget("menu") is cubuk)`,out:`True`}],[`dosya.add_command(label="Aç"), dosya.add_separator(), dosya.add_command(label="Çıkış", command=pencere.destroy)`,`cubuk.add_cascade(label="Dosya", menu=dosya) ve pencere.config(menu=cubuk)`],[`Üç girdi doğru`,`Dosya cascade`,`Menü pencereye takılı`])]),W(`m45`,2,e(2),`messagebox: uyarı ve soru kutuları`,14,[`showinfo, showwarning, showerror kutularını kullanmak`,`askyesno ile kullanıcıya soru sormak`],[L(`b1`,`Kullanıcıya kısa bir mesaj göstermek ya da onay almak için tkinter.messagebox kullanılır. showinfo, showwarning ve showerror bir bilgi/uyarı/hata kutusu açar. askyesno("başlık", "soru") "Evet/Hayır" sorar ve True ya da False döndürür; askokcancel, askretrycancel benzer sorulardır. Silme ve çıkış gibi geri dönüşü zor işlerden önce onay almak iyi bir alışkanlıktır.`),R(`b2`,I`import tkinter as tk
from tkinter import messagebox

pencere = tk.Tk()
pencere.title("Kutular")

def sil():
    cevap = messagebox.askyesno("Silme", "Dosya silinsin mi?")
    if cevap:
        messagebox.showinfo("Bilgi", "Dosya silindi.")
    else:
        messagebox.showwarning("İptal", "Silme iptal edildi.")

tk.Button(pencere, text="Sil", command=sil).pack(padx=40, pady=30)

pencere.mainloop()`,`Düğmeye basınca bir soru kutusu açılır. Cevaba göre (True/False) bilgi ya da uyarı kutusu gösterilir.`),z(`b3`,`info`,`Simülatörde kutular programı bekletmez: kutu bir açılır pencere olarak görünür ve program otomatik olarak "Evet/Tamam" (askyesno için True) cevabını kullanır. Gerçek bilgisayarında program kullanıcının cevabını bekler ve cevabına göre ilerler. Kodun iki durumda da aynıdır.`)],[B(`m45-l2-e1`,`Onay iste`,`orta`,30,`kaydet() fonksiyonu messagebox.showinfo("Kayıt", "Kaydedildi") çağırıp bu çağrının sonucunu döndürsün. cikis_sor() fonksiyonu messagebox.askyesno("Çıkış", "Çıkmak istiyor musun?") sorusunun cevabını döndürsün.`,I`import tkinter as tk
from tkinter import messagebox

pencere = tk.Tk()

def kaydet():
    pass

def cikis_sor():
    pass
`,I`import tkinter as tk
from tkinter import messagebox

pencere = tk.Tk()

def kaydet():
    return messagebox.showinfo("Kayıt", "Kaydedildi")

def cikis_sor():
    return messagebox.askyesno("Çıkış", "Çıkmak istiyor musun?")
`,[{d:`Bilgi kutusu`,append:`print(kaydet())`,out:`ok`},{d:`Soru kutusu`,append:`print(cikis_sor())`,out:`True`},{d:`Doğru kutu türleri`,src:`showinfo[\\s\\S]*askyesno|askyesno[\\s\\S]*showinfo`}],[`return messagebox.showinfo("Kayıt", "Kaydedildi")`,`return messagebox.askyesno(...)`],[`kaydet() ok döndürür`,`cikis_sor() cevabı döndürür`])]),W(`m45`,3,e(3),`Toplevel: yeni pencere`,14,[`Toplevel ile ek pencere açmak`,`Pencereye bileşen koymak ve kapatmak`],[L(`b1`,`Bir programın birden çok penceresi olabilir. Ana pencere tk.Tk() ile bir kez oluşturulur; ek pencereler tk.Toplevel(ana_pencere) ile açılır. Toplevel de bir pencere gibi çalışır: title(), geometry() ve içine bileşenler koyabilirsin; bileşenlerin ilk parametresi o Toplevel olmalıdır. destroy() onu kapatır. Ayar ya da ayrıntı pencereleri için çok kullanılır.`),R(`b2`,I`import tkinter as tk

ana = tk.Tk()
ana.title("Ana pencere")

def ayrinti_ac():
    yeni = tk.Toplevel(ana)
    yeni.title("Ayrıntılar")
    yeni.geometry("220x110")
    tk.Label(yeni, text="Burası ikinci pencere").pack(pady=10)
    tk.Button(yeni, text="Kapat", command=yeni.destroy).pack()

tk.Button(ana, text="Ayrıntıları aç", command=ayrinti_ac).pack(padx=30, pady=30)

ana.mainloop()`,`Düğmeye her basışta yeni bir "Ayrıntılar" penceresi açılır. İçindeki Label ve Button'ın üst bileşeni yeni'dir; "Kapat" yalnızca o pencereyi kapatır, ana pencere açık kalır.`),z(`b3`,`warning`,`Ana pencereyi (tk.Tk) kapatırsan bütün diğer pencereler de kapanır. Programda yalnızca bir tane Tk() oluştur.`)],[B(`m45-l3-e1`,`İkinci pencereyi aç`,`orta`,30,`ac() fonksiyonu ana'nın altında bir Toplevel açsın: başlığı "İkinci Pencere" olsun ve içine bir Label koysun.`,I`import tkinter as tk

ana = tk.Tk()

def ac():
    pass
`,I`import tkinter as tk

ana = tk.Tk()

def ac():
    yeni = tk.Toplevel(ana)
    yeni.title("İkinci Pencere")
    tk.Label(yeni, text="Merhaba!").pack()
`,[{d:`Başlık ve içerik`,append:`ac()
ikinci = [w for w in ana.winfo_children() if isinstance(w, tk.Toplevel)][0]
print(ikinci.title(), len(ikinci.winfo_children()))`,out:`İkinci Pencere 1`},{d:`Her çağrıda yeni pencere`,append:`ac()
ac()
print(len([w for w in ana.winfo_children() if isinstance(w, tk.Toplevel)]))`,out:`2`}],[`yeni = tk.Toplevel(ana)`,`yeni.title("İkinci Pencere") ve içine tk.Label(yeni, ...).pack()`],[`Başlık İkinci Pencere`,`Her çağrıda yeni pencere`])],{quiz:U(`m45-quiz`,`Modül 45 mini sınavı`,[H(`q1`,`Menü çubuğunu pencereye bağlamak için ne yazılır?`,[`pencere.config(menu=cubuk)`,`pencere.add(cubuk)`,`cubuk.pack()`,`pencere.menu = cubuk`],0,`config(menu=...) menü çubuğunu pencereye takar.`),H(`q2`,`messagebox.askyesno("Soru", "Emin misin?") ne döndürür?`,[`True ya da False`,`Her zaman metin`,`None`,`"yes" ya da "no" metni`],0,`askyesno bir bool (Evet=True, Hayır=False) döndürür.`),H(`q3`,`İkinci bir pencere açmak için ne kullanılır?`,[`tk.Toplevel(ana)`,`tk.Tk() (ikinci kez)`,`tk.Window()`,`tk.Frame(ana)`],0,`Ek pencereler Toplevel ile açılır; Tk() programda bir kez kullanılır.`),H(`q4`,`Menü komutunda command=pencere.destroy yazarken neden parantez yok?`,[`Fonksiyon tıklanınca çalışsın, hemen çalışmasın diye`,`Parantez yasak olduğu için`,`destroy bir değişken olduğu için`,`Hız için`],0,`Parantez fonksiyonu hemen çağırırdı; command fonksiyonun kendisini ister.`)]),practice:[V(`p-m45-askyesno`,`Evet/Hayır cevabı yanlış okunuyor`,`orta`,30,`sil() "silindi" yazdırmalı (soruya Evet denince) ama "iptal" yazdırıyor. askyesno'nun ne döndürdüğünü hatırla ve karşılaştırmayı düzelt.`,[{type:`Mantık hatası`,description:`askyesno True/False döndürür; "yes" metniyle karşılaştırılıyor`}],I`import tkinter as tk
from tkinter import messagebox
pencere = tk.Tk()
def sil():
    if messagebox.askyesno("Soru", "Silinsin mi?") == "yes":
        print("silindi")
    else:
        print("iptal")
sil()`,I`import tkinter as tk
from tkinter import messagebox
pencere = tk.Tk()
def sil():
    if messagebox.askyesno("Soru", "Silinsin mi?"):
        print("silindi")
    else:
        print("iptal")
sil()`,[{d:`Çıktı`,out:`silindi`}],[`askyesno doğrudan bool döndürür; if askyesno(...): yeter.`]),B(`p-m45-menu`,`Yardım menüsü`,`orta`,30,`cubuk menü çubuğuna "Yardım" adlı bir alt menü ekle; içinde "Hakkında" komutu olsun. Menüyü pencereye bağla.`,I`import tkinter as tk
pencere = tk.Tk()
cubuk = tk.Menu(pencere)
`,I`import tkinter as tk
pencere = tk.Tk()
cubuk = tk.Menu(pencere)
yardim = tk.Menu(cubuk, tearoff=0)
yardim.add_command(label="Hakkında")
cubuk.add_cascade(label="Yardım", menu=yardim)
pencere.config(menu=cubuk)
`,[{d:`Çubukta Yardım`,append:`print(cubuk.entrycget(0, "label"), cubuk.type(0))`,out:`Yardım cascade`},{d:`Pencereye bağlı`,append:`print(pencere.cget("menu") is cubuk)`,out:`True`}],[`cubuk.add_cascade(label="Yardım", menu=yardim) ve pencere.config(menu=cubuk)`],[`Yardım cascade`,`Menü takılı`])]})]),jl=G(46,`Canvas ve Animasyon`,`Canvas ile şekil çiz, nesneleri hareket ettir ve after() ile canlandır.`,`m45-l3`,e=>[W(`m46`,1,e(1),`Canvas ile çizim`,14,[`Canvas oluşturmak`,`Çizgi, dikdörtgen, oval ve metin çizmek`,`Koordinat sistemini anlamak`],[L(`b1`,`Canvas, üzerine istediğin şekilleri çizebildiğin bir tuvaldir. Koordinat sistemi şöyledir: sol üst köşe (0, 0), x sağa, y AŞAĞI doğru artar. create_line(x1, y1, x2, y2), create_rectangle(x1, y1, x2, y2) ve create_oval(x1, y1, x2, y2) (ovalin içine sığdığı kutunun köşeleri), create_text(x, y, text="...") şekil çizer. Her çizim komutu şeklin numarasını (id) döndürür; sonra bu numarayla şekli hareket ettirebilir ya da değiştirebilirsin. fill iç rengi, outline kenar rengi, width çizgi kalınlığıdır.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Çizim")

tuval = tk.Canvas(pencere, width=260, height=160, bg="white")
tuval.pack()

tuval.create_rectangle(20, 20, 100, 80, fill="skyblue", outline="navy", width=2)
tuval.create_oval(120, 20, 200, 80, fill="tomato")
tuval.create_line(20, 120, 240, 120, fill="green", width=3)
tuval.create_text(130, 140, text="Merhaba Canvas", font=("Arial", 12))

pencere.mainloop()`,`Dikdörtgen sol üstte, oval sağında, altında yeşil bir çizgi ve yazı çizilir. Koordinatlar piksel cinsindendir; y aşağı doğru büyür.`),z(`b3`,`tip`,`Çizimde şeklin hangi köşelerden oluştuğunu kâğıda koordinat ızgarası çizerek planla. Sonradan değiştirmek için şeklin id'sini bir değişkende sakla: top = tuval.create_oval(...).`)],[B(`m46-l1-e1`,`Kırmızı top ve yazı`,`orta`,30,`tuval adındaki Canvas'a (200x200) önce köşeleri (20, 20) ve (80, 80) olan, içi "red" olan bir oval, sonra (100, 100) noktasına "Top" yazan bir metin çiz (bu sırayla).`,I`import tkinter as tk

pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=200, height=200, bg="white")
tuval.pack()
`,I`import tkinter as tk

pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=200, height=200, bg="white")
tuval.pack()
tuval.create_oval(20, 20, 80, 80, fill="red")
tuval.create_text(100, 100, text="Top")
`,[{d:`İki şekil`,append:`print(tuval.find_all())`,out:`(1, 2)`},{d:`Oval rengi`,append:`print(tuval.itemcget(1, "fill"))`,out:`red`},{d:`Oval konumu`,append:`print(tuval.coords(1))`,out:`[20.0, 20.0, 80.0, 80.0]`},{d:`Yazı`,append:`print(tuval.itemcget(2, "text"))`,out:`Top`}],[`tuval.create_oval(20, 20, 80, 80, fill="red")`,`tuval.create_text(100, 100, text="Top")`],[`İlk şekil kırmızı oval`,`İkinci şekil "Top" yazısı`])]),W(`m46`,2,e(2),`Şekilleri hareket ettirmek ve klavye`,14,[`move() ile şekil kaydırmak`,`Klavye olaylarını bind() ile yakalamak`],[L(`b1`,`Bir şekli taşımak için tuval.move(şekil_id, dx, dy) kullanılır: dx kadar sağa, dy kadar aşağı kaydırır (negatif sayılar sola/yukarı). tuval.coords(şekil_id) güncel köşe koordinatlarını verir. Klavye tuşlarını yakalamak için pencere.bind("<Left>", fonksiyon) yazarsın: tuş basılınca fonksiyon çalışır ve bir olay (event) nesnesi alır. Sık kullanılan tuş adları: <Left>, <Right>, <Up>, <Down>, <Return>, <space> ve <KeyPress-a> (a tuşu).`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Kareyi oynat")

tuval = tk.Canvas(pencere, width=240, height=120, bg="white")
tuval.pack()
kare = tuval.create_rectangle(10, 40, 50, 80, fill="orange")

def sag(olay=None):
    tuval.move(kare, 10, 0)

def sol(olay=None):
    tuval.move(kare, -10, 0)

pencere.bind("<Right>", sag)
pencere.bind("<Left>", sol)
tk.Button(pencere, text="Sağa", command=sag).pack(side="left", padx=10)
tk.Button(pencere, text="Sola", command=sol).pack(side="left")

pencere.mainloop()`,`Düğmelere ya da (pencere içeriğine tıkladıktan sonra) sağ/sol ok tuşlarına basınca kare 10 piksel kayar. olay=None parametresi sayesinde fonksiyon hem tuştan (olayla) hem düğmeden (olaysız) çağrılabilir.`),z(`b3`,`tip`,`Klavye olaylarını yakalaması için pencerenin odakta olması gerekir: önizlemede pencerenin içine bir kez tıkla, sonra tuşlara bas.`)],[B(`m46-l2-e1`,`Kareyi sağa sola oynat`,`orta`,35,`sag() ve sol() fonksiyonlarını yaz: kare'yi 10 piksel sağa / sola kaydırsınlar (olay=None parametresi olsun). Sonra pencere.bind ile "<Right>" ve "<Left>" tuşlarına bağla.`,I`import tkinter as tk

pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=240, height=120, bg="white")
tuval.pack()
kare = tuval.create_rectangle(10, 10, 30, 30, fill="orange")

def sag(olay=None):
    pass

def sol(olay=None):
    pass
`,I`import tkinter as tk

pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=240, height=120, bg="white")
tuval.pack()
kare = tuval.create_rectangle(10, 10, 30, 30, fill="orange")

def sag(olay=None):
    tuval.move(kare, 10, 0)

def sol(olay=None):
    tuval.move(kare, -10, 0)

pencere.bind("<Right>", sag)
pencere.bind("<Left>", sol)
`,[{d:`İki kez sağ`,append:`sag()
sag()
print(tuval.coords(kare))`,out:`[30.0, 10.0, 50.0, 30.0]`},{d:`Sağ sonra sol`,append:`sag()
sag()
sol()
print(tuval.coords(kare))`,out:`[20.0, 10.0, 40.0, 30.0]`},{d:`Tuşlar bağlı`,append:`print(sorted(pencere.bind()))`,out:`['<Left>', '<Right>']`}],[`tuval.move(kare, 10, 0) sağa, tuval.move(kare, -10, 0) sola.`,`pencere.bind("<Right>", sag)`],[`Sağa ve sola hareket`,`Tuşlar bağlı`])]),W(`m46`,3,e(3),`after() ile animasyon`,14,[`after() ile zamanlayıcı kurmak`,`Kendini yeniden zamanlayan animasyon fonksiyonu yazmak`],[L(`b1`,`Animasyon, bir şeyi küçük adımlarla tekrar tekrar değiştirmektir. Bunun için while True yazma: pencere donar, çünkü mainloop çalışamaz. Doğrusu pencere.after(milisaniye, fonksiyon): fonksiyonu belirtilen süre sonra BİR KEZ çalıştırır. Animasyon fonksiyonu işini yaptıktan sonra kendini yeniden after ile zamanlar: böylece her 50 ms'de bir çalışır ve arada pencere tıklamalara cevap verebilir. Durdurmak için yeniden zamanlamayı bırakırsın (ya da after_cancel ile iptal edersin).`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Hareketli top")

tuval = tk.Canvas(pencere, width=260, height=80, bg="white")
tuval.pack()
top = tuval.create_oval(5, 20, 45, 60, fill="crimson")

def hareket():
    x1, y1, x2, y2 = tuval.coords(top)
    if x2 < 255:
        tuval.move(top, 5, 0)
        pencere.after(50, hareket)

pencere.after(300, hareket)
pencere.mainloop()`,`Top 300 ms sonra yürümeye başlar. hareket() topu 5 piksel kaydırır ve kenara varmadıysa (x2 < 255) 50 ms sonra kendini yeniden çalıştırır; kenara varınca yeniden zamanlamaz ve animasyon biter.`),z(`b3`,`warning`,`Animasyon fonksiyonunda sonsuz while döngüsü kullanma; pencere kilitlenir. Her adımda after ile bir sonraki adımı planla.`)],[B(`m46-l3-e1`,`Kendini zamanlayan hareket`,`zor`,40,`hareket() fonksiyonunu yaz: top'u 5 piksel sağa kaydırsın. Topun sağ kenarı (x2) 100'den küçükse pencere.after(50, hareket) ile kendini 50 ms sonra yeniden çalıştırsın; değilse zamanlamasın.`,I`import tkinter as tk

pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=200, height=60)
tuval.pack()
top = tuval.create_oval(10, 10, 30, 30, fill="red")

def hareket():
    pass
`,I`import tkinter as tk

pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=200, height=60)
tuval.pack()
top = tuval.create_oval(10, 10, 30, 30, fill="red")

def hareket():
    x1, y1, x2, y2 = tuval.coords(top)
    tuval.move(top, 5, 0)
    if x2 < 100:
        pencere.after(50, hareket)
`,[{d:`Bir adım ve yeniden zamanlama`,append:`cagrilar = []
pencere.after = lambda ms, f=None, *a: cagrilar.append(ms)
hareket()
print(tuval.coords(top)[0], cagrilar)`,out:`15.0 [50]`},{d:`Kenara varınca zamanlamaz`,append:`tuval.move(top, 200, 0)
cagrilar = []
pencere.after = lambda ms, f=None, *a: cagrilar.append(ms)
hareket()
print(cagrilar)`,out:`[]`},{d:`after kullanılmış`,src:`after\\(`}],[`x1, y1, x2, y2 = tuval.coords(top) ile köşeleri al.`,`Önce move, sonra x2 < 100 ise pencere.after(50, hareket).`],[`Bir adımda 5 piksel`,`Kenarda yeniden zamanlamaz`])],{quiz:U(`m46-quiz`,`Modül 46 mini sınavı`,[H(`q1`,`Canvas koordinat sisteminde y değeri arttıkça şekil nereye gider?`,[`Aşağı`,`Yukarı`,`Sağa`,`Sola`],0,`Sol üst köşe (0, 0)'dır; x sağa, y aşağı doğru artar.`),H(`q2`,`tuval.move(sekil, -5, 10) şekli nasıl kaydırır?`,[`5 piksel sola, 10 piksel aşağı`,`5 piksel sağa, 10 piksel yukarı`,`5 piksel yukarı, 10 piksel sağa`,`Şekli (−5, 10) noktasına götürür`],0,`move göreli kaydırır: dx negatifse sola, dy pozitifse aşağıdır.`),H(`q3`,`Animasyon için neden while True döngüsü yerine after() kullanılır?`,[`while True pencereyi dondurur; after olay döngüsünü serbest bırakır`,`after daha kısa yazılır`,`while True hata verir`,`after daha hızlı çalışır`],0,`Sonsuz döngü mainloop'un çalışmasını engeller; after araya zaman bırakır.`),H(`q4`,`pencere.bind("<Return>", f) ne yapar?`,[`Enter tuşuna basılınca f çalışır`,`f fonksiyonunu hemen çalıştırır`,`Pencereyi kapatır`,`Return değerini bağlar`],0,`<Return> Enter tuşudur; bind, tuşa basılınca fonksiyonu çağırır.`)]),practice:[V(`p-m46-coords`,`Şekil beklenenden aşağıda`,`orta`,25,`Kare, Canvas'ın sol üstünde (10, 10) noktasında olmalı ama koordinatlar yer değiştirmiş. Koordinatları düzelt.`,[{type:`Mantık hatası`,description:`create_rectangle köşeleri (x1, y1, x2, y2) sırasıyla ister: sol üst, sağ alt`}],I`import tkinter as tk
pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=100, height=100)
tuval.pack()
kare = tuval.create_rectangle(10, 50, 10, 50)
print(tuval.coords(kare))`,I`import tkinter as tk
pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=100, height=100)
tuval.pack()
kare = tuval.create_rectangle(10, 10, 50, 50)
print(tuval.coords(kare))`,[{d:`Koordinatlar`,out:`[10.0, 10.0, 50.0, 50.0]`}],[`Dikdörtgen için sol üst (10, 10), sağ alt (50, 50).`]),B(`p-m46-line`,`Çapraz çizgi`,`kolay`,20,`tuval üzerine sol üst köşeden (0, 0) sağ alt köşeye (100, 100) kırmızı ve 3 kalınlığında bir çizgi çiz.`,I`import tkinter as tk
pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=100, height=100)
tuval.pack()
`,I`import tkinter as tk
pencere = tk.Tk()
tuval = tk.Canvas(pencere, width=100, height=100)
tuval.pack()
cizgi = tuval.create_line(0, 0, 100, 100, fill="red", width=3)
`,[{d:`Çizgi koordinatları`,append:`print(tuval.coords(1))`,out:`[0.0, 0.0, 100.0, 100.0]`},{d:`Rengi`,append:`print(tuval.itemcget(1, "fill"), tuval.itemcget(1, "width"))`,out:`red 3`}],[`tuval.create_line(0, 0, 100, 100, fill="red", width=3)`],[`Köşegen çizgi`,`Kırmızı, kalınlık 3`])]})]),Ml=G(47,`tkinter Projesi`,`Hesap makinesi, yapılacaklar listesi ve sınıfla yazılmış bir uygulama.`,`m46-l3`,e=>[W(`m47`,1,e(1),`Proje 1: Hesap makinesi`,18,[`Entry, OptionMenu ve Button'ı bir arada kullanmak`,`Kullanıcı hatalarını (sıfıra bölme, geçersiz sayı) yönetmek`],[L(`b1`,`Bu projede iki sayı ve bir işlem (+ − × ÷) seçilen basit bir hesap makinesi yazacaksın. Kullandıkların: grid ile düzen, Entry ile girdi, StringVar/OptionMenu ile işlem seçimi, Button ile hesaplama ve try / except ile hatalı girdinin yönetimi. Bir arayüz uygulamasında kullanıcı her şeyi yazabilir; sıfıra bölme ve sayı olmayan girdiler gibi durumları mutlaka düşün.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Hesap Makinesi")

giris1 = tk.Entry(pencere, width=8)
giris2 = tk.Entry(pencere, width=8)
islem = tk.StringVar(value="+")
sonuc = tk.Label(pencere, text="Sonuç burada", font=("Arial", 14), fg="darkblue")

def hesapla():
    try:
        a = float(giris1.get())
        b = float(giris2.get())
    except ValueError:
        sonuc.config(text="Geçersiz sayı")
        return
    op = islem.get()
    if op == "+":
        s = a + b
    elif op == "-":
        s = a - b
    elif op == "*":
        s = a * b
    else:
        if b == 0:
            sonuc.config(text="Sıfıra bölünemez")
            return
        s = a / b
    sonuc.config(text=f"{s:g}")

giris1.grid(row=0, column=0, padx=5, pady=10)
tk.OptionMenu(pencere, islem, "+", "-", "*", "/").grid(row=0, column=1)
giris2.grid(row=0, column=2, padx=5)
tk.Button(pencere, text="=", command=hesapla).grid(row=0, column=3, padx=5)
sonuc.grid(row=1, column=0, columnspan=4, pady=8)

pencere.mainloop()`,`Sayıları kutulara yaz, işlemi seç ve "="ye bas. try / except sayı olmayan girdiyi yakalar; sıfıra bölme ayrıca denetlenir. {s:g} sonucu gereksiz ".0" olmadan gösterir (18.0 yerine 18).`),z(`b3`,`tip`,`Hesaplama mantığını (hesapla) ekran kodundan ayrı bir fonksiyonda tutmak testini ve okunmasını kolaylaştırır. Bu yüzden hesaplamayı bir fonksiyona topladık.`)],[B(`m47-l1-e1`,`hesapla() fonksiyonunu yaz`,`zor`,45,`hesapla() fonksiyonunu yaz: giris1 ve giris2 kutularındaki sayıları float() ile oku; işlem değişkenindeki işleme (+, -, *, /) göre hesapla ve sonuc etiketinin metnini f"{s:g}" biçiminde yaz. Sayı olmayan girdide "Geçersiz sayı", sıfıra bölmede "Sıfıra bölünemez" yazsın.`,I`import tkinter as tk

pencere = tk.Tk()
giris1 = tk.Entry(pencere)
giris2 = tk.Entry(pencere)
islem = tk.StringVar(value="+")
sonuc = tk.Label(pencere, text="")
giris1.pack()
giris2.pack()
sonuc.pack()

def hesapla():
    pass
`,I`import tkinter as tk

pencere = tk.Tk()
giris1 = tk.Entry(pencere)
giris2 = tk.Entry(pencere)
islem = tk.StringVar(value="+")
sonuc = tk.Label(pencere, text="")
giris1.pack()
giris2.pack()
sonuc.pack()

def hesapla():
    try:
        a = float(giris1.get())
        b = float(giris2.get())
    except ValueError:
        sonuc.config(text="Geçersiz sayı")
        return
    op = islem.get()
    if op == "+":
        s = a + b
    elif op == "-":
        s = a - b
    elif op == "*":
        s = a * b
    else:
        if b == 0:
            sonuc.config(text="Sıfıra bölünemez")
            return
        s = a / b
    sonuc.config(text=f"{s:g}")
`,[{d:`Çarpma`,append:`giris1.insert(0, "6")
giris2.insert(0, "3")
islem.set("*")
hesapla()
print(sonuc.cget("text"))`,out:`18`},{d:`Bölme`,append:`giris1.insert(0, "7")
giris2.insert(0, "2")
islem.set("/")
hesapla()
print(sonuc.cget("text"))`,out:`3.5`},{d:`Sıfıra bölme`,append:`giris1.insert(0, "1")
giris2.insert(0, "0")
islem.set("/")
hesapla()
print(sonuc.cget("text"))`,out:`Sıfıra bölünemez`},{d:`Geçersiz sayı`,append:`giris1.insert(0, "abc")
giris2.insert(0, "2")
hesapla()
print(sonuc.cget("text"))`,out:`Geçersiz sayı`},{d:`Çıkarma`,append:`giris1.insert(0, "10")
giris2.insert(0, "4")
islem.set("-")
hesapla()
print(sonuc.cget("text"))`,out:`6`}],[`try: içinde float(giris1.get()) ve float(giris2.get()); except ValueError: ile hatayı yakala.`,`İşleme göre if / elif ile hesapla ve sonucu f"{s:g}" ile yaz.`],[`Beş durum da doğru`])]),W(`m47`,2,e(2),`Proje 2: Yapılacaklar listesi`,18,[`Listbox ve Entry ile veri listesi yönetmek`,`Boş girdiyi ve seçim olmama durumunu denetlemek`],[L(`b1`,`İkinci projede bir yapılacaklar listesi yazıyorsun: bir kutuya iş yazıp Ekle'ye basınca listeye eklenecek; listeden bir iş seçip Sil'e basınca silinecek. Kullandıkların: Listbox (insert, delete, curselection), Entry (get, delete), Button ve frame düzeni. Dikkat edilecek iki durum var: kutu boşken ekleme yapılmamalı; hiçbir iş seçili değilken silme yapılmamalı.`),R(`b2`,I`import tkinter as tk

pencere = tk.Tk()
pencere.title("Yapılacaklar")

ust = tk.Frame(pencere)
ust.pack(padx=10, pady=8)
giris = tk.Entry(ust, width=22)
giris.pack(side="left")

liste = tk.Listbox(pencere, width=30, height=6)
liste.pack(padx=10)

def ekle():
    is_metni = giris.get().strip()
    if is_metni:
        liste.insert(tk.END, is_metni)
        giris.delete(0, tk.END)

def sil():
    secilen = liste.curselection()
    if secilen:
        liste.delete(secilen[0])

tk.Button(ust, text="Ekle", command=ekle).pack(side="left", padx=4)
tk.Button(pencere, text="Seçileni sil", command=sil).pack(pady=8)

pencere.mainloop()`,`Kutuya bir iş yazıp "Ekle"ye bas; listeye girer ve kutu temizlenir. Listeden birini seçip "Seçileni sil"e bas. strip() başındaki ve sonundaki boşlukları atar; boş ya da yalnızca boşluktan oluşan girdiler eklenmez.`),z(`b3`,`tip`,`Gerçek bir yapılacaklar uygulamasında listeyi dosyaya (json) kaydedip açılışta geri yüklersin; Modül 28'deki json bilgisini burada kullanabilirsin.`)],[B(`m47-l2-e1`,`ekle() ve sil()`,`zor`,45,`ekle() fonksiyonu giris kutusundaki metni (baştaki/sondaki boşluklar atılarak) liste'nin sonuna eklesin ve kutuyu temizlesin; kutu boşsa hiçbir şey yapmasın. sil() fonksiyonu liste'de seçili iş varsa silsin, yoksa hiçbir şey yapmasın.`,I`import tkinter as tk

pencere = tk.Tk()
giris = tk.Entry(pencere)
liste = tk.Listbox(pencere)
giris.pack()
liste.pack()

def ekle():
    pass

def sil():
    pass
`,I`import tkinter as tk

pencere = tk.Tk()
giris = tk.Entry(pencere)
liste = tk.Listbox(pencere)
giris.pack()
liste.pack()

def ekle():
    is_metni = giris.get().strip()
    if is_metni:
        liste.insert(tk.END, is_metni)
        giris.delete(0, tk.END)

def sil():
    secilen = liste.curselection()
    if secilen:
        liste.delete(secilen[0])
`,[{d:`Ekleme`,append:`giris.insert(0, "  Süt al ")
ekle()
print(liste.get(0, "end"), repr(giris.get()))`,out:`('Süt al',) ''`},{d:`Boş girdi eklenmez`,append:`giris.insert(0, "   ")
ekle()
print(liste.size())`,out:`0`},{d:`Silme`,append:`for x in ["a", "b", "c"]:
    giris.delete(0, "end")
    giris.insert(0, x)
    ekle()
liste.selection_set(1)
sil()
print(liste.get(0, "end"))`,out:`('a', 'c')`},{d:`Seçim yokken silme`,append:`giris.insert(0, "x")
ekle()
sil()
print(liste.size())`,out:`1`}],[`is_metni = giris.get().strip(); if is_metni: ekleyip kutuyu temizle.`,`secilen = liste.curselection(); if secilen: liste.delete(secilen[0])`],[`Boşluklar atılır, kutu temizlenir`,`Boş girdi eklenmez`,`Seçili iş silinir`])]),W(`m47`,3,e(3),`Proje 3: Sınıfla uygulama`,18,[`Arayüzü bir sınıf içinde kurmak`,`Birden çok bağımsız örnek oluşturmak`],[L(`b1`,`Büyük arayüz programlarında kodu sınıfla düzenlemek (Modül 12 ve 29'daki fikirler) hayat kurtarır: bileşenler __init__ içinde kurulur, durum (sayaç, liste gibi) self'in özelliğidir, olay fonksiyonları ise sınıfın metotlarıdır. Metodu command'a self.metot_adi diye (parantezsiz) verirsin. Böylece global değişkenlere ihtiyaç kalmaz ve aynı sınıftan birbirinden bağımsız birden çok bileşen oluşturabilirsin.`),R(`b2`,I`import tkinter as tk

class Sayac:
    def __init__(self, ana, baslik):
        self.sayi = 0
        self.cerceve = tk.LabelFrame(ana, text=baslik, padx=10, pady=5)
        self.cerceve.pack(side="left", padx=8, pady=8)
        self.etiket = tk.Label(self.cerceve, text="0", font=("Arial", 20))
        self.etiket.pack()
        self.dugme = tk.Button(self.cerceve, text="+1", command=self.artir)
        self.dugme.pack()

    def artir(self):
        self.sayi += 1
        self.etiket.config(text=str(self.sayi))

pencere = tk.Tk()
pencere.title("İki sayaç")
Sayac(pencere, "Birinci")
Sayac(pencere, "İkinci")
pencere.mainloop()`,`Aynı sınıftan iki sayaç oluşturuldu; her biri kendi sayi özelliğini ve kendi bileşenlerini taşır, biri artınca diğeri etkilenmez. command=self.artir ile metot düğmeye bağlandı.`),z(`b3`,`info`,`Bu yapı (sınıf + bileşenler + metotlar) gerçek tkinter uygulamalarında en yaygın düzendir. Bitirme projende bunu kullanacaksın.`)],[B(`m47-l3-e1`,`Sayac sınıfı`,`zor`,45,`Sayac sınıfını yaz: __init__(self, ana) içinde sayi (0), etiket (Label, metni "0") ve dugme (Button, command=self.artir) oluşturulsun ve pack() ile yerleştirilsin. artir() metodu sayi'yı 1 artırsın ve etiket'in metnini güncellesin.`,I`import tkinter as tk

pencere = tk.Tk()

class Sayac:
    pass
`,I`import tkinter as tk

pencere = tk.Tk()

class Sayac:
    def __init__(self, ana):
        self.sayi = 0
        self.etiket = tk.Label(ana, text="0")
        self.etiket.pack()
        self.dugme = tk.Button(ana, text="+1", command=self.artir)
        self.dugme.pack()

    def artir(self):
        self.sayi += 1
        self.etiket.config(text=str(self.sayi))
`,[{d:`Başlangıç`,append:`s = Sayac(pencere)
print(s.sayi, s.etiket.cget("text"))`,out:`0 0`},{d:`İki tıklama`,append:`s = Sayac(pencere)
s.dugme.invoke()
s.dugme.invoke()
print(s.sayi, s.etiket.cget("text"))`,out:`2 2`},{d:`Bağımsız örnekler`,append:`a = Sayac(pencere)
b = Sayac(pencere)
a.artir()
print(a.sayi, b.sayi)`,out:`1 0`},{d:`Metot düğmeye bağlı`,src:`command\\s*=\\s*self\\.artir`}],[`__init__ içinde self.sayi = 0, self.etiket = tk.Label(ana, text="0") ...`,`command=self.artir (parantezsiz).`],[`İki tıklamada 2`,`Örnekler birbirinden bağımsız`])],{quiz:U(`m47-quiz`,`Modül 47 mini sınavı`,[H(`q1`,`Hesap makinesinde sıfıra bölme neden ayrıca denetlenmelidir?`,[`Aksi hâlde ZeroDivisionError oluşur ve kullanıcı hata görür`,`Python sıfıra bölemez`,`Sonuç her zaman 0 olur`,`Gerekli değildir`],0,`Kullanıcının hatalı girdisi programı bozmamalı; önceden denetle ve anlaşılır mesaj göster.`),H(`q2`,`Entry'den okunan "12" ile hesap yapmak için ne gerekir?`,[`int() ya da float() ile sayıya çevirmek`,`Hiçbir şey; zaten sayıdır`,`str() ile çevirmek`,`bool() ile çevirmek`],0,`Entry.get() her zaman metin döndürür; hesap için sayıya çevrilmelidir.`),H(`q3`,`Sınıf içinde düğmenin command'ına metot nasıl verilir?`,[`command=self.artir`,`command=artir()`,`command=self.artir()`,`command=Sayac.artir()`],0,`Metot, self ile ve parantezsiz verilir; böylece tıklanınca çağrılır.`),H(`q4`,`Aynı sınıftan iki nesne (Sayac) oluşturunca sayaçlar neden birbirini etkilemez?`,[`Her nesnenin kendi self özellikleri vardır`,`Python otomatik kopyalar`,`Aynı pencerede olamazlar`,`Etkilerler`],0,`Özellikler nesneye aittir; her nesne kendi sayi değerini tutar.`)]),practice:[V(`p-m47-empty`,`Boş iş ekleniyor`,`orta`,30,`Kutu boşken ekle() çağrılınca listeye boş bir satır ekleniyor. Boş girdiyi engelle.`,[{type:`Mantık hatası`,description:`Girdinin boş olup olmadığı denetlenmiyor`}],I`import tkinter as tk
pencere = tk.Tk()
giris = tk.Entry(pencere)
liste = tk.Listbox(pencere)
def ekle():
    liste.insert(tk.END, giris.get())
    giris.delete(0, tk.END)
ekle()
print(liste.size())`,I`import tkinter as tk
pencere = tk.Tk()
giris = tk.Entry(pencere)
liste = tk.Listbox(pencere)
def ekle():
    metin = giris.get().strip()
    if metin:
        liste.insert(tk.END, metin)
        giris.delete(0, tk.END)
ekle()
print(liste.size())`,[{d:`Boş girdi eklenmez`,out:`0`}],[`if metin: ile boş girdiyi atla.`]),B(`p-m47-reset`,`Sıfırla düğmesi`,`orta`,30,`Sayac sınıfına sifirla() metodunu ekle: sayi'yı 0 yapsın ve etiket'i "0" göstersin.`,I`import tkinter as tk
pencere = tk.Tk()

class Sayac:
    def __init__(self, ana):
        self.sayi = 5
        self.etiket = tk.Label(ana, text="5")
        self.etiket.pack()

    def sifirla(self):
        pass
`,I`import tkinter as tk
pencere = tk.Tk()

class Sayac:
    def __init__(self, ana):
        self.sayi = 5
        self.etiket = tk.Label(ana, text="5")
        self.etiket.pack()

    def sifirla(self):
        self.sayi = 0
        self.etiket.config(text="0")
`,[{d:`Sıfırlama`,append:`s = Sayac(pencere)
s.sifirla()
print(s.sayi, s.etiket.cget("text"))`,out:`0 0`}],[`self.sayi = 0 ve self.etiket.config(text="0")`],[`sifirla() sayıyı ve etiketi sıfırlar`])]})]),Nl=G(48,`Proje: Metin Tabanlı Oyun`,`Taş-kağıt-makas, adam asmaca ve tic-tac-toe: oyun mantığını fonksiyonlara böl.`,`m47-l3`,e=>[W(`m48`,1,e(1),`Proje 1: Taş-kağıt-makas`,18,[`Oyun kurallarını bir fonksiyona dökmek`,`Oyun mantığını girdi/çıktıdan ayırmak`,`random.choice ile bilgisayar hamlesi seçmek`],[L(`b1`,`Oyun yazmanın altın kuralı: oyunun kurallarını (mantığı) ekrana yazma ve girdi alma işlerinden ayır. Kuralları saf fonksiyonlara koyarsan oyunu test etmek kolaylaşır ve aynı mantığı sonradan pencereli bir arayüzde de kullanabilirsin. Taş-kağıt-makasta mantık: aynı hamle berabere; taş makası, kağıt taşı, makas kağıdı yener. Bilgisayarın hamlesi random.choice() ile listeden rastgele seçilir. Oyun döngüsü ise girdiyi alıp bu fonksiyonları çağırır.`),R(`b2`,I`import random

SECENEKLER = ["taş", "kağıt", "makas"]
YENER = {("taş", "makas"), ("kağıt", "taş"), ("makas", "kağıt")}

def kazanan(oyuncu, bilgisayar):
    if oyuncu == bilgisayar:
        return "berabere"
    return "oyuncu" if (oyuncu, bilgisayar) in YENER else "bilgisayar"

print(kazanan("taş", "makas"))
print(kazanan("taş", "kağıt"))
print(kazanan("makas", "makas"))

random.seed(7)
oyuncu_puan = 0
bilgisayar_puan = 0
for hamle in ["taş", "kağıt", "makas"]:
    bilgisayar = random.choice(SECENEKLER)
    sonuc = kazanan(hamle, bilgisayar)
    if sonuc == "oyuncu":
        oyuncu_puan += 1
    elif sonuc == "bilgisayar":
        bilgisayar_puan += 1
    print(f"{hamle} - {bilgisayar}: {sonuc}")
print("Skor:", oyuncu_puan, "-", bilgisayar_puan)`,`kazanan() yalnızca kuralı bilir; ekrana hiçbir şey yazmaz. random.seed(7) rastgeleliği sabitler ki her çalıştırmada aynı sonucu görelim (gerçek oyunda seed kullanmazsın). Döngü üç el oynatır ve skoru tutar.`),z(`b3`,`tip`,`Mantığı fonksiyonlara ayırınca test etmek kolaylaşır: random'a bağlı olmayan kazanan("taş", "makas") her zaman "oyuncu" döndürür.`)],[B(`m48-l1-e1`,`Kazananı belirle`,`orta`,30,`kazanan(oyuncu, bilgisayar) fonksiyonunu yaz: aynı hamle "berabere"; taş makası, kağıt taşı, makas kağıdı yener. Oyuncu yeniyorsa "oyuncu", bilgisayar yeniyorsa "bilgisayar" döndürsün.`,I`def kazanan(oyuncu, bilgisayar):
    pass
`,I`def kazanan(oyuncu, bilgisayar):
    yener = {("taş", "makas"), ("kağıt", "taş"), ("makas", "kağıt")}
    if oyuncu == bilgisayar:
        return "berabere"
    if (oyuncu, bilgisayar) in yener:
        return "oyuncu"
    return "bilgisayar"
`,[{d:`Oyuncu kazanır`,append:`print(kazanan("taş", "makas"), kazanan("kağıt", "taş"), kazanan("makas", "kağıt"))`,out:`oyuncu oyuncu oyuncu`},{d:`Bilgisayar kazanır`,append:`print(kazanan("makas", "taş"), kazanan("taş", "kağıt"), kazanan("kağıt", "makas"))`,out:`bilgisayar bilgisayar bilgisayar`},{d:`Berabere`,append:`print(kazanan("taş", "taş"), kazanan("kağıt", "kağıt"))`,out:`berabere berabere`}],[`Önce beraberliği kontrol et.`,`Oyuncunun yendiği çiftleri bir kümede tut.`],[`Üç kural doğru`,`Beraberlik doğru`])]),W(`m48`,2,e(2),`Proje 2: Adam asmaca`,20,[`Oyun durumunu (tahminler, haklar) takip etmek`,`Maskeli kelime üretmek ve kazanmayı denetlemek`],[L(`b1`,`Adam asmacada program bir kelime seçer; oyuncu harf harf tahmin eder. Ekranda bulunmuş harfler görünür, bulunmamışlar "_" olarak kalır. Oyunun durumu üç şeyden oluşur: gizli kelime, şimdiye kadar tahmin edilen harfler (bir küme) ve kalan hak sayısı. Önce iki küçük fonksiyon yaz: maskele (ekranda görünecek hali üretir) ve kazandi_mi (tüm harfler bulundu mu?). Döngü ise input() ile tahmin alıp bu fonksiyonları kullanır.`),R(`b2`,I`def maskele(kelime, tahminler):
    return " ".join(h if h in tahminler else "_" for h in kelime)

def kazandi_mi(kelime, tahminler):
    return all(h in tahminler for h in kelime)

print(maskele("kalem", {"a", "e"}))
print(kazandi_mi("kalem", {"k", "a", "l"}))

kelime = "kalem"
tahminler = set()
hak = 4
for harf in ["a", "x", "k", "e", "l", "m"]:
    if harf in tahminler:
        continue
    tahminler.add(harf)
    if harf not in kelime:
        hak -= 1
    print(maskele(kelime, tahminler), "| hak:", hak)
    if kazandi_mi(kelime, tahminler):
        print("Kazandın!")
        break
    if hak == 0:
        print("Kaybettin! Kelime:", kelime)
        break`,`maskele() bulunmamış harfleri "_" yapar. kazandi_mi() all() ile kelimenin her harfinin tahminlerde olup olmadığına bakar. Döngü harfleri sırayla dener; yanlış harf (x) hak düşürür, tüm harfler bulununca oyun biter.`),z(`b3`,`tip`,`Gerçek oyunda tahminleri input() ile alırsın ve geçersiz girdileri (birden çok harf, rakam, aynı harfi tekrar) denetlersin. Mantık fonksiyonları aynı kalır.`)],[B(`m48-l2-e1`,`Maskele ve kazanmayı denetle`,`orta`,35,`maskele(kelime, tahminler): tahmin edilen harfleri gösterip diğerlerini "_" yapsın, harfler arasında boşluk olsun (örn. "_ a _ e _"). kazandi_mi(kelime, tahminler): kelimenin tüm harfleri tahminlerdeyse True, değilse False döndürsün.`,I`def maskele(kelime, tahminler):
    pass

def kazandi_mi(kelime, tahminler):
    pass
`,I`def maskele(kelime, tahminler):
    return " ".join(h if h in tahminler else "_" for h in kelime)

def kazandi_mi(kelime, tahminler):
    return all(h in tahminler for h in kelime)
`,[{d:`Kısmen açık`,append:`print(maskele("kalem", {"a", "e"}))`,out:`_ a _ e _`},{d:`Hiç tahmin yok`,append:`print(maskele("ab", set()))`,out:`_ _`},{d:`Tamamı açık`,append:`print(maskele("ab", {"a", "b"}))`,out:`a b`},{d:`Kazanma`,append:`print(kazandi_mi("kalem", {"k", "a", "l", "e", "m"}), kazandi_mi("kalem", {"k", "a"}))`,out:`True False`},{d:`Tekrar eden harf`,append:`print(maskele("anne", {"n"}), kazandi_mi("anne", {"a", "n", "e"}))`,out:`_ n n _ True`}],[`" ".join(...) içinde her harf için: tahminlerdeyse harf, değilse "_".`,`all(...) ile her harfin tahminlerde olduğunu denetle.`],[`Maskeleme doğru`,`Kazanma denetimi doğru`])]),W(`m48`,3,e(3),`Proje 3: Tic-tac-toe`,20,[`Tahtayı bir listeyle temsil etmek`,`Kazanma kombinasyonlarını denetlemek`],[L(`b1`,`Tic-tac-toe (XOX) 3x3 tahtada oynanır. Tahtayı 9 elemanlı bir listeyle temsil edebilirsin: index 0-2 üst satır, 3-5 orta, 6-8 alt; boş kareler " " olur. Kazanmak için üç aynı işaretin bir satırda, sütunda ya da çaprazda olması gerekir. Toplam 8 kazanma kombinasyonu vardır; bunları bir listede tutup her birine bakarsın. Mantık fonksiyonu kazanan_var_mi(tahta) "X", "O" ya da None döndürür.`),R(`b2`,I`KOMBINASYONLAR = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),   # satırlar
    (0, 3, 6), (1, 4, 7), (2, 5, 8),   # sütunlar
    (0, 4, 8), (2, 4, 6),              # çaprazlar
]

def kazanan_var_mi(tahta):
    for a, b, c in KOMBINASYONLAR:
        if tahta[a] != " " and tahta[a] == tahta[b] == tahta[c]:
            return tahta[a]
    return None

def tahtayi_yaz(tahta):
    for i in range(0, 9, 3):
        print(" | ".join(tahta[i:i + 3]))
        if i < 6:
            print("--+---+--")

tahta = ["X", "O", "X",
         " ", "X", "O",
         "O", " ", "X"]
tahtayi_yaz(tahta)
print("Kazanan:", kazanan_var_mi(tahta))`,`Dilimleme (tahta[i:i + 3]) her satırı alır. kazanan_var_mi 8 kombinasyonu dener: ilk karenin boş olmadığını ve üç karenin eşit olduğunu denetler (zincirleme karşılaştırma a == b == c). Bu tahtada X çaprazı (0, 4, 8) doldurmuştur.`),z(`b3`,`tip`,`Tam oyun için döngüde sırayla X ve O'dan hamle alır, her hamleden sonra kazanan_var_mi'ye bakarsın; tahta dolduysa (boş kare kalmadıysa) berabere ilan edersin.`)],[B(`m48-l3-e1`,`Kazananı bul`,`zor`,40,`kazanan_var_mi(tahta) fonksiyonunu yaz: 9 elemanlı tahtada (boş kareler " ") bir satır, sütun ya da çaprazı dolduran işareti ("X" veya "O") döndürsün; kazanan yoksa None döndürsün.`,I`def kazanan_var_mi(tahta):
    pass
`,I`KOMBINASYONLAR = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),
    (0, 3, 6), (1, 4, 7), (2, 5, 8),
    (0, 4, 8), (2, 4, 6),
]

def kazanan_var_mi(tahta):
    for a, b, c in KOMBINASYONLAR:
        if tahta[a] != " " and tahta[a] == tahta[b] == tahta[c]:
            return tahta[a]
    return None
`,[{d:`Satır`,append:`print(kazanan_var_mi(["X", "X", "X", " ", "O", " ", "O", " ", " "]))`,out:`X`},{d:`Sütun`,append:`print(kazanan_var_mi(["O", "X", " ", "O", "X", " ", "O", " ", " "]))`,out:`O`},{d:`Çapraz`,append:`print(kazanan_var_mi(["X", "O", "O", " ", "X", " ", " ", " ", "X"]))`,out:`X`},{d:`Ters çapraz`,append:`print(kazanan_var_mi([" ", " ", "O", "X", "O", "X", "O", " ", " "]))`,out:`O`},{d:`Kazanan yok`,append:`print(kazanan_var_mi(["X", "O", "X", "X", "O", "O", "O", "X", "X"]))`,out:`None`},{d:`Boş tahta`,append:`print(kazanan_var_mi([" "] * 9))`,out:`None`}],[`Sekiz (a, b, c) üçlüsünü bir listede tut.`,`tahta[a] boş değilse ve tahta[a] == tahta[b] == tahta[c] ise tahta[a]'yı döndür.`],[`Satır, sütun, çapraz doğru`,`Kazanan yoksa None`])],{quiz:U(`m48-quiz`,`Modül 48 mini sınavı`,[H(`q1`,`Oyun mantığını (kazanan() gibi) ekrana yazma ve girdi alma kodundan ayırmanın başlıca yararı nedir?`,[`Mantık kolayca test edilir ve farklı arayüzlerde yeniden kullanılır`,`Program daha hızlı çalışır`,`Daha az bellek kullanır`,`Hiçbir yararı yoktur`],0,`Saf mantık fonksiyonları girdiye/ekrana bağlı olmadığı için test edilir ve her arayüzde kullanılır.`),H(`q2`,`random.choice(["a", "b", "c"]) ne yapar?`,[`Listeden rastgele bir eleman seçer`,`Listeyi karıştırır`,`Her zaman ilk elemanı verir`,`Listeyi sıralar`],0,`choice() bir diziden rastgele tek bir eleman döndürür.`),H(`q3`,`Adam asmacada "tahmin edilen harfler" için hangi veri yapısı en uygundur?`,[`Küme (set)`,`Demet (tuple)`,`Sayı`,`Metin yerine hiçbiri`],0,`Küme tekrarları atar ve "bu harf tahmin edildi mi?" sorusunu hızlı yanıtlar.`),H(`q4`,`Tic-tac-toe'da kaç farklı kazanma kombinasyonu vardır?`,[`8 (3 satır, 3 sütun, 2 çapraz)`,`6`,`9`,`4`],0,`Üç satır, üç sütun ve iki çaprazla toplam 8 kombinasyon vardır.`)]),practice:[V(`p-m48-rps`,`Berabere kalmıyor`,`orta`,30,`kazanan("taş", "taş") "berabere" döndürmeli ama "bilgisayar" döndürüyor. Beraberlik durumunu ekle.`,[{type:`Mantık hatası`,description:`Aynı hamle durumu denetlenmiyor`}],I`def kazanan(oyuncu, bilgisayar):
    yener = {("taş", "makas"), ("kağıt", "taş"), ("makas", "kağıt")}
    if (oyuncu, bilgisayar) in yener:
        return "oyuncu"
    return "bilgisayar"
print(kazanan("taş", "taş"))`,I`def kazanan(oyuncu, bilgisayar):
    yener = {("taş", "makas"), ("kağıt", "taş"), ("makas", "kağıt")}
    if oyuncu == bilgisayar:
        return "berabere"
    if (oyuncu, bilgisayar) in yener:
        return "oyuncu"
    return "bilgisayar"
print(kazanan("taş", "taş"))`,[{d:`Çıktı`,out:`berabere`}],[`Önce oyuncu == bilgisayar durumunu kontrol et.`]),B(`p-m48-full`,`Tahta dolu mu?`,`kolay`,20,`tahta_dolu_mu(tahta) fonksiyonu tahtada hiç boş kare (" ") kalmadıysa True, kaldıysa False döndürsün.`,I`def tahta_dolu_mu(tahta):
    pass
`,I`def tahta_dolu_mu(tahta):
    return " " not in tahta
`,[{d:`Dolu`,append:`print(tahta_dolu_mu(["X", "O", "X", "O", "X", "O", "O", "X", "O"]))`,out:`True`},{d:`Boş kare var`,append:`print(tahta_dolu_mu(["X", " ", "X", "O", "X", "O", "O", "X", "O"]))`,out:`False`}],[`" " not in tahta`],[`Dolu True`,`Boş kare varsa False`])]})]),Pl=G(49,`Proje: Not Takip Sistemi`,`Sınıflar, JSON ile saklama ve istatistiklerle bir not takip programı.`,`m48-l3`,e=>[W(`m49`,1,e(1),`Proje 1: Öğrenci sınıfı`,18,[`Veriyi bir sınıfla modellemek`,`Girdi doğrulamak (geçersiz notu reddetmek)`],[L(`b1`,`Bu projede öğrencilerin notlarını tutan, ortalamaları ve istatistikleri hesaplayan, verileri dosyaya kaydeden bir sistem kuracaksın. Önce veriyi modellemek gerekir: bir Ogrenci nesnesi adını ve notlarını taşır. Notları kabul ederken doğrulama yap: 0 ile 100 dışındaki bir not ValueError ile reddedilmeli. Ortalamayı hesaplayan metot, hiç not yokken sıfıra bölmemeye dikkat etmeli.`),R(`b2`,I`class Ogrenci:
    def __init__(self, ad, notlar=None):
        self.ad = ad
        self.notlar = list(notlar or [])

    def not_ekle(self, n):
        if not 0 <= n <= 100:
            raise ValueError("Not 0 ile 100 arasında olmalı")
        self.notlar.append(n)

    def ortalama(self):
        return sum(self.notlar) / len(self.notlar) if self.notlar else 0

    def __str__(self):
        return f"{self.ad}: {self.ortalama():.1f}"

ada = Ogrenci("Ada", [80, 90])
ada.not_ekle(100)
print(ada)
try:
    ada.not_ekle(120)
except ValueError as e:
    print("Hata:", e)
print(Ogrenci("Can"))`,`ortalama() hiç not yokken 0 döndürerek ZeroDivisionError'dan kaçınır. not_ekle() geçersiz notu ValueError ile reddeder. __str__ öğrenciyi "Ada: 90.0" biçiminde yazdırır. list(notlar or []) varsayılan boş liste tuzağını (Modül 9) önler.`),z(`b3`,`tip`,`Varsayılan parametre olarak notlar=[] yazma: tüm nesneler aynı listeyi paylaşır. notlar=None yazıp içeride yeni liste oluştur.`)],[B(`m49-l1-e1`,`Ogrenci sınıfını yaz`,`orta`,35,`Ogrenci sınıfını yaz: __init__(self, ad, notlar=None) ad ve notlar özelliklerini kursun (notlar yoksa boş liste). not_ekle(n) notu 0-100 aralığındaysa listeye eklesin, değilse ValueError fırlatsın. ortalama() notların ortalamasını versin; not yoksa 0 döndürsün.`,I`class Ogrenci:
    pass
`,I`class Ogrenci:
    def __init__(self, ad, notlar=None):
        self.ad = ad
        self.notlar = list(notlar or [])

    def not_ekle(self, n):
        if not 0 <= n <= 100:
            raise ValueError("Not 0 ile 100 arasında olmalı")
        self.notlar.append(n)

    def ortalama(self):
        return sum(self.notlar) / len(self.notlar) if self.notlar else 0
`,[{d:`Ortalama`,append:`o = Ogrenci("Ada", [80, 90])
o.not_ekle(100)
print(o.ortalama())`,out:`90.0`},{d:`Notsuz öğrenci`,append:`print(Ogrenci("Can").ortalama())`,out:`0`},{d:`Geçersiz not`,append:`o = Ogrenci("Ece")
try:
    o.not_ekle(101)
except ValueError:
    print("reddedildi", o.notlar)`,out:`reddedildi []`},{d:`Nesneler listeyi paylaşmaz`,append:`a = Ogrenci("A")
b = Ogrenci("B")
a.not_ekle(50)
print(b.notlar)`,out:`[]`}],[`self.notlar = list(notlar or []) yaz.`,`ortalama içinde not yoksa 0 döndür.`],[`Ortalama doğru`,`Geçersiz not reddedilir`])]),W(`m49`,2,e(2),`Proje 2: Sınıf ve istatistik`,18,[`Nesneleri bir yönetici sınıfta toplamak`,`statistics ile sınıf istatistikleri çıkarmak`],[L(`b1`,`Şimdi öğrencileri bir arada tutan Sinif sınıfını yazıyoruz. İçinde ogrenciler adında bir sözlük vardır (ad → Ogrenci); ekle() yeni öğrenci kaydeder, not_gir() var olan öğrenciye not ekler. Sınıf istatistikleri için statistics modülü ve max() işine yarar: sınıf ortalaması (öğrenci ortalamalarının ortalaması), en başarılı öğrenci (key ile en yüksek ortalama).`),R(`b2`,I`from statistics import mean

class Ogrenci:
    def __init__(self, ad):
        self.ad = ad
        self.notlar = []
    def ortalama(self):
        return sum(self.notlar) / len(self.notlar) if self.notlar else 0

class Sinif:
    def __init__(self):
        self.ogrenciler = {}

    def ekle(self, ad):
        if ad in self.ogrenciler:
            raise ValueError(f"{ad} zaten kayıtlı")
        self.ogrenciler[ad] = Ogrenci(ad)

    def not_gir(self, ad, n):
        self.ogrenciler[ad].notlar.append(n)

    def sinif_ortalamasi(self):
        ortalamalar = [o.ortalama() for o in self.ogrenciler.values() if o.notlar]
        return mean(ortalamalar) if ortalamalar else 0

    def en_basarili(self):
        if not self.ogrenciler:
            return None
        return max(self.ogrenciler.values(), key=lambda o: o.ortalama()).ad

s = Sinif()
for ad, notlar in [("Ada", [90, 100]), ("Can", [70, 80]), ("Ece", [85])]:
    s.ekle(ad)
    for n in notlar:
        s.not_gir(ad, n)
print(round(s.sinif_ortalamasi(), 2))
print(s.en_basarili())`,`Sinif, öğrenci nesnelerini sözlükte tutar. sinif_ortalamasi() notu olan öğrencilerin ortalamalarının ortalamasını alır (Ada 95, Can 75, Ece 85: ortalaması 85). en_basarili() max() ile key=lambda kullanarak en yüksek ortalamalı öğrencinin adını bulur.`),z(`b3`,`tip`,`Aynı öğrenciyi iki kez eklemeye çalışmak gibi hatalı durumları ValueError ile bildir; çağıran kod try / except ile karar versin.`)],[B(`m49-l2-e1`,`Sınıf istatistikleri`,`zor`,40,`Sinif sınıfına iki metot ekle: sinif_ortalamasi() notu olan öğrencilerin ortalamalarının ortalamasını döndürsün (kimsenin notu yoksa 0); en_basarili() ortalaması en yüksek öğrencinin adını döndürsün (öğrenci yoksa None). (Ogrenci hazır.)`,I`class Ogrenci:
    def __init__(self, ad):
        self.ad = ad
        self.notlar = []
    def ortalama(self):
        return sum(self.notlar) / len(self.notlar) if self.notlar else 0

class Sinif:
    def __init__(self):
        self.ogrenciler = {}

    def ekle(self, ad):
        self.ogrenciler[ad] = Ogrenci(ad)

    def not_gir(self, ad, n):
        self.ogrenciler[ad].notlar.append(n)
`,I`class Ogrenci:
    def __init__(self, ad):
        self.ad = ad
        self.notlar = []
    def ortalama(self):
        return sum(self.notlar) / len(self.notlar) if self.notlar else 0

class Sinif:
    def __init__(self):
        self.ogrenciler = {}

    def ekle(self, ad):
        self.ogrenciler[ad] = Ogrenci(ad)

    def not_gir(self, ad, n):
        self.ogrenciler[ad].notlar.append(n)

    def sinif_ortalamasi(self):
        ortalamalar = [o.ortalama() for o in self.ogrenciler.values() if o.notlar]
        return sum(ortalamalar) / len(ortalamalar) if ortalamalar else 0

    def en_basarili(self):
        if not self.ogrenciler:
            return None
        return max(self.ogrenciler.values(), key=lambda o: o.ortalama()).ad
`,[{d:`Sınıf ortalaması`,append:`s = Sinif()
for ad, notlar in [("Ada", [90, 100]), ("Can", [70, 80]), ("Ece", [85])]:
    s.ekle(ad)
    for n in notlar:
        s.not_gir(ad, n)
print(s.sinif_ortalamasi())`,out:`85.0`},{d:`En başarılı`,append:`s = Sinif()
s.ekle("Ada")
s.not_gir("Ada", 60)
s.ekle("Can")
s.not_gir("Can", 95)
print(s.en_basarili())`,out:`Can`},{d:`Boş sınıf`,append:`s = Sinif()
print(s.sinif_ortalamasi(), s.en_basarili())`,out:`0 None`},{d:`Notsuz öğrenci ortalamayı bozmaz`,append:`s = Sinif()
s.ekle("A")
s.not_gir("A", 80)
s.ekle("B")
print(s.sinif_ortalamasi())`,out:`80.0`}],[`Notu olan öğrencilerin ortalamalarını bir listede topla.`,`max(self.ogrenciler.values(), key=lambda o: o.ortalama()).ad`],[`Ortalama ve en başarılı doğru`,`Boş sınıfta 0 ve None`])]),W(`m49`,3,e(3),`Proje 3: Kaydetme ve rapor`,20,[`Verileri JSON dosyasına kaydetmek ve geri yüklemek`,`Harf notu ve düzenli rapor üretmek`],[L(`b1`,`Program kapanınca veriler kaybolmamalı: dosyaya kaydedip açılışta geri yüklemelisin. Nesneleri doğrudan JSON'a yazamazsın; önce sözlüğe çevirirsin: {"Ada": [90, 100], ...}. kaydet() bu sözlüğü json.dump ile dosyaya yazar, yukle() json.load ile okuyup nesneleri yeniden kurar. Dosya yoksa programın çökmemesi için FileNotFoundError'ı yakala. Sonda bir rapor() fonksiyonu sonuçları düzenli listeler.`),R(`b2`,I`import json

def harf_notu(ortalama):
    for sinir, harf in [(90, "A"), (80, "B"), (70, "C"), (60, "D")]:
        if ortalama >= sinir:
            return harf
    return "F"

notlar = {"Ada": [90, 100], "Can": [70, 55]}

with open("notlar.json", "w", encoding="utf-8") as f:
    json.dump(notlar, f, ensure_ascii=False)

try:
    with open("notlar.json", "r", encoding="utf-8") as f:
        yuklenen = json.load(f)
except FileNotFoundError:
    yuklenen = {}

for ad, liste in yuklenen.items():
    ort = sum(liste) / len(liste)
    print(f"{ad:<6} {ort:6.1f}  {harf_notu(ort)}")`,`Sözlük notlar.json dosyasına yazılır ve geri okunur (dosya yoksa FileNotFoundError yakalanır ve boş sözlükle devam edilir). {ad:<6} metni 6 genişlikte sola yaslar, {ort:6.1f} sayıyı 6 genişlikte bir ondalıkla yazar: böylece rapor sütunlu görünür.`),z(`b3`,`warning`,`Bozuk bir JSON dosyası json.JSONDecodeError (ValueError alt sınıfı) verir. Gerçek uygulamada bunu da yakalayıp kullanıcıya anlaşılır bir uyarı gösterirsin.`)],[B(`m49-l3-e1`,`Kaydet ve yükle`,`zor`,45,`Sinif sınıfına kaydet(dosya) ve yukle(dosya) metotlarını ekle. kaydet(), öğrencilerin notlarını {"ad": [notlar]} sözlüğü olarak JSON dosyasına yazsın. yukle() dosyayı okuyup öğrencileri yeniden kursun; dosya yoksa sessizce boş bırakıp hiçbir şeyi değiştirmesin. (Ogrenci ve diğer metotlar hazır.)`,I`import json

class Ogrenci:
    def __init__(self, ad, notlar=None):
        self.ad = ad
        self.notlar = list(notlar or [])

class Sinif:
    def __init__(self):
        self.ogrenciler = {}

    def ekle(self, ad, notlar=None):
        self.ogrenciler[ad] = Ogrenci(ad, notlar)

    def kaydet(self, dosya):
        pass

    def yukle(self, dosya):
        pass
`,I`import json

class Ogrenci:
    def __init__(self, ad, notlar=None):
        self.ad = ad
        self.notlar = list(notlar or [])

class Sinif:
    def __init__(self):
        self.ogrenciler = {}

    def ekle(self, ad, notlar=None):
        self.ogrenciler[ad] = Ogrenci(ad, notlar)

    def kaydet(self, dosya):
        veri = {ad: o.notlar for ad, o in self.ogrenciler.items()}
        with open(dosya, "w", encoding="utf-8") as f:
            json.dump(veri, f, ensure_ascii=False)

    def yukle(self, dosya):
        try:
            with open(dosya, "r", encoding="utf-8") as f:
                veri = json.load(f)
        except FileNotFoundError:
            return
        self.ogrenciler = {ad: Ogrenci(ad, notlar) for ad, notlar in veri.items()}
`,[{d:`Kaydet ve yükle`,append:`s = Sinif()
s.ekle("Ada", [90, 100])
s.ekle("Çağla", [70])
s.kaydet("sinif_test.json")
t = Sinif()
t.yukle("sinif_test.json")
print(sorted(t.ogrenciler), t.ogrenciler["Ada"].notlar, t.ogrenciler["Çağla"].notlar)`,out:`['Ada', 'Çağla'] [90, 100] [70]`},{d:`Dosya yoksa değişmez`,append:`s = Sinif()
s.ekle("A", [1])
s.yukle("yok_boyle_dosya.json")
print(list(s.ogrenciler))`,out:`['A']`},{d:`json kullanılmış`,src:`json\\.dump[\\s\\S]*json\\.load|json\\.load[\\s\\S]*json\\.dump`}],[`kaydet: veri = {ad: o.notlar for ad, o in self.ogrenciler.items()} ve json.dump(veri, f).`,`yukle: try / except FileNotFoundError: return, sonra Ogrenci nesnelerini kur.`],[`Kaydet-yükle turu bozulmaz`,`Dosya yoksa mevcut veri korunur`])],{quiz:U(`m49-quiz`,`Modül 49 mini sınavı`,[H(`q1`,`Ogrenci sınıfında "notlar=None" yazıp içeride list(notlar or []) kullanmanın nedeni nedir?`,[`Tüm nesnelerin aynı varsayılan listeyi paylaşmasını önlemek`,`Daha hızlı çalışmak`,`Listeyi sıralamak`,`Hata vermemek zorunlu olduğu için`],0,`Varsayılan parametre olarak değiştirilebilir bir liste kullanmak tüm nesneler arasında paylaşılan tek bir liste oluşturur.`),H(`q2`,`Geçersiz bir notun (örn. 150) sınıfa girmesini engellemek için ne yapılır?`,[`ValueError fırlatıp notu eklememek`,`Notu sessizce 100'e çevirmek`,`Programı kapatmak`,`Hiçbir şey yapmamak`],0,`Doğrulama başarısızsa hata fırlatmak, çağıran kodun durumu bilmesini sağlar.`),H(`q3`,`Nesneleri JSON'a yazmadan önce neye çevirmek gerekir?`,[`Sözlük ve liste gibi temel türlere`,`Metne (str) tek bir bütün olarak`,`Demete`,`Hiçbir şeye`],0,`json yalnızca temel veri türlerini (sözlük, liste, metin, sayı...) yazar.`),H(`q4`,`Kayıt dosyası henüz yokken program açılırsa çökmemesi için ne yapılır?`,[`FileNotFoundError yakalanır`,`Dosya zorla silinir`,`Program kapatılır`,`Hata görmezden gelinemez`],0,`try / except FileNotFoundError ile ilk açılışta boş başlanır.`)]),practice:[V(`p-m49-div`,`Notsuz öğrenci ortalaması hata veriyor`,`orta`,30,`Hiç notu olmayan öğrencinin ortalaması 0 olmalı ama ZeroDivisionError veriyor. Düzelt.`,[{type:`ZeroDivisionError`,description:`Not listesi boşken len(notlar) = 0 ile bölünüyor`}],I`class Ogrenci:
    def __init__(self, ad):
        self.ad = ad
        self.notlar = []
    def ortalama(self):
        return sum(self.notlar) / len(self.notlar)
print(Ogrenci("Can").ortalama())`,I`class Ogrenci:
    def __init__(self, ad):
        self.ad = ad
        self.notlar = []
    def ortalama(self):
        if not self.notlar:
            return 0
        return sum(self.notlar) / len(self.notlar)
print(Ogrenci("Can").ortalama())`,[{d:`Çıktı 0`,out:`0`}],[`Not listesi boşsa 0 döndür.`]),B(`p-m49-harf`,`Harf notu`,`kolay`,20,`harf_notu(ortalama) fonksiyonunu yaz: 90 ve üstü "A", 80 ve üstü "B", 70 ve üstü "C", 60 ve üstü "D", altı "F".`,I`def harf_notu(ortalama):
    pass
`,I`def harf_notu(ortalama):
    if ortalama >= 90:
        return "A"
    if ortalama >= 80:
        return "B"
    if ortalama >= 70:
        return "C"
    if ortalama >= 60:
        return "D"
    return "F"
`,[{d:`Sınırlar`,append:`print(harf_notu(95), harf_notu(90), harf_notu(89.9), harf_notu(80), harf_notu(70), harf_notu(60), harf_notu(59.9), harf_notu(0))`,out:`A A B B C D F F`}],[`Büyükten küçüğe sırayla if ile kontrol et.`],[`Sınır değerleri doğru`])]})]),Fl=I`from dataclasses import dataclass

@dataclass
class Gorev:
    baslik: str
    tamamlandi: bool = False

class GorevListesi:
    def __init__(self):
        self.gorevler = []

    def ekle(self, baslik):
        baslik = baslik.strip()
        if not baslik:
            raise ValueError("Görev başlığı boş olamaz")
        self.gorevler.append(Gorev(baslik))
`,Il=G(50,`Bitirme Projesi`,`Kendi pencereli uygulamanı tasarla: tkinter + OOP + veri saklama.`,`m49-l3`,e=>[W(`m50`,1,e(1),`Planla ve modeli kur`,20,[`Bir uygulamayı veri modeli ve arayüz olarak ikiye ayırmak`,`Veri modelini sınıflarla yazmak ve test etmek`],[L(`b1`,`Bitirme projesinde şimdiye kadar öğrendiklerinin hepsini bir arada kullanacaksın: sınıflar, veri yapıları, hata yönetimi, dosya/JSON, test ve tkinter. Bu modülde birlikte bir Görev Takip uygulaması yapıyoruz; sen de aynı yöntemle kendi fikrini hayata geçirebilirsin. İyi bir uygulama üç katmanlıdır: (1) veri modeli (Gorev, GorevListesi): ekrandan habersiz, saf Python; (2) arayüz (tkinter): modeli gösterir ve kullanıcının isteklerini modele iletir; (3) saklama (JSON): modelin durumunu dosyaya yazar. Bu derste önce modeli yazıyoruz; arayüz olmadan da çalıştığını ve test edilebildiğini göreceksin.`),R(`b2`,I`from dataclasses import dataclass

@dataclass
class Gorev:
    baslik: str
    tamamlandi: bool = False

class GorevListesi:
    def __init__(self):
        self.gorevler = []

    def ekle(self, baslik):
        baslik = baslik.strip()
        if not baslik:
            raise ValueError("Görev başlığı boş olamaz")
        self.gorevler.append(Gorev(baslik))

    def tamamla(self, sira):
        self.gorevler[sira].tamamlandi = True

    def bekleyenler(self):
        return [g for g in self.gorevler if not g.tamamlandi]

liste = GorevListesi()
liste.ekle("Süt al")
liste.ekle("Ödevi bitir")
liste.ekle("  Kitap oku  ")
liste.tamamla(1)
print([g.baslik for g in liste.bekleyenler()])
try:
    liste.ekle("   ")
except ValueError as e:
    print("Hata:", e)`,`Veri modeli hiç tkinter kullanmaz: ekrana değil, sadece veriye ve kurallara (boş başlık olmaz) odaklanır. Gorev bir dataclass, GorevListesi ise görevleri yöneten sınıftır. Bu sayede aynı model hem terminalde hem pencerede kullanılabilir.`),z(`b3`,`tip`,`Planlama sorusu: "Kullanıcı ne yapabilmeli?" (ekle, tamamla, sil, kaydet...) ve "Hangi veriyi saklamalıyım?" Cevapların sınıfların ve metotların listesidir.`)],[B(`m50-l1-e1`,`Modeli tamamla`,`orta`,40,`GorevListesi sınıfına üç metot ekle: tamamla(sira) o sıradaki görevi tamamlanmış yapsın; bekleyenler() tamamlanmamış görevlerin listesini döndürsün; ilerleme_yuzdesi() tamamlanan görevlerin yüzdesini (tam sayıya yuvarlanmış) döndürsün, hiç görev yoksa 0 döndürsün. (Gorev ve ekle() hazır.)`,`${Fl}
    def tamamla(self, sira):
        pass

    def bekleyenler(self):
        pass

    def ilerleme_yuzdesi(self):
        pass
`,`${Fl}
    def tamamla(self, sira):
        self.gorevler[sira].tamamlandi = True

    def bekleyenler(self):
        return [g for g in self.gorevler if not g.tamamlandi]

    def ilerleme_yuzdesi(self):
        if not self.gorevler:
            return 0
        biten = sum(1 for g in self.gorevler if g.tamamlandi)
        return round(biten * 100 / len(self.gorevler))
`,[{d:`Tamamlama ve bekleyenler`,append:`l = GorevListesi()
for b in ["a", "b", "c"]:
    l.ekle(b)
l.tamamla(1)
print([g.baslik for g in l.bekleyenler()], l.gorevler[1].tamamlandi)`,out:`['a', 'c'] True`},{d:`İlerleme yüzdesi`,append:`l = GorevListesi()
for b in ["a", "b", "c"]:
    l.ekle(b)
l.tamamla(0)
print(l.ilerleme_yuzdesi())`,out:`33`},{d:`Boş liste`,append:`print(GorevListesi().ilerleme_yuzdesi())`,out:`0`},{d:`Hepsi tamam`,append:`l = GorevListesi()
l.ekle("x")
l.tamamla(0)
print(l.ilerleme_yuzdesi(), l.bekleyenler())`,out:`100 []`}],[`tamamla: self.gorevler[sira].tamamlandi = True`,`ilerleme_yuzdesi: round(biten * 100 / toplam); liste boşsa 0.`],[`Tamamlama ve bekleyenler doğru`,`Yüzde doğru`])]),W(`m50`,2,e(2),`Arayüzü bağla`,22,[`Arayüz sınıfını veri modeline bağlamak`,`Ekranı modelden yenilemek (yenile deseni)`,`Kullanıcı hatalarını arayüzde göstermek`],[L(`b1`,`Arayüz katmanı modeli bilir ama modelin işini yapmaz: kullanıcı bir düğmeye basınca arayüz, modelin ilgili metodunu çağırır; sonra ekranı yeniler. Bu yüzden çoğu uygulamada bir yenile() metodu olur: ekrandaki bileşenleri modelin güncel hâliyle baştan doldurur. Böylece her olaydan sonra yalnızca model.metot() çağırıp yenile() demen yeter ve ekran hiçbir zaman modelden farklı kalmaz. Modelin fırlattığı hataları (boş başlık gibi) arayüzde try / except ile yakalayıp kullanıcıya mesaj gösterirsin.`),R(`b2`,I`import tkinter as tk
from dataclasses import dataclass

@dataclass
class Gorev:
    baslik: str
    tamamlandi: bool = False

class GorevListesi:
    def __init__(self):
        self.gorevler = []
    def ekle(self, baslik):
        baslik = baslik.strip()
        if not baslik:
            raise ValueError("Görev başlığı boş olamaz")
        self.gorevler.append(Gorev(baslik))
    def tamamla(self, sira):
        self.gorevler[sira].tamamlandi = True
    def bekleyenler(self):
        return [g for g in self.gorevler if not g.tamamlandi]

class GorevUygulamasi:
    def __init__(self, ana, liste):
        self.liste = liste
        ana.title("Görev Takip")
        ust = tk.Frame(ana)
        ust.pack(padx=10, pady=8)
        self.giris = tk.Entry(ust, width=24)
        self.giris.pack(side="left")
        tk.Button(ust, text="Ekle", command=self.ekle_tikla).pack(side="left", padx=4)
        self.kutu = tk.Listbox(ana, width=34, height=6)
        self.kutu.pack(padx=10)
        tk.Button(ana, text="Seçileni tamamla", command=self.tamamla_tikla).pack(pady=6)
        self.durum = tk.Label(ana, text="", fg="darkgreen")
        self.durum.pack(pady=(0, 8))
        self.yenile()

    def yenile(self):
        self.kutu.delete(0, tk.END)
        for g in self.liste.gorevler:
            self.kutu.insert(tk.END, ("[x] " if g.tamamlandi else "[ ] ") + g.baslik)
        self.durum.config(text=f"{len(self.liste.bekleyenler())} görev bekliyor")

    def ekle_tikla(self):
        try:
            self.liste.ekle(self.giris.get())
        except ValueError as hata:
            self.durum.config(text=str(hata))
            return
        self.giris.delete(0, tk.END)
        self.yenile()

    def tamamla_tikla(self):
        secilen = self.kutu.curselection()
        if secilen:
            self.liste.tamamla(secilen[0])
            self.yenile()

pencere = tk.Tk()
liste = GorevListesi()
liste.ekle("Süt al")
liste.ekle("Ödevi bitir")
GorevUygulamasi(pencere, liste)
pencere.mainloop()`,`Pencerede iki görev görünür. Bir görev ekle, listeden bir görev seç ve "Seçileni tamamla"ya bas: [ ] işareti [x] olur ve "bekliyor" sayısı güncellenir. Boş başlık eklemeye çalışırsan model ValueError fırlatır, arayüz bunu yakalayıp altta gösterir.`),z(`b3`,`tip`,`Dikkat: arayüz kodunda hiçbir "iş kuralı" yok (boş başlık yasağı modelde). İş kuralları değişirse yalnızca modeli güncellersin.`)],[B(`m50-l2-e1`,`Arayüz metotlarını yaz`,`zor`,50,`GorevUygulamasi sınıfındaki üç metodu yaz. yenile(): kutu'yu temizleyip her görevi "[ ] başlık" (tamamlandıysa "[x] başlık") biçiminde ekle ve durum etiketini "<n> görev bekliyor" yap. ekle_tikla(): giris'teki metni modele ekle; ValueError olursa durum etiketine hata mesajını yaz ve çık; başarılıysa kutuyu temizle ve yenile(). tamamla_tikla(): seçili görev varsa tamamla ve yenile(). (Model ve arayüz bileşenleri hazır.)`,`import tkinter as tk
${Fl}
    def tamamla(self, sira):
        self.gorevler[sira].tamamlandi = True

    def bekleyenler(self):
        return [g for g in self.gorevler if not g.tamamlandi]

class GorevUygulamasi:
    def __init__(self, ana, liste):
        self.liste = liste
        self.giris = tk.Entry(ana)
        self.giris.pack()
        tk.Button(ana, text="Ekle", command=self.ekle_tikla).pack()
        self.kutu = tk.Listbox(ana)
        self.kutu.pack()
        tk.Button(ana, text="Seçileni tamamla", command=self.tamamla_tikla).pack()
        self.durum = tk.Label(ana, text="")
        self.durum.pack()
        self.yenile()

    def yenile(self):
        pass

    def ekle_tikla(self):
        pass

    def tamamla_tikla(self):
        pass

pencere = tk.Tk()
`,`import tkinter as tk
${Fl}
    def tamamla(self, sira):
        self.gorevler[sira].tamamlandi = True

    def bekleyenler(self):
        return [g for g in self.gorevler if not g.tamamlandi]

class GorevUygulamasi:
    def __init__(self, ana, liste):
        self.liste = liste
        self.giris = tk.Entry(ana)
        self.giris.pack()
        tk.Button(ana, text="Ekle", command=self.ekle_tikla).pack()
        self.kutu = tk.Listbox(ana)
        self.kutu.pack()
        tk.Button(ana, text="Seçileni tamamla", command=self.tamamla_tikla).pack()
        self.durum = tk.Label(ana, text="")
        self.durum.pack()
        self.yenile()

    def yenile(self):
        self.kutu.delete(0, tk.END)
        for g in self.liste.gorevler:
            self.kutu.insert(tk.END, ("[x] " if g.tamamlandi else "[ ] ") + g.baslik)
        self.durum.config(text=f"{len(self.liste.bekleyenler())} görev bekliyor")

    def ekle_tikla(self):
        try:
            self.liste.ekle(self.giris.get())
        except ValueError as hata:
            self.durum.config(text=str(hata))
            return
        self.giris.delete(0, tk.END)
        self.yenile()

    def tamamla_tikla(self):
        secilen = self.kutu.curselection()
        if secilen:
            self.liste.tamamla(secilen[0])
            self.yenile()

pencere = tk.Tk()
`,[{d:`Başlangıç durumu`,append:`uyg = GorevUygulamasi(pencere, GorevListesi())
print(uyg.kutu.size(), uyg.durum.cget("text"))`,out:`0 0 görev bekliyor`},{d:`Görev ekleme`,append:`uyg = GorevUygulamasi(pencere, GorevListesi())
uyg.giris.insert(0, "  Süt al ")
uyg.ekle_tikla()
print(uyg.kutu.get(0, "end"), repr(uyg.giris.get()), uyg.durum.cget("text"))`,out:`('[ ] Süt al',) '' 1 görev bekliyor`},{d:`Boş başlık hatası`,append:`uyg = GorevUygulamasi(pencere, GorevListesi())
uyg.giris.insert(0, "   ")
uyg.ekle_tikla()
print(uyg.kutu.size(), uyg.durum.cget("text"))`,out:`0 Görev başlığı boş olamaz`},{d:`Tamamlama`,append:`uyg = GorevUygulamasi(pencere, GorevListesi())
for b in ["a", "b"]:
    uyg.giris.delete(0, "end")
    uyg.giris.insert(0, b)
    uyg.ekle_tikla()
uyg.kutu.selection_set(0)
uyg.tamamla_tikla()
print(uyg.kutu.get(0, "end"), uyg.durum.cget("text"))`,out:`('[x] a', '[ ] b') 1 görev bekliyor`},{d:`Seçim yokken tamamlama`,append:`uyg = GorevUygulamasi(pencere, GorevListesi())
uyg.giris.insert(0, "x")
uyg.ekle_tikla()
uyg.tamamla_tikla()
print(uyg.kutu.get(0))`,out:`[ ] x`}],[`yenile: kutu.delete(0, tk.END), her görev için kutu.insert(...), sonra durum etiketini güncelle.`,`ekle_tikla: try: self.liste.ekle(...) except ValueError as hata: durum etiketine str(hata) yaz ve return.`],[`Ekle, hata, tamamla akışları doğru`,`Ekran modelle tutarlı`])]),W(`m50`,3,e(3),`Kaydet, yükle ve tamamla`,22,[`Modeli JSON dosyasına kaydetmek ve geri yüklemek`,`Eksik ya da bozuk dosyayı güvenle karşılamak`,`Projeyi kendi fikrine uyarlamak`],[L(`b1`,`Uygulamanın son parçası saklamadır: kullanıcı kapatıp açınca görevleri duruyor olmalı. Modele iki metot eklersin: kaydet(dosya) görevleri bir sözlük listesine çevirip JSON olarak yazar; yukle(dosya) dosyayı okuyup görevleri yeniden kurar. Yukle bir sınıf metodu (@classmethod) olabilir: GorevListesi.yukle("gorevler.json") hazır bir liste döndürür. Önemli olan sağlamlıktır: dosya henüz yoksa (ilk açılış) ya da bozuksa uygulama çökmemeli, boş bir listeyle başlamalıdır. Arayüzde bunu bir "Dosya" menüsüne (Kaydet, Yükle) bağlarsın.`),R(`b2`,I`import json
from dataclasses import dataclass

@dataclass
class Gorev:
    baslik: str
    tamamlandi: bool = False

class GorevListesi:
    def __init__(self):
        self.gorevler = []

    def ekle(self, baslik):
        self.gorevler.append(Gorev(baslik))

    def kaydet(self, dosya):
        veri = [{"baslik": g.baslik, "tamamlandi": g.tamamlandi} for g in self.gorevler]
        with open(dosya, "w", encoding="utf-8") as f:
            json.dump(veri, f, ensure_ascii=False)

    @classmethod
    def yukle(cls, dosya):
        liste = cls()
        try:
            with open(dosya, "r", encoding="utf-8") as f:
                veri = json.load(f)
            for d in veri:
                liste.gorevler.append(Gorev(d["baslik"], d["tamamlandi"]))
        except (FileNotFoundError, json.JSONDecodeError, KeyError, TypeError):
            return cls()
        return liste

l = GorevListesi()
l.ekle("Süt al")
l.ekle("Çay demle")
l.gorevler[0].tamamlandi = True
l.kaydet("gorevler.json")

yeni = GorevListesi.yukle("gorevler.json")
print([(g.baslik, g.tamamlandi) for g in yeni.gorevler])
print(len(GorevListesi.yukle("olmayan_dosya.json").gorevler))`,`Görevler [{"baslik": ..., "tamamlandi": ...}] biçiminde yazılıp geri okunur. Dosya yoksa FileNotFoundError, bozuksa JSONDecodeError, eksik alan varsa KeyError yakalanır ve boş bir liste döner: uygulama çökmez.`),z(`b3`,`tip`,`Kendi projen için fikirler: not defteri, alışveriş listesi, bütçe takipçisi, kelime ezberleme kartları, alışkanlık takipçisi, hava durumu günlüğü, sınav sonuç takibi. Hepsi aynı üç katmana (model, arayüz, saklama) uyar. Önce modeli yaz ve test et, sonra arayüzü, en son kaydetmeyi ekle.`)],[B(`m50-l3-e1`,`Kaydet ve güvenle yükle`,`zor`,50,`GorevListesi sınıfına kaydet(dosya) ve @classmethod yukle(cls, dosya) ekle. kaydet görevleri JSON dosyasına [{"baslik": ..., "tamamlandi": ...}] biçiminde yazsın. yukle dosyayı okuyup yeni bir liste döndürsün; dosya yoksa ya da bozuksa boş bir liste döndürsün. (Gorev, ekle ve tamamla hazır.)`,`import json
${Fl}
    def tamamla(self, sira):
        self.gorevler[sira].tamamlandi = True

    def kaydet(self, dosya):
        pass

    @classmethod
    def yukle(cls, dosya):
        pass
`,`import json
${Fl}
    def tamamla(self, sira):
        self.gorevler[sira].tamamlandi = True

    def kaydet(self, dosya):
        veri = [{"baslik": g.baslik, "tamamlandi": g.tamamlandi} for g in self.gorevler]
        with open(dosya, "w", encoding="utf-8") as f:
            json.dump(veri, f, ensure_ascii=False)

    @classmethod
    def yukle(cls, dosya):
        liste = cls()
        try:
            with open(dosya, "r", encoding="utf-8") as f:
                veri = json.load(f)
            for d in veri:
                liste.gorevler.append(Gorev(d["baslik"], d["tamamlandi"]))
        except (FileNotFoundError, json.JSONDecodeError, KeyError, TypeError):
            return cls()
        return liste
`,[{d:`Kaydet-yükle turu`,append:`l = GorevListesi()
l.ekle("Süt al")
l.ekle("Çay demle")
l.tamamla(0)
l.kaydet("proje_test.json")
yeni = GorevListesi.yukle("proje_test.json")
print([(g.baslik, g.tamamlandi) for g in yeni.gorevler])`,out:`[('Süt al', True), ('Çay demle', False)]`},{d:`Dosya yoksa boş liste`,append:`print(len(GorevListesi.yukle("yok_boyle_dosya.json").gorevler))`,out:`0`},{d:`Bozuk dosya`,append:`with open("bozuk_test.json", "w", encoding="utf-8") as f:
    f.write("{bozuk")
print(len(GorevListesi.yukle("bozuk_test.json").gorevler))`,out:`0`},{d:`Eksik alanlı dosya`,append:`with open("eksik_test.json", "w", encoding="utf-8") as f:
    f.write('[{"baslik": "x"}]')
print(len(GorevListesi.yukle("eksik_test.json").gorevler))`,out:`0`},{d:`classmethod kullanılmış`,src:`@classmethod`}],[`kaydet: veri = [{"baslik": g.baslik, "tamamlandi": g.tamamlandi} for g in self.gorevler]; json.dump(veri, f, ensure_ascii=False).`,`yukle: try ile oku; FileNotFoundError, json.JSONDecodeError, KeyError ve TypeError için boş cls() döndür.`],[`Kaydet-yükle turu bozulmaz`,`Eksik ve bozuk dosyada boş liste`])],{quiz:U(`m50-quiz`,`Modül 50 mini sınavı`,[H(`q1`,`Uygulamayı "veri modeli" ve "arayüz" olarak ayırmanın başlıca yararı nedir?`,[`Mantık ekrandan bağımsız kalır; test edilir ve farklı arayüzlerde yeniden kullanılır`,`Program daha az satırdan oluşur`,`tkinter gerekmez`,`Hata hiç oluşmaz`],0,`Model saf Python olduğu için tek başına test edilir; arayüz yalnızca onu gösterir.`),H(`q2`,`Arayüzdeki yenile() metodu ne yapar?`,[`Ekrandaki bileşenleri modelin güncel hâliyle yeniden doldurur`,`Programı yeniden başlatır`,`Dosyayı siler`,`Pencereyi kapatır`],0,`Her model değişikliğinden sonra yenile() çağrılarak ekranın modelle tutarlı kalması sağlanır.`),H(`q3`,`Kayıt dosyası ilk açılışta henüz yokken ne yapmak doğrudur?`,[`FileNotFoundError'ı yakalayıp boş bir listeyle başlamak`,`Programı kapatmak`,`Hatayı kullanıcıya olduğu gibi göstermek`,`Rastgele veri üretmek`],0,`Eksik ya da bozuk dosya uygulamayı çökertmemeli; güvenli bir başlangıç durumu kullanılmalıdır.`),H(`q4`,`Bir iş kuralı (ör. "görev başlığı boş olamaz") nerede yazılmalıdır?`,[`Veri modelinde`,`Yalnızca düğmenin command fonksiyonunda`,`Menüde`,`Hiçbir yerde`],0,`Kural modelde olursa her arayüzde (terminal, pencere) aynı şekilde uygulanır.`)]),practice:[V(`p-m50-load`,`Bozuk dosya uygulamayı çökertiyor`,`orta`,35,`yukle() bozuk dosyada JSONDecodeError ile çöküyor; boş liste döndürmeli. Eksik hata yakalamayı ekle.`,[{type:`JSONDecodeError`,description:`Bozuk JSON okunurken oluşan hata yakalanmıyor`}],I`import json
def yukle(dosya):
    try:
        with open(dosya, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return []
with open("bozuk_demo.json", "w", encoding="utf-8") as f:
    f.write("{bozuk")
print(yukle("bozuk_demo.json"))`,I`import json
def yukle(dosya):
    try:
        with open(dosya, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []
with open("bozuk_demo.json", "w", encoding="utf-8") as f:
    f.write("{bozuk")
print(yukle("bozuk_demo.json"))`,[{d:`Boş liste`,out:`[]`}],[`except içine json.JSONDecodeError'ı da ekle.`]),B(`p-m50-sil`,`Görev silme`,`orta`,30,`GorevListesi sınıfına sil(sira) metodu ekle: o sıradaki görevi listeden silsin. Sıra geçersizse IndexError fırlatsın (list.pop zaten bunu yapar).`,`${Fl}`,`${Fl}
    def sil(self, sira):
        self.gorevler.pop(sira)
`,[{d:`Silme`,append:`l = GorevListesi()
for b in ["a", "b", "c"]:
    l.ekle(b)
l.sil(1)
print([g.baslik for g in l.gorevler])`,out:`['a', 'c']`},{d:`Geçersiz sıra`,append:`l = GorevListesi()
try:
    l.sil(0)
except IndexError:
    print("geçersiz sıra")`,out:`geçersiz sıra`}],[`self.gorevler.pop(sira)`],[`Silme doğru`,`Geçersiz sıra IndexError`])]})]),Ll=(e,t,n,r,i,a,o,s,c,l)=>({id:e,kind:`bugfix`,title:t,difficulty:n,points:r,instructions:i,bugs:a,starterCode:o,solutionCode:s,testCases:c,hints:l,successCriteria:[`Kod hatasız çalışır`,...a.map(e=>`${e.type} düzeltildi`)]}),Rl=(e,t,n,r,i,a,o,s,c,l)=>({id:e,kind:`code`,title:t,difficulty:n,points:r,instructions:i,starterCode:a,solutionCode:o,testCases:s,hints:c,successCriteria:l}),zl={"m1-l1":[Rl(`p-m1-three-lines`,`Üç satırda tanıt`,`kolay`,15,`Üç ayrı print() ile alt alta "Python", "çok", "kolay" yazdır.`,`print("Python")
`,`print("Python")
print("çok")
print("kolay")`,[{id:`t1`,description:`Üç satır doğru yazdırılıyor`,expectedStdout:`Python
çok
kolay`}],[`Her satır için ayrı bir print() gerekir.`],[`Çıktı: Python, çok, kolay (alt alta)`])],"m1-l2":[Rl(`p-m1-comment`,`Yorum satırı yap`,`kolay`,15,`Programın yalnızca "Python" yazdırması için gereksiz satırı yorum satırına çevir (satırı silme).`,`print("Merhaba")
print("Python")`,`# print("Merhaba")
print("Python")`,[{id:`t1`,description:`Yalnızca Python yazdırılıyor`,expectedStdout:`Python`},{id:`t2`,description:`Satır silinmemiş, yorum yapılmış`,sourceMustMatch:`#\\s*print\\("Merhaba"\\)`}],[`Yorum satırı # işaretiyle başlar; Python o satırı çalıştırmaz.`],[`Çıktı: Python`,`Satır # ile yorum yapılmış`])],"m14-l1":[Ll(`p-m14-average`,`Ortalama neden yanlış çıkıyor?`,`orta`,35,`Program üç notun ortalamasını yazdırmalı ama 60, 60, 60 için 140.0 yazdırıyor. İşlem önceliği hatasını düzelt.`,[{type:`Mantık hatası`,description:`Bölme, toplamdan önce yalnızca son sayıya uygulanıyor`}],`n1 = int(input())
n2 = int(input())
n3 = int(input())
ort = n1 + n2 + n3 / 3
print(ort)`,`n1 = int(input())
n2 = int(input())
n3 = int(input())
ort = (n1 + n2 + n3) / 3
print(ort)`,[{id:`t1`,description:`60, 60, 60`,stdin:[`60`,`60`,`60`],expectedStdout:`60.0`},{id:`t2`,description:`30, 60, 90`,stdin:[`30`,`60`,`90`],expectedStdout:`60.0`}],[`Önce toplanması gereken kısmı parantez içine al.`])],"m14-l2":[Rl(`p-m14-total`,`N sayının toplamı`,`orta`,35,`Önce kaç sayı gireceğini (n), sonra n tane sayıyı input() ile al (soru metni olmadan) ve toplamlarını yazdır.`,`n = int(input())
`,`n = int(input())
toplam = 0
for _ in range(n):
    toplam += int(input())
print(toplam)`,[{id:`t1`,description:`1, 2, 3`,stdin:[`3`,`1`,`2`,`3`],expectedStdout:`6`},{id:`t2`,description:`10, 5`,stdin:[`2`,`10`,`5`],expectedStdout:`15`}],[`Toplamı tutacak bir değişken ve n kez dönen bir döngü gerekir.`],[`3 sayı için 6`,`2 sayı için 15`])],"m14-l3":[Ll(`p-m14-evens`,`Çift sayıları sayma`,`orta`,35,`1'den 9'a kadar (9 dahil) çift sayıların adedi 4 olmalı ama program 1 yazdırıyor. Hatayı bul ve düzelt.`,[{type:`Yazım/mantık hatası`,description:`Sayaç artırılmıyor, her seferinde 1 olarak atanıyor`}],`sayac = 0
for i in range(1, 10):
    if i % 2 == 0:
        sayac =+ 1
print(sayac)`,`sayac = 0
for i in range(1, 10):
    if i % 2 == 0:
        sayac += 1
print(sayac)`,[{id:`t1`,description:`Çift sayı adedi 4`,expectedStdout:`4`}],[`=+ ile += aynı şey değildir.`])],"m1-l3":[Ll(`p-m1-quotes`,`Eksik tırnak ve parantez`,`kolay`,20,`Aşağıdaki kodda 2 yazım hatası var. Düzelt ve çıktıyı "Merhaba" ve "Dünya" olarak iki satırda al.`,[{type:`SyntaxError`,description:`Birinci satırda kapanış tırnağı eksik`},{type:`SyntaxError`,description:`İkinci satırda kapanış parantezi eksik`}],`print("Merhaba)
print("Dünya"`,`print("Merhaba")
print("Dünya")`,[{id:`t1`,description:`İki satır doğru yazdırılıyor`,expectedStdout:`Merhaba
Dünya`}],[`Hata mesajı önce ilk hatalı satırı gösterir; sırayla düzelt.`,`Her açılan tırnak ve parantez kapanmalı.`])],"m2-l2":[Ll(`p-m2-sep`,`Yanlış parametre adı`,`kolay`,20,`Kod "a-b-c" yazdırmalı ama hata veriyor. Hatayı bul ve düzelt.`,[{type:`TypeError`,description:`print() içinde olmayan bir parametre adı kullanılmış`}],`print("a", "b", "c", seperator="-")`,`print("a", "b", "c", sep="-")`,[{id:`t1`,description:`Çıktı a-b-c`,expectedStdout:`a-b-c`}],[`print() ayırıcı parametresinin adı kısadır.`]),Rl(`p-m2-end`,`Aynı satırda yazdır`,`orta`,25,`İki ayrı print() kullanarak ekrana tek satırda "Bir İki" yazdır. end parametresini kullan.`,`print("Bir")
print("İki")`,`print("Bir", end=" ")
print("İki")`,[{id:`t1`,description:`Çıktı Bir İki`,expectedStdout:`Bir İki`},{id:`t2`,description:`end kullanılmış`,sourceMustMatch:`end\\s*=`}],[`İlk print() satır sonu yerine boşluk yazmalı.`],[`Çıktı: Bir İki`,`end kullanılmış`])],"m3-l1":[Ll(`p-m3-name`,`Büyük/küçük harf hatası`,`kolay`,20,`Program "Ankara" yazdırmalı ama NameError veriyor. Hatayı düzelt.`,[{type:`NameError`,description:`Değişken adı farklı büyük/küçük harfle yazılmış`}],`sehir = "Ankara"
print(Sehir)`,`sehir = "Ankara"
print(sehir)`,[{id:`t1`,description:`Çıktı Ankara`,expectedStdout:`Ankara`}],[`Python büyük ve küçük harfi ayırt eder.`])],"m3-l3":[Rl(`p-m3-convert`,`Metni sayıya çevir`,`kolay`,20,`x = "42" bir metindir. Onu sayıya çevirip 8 ile topla ve sonucu yazdır.`,`x = "42"
`,`x = "42"
print(int(x) + 8)`,[{id:`t1`,description:`Çıktı 50`,expectedStdout:`50`},{id:`t2`,description:`int() kullanılmış`,sourceMustMatch:`int\\(`}],[`int(x) metni sayıya çevirir.`],[`Çıktı: 50`,`int() kullanılmış`]),Ll(`p-m3-typeerror`,`Tip uyuşmazlığı (TypeError)`,`orta`,30,`Sayı ile metin toplanırken hata oluşuyor. Kod "Yaşım: 20" yazdırmalı. Hatayı düzelt.`,[{type:`TypeError`,description:`Metin ile sayı + ile birleştirilmeye çalışılıyor`}],`yas = 20
print("Yaşım: " + yas)`,`yas = 20
print("Yaşım: " + str(yas))`,[{id:`t1`,description:`Çıktı Yaşım: 20`,expectedStdout:`Yaşım: 20`}],[`Sayıyı metne çevirmek için str() kullan ya da f-string yaz.`])],"m4-l2":[Ll(`p-m4-sum`,`Toplam yerine birleştirme`,`orta`,30,`Program iki sayıyı toplamalı. 3 ve 4 girildiğinde 7 yazdırmalı ama 34 yazdırıyor. Mantık hatasını düzelt.`,[{type:`Mantık hatası`,description:`input() metin döndürür; metinler toplanmak yerine yan yana birleşir`}],`a = input()
b = input()
print(a + b)`,`a = int(input())
b = int(input())
print(a + b)`,[{id:`t1`,description:`3 + 4`,stdin:[`3`,`4`],expectedStdout:`7`},{id:`t2`,description:`10 + 5`,stdin:[`10`,`5`],expectedStdout:`15`}],[`Çıktı neden 34? input() hangi türde değer döndürür?`]),Rl(`p-m4-quick-sum`,`İki sayının toplamı`,`kolay`,25,`Kullanıcıdan iki tam sayı al (soru metni olmadan) ve toplamını yazdır.`,`a = int(input())
`,`a = int(input())
b = int(input())
print(a + b)`,[{id:`t1`,description:`8 + 9`,stdin:[`8`,`9`],expectedStdout:`17`},{id:`t2`,description:`100 + 1`,stdin:[`100`,`1`],expectedStdout:`101`}],[`İkinci sayı için yeni bir değişken ve input() gerekir.`],[`8 ve 9 için 17`,`100 ve 1 için 101`])]},Bl={15:{title:`Metinler I: İndeks ve Dilimleme`,description:`Metnin harflerine index ile ulaş, dilimleme (slicing) ile parçalar al, uzunluğunu ölç.`},16:{title:`Metin Metotları`,description:`upper, lower, strip, replace, split, join ve format ile metinleri işle.`},17:{title:`Listeler II`,description:`Dilimleme, sıralama, ekleme/silme ve iç içe listelerle veri düzenle.`},18:{title:`Demetler ve Kümeler`,description:`Değişmeyen demetler (tuple) ve tekrarsız kümelerle (set) çalış.`},19:{title:`Sözlükler II`,description:`get, sayma kalıpları ve iç içe sözlüklerle veriyi modelle.`},20:{title:`Liste ve Sözlük Üreteçleri`,description:`Tek satırda liste, sözlük ve küme üret (comprehension).`},21:{title:`Döngü Kalıpları`,description:`enumerate, zip, iç içe döngüler ve ekrana desenler çizmek.`},22:{title:`Fonksiyonlar II`,description:`*args, **kwargs, kapsam (scope) ve lambda ile esnek fonksiyonlar yaz.`},23:{title:`Özyineleme`,description:`Kendini çağıran fonksiyonlar: faktöriyel, Fibonacci ve ne zaman kullanılır.`},24:{title:`map, filter ve sorted`,description:`Fonksiyonları argüman olarak ver; listeleri dönüştür, süz ve sırala.`},25:{title:`collections ve itertools`,description:`Counter, defaultdict, deque ve itertools ile güçlü hazır araçlar.`},26:{title:`Tarih ve Saat`,description:`datetime ile tarih hesapla, biçimlendir ve karşılaştır.`},27:{title:`Düzenli İfadeler`,description:`re modülüyle metinde desen ara, eşleştir ve değiştir.`},28:{title:`JSON ve CSV`,description:`Veriyi JSON ve CSV biçiminde oku, yaz ve dönüştür.`},29:{title:`OOP II: Özel Metotlar ve property`,description:`__str__, __repr__, @property, sınıf ve statik metotlar.`},30:{title:`OOP III: Çok Biçimlilik ve Soyut Sınıflar`,description:`Kompozisyon, çok biçimlilik ve abc ile soyut sınıflar.`},31:{title:`dataclass, enum ve Tip İpuçları`,description:`Veri sınıfları, sabit değer kümeleri (enum) ve tip ipuçları (typing).`},32:{title:`İstisnalar II ve Hata Ayıklama`,description:`raise, özel hata sınıfları, assert ve hata ayıklama teknikleri.`},33:{title:`Test Yazma`,description:`assert, unittest ve doctest ile kodunun doğruluğunu otomatik denetle.`},34:{title:`Okunabilir Kod`,description:`PEP 8, docstring, isimlendirme ve yeniden düzenleme (refactoring).`},35:{title:`Dekoratörler ve with`,description:`Fonksiyonları sarmalayan dekoratörler ve context manager (with).`},36:{title:`Üreteçler ve İteratörler`,description:`yield ile tembel (lazy) veri üreten fonksiyonlar ve iteratör protokolü.`},37:{title:`Arama ve Sıralama Algoritmaları`,description:`Doğrusal/ikili arama; kabarcık, seçmeli ve araya ekleme sıralaması.`},38:{title:`Yığın, Kuyruk ve Bağlı Liste`,description:`Temel veri yapılarını kendin kur: stack, queue ve linked list.`},39:{title:`Algoritmik Düşünme`,description:`Sözde kod, problemi parçalama ve karmaşıklık (Big-O) fikri.`},40:{title:`Sayılar ve Sayı Oyunları`,description:`Asal sayılar, Fibonacci, OBEB/OKEK, statistics ve fractions.`},41:{title:`tkinter'a Giriş`,description:`İlk pencereni aç: Tk(), başlık, boyut, Label ve mainloop. Pencereyi ekranda gör.`},42:{title:`Düğmeler ve Olaylar`,description:`Button, command, Entry ve StringVar ile tıklanabilir uygulamalar.`},43:{title:`Yerleşim: pack, grid, place`,description:`Bileşenleri Frame'lerle düzenle ve pencereyi güzel yerleştir.`},44:{title:`Seçim Bileşenleri`,description:`Checkbutton, Radiobutton, Listbox, Scale, Spinbox ve Combobox.`},45:{title:`Menüler ve Açılır Pencereler`,description:`Menu, messagebox, simpledialog ve Toplevel ile ek pencereler.`},46:{title:`Canvas ve Animasyon`,description:`Canvas ile şekil çiz, nesneleri hareket ettir ve after() ile canlandır.`},47:{title:`tkinter Projesi`,description:`Hesap makinesi ve yapılacaklar listesi: öğrendiklerini pencereli bir uygulamada birleştir.`},48:{title:`Proje: Metin Tabanlı Oyun`,description:`Adam asmaca, taş-kağıt-makas veya tic-tac-toe oyunu yaz.`},49:{title:`Proje: Not Takip Sistemi`,description:`Sınıflar, JSON ile saklama ve istatistiklerle bir not takip programı.`},50:{title:`Bitirme Projesi`,description:`Kendi pencereli uygulamanı tasarla: tkinter + OOP + veri saklama.`}};function Vl(e){return Object.entries(Bl).map(([e,t])=>({n:Number(e),...t})).filter(t=>!e.has(t.n)).map(e=>({id:`m${e.n}`,courseId:`python-baslangic`,title:e.title,description:e.description,order:e.n,status:`planned`,lessons:[]}))}var Hl=e=>({...e,lessons:e.lessons.map(e=>{let t=e;return{...t,practice:[...t.practice??[],...zl[t.id]??[]]}})});function Ul(e){let t=0;return e.map(e=>({...e,lessons:e.lessons.map(e=>{let n=e;if(!n.quiz)return e;let r=n.quiz.questions.map(e=>{let n=(t++*3+1)%4%e.options.length,r=[...e.options];return[r[e.correctIndex],r[n]]=[r[n],r[e.correctIndex]],{...e,options:r,correctIndex:n}});return{...n,quiz:{...n.quiz,questions:r}}})}))}var Wl=[Lc,Rc,zc,Bc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,_l,vl,yl,bl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Il].map(e=>Hl(e)),Gl=Ic({id:`python-baslangic`,title:`Python Başlangıç`,description:`Sıfırdan Python: etkileşimli dersler, kod editörü ve otomatik görev kontrolü.`,level:`başlangıç`},Ul([...Wl,...Vl(new Set(Wl.map(e=>e.order)))])),Kl={SyntaxError:()=>`Kodun yazım kurallarına uymuyor. Tırnak, parantez ve iki nokta (:) işaretlerinin eşleştiğini kontrol et.`,IndentationError:()=>`Girintileme (satır başındaki boşluklar) hatalı. Aynı blokta satırlar aynı hizada olmalı.`,TabError:()=>`Tab ve boşluk karışmış. Girintilemede yalnızca birini kullan.`,NameError:e=>`Python "${/name '(.+?)'/.exec(e)?.[1]??`?`}" adını tanımıyor. Değişkeni önce tanımladığından ve adını doğru yazdığından emin ol.`,TypeError:()=>`Bir işlem uyumsuz türlerle yapılmaya çalışıldı (ör. metin + sayı). int(), float() veya str() ile türü dönüştürmeyi dene.`,ValueError:()=>`Değerin türü doğru ama içeriği uygun değil (ör. int("abc")).`,ZeroDivisionError:()=>`Bir sayıyı sıfıra bölemezsin.`,IndexError:()=>`Listede olmayan bir sıraya (index) erişmeye çalıştın.`,TclError:e=>`tkinter (pencere) hatası: ${e}. Aynı pencerede pack() ve grid() birlikte kullanılamaz; seçeneklerin adlarını ve bileşenin var olup olmadığını kontrol et.`,KeyError:()=>`Sözlükte olmayan bir anahtara erişmeye çalıştın.`,AttributeError:()=>`Bu nesnenin böyle bir özelliği ya da metodu yok.`,EOFError:()=>`input() cevap bekliyor ama verilecek veri kalmadı.`,ModuleNotFoundError:()=>`Bu modül bu ortamda bulunamadı.`,RecursionError:()=>`Fonksiyon kendini çok fazla kez çağırdı; bitiş koşulu eksik olabilir.`};function ql(e,t){let n=Kl[e];return n?n(t):`Program çalışırken beklenmeyen bir hata oluştu. Hata mesajını ve satır numarasını incele.`}var Jl=`https://cdn.jsdelivr.net/pyodide/v314.0.7/full/`,Yl=()=>{let e=Jl;return e.startsWith(`/`)?new URL(e,location.origin).href:e},Xl=class{worker=null;state=`idle`;listeners=new Set;readyPromise=null;chain=Promise.resolve();nextId=1;pending=null;tkPending=new Map;getState(){return this.state}isReady(){return this.state===`ready`||this.state===`running`}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}setState(e,t){this.state=e,this.listeners.forEach(n=>n(e,t))}init(){return this.readyPromise||=(this.setState(`loading`,`Python yükleniyor…`),new Promise((e,t)=>{let n=new Worker(new URL(`/pylearn-app/assets/pyodide.worker-zA0lcBl0.js`,``+import.meta.url),{type:`module`});this.worker=n,n.onmessage=r=>{let i=r.data;if(i.type===`ready`)this.setState(`ready`),e();else if(i.type===`result`)this.finish(i.id,this.parse(i.raw));else if(i.type===`tkresult`){let e=this.tkPending.get(i.id);this.tkPending.delete(i.id),e?.(JSON.parse(i.raw))}else i.type===`fatal`&&(this.state===`loading`?(this.setState(`error`,i.message),this.readyPromise=null,n.terminate(),t(Error(i.message))):this.finish(i.id,{status:`error`,stdout:``,durationMs:0,error:{type:`RuntimeFailure`,message:i.message??``,line:null,traceback:i.message??``,friendly:`Python çalışma ortamı hata verdi.`}}))},n.onerror=e=>{this.setState(`error`,e.message),this.readyPromise=null,t(Error(e.message))},n.postMessage({type:`init`,baseUrl:Yl()})})),this.readyPromise}parse(e){let t=JSON.parse(e),n=this.pending?.startedAt??performance.now();return{status:t.error?`error`:`ok`,stdout:t.stdout,variables:t.variables,durationMs:Math.round(performance.now()-n),error:t.error?{...t.error,friendly:ql(t.error.type,t.error.message)}:void 0,tk:t.tk??null,checks:t.checks??void 0}}tkEvent(e){let t=async()=>{if(!this.worker||!this.isReady())return{stale:!0};let t=this.nextId++;return new Promise(n=>{this.tkPending.set(t,n),this.worker.postMessage({type:`tk`,id:t,raw:JSON.stringify(e)})})},n=this.chain.then(t,t);return this.chain=n.catch(()=>void 0),n}finish(e,t){if(!this.pending||this.pending.id!==e)return;clearTimeout(this.pending.timer);let n=this.pending;this.pending=null,this.setState(`ready`),n.resolve(t)}runCode(e,t={}){let n=()=>this.execute(e,t),r=this.chain.then(n,n);return this.chain=r.catch(()=>void 0),r}async execute(e,t){await this.init();let n=this.nextId++,r=t.timeoutMs??8e3;return new Promise(i=>{let a=performance.now(),o=setTimeout(()=>this.abort(n,`timeout`),r);this.pending={id:n,resolve:i,startedAt:a,timer:o},this.setState(`running`),this.worker.postMessage({type:`run`,id:n,code:e,stdin:t.stdin??[],echoInput:t.echoInput??!0,checks:t.checks?.length?JSON.stringify(t.checks):``})})}abort(e,t){let n=this.pending;n&&n.id===e&&(clearTimeout(n.timer),this.pending=null,n.resolve({status:t,stdout:``,durationMs:Math.round(performance.now()-n.startedAt),error:t===`timeout`?{type:`Timeout`,message:`Zaman aşımı`,line:null,traceback:``,friendly:`Kod çok uzun sürdü ve durduruldu. Sonsuz bir döngü (while True gibi) olabilir.`}:void 0}),this.restart())}cancel(){this.pending&&this.abort(this.pending.id,`cancelled`)}restart(){this.tkPending.forEach(e=>e({stale:!0})),this.tkPending.clear(),this.worker?.terminate(),this.worker=null,this.readyPromise=null,this.setState(`idle`),this.init().catch(()=>void 0)}async resetRuntime(){this.cancel(),this.restart(),await this.init()}},Zl=e=>e===`guest`?`pylearn`:`pylearn-u-${e}`,Ql=async e=>{await us(Zl(e)),await us(`${Zl(e)}-analytics`)};function $l(e,t){let n=os(Zl(e));return{content:Gl,progressRepo:new cs(n),settingsRepo:new ls(n),runtime:t}}function eu(){let{user:e,service:t}=ee();return(0,T.useEffect)(()=>{if(!e||!t.trackEvents||e.role===`support`||e.role===`admin`)return;let n=t.trackEvents.bind(t);return ge.start(n,Zl(e.id)).then(()=>ge.track(`session_start`)),()=>ge.stop()},[e?.id,e?.role,t]),null}function tu({runtime:e}){let{user:t,ready:n}=ee(),r=t?.id??`guest`,i=(0,T.useMemo)(()=>$l(r,e),[r,e]);return n?(0,N.jsx)(ve,{services:i,children:(0,N.jsx)(hs,{children:(0,N.jsx)(we,{children:(0,N.jsx)(Oc,{})})})},r):(0,N.jsx)(w,{label:`Oturum kontrol ediliyor…`})}function nu({accountService:e,teacherService:t,adminService:n,supportService:r,taskService:i,institutionService:a,runtime:o}){return(0,N.jsx)(ne,{service:e,teacher:t,admin:n,support:r,tasks:i,institution:a,children:(0,N.jsxs)(u,{basename:`/pylearn-app/`.replace(/\/$/,``)||void 0,children:[(0,N.jsx)(eu,{}),(0,N.jsx)(Ps,{children:(0,N.jsx)(tu,{runtime:o})})]})})}var q;(function(e){e.Unimplemented=`UNIMPLEMENTED`,e.Unavailable=`UNAVAILABLE`})(q||={});var ru=class extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}},iu=e=>e?.androidBridge?`android`:e?.webkit?.messageHandlers?.bridge?`ios`:`web`,au=e=>{let t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>t===null?iu(e):t.name,a=()=>i()!==`web`,o=e=>!!(l.get(e)?.platforms.has(i())||s(e)),s=e=>n.PluginHeaders?.find(t=>t.name===e),c=t=>e.console.error(t),l=new Map;return n.convertFileSrc||=e=>e,n.getPlatform=i,n.handleError=c,n.isNativePlatform=a,n.isPluginAvailable=o,n.registerPlugin=(e,a={})=>{let o=l.get(e);if(o)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),o.proxy;let c=i(),u=s(e),d,f=async()=>(!d&&c in a?d=d=typeof a[c]==`function`?await a[c]():a[c]:t!==null&&!d&&`web`in a&&(d=d=typeof a.web==`function`?await a.web():a.web),d),p=(t,r)=>{if(u){let i=u?.methods.find(e=>r===e.name);if(i)return i.rtype===`promise`?t=>n.nativePromise(e,r.toString(),t):(t,i)=>n.nativeCallback(e,r.toString(),t,i);if(t)return t[r]?.bind(t)}else if(t)return t[r]?.bind(t);else throw new ru(`"${e}" plugin is not implemented on ${c}`,q.Unimplemented)},m=t=>{let n,r=(...r)=>{let i=f().then(i=>{let a=p(i,t);if(a){let e=a(...r);return n=e?.remove,e}throw new ru(`"${e}.${t}()" is not implemented on ${c}`,q.Unimplemented)});return t===`addListener`&&(i.remove=async()=>n()),i};return r.toString=()=>`${t.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:t,writable:!1,configurable:!1}),r},h=m(`addListener`),g=m(`removeListener`),_=(e,t)=>{let n=h({eventName:e},t),r=async()=>{let r=await n;g({eventName:e,callbackId:r},t)},i=new Promise(e=>n.then(()=>e({remove:r})));return i.remove=async()=>{console.warn(`Using addListener() without 'await' is deprecated.`),await r()},i},v=new Proxy({},{get(e,t){switch(t){case`$$typeof`:return;case`toJSON`:return()=>({});case`addListener`:return u?_:h;case`removeListener`:return g;default:return m(t)}}});return r[e]=v,l.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(a),...u?[c]:[]])}),v},n.Exception=ru,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},ou=(e=>e.Capacitor=au(e))(typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}),su=ou.registerPlugin,cu=class{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);let r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){let r=this.listeners[e];if(r)r.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||=[],n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e]?.length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e=`not implemented`){return new ou.Exception(e,q.Unimplemented)}unavailable(e=`not available`){return new ou.Exception(e,q.Unavailable)}async removeListener(e,t){let n=this.listeners[e];if(!n)return;let r=n.indexOf(t);r!==-1&&this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){let t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}},lu=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),uu=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),du=class extends cu{async getCookies(){let e=document.cookie,t={};return e.split(`;`).forEach(e=>{if(e.length<=0)return;let[n,r]=e.replace(/=/,`CAP_COOKIE`).split(`CAP_COOKIE`);n=uu(n).trim(),r=uu(r).trim(),t[n]=r}),t}async setCookie(e){try{let t=lu(e.key),n=lu(e.value),r=e.expires?`; expires=${e.expires.replace(`expires=`,``)}`:``,i=(e.path||`/`).replace(`path=`,``),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:``;document.cookie=`${t}=${n||``}${r}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{let e=document.cookie.split(`;`)||[];for(let t of e)document.cookie=t.replace(/^ +/,``).replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}};su(`CapacitorCookies`,{web:()=>new du});var fu=async e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{let e=r.result;t(e.indexOf(`,`)>=0?e.split(`,`)[1]:e)},r.onerror=e=>n(e),r.readAsDataURL(e)}),pu=(e={})=>{let t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,r,i)=>(n[r]=e[t[i]],n),{})},mu=(e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{let[r,i]=n,a,o;return Array.isArray(i)?(o=``,i.forEach(e=>{a=t?encodeURIComponent(e):e,o+=`${r}=${a}&`}),o.slice(0,-1)):(a=t?encodeURIComponent(i):i,o=`${r}=${a}`),`${e}&${o}`},``).substr(1):null,hu=(e,t={})=>{let n=Object.assign({method:e.method||`GET`,headers:e.headers},t),r=pu(e.headers)[`content-type`]||``;if(typeof e.data==`string`)n.body=e.data;else if(r.includes(`application/x-www-form-urlencoded`)){let t=new URLSearchParams;for(let[n,r]of Object.entries(e.data||{}))t.set(n,r);n.body=t.toString()}else if(r.includes(`multipart/form-data`)||e.data instanceof FormData){let t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(let n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;let r=new Headers(n.headers);r.delete(`content-type`),n.headers=r}else(r.includes(`application/json`)||typeof e.data==`object`)&&(n.body=JSON.stringify(e.data));return n},gu=class extends cu{async request(e){let t=hu(e,e.webFetchExtra),n=mu(e.params,e.shouldEncodeUrlParams),r=n?`${e.url}?${n}`:e.url,i=await fetch(r,t),a=i.headers.get(`content-type`)||``,{responseType:o=`text`}=i.ok?e:{};a.includes(`application/json`)&&(o=`json`);let s,c;switch(o){case`arraybuffer`:case`blob`:c=await i.blob(),s=await fu(c);break;case`json`:s=await i.json();break;default:s=await i.text()}let l={};return i.headers.forEach((e,t)=>{l[t]=e}),{data:s,headers:l,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:`GET`}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:`POST`}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:`PUT`}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:`PATCH`}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:`DELETE`}))}};su(`CapacitorHttp`,{web:()=>new gu});var _u;(function(e){e.Dark=`DARK`,e.Light=`LIGHT`,e.Default=`DEFAULT`})(_u||={});var vu;(function(e){e.StatusBar=`StatusBar`,e.NavigationBar=`NavigationBar`})(vu||={});var yu=class extends cu{async setStyle(){this.unavailable(`not available for web`)}async setAnimation(){this.unavailable(`not available for web`)}async show(){this.unavailable(`not available for web`)}async hide(){this.unavailable(`not available for web`)}};su(`SystemBars`,{web:()=>new yu});async function bu(e){if(!ou.isNativePlatform())return;let[{Keyboard:t},{App:n}]=await Promise.all([S(()=>import(`./esm-CO1SfxrO.js`),[]),S(()=>import(`./esm-CmTkgZiW.js`),__vite__mapDeps([38,3]))]),r=document.documentElement;await t.setAccessoryBarVisible({isVisible:!1}).catch(()=>void 0),await t.addListener(`keyboardWillShow`,()=>r.classList.add(`kb-open`)),await t.addListener(`keyboardDidHide`,()=>r.classList.remove(`kb-open`)),await t.addListener(`keyboardWillHide`,()=>r.classList.remove(`kb-open`)),await n.addListener(`backButton`,()=>{e.canGoBack()?e.back():n.exitApp()})}bu({canGoBack:()=>window.history.length>1,back:()=>window.history.back()}).catch(()=>void 0);var xu=Ue?new Yo:null,Su=xu??new y,Cu=xu?new d(xu.client):void 0,wu=xu?new b(xu.client):void 0,Tu=xu?new g(xu.client):void 0,Eu=xu?new re(xu.client):void 0,Du=xu?new te(xu.client):void 0,Ou=new Xl;(0,Be.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(T.StrictMode,{children:(0,N.jsx)(nu,{accountService:Su,teacherService:Cu,adminService:wu,supportService:Du,taskService:Tu,institutionService:Eu,runtime:Ou})}));export{Fs as a,Ss as c,_s as d,gs as f,Is as i,bs as l,Ue as m,su as n,Ns as o,fs as p,Ql as r,ks as s,cu as t,xs as u};