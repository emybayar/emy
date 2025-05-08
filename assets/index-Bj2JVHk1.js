(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Fv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var lh={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Iy(){if(E_)return Po;E_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Po.Fragment=t,Po.jsx=i,Po.jsxs=i,Po}var T_;function zy(){return T_||(T_=1,lh.exports=Iy()),lh.exports}var ot=zy(),uh={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function By(){if(b_)return re;b_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(L,$,yt){this.props=L,this.context=$,this.refs=T,this.updater=yt||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(L,$,yt){this.props=L,this.context=$,this.refs=T,this.updater=yt||S}var N=O.prototype=new _;N.constructor=O,E(N,y.prototype),N.isPureReactComponent=!0;var C=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function z(L,$,yt,Mt,Q,mt){return yt=mt.ref,{$$typeof:s,type:L,key:$,ref:yt!==void 0?yt:null,props:mt}}function X(L,$){return z(L.type,$,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function w(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return $[yt]})}var V=/\/+/g;function ut(L,$){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):$.toString(36)}function st(){}function xt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(st,st):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function pt(L,$,yt,Mt,Q){var mt=typeof L;(mt==="undefined"||mt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(mt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case s:case t:St=!0;break;case g:return St=L._init,pt(St(L._payload),$,yt,Mt,Q)}}if(St)return Q=Q(L),St=Mt===""?"."+ut(L,0):Mt,C(Q)?(yt="",St!=null&&(yt=St.replace(V,"$&/")+"/"),pt(Q,$,yt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=X(Q,yt+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(V,"$&/")+"/")+St)),$.push(Q)),1;St=0;var Rt=Mt===""?".":Mt+":";if(C(L))for(var Lt=0;Lt<L.length;Lt++)Mt=L[Lt],mt=Rt+ut(Mt,Lt),St+=pt(Mt,$,yt,mt,Q);else if(Lt=v(L),typeof Lt=="function")for(L=Lt.call(L),Lt=0;!(Mt=L.next()).done;)Mt=Mt.value,mt=Rt+ut(Mt,Lt++),St+=pt(Mt,$,yt,mt,Q);else if(mt==="object"){if(typeof L.then=="function")return pt(xt(L),$,yt,Mt,Q);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function I(L,$,yt){if(L==null)return L;var Mt=[],Q=0;return pt(L,Mt,"","",function(mt){return $.call(yt,mt,Q++)}),Mt}function Z(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var q=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Et(){}return re.Children={map:I,forEach:function(L,$,yt){I(L,function(){$.apply(this,arguments)},yt)},count:function(L){var $=0;return I(L,function(){$++}),$},toArray:function(L){return I(L,function($){return $})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cloneElement=function(L,$,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Mt=E({},L.props),Q=L.key,mt=void 0;if($!=null)for(St in $.ref!==void 0&&(mt=void 0),$.key!==void 0&&(Q=""+$.key),$)!G.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(Mt[St]=$[St]);var St=arguments.length-2;if(St===1)Mt.children=yt;else if(1<St){for(var Rt=Array(St),Lt=0;Lt<St;Lt++)Rt[Lt]=arguments[Lt+2];Mt.children=Rt}return z(L.type,Q,void 0,void 0,mt,Mt)},re.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,$,yt){var Mt,Q={},mt=null;if($!=null)for(Mt in $.key!==void 0&&(mt=""+$.key),$)G.call($,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Q[Mt]=$[Mt]);var St=arguments.length-2;if(St===1)Q.children=yt;else if(1<St){for(var Rt=Array(St),Lt=0;Lt<St;Lt++)Rt[Lt]=arguments[Lt+2];Q.children=Rt}if(L&&L.defaultProps)for(Mt in St=L.defaultProps,St)Q[Mt]===void 0&&(Q[Mt]=St[Mt]);return z(L,mt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=D,re.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Z}},re.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},re.startTransition=function(L){var $=B.T,yt={};B.T=yt;try{var Mt=L(),Q=B.S;Q!==null&&Q(yt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(Et,q)}catch(mt){q(mt)}finally{B.T=$}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(L){return B.H.use(L)},re.useActionState=function(L,$,yt){return B.H.useActionState(L,$,yt)},re.useCallback=function(L,$){return B.H.useCallback(L,$)},re.useContext=function(L){return B.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,$){return B.H.useDeferredValue(L,$)},re.useEffect=function(L,$,yt){var Mt=B.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(L,$)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(L,$,yt){return B.H.useImperativeHandle(L,$,yt)},re.useInsertionEffect=function(L,$){return B.H.useInsertionEffect(L,$)},re.useLayoutEffect=function(L,$){return B.H.useLayoutEffect(L,$)},re.useMemo=function(L,$){return B.H.useMemo(L,$)},re.useOptimistic=function(L,$){return B.H.useOptimistic(L,$)},re.useReducer=function(L,$,yt){return B.H.useReducer(L,$,yt)},re.useRef=function(L){return B.H.useRef(L)},re.useState=function(L){return B.H.useState(L)},re.useSyncExternalStore=function(L,$,yt){return B.H.useSyncExternalStore(L,$,yt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.1.0",re}var A_;function Od(){return A_||(A_=1,uh.exports=By()),uh.exports}var ct=Od();const Fy=Fv(ct);var ch={exports:{}},Io={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function Hy(){return R_||(R_=1,function(s){function t(I,Z){var q=I.length;I.push(Z);t:for(;0<q;){var Et=q-1>>>1,L=I[Et];if(0<l(L,Z))I[Et]=Z,I[q]=L,q=Et;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Z=I[0],q=I.pop();if(q!==Z){I[0]=q;t:for(var Et=0,L=I.length,$=L>>>1;Et<$;){var yt=2*(Et+1)-1,Mt=I[yt],Q=yt+1,mt=I[Q];if(0>l(Mt,q))Q<L&&0>l(mt,Mt)?(I[Et]=mt,I[Q]=q,Et=Q):(I[Et]=Mt,I[yt]=q,Et=yt);else if(Q<L&&0>l(mt,q))I[Et]=mt,I[Q]=q,Et=Q;else break t}}return Z}function l(I,Z){var q=I.sortIndex-Z.sortIndex;return q!==0?q:I.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,x=null,v=3,S=!1,E=!1,T=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=I)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function B(I){if(T=!1,C(I),!E)if(i(m)!==null)E=!0,G||(G=!0,ut());else{var Z=i(p);Z!==null&&pt(B,Z.startTime-I)}}var G=!1,z=-1,X=5,D=-1;function w(){return y?!0:!(s.unstable_now()-D<X)}function V(){if(y=!1,G){var I=s.unstable_now();D=I;var Z=!0;try{t:{E=!1,T&&(T=!1,O(z),z=-1),S=!0;var q=v;try{e:{for(C(I),x=i(m);x!==null&&!(x.expirationTime>I&&w());){var Et=x.callback;if(typeof Et=="function"){x.callback=null,v=x.priorityLevel;var L=Et(x.expirationTime<=I);if(I=s.unstable_now(),typeof L=="function"){x.callback=L,C(I),Z=!0;break e}x===i(m)&&r(m),C(I)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var $=i(p);$!==null&&pt(B,$.startTime-I),Z=!1}}break t}finally{x=null,v=q,S=!1}Z=void 0}}finally{Z?ut():G=!1}}}var ut;if(typeof N=="function")ut=function(){N(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,xt=st.port2;st.port1.onmessage=V,ut=function(){xt.postMessage(null)}}else ut=function(){_(V,0)};function pt(I,Z){z=_(function(){I(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var q=v;v=Z;try{return I()}finally{v=q}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=v;v=I;try{return Z()}finally{v=q}},s.unstable_scheduleCallback=function(I,Z,q){var Et=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Et+q:Et):q=Et,I){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,I={id:g++,callback:Z,priorityLevel:I,startTime:q,expirationTime:L,sortIndex:-1},q>Et?(I.sortIndex=q,t(p,I),i(m)===null&&I===i(p)&&(T?(O(z),z=-1):T=!0,pt(B,q-Et))):(I.sortIndex=L,t(m,I),E||S||(E=!0,G||(G=!0,ut()))),I},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(I){var Z=v;return function(){var q=v;v=Z;try{return I.apply(this,arguments)}finally{v=q}}}}(hh)),hh}var w_;function Gy(){return w_||(w_=1,fh.exports=Hy()),fh.exports}var dh={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Vy(){if(C_)return Cn;C_=1;var s=Od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Cn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var D_;function ky(){if(D_)return dh.exports;D_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dh.exports=Vy(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Xy(){if(U_)return Io;U_=1;var s=Gy(),t=Od(),i=ky();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return d(c),e;if(h===o)return d(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var M=!1,b=c.child;b;){if(b===a){M=!0,a=c,o=h;break}if(b===o){M=!0,o=c,a=h;break}b=b.sibling}if(!M){for(b=h.child;b;){if(b===a){M=!0,a=h,o=c;break}if(b===o){M=!0,o=h,a=c;break}b=b.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case T:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case N:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:xt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return xt(e(n))}catch{}}return null}var pt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Et=[],L=-1;function $(e){return{current:e}}function yt(e){0>L||(e.current=Et[L],Et[L]=null,L--)}function Mt(e,n){L++,Et[L]=e.current,e.current=n}var Q=$(null),mt=$(null),St=$(null),Rt=$(null);function Lt(e,n){switch(Mt(St,n),Mt(mt,e),Mt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Qg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Qg(n),e=Jg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(Q),Mt(Q,e)}function oe(){yt(Q),yt(mt),yt(St)}function Kt(e){e.memoizedState!==null&&Mt(Rt,e);var n=Q.current,a=Jg(n,e.type);n!==a&&(Mt(mt,e),Mt(Q,a))}function Ge(e){mt.current===e&&(yt(Q),yt(mt)),Rt.current===e&&(yt(Rt),Do._currentValue=q)}var Be=Object.prototype.hasOwnProperty,fe=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,On=s.unstable_shouldYield,ve=s.unstable_requestPaint,ie=s.unstable_now,Wt=s.unstable_getCurrentPriorityLevel,Ue=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,U=s.unstable_NormalPriority,A=s.unstable_LowPriority,tt=s.unstable_IdlePriority,gt=s.log,Tt=s.unstable_setDisableYieldValue,ht=null,Pt=null;function wt(e){if(typeof gt=="function"&&Tt(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(ht,e)}catch{}}var Gt=Math.clz32?Math.clz32:Ft,$t=Math.log,At=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-($t(e)/At|0)|0}var jt=256,Qt=4194304;function It(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?c=It(o):(M&=b,M!==0?c=It(M):a||(a=b&~e,a!==0&&(c=It(a))))):(b=o&~h,b!==0?c=It(b):M!==0?c=It(M):a||(a=o&~e,a!==0&&(c=It(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function Nt(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function lt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _t(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zt(e,n,a,o,c,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=M&~a;0<a;){var ft=31-Gt(a),vt=1<<ft;b[ft]=0,P[ft]=-1;var et=J[ft];if(et!==null)for(J[ft]=null,ft=0;ft<et.length;ft++){var it=et[ft];it!==null&&(it.lane&=-536870913)}a&=~vt}o!==0&&Ot(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Ot(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Gt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ae(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Gt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ve(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function en(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:__(e.type))}function Wn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var mn=Math.random().toString(36).slice(2),ln="__reactFiber$"+mn,Sn="__reactProps$"+mn,Pn="__reactContainer$"+mn,$a="__reactEvents$"+mn,nl="__reactListeners$"+mn,il="__reactHandles$"+mn,tr="__reactResources$"+mn,ma="__reactMarker$"+mn;function ga(e){delete e[ln],delete e[Sn],delete e[$a],delete e[nl],delete e[il]}function Li(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=n_(e);e!==null;){if(a=e[ln])return a;e=n_(e)}return n}e=a,a=e.parentNode}return null}function Ni(e){if(e=e[ln]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function er(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function _a(e){var n=e[tr];return n||(n=e[tr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[ma]=!0}var al=new Set,rl={};function Oi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(rl[e]=n,e=0;e<n.length;e++)al.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function j(e){return Be.call(rt,e)?!0:Be.call(at,e)?!1:Y.test(e)?rt[e]=!0:(at[e]=!0,!1)}function bt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Dt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bt,te;function Yt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+te}var Xt=!1;function pe(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(it){var et=it}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(it){et=it}e.call(vt.prototype)}}else{try{throw Error()}catch(it){et=it}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],b=h[1];if(M&&b){var P=M.split(`
`),J=b.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===J.length)for(o=P.length-1,c=J.length-1;1<=o&&0<=c&&P[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==J[c]){var ft=`
`+P[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Yt(a):""}function Te(e){switch(e.tag){case 26:case 27:case 5:return Yt(e.type);case 16:return Yt("Lazy");case 13:return Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Yt("Activity");default:return""}}function Ye(e){try{var n="";do n+=Te(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(e){var n=ye(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=qt(e))}function Me(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var va=/[\n"\\]/g;function ke(e){return e.replace(va,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(e,n,a,o,c,h,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,M,xe(n)):a!=null?Rn(e,M,xe(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+xe(b):e.removeAttribute("name")}function Fe(e,n,a,o,c,h,M,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Rn(e,n,a){n==="number"&&An(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function un(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(pt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Jd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Qd(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Qd(e,h,n[h])}function sc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return P0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var oc=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,Ir=null;function $d(e){var n=Ni(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Sn]||null;if(!c)throw Error(r(90));Pi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Me(o)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&un(e,!!a.multiple,n,!1)}}}var uc=!1;function tp(e,n,a){if(uc)return e(n,a);uc=!0;try{var o=e(n);return o}finally{if(uc=!1,(Pr!==null||Ir!==null)&&(Wl(),Pr&&(n=Pr,e=Ir,Ir=Pr=null,$d(n),e)))for(n=0;n<e.length;n++)$d(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(zi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){cc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{cc=!1}var xa=null,fc=null,ol=null;function ep(){if(ol)return ol;var e,n=fc,a=n.length,o,c="value"in xa?xa.value:xa.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===c[h-o];o++);return ol=c.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function np(){return!1}function In(e){function n(a,o,c,h,M){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ul:np,this.isPropagationStopped=np,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=In(nr),Xs=g({},nr,{view:0,detail:0}),I0=In(Xs),hc,dc,Ws,fl=g({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(hc=e.screenX-Ws.screenX,dc=e.screenY-Ws.screenY):dc=hc=0,Ws=e),hc)},movementY:function(e){return"movementY"in e?e.movementY:dc}}),ip=In(fl),z0=g({},fl,{dataTransfer:0}),B0=In(z0),F0=g({},Xs,{relatedTarget:0}),pc=In(F0),H0=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=In(H0),V0=g({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=In(V0),X0=g({},nr,{data:0}),ap=In(X0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=q0[e])?!!n[e]:!1}function mc(){return j0}var Z0=g({},Xs,{key:function(e){if(e.key){var n=W0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=In(Z0),Q0=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=In(Q0),J0=g({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),$0=In(J0),tx=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=In(tx),nx=g({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=In(nx),ax=g({},nr,{newState:0,oldState:0}),rx=In(ax),sx=[9,13,27,32],gc=zi&&"CompositionEvent"in window,Ys=null;zi&&"documentMode"in document&&(Ys=document.documentMode);var ox=zi&&"TextEvent"in window&&!Ys,sp=zi&&(!gc||Ys&&8<Ys&&11>=Ys),op=" ",lp=!1;function up(e,n){switch(e){case"keyup":return sx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function lx(e,n){switch(e){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return e=n.data,e===op&&lp?null:e;default:return null}}function ux(e,n){if(zr)return e==="compositionend"||!gc&&up(e,n)?(e=ep(),ol=fc=xa=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cx[e.type]:n==="textarea"}function hp(e,n,a,o){Pr?Ir?Ir.push(o):Ir=[o]:Pr=o,n=Ql(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var qs=null,js=null;function fx(e){Yg(e,0)}function hl(e){var n=er(e);if(Me(n))return e}function dp(e,n){if(e==="change")return n}var pp=!1;if(zi){var _c;if(zi){var vc="oninput"in document;if(!vc){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),vc=typeof mp.oninput=="function"}_c=vc}else _c=!1;pp=_c&&(!document.documentMode||9<document.documentMode)}function gp(){qs&&(qs.detachEvent("onpropertychange",_p),js=qs=null)}function _p(e){if(e.propertyName==="value"&&hl(js)){var n=[];hp(n,js,e,lc(e)),tp(fx,n)}}function hx(e,n,a){e==="focusin"?(gp(),qs=n,js=a,qs.attachEvent("onpropertychange",_p)):e==="focusout"&&gp()}function dx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(js)}function px(e,n){if(e==="click")return hl(n)}function mx(e,n){if(e==="input"||e==="change")return hl(n)}function gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:gx;function Zs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Be.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,n){var a=vp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=An(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=An(e.document)}return n}function xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _x=zi&&"documentMode"in document&&11>=document.documentMode,Br=null,yc=null,Ks=null,Sc=!1;function Mp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||Br==null||Br!==An(o)||(o=Br,"selectionStart"in o&&xc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Ql(yc,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Br)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Mc={},Ep={};zi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function ar(e){if(Mc[e])return Mc[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return Mc[e]=n[a];return e}var Tp=ar("animationend"),bp=ar("animationiteration"),Ap=ar("animationstart"),vx=ar("transitionrun"),xx=ar("transitionstart"),yx=ar("transitioncancel"),Rp=ar("transitionend"),wp=new Map,Ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ec.push("scrollEnd");function di(e,n){wp.set(e,n),Oi(n,[e])}var Cp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Cp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ye(n)},Cp.set(e,n),n)}return{value:e,source:n,stack:Ye(n)}}var ii=[],Hr=0,Tc=0;function dl(){for(var e=Hr,n=Tc=Hr=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var h=ii[n];if(ii[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}h!==0&&Dp(a,c,h)}}function pl(e,n,a,o){ii[Hr++]=e,ii[Hr++]=n,ii[Hr++]=a,ii[Hr++]=o,Tc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bc(e,n,a,o){return pl(e,n,a,o),ml(e)}function Gr(e,n){return pl(e,null,null,n),ml(e)}function Dp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Gt(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function ml(e){if(50<Mo)throw Mo=0,Lf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function Sx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new Sx(e,n,a,o)}function Ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Up(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function gl(e,n,a,o,c,h){var M=0;if(o=e,typeof e=="function")Ac(e)&&(M=1);else if(typeof e=="string")M=Ey(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=qn(31,a,n,c),e.elementType=D,e.lanes=h,e;case E:return rr(a.children,c,h,n);case T:M=8,c|=24;break;case y:return e=qn(12,a,n,c|2),e.elementType=y,e.lanes=h,e;case B:return e=qn(13,a,n,c),e.elementType=B,e.lanes=h,e;case G:return e=qn(19,a,n,c),e.elementType=G,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:M=10;break t;case O:M=9;break t;case C:M=11;break t;case z:M=14;break t;case X:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(M,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function rr(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function Rc(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function wc(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var kr=[],Xr=0,_l=null,vl=0,ai=[],ri=0,sr=null,Fi=1,Hi="";function or(e,n){kr[Xr++]=vl,kr[Xr++]=_l,_l=e,vl=n}function Lp(e,n,a){ai[ri++]=Fi,ai[ri++]=Hi,ai[ri++]=sr,sr=e;var o=Fi;e=Hi;var c=32-Gt(o)-1;o&=~(1<<c),a+=1;var h=32-Gt(n)+c;if(30<h){var M=c-c%5;h=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Fi=1<<32-Gt(n)+c|a<<c|o,Hi=h+e}else Fi=1<<h|a<<c|o,Hi=e}function Cc(e){e.return!==null&&(or(e,1),Lp(e,1,0))}function Dc(e){for(;e===_l;)_l=kr[--Xr],kr[Xr]=null,vl=kr[--Xr],kr[Xr]=null;for(;e===sr;)sr=ai[--ri],ai[ri]=null,Hi=ai[--ri],ai[ri]=null,Fi=ai[--ri],ai[ri]=null}var Ln=null,Ze=null,Re=!1,lr=null,Ti=!1,Uc=Error(r(519));function ur(e){var n=Error(r(418,""));throw $s(ni(n,e)),Uc}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[Sn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)ge(To[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Fe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),je(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,o.value,o.defaultValue,o.children),je(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Kg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||ur(e)}function Op(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Ln=Ln.return}}function Qs(e){if(e!==Ln)return!1;if(!Re)return Op(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ur(e),Op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Pa(e.type)?(e=Jf,Jf=null,Ze=e):Ze=n):Ze=Ln?mi(e.stateNode.nextSibling):null;return!0}function Js(){Ze=Ln=null,Re=!1}function Pp(){var e=lr;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),lr=null),e}function $s(e){lr===null?lr=[e]:lr.push(e)}var Lc=$(null),cr=null,Gi=null;function ya(e,n,a){Mt(Lc,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=Lc.current,yt(Lc)}function Nc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Oc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var M=c.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),Nc(h.return,a,e),o||(M=null);break t}h=b.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Nc(M,a,e),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===e){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function to(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var b=c.type;Yn(c.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(c===Rt.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}c=c.return}e!==null&&Oc(n,e,a,o),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){cr=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Ip(cr,e)}function yl(e,n){return cr===null&&fr(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var Mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ex=s.unstable_scheduleCallback,Tx=s.unstable_NormalPriority,cn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pc(){return{controller:new Mx,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&Ex(Tx,function(){e.controller.abort()})}var no=null,Ic=0,Wr=0,Yr=null;function bx(e,n){if(no===null){var a=no=[];Ic=0,Wr=Ff(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ic++,n.then(zp,zp),n}function zp(){if(--Ic===0&&no!==null){Yr!==null&&(Yr.status="fulfilled");var e=no;no=null,Wr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ax(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Bp=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&bx(e,n),Bp!==null&&Bp(e,n)};var hr=$(null);function zc(){var e=hr.current;return e!==null?e:Xe.pooledCache}function Sl(e,n){n===null?Mt(hr,hr.current):Mt(hr,n.pool)}function Fp(){var e=zc();return e===null?null:{parent:cn._currentValue,pool:e}}var io=Error(r(460)),Hp=Error(r(474)),Ml=Error(r(542)),Bc={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function El(){}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e;default:if(typeof n.status=="string")n.then(El,El);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e}throw ao=n,io}}var ao=null;function kp(){if(ao===null)throw Error(r(459));var e=ao;return ao=null,e}function Xp(e){if(e===io||e===Ml)throw Error(r(483))}var Sa=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(e),Dp(e,null,a),n}return pl(e,o,n,a),ml(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}function Gc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Vc=!1;function so(){if(Vc){var e=Yr;if(e!==null)throw e}}function oo(e,n,a,o){Vc=!1;var c=e.updateQueue;Sa=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,J=P.next;P.next=null,M===null?h=J:M.next=J,M=P;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==M&&(b===null?ft.firstBaseUpdate=J:b.next=J,ft.lastBaseUpdate=P))}if(h!==null){var vt=c.baseState;M=0,ft=J=P=null,b=h;do{var et=b.lane&-536870913,it=et!==b.lane;if(it?(Se&et)===et:(o&et)===et){et!==0&&et===Wr&&(Vc=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,Zt=b;et=n;var Pe=a;switch(Zt.tag){case 1:if(ee=Zt.payload,typeof ee=="function"){vt=ee.call(Pe,vt,et);break t}vt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Zt.payload,et=typeof ee=="function"?ee.call(Pe,vt,et):ee,et==null)break t;vt=g({},vt,et);break t;case 2:Sa=!0}}et=b.callback,et!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[et]:it.push(et))}else it={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(J=ft=it,P=vt):ft=ft.next=it,M|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ft===null&&(P=vt),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ft,h===null&&(c.shared.lanes=0),Ua|=M,e.lanes=M,e.memoizedState=vt}}function Wp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Yp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wp(a[e],n)}var qr=$(null),Tl=$(0);function qp(e,n){e=Zi,Mt(Tl,e),Mt(qr,n),Zi=e|n.baseLanes}function kc(){Mt(Tl,Zi),Mt(qr,qr.current)}function Xc(){Zi=Tl.current,yt(qr),yt(Tl)}var Ta=0,ce=null,Ne=null,an=null,bl=!1,jr=!1,dr=!1,Al=0,lo=0,Zr=null,Rx=0;function Qe(){throw Error(r(321))}function Wc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Yc(e,n,a,o,c,h){return Ta=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Dm:Um,dr=!1,h=a(o,c),dr=!1,jr&&(h=Zp(n,a,o,c)),jp(e),h}function jp(e){I.H=Ll;var n=Ne!==null&&Ne.next!==null;if(Ta=0,an=Ne=ce=null,bl=!1,lo=0,Zr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&xl(e)&&(_n=!0))}function Zp(e,n,a,o){ce=e;var c=0;do{if(jr&&(Zr=null),lo=0,jr=!1,25<=c)throw Error(r(301));if(c+=1,an=Ne=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=Ox,h=n(a,o)}while(jr);return h}function wx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ce.flags|=1024),n}function qc(){var e=Al!==0;return Al=0,e}function jc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zc(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Ta=0,an=Ne=ce=null,jr=!1,lo=Al=0,Zr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ce.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ne===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=an===null?ce.memoizedState:an.next;if(n!==null)an=n,Ne=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?ce.memoizedState=an=e:an=an.next=e}return an}function Kc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=lo;return lo+=1,Zr===null&&(Zr=[]),e=Vp(Zr,e,n),n=ce,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Dm:Um),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===N)return wn(e)}throw Error(r(438,String(e)))}function Qc(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Kc(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=rn();return Jc(n,Ne,e)}function Jc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var b=M=null,P=null,J=n,ft=!1;do{var vt=J.lane&-536870913;if(vt!==J.lane?(Se&vt)===vt:(Ta&vt)===vt){var et=J.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),vt===Wr&&(ft=!0);else if((Ta&et)===et){J=J.next,et===Wr&&(ft=!0);continue}else vt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=vt,M=h):P=P.next=vt,ce.lanes|=et,Ua|=et;vt=J.action,dr&&a(h,vt),h=J.hasEagerState?J.eagerState:a(h,vt)}else et={lane:vt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(b=P=et,M=h):P=P.next=et,ce.lanes|=vt,Ua|=vt;J=J.next}while(J!==null&&J!==n);if(P===null?M=h:P.next=b,!Yn(h,e.memoizedState)&&(_n=!0,ft&&(a=Yr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=P,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $c(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do h=e(h,M.action),M=M.next;while(M!==c);Yn(h,n.memoizedState)||(_n=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Kp(e,n,a){var o=ce,c=rn(),h=Re;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Yn((Ne||c).memoizedState,a);M&&(c.memoizedState=a,_n=!0),c=c.queue;var b=$p.bind(null,o,c,e);if(co(2048,8,b,[e]),c.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Cl(),Jp.bind(null,o,c,a,n),null),Xe===null)throw Error(r(349));h||(Ta&124)!==0||Qp(o,n,a)}return a}function Qp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Kc(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Jp(e,n,a,o){n.value=a,n.getSnapshot=o,tm(n)&&em(e)}function $p(e,n,a){return a(function(){tm(n)&&em(e)})}function tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function em(e){var n=Gr(e,2);n!==null&&Jn(n,e,2)}function tf(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),dr){wt(!0);try{a()}finally{wt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function nm(e,n,a,o){return e.baseState=a,Jc(e,Ne,typeof o=="function"?o:ki)}function Cx(e,n,a,o,c){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function im(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=I.T,M={};I.T=M;try{var b=a(c,o),P=I.S;P!==null&&P(M,b),am(e,n,b)}catch(J){ef(e,n,J)}finally{I.T=h}}else try{h=a(c,o),am(e,n,h)}catch(J){ef(e,n,J)}}function am(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){rm(e,n,o)},function(o){return ef(e,n,o)}):rm(e,n,a)}function rm(e,n,a){n.status="fulfilled",n.value=a,sm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,im(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}e.action=null}function sm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function om(e,n){return n}function lm(e,n){if(Re){var a=Xe.formState;if(a!==null){t:{var o=ce;if(Re){if(Ze){e:{for(var c=Ze,h=Ti;c.nodeType!==8;){if(!h){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Ze=mi(c.nextSibling),o=c.data==="F!";break t}}ur(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Rm.bind(null,ce,o),o.dispatch=a,o=tf(!1),h=of.bind(null,ce,!1,o.queue),o=zn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Cx.bind(null,ce,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function um(e){var n=rn();return cm(n,Ne,e)}function cm(e,n,a){if(n=Jc(e,n,om)[0],e=wl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(M){throw M===io?Ml:M}else o=n;n=rn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Kr(9,Cl(),Dx.bind(null,c,a),null)),[o,h,e]}function Dx(e,n){e.action=n}function fm(e){var n=rn(),a=Ne;if(a!==null)return cm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Kr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Kc(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function hm(){return rn().memoizedState}function Dl(e,n,a,o){var c=zn();o=o===void 0?null:o,ce.flags|=e,c.memoizedState=Kr(1|n,Cl(),a,o)}function co(e,n,a,o){var c=rn();o=o===void 0?null:o;var h=c.memoizedState.inst;Ne!==null&&o!==null&&Wc(o,Ne.memoizedState.deps)?c.memoizedState=Kr(n,h,a,o):(ce.flags|=e,c.memoizedState=Kr(1|n,h,a,o))}function dm(e,n){Dl(8390656,8,e,n)}function pm(e,n){co(2048,8,e,n)}function mm(e,n){return co(4,2,e,n)}function gm(e,n){return co(4,4,e,n)}function _m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vm(e,n,a){a=a!=null?a.concat([e]):null,co(4,4,_m.bind(null,n,e),a)}function nf(){}function xm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ym(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wc(n,o[1]))return o[0];if(o=e(),dr){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(Ta&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Eg(),ce.lanes|=e,Ua|=e,a)}function Sm(e,n,a,o){return Yn(a,n)?a:qr.current!==null?(e=af(e,a,o),Yn(e,n)||(_n=!0),e):(Ta&42)===0?(_n=!0,e.memoizedState=a):(e=Eg(),ce.lanes|=e,Ua|=e,n)}function Mm(e,n,a,o,c){var h=Z.p;Z.p=h!==0&&8>h?h:8;var M=I.T,b={};I.T=b,of(e,!1,n,a);try{var P=c(),J=I.S;if(J!==null&&J(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=Ax(P,o);fo(e,n,ft,Qn(e))}else fo(e,n,o,Qn(e))}catch(vt){fo(e,n,{then:function(){},status:"rejected",reason:vt},Qn())}finally{Z.p=h,I.T=M}}function Ux(){}function rf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Em(e).queue;Mm(e,c,n,q,a===null?Ux:function(){return Tm(e),a(o)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Tm(e){var n=Em(e).next.queue;fo(e,n,{},Qn())}function sf(){return wn(Do)}function bm(){return rn().memoizedState}function Am(){return rn().memoizedState}function Lx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Ma(a);var o=Ea(n,e,a);o!==null&&(Jn(o,n,a),ro(o,n,a)),n={cache:Pc()},e.payload=n;return}n=n.return}}function Nx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?wm(n,a):(a=bc(e,n,a,o),a!==null&&(Jn(a,e,o),Cm(a,n,o)))}function Rm(e,n,a){var o=Qn();fo(e,n,a,o)}function fo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))wm(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,b=h(M,a);if(c.hasEagerState=!0,c.eagerState=b,Yn(b,M))return pl(e,n,c,0),Xe===null&&dl(),!1}catch{}finally{}if(a=bc(e,n,c,o),a!==null)return Jn(a,e,o),Cm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:Ff(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=bc(e,a,o,2),n!==null&&Jn(n,e,2)}function Ul(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function wm(e,n){jr=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Cm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}var Ll={readContext:wn,use:Rl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Dm={readContext:wn,use:Rl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:dm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Dl(4194308,4,_m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Dl(4194308,4,e,n)},useInsertionEffect:function(e,n){Dl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(dr){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var c=a(n);if(dr){wt(!0);try{a(n)}finally{wt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Nx.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Rm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=zn();return af(a,e,n)},useTransition:function(){var e=tf(!1);return e=Mm.bind(null,ce,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,c=zn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(Se&124)!==0||Qp(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,dm($p.bind(null,o,h,e),[e]),o.flags|=2048,Kr(9,Cl(),Jp.bind(null,o,h,a,n),null),a},useId:function(){var e=zn(),n=Xe.identifierPrefix;if(Re){var a=Hi,o=Fi;a=(o&~(1<<32-Gt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Rx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:lm,useActionState:lm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qc,useCacheRefresh:function(){return zn().memoizedState=Lx.bind(null,ce)}},Um={readContext:wn,use:Rl,useCallback:xm,useContext:wn,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:wl,useRef:hm,useState:function(){return wl(ki)},useDebugValue:nf,useDeferredValue:function(e,n){var a=rn();return Sm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=wl(ki)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Kp,useId:bm,useHostTransitionStatus:sf,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=rn();return nm(a,Ne,e,n)},useMemoCache:Qc,useCacheRefresh:Am},Ox={readContext:wn,use:Rl,useCallback:xm,useContext:wn,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:ym,useReducer:$c,useRef:hm,useState:function(){return $c(ki)},useDebugValue:nf,useDeferredValue:function(e,n){var a=rn();return Ne===null?af(a,e,n):Sm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=$c(ki)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Kp,useId:bm,useHostTransitionStatus:sf,useFormState:fm,useActionState:fm,useOptimistic:function(e,n){var a=rn();return Ne!==null?nm(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:Am},Qr=null,ho=0;function Nl(e){var n=ho;return ho+=1,Qr===null&&(Qr=[]),Vp(Qr,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lm(e){var n=e._init;return n(e._payload)}function Nm(e){function n(W,H){if(e){var K=W.deletions;K===null?(W.deletions=[H],W.flags|=16):K.push(H)}}function a(W,H){if(!e)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function o(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function c(W,H){return W=Bi(W,H),W.index=0,W.sibling=null,W}function h(W,H,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<H?(W.flags|=67108866,H):K):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function M(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function b(W,H,K,dt){return H===null||H.tag!==6?(H=Rc(K,W.mode,dt),H.return=W,H):(H=c(H,K),H.return=W,H)}function P(W,H,K,dt){var Ht=K.type;return Ht===E?ft(W,H,K.props.children,dt,K.key):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&Lm(Ht)===H.type)?(H=c(H,K.props),po(H,K),H.return=W,H):(H=gl(K.type,K.key,K.props,null,W.mode,dt),po(H,K),H.return=W,H)}function J(W,H,K,dt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=wc(K,W.mode,dt),H.return=W,H):(H=c(H,K.children||[]),H.return=W,H)}function ft(W,H,K,dt,Ht){return H===null||H.tag!==7?(H=rr(K,W.mode,dt,Ht),H.return=W,H):(H=c(H,K),H.return=W,H)}function vt(W,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Rc(""+H,W.mode,K),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case v:return K=gl(H.type,H.key,H.props,null,W.mode,K),po(K,H),K.return=W,K;case S:return H=wc(H,W.mode,K),H.return=W,H;case X:var dt=H._init;return H=dt(H._payload),vt(W,H,K)}if(pt(H)||ut(H))return H=rr(H,W.mode,K,null),H.return=W,H;if(typeof H.then=="function")return vt(W,Nl(H),K);if(H.$$typeof===N)return vt(W,yl(W,H),K);Ol(W,H)}return null}function et(W,H,K,dt){var Ht=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:b(W,H,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return K.key===Ht?P(W,H,K,dt):null;case S:return K.key===Ht?J(W,H,K,dt):null;case X:return Ht=K._init,K=Ht(K._payload),et(W,H,K,dt)}if(pt(K)||ut(K))return Ht!==null?null:ft(W,H,K,dt,null);if(typeof K.then=="function")return et(W,H,Nl(K),dt);if(K.$$typeof===N)return et(W,H,yl(W,K),dt);Ol(W,K)}return null}function it(W,H,K,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(K)||null,b(H,W,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case v:return W=W.get(dt.key===null?K:dt.key)||null,P(H,W,dt,Ht);case S:return W=W.get(dt.key===null?K:dt.key)||null,J(H,W,dt,Ht);case X:var he=dt._init;return dt=he(dt._payload),it(W,H,K,dt,Ht)}if(pt(dt)||ut(dt))return W=W.get(K)||null,ft(H,W,dt,Ht,null);if(typeof dt.then=="function")return it(W,H,K,Nl(dt),Ht);if(dt.$$typeof===N)return it(W,H,K,yl(H,dt),Ht);Ol(H,dt)}return null}function ee(W,H,K,dt){for(var Ht=null,he=null,kt=H,Jt=H=0,xn=null;kt!==null&&Jt<K.length;Jt++){kt.index>Jt?(xn=kt,kt=null):xn=kt.sibling;var be=et(W,kt,K[Jt],dt);if(be===null){kt===null&&(kt=xn);break}e&&kt&&be.alternate===null&&n(W,kt),H=h(be,H,Jt),he===null?Ht=be:he.sibling=be,he=be,kt=xn}if(Jt===K.length)return a(W,kt),Re&&or(W,Jt),Ht;if(kt===null){for(;Jt<K.length;Jt++)kt=vt(W,K[Jt],dt),kt!==null&&(H=h(kt,H,Jt),he===null?Ht=kt:he.sibling=kt,he=kt);return Re&&or(W,Jt),Ht}for(kt=o(kt);Jt<K.length;Jt++)xn=it(kt,W,Jt,K[Jt],dt),xn!==null&&(e&&xn.alternate!==null&&kt.delete(xn.key===null?Jt:xn.key),H=h(xn,H,Jt),he===null?Ht=xn:he.sibling=xn,he=xn);return e&&kt.forEach(function(Ha){return n(W,Ha)}),Re&&or(W,Jt),Ht}function Zt(W,H,K,dt){if(K==null)throw Error(r(151));for(var Ht=null,he=null,kt=H,Jt=H=0,xn=null,be=K.next();kt!==null&&!be.done;Jt++,be=K.next()){kt.index>Jt?(xn=kt,kt=null):xn=kt.sibling;var Ha=et(W,kt,be.value,dt);if(Ha===null){kt===null&&(kt=xn);break}e&&kt&&Ha.alternate===null&&n(W,kt),H=h(Ha,H,Jt),he===null?Ht=Ha:he.sibling=Ha,he=Ha,kt=xn}if(be.done)return a(W,kt),Re&&or(W,Jt),Ht;if(kt===null){for(;!be.done;Jt++,be=K.next())be=vt(W,be.value,dt),be!==null&&(H=h(be,H,Jt),he===null?Ht=be:he.sibling=be,he=be);return Re&&or(W,Jt),Ht}for(kt=o(kt);!be.done;Jt++,be=K.next())be=it(kt,W,Jt,be.value,dt),be!==null&&(e&&be.alternate!==null&&kt.delete(be.key===null?Jt:be.key),H=h(be,H,Jt),he===null?Ht=be:he.sibling=be,he=be);return e&&kt.forEach(function(Py){return n(W,Py)}),Re&&or(W,Jt),Ht}function Pe(W,H,K,dt){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case v:t:{for(var Ht=K.key;H!==null;){if(H.key===Ht){if(Ht=K.type,Ht===E){if(H.tag===7){a(W,H.sibling),dt=c(H,K.props.children),dt.return=W,W=dt;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&Lm(Ht)===H.type){a(W,H.sibling),dt=c(H,K.props),po(dt,K),dt.return=W,W=dt;break t}a(W,H);break}else n(W,H);H=H.sibling}K.type===E?(dt=rr(K.props.children,W.mode,dt,K.key),dt.return=W,W=dt):(dt=gl(K.type,K.key,K.props,null,W.mode,dt),po(dt,K),dt.return=W,W=dt)}return M(W);case S:t:{for(Ht=K.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(W,H.sibling),dt=c(H,K.children||[]),dt.return=W,W=dt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}dt=wc(K,W.mode,dt),dt.return=W,W=dt}return M(W);case X:return Ht=K._init,K=Ht(K._payload),Pe(W,H,K,dt)}if(pt(K))return ee(W,H,K,dt);if(ut(K)){if(Ht=ut(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Zt(W,H,K,dt)}if(typeof K.then=="function")return Pe(W,H,Nl(K),dt);if(K.$$typeof===N)return Pe(W,H,yl(W,K),dt);Ol(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(W,H.sibling),dt=c(H,K),dt.return=W,W=dt):(a(W,H),dt=Rc(K,W.mode,dt),dt.return=W,W=dt),M(W)):a(W,H)}return function(W,H,K,dt){try{ho=0;var Ht=Pe(W,H,K,dt);return Qr=null,Ht}catch(kt){if(kt===io||kt===Ml)throw kt;var he=qn(29,kt,null,W.mode);return he.lanes=dt,he.return=W,he}finally{}}}var Jr=Nm(!0),Om=Nm(!1),si=$(null),bi=null;function ba(e){var n=e.alternate;Mt(fn,fn.current&1),Mt(si,e),bi===null&&(n===null||qr.current!==null||n.memoizedState!==null)&&(bi=e)}function Pm(e){if(e.tag===22){if(Mt(fn,fn.current),Mt(si,e),bi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(bi=e)}}else Aa()}function Aa(){Mt(fn,fn.current),Mt(si,si.current)}function Xi(e){yt(si),bi===e&&(bi=null),yt(fn)}var fn=$(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Ma(o);c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,o),n!==null&&(Jn(n,e,o),ro(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Ma(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,o),n!==null&&(Jn(n,e,o),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=Ma(a);o.tag=2,n!=null&&(o.callback=n),n=Ea(e,o,a),n!==null&&(Jn(n,e,a),ro(n,e,a))}};function Im(e,n,a,o,c,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(c,h):!0}function zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function pr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Bm(e){Il(e)}function Fm(e){console.error(e)}function Hm(e){Il(e)}function zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function cf(e,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(e,n)},a}function Vm(e){return e=Ma(e),e.tag=3,e}function km(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Gm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Gm(n,a,o),typeof c!="function"&&(La===null?La=new Set([this]):La.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Px(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&to(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 13:return bi===null?Of():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Bc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(e,o,c)),!1;case 22:return a.flags|=65536,o===Bc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(e,o,c)),!1}throw Error(r(435,a.tag))}return If(e,o,c),Of(),!1}if(Re)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Uc&&(e=Error(r(422),{cause:o}),$s(ni(e,a)))):(o!==Uc&&(n=Error(r(423),{cause:o}),$s(ni(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ni(o,a),c=cf(e.stateNode,o,c),Gc(e,c),Ke!==4&&(Ke=2)),!1;var h=Error(r(520),{cause:o});if(h=ni(h,a),So===null?So=[h]:So.push(h),Ke!==4&&(Ke=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=cf(a.stateNode,o,e),Gc(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(La===null||!La.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Vm(c),km(c,e,a,o),Gc(a,c),!1}a=a.return}while(a!==null);return!1}var Xm=Error(r(461)),_n=!1;function En(e,n,a,o){n.child=e===null?Om(n,null,a,o):Jr(n,e.child,a,o)}function Wm(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return fr(n),o=Yc(e,n,a,M,h,c),b=qc(),e!==null&&!_n?(jc(e,n,c),Wi(e,n,c)):(Re&&b&&Cc(n),n.flags|=1,En(e,n,o,c),n.child)}function Ym(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!Ac(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,qm(e,n,h,o,c)):(e=gl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!vf(e,c)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(M,o)&&e.ref===n.ref)return Wi(e,n,c)}return n.flags|=1,e=Bi(h,o),e.ref=n.ref,e.return=n,n.child=e}function qm(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(Zs(h,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=h,vf(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Wi(e,n,c)}return ff(e,n,a,o,c)}function jm(e,n,a){var o=n.pendingProps,c=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(c=n.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Zm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(n,h!==null?h.cachePool:null),h!==null?qp(n,h):kc(),Pm(n);else return n.lanes=n.childLanes=536870912,Zm(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Sl(n,h.cachePool),qp(n,h),Aa(),n.memoizedState=null):(e!==null&&Sl(n,null),kc(),Aa());return En(e,n,c,a),n.child}function Zm(e,n,a,o){var c=zc();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Sl(n,null),kc(),Pm(n),e!==null&&to(e,n,o,!0),null}function Bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,o,c){return fr(n),a=Yc(e,n,a,o,void 0,c),o=qc(),e!==null&&!_n?(jc(e,n,c),Wi(e,n,c)):(Re&&o&&Cc(n),n.flags|=1,En(e,n,a,c),n.child)}function Km(e,n,a,o,c,h){return fr(n),n.updateQueue=null,a=Zp(n,o,a,c),jp(e),o=qc(),e!==null&&!_n?(jc(e,n,h),Wi(e,n,h)):(Re&&o&&Cc(n),n.flags|=1,En(e,n,a,h),n.child)}function Qm(e,n,a,o,c){if(fr(n),n.stateNode===null){var h=Vr,M=a.contextType;typeof M=="object"&&M!==null&&(h=wn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=uf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Fc(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?wn(M):Vr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(lf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&uf.enqueueReplaceState(h,h.state,null),oo(n,o,h,c),so(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,P=pr(a,b);h.props=P;var J=h.context,ft=a.contextType;M=Vr,typeof ft=="object"&&ft!==null&&(M=wn(ft));var vt=a.getDerivedStateFromProps;ft=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||J!==M)&&zm(n,h,o,M),Sa=!1;var et=n.memoizedState;h.state=et,oo(n,o,h,c),so(),J=n.memoizedState,b||et!==J||Sa?(typeof vt=="function"&&(lf(n,a,vt,o),J=n.memoizedState),(P=Sa||Im(n,a,P,o,et,J,M))?(ft||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),h.props=o,h.state=J,h.context=M,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Hc(e,n),M=n.memoizedProps,ft=pr(a,M),h.props=ft,vt=n.pendingProps,et=h.context,J=a.contextType,P=Vr,typeof J=="object"&&J!==null&&(P=wn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==vt||et!==P)&&zm(n,h,o,P),Sa=!1,et=n.memoizedState,h.state=et,oo(n,o,h,c),so();var it=n.memoizedState;M!==vt||et!==it||Sa||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof b=="function"&&(lf(n,a,b,o),it=n.memoizedState),(ft=Sa||Im(n,a,ft,o,et,it,P)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?(J||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,it,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,it,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),h.props=o,h.state=it,h.context=P,o=ft):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Bl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Jr(n,e.child,null,c),n.child=Jr(n,null,a,c)):En(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Wi(e,n,c),e}function Jm(e,n,a,o){return Js(),n.flags|=256,En(e,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:Fp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function $m(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(c?ba(n):Aa(),Re){var b=Ze,P;if(P=b){t:{for(P=b,b=Ti;P.nodeType!==8;){if(!b){b=null;break t}if(P=mi(P.nextSibling),P===null){b=null;break t}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:sr!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},P=qn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Ln=n,Ze=null,P=!0):P=!1}P||ur(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Qf(b)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return b=o.children,o=o.fallback,c?(Aa(),c=n.mode,b=Fl({mode:"hidden",children:b},c),o=rr(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=df(a),c.childLanes=pf(e,M,a),n.memoizedState=hf,o):(ba(n),mf(n,b))}if(P=e.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(h)n.flags&256?(ba(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),c=o.fallback,b=n.mode,o=Fl({mode:"visible",children:o.children},b),c=rr(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Jr(n,e.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(e,M,a),n.memoizedState=hf,n=c);else if(ba(n),Qf(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(r(419)),o.stack="",o.digest=M,$s({value:o,source:null,stack:null}),n=gf(e,n,a)}else if(_n||to(e,n,a,!1),M=(a&e.childLanes)!==0,_n||M){if(M=Xe,M!==null&&(o=a&-a,o=(o&42)!==0?1:Ve(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Gr(e,o),Jn(M,e,o),Xm;b.data==="$?"||Of(),n=gf(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Ze=mi(b.nextSibling),Ln=n,Re=!0,lr=null,Ti=!1,e!==null&&(ai[ri++]=Fi,ai[ri++]=Hi,ai[ri++]=sr,Fi=e.id,Hi=e.overflow,sr=n),n=mf(n,o.children),n.flags|=4096);return n}return c?(Aa(),c=o.fallback,b=n.mode,P=e.child,J=P.sibling,o=Bi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=Bi(J,c):(c=rr(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=df(a):(P=b.cachePool,P!==null?(J=cn._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=Fp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=pf(e,M,a),n.memoizedState=hf,o):(ba(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,n,a){return Jr(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nc(e.return,n,a)}function _f(e,n,a,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=c)}function eg(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(En(e,n,o.children,a),o=fn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tg(e,a,n);else if(e.tag===19)tg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(fn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Pl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),_f(n,!1,c,a,h);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Pl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}_f(n,!0,a,null,h);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(to(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function Ix(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),ya(n,cn,e.memoizedState.cache),Js();break;case 27:case 5:Kt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$m(e,n,a):(ba(n),e=Wi(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(to(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return eg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(fn,fn.current),o)break;return null;case 22:case 23:return n.lanes=0,jm(e,n,a);case 24:ya(n,cn,e.memoizedState.cache)}return Wi(e,n,a)}function ng(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return _n=!1,Ix(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Re&&(n.flags&1048576)!==0&&Lp(n,vl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Ac(o)?(e=pr(o,e),n.tag=1,n=Qm(null,n,o,e,a)):(n.tag=0,n=ff(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===C){n.tag=11,n=Wm(null,n,o,e,a);break t}else if(c===z){n.tag=14,n=Ym(null,n,o,e,a);break t}}throw n=xt(o)||o,Error(r(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=pr(o,n.pendingProps),Qm(e,n,o,c,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Hc(e,n),oo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ya(n,cn,o),o!==h.cache&&Oc(n,[cn],a,!0),so(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jm(e,n,o,a);break t}else if(o!==c){c=ni(Error(r(424)),n),$s(c),n=Jm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=mi(e.firstChild),Ln=n,Re=!0,lr=null,Ti=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Js(),o===c){n=Wi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Bl(e,n),e===null?(a=s_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=$l(St.current).createElement(a),o[ln]=n,o[Sn]=e,bn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=s_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Re&&(o=n.stateNode=i_(n.type,n.pendingProps,St.current),Ln=n,Ti=!0,c=Ze,Pa(n.type)?(Jf=c,Ze=mi(o.firstChild)):Ze=c),En(e,n,n.pendingProps.children,a),Bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((c=o=Ze)&&(o=cy(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Ln=n,Ze=mi(o.firstChild),Ti=!1,c=!0):c=!1),c||ur(n)),Kt(n),c=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,jf(c,h)?o=null:M!==null&&jf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Yc(e,n,wx,null,null,a),Do._currentValue=c),Bl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=Ze)&&(a=fy(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Ln=n,Ze=null,e=!0):e=!1),e||ur(n)),null;case 13:return $m(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Jr(n,null,o,a):En(e,n,o,a),n.child;case 11:return Wm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,fr(n),c=wn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return Ym(e,n,n.type,n.pendingProps,a);case 15:return qm(e,n,n.type,n.pendingProps,a);case 19:return eg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Fl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return jm(e,n,a);case 24:return fr(n),o=wn(cn),e===null?(c=zc(),c===null&&(c=Xe,h=Pc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Fc(n),ya(n,cn,c)):((e.lanes&a)!==0&&(Hc(e,n),oo(n,null,null,a),so()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ya(n,cn,o)):(o=h.cache,ya(n,cn,o),o!==c.cache&&Oc(n,[cn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function ig(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f_(n)){if(n=si.current,n!==null&&((Se&4194048)===Se?bi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==bi))throw ao=Bc,Hp;e.flags|=8192}}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,ns|=n)}function mo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function zx(e,n,a){var o=n.pendingProps;switch(Dc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(cn),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(qe(n),ig(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),qe(n),ig(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),qe(n),n.flags&=-16777217),null;case 27:Ge(n),a=St.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Q.current,Qs(n)?Np(n):(e=i_(c,o,a),n.stateNode=e,Yi(n))}return qe(n),null;case 5:if(Ge(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Q.current,Qs(n))Np(n);else{switch(c=$l(St.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[ln]=n,e[Sn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=St.current,Qs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Kg(e.nodeValue,a)),e||ur(n)}else e=$l(e).createTextNode(o),e[ln]=n,n.stateNode=e}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Qs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else Js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Pp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&kf(n.stateNode.containerInfo),qe(n),null;case 10:return Vi(n.type),qe(n),null;case 19:if(yt(fn),c=n.memoizedState,c===null)return qe(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)mo(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Pl(e),h!==null){for(n.flags|=128,mo(c,!1),e=h.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Up(a,e),a=a.sibling;return Mt(fn,fn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ie()>kl&&(n.flags|=128,o=!0,mo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Pl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),mo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Re)return qe(n),null}else 2*ie()-c.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,mo(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(e=c.last,e!==null?e.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ie(),n.sibling=null,e=fn.current,Mt(fn,o?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Xi(n),Xc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&yt(hr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(cn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Bx(e,n){switch(Dc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(cn),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return yt(fn),null;case 4:return oe(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),Xc(),e!==null&&yt(hr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(cn),null;case 25:return null;default:return null}}function ag(e,n){switch(Dc(n),n.tag){case 3:Vi(cn),oe();break;case 26:case 27:case 5:Ge(n);break;case 4:oe();break;case 13:Xi(n);break;case 19:yt(fn);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),Xc(),e!==null&&yt(hr);break;case 24:Vi(cn)}}function go(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==c)}}catch(b){He(n,n.return,b)}}function Ra(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,c=n;var P=a,J=b;try{J()}catch(ft){He(c,P,ft)}}}o=o.next}while(o!==h)}}catch(ft){He(n,n.return,ft)}}function rg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Yp(n,a)}catch(o){He(e,e.return,o)}}}function sg(e,n,a){a.props=pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function _o(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){He(e,n,c)}}function Ai(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){He(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){He(e,n,c)}else a.current=null}function og(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){He(e,e.return,c)}}function xf(e,n,a){try{var o=e.stateNode;ry(o,e.type,a,n),o[Sn]=n}catch(c){He(e,e.return,c)}}function lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Gl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,n,a),e=e.sibling;e!==null;)Gl(e,n,a),e=e.sibling}function ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[ln]=e,n[Sn]=a}catch(h){He(e,e.return,h)}}var qi=!1,Je=!1,Mf=!1,cg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Fx(e,n){if(e=e.containerInfo,Yf=ru,e=Sp(e),xc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,b=-1,P=-1,J=0,ft=0,vt=e,et=null;e:for(;;){for(var it;vt!==a||c!==0&&vt.nodeType!==3||(b=M+c),vt!==h||o!==0&&vt.nodeType!==3||(P=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(it=vt.firstChild)!==null;)et=vt,vt=it;for(;;){if(vt===e)break e;if(et===a&&++J===c&&(b=M),et===h&&++ft===o&&(P=M),(it=vt.nextSibling)!==null)break;vt=et,et=vt.parentNode}vt=it}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:e,selectionRange:a},ru=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ee=pr(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){He(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function fg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a),o&4&&go(5,a);break;case 1:if(wa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){He(a,a.return,M)}else{var c=pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){He(a,a.return,M)}}o&64&&rg(a),o&512&&_o(a,a.return);break;case 3:if(wa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yp(e,n)}catch(M){He(a,a.return,M)}}break;case 27:n===null&&o&4&&ug(a);case 26:case 5:wa(e,a),n===null&&o&4&&og(a),o&512&&_o(a,a.return);break;case 12:wa(e,a);break;case 13:wa(e,a),o&4&&pg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jx.bind(null,a),hy(e,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||Je,c=qi;var h=Je;qi=o,(Je=n)&&!h?Ca(e,a,(a.subtreeFlags&8772)!==0):wa(e,a),qi=c,Je=h}break;case 30:break;default:wa(e,a)}}function hg(e){var n=e.alternate;n!==null&&(e.alternate=null,hg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ga(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Bn=!1;function ji(e,n,a){for(a=a.child;a!==null;)dg(e,n,a),a=a.sibling}function dg(e,n,a){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Je||Ai(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Ai(a,n);var o=We,c=Bn;Pa(a.type)&&(We=a.stateNode,Bn=!1),ji(e,n,a),Ao(a.stateNode),We=o,Bn=c;break;case 5:Je||Ai(a,n);case 6:if(o=We,c=Bn,We=null,ji(e,n,a),We=o,Bn=c,We!==null)if(Bn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(h){He(a,n,h)}else try{We.removeChild(a.stateNode)}catch(h){He(a,n,h)}break;case 18:We!==null&&(Bn?(e=We,e_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Oo(e)):e_(We,a.stateNode));break;case 4:o=We,c=Bn,We=a.stateNode.containerInfo,Bn=!0,ji(e,n,a),We=o,Bn=c;break;case 0:case 11:case 14:case 15:Je||Ra(2,a,n),Je||Ra(4,a,n),ji(e,n,a);break;case 1:Je||(Ai(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&sg(a,n,o)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,ji(e,n,a),Je=o;break;default:ji(e,n,a)}}function pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oo(e)}catch(a){He(n,n.return,a)}}function Hx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cg),n;default:throw Error(r(435,e.tag))}}function Ef(e,n){var a=Hx(e);n.forEach(function(o){var c=Zx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,M=n,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(Pa(b.type)){We=b.stateNode,Bn=!1;break t}break;case 5:We=b.stateNode,Bn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Bn=!0;break t}b=b.return}if(We===null)throw Error(r(160));dg(h,M,c),We=null,Bn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)mg(n,e),n=n.sibling}var pi=null;function mg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Ra(3,e,e.return),go(3,e),Ra(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(Je||a===null||Ai(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(jn(n,e),Zn(e),o&512&&(Je||a===null||Ai(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ma]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),bn(h,o,a),h[ln]=e,nn(h),o=h;break t;case"link":var M=u_("link","href",c).get(o+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(h=M[b],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break e}}h=c.createElement(o),bn(h,o,a),c.head.appendChild(h);break;case"meta":if(M=u_("meta","content",c).get(o+(a.content||""))){for(b=0;b<M.length;b++)if(h=M[b],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break e}}h=c.createElement(o),bn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[ln]=e,nn(h),o=h}e.stateNode=o}else c_(c,e.type,e.stateNode);else e.stateNode=l_(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?c_(c,e.type,e.stateNode):l_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(Je||a===null||Ai(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(Je||a===null||Ai(a,a.return)),e.flags&32){c=e.stateNode;try{Ei(c,"")}catch(it){He(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,xf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Mf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){He(e,e.return,it)}}break;case 3:if(nu=null,c=pi,pi=tu(n.containerInfo),jn(n,e),pi=c,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(n.containerInfo)}catch(it){He(e,e.return,it)}Mf&&(Mf=!1,gg(e));break;case 4:o=pi,pi=tu(e.stateNode.containerInfo),jn(n,e),Zn(e),pi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cf=ie()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=qi,ft=Je;if(qi=J||c,Je=ft||P,jn(n,e),Je=ft,qi=J,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||qi||Je||mr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(h=P.stateNode,c)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=P.stateNode;var vt=P.memoizedProps.style,et=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){He(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(it){He(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ef(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(lg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=yf(e);Gl(e,h,c);break;case 5:var M=a.stateNode;a.flags&32&&(Ei(M,""),a.flags&=-33);var b=yf(e);Gl(e,b,M);break;case 3:case 4:var P=a.stateNode.containerInfo,J=yf(e);Sf(e,J,P);break;default:throw Error(r(161))}}catch(ft){He(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function wa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fg(e,n.alternate,n),n=n.sibling}function mr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),mr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),mr(n);break;case 27:Ao(n.stateNode);case 26:case 5:Ai(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}e=e.sibling}}function Ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ca(c,h,a),go(4,h);break;case 1:if(Ca(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){He(o,o.return,J)}if(o=h,c=o.updateQueue,c!==null){var b=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Wp(P[c],b)}catch(J){He(o,o.return,J)}}a&&M&64&&rg(h),_o(h,h.return);break;case 27:ug(h);case 26:case 5:Ca(c,h,a),a&&o===null&&M&4&&og(h),_o(h,h.return);break;case 12:Ca(c,h,a);break;case 13:Ca(c,h,a),a&&M&4&&pg(c,h);break;case 22:h.memoizedState===null&&Ca(c,h,a),_o(h,h.return);break;case 30:break;default:Ca(c,h,a)}n=n.sibling}}function Tf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(e,n,a,o),n=n.sibling}function _g(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),c&2048&&go(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(c&2048){Ri(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,b=h.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ri(e,n,a,o):vo(e,n):h._visibility&2?Ri(e,n,a,o):(h._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Tf(M,n);break;case 24:Ri(e,n,a,o),c&2048&&bf(n.alternate,n);break;default:Ri(e,n,a,o)}}function $r(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,b=a,P=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:$r(h,M,b,P,c),go(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&2?$r(h,M,b,P,c):vo(h,M):(ft._visibility|=2,$r(h,M,b,P,c)),c&&J&2048&&Tf(M.alternate,M);break;case 24:$r(h,M,b,P,c),c&&J&2048&&bf(M.alternate,M);break;default:$r(h,M,b,P,c)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:vo(a,o),c&2048&&Tf(o.alternate,o);break;case 24:vo(a,o),c&2048&&bf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var xo=8192;function ts(e){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)vg(e),e=e.sibling}function vg(e){switch(e.tag){case 26:ts(e),e.flags&xo&&e.memoizedState!==null&&by(pi,e.memoizedState,e.memoizedProps);break;case 5:ts(e);break;case 3:case 4:var n=pi;pi=tu(e.stateNode.containerInfo),ts(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,ts(e),xo=n):ts(e));break;default:ts(e)}}function xg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Sg(o,e)}xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)yg(e),e=e.sibling}function yg(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):yo(e);break;default:yo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Sg(o,e)}xg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function Sg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var c=o.sibling,h=o.return;if(hg(o),o===a){vn=null;break t}if(c!==null){c.return=h,vn=c;break t}vn=h}}}var Gx={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Vx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Xe=null,me=null,Se=0,De=0,Kn=null,Da=!1,es=!1,Af=!1,Zi=0,Ke=0,Ua=0,gr=0,Rf=0,oi=0,ns=0,So=null,Fn=null,wf=!1,Cf=0,kl=1/0,Xl=null,La=null,Tn=0,Na=null,is=null,as=0,Df=0,Uf=null,Mg=null,Mo=0,Lf=null;function Qn(){if((Ce&2)!==0&&Se!==0)return Se&-Se;if(I.T!==null){var e=Wr;return e!==0?e:Ff()}return Ee()}function Eg(){oi===0&&(oi=(Se&536870912)===0||Re?k():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function Jn(e,n,a){(e===Xe&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Oa(e,Se,oi,!1)),_t(e,a),((Ce&2)===0||e!==Xe)&&(e===Xe&&((Ce&2)===0&&(gr|=a),Ke===4&&Oa(e,Se,oi,!1)),wi(e))}function Tg(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),c=o?Wx(e,n):Pf(e,n,!0),h=o;do{if(c===0){es&&!o&&Oa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!kx(a)){c=Pf(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var b=e;c=So;var P=b.current.memoizedState.isDehydrated;if(P&&(rs(b,M).flags|=256),M=Pf(b,M,!1),M!==2){if(Af&&!P){b.errorRecoveryDisabledLanes|=h,gr|=h,c=4;break t}h=Fn,Fn=c,h!==null&&(Fn===null?Fn=h:Fn.push.apply(Fn,h))}c=M}if(h=!1,c!==2)continue}}if(c===1){rs(e,0),Oa(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,oi,!Da);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Cf+300-ie(),10<c)){if(Oa(o,n,oi,!Da),ue(o,0,!0)!==0)break t;o.timeoutHandle=$g(bg.bind(null,o,a,Fn,Xl,wf,n,oi,gr,ns,Da,h,2,-0,0),c);break t}bg(o,a,Fn,Xl,wf,n,oi,gr,ns,Da,h,0,-0,0)}}break}while(!0);wi(e)}function bg(e,n,a,o,c,h,M,b,P,J,ft,vt,et,it){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:Ty},vg(n),vt=Ay(),vt!==null)){e.cancelPendingCommit=vt(Lg.bind(null,e,n,h,a,o,c,M,b,P,ft,1,et,it)),Oa(e,h,M,!J);return}Lg(e,n,h,a,o,c,M,b,P)}function kx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Yn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(e,n,a,o){n&=~Rf,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Gt(c),M=1<<h;o[h]=-1,c&=~M}a!==0&&Ot(e,a,n)}function Wl(){return(Ce&6)===0?(Eo(0),!1):!0}function Nf(){if(me!==null){if(De===0)var e=me.return;else e=me,Gi=cr=null,Zc(e),Qr=null,ho=0,e=me;for(;e!==null;)ag(e.alternate,e),e=e.return;me=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Nf(),Xe=e,me=a=Bi(e.current,null),Se=n,De=0,Kn=null,Da=!1,es=ne(e,n),Af=!1,ns=oi=Rf=gr=Ua=Ke=0,Fn=So=null,wf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Gt(o),h=1<<c;n|=e[c],o&=~h}return Zi=n,dl(),a}function Ag(e,n){ce=null,I.H=Ll,n===io||n===Ml?(n=kp(),De=3):n===Hp?(n=kp(),De=4):De=n===Xm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,me===null&&(Ke=1,zl(e,ni(n,e.current)))}function Rg(){var e=I.H;return I.H=Ll,e===null?Ll:e}function wg(){var e=I.A;return I.A=Gx,e}function Of(){Ke=4,Da||(Se&4194048)!==Se&&si.current!==null||(es=!0),(Ua&134217727)===0&&(gr&134217727)===0||Xe===null||Oa(Xe,Se,oi,!1)}function Pf(e,n,a){var o=Ce;Ce|=2;var c=Rg(),h=wg();(Xe!==e||Se!==n)&&(Xl=null,rs(e,n)),n=!1;var M=Ke;t:do try{if(De!==0&&me!==null){var b=me,P=Kn;switch(De){case 8:Nf(),M=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var J=De;if(De=0,Kn=null,ss(e,b,P,J),a&&es){M=0;break t}break;default:J=De,De=0,Kn=null,ss(e,b,P,J)}}Xx(),M=Ke;break}catch(ft){Ag(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Gi=cr=null,Ce=o,I.H=c,I.A=h,me===null&&(Xe=null,Se=0,dl()),M}function Xx(){for(;me!==null;)Cg(me)}function Wx(e,n){var a=Ce;Ce|=2;var o=Rg(),c=wg();Xe!==e||Se!==n?(Xl=null,kl=ie()+500,rs(e,n)):es=ne(e,n);t:do try{if(De!==0&&me!==null){n=me;var h=Kn;e:switch(De){case 1:De=0,Kn=null,ss(e,n,h,1);break;case 2:case 9:if(Gp(h)){De=0,Kn=null,Dg(n);break}n=function(){De!==2&&De!==9||Xe!==e||(De=7),wi(e)},h.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Gp(h)?(De=0,Kn=null,Dg(n)):(De=0,Kn=null,ss(e,n,h,7));break;case 5:var M=null;switch(me.tag){case 26:M=me.memoizedState;case 5:case 27:var b=me;if(!M||f_(M)){De=0,Kn=null;var P=b.sibling;if(P!==null)me=P;else{var J=b.return;J!==null?(me=J,Yl(J)):me=null}break e}}De=0,Kn=null,ss(e,n,h,5);break;case 6:De=0,Kn=null,ss(e,n,h,6);break;case 8:Nf(),Ke=6;break t;default:throw Error(r(462))}}Yx();break}catch(ft){Ag(e,ft)}while(!0);return Gi=cr=null,I.H=o,I.A=c,Ce=a,me!==null?0:(Xe=null,Se=0,dl(),Ke)}function Yx(){for(;me!==null&&!On();)Cg(me)}function Cg(e){var n=ng(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Yl(e):me=n}function Dg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Km(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Km(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Zc(n);default:ag(a,n),n=me=Up(n,Zi),n=ng(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Yl(e):me=n}function ss(e,n,a,o){Gi=cr=null,Zc(n),Qr=null,ho=0;var c=n.return;try{if(Px(e,c,n,a,Se)){Ke=1,zl(e,ni(a,e.current)),me=null;return}}catch(h){if(c!==null)throw me=c,h;Ke=1,zl(e,ni(a,e.current)),me=null;return}n.flags&32768?(Re||o===1?e=!0:es||(Se&536870912)!==0?e=!1:(Da=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ug(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){Ug(n,Da);return}e=n.return;var a=zx(n.alternate,n,Zi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ke===0&&(Ke=5)}function Ug(e,n){do{var a=Bx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ke=6,me=null}function Lg(e,n,a,o,c,h,M,b,P){e.cancelPendingCommit=null;do ql();while(Tn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Tc,zt(e,a,h,M,b,P),e===Xe&&(me=Xe=null,Se=0),is=n,Na=e,as=a,Df=h,Uf=c,Mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kx(U,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=Z.p,Z.p=2,M=Ce,Ce|=4;try{Fx(e,n,a)}finally{Ce=M,Z.p=c,I.T=o}}Tn=1,Ng(),Og(),Pg()}}function Ng(){if(Tn===1){Tn=0;var e=Na,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=Z.p;Z.p=2;var c=Ce;Ce|=4;try{mg(n,e);var h=qf,M=Sp(e.containerInfo),b=h.focusedElem,P=h.selectionRange;if(M!==b&&b&&b.ownerDocument&&yp(b.ownerDocument.documentElement,b)){if(P!==null&&xc(b)){var J=P.start,ft=P.end;if(ft===void 0&&(ft=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ft,b.value.length);else{var vt=b.ownerDocument||document,et=vt&&vt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ee=b.textContent.length,Zt=Math.min(P.start,ee),Pe=P.end===void 0?Zt:Math.min(P.end,ee);!it.extend&&Zt>Pe&&(M=Pe,Pe=Zt,Zt=M);var W=xp(b,Zt),H=xp(b,Pe);if(W&&H&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var K=vt.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),Zt>Pe?(it.addRange(K),it.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),it.addRange(K))}}}}for(vt=[],it=b;it=it.parentNode;)it.nodeType===1&&vt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var dt=vt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}ru=!!Yf,qf=Yf=null}finally{Ce=c,Z.p=o,I.T=a}}e.current=n,Tn=2}}function Og(){if(Tn===2){Tn=0;var e=Na,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=Z.p;Z.p=2;var c=Ce;Ce|=4;try{fg(e,n.alternate,n)}finally{Ce=c,Z.p=o,I.T=a}}Tn=3}}function Pg(){if(Tn===4||Tn===3){Tn=0,ve();var e=Na,n=is,a=as,o=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,is=Na=null,Ig(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(La=null),en(a),n=n.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,c=Z.p,Z.p=2,I.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var b=o[M];h(b.value,{componentStack:b.stack})}}finally{I.T=n,Z.p=c}}(as&3)!==0&&ql(),wi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Lf?Mo++:(Mo=0,Lf=e):Mo=0,Eo(0)}}function Ig(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function ql(e){return Ng(),Og(),Pg(),zg()}function zg(){if(Tn!==5)return!1;var e=Na,n=Df;Df=0;var a=en(as),o=I.T,c=Z.p;try{Z.p=32>a?32:a,I.T=null,a=Uf,Uf=null;var h=Na,M=as;if(Tn=0,is=Na=null,as=0,(Ce&6)!==0)throw Error(r(331));var b=Ce;if(Ce|=4,yg(h.current),_g(h,h.current,M,a),Ce=b,Eo(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ht,h)}catch{}return!0}finally{Z.p=c,I.T=o,Ig(e,n)}}function Bg(e,n,a){n=ni(a,n),n=cf(e.stateNode,n,2),e=Ea(e,n,2),e!==null&&(_t(e,2),wi(e))}function He(e,n,a){if(e.tag===3)Bg(e,e,a);else for(;n!==null;){if(n.tag===3){Bg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){e=ni(a,e),a=Vm(2),o=Ea(n,a,2),o!==null&&(km(a,o,n,e),_t(o,2),wi(o));break}}n=n.return}}function If(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Vx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Af=!0,c.add(a),e=qx.bind(null,e,n,a),n.then(e,e))}function qx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>ie()-Cf?(Ce&2)===0&&rs(e,0):Rf|=a,ns===Se&&(ns=0)),wi(e)}function Fg(e,n){n===0&&(n=Nt()),e=Gr(e,n),e!==null&&(_t(e,n),wi(e))}function jx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Fg(e,a)}function Zx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Fg(e,a)}function Kx(e,n){return fe(e,n)}var jl=null,os=null,zf=!1,Zl=!1,Bf=!1,_r=0;function wi(e){e!==os&&e.next===null&&(os===null?jl=os=e:os=os.next=e),Zl=!0,zf||(zf=!0,Jx())}function Eo(e,n){if(!Bf&&Zl){Bf=!0;do for(var a=!1,o=jl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var M=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-Gt(42|e)+1)-1,h&=c&~(M&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,kg(o,h))}else h=Se,h=ue(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ne(o,h)||(a=!0,kg(o,h));o=o.next}while(a);Bf=!1}}function Qx(){Hg()}function Hg(){Zl=zf=!1;var e=0;_r!==0&&(sy()&&(e=_r),_r=0);for(var n=ie(),a=null,o=jl;o!==null;){var c=o.next,h=Gg(o,n);h===0?(o.next=null,a===null?jl=c:a.next=c,c===null&&(os=a)):(a=o,(e!==0||(h&3)!==0)&&(Zl=!0)),o=c}Eo(e)}function Gg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Gt(h),b=1<<M,P=c[M];P===-1?((b&a)===0||(b&o)!==0)&&(c[M]=Le(b,n)):P<=n&&(e.expiredLanes|=b),h&=~b}if(n=Xe,a=Se,a=ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&F(o),en(a)){case 2:case 8:a=Vt;break;case 32:a=U;break;case 268435456:a=tt;break;default:a=U}return o=Vg.bind(null,e),a=fe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&F(o),e.callbackPriority=2,e.callbackNode=null,2}function Vg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var o=Se;return o=ue(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Tg(e,o,n),Gg(e,ie()),e.callbackNode!=null&&e.callbackNode===a?Vg.bind(null,e):null)}function kg(e,n){if(ql())return null;Tg(e,n,!0)}function Jx(){ly(function(){(Ce&6)!==0?fe(Ue,Qx):Hg()})}function Ff(){return _r===0&&(_r=k()),_r}function Xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function Wg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $x(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=Xg((c[Sn]||null).action),M=o.submitter;M&&(n=(n=M[Sn]||null)?Xg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var b=new cl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_r!==0){var P=M?Wg(c,M):new FormData(c);rf(a,{pending:!0,data:P,method:c.method,action:h},null,P)}}else typeof h=="function"&&(b.preventDefault(),P=M?Wg(c,M):new FormData(c),rf(a,{pending:!0,data:P,method:c.method,action:h},h,P))},currentTarget:c}]})}}for(var Hf=0;Hf<Ec.length;Hf++){var Gf=Ec[Hf],ty=Gf.toLowerCase(),ey=Gf[0].toUpperCase()+Gf.slice(1);di(ty,"on"+ey)}di(Tp,"onAnimationEnd"),di(bp,"onAnimationIteration"),di(Ap,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(vx,"onTransitionRun"),di(xx,"onTransitionStart"),di(yx,"onTransitionCancel"),di(Rp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Yg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var b=o[M],P=b.instance,J=b.currentTarget;if(b=b.listener,P!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=J;try{h(c)}catch(ft){Il(ft)}c.currentTarget=null,h=P}else for(M=0;M<o.length;M++){if(b=o[M],P=b.instance,J=b.currentTarget,b=b.listener,P!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=J;try{h(c)}catch(ft){Il(ft)}c.currentTarget=null,h=P}}}}function ge(e,n){var a=n[$a];a===void 0&&(a=n[$a]=new Set);var o=e+"__bubble";a.has(o)||(qg(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),qg(a,e,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[Kl]){e[Kl]=!0,al.forEach(function(a){a!=="selectionchange"&&(ny.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Vf("selectionchange",!1,n))}}function qg(e,n,a,o){switch(__(n)){case 2:var c=Cy;break;case 8:c=Dy;break;default:c=ih}a=c.bind(null,n,a,e),c=void 0,!cc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Xf(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===c)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;b!==null;){if(M=Li(b),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=h=M;continue t}b=b.parentNode}}o=o.return}tp(function(){var J=h,ft=lc(a),vt=[];t:{var et=wp.get(e);if(et!==void 0){var it=cl,ee=e;switch(e){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":it=K0;break;case"focusin":ee="focus",it=pc;break;case"focusout":ee="blur",it=pc;break;case"beforeblur":case"afterblur":it=pc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=$0;break;case Tp:case bp:case Ap:it=G0;break;case Rp:it=ex;break;case"scroll":case"scrollend":it=I0;break;case"wheel":it=ix;break;case"copy":case"cut":case"paste":it=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=rp;break;case"toggle":case"beforetoggle":it=rx}var Zt=(n&4)!==0,Pe=!Zt&&(e==="scroll"||e==="scrollend"),W=Zt?et!==null?et+"Capture":null:et;Zt=[];for(var H=J,K;H!==null;){var dt=H;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||W===null||(dt=Vs(H,W),dt!=null&&Zt.push(bo(H,dt,K))),Pe)break;H=H.return}0<Zt.length&&(et=new it(et,ee,null,a,ft),vt.push({event:et,listeners:Zt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",et&&a!==oc&&(ee=a.relatedTarget||a.fromElement)&&(Li(ee)||ee[Pn]))break t;if((it||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=J,ee=ee?Li(ee):null,ee!==null&&(Pe=u(ee),Zt=ee.tag,ee!==Pe||Zt!==5&&Zt!==27&&Zt!==6)&&(ee=null)):(it=null,ee=J),it!==ee)){if(Zt=ip,dt="onMouseLeave",W="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=rp,dt="onPointerLeave",W="onPointerEnter",H="pointer"),Pe=it==null?et:er(it),K=ee==null?et:er(ee),et=new Zt(dt,H+"leave",it,a,ft),et.target=Pe,et.relatedTarget=K,dt=null,Li(ft)===J&&(Zt=new Zt(W,H+"enter",ee,a,ft),Zt.target=K,Zt.relatedTarget=Pe,dt=Zt),Pe=dt,it&&ee)e:{for(Zt=it,W=ee,H=0,K=Zt;K;K=ls(K))H++;for(K=0,dt=W;dt;dt=ls(dt))K++;for(;0<H-K;)Zt=ls(Zt),H--;for(;0<K-H;)W=ls(W),K--;for(;H--;){if(Zt===W||W!==null&&Zt===W.alternate)break e;Zt=ls(Zt),W=ls(W)}Zt=null}else Zt=null;it!==null&&jg(vt,et,it,Zt,!1),ee!==null&&Pe!==null&&jg(vt,Pe,ee,Zt,!0)}}t:{if(et=J?er(J):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Ht=dp;else if(fp(et))if(pp)Ht=mx;else{Ht=dx;var he=hx}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&sc(J.elementType)&&(Ht=dp):Ht=px;if(Ht&&(Ht=Ht(e,J))){hp(vt,Ht,a,ft);break t}he&&he(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&Rn(et,"number",et.value)}switch(he=J?er(J):window,e){case"focusin":(fp(he)||he.contentEditable==="true")&&(Br=he,yc=J,Ks=null);break;case"focusout":Ks=yc=Br=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Mp(vt,a,ft);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":Mp(vt,a,ft)}var kt;if(gc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else zr?up(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(sp&&a.locale!=="ko"&&(zr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&zr&&(kt=ep()):(xa=ft,fc="value"in xa?xa.value:xa.textContent,zr=!0)),he=Ql(J,Jt),0<he.length&&(Jt=new ap(Jt,e,null,a,ft),vt.push({event:Jt,listeners:he}),kt?Jt.data=kt:(kt=cp(a),kt!==null&&(Jt.data=kt)))),(kt=ox?lx(e,a):ux(e,a))&&(Jt=Ql(J,"onBeforeInput"),0<Jt.length&&(he=new ap("onBeforeInput","beforeinput",null,a,ft),vt.push({event:he,listeners:Jt}),he.data=kt)),$x(vt,e,J,a,ft)}Yg(vt,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ql(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Vs(e,a),c!=null&&o.unshift(bo(e,c,h)),c=Vs(e,n),c!=null&&o.push(bo(e,c,h))),e.tag===3)return o;e=e.return}return[]}function ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jg(e,n,a,o,c){for(var h=n._reactName,M=[];a!==null&&a!==o;){var b=a,P=b.alternate,J=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||J===null||(P=J,c?(J=Vs(a,h),J!=null&&M.unshift(bo(a,J,P))):c||(J=Vs(a,h),J!=null&&M.push(bo(a,J,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var iy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(iy,`
`).replace(ay,"")}function Kg(e,n){return n=Zg(n),Zg(e)===n}function Jl(){}function Oe(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ei(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Jd(e,o,h);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",c.name,c,null),Oe(e,n,"formEncType",c.formEncType,c,null),Oe(e,n,"formMethod",c.formMethod,c,null),Oe(e,n,"formTarget",c.formTarget,c,null)):(Oe(e,n,"encType",c.encType,c,null),Oe(e,n,"method",c.method,c,null),Oe(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),bt(e,"popover",o);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=O0.get(a)||a,bt(e,a,o))}}function Wf(e,n,a,o,c,h){switch(a){case"style":Jd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&Ei(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):bt(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,h,M,a,null)}}c&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=h=M=c=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":c=ft;break;case"type":M=ft;break;case"checked":P=ft;break;case"defaultChecked":J=ft;break;case"value":h=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Oe(e,n,o,ft,a,null)}}Fe(e,h,b,P,J,M,c,!1),je(e);return;case"select":ge("invalid",e),o=M=h=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":h=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Oe(e,n,c,b,a,null)}n=h,a=M,e.multiple=!!o,n!=null?un(e,!!o,n,!1):a!=null&&un(e,!!o,a,!0);return;case"textarea":ge("invalid",e),h=c=o=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":c=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Oe(e,n,M,b,a,null)}Mn(e,o,c,h),je(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,P,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)ge(To[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,J,o,a,null)}return;default:if(sc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Wf(e,n,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Oe(e,n,b,o,a,null))}function ry(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,M=null,b=null,P=null,J=null,ft=null;for(it in a){var vt=a[it];if(a.hasOwnProperty(it)&&vt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=vt;default:o.hasOwnProperty(it)||Oe(e,n,it,null,o,vt)}}for(var et in o){var it=o[et];if(vt=a[et],o.hasOwnProperty(et)&&(it!=null||vt!=null))switch(et){case"type":h=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ft=it;break;case"value":M=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==vt&&Oe(e,n,et,it,o,vt)}}Pi(e,M,b,P,J,ft,h,c);return;case"select":it=M=b=et=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(h)||Oe(e,n,h,null,o,P)}for(c in o)if(h=o[c],P=a[c],o.hasOwnProperty(c)&&(h!=null||P!=null))switch(c){case"value":et=h;break;case"defaultValue":b=h;break;case"multiple":M=h;default:h!==P&&Oe(e,n,c,h,o,P)}n=b,a=M,o=it,et!=null?un(e,!!a,et,!1):!!o!=!!a&&(n!=null?un(e,!!a,n,!0):un(e,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,n,b,null,o,c)}for(M in o)if(c=o[M],h=a[M],o.hasOwnProperty(M)&&(c!=null||h!=null))switch(M){case"value":et=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Oe(e,n,M,c,o,h)}gn(e,et,it);return;case"option":for(var ee in a)if(et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Oe(e,n,ee,null,o,et)}for(P in o)if(et=o[P],it=a[P],o.hasOwnProperty(P)&&et!==it&&(et!=null||it!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Oe(e,n,P,et,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)et=a[Zt],a.hasOwnProperty(Zt)&&et!=null&&!o.hasOwnProperty(Zt)&&Oe(e,n,Zt,null,o,et);for(J in o)if(et=o[J],it=a[J],o.hasOwnProperty(J)&&et!==it&&(et!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Oe(e,n,J,et,o,it)}return;default:if(sc(n)){for(var Pe in a)et=a[Pe],a.hasOwnProperty(Pe)&&et!==void 0&&!o.hasOwnProperty(Pe)&&Wf(e,n,Pe,void 0,o,et);for(ft in o)et=o[ft],it=a[ft],!o.hasOwnProperty(ft)||et===it||et===void 0&&it===void 0||Wf(e,n,ft,et,o,it);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!o.hasOwnProperty(W)&&Oe(e,n,W,null,o,et);for(vt in o)et=o[vt],it=a[vt],!o.hasOwnProperty(vt)||et===it||et==null&&it==null||Oe(e,n,vt,et,o,it)}var Yf=null,qf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function Qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function sy(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(e){return t_.resolve(null).then(e).catch(uy)}:$g;function uy(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function e_(e,n){var a=n,o=0,c=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Ao(M.documentElement),a&2&&Ao(M.body),a&4)for(a=M.head,Ao(a),M=a.firstChild;M;){var b=M.nextSibling,P=M.nodeName;M[ma]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(c===0){e.removeChild(h),Oo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Oo(n)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),ga(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function cy(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ma])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function fy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function hy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Jf=null;function n_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function i_(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ga(e)}var li=new Map,a_=new Set;function tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ki=Z.d;Z.d={f:dy,r:py,D:my,C:gy,L:_y,m:vy,X:yy,S:xy,M:Sy};function dy(){var e=Ki.f(),n=Wl();return e||n}function py(e){var n=Ni(e);n!==null&&n.tag===5&&n.type==="form"?Tm(n):Ki.r(e)}var us=typeof document>"u"?null:document;function r_(e,n,a){var o=us;if(o&&typeof n=="string"&&n){var c=ke(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),a_.has(c)||(a_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),nn(n),o.head.appendChild(n)))}}function my(e){Ki.D(e),r_("dns-prefetch",e,null)}function gy(e,n){Ki.C(e,n),r_("preconnect",e,n)}function _y(e,n,a){Ki.L(e,n,a);var o=us;if(o&&e&&n){var c='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ke(a.imageSizes)+'"]')):c+='[href="'+ke(e)+'"]';var h=c;switch(n){case"style":h=cs(e);break;case"script":h=fs(e)}li.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ro(h))||n==="script"&&o.querySelector(wo(h))||(n=o.createElement("link"),bn(n,"link",e),nn(n),o.head.appendChild(n)))}}function vy(e,n){Ki.m(e,n);var a=us;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ke(o)+'"][href="'+ke(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fs(e)}if(!li.has(h)&&(e=g({rel:"modulepreload",href:e},n),li.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(h)))return}o=a.createElement("link"),bn(o,"link",e),nn(o),a.head.appendChild(o)}}}function xy(e,n,a){Ki.S(e,n,a);var o=us;if(o&&e){var c=_a(o).hoistableStyles,h=cs(e);n=n||"default";var M=c.get(h);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(Ro(h)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(h))&&$f(e,a);var P=M=o.createElement("link");nn(P),bn(P,"link",e),P._p=new Promise(function(J,ft){P.onload=J,P.onerror=ft}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,eu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:b},c.set(h,M)}}}function yy(e,n){Ki.X(e,n);var a=us;if(a&&e){var o=_a(a).hoistableScripts,c=fs(e),h=o.get(c);h||(h=a.querySelector(wo(c)),h||(e=g({src:e,async:!0},n),(n=li.get(c))&&th(e,n),h=a.createElement("script"),nn(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Sy(e,n){Ki.M(e,n);var a=us;if(a&&e){var o=_a(a).hoistableScripts,c=fs(e),h=o.get(c);h||(h=a.querySelector(wo(c)),h||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(c))&&th(e,n),h=a.createElement("script"),nn(h),bn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function s_(e,n,a,o){var c=(c=St.current)?tu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=_a(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cs(a.href);var h=_a(c).hoistableStyles,M=h.get(e);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=c.querySelector(Ro(e)))&&!h._p&&(M.instance=h,M.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),h||My(c,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=_a(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function cs(e){return'href="'+ke(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function My(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),nn(n),e.head.appendChild(n))}function fs(e){return'[src="'+ke(e)+'"]'}function wo(e){return"script[async]"+e}function l_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),bn(o,"style",c),eu(o,a.precedence,e),n.instance=o;case"stylesheet":c=cs(a.href);var h=e.querySelector(Ro(c));if(h)return n.state.loading|=4,n.instance=h,nn(h),h;o=o_(a),(c=li.get(c))&&$f(o,c),h=(e.ownerDocument||e).createElement("link"),nn(h);var M=h;return M._p=new Promise(function(b,P){M.onload=b,M.onerror=P}),bn(h,"link",o),n.state.loading|=4,eu(h,a.precedence,e),n.instance=h;case"script":return h=fs(a.src),(c=e.querySelector(wo(h)))?(n.instance=c,nn(c),c):(o=a,(c=li.get(h))&&(o=g({},a),th(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,eu(o,a.precedence,e));return n.instance}function eu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===n)h=b;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nu=null;function u_(e,n,a){if(nu===null){var o=new Map,c=nu=new Map;c.set(a,o)}else c=nu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[ma]||h[ln]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var b=o.get(M);b?b.push(h):o.set(M,[h])}}return o}function c_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ey(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Co=null;function Ty(){}function by(e,n,a){if(Co===null)throw Error(r(475));var o=Co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=cs(a.href),h=e.querySelector(Ro(c));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=iu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,nn(h);return}h=e.ownerDocument||e,a=o_(a),(c=li.get(c))&&$f(a,c),h=h.createElement("link"),nn(h);var M=h;M._p=new Promise(function(b,P){M.onload=b,M.onerror=P}),bn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=iu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ay(){if(Co===null)throw Error(r(475));var e=Co;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function iu(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function eh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,n.forEach(Ry,e),au=null,iu.call(e))}function Ry(e,n){if(!(n.state.loading&4)){var a=au.get(e);if(a)var o=a.get(null);else{a=new Map,au.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var M=c[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,c),a.set(M,c),this.count++,o=iu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function wy(e,n,a,o,c,h,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function h_(e,n,a,o,c,h,M,b,P,J,ft,vt){return e=new wy(e,n,a,M,b,P,J,vt),n=1,h===!0&&(n|=24),h=qn(3,null,null,n),e.current=h,h.stateNode=e,n=Pc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Fc(h),e}function d_(e){return e?(e=Vr,e):Vr}function p_(e,n,a,o,c,h){c=d_(c),o.context===null?o.context=c:o.pendingContext=c,o=Ma(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ea(e,o,n),a!==null&&(Jn(a,e,n),ro(a,e,n))}function m_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){m_(e,n),(e=e.alternate)&&m_(e,n)}function g_(e){if(e.tag===13){var n=Gr(e,67108864);n!==null&&Jn(n,e,67108864),nh(e,67108864)}}var ru=!0;function Cy(e,n,a,o){var c=I.T;I.T=null;var h=Z.p;try{Z.p=2,ih(e,n,a,o)}finally{Z.p=h,I.T=c}}function Dy(e,n,a,o){var c=I.T;I.T=null;var h=Z.p;try{Z.p=8,ih(e,n,a,o)}finally{Z.p=h,I.T=c}}function ih(e,n,a,o){if(ru){var c=ah(o);if(c===null)Xf(e,n,o,su,a),v_(e,o);else if(Ly(c,e,n,a,o))o.stopPropagation();else if(v_(e,o),n&4&&-1<Uy.indexOf(e)){for(;c!==null;){var h=Ni(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=It(h.pendingLanes);if(M!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var P=1<<31-Gt(M);b.entanglements[1]|=P,M&=~P}wi(h),(Ce&6)===0&&(kl=ie()+500,Eo(0))}}break;case 13:b=Gr(h,2),b!==null&&Jn(b,h,2),Wl(),nh(h,2)}if(h=ah(o),h===null&&Xf(e,n,o,su,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else Xf(e,n,o,null,a)}}function ah(e){return e=lc(e),rh(e)}var su=null;function rh(e){if(su=null,e=Li(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return su=e,null}function __(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wt()){case Ue:return 2;case Vt:return 8;case U:case A:return 32;case tt:return 268435456;default:return 32}default:return 32}}var sh=!1,Ia=null,za=null,Ba=null,Uo=new Map,Lo=new Map,Fa=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v_(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ni(n),n!==null&&g_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Ly(e,n,a,o,c){switch(n){case"focusin":return Ia=No(Ia,e,n,a,o,c),!0;case"dragenter":return za=No(za,e,n,a,o,c),!0;case"mouseover":return Ba=No(Ba,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Uo.set(h,No(Uo.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Lo.set(h,No(Lo.get(h)||null,e,n,a,o,c)),!0}return!1}function x_(e){var n=Li(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=Ve(o);var c=Gr(a,o);c!==null&&Jn(c,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ou(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);oc=o,a.target.dispatchEvent(o),oc=null}else return n=Ni(a),n!==null&&g_(n),e.blockedOn=a,!1;n.shift()}return!0}function y_(e,n,a){ou(e)&&a.delete(n)}function Ny(){sh=!1,Ia!==null&&ou(Ia)&&(Ia=null),za!==null&&ou(za)&&(za=null),Ba!==null&&ou(Ba)&&(Ba=null),Uo.forEach(y_),Lo.forEach(y_)}function lu(e,n){e.blockedOn===n&&(e.blockedOn=null,sh||(sh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ny)))}var uu=null;function S_(e){uu!==e&&(uu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uu===e&&(uu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(rh(o||a)===null)continue;break}var h=Ni(a);h!==null&&(e.splice(n,3),n-=3,rf(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Oo(e){function n(P){return lu(P,e)}Ia!==null&&lu(Ia,e),za!==null&&lu(za,e),Ba!==null&&lu(Ba,e),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Fa.length;a++){var o=Fa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)x_(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],M=c[Sn]||null;if(typeof h=="function")M||S_(a);else if(M){var b=null;if(h&&h.hasAttribute("formAction")){if(c=h,M=h[Sn]||null)b=M.formAction;else if(rh(c)!==null)continue}else b=M.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),S_(a)}}}function oh(e){this._internalRoot=e}cu.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();p_(a,o,e,n,null,null)},cu.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;p_(e.current,2,null,e,null,null),Wl(),n[Pn]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&x_(e)}};var M_=t.version;if(M_!=="19.1.0")throw Error(r(527,M_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Oy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{ht=fu.inject(Oy),Pt=fu}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Bm,h=Fm,M=Hm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=h_(e,1,!1,null,null,a,o,c,h,M,b,null),e[Pn]=n.current,kf(e),new oh(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",h=Bm,M=Fm,b=Hm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=h_(e,1,!0,n,a??null,o,c,h,M,b,P,J),n.context=d_(null),a=n.current,o=Qn(),o=Ve(o),c=Ma(o),c.callback=null,Ea(a,c,o),a=o,n.current.lanes=a,_t(n,a),wi(n),e[Pn]=n.current,kf(e),new cu(n)},Io.version="19.1.0",Io}var L_;function Wy(){if(L_)return ch.exports;L_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ch.exports=Xy(),ch.exports}var Yy=Wy();const qy=Fv(Yy);var zo={},N_;function jy(){if(N_)return zo;N_=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.parse=f,zo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,S){const E=new u,T=v.length;if(T<2)return E;const y=(S==null?void 0:S.decode)||g;let _=0;do{const O=v.indexOf("=",_);if(O===-1)break;const N=v.indexOf(";",_),C=N===-1?T:N;if(O>C){_=v.lastIndexOf(";",O-1)+1;continue}const B=d(v,_,O),G=m(v,O,B),z=v.slice(B,G);if(E[z]===void 0){let X=d(v,O+1,C),D=m(v,C,X);const w=y(v.slice(X,D));E[z]=w}_=C+1}while(_<T);return E}function d(v,S,E){do{const T=v.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<E);return E}function m(v,S,E){for(;S>E;){const T=v.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return E}function p(v,S,E){const T=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=T(S);if(!t.test(y))throw new TypeError(`argument val is invalid: ${S}`);let _=v+"="+y;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return zo}jy();var O_="popstate";function Zy(s={}){function t(r,l){let{pathname:u,search:f,hash:d}=r.location;return ju("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Us(l)}return Hv(t,i,null,s)}function Ky(s={}){function t(l,u){let{pathname:f="/",search:d="",hash:m=""}=zs(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),ju("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof u=="string"?u:Us(u))}function r(l,u){Mi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Hv(t,i,r,s)}function on(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Mi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qy(){return Math.random().toString(36).substring(2,10)}function P_(s,t){return{usr:s.state,key:s.key,idx:t}}function ju(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?zs(t):t,state:i,key:t&&t.key||r||Qy()}}function Us({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function zs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function Hv(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function x(){d="POP";let y=g(),_=y==null?null:y-p;p=y,m&&m({action:d,location:T.location,delta:_})}function v(y,_){d="PUSH";let O=ju(T.location,y,_);i&&i(O,y),p=g()+1;let N=P_(O,p),C=T.createHref(O);try{f.pushState(N,"",C)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(C)}u&&m&&m({action:d,location:T.location,delta:1})}function S(y,_){d="REPLACE";let O=ju(T.location,y,_);i&&i(O,y),p=g();let N=P_(O,p),C=T.createHref(O);f.replaceState(N,"",C),u&&m&&m({action:d,location:T.location,delta:0})}function E(y){return Jy(y)}let T={get action(){return d},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(O_,x),m=y,()=>{l.removeEventListener(O_,x),m=null}},createHref(y){return t(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:S,go(y){return f.go(y)}};return T}function Jy(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),on(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Us(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Gv(s,t,i="/"){return $y(s,t,i,!1)}function $y(s,t,i,r){let l=typeof t=="string"?zs(t):t,u=ca(l.pathname||"/",i);if(u==null)return null;let f=Vv(s);tS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=fS(u);d=uS(f[m],p,r)}return d}function Vv(s,t=[],i=[],r=""){let l=(u,f,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(on(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=la([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(on(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Vv(u.children,t,g,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:oS(p,u.index),routesMeta:g})};return s.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,f);else for(let m of kv(u.path))l(u,f,m)}),t}function kv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=kv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function tS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:lS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var eS=/^:[\w-]+$/,nS=3,iS=2,aS=1,rS=10,sS=-2,I_=s=>s==="*";function oS(s,t){let i=s.split("/"),r=i.length;return i.some(I_)&&(r+=sS),t&&(r+=iS),i.filter(l=>!I_(l)).reduce((l,u)=>l+(eS.test(u)?nS:u===""?aS:rS),r)}function lS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function uS(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",x=Zu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Zu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:la([u,x.pathname]),pathnameBase:mS(la([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=la([u,x.pathnameBase]))}return f}function Zu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=cS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[v];return x&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function cS(s,t=!1,i=!0){Mi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function fS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ca(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function hS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?zs(s):s;return{pathname:i?i.startsWith("/")?i:dS(i,t):t,search:gS(r),hash:_S(l)}}function dS(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ph(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Xv(s){let t=pS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Wv(s,t,i,r=!1){let l;typeof s=="string"?l=zs(s):(l={...s},on(!l.pathname||!l.pathname.includes("?"),ph("?","pathname","search",l)),on(!l.pathname||!l.pathname.includes("#"),ph("#","pathname","hash",l)),on(!l.search||!l.search.includes("#"),ph("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let x=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let m=hS(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var la=s=>s.join("/").replace(/\/\/+/g,"/"),mS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),gS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,_S=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function vS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Yv=["POST","PUT","PATCH","DELETE"];new Set(Yv);var xS=["GET",...Yv];new Set(xS);var Bs=ct.createContext(null);Bs.displayName="DataRouter";var $u=ct.createContext(null);$u.displayName="DataRouterState";var qv=ct.createContext({isTransitioning:!1});qv.displayName="ViewTransition";var yS=ct.createContext(new Map);yS.displayName="Fetchers";var SS=ct.createContext(null);SS.displayName="Await";var Ui=ct.createContext(null);Ui.displayName="Navigation";var tc=ct.createContext(null);tc.displayName="Location";var da=ct.createContext({outlet:null,matches:[],isDataRoute:!1});da.displayName="Route";var Pd=ct.createContext(null);Pd.displayName="RouteError";function MS(s,{relative:t}={}){on(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ct.useContext(Ui),{hash:l,pathname:u,search:f}=Ko(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:la([i,u])),r.createHref({pathname:d,search:f,hash:l})}function Zo(){return ct.useContext(tc)!=null}function Nr(){return on(Zo(),"useLocation() may be used only in the context of a <Router> component."),ct.useContext(tc).location}var jv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zv(s){ct.useContext(Ui).static||ct.useLayoutEffect(s)}function ES(){let{isDataRoute:s}=ct.useContext(da);return s?IS():TS()}function TS(){on(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ct.useContext(Bs),{basename:t,navigator:i}=ct.useContext(Ui),{matches:r}=ct.useContext(da),{pathname:l}=Nr(),u=JSON.stringify(Xv(r)),f=ct.useRef(!1);return Zv(()=>{f.current=!0}),ct.useCallback((m,p={})=>{if(Mi(f.current,jv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Wv(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:la([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,u,l,s])}ct.createContext(null);function Ko(s,{relative:t}={}){let{matches:i}=ct.useContext(da),{pathname:r}=Nr(),l=JSON.stringify(Xv(i));return ct.useMemo(()=>Wv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function bS(s,t,i,r){on(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=ct.useContext(Ui),{matches:f}=ct.useContext(da),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let O=x&&x.path||"";Kv(p,!x||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let v=Nr(),S;S=v;let E=S.pathname||"/",T=E;if(g!=="/"){let O=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(O.length).join("/")}let y=!u&&i&&i.matches&&i.matches.length>0?i.matches:Gv(s,{pathname:T});return Mi(x||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),DS(y&&y.map(O=>Object.assign({},O,{params:Object.assign({},m,O.params),pathname:la([g,l.encodeLocation?l.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?g:la([g,l.encodeLocation?l.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),f,i,r)}function AS(){let s=PS(),t=vS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ct.createElement(ct.Fragment,null,ct.createElement("p",null,"💿 Hey developer 👋"),ct.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ct.createElement("code",{style:u},"ErrorBoundary")," or"," ",ct.createElement("code",{style:u},"errorElement")," prop on your route.")),ct.createElement(ct.Fragment,null,ct.createElement("h2",null,"Unexpected Application Error!"),ct.createElement("h3",{style:{fontStyle:"italic"}},t),i?ct.createElement("pre",{style:l},i):null,f)}var RS=ct.createElement(AS,null),wS=class extends ct.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ct.createElement(da.Provider,{value:this.props.routeContext},ct.createElement(Pd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CS({routeContext:s,match:t,children:i}){let r=ct.useContext(Bs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ct.createElement(da.Provider,{value:s},i)}function DS(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);on(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:x}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,v=!1,S=null,E=null;i&&(x=u&&p.route.id?u[p.route.id]:void 0,S=p.route.errorElement||RS,f&&(d<0&&g===0?(Kv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,g+1)),y=()=>{let _;return x?_=S:v?_=E:p.route.Component?_=ct.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,ct.createElement(CS,{match:p,routeContext:{outlet:m,matches:T,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?ct.createElement(wS,{location:i.location,revalidation:i.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}function Id(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function US(s){let t=ct.useContext(Bs);return on(t,Id(s)),t}function LS(s){let t=ct.useContext($u);return on(t,Id(s)),t}function NS(s){let t=ct.useContext(da);return on(t,Id(s)),t}function zd(s){let t=NS(s),i=t.matches[t.matches.length-1];return on(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function OS(){return zd("useRouteId")}function PS(){var r;let s=ct.useContext(Pd),t=LS("useRouteError"),i=zd("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function IS(){let{router:s}=US("useNavigate"),t=zd("useNavigate"),i=ct.useRef(!1);return Zv(()=>{i.current=!0}),ct.useCallback(async(l,u={})=>{Mi(i.current,jv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var z_={};function Kv(s,t,i){!t&&!z_[s]&&(z_[s]=!0,Mi(!1,i))}ct.memo(zS);function zS({routes:s,future:t,state:i}){return bS(s,void 0,i,t)}function Qi(s){on(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Qv({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){on(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=ct.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=zs(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=i,S=ct.useMemo(()=>{let E=ca(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:r}},[f,m,p,g,x,v,r]);return Mi(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:ct.createElement(Ui.Provider,{value:d},ct.createElement(tc.Provider,{children:t,value:S}))}var Bu="get",Fu="application/x-www-form-urlencoded";function ec(s){return s!=null&&typeof s.tagName=="string"}function BS(s){return ec(s)&&s.tagName.toLowerCase()==="button"}function FS(s){return ec(s)&&s.tagName.toLowerCase()==="form"}function HS(s){return ec(s)&&s.tagName.toLowerCase()==="input"}function GS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function VS(s,t){return s.button===0&&(!t||t==="_self")&&!GS(s)}var hu=null;function kS(){if(hu===null)try{new FormData(document.createElement("form"),0),hu=!1}catch{hu=!0}return hu}var XS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mh(s){return s!=null&&!XS.has(s)?(Mi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fu}"`),null):s}function WS(s,t){let i,r,l,u,f;if(FS(s)){let d=s.getAttribute("action");r=d?ca(d,t):null,i=s.getAttribute("method")||Bu,l=mh(s.getAttribute("enctype"))||Fu,u=new FormData(s)}else if(BS(s)||HS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ca(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Bu,l=mh(s.getAttribute("formenctype"))||mh(d.getAttribute("enctype"))||Fu,u=new FormData(d,s),!kS()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,x)}}else{if(ec(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Bu,r=null,l=Fu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}function Bd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function YS(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function jS(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await YS(u,i);return f.links?f.links():[]}return[]}));return JS(r.flat(1).filter(qS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function B_(s,t,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function ZS(s,t,{includeHydrateFallback:i}={}){return KS(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function KS(s){return[...new Set(s)]}function QS(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function JS(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(QS(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $S=new Set([100,101,204,205]);function tM(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&ca(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Jv(){let s=ct.useContext(Bs);return Bd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function eM(){let s=ct.useContext($u);return Bd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Fd=ct.createContext(void 0);Fd.displayName="FrameworkContext";function $v(){let s=ct.useContext(Fd);return Bd(s,"You must render this element inside a <HydratedRouter> element"),s}function nM(s,t){let i=ct.useContext(Fd),[r,l]=ct.useState(!1),[u,f]=ct.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=t,v=ct.useRef(null);ct.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(O=>{f(O.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[s]),ct.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Bo(d,S),onBlur:Bo(m,E),onMouseEnter:Bo(p,S),onMouseLeave:Bo(g,E),onTouchStart:Bo(x,S)}]:[!1,v,{}]}function Bo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function iM({page:s,...t}){let{router:i}=Jv(),r=ct.useMemo(()=>Gv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ct.createElement(rM,{page:s,matches:r,...t}):null}function aM(s){let{manifest:t,routeModules:i}=$v(),[r,l]=ct.useState([]);return ct.useEffect(()=>{let u=!1;return jS(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function rM({page:s,matches:t,...i}){let r=Nr(),{manifest:l,routeModules:u}=$v(),{basename:f}=Jv(),{loaderData:d,matches:m}=eM(),p=ct.useMemo(()=>B_(s,t,m,l,r,"data"),[s,t,m,l,r]),g=ct.useMemo(()=>B_(s,t,m,l,r,"assets"),[s,t,m,l,r]),x=ct.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(t.forEach(_=>{var N;let O=l.routes[_.route.id];!O||!O.hasLoader||(!p.some(C=>C.route.id===_.route.id)&&_.route.id in d&&((N=u[_.route.id])!=null&&N.shouldRevalidate)||O.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let y=tM(s,f);return T&&E.size>0&&y.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[f,d,r,l,p,t,s,u]),v=ct.useMemo(()=>ZS(g,l),[g,l]),S=aM(g);return ct.createElement(ct.Fragment,null,x.map(E=>ct.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>ct.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:T})=>ct.createElement("link",{key:E,...T})))}function sM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var t0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t0&&(window.__reactRouterVersion="7.6.0")}catch{}function oM({basename:s,children:t,window:i}){let r=ct.useRef();r.current==null&&(r.current=Zy({window:i,v5Compat:!0}));let l=r.current,[u,f]=ct.useState({action:l.action,location:l.location}),d=ct.useCallback(m=>{ct.startTransition(()=>f(m))},[f]);return ct.useLayoutEffect(()=>l.listen(d),[l,d]),ct.createElement(Qv,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}function lM({basename:s,children:t,window:i}){let r=ct.useRef();r.current==null&&(r.current=Ky({window:i,v5Compat:!0}));let l=r.current,[u,f]=ct.useState({action:l.action,location:l.location}),d=ct.useCallback(m=>{ct.startTransition(()=>f(m))},[f]);return ct.useLayoutEffect(()=>l.listen(d),[l,d]),ct.createElement(Qv,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var e0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ei=ct.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},S){let{basename:E}=ct.useContext(Ui),T=typeof p=="string"&&e0.test(p),y,_=!1;if(typeof p=="string"&&T&&(y=p,t0))try{let D=new URL(window.location.href),w=p.startsWith("//")?new URL(D.protocol+p):new URL(p),V=ca(w.pathname,E);w.origin===D.origin&&V!=null?p=V+w.search+w.hash:_=!0}catch{Mi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=MS(p,{relative:l}),[N,C,B]=nM(r,v),G=hM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:x});function z(D){t&&t(D),D.defaultPrevented||G(D)}let X=ct.createElement("a",{...v,...B,href:y||O,onClick:_||u?t:z,ref:sM(S,C),target:m,"data-discover":!T&&i==="render"?"true":void 0});return N&&!T?ct.createElement(ct.Fragment,null,X,ct.createElement(iM,{page:O})):X});ei.displayName="Link";var uM=ct.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},g){let x=Ko(f,{relative:p.relative}),v=Nr(),S=ct.useContext($u),{navigator:E,basename:T}=ct.useContext(Ui),y=S!=null&&_M(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,O=v.pathname,N=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(O=O.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&T&&(N=ca(N,T)||N);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=O===_||!l&&O.startsWith(_)&&O.charAt(C)==="/",G=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),z={isActive:B,isPending:G,isTransitioning:y},X=B?t:void 0,D;typeof r=="function"?D=r(z):D=[r,B?"active":null,G?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(z):u;return ct.createElement(ei,{...p,"aria-current":X,className:D,ref:g,style:w,to:f,viewTransition:d},typeof m=="function"?m(z):m)});uM.displayName="NavLink";var cM=ct.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Bu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},S)=>{let E=mM(),T=gM(d,{relative:p}),y=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&e0.test(d),O=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let C=N.nativeEvent.submitter,B=(C==null?void 0:C.getAttribute("formmethod"))||f;E(C||N.currentTarget,{fetcherKey:t,method:B,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:x})};return ct.createElement("form",{ref:S,method:y,action:T,onSubmit:r?m:O,...v,"data-discover":!_&&s==="render"?"true":void 0})});cM.displayName="Form";function fM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n0(s){let t=ct.useContext(Bs);return on(t,fM(s)),t}function hM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=ES(),m=Nr(),p=Ko(s,{relative:u});return ct.useCallback(g=>{if(VS(g,t)){g.preventDefault();let x=i!==void 0?i:Us(m)===Us(p);d(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[m,d,p,i,r,t,s,l,u,f])}var dM=0,pM=()=>`__${String(++dM)}__`;function mM(){let{router:s}=n0("useSubmit"),{basename:t}=ct.useContext(Ui),i=OS();return ct.useCallback(async(r,l={})=>{let{action:u,method:f,encType:d,formData:m,body:p}=WS(r,t);if(l.navigate===!1){let g=l.fetcherKey||pM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function gM(s,{relative:t}={}){let{basename:i}=ct.useContext(Ui),r=ct.useContext(da);on(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Ko(s||".",{relative:t})},f=Nr();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:la([i,u.pathname])),Us(u)}function _M(s,t={}){let i=ct.useContext(qv);on(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=n0("useViewTransitionState"),l=Ko(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=ca(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ca(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Zu(l.pathname,f)!=null||Zu(l.pathname,u)!=null}[...$S];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hd="176",ws={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vM=0,F_=1,xM=2,i0=1,yM=2,ia=3,Qa=0,Vn=1,aa=2,Za=0,Cs=1,H_=2,G_=3,V_=4,SM=5,br=100,MM=101,EM=102,TM=103,bM=104,AM=200,RM=201,wM=202,CM=203,Yh=204,qh=205,DM=206,UM=207,LM=208,NM=209,OM=210,PM=211,IM=212,zM=213,BM=214,jh=0,Zh=1,Kh=2,Ls=3,Qh=4,Jh=5,$h=6,td=7,a0=0,FM=1,HM=2,Ka=0,GM=1,VM=2,kM=3,XM=4,WM=5,YM=6,qM=7,r0=300,Ns=301,Os=302,ed=303,nd=304,nc=306,id=1e3,Rr=1001,ad=1002,Si=1003,jM=1004,du=1005,Di=1006,gh=1007,wr=1008,fa=1009,s0=1010,o0=1011,Wo=1012,Gd=1013,Dr=1014,ra=1015,Qo=1016,Vd=1017,kd=1018,Yo=1020,l0=35902,u0=1021,c0=1022,yi=1023,qo=1026,jo=1027,f0=1028,Xd=1029,h0=1030,Wd=1031,Yd=1033,Hu=33776,Gu=33777,Vu=33778,ku=33779,rd=35840,sd=35841,od=35842,ld=35843,ud=36196,cd=37492,fd=37496,hd=37808,dd=37809,pd=37810,md=37811,gd=37812,_d=37813,vd=37814,xd=37815,yd=37816,Sd=37817,Md=37818,Ed=37819,Td=37820,bd=37821,Xu=36492,Ad=36494,Rd=36495,d0=36283,wd=36284,Cd=36285,Dd=36286,ZM=3200,KM=3201,QM=0,JM=1,ja="",ci="srgb",Ps="srgb-linear",Ku="linear",Ie="srgb",hs=7680,k_=519,$M=512,tE=513,eE=514,p0=515,nE=516,iE=517,aE=518,rE=519,X_=35044,W_="300 es",sa=2e3,Qu=2001;class Or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,Ud=180/Math.PI;function Jo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function _e(s,t,i){return Math.max(t,Math.min(i,s))}function sE(s,t){return(s%t+t)%t}function _h(s,t,i){return(1-i)*s+i*t}function Fo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oE={DEG2RAD:Wu};class de{constructor(t=0,i=0){de.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,r,l,u,f,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,m,p)}set(t,i,r,l,u,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],S=r[5],E=r[8],T=l[0],y=l[3],_=l[6],O=l[1],N=l[4],C=l[7],B=l[2],G=l[5],z=l[8];return u[0]=f*T+d*O+m*B,u[3]=f*y+d*N+m*G,u[6]=f*_+d*C+m*z,u[1]=p*T+g*O+x*B,u[4]=p*y+g*N+x*G,u[7]=p*_+g*C+x*z,u[2]=v*T+S*O+E*B,u[5]=v*y+S*N+E*G,u[8]=v*_+S*C+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-r*u*g+r*d*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*f-d*p,v=d*m-g*u,S=p*u-f*m,E=i*x+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(l*p-g*r)*T,t[2]=(d*r-l*f)*T,t[3]=v*T,t[4]=(g*i-l*m)*T,t[5]=(l*u-d*i)*T,t[6]=S*T,t[7]=(r*m-p*i)*T,t[8]=(f*i-r*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new se;function m0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ju(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lE(){const s=Ju("canvas");return s.style.display="block",s}const Y_={};function Yu(s){s in Y_||(Y_[s]=!0,console.warn(s))}function uE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function cE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const q_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hE(){const s={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ie&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ie&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Ku:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ps]:{primaries:t,whitePoint:r,transfer:Ku,toXYZ:q_,fromXYZ:j_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:q_,fromXYZ:j_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const Ae=hE();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ds;class dE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ds===void 0&&(ds=Ju("canvas")),ds.width=t.width,ds.height=t.height;const l=ds.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ju("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ua(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pE=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(xh(l[f].image)):u.push(xh(l[f]))}else u=xh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function xh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mE=0;class kn extends Or{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Rr,l=Rr,u=Di,f=wr,d=yi,m=fa,p=kn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Jo(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==r0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case id:t.x=t.x-Math.floor(t.x);break;case Rr:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case id:t.y=t.y-Math.floor(t.y);break;case Rr:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=r0;kn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],S=m[5],E=m[9],T=m[2],y=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,C=(S+1)/2,B=(_+1)/2,G=(g+v)/4,z=(x+T)/4,X=(E+y)/4;return N>C&&N>B?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=z/r):C>B?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=G/l,u=X/l):B<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),r=z/u,l=X/u),this.set(r,l,u,i),this}let O=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(y-E)/O,this.y=(x-T)/O,this.z=(v-g)/O,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gE extends Or{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new kn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends gE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class g0 extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _E extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(x!==T||m!==v||p!==S||g!==E){let y=1-d;const _=m*v+p*S+g*E+x*T,O=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const B=Math.sqrt(N),G=Math.atan2(B,_*O);y=Math.sin(y*G)/B,d=Math.sin(d*G)/B}const C=d*O;if(m=m*y+v*C,p=p*y+S*C,g=g*y+E*C,x=x*y+T*C,y===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=B,p*=B,g*=B,x*=B}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[f],v=u[f+1],S=u[f+2],E=u[f+3];return t[i]=d*E+g*x+m*S-p*v,t[i+1]=m*E+g*v+p*x-d*S,t[i+2]=p*E+g*S+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),S=m(l/2),E=m(u/2);switch(f){case"XYZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"YXZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"ZXY":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"ZYX":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"YZX":this._x=v*g*x+p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x-v*S*E;break;case"XZY":this._x=v*g*x-p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(u-p)*S,this._z=(f-l)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+p)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-l)/S,this._x=(u+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-u*m,this._y=l*g+f*m+u*d-r*p,this._z=u*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,i=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),g=2*(d*i-u*l),x=2*(u*r-f*i);return this.x=i+m*p+f*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yh.copy(this).projectOnVector(t),this.sub(yh)}reflect(t){return this.sub(yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yh=new nt,Z_=new Lr;class $o{constructor(t=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,gi):gi.fromBufferAttribute(u,f),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pu.copy(r.boundingBox)),pu.applyMatrix4(t.matrixWorld),this.union(pu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),mu.subVectors(this.max,Ho),ps.subVectors(t.a,Ho),ms.subVectors(t.b,Ho),gs.subVectors(t.c,Ho),Ga.subVectors(ms,ps),Va.subVectors(gs,ms),vr.subVectors(ps,gs);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-vr.z,vr.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,vr.z,0,-vr.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-vr.y,vr.x,0];return!Sh(i,ps,ms,gs,mu)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,ps,ms,gs,mu))?!1:(gu.crossVectors(Ga,Va),i=[gu.x,gu.y,gu.z],Sh(i,ps,ms,gs,mu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],gi=new nt,pu=new $o,ps=new nt,ms=new nt,gs=new nt,Ga=new nt,Va=new nt,vr=new nt,Ho=new nt,mu=new nt,gu=new nt,xr=new nt;function Sh(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){xr.fromArray(s,u);const d=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),g=r.dot(xr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const vE=new $o,Go=new nt,Mh=new nt;class ic{constructor(t=new nt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(Mh)),this.expandByPoint(Go.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new nt,Eh=new nt,_u=new nt,ka=new nt,Th=new nt,vu=new nt,bh=new nt;class jd{constructor(t=new nt,i=new nt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Eh.copy(t).add(i).multiplyScalar(.5),_u.copy(i).sub(t).normalize(),ka.copy(this.origin).sub(Eh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(_u),d=ka.dot(this.direction),m=-ka.dot(_u),p=ka.lengthSq(),g=Math.abs(1-f*f);let x,v,S,E;if(g>0)if(x=f*m-d,v=f*d-m,E=u*g,x>=0)if(v>=-E)if(v<=E){const T=1/g;x*=T,v*=T,S=x*(x+f*v+2*d)+v*(f*x+v+2*m)+p}else v=u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-f*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),S=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),S=v*(v+2*m)+p):(x=Math.max(0,-(f*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),S=-x*x+v*(v+2*m)+p);else v=f>0?-u:u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Eh).addScaledVector(_u,v),S}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(u=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,u){Th.subVectors(i,t),vu.subVectors(r,t),bh.crossVectors(Th,vu);let f=this.direction.dot(bh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ka.subVectors(this.origin,t);const m=d*this.direction.dot(vu.crossVectors(ka,vu));if(m<0)return null;const p=d*this.direction.dot(Th.cross(ka));if(p<0||m+p>f)return null;const g=-d*ka.dot(bh);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,r,l,u,f,d,m,p,g,x,v,S,E,T,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,m,p,g,x,v,S,E,T,y)}set(t,i,r,l,u,f,d,m,p,g,x,v,S,E,T,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=S,_[7]=E,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),u=1/_s.setFromMatrixColumn(t,1).length(),f=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=f*g,S=f*x,E=d*g,T=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=v-T*p,i[9]=-d*m,i[2]=T-v*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,S=m*x,E=p*g,T=p*x;i[0]=v+T*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*x,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=T+v*d,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,S=m*x,E=p*g,T=p*x;i[0]=v-T*d,i[4]=-f*x,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=T-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,S=f*x,E=d*g,T=d*x;i[0]=m*g,i[4]=E*p-S,i[8]=v*p+T,i[1]=m*x,i[5]=T*p+v,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,S=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-v*x,i[8]=E*x+S,i[1]=x,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*x+E,i[10]=v-T*x}else if(t.order==="XZY"){const v=f*m,S=f*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+T,i[5]=f*g,i[9]=S*x-E,i[2]=E*x-S,i[6]=d*g,i[10]=T*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xE,t,yE)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Xa.crossVectors(r,$n),Xa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Xa.crossVectors(r,$n)),Xa.normalize(),xu.crossVectors($n,Xa),l[0]=Xa.x,l[4]=xu.x,l[8]=$n.x,l[1]=Xa.y,l[5]=xu.y,l[9]=$n.y,l[2]=Xa.z,l[6]=xu.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],S=r[13],E=r[2],T=r[6],y=r[10],_=r[14],O=r[3],N=r[7],C=r[11],B=r[15],G=l[0],z=l[4],X=l[8],D=l[12],w=l[1],V=l[5],ut=l[9],st=l[13],xt=l[2],pt=l[6],I=l[10],Z=l[14],q=l[3],Et=l[7],L=l[11],$=l[15];return u[0]=f*G+d*w+m*xt+p*q,u[4]=f*z+d*V+m*pt+p*Et,u[8]=f*X+d*ut+m*I+p*L,u[12]=f*D+d*st+m*Z+p*$,u[1]=g*G+x*w+v*xt+S*q,u[5]=g*z+x*V+v*pt+S*Et,u[9]=g*X+x*ut+v*I+S*L,u[13]=g*D+x*st+v*Z+S*$,u[2]=E*G+T*w+y*xt+_*q,u[6]=E*z+T*V+y*pt+_*Et,u[10]=E*X+T*ut+y*I+_*L,u[14]=E*D+T*st+y*Z+_*$,u[3]=O*G+N*w+C*xt+B*q,u[7]=O*z+N*V+C*pt+B*Et,u[11]=O*X+N*ut+C*I+B*L,u[15]=O*D+N*st+C*Z+B*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],S=t[14],E=t[3],T=t[7],y=t[11],_=t[15];return E*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*S-r*m*S)+T*(+i*m*S-i*p*v+u*f*v-l*f*S+l*p*g-u*m*g)+y*(+i*p*x-i*d*S-u*f*x+r*f*S+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*f*x-r*f*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],S=t[11],E=t[12],T=t[13],y=t[14],_=t[15],O=x*y*p-T*v*p+T*m*S-d*y*S-x*m*_+d*v*_,N=E*v*p-g*y*p-E*m*S+f*y*S+g*m*_-f*v*_,C=g*T*p-E*x*p+E*d*S-f*T*S-g*d*_+f*x*_,B=E*x*m-g*T*m-E*d*v+f*T*v+g*d*y-f*x*y,G=i*O+r*N+l*C+u*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return t[0]=O*z,t[1]=(T*v*u-x*y*u-T*l*S+r*y*S+x*l*_-r*v*_)*z,t[2]=(d*y*u-T*m*u+T*l*p-r*y*p-d*l*_+r*m*_)*z,t[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*S-r*m*S)*z,t[4]=N*z,t[5]=(g*y*u-E*v*u+E*l*S-i*y*S-g*l*_+i*v*_)*z,t[6]=(E*m*u-f*y*u-E*l*p+i*y*p+f*l*_-i*m*_)*z,t[7]=(f*v*u-g*m*u+g*l*p-i*v*p-f*l*S+i*m*S)*z,t[8]=C*z,t[9]=(E*x*u-g*T*u-E*r*S+i*T*S+g*r*_-i*x*_)*z,t[10]=(f*T*u-E*d*u+E*r*p-i*T*p-f*r*_+i*d*_)*z,t[11]=(g*d*u-f*x*u-g*r*p+i*x*p+f*r*S-i*d*S)*z,t[12]=B*z,t[13]=(g*T*l-E*x*l+E*r*v-i*T*v-g*r*y+i*x*y)*z,t[14]=(E*d*l-f*T*l-E*r*m+i*T*m+f*r*y-i*d*y)*z,t[15]=(f*x*l-g*d*l+g*r*m-i*x*m-f*r*v+i*d*v)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,d=t.y,m=t.z,p=u*f,g=u*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,g=f+f,x=d+d,v=u*p,S=u*g,E=u*x,T=f*g,y=f*x,_=d*x,O=m*p,N=m*g,C=m*x,B=r.x,G=r.y,z=r.z;return l[0]=(1-(T+_))*B,l[1]=(S+C)*B,l[2]=(E-N)*B,l[3]=0,l[4]=(S-C)*G,l[5]=(1-(v+_))*G,l[6]=(y+O)*G,l[7]=0,l[8]=(E+N)*z,l[9]=(y-O)*z,l[10]=(1-(v+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),d=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,g=1/f,x=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),r.x=u,r.y=f,r.z=d,this}makePerspective(t,i,r,l,u,f,d=sa){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let S,E;if(d===sa)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Qu)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,f,d=sa){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(f-u),v=(i+t)*p,S=(r+l)*g;let E,T;if(d===sa)E=(f+u)*x,T=-2*x;else if(d===Qu)E=u*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new nt,_i=new tn,xE=new nt(0,0,0),yE=new nt(1,1,1),Xa=new nt,xu=new nt,$n=new nt,K_=new tn,Q_=new Lr;class ha{constructor(t=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_e(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return K_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let SE=0;const J_=new nt,vs=new Lr,ta=new tn,yu=new nt,Vo=new nt,ME=new nt,EE=new Lr,$_=new nt(1,0,0),tv=new nt(0,1,0),ev=new nt(0,0,1),nv={type:"added"},TE={type:"removed"},xs={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Xn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new nt,i=new ha,r=new Lr,l=new nt(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new se}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis($_,t)}rotateY(t){return this.rotateOnAxis(tv,t)}rotateZ(t){return this.rotateOnAxis(ev,t)}translateOnAxis(t,i){return J_.copy(t).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($_,t)}translateY(t){return this.translateOnAxis(tv,t)}translateZ(t){return this.translateOnAxis(ev,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?yu.copy(t):yu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Vo,yu,this.up):ta.lookAt(yu,Vo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ta),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nv),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(TE),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nv),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,ME),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,EE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),x=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new nt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new nt,ea=new nt,Rh=new nt,na=new nt,ys=new nt,Ss=new nt,iv=new nt,wh=new nt,Ch=new nt,Dh=new nt,Uh=new $e,Lh=new $e,Nh=new $e;class xi{constructor(t=new nt,i=new nt,r=new nt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){vi.subVectors(l,i),ea.subVectors(r,i),Rh.subVectors(t,i);const f=vi.dot(vi),d=vi.dot(ea),m=vi.dot(Rh),p=ea.dot(ea),g=ea.dot(Rh),x=f*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,S=(p*m-d*g)*v,E=(f*g-d*m)*v;return u.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,u,f,d,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(f,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,r),Nh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Uh,u.x),f.addScaledVector(Lh,u.y),f.addScaledVector(Nh,u.z),f}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),ea.subVectors(t,i),vi.cross(ea).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),vi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,d;ys.subVectors(l,r),Ss.subVectors(u,r),wh.subVectors(t,r);const m=ys.dot(wh),p=Ss.dot(wh);if(m<=0&&p<=0)return i.copy(r);Ch.subVectors(t,l);const g=ys.dot(Ch),x=Ss.dot(Ch);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ys,f);Dh.subVectors(t,u);const S=ys.dot(Dh),E=Ss.dot(Dh);if(E>=0&&S<=E)return i.copy(u);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ss,d);const y=g*E-S*x;if(y<=0&&x-g>=0&&S-E>=0)return iv.subVectors(u,l),d=(x-g)/(x-g+(S-E)),i.copy(l).addScaledVector(iv,d);const _=1/(y+T+v);return f=T*_,d=v*_,i.copy(r).addScaledVector(ys,f).addScaledVector(Ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Oh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=sE(t,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Oh(f,u,t+1/3),this.g=Oh(f,u,t),this.b=Oh(f,u,t-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=v0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Ae.fromWorkingColorSpace(Un.copy(this),t),Math.round(_e(Un.r*255,0,255))*65536+Math.round(_e(Un.g*255,0,255))*256+Math.round(_e(Un.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const x=f-d;switch(p=g<=.5?x/(f+d):x/(2-f-d),f){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ci){Ae.fromWorkingColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Wa),this.setHSL(Wa.h+t,Wa.s+i,Wa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Wa),t.getHSL(Su);const r=_h(Wa.h,Su.h,i),l=_h(Wa.s,Su.s,i),u=_h(Wa.l,Su.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new we;we.NAMES=v0;let bE=0;class tl extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Cs,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=qh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==Qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==qh&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class x0 extends tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new nt,Mu=new de;let AE=0;class hi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=X_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mu.fromBufferAttribute(this,i),Mu.applyMatrix3(t),this.setXY(i,Mu.x,Mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==X_&&(t.usage=this.usage),t}}class y0 extends hi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class S0 extends hi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Cr extends hi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let RE=0;const ui=new tn,Ph=new Xn,Ms=new nt,ti=new $o,ko=new $o,yn=new nt;class pa extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(m0(t)?S0:y0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Cr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];ko.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ti.min,ko.min),ti.expandByPoint(yn),yn.addVectors(ti.max,ko.max),ti.expandByPoint(yn)):(ti.expandByPoint(ko.min),ti.expandByPoint(ko.max))}ti.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(Ms.fromBufferAttribute(t,p),yn.add(Ms)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new nt,m[X]=new nt;const p=new nt,g=new nt,x=new nt,v=new de,S=new de,E=new de,T=new nt,y=new nt;function _(X,D,w){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,w),v.fromBufferAttribute(u,X),S.fromBufferAttribute(u,D),E.fromBufferAttribute(u,w),g.sub(p),x.sub(p),S.sub(v),E.sub(v);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(V),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),d[X].add(T),d[D].add(T),d[w].add(T),m[X].add(y),m[D].add(y),m[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,D=O.length;X<D;++X){const w=O[X],V=w.start,ut=w.count;for(let st=V,xt=V+ut;st<xt;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const N=new nt,C=new nt,B=new nt,G=new nt;function z(X){B.fromBufferAttribute(l,X),G.copy(B);const D=d[X];N.copy(D),N.sub(B.multiplyScalar(B.dot(D))).normalize(),C.crossVectors(G,D);const V=C.dot(m[X])<0?-1:1;f.setXYZW(X,N.x,N.y,N.z,V)}for(let X=0,D=O.length;X<D;++X){const w=O[X],V=w.start,ut=w.count;for(let st=V,xt=V+ut;st<xt;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new nt,u=new nt,f=new nt,d=new nt,m=new nt,p=new nt,g=new nt,x=new nt;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),T=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let _=0;_<g;_++)v[E++]=p[S++]}return new hi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],S=t(v,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const av=new tn,yr=new jd,Eu=new ic,rv=new nt,Tu=new nt,bu=new nt,Au=new nt,Ih=new nt,Ru=new nt,sv=new nt,wu=new nt;class oa extends Xn{constructor(t=new pa,i=new x0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Ru.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(Ih.fromBufferAttribute(x,t),f?Ru.addScaledVector(Ih,g):Ru.addScaledVector(Ih.sub(i),g))}i.add(Ru)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(u),yr.copy(t.ray).recast(t.near),!(Eu.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Eu,rv)===null||yr.origin.distanceToSquared(rv)>(t.far-t.near)**2))&&(av.copy(u).invert(),yr.copy(t.ray).applyMatrix4(av),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,yr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=f[y.materialIndex],O=Math.max(y.start,S.start),N=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,B=N;C<B;C+=3){const G=d.getX(C),z=d.getX(C+1),X=d.getX(C+2);l=Cu(this,_,t,r,p,g,x,G,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const O=d.getX(y),N=d.getX(y+1),C=d.getX(y+2);l=Cu(this,f,t,r,p,g,x,O,N,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const y=v[E],_=f[y.materialIndex],O=Math.max(y.start,S.start),N=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let C=O,B=N;C<B;C+=3){const G=C,z=C+1,X=C+2;l=Cu(this,_,t,r,p,g,x,G,z,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let y=E,_=T;y<_;y+=3){const O=y,N=y+1,C=y+2;l=Cu(this,f,t,r,p,g,x,O,N,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function wE(s,t,i,r,l,u,f,d){let m;if(t.side===Vn?m=r.intersectTriangle(f,u,l,!0,d):m=r.intersectTriangle(l,u,f,t.side===Qa,d),m===null)return null;wu.copy(d),wu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(wu);return p<i.near||p>i.far?null:{distance:p,point:wu.clone(),object:s}}function Cu(s,t,i,r,l,u,f,d,m,p){s.getVertexPosition(d,Tu),s.getVertexPosition(m,bu),s.getVertexPosition(p,Au);const g=wE(s,t,i,r,Tu,bu,Au,sv);if(g){const x=new nt;xi.getBarycoord(sv,Tu,bu,Au,x),l&&(g.uv=xi.getInterpolatedAttribute(l,d,m,p,x,new de)),u&&(g.uv1=xi.getInterpolatedAttribute(u,d,m,p,x,new de)),f&&(g.normal=xi.getInterpolatedAttribute(f,d,m,p,x,new nt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new nt,materialIndex:0};xi.getNormal(Tu,bu,Au,v.normal),g.face=v,g.barycoord=x}return g}class el extends pa{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,t,f,u,0),E("z","y","x",1,-1,r,i,-t,f,u,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Cr(p,3)),this.setAttribute("normal",new Cr(g,3)),this.setAttribute("uv",new Cr(x,2));function E(T,y,_,O,N,C,B,G,z,X,D){const w=C/z,V=B/X,ut=C/2,st=B/2,xt=G/2,pt=z+1,I=X+1;let Z=0,q=0;const Et=new nt;for(let L=0;L<I;L++){const $=L*V-st;for(let yt=0;yt<pt;yt++){const Mt=yt*w-ut;Et[T]=Mt*O,Et[y]=$*N,Et[_]=xt,p.push(Et.x,Et.y,Et.z),Et[T]=0,Et[y]=0,Et[_]=G>0?1:-1,g.push(Et.x,Et.y,Et.z),x.push(yt/z),x.push(1-L/X),Z+=1}}for(let L=0;L<X;L++)for(let $=0;$<z;$++){const yt=v+$+pt*L,Mt=v+$+pt*(L+1),Q=v+($+1)+pt*(L+1),mt=v+($+1)+pt*L;m.push(yt,Mt,mt),m.push(Mt,Q,mt),q+=6}d.addGroup(S,q,D),S+=q,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)t[l]=r[l]}return t}function CE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function M0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const DE={clone:Is,merge:Nn};var UE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UE,this.fragmentShader=LE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=CE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class E0 extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new nt,ov=new de,lv=new de;class fi extends E0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,i){return this.getViewBounds(t,ov,lv),i.subVectors(lv,ov)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class NE extends Xn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Es,Ts,t,i);l.layers=this.layers,this.add(l);const u=new fi(Es,Ts,t,i);u.layers=this.layers,this.add(u);const f=new fi(Es,Ts,t,i);f.layers=this.layers,this.add(f);const d=new fi(Es,Ts,t,i);d.layers=this.layers,this.add(d);const m=new fi(Es,Ts,t,i);m.layers=this.layers,this.add(m);const p=new fi(Es,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(t===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Qu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class T0 extends kn{constructor(t=[],i=Ns,r,l,u,f,d,m,p,g){super(t,i,r,l,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OE extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new T0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new el(5,5,5),u=new Ja({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Za});u.uniforms.tEquirect.value=i;const f=new oa(l,u),d=i.minFilter;return i.minFilter===wr&&(i.minFilter=Di),new NE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class Du extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const y=i.getJointPose(T,r),_=this._getHandJoint(p,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Du;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class IE extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new nt,zE=new nt,BE=new se;class qa{constructor(t=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Bh.subVectors(r,i).cross(zE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||BE.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new ic,Uu=new nt;class b0{constructor(t=new qa,i=new qa,r=new qa,l=new qa,u=new qa,f=new qa){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=sa){const r=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],S=l[8],E=l[9],T=l[10],y=l[11],_=l[12],O=l[13],N=l[14],C=l[15];if(r[0].setComponents(m-u,v-p,y-S,C-_).normalize(),r[1].setComponents(m+u,v+p,y+S,C+_).normalize(),r[2].setComponents(m+f,v+g,y+E,C+O).normalize(),r[3].setComponents(m-f,v-g,y-E,C-O).normalize(),r[4].setComponents(m-d,v-x,y-T,C-N).normalize(),i===sa)r[5].setComponents(m+d,v+x,y+T,C+N).normalize();else if(i===Qu)r[5].setComponents(d,x,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uu.x=l.normal.x>0?t.max.x:t.min.x,Uu.y=l.normal.y>0?t.max.y:t.min.y,Uu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class A0 extends tl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uv=new tn,Ld=new jd,Lu=new ic,Nu=new nt;class FE extends Xn{constructor(t=new pa,i=new A0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lu.copy(r.boundingSphere),Lu.applyMatrix4(l),Lu.radius+=u,t.ray.intersectsSphere(Lu)===!1)return;uv.copy(l).invert(),Ld.copy(t.ray).applyMatrix4(uv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=v,T=S;E<T;E++){const y=p.getX(E);Nu.fromBufferAttribute(x,y),cv(Nu,y,m,l,t,i,this)}}else{const v=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let E=v,T=S;E<T;E++)Nu.fromBufferAttribute(x,E),cv(Nu,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function cv(s,t,i,r,l,u,f){const d=Ld.distanceSqToPoint(s);if(d<i){const m=new nt;Ld.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class R0 extends kn{constructor(t,i,r=Dr,l,u,f,d=Si,m=Si,p,g=qo){if(g!==qo&&g!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,f,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ac extends pa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,S=[],E=[],T=[],y=[];for(let _=0;_<g;_++){const O=_*v-f;for(let N=0;N<p;N++){const C=N*x-u;E.push(C,-O,0),T.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<d;O++){const N=O+p*_,C=O+p*(_+1),B=O+1+p*(_+1),G=O+1+p*_;S.push(N,C,G),S.push(C,B,G)}this.setIndex(S),this.setAttribute("position",new Cr(E,3)),this.setAttribute("normal",new Cr(T,3)),this.setAttribute("uv",new Cr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.width,t.height,t.widthSegments,t.heightSegments)}}class HE extends tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class GE extends tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class VE extends E0{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kE extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class XE extends Or{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function hv(s,t,i,r){const l=WE(r);switch(i){case u0:return s*t;case f0:return s*t/l.components*l.byteLength;case Xd:return s*t/l.components*l.byteLength;case h0:return s*t*2/l.components*l.byteLength;case Wd:return s*t*2/l.components*l.byteLength;case c0:return s*t*3/l.components*l.byteLength;case yi:return s*t*4/l.components*l.byteLength;case Yd:return s*t*4/l.components*l.byteLength;case Hu:case Gu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vu:case ku:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:case ld:return Math.max(s,16)*Math.max(t,8)/4;case rd:case od:return Math.max(s,8)*Math.max(t,8)/2;case ud:case cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case _d:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case vd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Md:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xu:case Ad:case Rd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case d0:case wd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cd:case Dd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WE(s){switch(s){case fa:case s0:return{byteLength:1,components:1};case Wo:case o0:case Qo:return{byteLength:2,components:1};case Vd:case kd:return{byteLength:2,components:4};case Dr:case Gd:case ra:return{byteLength:4,components:1};case l0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function w0(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function YE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var qE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_T=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ET="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ub=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$b=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_A=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:qE,alphahash_pars_fragment:jE,alphamap_fragment:ZE,alphamap_pars_fragment:KE,alphatest_fragment:QE,alphatest_pars_fragment:JE,aomap_fragment:$E,aomap_pars_fragment:tT,batching_pars_vertex:eT,batching_vertex:nT,begin_vertex:iT,beginnormal_vertex:aT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:oT,clipping_planes_fragment:lT,clipping_planes_pars_fragment:uT,clipping_planes_pars_vertex:cT,clipping_planes_vertex:fT,color_fragment:hT,color_pars_fragment:dT,color_pars_vertex:pT,color_vertex:mT,common:gT,cube_uv_reflection_fragment:_T,defaultnormal_vertex:vT,displacementmap_pars_vertex:xT,displacementmap_vertex:yT,emissivemap_fragment:ST,emissivemap_pars_fragment:MT,colorspace_fragment:ET,colorspace_pars_fragment:TT,envmap_fragment:bT,envmap_common_pars_fragment:AT,envmap_pars_fragment:RT,envmap_pars_vertex:wT,envmap_physical_pars_fragment:FT,envmap_vertex:CT,fog_vertex:DT,fog_pars_vertex:UT,fog_fragment:LT,fog_pars_fragment:NT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:PT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:zT,lights_pars_begin:BT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:VT,lights_phong_pars_fragment:kT,lights_physical_fragment:XT,lights_physical_pars_fragment:WT,lights_fragment_begin:YT,lights_fragment_maps:qT,lights_fragment_end:jT,logdepthbuf_fragment:ZT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:QT,logdepthbuf_vertex:JT,map_fragment:$T,map_pars_fragment:tb,map_particle_fragment:eb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:ab,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:ub,normal_fragment_begin:cb,normal_fragment_maps:fb,normal_pars_fragment:hb,normal_pars_vertex:db,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:gb,clearcoat_normal_fragment_maps:_b,clearcoat_pars_fragment:vb,iridescence_pars_fragment:xb,opaque_fragment:yb,packing:Sb,premultiplied_alpha_fragment:Mb,project_vertex:Eb,dithering_fragment:Tb,dithering_pars_fragment:bb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Cb,shadowmap_vertex:Db,shadowmask_pars_fragment:Ub,skinbase_vertex:Lb,skinning_pars_vertex:Nb,skinning_vertex:Ob,skinnormal_vertex:Pb,specularmap_fragment:Ib,specularmap_pars_fragment:zb,tonemapping_fragment:Bb,tonemapping_pars_fragment:Fb,transmission_fragment:Hb,transmission_pars_fragment:Gb,uv_pars_fragment:Vb,uv_pars_vertex:kb,uv_vertex:Xb,worldpos_vertex:Wb,background_vert:Yb,background_frag:qb,backgroundCube_vert:jb,backgroundCube_frag:Zb,cube_vert:Kb,cube_frag:Qb,depth_vert:Jb,depth_frag:$b,distanceRGBA_vert:tA,distanceRGBA_frag:eA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:uA,meshmatcap_vert:cA,meshmatcap_frag:fA,meshnormal_vert:hA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:vA,meshtoon_frag:xA,points_vert:yA,points_frag:SA,shadow_vert:MA,shadow_frag:EA,sprite_vert:TA,sprite_frag:bA},Ut={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Ou={r:0,b:0,g:0},Mr=new ha,AA=new tn;function RA(s,t,i,r,l,u,f){const d=new we(0);let m=u===!0?0:1,p,g,x=null,v=0,S=null;function E(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?i:t).get(C)),C}function T(N){let C=!1;const B=E(N);B===null?_(d,m):B&&B.isColor&&(_(B,1),C=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,C){const B=E(C);B&&(B.isCubeTexture||B.mapping===nc)?(g===void 0&&(g=new oa(new el(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Is(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Mr.copy(C.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(Mr)),g.material.toneMapped=Ae.getTransfer(B.colorSpace)!==Ie,(x!==B||v!==B.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=B,v=B.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new oa(new ac(2,2),new Ja({name:"BackgroundMaterial",uniforms:Is(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(B.colorSpace)!==Ie,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(x!==B||v!==B.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=B,v=B.version,S=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,C){N.getRGB(Ou,M0(s)),r.buffers.color.setClear(Ou.r,Ou.g,Ou.b,C,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,C=1){d.set(N),m=C,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:T,addToRenderList:y,dispose:O}}function wA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,f=!1;function d(w,V,ut,st,xt){let pt=!1;const I=x(st,ut,V);u!==I&&(u=I,p(u.object)),pt=S(w,st,ut,xt),pt&&E(w,st,ut,xt),xt!==null&&t.update(xt,s.ELEMENT_ARRAY_BUFFER),(pt||f)&&(f=!1,C(w,V,ut,st),xt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(xt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function x(w,V,ut){const st=ut.wireframe===!0;let xt=r[w.id];xt===void 0&&(xt={},r[w.id]=xt);let pt=xt[V.id];pt===void 0&&(pt={},xt[V.id]=pt);let I=pt[st];return I===void 0&&(I=v(m()),pt[st]=I),I}function v(w){const V=[],ut=[],st=[];for(let xt=0;xt<i;xt++)V[xt]=0,ut[xt]=0,st[xt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ut,attributeDivisors:st,object:w,attributes:{},index:null}}function S(w,V,ut,st){const xt=u.attributes,pt=V.attributes;let I=0;const Z=ut.getAttributes();for(const q in Z)if(Z[q].location>=0){const L=xt[q];let $=pt[q];if($===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;I++}return u.attributesNum!==I||u.index!==st}function E(w,V,ut,st){const xt={},pt=V.attributes;let I=0;const Z=ut.getAttributes();for(const q in Z)if(Z[q].location>=0){let L=pt[q];L===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),xt[q]=$,I++}u.attributes=xt,u.attributesNum=I,u.index=st}function T(){const w=u.newAttributes;for(let V=0,ut=w.length;V<ut;V++)w[V]=0}function y(w){_(w,0)}function _(w,V){const ut=u.newAttributes,st=u.enabledAttributes,xt=u.attributeDivisors;ut[w]=1,st[w]===0&&(s.enableVertexAttribArray(w),st[w]=1),xt[w]!==V&&(s.vertexAttribDivisor(w,V),xt[w]=V)}function O(){const w=u.newAttributes,V=u.enabledAttributes;for(let ut=0,st=V.length;ut<st;ut++)V[ut]!==w[ut]&&(s.disableVertexAttribArray(ut),V[ut]=0)}function N(w,V,ut,st,xt,pt,I){I===!0?s.vertexAttribIPointer(w,V,ut,xt,pt):s.vertexAttribPointer(w,V,ut,st,xt,pt)}function C(w,V,ut,st){T();const xt=st.attributes,pt=ut.getAttributes(),I=V.defaultAttributeValues;for(const Z in pt){const q=pt[Z];if(q.location>=0){let Et=xt[Z];if(Et===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){const L=Et.normalized,$=Et.itemSize,yt=t.get(Et);if(yt===void 0)continue;const Mt=yt.buffer,Q=yt.type,mt=yt.bytesPerElement,St=Q===s.INT||Q===s.UNSIGNED_INT||Et.gpuType===Gd;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,Lt=Rt.stride,oe=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<q.locationSize;Kt++)_(q.location+Kt,Rt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Kt=0;Kt<q.locationSize;Kt++)y(q.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Kt=0;Kt<q.locationSize;Kt++)N(q.location+Kt,$/q.locationSize,Q,L,Lt*mt,(oe+$/q.locationSize*Kt)*mt,St)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<q.locationSize;Rt++)_(q.location+Rt,Et.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)y(q.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Rt=0;Rt<q.locationSize;Rt++)N(q.location+Rt,$/q.locationSize,Q,L,$*mt,$/q.locationSize*Rt*mt,St)}}else if(I!==void 0){const L=I[Z];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(q.location,L);break;case 3:s.vertexAttrib3fv(q.location,L);break;case 4:s.vertexAttrib4fv(q.location,L);break;default:s.vertexAttrib1fv(q.location,L)}}}}O()}function B(){X();for(const w in r){const V=r[w];for(const ut in V){const st=V[ut];for(const xt in st)g(st[xt].object),delete st[xt];delete V[ut]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const ut in V){const st=V[ut];for(const xt in st)g(st[xt].object),delete st[xt];delete V[ut]}delete r[w.id]}function z(w){for(const V in r){const ut=r[V];if(ut[w.id]===void 0)continue;const st=ut[w.id];for(const xt in st)g(st[xt].object),delete st[xt];delete ut[w.id]}}function X(){D(),f=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function CA(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];i.update(S,r,1)}function m(p,g,x,v){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=g[T]*v[T];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function DA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==yi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const X=z===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==fa&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ra&&!X)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:B,maxSamples:G}}function UA(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new qa,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||l;return l=v,r=x.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const O=u?0:r,N=O*4;let C=_.clippingState||null;m.value=C,C=g(E,v,N,S);for(let B=0;B!==N;++B)C[B]=i[B];_.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=m.value,E!==!0||y===null){const _=S+T*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,C=S;N!==T;++N,C+=4)f.copy(x[N]).applyMatrix4(O,d),f.normal.toArray(y,C),y[C+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function LA(s){let t=new WeakMap;function i(f,d){return d===ed?f.mapping=Ns:d===nd&&(f.mapping=Os),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ed||d===nd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new OE(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Rs=4,dv=[.125,.215,.35,.446,.526,.582],Ar=20,Fh=new VE,pv=new we;let Hh=null,Gh=0,Vh=0,kh=!1;const Tr=(1+Math.sqrt(5))/2,bs=1/Tr,mv=[new nt(-Tr,bs,0),new nt(Tr,bs,0),new nt(-bs,0,Tr),new nt(bs,0,Tr),new nt(0,Tr,-bs),new nt(0,Tr,bs),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],NA=new nt;class gv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=NA}=u;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=kh,t.scissorTest=!1,Pu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Qo,format:yi,colorSpace:Ps,depthBuffer:!1},l=_v(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_v(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(u)),this._blurMaterial=PA(u,t,i)}return l}_compileMaterial(t){const i=new oa(this._lodPlanes[0],t);this._renderer.compile(i,Fh)}_sceneToCubeUV(t,i,r,l,u){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(pv),x.toneMapping=Ka,x.autoClear=!1;const E=new x0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),T=new oa(new el,E);let y=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,y=!0):(E.color.copy(pv),y=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const C=this._cubeSize;Pu(l,N*C,O>2?C:0,C,C),x.setRenderTarget(l),y&&x.render(T,m),x.render(t,m)}T.geometry.dispose(),T.material.dispose(),x.toneMapping=S,x.autoClear=v,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ns||t.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new oa(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Pu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Fh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=mv[(l-u-1)%mv.length];this._blur(t,u-1,u,f,d)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new oa(this._lodPlanes[l],p),v=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Ar-1),T=u/E,y=isFinite(u)?1+Math.floor(g*T):Ar;y>Ar&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const _=[];let O=0;for(let z=0;z<Ar;++z){const X=z/T,D=Math.exp(-X*X/2);_.push(D),z===0?O+=D:z<y&&(O+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/O;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-r;const C=this._sizeLods[l],B=3*C*(l>N-Rs?l-N+Rs:0),G=4*(this._cubeSize-C);Pu(i,B,G,3*C,2*C),m.setRenderTarget(i),m.render(x,Fh)}}function OA(s){const t=[],i=[],r=[];let l=s;const u=s-Rs+1+dv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Rs?m=dv[f-s+Rs-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,T=3,y=2,_=1,O=new Float32Array(T*E*S),N=new Float32Array(y*E*S),C=new Float32Array(_*E*S);for(let G=0;G<S;G++){const z=G%3*2/3-1,X=G>2?0:-1,D=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];O.set(D,T*E*G),N.set(v,y*E*G);const w=[G,G,G,G,G,G];C.set(w,_*E*G)}const B=new pa;B.setAttribute("position",new hi(O,T)),B.setAttribute("uv",new hi(N,y)),B.setAttribute("faceIndex",new hi(C,_)),t.push(B),l>Rs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function _v(s,t,i){const r=new Ur(s,t,i);return r.texture.mapping=nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function PA(s,t,i){const r=new Float32Array(Ar),l=new nt(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function vv(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function xv(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ed||m===nd,g=m===Ns||m===Os;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new gv(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new gv(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function zA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Yu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function BA(s,t,i,r){const l={},u=new WeakMap;function f(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=u.get(v);S&&(t.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function p(x){const v=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let N=0,C=O.length;N<C;N+=3){const B=O[N+0],G=O[N+1],z=O[N+2];v.push(B,G,G,z,z,B)}}else if(E!==void 0){const O=E.array;T=E.version;for(let N=0,C=O.length/3-1;N<C;N+=3){const B=N+0,G=N+1,z=N+2;v.push(B,G,G,z,z,B)}}else return;const y=new(m0(v)?S0:y0)(v,1);y.version=T;const _=u.get(x);_&&t.remove(_),u.set(x,y)}function g(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function FA(s,t,i){let r;function l(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function m(v,S){s.drawElements(r,S,u,v*f),i.update(S,r,1)}function p(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,v*f,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];i.update(y,r,1)}function x(v,S,E,T){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)p(v[_]/f,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,T,0,E);let _=0;for(let O=0;O<E;O++)_+=S[O]*T[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function HA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function GA(s,t,i){const r=new WeakMap,l=new $e;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let w=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let B=d.attributes.position.count*C,G=1;B>t.maxTextureSize&&(G=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const z=new Float32Array(B*G*4*x),X=new g0(z,B,G,x);X.type=ra,X.needsUpdate=!0;const D=C*4;for(let V=0;V<x;V++){const ut=_[V],st=O[V],xt=N[V],pt=B*G*4*V;for(let I=0;I<ut.count;I++){const Z=I*D;E===!0&&(l.fromBufferAttribute(ut,I),z[pt+Z+0]=l.x,z[pt+Z+1]=l.y,z[pt+Z+2]=l.z,z[pt+Z+3]=0),T===!0&&(l.fromBufferAttribute(st,I),z[pt+Z+4]=l.x,z[pt+Z+5]=l.y,z[pt+Z+6]=l.z,z[pt+Z+7]=0),y===!0&&(l.fromBufferAttribute(xt,I),z[pt+Z+8]=l.x,z[pt+Z+9]=l.y,z[pt+Z+10]=l.z,z[pt+Z+11]=xt.itemSize===4?l.w:1)}}v={count:x,texture:X,size:new de(B,G)},r.set(d,v),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function VA(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const C0=new kn,yv=new R0(1,1),D0=new g0,U0=new _E,L0=new T0,Sv=[],Mv=[],Ev=new Float32Array(16),Tv=new Float32Array(9),bv=new Float32Array(4);function Fs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=Sv[l];if(u===void 0&&(u=new Float32Array(l),Sv[l]=u),t!==0){r.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(u,d)}return u}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function rc(s,t){let i=Mv[t];i===void 0&&(i=new Int32Array(t),Mv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function kA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function XA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),pn(i,t)}}function WA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),pn(i,t)}}function YA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),pn(i,t)}}function qA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;bv.set(r),s.uniformMatrix2fv(this.addr,!1,bv),pn(i,r)}}function jA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Tv.set(r),s.uniformMatrix3fv(this.addr,!1,Tv),pn(i,r)}}function ZA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;Ev.set(r),s.uniformMatrix4fv(this.addr,!1,Ev),pn(i,r)}}function KA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function QA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),pn(i,t)}}function JA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),pn(i,t)}}function $A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),pn(i,t)}}function t1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function e1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),pn(i,t)}}function n1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),pn(i,t)}}function i1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),pn(i,t)}}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(yv.compareFunction=p0,u=yv):u=C0,i.setTexture2D(t||u,l)}function r1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||U0,l)}function s1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||L0,l)}function o1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||D0,l)}function l1(s){switch(s){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return YA;case 35674:return qA;case 35675:return jA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}function u1(s,t){s.uniform1fv(this.addr,t)}function c1(s,t){const i=Fs(t,this.size,2);s.uniform2fv(this.addr,i)}function f1(s,t){const i=Fs(t,this.size,3);s.uniform3fv(this.addr,i)}function h1(s,t){const i=Fs(t,this.size,4);s.uniform4fv(this.addr,i)}function d1(s,t){const i=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function p1(s,t){const i=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function m1(s,t){const i=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function g1(s,t){s.uniform1iv(this.addr,t)}function _1(s,t){s.uniform2iv(this.addr,t)}function v1(s,t){s.uniform3iv(this.addr,t)}function x1(s,t){s.uniform4iv(this.addr,t)}function y1(s,t){s.uniform1uiv(this.addr,t)}function S1(s,t){s.uniform2uiv(this.addr,t)}function M1(s,t){s.uniform3uiv(this.addr,t)}function E1(s,t){s.uniform4uiv(this.addr,t)}function T1(s,t,i){const r=this.cache,l=t.length,u=rc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||C0,u[f])}function b1(s,t,i){const r=this.cache,l=t.length,u=rc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||U0,u[f])}function A1(s,t,i){const r=this.cache,l=t.length,u=rc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||L0,u[f])}function R1(s,t,i){const r=this.cache,l=t.length,u=rc(i,l);dn(r,u)||(s.uniform1iv(this.addr,u),pn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||D0,u[f])}function w1(s){switch(s){case 5126:return u1;case 35664:return c1;case 35665:return f1;case 35666:return h1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class C1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=l1(i.type)}}class D1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w1(i.type)}}class U1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function Av(s,t){s.seq.push(t),s.map[t.id]=t}function L1(s,t,i){const r=s.name,l=r.length;for(Xh.lastIndex=0;;){const u=Xh.exec(r),f=Xh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Av(i,p===void 0?new C1(d,s,t):new D1(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new U1(d),Av(i,x)),i=x}}}class qu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);L1(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Rv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const N1=37297;let O1=0;function P1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const wv=new se;function I1(s){Ae._getMatrix(wv,Ae.workingColorSpace,s);const t=`mat3( ${wv.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(s)){case Ku:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Cv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+P1(s.getShaderSource(t),f)}else return l}function z1(s,t){const i=I1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function B1(s,t){let i;switch(t){case GM:i="Linear";break;case VM:i="Reinhard";break;case kM:i="Cineon";break;case XM:i="ACESFilmic";break;case YM:i="AgX";break;case qM:i="Neutral";break;case WM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Iu=new nt;function F1(){Ae.getLuminanceCoefficients(Iu);const s=Iu.x.toFixed(4),t=Iu.y.toFixed(4),i=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function G1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function V1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Xo(s){return s!==""}function Dv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(s){return s.replace(k1,W1)}const X1=new Map;function W1(s,t){let i=le[t];if(i===void 0){const r=X1.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Nd(i)}const Y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(s){return s.replace(Y1,q1)}function q1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Nv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===i0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function Z1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function Q1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case a0:t="ENVMAP_BLENDING_MULTIPLY";break;case FM:t="ENVMAP_BLENDING_MIX";break;case HM:t="ENVMAP_BLENDING_ADD";break}return t}function J1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function $1(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=j1(i),p=Z1(i),g=K1(i),x=Q1(i),v=J1(i),S=H1(i),E=G1(u),T=l.createProgram();let y,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(y=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?le.tonemapping_pars_fragment:"",i.toneMapping!==Ka?B1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,z1("linearToOutputTexel",i.outputColorSpace),F1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Nd(f),f=Dv(f,i),f=Uv(f,i),d=Nd(d),d=Dv(d,i),d=Uv(d,i),f=Lv(f),d=Lv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===W_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=O+y+f,C=O+_+d,B=Rv(l,l.VERTEX_SHADER,N),G=Rv(l,l.FRAGMENT_SHADER,C);l.attachShader(T,B),l.attachShader(T,G),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(V){if(s.debug.checkShaderErrors){const ut=l.getProgramInfoLog(T).trim(),st=l.getShaderInfoLog(B).trim(),xt=l.getShaderInfoLog(G).trim();let pt=!0,I=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(pt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,B,G);else{const Z=Cv(l,B,"vertex"),q=Cv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+Z+`
`+q)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(st===""||xt==="")&&(I=!1);I&&(V.diagnostics={runnable:pt,programLog:ut,vertexShader:{log:st,prefix:y},fragmentShader:{log:xt,prefix:_}})}l.deleteShader(B),l.deleteShader(G),X=new qu(l,T),D=V1(l,T)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,N1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=G,this}let tR=0;class eR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new nR(t),i.set(t,r)),r}}class nR{constructor(t){this.id=tR++,this.code=t,this.usedTimes=0}}function iR(s,t,i,r,l,u,f){const d=new _0,m=new eR,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,w,V,ut,st){const xt=ut.fog,pt=st.geometry,I=D.isMeshStandardMaterial?ut.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),q=Z&&Z.mapping===nc?Z.image.height:null,Et=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const L=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,$=L!==void 0?L.length:0;let yt=0;pt.morphAttributes.position!==void 0&&(yt=1),pt.morphAttributes.normal!==void 0&&(yt=2),pt.morphAttributes.color!==void 0&&(yt=3);let Mt,Q,mt,St;if(Et){const Ee=Ci[Et];Mt=Ee.vertexShader,Q=Ee.fragmentShader}else Mt=D.vertexShader,Q=D.fragmentShader,m.update(D),mt=m.getVertexShaderID(D),St=m.getFragmentShaderID(D);const Rt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Kt=st.isBatchedMesh===!0,Ge=!!D.map,Be=!!D.matcap,fe=!!Z,F=!!D.aoMap,On=!!D.lightMap,ve=!!D.bumpMap,ie=!!D.normalMap,Wt=!!D.displacementMap,Ue=!!D.emissiveMap,Vt=!!D.metalnessMap,U=!!D.roughnessMap,A=D.anisotropy>0,tt=D.clearcoat>0,gt=D.dispersion>0,Tt=D.iridescence>0,ht=D.sheen>0,Pt=D.transmission>0,wt=A&&!!D.anisotropyMap,Gt=tt&&!!D.clearcoatMap,$t=tt&&!!D.clearcoatNormalMap,At=tt&&!!D.clearcoatRoughnessMap,Ft=Tt&&!!D.iridescenceMap,jt=Tt&&!!D.iridescenceThicknessMap,Qt=ht&&!!D.sheenColorMap,It=ht&&!!D.sheenRoughnessMap,ue=!!D.specularMap,ne=!!D.specularColorMap,Le=!!D.specularIntensityMap,k=Pt&&!!D.transmissionMap,Nt=Pt&&!!D.thicknessMap,lt=!!D.gradientMap,_t=!!D.alphaMap,zt=D.alphaTest>0,Ot=!!D.alphaHash,ae=!!D.extensions;let Ve=Ka;D.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const en={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:Q,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Kt,batchingColor:Kt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Ps,alphaToCoverage:!!D.alphaToCoverage,map:Ge,matcap:Be,envMap:fe,envMapMode:fe&&Z.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:On,bumpMap:ve,normalMap:ie,displacementMap:v&&Wt,emissiveMap:Ue,normalMapObjectSpace:ie&&D.normalMapType===JM,normalMapTangentSpace:ie&&D.normalMapType===QM,metalnessMap:Vt,roughnessMap:U,anisotropy:A,anisotropyMap:wt,clearcoat:tt,clearcoatMap:Gt,clearcoatNormalMap:$t,clearcoatRoughnessMap:At,dispersion:gt,iridescence:Tt,iridescenceMap:Ft,iridescenceThicknessMap:jt,sheen:ht,sheenColorMap:Qt,sheenRoughnessMap:It,specularMap:ue,specularColorMap:ne,specularIntensityMap:Le,transmission:Pt,transmissionMap:k,thicknessMap:Nt,gradientMap:lt,opaque:D.transparent===!1&&D.blending===Cs&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:zt,alphaHash:Ot,combine:D.combine,mapUv:Ge&&T(D.map.channel),aoMapUv:F&&T(D.aoMap.channel),lightMapUv:On&&T(D.lightMap.channel),bumpMapUv:ve&&T(D.bumpMap.channel),normalMapUv:ie&&T(D.normalMap.channel),displacementMapUv:Wt&&T(D.displacementMap.channel),emissiveMapUv:Ue&&T(D.emissiveMap.channel),metalnessMapUv:Vt&&T(D.metalnessMap.channel),roughnessMapUv:U&&T(D.roughnessMap.channel),anisotropyMapUv:wt&&T(D.anisotropyMap.channel),clearcoatMapUv:Gt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:$t&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(D.sheenRoughnessMap.channel),specularMapUv:ue&&T(D.specularMap.channel),specularColorMapUv:ne&&T(D.specularColorMap.channel),specularIntensityMapUv:Le&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:Nt&&T(D.thicknessMap.channel),alphaMapUv:_t&&T(D.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(ie||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!pt.attributes.uv&&(Ge||_t),fog:!!xt,useFog:D.fog===!0,fogExp2:!!xt&&xt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Lt,skinning:st.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:yt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ge&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ue&&D.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===aa,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ae&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&D.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return en.vertexUv1s=p.has(1),en.vertexUv2s=p.has(2),en.vertexUv3s=p.has(3),p.clear(),en}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(O(w,D),N(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function N(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=E[D.type];let V;if(w){const ut=Ci[w];V=DE.clone(ut.uniforms)}else V=D.uniforms;return V}function B(D,w){let V;for(let ut=0,st=g.length;ut<st;ut++){const xt=g[ut];if(xt.cacheKey===w){V=xt,++V.usedTimes;break}}return V===void 0&&(V=new $1(s,w,D,u),g.push(V)),V}function G(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:B,releaseProgram:G,releaseShaderCache:z,programs:g,dispose:X}}function aR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function rR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ov(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(x,v,S,E,T,y){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=T,_.group=y),t++,_}function d(x,v,S,E,T,y){const _=f(x,v,S,E,T,y);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(x,v,S,E,T,y){const _=f(x,v,S,E,T,y);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||rR),r.length>1&&r.sort(v||Ov),l.length>1&&l.sort(v||Ov)}function g(){for(let x=t,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function sR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new Pv,s.set(r,[f])):l>=u.length?(f=new Pv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function oR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new nt,color:new we};break;case"SpotLight":i={position:new nt,direction:new nt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return s[t.id]=i,i}}}function lR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let uR=0;function cR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fR(s){const t=new oR,i=lR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,u=new tn,f=new tn;function d(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,T=0,y=0,_=0,O=0,N=0,C=0,B=0,G=0,z=0;p.sort(cR);for(let D=0,w=p.length;D<w;D++){const V=p[D],ut=V.color,st=V.intensity,xt=V.distance,pt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ut.r*st,x+=ut.g*st,v+=ut.b*st;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],st);z++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=pt,r.directionalShadowMatrix[S]=V.shadow.matrix,O++}r.directional[S]=I,S++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(ut).multiplyScalar(st),I.distance=xt,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[T]=I;const Z=V.shadow;if(V.map&&(r.spotLightMap[B]=V.map,B++,Z.updateMatrices(V),V.castShadow&&G++),r.spotLightMatrix[T]=Z.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[T]=q,r.spotShadowMap[T]=pt,C++}T++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(ut).multiplyScalar(st),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=I,y++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=pt,r.pointShadowMatrix[E]=V.shadow.matrix,N++}r.point[E]=I,E++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(st),I.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[_]=I,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==O||X.numPointShadows!==N||X.numSpotShadows!==C||X.numSpotMaps!==B||X.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+B-G,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=O,X.numPointShadows=N,X.numSpotShadows=C,X.numSpotMaps=B,X.numLightProbes=z,r.version=uR++)}function m(p,g){let x=0,v=0,S=0,E=0,T=0;const y=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const N=p[_];if(N.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),x++}else if(N.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(N.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),v++}else if(N.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:r}}function Iv(s){const t=new fR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function hR(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Iv(s),t.set(l,[d])):u>=f.length?(d=new Iv(s),f.push(d)):d=f[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mR(s,t,i){let r=new b0;const l=new de,u=new de,f=new $e,d=new HE({depthPacking:KM}),m=new GE,p={},g=i.maxTextureSize,x={[Qa]:Vn,[Vn]:Qa,[aa]:aa},v=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new pa;E.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new oa(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let _=this.type;this.render=function(G,z,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ut=s.state;ut.setBlending(Za),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const st=_!==ia&&this.type===ia,xt=_===ia&&this.type!==ia;for(let pt=0,I=G.length;pt<I;pt++){const Z=G[pt],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Et=q.getFrameExtents();if(l.multiply(Et),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,q.mapSize.y=u.y)),q.map===null||st===!0||xt===!0){const $=this.type!==ia?{minFilter:Si,magFilter:Si}:{};q.map!==null&&q.map.dispose(),q.map=new Ur(l.x,l.y,$),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const L=q.getViewportCount();for(let $=0;$<L;$++){const yt=q.getViewport($);f.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),ut.viewport(f),q.updateMatrices(Z,$),r=q.getFrustum(),C(z,X,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ia&&O(q,X),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(D,w,V)};function O(G,z){const X=t.update(T);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ur(l.x,l.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(z,null,X,v,T,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(z,null,X,S,T,null)}function N(G,z,X,D){let w=null;const V=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)w=V;else if(w=X.isPointLight===!0?m:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ut=w.uuid,st=z.uuid;let xt=p[ut];xt===void 0&&(xt={},p[ut]=xt);let pt=xt[st];pt===void 0&&(pt=w.clone(),xt[st]=pt,z.addEventListener("dispose",B)),w=pt}if(w.visible=z.visible,w.wireframe=z.wireframe,D===ia?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:x[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ut=s.properties.get(w);ut.light=X}return w}function C(G,z,X,D,w){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===ia)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const st=t.update(G),xt=G.material;if(Array.isArray(xt)){const pt=st.groups;for(let I=0,Z=pt.length;I<Z;I++){const q=pt[I],Et=xt[q.materialIndex];if(Et&&Et.visible){const L=N(G,Et,D,w);G.onBeforeShadow(s,G,z,X,st,L,q),s.renderBufferDirect(X,null,st,L,G,q),G.onAfterShadow(s,G,z,X,st,L,q)}}}else if(xt.visible){const pt=N(G,xt,D,w);G.onBeforeShadow(s,G,z,X,st,pt,null),s.renderBufferDirect(X,null,st,pt,G,null),G.onAfterShadow(s,G,z,X,st,pt,null)}}const ut=G.children;for(let st=0,xt=ut.length;st<xt;st++)C(ut[st],z,X,D,w)}function B(G){G.target.removeEventListener("dispose",B);for(const X in p){const D=p[X],w=G.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const gR={[jh]:Zh,[Kh]:$h,[Qh]:td,[Ls]:Jh,[Zh]:jh,[$h]:Kh,[td]:Qh,[Jh]:Ls};function _R(s,t){function i(){let k=!1;const Nt=new $e;let lt=null;const _t=new $e(0,0,0,0);return{setMask:function(zt){lt!==zt&&!k&&(s.colorMask(zt,zt,zt,zt),lt=zt)},setLocked:function(zt){k=zt},setClear:function(zt,Ot,ae,Ve,en){en===!0&&(zt*=Ve,Ot*=Ve,ae*=Ve),Nt.set(zt,Ot,ae,Ve),_t.equals(Nt)===!1&&(s.clearColor(zt,Ot,ae,Ve),_t.copy(Nt))},reset:function(){k=!1,lt=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,Nt=!1,lt=null,_t=null,zt=null;return{setReversed:function(Ot){if(Nt!==Ot){const ae=t.get("EXT_clip_control");Ot?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Nt=Ot;const Ve=zt;zt=null,this.setClear(Ve)}},getReversed:function(){return Nt},setTest:function(Ot){Ot?Rt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(Ot){lt!==Ot&&!k&&(s.depthMask(Ot),lt=Ot)},setFunc:function(Ot){if(Nt&&(Ot=gR[Ot]),_t!==Ot){switch(Ot){case jh:s.depthFunc(s.NEVER);break;case Zh:s.depthFunc(s.ALWAYS);break;case Kh:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case Qh:s.depthFunc(s.EQUAL);break;case Jh:s.depthFunc(s.GEQUAL);break;case $h:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Ot}},setLocked:function(Ot){k=Ot},setClear:function(Ot){zt!==Ot&&(Nt&&(Ot=1-Ot),s.clearDepth(Ot),zt=Ot)},reset:function(){k=!1,lt=null,_t=null,zt=null,Nt=!1}}}function l(){let k=!1,Nt=null,lt=null,_t=null,zt=null,Ot=null,ae=null,Ve=null,en=null;return{setTest:function(Ee){k||(Ee?Rt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!k&&(s.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,Wn,mn){(lt!==Ee||_t!==Wn||zt!==mn)&&(s.stencilFunc(Ee,Wn,mn),lt=Ee,_t=Wn,zt=mn)},setOp:function(Ee,Wn,mn){(Ot!==Ee||ae!==Wn||Ve!==mn)&&(s.stencilOp(Ee,Wn,mn),Ot=Ee,ae=Wn,Ve=mn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){en!==Ee&&(s.clearStencil(Ee),en=Ee)},reset:function(){k=!1,Nt=null,lt=null,_t=null,zt=null,Ot=null,ae=null,Ve=null,en=null}}}const u=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,O=null,N=null,C=null,B=null,G=null,z=new we(0,0,0),X=0,D=!1,w=null,V=null,ut=null,st=null,xt=null;const pt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=Z>=2);let Et=null,L={};const $=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Mt=new $e().fromArray($),Q=new $e().fromArray(yt);function mt(k,Nt,lt,_t){const zt=new Uint8Array(4),Ot=s.createTexture();s.bindTexture(k,Ot),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<lt;ae++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,zt):s.texImage2D(Nt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,zt);return Ot}const St={};St[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Rt(s.DEPTH_TEST),f.setFunc(Ls),ve(!1),ie(F_),Rt(s.CULL_FACE),F(Za);function Rt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Lt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function oe(k,Nt){return x[k]!==Nt?(s.bindFramebuffer(k,Nt),x[k]=Nt,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Nt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Kt(k,Nt){let lt=S,_t=!1;if(k){lt=v.get(Nt),lt===void 0&&(lt=[],v.set(Nt,lt));const zt=k.textures;if(lt.length!==zt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let Ot=0,ae=zt.length;Ot<ae;Ot++)lt[Ot]=s.COLOR_ATTACHMENT0+Ot;lt.length=zt.length,_t=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,_t=!0);_t&&s.drawBuffers(lt)}function Ge(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Be={[br]:s.FUNC_ADD,[MM]:s.FUNC_SUBTRACT,[EM]:s.FUNC_REVERSE_SUBTRACT};Be[TM]=s.MIN,Be[bM]=s.MAX;const fe={[AM]:s.ZERO,[RM]:s.ONE,[wM]:s.SRC_COLOR,[Yh]:s.SRC_ALPHA,[OM]:s.SRC_ALPHA_SATURATE,[LM]:s.DST_COLOR,[DM]:s.DST_ALPHA,[CM]:s.ONE_MINUS_SRC_COLOR,[qh]:s.ONE_MINUS_SRC_ALPHA,[NM]:s.ONE_MINUS_DST_COLOR,[UM]:s.ONE_MINUS_DST_ALPHA,[PM]:s.CONSTANT_COLOR,[IM]:s.ONE_MINUS_CONSTANT_COLOR,[zM]:s.CONSTANT_ALPHA,[BM]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,Nt,lt,_t,zt,Ot,ae,Ve,en,Ee){if(k===Za){T===!0&&(Lt(s.BLEND),T=!1);return}if(T===!1&&(Rt(s.BLEND),T=!0),k!==SM){if(k!==y||Ee!==D){if((_!==br||C!==br)&&(s.blendEquation(s.FUNC_ADD),_=br,C=br),Ee)switch(k){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case H_:s.blendFunc(s.ONE,s.ONE);break;case G_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case V_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case H_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case G_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case V_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,N=null,B=null,G=null,z.set(0,0,0),X=0,y=k,D=Ee}return}zt=zt||Nt,Ot=Ot||lt,ae=ae||_t,(Nt!==_||zt!==C)&&(s.blendEquationSeparate(Be[Nt],Be[zt]),_=Nt,C=zt),(lt!==O||_t!==N||Ot!==B||ae!==G)&&(s.blendFuncSeparate(fe[lt],fe[_t],fe[Ot],fe[ae]),O=lt,N=_t,B=Ot,G=ae),(Ve.equals(z)===!1||en!==X)&&(s.blendColor(Ve.r,Ve.g,Ve.b,en),z.copy(Ve),X=en),y=k,D=!1}function On(k,Nt){k.side===aa?Lt(s.CULL_FACE):Rt(s.CULL_FACE);let lt=k.side===Vn;Nt&&(lt=!lt),ve(lt),k.blending===Cs&&k.transparent===!1?F(Za):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const _t=k.stencilWrite;d.setTest(_t),_t&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function ie(k){k!==vM?(Rt(s.CULL_FACE),k!==V&&(k===F_?s.cullFace(s.BACK):k===xM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),V=k}function Wt(k){k!==ut&&(I&&s.lineWidth(k),ut=k)}function Ue(k,Nt,lt){k?(Rt(s.POLYGON_OFFSET_FILL),(st!==Nt||xt!==lt)&&(s.polygonOffset(Nt,lt),st=Nt,xt=lt)):Lt(s.POLYGON_OFFSET_FILL)}function Vt(k){k?Rt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function U(k){k===void 0&&(k=s.TEXTURE0+pt-1),Et!==k&&(s.activeTexture(k),Et=k)}function A(k,Nt,lt){lt===void 0&&(Et===null?lt=s.TEXTURE0+pt-1:lt=Et);let _t=L[lt];_t===void 0&&(_t={type:void 0,texture:void 0},L[lt]=_t),(_t.type!==k||_t.texture!==Nt)&&(Et!==lt&&(s.activeTexture(lt),Et=lt),s.bindTexture(k,Nt||St[k]),_t.type=k,_t.texture=Nt)}function tt(){const k=L[Et];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){Mt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function It(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function ue(k,Nt){let lt=p.get(Nt);lt===void 0&&(lt=new WeakMap,p.set(Nt,lt));let _t=lt.get(k);_t===void 0&&(_t=s.getUniformBlockIndex(Nt,k.name),lt.set(k,_t))}function ne(k,Nt){const _t=p.get(Nt).get(k);m.get(Nt)!==_t&&(s.uniformBlockBinding(Nt,_t,k.__bindingPointIndex),m.set(Nt,_t))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,L={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,_=null,O=null,N=null,C=null,B=null,G=null,z=new we(0,0,0),X=0,D=!1,w=null,V=null,ut=null,st=null,xt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:Rt,disable:Lt,bindFramebuffer:oe,drawBuffers:Kt,useProgram:Ge,setBlending:F,setMaterial:On,setFlipSided:ve,setCullFace:ie,setLineWidth:Wt,setPolygonOffset:Ue,setScissorTest:Vt,activeTexture:U,bindTexture:A,unbindTexture:tt,compressedTexImage2D:gt,compressedTexImage3D:Tt,texImage2D:Ft,texImage3D:jt,updateUBOMapping:ue,uniformBlockBinding:ne,texStorage2D:$t,texStorage3D:At,texSubImage2D:ht,texSubImage3D:Pt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Gt,scissor:Qt,viewport:It,reset:Le}}function vR(s,t,i,r,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new de,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return S?new OffscreenCanvas(U,A):Ju("canvas")}function T(U,A,tt){let gt=1;const Tt=Vt(U);if((Tt.width>tt||Tt.height>tt)&&(gt=tt/Math.max(Tt.width,Tt.height)),gt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(gt*Tt.width),Pt=Math.floor(gt*Tt.height);x===void 0&&(x=E(ht,Pt));const wt=A?E(ht,Pt):x;return wt.width=ht,wt.height=Pt,wt.getContext("2d").drawImage(U,0,0,ht,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ht+"x"+Pt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){s.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,A,tt,gt,Tt=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=A;if(A===s.RED&&(tt===s.FLOAT&&(ht=s.R32F),tt===s.HALF_FLOAT&&(ht=s.R16F),tt===s.UNSIGNED_BYTE&&(ht=s.R8)),A===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.R8UI),tt===s.UNSIGNED_SHORT&&(ht=s.R16UI),tt===s.UNSIGNED_INT&&(ht=s.R32UI),tt===s.BYTE&&(ht=s.R8I),tt===s.SHORT&&(ht=s.R16I),tt===s.INT&&(ht=s.R32I)),A===s.RG&&(tt===s.FLOAT&&(ht=s.RG32F),tt===s.HALF_FLOAT&&(ht=s.RG16F),tt===s.UNSIGNED_BYTE&&(ht=s.RG8)),A===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RG16UI),tt===s.UNSIGNED_INT&&(ht=s.RG32UI),tt===s.BYTE&&(ht=s.RG8I),tt===s.SHORT&&(ht=s.RG16I),tt===s.INT&&(ht=s.RG32I)),A===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),tt===s.UNSIGNED_INT&&(ht=s.RGB32UI),tt===s.BYTE&&(ht=s.RGB8I),tt===s.SHORT&&(ht=s.RGB16I),tt===s.INT&&(ht=s.RGB32I)),A===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ht=s.RGBA32UI),tt===s.BYTE&&(ht=s.RGBA8I),tt===s.SHORT&&(ht=s.RGBA16I),tt===s.INT&&(ht=s.RGBA32I)),A===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),A===s.RGBA){const Pt=Tt?Ku:Ae.getTransfer(gt);tt===s.FLOAT&&(ht=s.RGBA32F),tt===s.HALF_FLOAT&&(ht=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ht=Pt===Ie?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function C(U,A){let tt;return U?A===null||A===Dr||A===Yo?tt=s.DEPTH24_STENCIL8:A===ra?tt=s.DEPTH32F_STENCIL8:A===Wo&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Dr||A===Yo?tt=s.DEPTH_COMPONENT24:A===ra?tt=s.DEPTH_COMPONENT32F:A===Wo&&(tt=s.DEPTH_COMPONENT16),tt}function B(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Si&&U.minFilter!==Di?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function G(U){const A=U.target;A.removeEventListener("dispose",G),X(A),A.isVideoTexture&&g.delete(A)}function z(U){const A=U.target;A.removeEventListener("dispose",z),w(A)}function X(U){const A=r.get(U);if(A.__webglInit===void 0)return;const tt=U.source,gt=v.get(tt);if(gt){const Tt=gt[A.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&D(U),Object.keys(gt).length===0&&v.delete(tt)}r.remove(U)}function D(U){const A=r.get(U);s.deleteTexture(A.__webglTexture);const tt=U.source,gt=v.get(tt);delete gt[A.__cacheKey],f.memory.textures--}function w(U){const A=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(A.__webglFramebuffer[gt]))for(let Tt=0;Tt<A.__webglFramebuffer[gt].length;Tt++)s.deleteFramebuffer(A.__webglFramebuffer[gt][Tt]);else s.deleteFramebuffer(A.__webglFramebuffer[gt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[gt])}else{if(Array.isArray(A.__webglFramebuffer))for(let gt=0;gt<A.__webglFramebuffer.length;gt++)s.deleteFramebuffer(A.__webglFramebuffer[gt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let gt=0;gt<A.__webglColorRenderbuffer.length;gt++)A.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[gt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const tt=U.textures;for(let gt=0,Tt=tt.length;gt<Tt;gt++){const ht=r.get(tt[gt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(tt[gt])}r.remove(U)}let V=0;function ut(){V=0}function st(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function xt(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function pt(U,A){const tt=r.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){const gt=U.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,U,A);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+A)}function I(U,A){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){Q(tt,U,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+A)}function Z(U,A){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){Q(tt,U,A);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+A)}function q(U,A){const tt=r.get(U);if(U.version>0&&tt.__version!==U.version){mt(tt,U,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+A)}const Et={[id]:s.REPEAT,[Rr]:s.CLAMP_TO_EDGE,[ad]:s.MIRRORED_REPEAT},L={[Si]:s.NEAREST,[jM]:s.NEAREST_MIPMAP_NEAREST,[du]:s.NEAREST_MIPMAP_LINEAR,[Di]:s.LINEAR,[gh]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},$={[$M]:s.NEVER,[rE]:s.ALWAYS,[tE]:s.LESS,[p0]:s.LEQUAL,[eE]:s.EQUAL,[aE]:s.GEQUAL,[nE]:s.GREATER,[iE]:s.NOTEQUAL};function yt(U,A){if(A.type===ra&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Di||A.magFilter===gh||A.magFilter===du||A.magFilter===wr||A.minFilter===Di||A.minFilter===gh||A.minFilter===du||A.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Et[A.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Et[A.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Et[A.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,L[A.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,L[A.minFilter]),A.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Si||A.minFilter!==du&&A.minFilter!==wr||A.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Mt(U,A){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",G));const gt=A.source;let Tt=v.get(gt);Tt===void 0&&(Tt={},v.set(gt,Tt));const ht=xt(A);if(ht!==U.__cacheKey){Tt[ht]===void 0&&(Tt[ht]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),Tt[ht].usedTimes++;const Pt=Tt[U.__cacheKey];Pt!==void 0&&(Tt[U.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(A)),U.__cacheKey=ht,U.__webglTexture=Tt[ht].texture}return tt}function Q(U,A,tt){let gt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=s.TEXTURE_3D);const Tt=Mt(U,A),ht=A.source;i.bindTexture(gt,U.__webglTexture,s.TEXTURE0+tt);const Pt=r.get(ht);if(ht.version!==Pt.__version||Tt===!0){i.activeTexture(s.TEXTURE0+tt);const wt=Ae.getPrimaries(Ae.workingColorSpace),Gt=A.colorSpace===ja?null:Ae.getPrimaries(A.colorSpace),$t=A.colorSpace===ja||wt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let At=T(A.image,!1,l.maxTextureSize);At=Ue(A,At);const Ft=u.convert(A.format,A.colorSpace),jt=u.convert(A.type);let Qt=N(A.internalFormat,Ft,jt,A.colorSpace,A.isVideoTexture);yt(gt,A);let It;const ue=A.mipmaps,ne=A.isVideoTexture!==!0,Le=Pt.__version===void 0||Tt===!0,k=ht.dataReady,Nt=B(A,At);if(A.isDepthTexture)Qt=C(A.format===jo,A.type),Le&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Qt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Qt,At.width,At.height,0,Ft,jt,null));else if(A.isDataTexture)if(ue.length>0){ne&&Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Qt,ue[0].width,ue[0].height);for(let lt=0,_t=ue.length;lt<_t;lt++)It=ue[lt],ne?k&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,It.width,It.height,Ft,jt,It.data):i.texImage2D(s.TEXTURE_2D,lt,Qt,It.width,It.height,0,Ft,jt,It.data);A.generateMipmaps=!1}else ne?(Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Qt,At.width,At.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,At.width,At.height,Ft,jt,At.data)):i.texImage2D(s.TEXTURE_2D,0,Qt,At.width,At.height,0,Ft,jt,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ne&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Qt,ue[0].width,ue[0].height,At.depth);for(let lt=0,_t=ue.length;lt<_t;lt++)if(It=ue[lt],A.format!==yi)if(Ft!==null)if(ne){if(k)if(A.layerUpdates.size>0){const zt=hv(It.width,It.height,A.format,A.type);for(const Ot of A.layerUpdates){const ae=It.data.subarray(Ot*zt/It.data.BYTES_PER_ELEMENT,(Ot+1)*zt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,Ot,It.width,It.height,1,Ft,ae)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,It.width,It.height,At.depth,Ft,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,lt,Qt,It.width,It.height,At.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,lt,0,0,0,It.width,It.height,At.depth,Ft,jt,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,lt,Qt,It.width,It.height,At.depth,0,Ft,jt,It.data)}else{ne&&Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Qt,ue[0].width,ue[0].height);for(let lt=0,_t=ue.length;lt<_t;lt++)It=ue[lt],A.format!==yi?Ft!==null?ne?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,lt,0,0,It.width,It.height,Ft,It.data):i.compressedTexImage2D(s.TEXTURE_2D,lt,Qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,It.width,It.height,Ft,jt,It.data):i.texImage2D(s.TEXTURE_2D,lt,Qt,It.width,It.height,0,Ft,jt,It.data)}else if(A.isDataArrayTexture)if(ne){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Qt,At.width,At.height,At.depth),k)if(A.layerUpdates.size>0){const lt=hv(At.width,At.height,A.format,A.type);for(const _t of A.layerUpdates){const zt=At.data.subarray(_t*lt/At.data.BYTES_PER_ELEMENT,(_t+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Ft,jt,zt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ft,jt,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,At.width,At.height,At.depth,0,Ft,jt,At.data);else if(A.isData3DTexture)ne?(Le&&i.texStorage3D(s.TEXTURE_3D,Nt,Qt,At.width,At.height,At.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ft,jt,At.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,At.width,At.height,At.depth,0,Ft,jt,At.data);else if(A.isFramebufferTexture){if(Le)if(ne)i.texStorage2D(s.TEXTURE_2D,Nt,Qt,At.width,At.height);else{let lt=At.width,_t=At.height;for(let zt=0;zt<Nt;zt++)i.texImage2D(s.TEXTURE_2D,zt,Qt,lt,_t,0,Ft,jt,null),lt>>=1,_t>>=1}}else if(ue.length>0){if(ne&&Le){const lt=Vt(ue[0]);i.texStorage2D(s.TEXTURE_2D,Nt,Qt,lt.width,lt.height)}for(let lt=0,_t=ue.length;lt<_t;lt++)It=ue[lt],ne?k&&i.texSubImage2D(s.TEXTURE_2D,lt,0,0,Ft,jt,It):i.texImage2D(s.TEXTURE_2D,lt,Qt,Ft,jt,It);A.generateMipmaps=!1}else if(ne){if(Le){const lt=Vt(At);i.texStorage2D(s.TEXTURE_2D,Nt,Qt,lt.width,lt.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,jt,At)}else i.texImage2D(s.TEXTURE_2D,0,Qt,Ft,jt,At);y(A)&&_(gt),Pt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function mt(U,A,tt){if(A.image.length!==6)return;const gt=Mt(U,A),Tt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+tt);const ht=r.get(Tt);if(Tt.version!==ht.__version||gt===!0){i.activeTexture(s.TEXTURE0+tt);const Pt=Ae.getPrimaries(Ae.workingColorSpace),wt=A.colorSpace===ja?null:Ae.getPrimaries(A.colorSpace),Gt=A.colorSpace===ja||Pt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const $t=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!$t&&!At?Ft[_t]=T(A.image[_t],!0,l.maxCubemapSize):Ft[_t]=At?A.image[_t].image:A.image[_t],Ft[_t]=Ue(A,Ft[_t]);const jt=Ft[0],Qt=u.convert(A.format,A.colorSpace),It=u.convert(A.type),ue=N(A.internalFormat,Qt,It,A.colorSpace),ne=A.isVideoTexture!==!0,Le=ht.__version===void 0||gt===!0,k=Tt.dataReady;let Nt=B(A,jt);yt(s.TEXTURE_CUBE_MAP,A);let lt;if($t){ne&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ue,jt.width,jt.height);for(let _t=0;_t<6;_t++){lt=Ft[_t].mipmaps;for(let zt=0;zt<lt.length;zt++){const Ot=lt[zt];A.format!==yi?Qt!==null?ne?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Ot.width,Ot.height,Qt,Ot.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,ue,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Ot.width,Ot.height,Qt,It,Ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,ue,Ot.width,Ot.height,0,Qt,It,Ot.data)}}}else{if(lt=A.mipmaps,ne&&Le){lt.length>0&&Nt++;const _t=Vt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ue,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Qt,It,Ft[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Ft[_t].width,Ft[_t].height,0,Qt,It,Ft[_t].data);for(let zt=0;zt<lt.length;zt++){const ae=lt[zt].image[_t].image;ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,ae.width,ae.height,Qt,It,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,ue,ae.width,ae.height,0,Qt,It,ae.data)}}else{ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Qt,It,Ft[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Qt,It,Ft[_t]);for(let zt=0;zt<lt.length;zt++){const Ot=lt[zt];ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,Qt,It,Ot.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,ue,Qt,It,Ot.image[_t])}}}y(A)&&_(s.TEXTURE_CUBE_MAP),ht.__version=Tt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function St(U,A,tt,gt,Tt,ht){const Pt=u.convert(tt.format,tt.colorSpace),wt=u.convert(tt.type),Gt=N(tt.internalFormat,Pt,wt,tt.colorSpace),$t=r.get(A),At=r.get(tt);if(At.__renderTarget=A,!$t.__hasExternalTextures){const Ft=Math.max(1,A.width>>ht),jt=Math.max(1,A.height>>ht);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?i.texImage3D(Tt,ht,Gt,Ft,jt,A.depth,0,Pt,wt,null):i.texImage2D(Tt,ht,Gt,Ft,jt,0,Pt,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),ie(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,Tt,At.__webglTexture,0,ve(A)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,Tt,At.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(U,A,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,U),A.depthBuffer){const gt=A.depthTexture,Tt=gt&&gt.isDepthTexture?gt.type:null,ht=C(A.stencilBuffer,Tt),Pt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=ve(A);ie(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,ht,A.width,A.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ht,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,U)}else{const gt=A.textures;for(let Tt=0;Tt<gt.length;Tt++){const ht=gt[Tt],Pt=u.convert(ht.format,ht.colorSpace),wt=u.convert(ht.type),Gt=N(ht.internalFormat,Pt,wt,ht.colorSpace),$t=ve(A);tt&&ie(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Gt,A.width,A.height):ie(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Gt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(A.depthTexture);gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt(A.depthTexture,0);const Tt=gt.__webglTexture,ht=ve(A);if(A.depthTexture.format===qo)ie(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0);else if(A.depthTexture.format===jo)ie(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function oe(U){const A=r.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const gt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){const Tt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",Tt)};gt.addEventListener("dispose",Tt),A.__depthDisposeCallback=Tt}A.__boundDepthTexture=gt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=U.texture.mipmaps;gt&&gt.length>0?Lt(A.__webglFramebuffer[0],U):Lt(A.__webglFramebuffer,U)}else if(tt){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=s.createRenderbuffer(),Rt(A.__webglDepthbuffer[gt],U,!1);else{const Tt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,ht)}}else{const gt=U.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Rt(A.__webglDepthbuffer,U,!1);else{const Tt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(U,A,tt){const gt=r.get(U);A!==void 0&&St(gt.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&oe(U)}function Ge(U){const A=U.texture,tt=r.get(U),gt=r.get(A);U.addEventListener("dispose",z);const Tt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,Pt=Tt.length>1;if(Pt||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=A.version,f.memory.textures++),ht){tt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer[wt]=[];for(let Gt=0;Gt<A.mipmaps.length;Gt++)tt.__webglFramebuffer[wt][Gt]=s.createFramebuffer()}else tt.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)tt.__webglFramebuffer[wt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let wt=0,Gt=Tt.length;wt<Gt;wt++){const $t=r.get(Tt[wt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&ie(U)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let wt=0;wt<Tt.length;wt++){const Gt=Tt[wt];tt.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const $t=u.convert(Gt.format,Gt.colorSpace),At=u.convert(Gt.type),Ft=N(Gt.internalFormat,$t,At,Gt.colorSpace,U.isXRRenderTarget===!0),jt=ve(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Ft,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),yt(s.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Gt=0;Gt<A.mipmaps.length;Gt++)St(tt.__webglFramebuffer[wt][Gt],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Gt);else St(tt.__webglFramebuffer[wt],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let wt=0,Gt=Tt.length;wt<Gt;wt++){const $t=Tt[wt],At=r.get($t);i.bindTexture(s.TEXTURE_2D,At.__webglTexture),yt(s.TEXTURE_2D,$t),St(tt.__webglFramebuffer,U,$t,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,0),y($t)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),yt(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Gt=0;Gt<A.mipmaps.length;Gt++)St(tt.__webglFramebuffer[Gt],U,A,s.COLOR_ATTACHMENT0,wt,Gt);else St(tt.__webglFramebuffer,U,A,s.COLOR_ATTACHMENT0,wt,0);y(A)&&_(wt),i.unbindTexture()}U.depthBuffer&&oe(U)}function Be(U){const A=U.textures;for(let tt=0,gt=A.length;tt<gt;tt++){const Tt=A[tt];if(y(Tt)){const ht=O(U),Pt=r.get(Tt).__webglTexture;i.bindTexture(ht,Pt),_(ht),i.unbindTexture()}}}const fe=[],F=[];function On(U){if(U.samples>0){if(ie(U)===!1){const A=U.textures,tt=U.width,gt=U.height;let Tt=s.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(U),wt=A.length>1;if(wt)for(let $t=0;$t<A.length;$t++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=U.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let $t=0;$t<A.length;$t++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[$t]);const At=r.get(A[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,tt,gt,0,0,tt,gt,Tt,s.NEAREST),m===!0&&(fe.length=0,F.length=0,fe.push(s.COLOR_ATTACHMENT0+$t),U.depthBuffer&&U.resolveDepthBuffer===!1&&(fe.push(ht),F.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let $t=0;$t<A.length;$t++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[$t]);const At=r.get(A[$t]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const A=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ve(U){return Math.min(l.maxSamples,U.samples)}function ie(U){const A=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wt(U){const A=f.render.frame;g.get(U)!==A&&(g.set(U,A),U.update())}function Ue(U,A){const tt=U.colorSpace,gt=U.format,Tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Ps&&tt!==ja&&(Ae.getTransfer(tt)===Ie?(gt!==yi||Tt!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),A}function Vt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ut,this.setTexture2D=pt,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Kt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ie}function xR(s,t){function i(r,l=ja){let u;const f=Ae.getTransfer(l);if(r===fa)return s.UNSIGNED_BYTE;if(r===Vd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===l0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===s0)return s.BYTE;if(r===o0)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Gd)return s.INT;if(r===Dr)return s.UNSIGNED_INT;if(r===ra)return s.FLOAT;if(r===Qo)return s.HALF_FLOAT;if(r===u0)return s.ALPHA;if(r===c0)return s.RGB;if(r===yi)return s.RGBA;if(r===qo)return s.DEPTH_COMPONENT;if(r===jo)return s.DEPTH_STENCIL;if(r===f0)return s.RED;if(r===Xd)return s.RED_INTEGER;if(r===h0)return s.RG;if(r===Wd)return s.RG_INTEGER;if(r===Yd)return s.RGBA_INTEGER;if(r===Hu||r===Gu||r===Vu||r===ku)if(f===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Hu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Hu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rd||r===sd||r===od||r===ld)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===od)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ud||r===cd||r===fd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ud||r===cd)return f===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===fd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===Td||r===bd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===hd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_d)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Md)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ed)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return f===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xu||r===Ad||r===Rd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Xu)return f===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===d0||r===wd||r===Cd||r===Dd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Xu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new kn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ja({vertexShader:yR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oa(new ac(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends Or{constructor(t,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,S=null,E=null;const T=new MR,y=i.getContextAttributes();let _=null,O=null;const N=[],C=[],B=new de;let G=null;const z=new fi;z.viewport=new $e;const X=new fi;X.viewport=new $e;const D=[z,X],w=new kE;let V=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let mt=N[Q];return mt===void 0&&(mt=new zh,N[Q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let mt=N[Q];return mt===void 0&&(mt=new zh,N[Q]=mt),mt.getGripSpace()},this.getHand=function(Q){let mt=N[Q];return mt===void 0&&(mt=new zh,N[Q]=mt),mt.getHandSpace()};function st(Q){const mt=C.indexOf(Q.inputSource);if(mt===-1)return;const St=N[mt];St!==void 0&&(St.update(Q.inputSource,Q.frame,p||f),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function xt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",xt),l.removeEventListener("inputsourceschange",pt);for(let Q=0;Q<N.length;Q++){const mt=C[Q];mt!==null&&(C[Q]=null,N[Q].disconnect(mt))}V=null,ut=null,T.reset(),t.setRenderTarget(_),S=null,v=null,x=null,l=null,O=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",xt),l.addEventListener("inputsourceschange",pt),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Rt=null,Lt=null;y.depth&&(Lt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=y.stencil?jo:qo,Rt=y.stencil?Yo:Dr);const oe={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(oe),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Ur(v.textureWidth,v.textureHeight,{format:yi,type:fa,depthTexture:new R0(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Ur(S.framebufferWidth,S.framebufferHeight,{format:yi,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pt(Q){for(let mt=0;mt<Q.removed.length;mt++){const St=Q.removed[mt],Rt=C.indexOf(St);Rt>=0&&(C[Rt]=null,N[Rt].disconnect(St))}for(let mt=0;mt<Q.added.length;mt++){const St=Q.added[mt];let Rt=C.indexOf(St);if(Rt===-1){for(let oe=0;oe<N.length;oe++)if(oe>=C.length){C.push(St),Rt=oe;break}else if(C[oe]===null){C[oe]=St,Rt=oe;break}if(Rt===-1)break}const Lt=N[Rt];Lt&&Lt.connect(St)}}const I=new nt,Z=new nt;function q(Q,mt,St){I.setFromMatrixPosition(mt.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const Rt=I.distanceTo(Z),Lt=mt.projectionMatrix.elements,oe=St.projectionMatrix.elements,Kt=Lt[14]/(Lt[10]-1),Ge=Lt[14]/(Lt[10]+1),Be=(Lt[9]+1)/Lt[5],fe=(Lt[9]-1)/Lt[5],F=(Lt[8]-1)/Lt[0],On=(oe[8]+1)/oe[0],ve=Kt*F,ie=Kt*On,Wt=Rt/(-F+On),Ue=Wt*-F;if(mt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ue),Q.translateZ(Wt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Lt[10]===-1)Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Vt=Kt+Wt,U=Ge+Wt,A=ve-Ue,tt=ie+(Rt-Ue),gt=Be*Ge/U*Vt,Tt=fe*Ge/U*Vt;Q.projectionMatrix.makePerspective(A,tt,gt,Tt,Vt,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,mt){mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let mt=Q.near,St=Q.far;T.texture!==null&&(T.depthNear>0&&(mt=T.depthNear),T.depthFar>0&&(St=T.depthFar)),w.near=X.near=z.near=mt,w.far=X.far=z.far=St,(V!==w.near||ut!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,ut=w.far),z.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,w.layers.mask=z.layers.mask|X.layers.mask;const Rt=Q.parent,Lt=w.cameras;Et(w,Rt);for(let oe=0;oe<Lt.length;oe++)Et(Lt[oe],Rt);Lt.length===2?q(w,z,X):w.projectionMatrix.copy(z.projectionMatrix),L(Q,w,Rt)};function L(Q,mt,St){St===null?Q.matrix.copy(mt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(mt.projectionMatrix),Q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ud*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let $=null;function yt(Q,mt){if(g=mt.getViewerPose(p||f),E=mt,g!==null){const St=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Rt=!1;St.length!==w.cameras.length&&(w.cameras.length=0,Rt=!0);for(let Kt=0;Kt<St.length;Kt++){const Ge=St[Kt];let Be=null;if(S!==null)Be=S.getViewport(Ge);else{const F=x.getViewSubImage(v,Ge);Be=F.viewport,Kt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let fe=D[Kt];fe===void 0&&(fe=new fi,fe.layers.enable(Kt),fe.viewport=new $e,D[Kt]=fe),fe.matrix.fromArray(Ge.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ge.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Be.x,Be.y,Be.width,Be.height),Kt===0&&(w.matrix.copy(fe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Rt===!0&&w.cameras.push(fe)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Kt=x.getDepthInformation(St[0]);Kt&&Kt.isValid&&Kt.texture&&T.init(t,Kt,l.renderState)}}for(let St=0;St<N.length;St++){const Rt=C[St],Lt=N[St];Rt!==null&&Lt!==void 0&&Lt.update(Rt,mt,p||f)}$&&$(Q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Mt=new w0;Mt.setAnimationLoop(yt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const Er=new ha,TR=new tn;function bR(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,M0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,O,N,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),T(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,O,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=t.get(_),N=O.envMap,C=O.envMapRotation;N&&(y.envMap.value=N,Er.copy(C),Er.x*=-1,Er.y*=-1,Er.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(TR.makeRotationFromEuler(Er)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,O,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const O=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AR(s,t,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,N){const C=N.program;r.uniformBlockBinding(O,C)}function p(O,N){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",y));const B=N.program;r.updateUBOMapping(O,B);const G=t.render.frame;u[O.id]!==G&&(v(O),u[O.id]=G)}function g(O){const N=x();O.__bindingPointIndex=N;const C=s.createBuffer(),B=O.__size,G=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,B,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,C),C}function x(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const N=l[O.id],C=O.uniforms,B=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let G=0,z=C.length;G<z;G++){const X=Array.isArray(C[G])?C[G]:[C[G]];for(let D=0,w=X.length;D<w;D++){const V=X[D];if(S(V,G,D,B)===!0){const ut=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let xt=0;for(let pt=0;pt<st.length;pt++){const I=st[pt],Z=T(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,ut+xt,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,xt),xt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ut,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,N,C,B){const G=O.value,z=N+"_"+C;if(B[z]===void 0)return typeof G=="number"||typeof G=="boolean"?B[z]=G:B[z]=G.clone(),!0;{const X=B[z];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return B[z]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function E(O){const N=O.uniforms;let C=0;const B=16;for(let z=0,X=N.length;z<X;z++){const D=Array.isArray(N[z])?N[z]:[N[z]];for(let w=0,V=D.length;w<V;w++){const ut=D[w],st=Array.isArray(ut.value)?ut.value:[ut.value];for(let xt=0,pt=st.length;xt<pt;xt++){const I=st[xt],Z=T(I),q=C%B,Et=q%Z.boundary,L=q+Et;C+=Et,L!==0&&B-L<Z.storage&&(C+=B-L),ut.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=C,C+=Z.storage}}}const G=C%B;return G>0&&(C+=B-G),O.__size=C,O.__cache={},this}function T(O){const N={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(N.boundary=4,N.storage=4):O.isVector2?(N.boundary=8,N.storage=8):O.isVector3||O.isColor?(N.boundary=16,N.storage=12):O.isVector4?(N.boundary=16,N.storage=16):O.isMatrix3?(N.boundary=48,N.storage=48):O.isMatrix4?(N.boundary=64,N.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),N}function y(O){const N=O.target;N.removeEventListener("dispose",y);const C=f.indexOf(N.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},u={}}return{bind:m,update:p,dispose:_}}class RR{constructor(t={}){const{canvas:i=lE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const O=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=ci;let G=0,z=0,X=null,D=-1,w=null;const V=new $e,ut=new $e;let st=null;const xt=new we(0);let pt=0,I=i.width,Z=i.height,q=1,Et=null,L=null;const $=new $e(0,0,I,Z),yt=new $e(0,0,I,Z);let Mt=!1;const Q=new b0;let mt=!1,St=!1;const Rt=new tn,Lt=new tn,oe=new nt,Kt=new $e,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function fe(){return X===null?q:1}let F=r;function On(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),F===null){const Y="webgl2";if(F=On(Y,R),F===null)throw On(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ve,ie,Wt,Ue,Vt,U,A,tt,gt,Tt,ht,Pt,wt,Gt,$t,At,Ft,jt,Qt,It,ue,ne,Le,k;function Nt(){ve=new zA(F),ve.init(),ne=new xR(F,ve),ie=new DA(F,ve,t,ne),Wt=new _R(F,ve),ie.reverseDepthBuffer&&v&&Wt.buffers.depth.setReversed(!0),Ue=new HA(F),Vt=new aR,U=new vR(F,ve,Wt,Vt,ie,ne,Ue),A=new LA(C),tt=new IA(C),gt=new YE(F),Le=new wA(F,gt),Tt=new BA(F,gt,Ue,Le),ht=new VA(F,Tt,gt,Ue),Qt=new GA(F,ie,U),At=new UA(Vt),Pt=new iR(C,A,tt,ve,ie,Le,At),wt=new bR(C,Vt),Gt=new sR,$t=new hR(ve),jt=new RA(C,A,tt,Wt,ht,S,m),Ft=new mR(C,ht,ie),k=new AR(F,Ue,ie,Wt),It=new CA(F,ve,Ue),ue=new FA(F,ve,Ue),Ue.programs=Pt.programs,C.capabilities=ie,C.extensions=ve,C.properties=Vt,C.renderLists=Gt,C.shadowMap=Ft,C.state=Wt,C.info=Ue}Nt();const lt=new ER(C,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(I,Z,!1))},this.getSize=function(R){return R.set(I,Z)},this.setSize=function(R,Y,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Z=Y,i.width=Math.floor(R*q),i.height=Math.floor(Y*q),at===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(I*q,Z*q).floor()},this.setDrawingBufferSize=function(R,Y,at){I=R,Z=Y,q=at,i.width=Math.floor(R*at),i.height=Math.floor(Y*at),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,Y,at,rt){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,Y,at,rt),Wt.viewport(V.copy($).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,Y,at,rt){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,Y,at,rt),Wt.scissor(ut.copy(yt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Wt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,at=!0){let rt=0;if(R){let j=!1;if(X!==null){const bt=X.texture.format;j=bt===Yd||bt===Wd||bt===Xd}if(j){const bt=X.texture.type,Ct=bt===fa||bt===Dr||bt===Wo||bt===Yo||bt===Vd||bt===kd,Dt=jt.getClearColor(),Bt=jt.getClearAlpha(),te=Dt.r,Yt=Dt.g,Xt=Dt.b;Ct?(E[0]=te,E[1]=Yt,E[2]=Xt,E[3]=Bt,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=te,T[1]=Yt,T[2]=Xt,T[3]=Bt,F.clearBufferiv(F.COLOR,0,T))}else rt|=F.COLOR_BUFFER_BIT}Y&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),jt.dispose(),Gt.dispose(),$t.dispose(),Vt.dispose(),A.dispose(),tt.dispose(),ht.dispose(),Le.dispose(),k.dispose(),Pt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ln),lt.removeEventListener("sessionend",Sn),Pn.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=Ue.autoReset,Y=Ft.enabled,at=Ft.autoUpdate,rt=Ft.needsUpdate,j=Ft.type;Nt(),Ue.autoReset=R,Ft.enabled=Y,Ft.autoUpdate=at,Ft.needsUpdate=rt,Ft.type=j}function Ot(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const Y=R.target;Y.removeEventListener("dispose",ae),Ve(Y)}function Ve(R){en(R),Vt.remove(R)}function en(R){const Y=Vt.get(R).programs;Y!==void 0&&(Y.forEach(function(at){Pt.releaseProgram(at)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,at,rt,j,bt){Y===null&&(Y=Ge);const Ct=j.isMesh&&j.matrixWorld.determinant()<0,Dt=er(R,Y,at,rt,j);Wt.setMaterial(rt,Ct);let Bt=at.index,te=1;if(rt.wireframe===!0){if(Bt=Tt.getWireframeAttribute(at),Bt===void 0)return;te=2}const Yt=at.drawRange,Xt=at.attributes.position;let pe=Yt.start*te,Te=(Yt.start+Yt.count)*te;bt!==null&&(pe=Math.max(pe,bt.start*te),Te=Math.min(Te,(bt.start+bt.count)*te)),Bt!==null?(pe=Math.max(pe,0),Te=Math.min(Te,Bt.count)):Xt!=null&&(pe=Math.max(pe,0),Te=Math.min(Te,Xt.count));const Ye=Te-pe;if(Ye<0||Ye===1/0)return;Le.setup(j,rt,Dt,at,Bt);let xe,ye=It;if(Bt!==null&&(xe=gt.get(Bt),ye=ue,ye.setIndex(xe)),j.isMesh)rt.wireframe===!0?(Wt.setLineWidth(rt.wireframeLinewidth*fe()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(j.isLine){let qt=rt.linewidth;qt===void 0&&(qt=1),Wt.setLineWidth(qt*fe()),j.isLineSegments?ye.setMode(F.LINES):j.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else j.isPoints?ye.setMode(F.POINTS):j.isSprite&&ye.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Yu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))ye.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,je=j._multiDrawCounts,Me=j._multiDrawCount,An=Bt?gt.get(Bt).bytesPerElement:1,va=Vt.get(rt).currentProgram.getUniforms();for(let ke=0;ke<Me;ke++)va.setValue(F,"_gl_DrawID",ke),ye.render(qt[ke]/An,je[ke])}else if(j.isInstancedMesh)ye.renderInstances(pe,Ye,j.count);else if(at.isInstancedBufferGeometry){const qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,je=Math.min(at.instanceCount,qt);ye.renderInstances(pe,Ye,je)}else ye.render(pe,Ye)};function Ee(R,Y,at){R.transparent===!0&&R.side===aa&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,ga(R,Y,at),R.side=Qa,R.needsUpdate=!0,ga(R,Y,at),R.side=aa):ga(R,Y,at)}this.compile=function(R,Y,at=null){at===null&&(at=R),_=$t.get(at),_.init(Y),N.push(_),at.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==at&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const rt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const bt=j.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){const Dt=bt[Ct];Ee(Dt,at,j),rt.add(Dt)}else Ee(bt,at,j),rt.add(bt)}),_=N.pop(),rt},this.compileAsync=function(R,Y,at=null){const rt=this.compile(R,Y,at);return new Promise(j=>{function bt(){if(rt.forEach(function(Ct){Vt.get(Ct).currentProgram.isReady()&&rt.delete(Ct)}),rt.size===0){j(R);return}setTimeout(bt,10)}ve.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Wn=null;function mn(R){Wn&&Wn(R)}function ln(){Pn.stop()}function Sn(){Pn.start()}const Pn=new w0;Pn.setAnimationLoop(mn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){Wn=R,lt.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},lt.addEventListener("sessionstart",ln),lt.addEventListener("sessionend",Sn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Y),Y=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,X),_=$t.get(R,N.length),_.init(Y),N.push(_),Lt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,mt=At.init(this.clippingPlanes,St),y=Gt.get(R,O.length),y.init(),O.push(y),lt.enabled===!0&&lt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&$a(bt,Y,-1/0,C.sortObjects)}$a(R,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Et,L),Be=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Be&&jt.addToRenderList(y,R),this.info.render.frame++,mt===!0&&At.beginShadows();const at=_.state.shadowsArray;Ft.render(at,R,Y),mt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,j=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(j.length>0)for(let Ct=0,Dt=bt.length;Ct<Dt;Ct++){const Bt=bt[Ct];il(rt,j,R,Bt)}Be&&jt.render(R);for(let Ct=0,Dt=bt.length;Ct<Dt;Ct++){const Bt=bt[Ct];nl(y,R,Bt,Bt.viewport)}}else j.length>0&&il(rt,j,R,Y),Be&&jt.render(R),nl(y,R,Y);X!==null&&z===0&&(U.updateMultisampleRenderTarget(X),U.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(C,R,Y),Le.resetDefaultState(),D=-1,w=null,N.pop(),N.length>0?(_=N[N.length-1],mt===!0&&At.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function $a(R,Y,at,rt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){rt&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Lt);const Ct=ht.update(R),Dt=R.material;Dt.visible&&y.push(R,Ct,Dt,at,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ct=ht.update(R),Dt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Kt.copy(Ct.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(Lt)),Array.isArray(Dt)){const Bt=Ct.groups;for(let te=0,Yt=Bt.length;te<Yt;te++){const Xt=Bt[te],pe=Dt[Xt.materialIndex];pe&&pe.visible&&y.push(R,Ct,pe,at,Kt.z,Xt)}}else Dt.visible&&y.push(R,Ct,Dt,at,Kt.z,null)}}const bt=R.children;for(let Ct=0,Dt=bt.length;Ct<Dt;Ct++)$a(bt[Ct],Y,at,rt)}function nl(R,Y,at,rt){const j=R.opaque,bt=R.transmissive,Ct=R.transparent;_.setupLightsView(at),mt===!0&&At.setGlobalState(C.clippingPlanes,at),rt&&Wt.viewport(V.copy(rt)),j.length>0&&tr(j,Y,at),bt.length>0&&tr(bt,Y,at),Ct.length>0&&tr(Ct,Y,at),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function il(R,Y,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new Ur(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Qo:fa,minFilter:wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=_.state.transmissionRenderTarget[rt.id],Ct=rt.viewport||V;bt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);const Dt=C.getRenderTarget();C.setRenderTarget(bt),C.getClearColor(xt),pt=C.getClearAlpha(),pt<1&&C.setClearColor(16777215,.5),C.clear(),Be&&jt.render(at);const Bt=C.toneMapping;C.toneMapping=Ka;const te=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),mt===!0&&At.setGlobalState(C.clippingPlanes,rt),tr(R,at,rt),U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Xt=0,pe=Y.length;Xt<pe;Xt++){const Te=Y[Xt],Ye=Te.object,xe=Te.geometry,ye=Te.material,qt=Te.group;if(ye.side===aa&&Ye.layers.test(rt.layers)){const je=ye.side;ye.side=Vn,ye.needsUpdate=!0,ma(Ye,at,rt,xe,ye,qt),ye.side=je,ye.needsUpdate=!0,Yt=!0}}Yt===!0&&(U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt))}C.setRenderTarget(Dt),C.setClearColor(xt,pt),te!==void 0&&(rt.viewport=te),C.toneMapping=Bt}function tr(R,Y,at){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,bt=R.length;j<bt;j++){const Ct=R[j],Dt=Ct.object,Bt=Ct.geometry,te=Ct.group;let Yt=Ct.material;Yt.allowOverride===!0&&rt!==null&&(Yt=rt),Dt.layers.test(at.layers)&&ma(Dt,Y,at,Bt,Yt,te)}}function ma(R,Y,at,rt,j,bt){R.onBeforeRender(C,Y,at,rt,j,bt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,Y,at,rt,R,bt),j.transparent===!0&&j.side===aa&&j.forceSinglePass===!1?(j.side=Vn,j.needsUpdate=!0,C.renderBufferDirect(at,Y,rt,j,R,bt),j.side=Qa,j.needsUpdate=!0,C.renderBufferDirect(at,Y,rt,j,R,bt),j.side=aa):C.renderBufferDirect(at,Y,rt,j,R,bt),R.onAfterRender(C,Y,at,rt,j,bt)}function ga(R,Y,at){Y.isScene!==!0&&(Y=Ge);const rt=Vt.get(R),j=_.state.lights,bt=_.state.shadowsArray,Ct=j.state.version,Dt=Pt.getParameters(R,j.state,bt,Y,at),Bt=Pt.getProgramCacheKey(Dt);let te=rt.programs;rt.environment=R.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(R.isMeshStandardMaterial?tt:A).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",ae),te=new Map,rt.programs=te);let Yt=te.get(Bt);if(Yt!==void 0){if(rt.currentProgram===Yt&&rt.lightsStateVersion===Ct)return Ni(R,Dt),Yt}else Dt.uniforms=Pt.getUniforms(R),R.onBeforeCompile(Dt,C),Yt=Pt.acquireProgram(Dt,Bt),te.set(Bt,Yt),rt.uniforms=Dt.uniforms;const Xt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=At.uniform),Ni(R,Dt),rt.needsLights=nn(R),rt.lightsStateVersion=Ct,rt.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=Yt,rt.uniformsList=null,Yt}function Li(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=qu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ni(R,Y){const at=Vt.get(R);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function er(R,Y,at,rt,j){Y.isScene!==!0&&(Y=Ge),U.resetTextureUnits();const bt=Y.fog,Ct=rt.isMeshStandardMaterial?Y.environment:null,Dt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ps,Bt=(rt.isMeshStandardMaterial?tt:A).get(rt.envMap||Ct),te=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Yt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,pe=!!at.morphAttributes.normal,Te=!!at.morphAttributes.color;let Ye=Ka;rt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ye=C.toneMapping);const xe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ye=xe!==void 0?xe.length:0,qt=Vt.get(rt),je=_.state.lights;if(mt===!0&&(St===!0||R!==w)){const gn=R===w&&rt.id===D;At.setState(rt,R,gn)}let Me=!1;rt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==je.state.version||qt.outputColorSpace!==Dt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==Bt||rt.fog===!0&&qt.fog!==bt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==At.numPlanes||qt.numIntersection!==At.numIntersection)||qt.vertexAlphas!==te||qt.vertexTangents!==Yt||qt.morphTargets!==Xt||qt.morphNormals!==pe||qt.morphColors!==Te||qt.toneMapping!==Ye||qt.morphTargetsCount!==ye)&&(Me=!0):(Me=!0,qt.__version=rt.version);let An=qt.currentProgram;Me===!0&&(An=ga(rt,Y,j));let va=!1,ke=!1,Pi=!1;const Fe=An.getUniforms(),Rn=qt.uniforms;if(Wt.useProgram(An.program)&&(va=!0,ke=!0,Pi=!0),rt.id!==D&&(D=rt.id,ke=!0),va||w!==R){Wt.buffers.depth.getReversed()?(Rt.copy(R.projectionMatrix),cE(Rt),fE(Rt),Fe.setValue(F,"projectionMatrix",Rt)):Fe.setValue(F,"projectionMatrix",R.projectionMatrix),Fe.setValue(F,"viewMatrix",R.matrixWorldInverse);const Mn=Fe.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,oe.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,ke=!0,Pi=!0)}if(j.isSkinnedMesh){Fe.setOptional(F,j,"bindMatrix"),Fe.setOptional(F,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Fe.setValue(F,"boneTexture",gn.boneTexture,U))}j.isBatchedMesh&&(Fe.setOptional(F,j,"batchingTexture"),Fe.setValue(F,"batchingTexture",j._matricesTexture,U),Fe.setOptional(F,j,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",j._indirectTexture,U),Fe.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",j._colorsTexture,U));const un=at.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Qt.update(j,at,An),(ke||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Fe.setValue(F,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Rn.envMap.value=Bt,Rn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(Rn.envMapIntensity.value=Y.environmentIntensity),ke&&(Fe.setValue(F,"toneMappingExposure",C.toneMappingExposure),qt.needsLights&&_a(Rn,Pi),bt&&rt.fog===!0&&wt.refreshFogUniforms(Rn,bt),wt.refreshMaterialUniforms(Rn,rt,q,Z,_.state.transmissionRenderTarget[R.id]),qu.upload(F,Li(qt),Rn,U)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(qu.upload(F,Li(qt),Rn,U),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Fe.setValue(F,"center",j.center),Fe.setValue(F,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(F,"normalMatrix",j.normalMatrix),Fe.setValue(F,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const gn=rt.uniformsGroups;for(let Mn=0,Ei=gn.length;Mn<Ei;Mn++){const Ii=gn[Mn];k.update(Ii,An),k.bind(Ii,An)}}return An}function _a(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,at){const rt=Vt.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=Y,Vt.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const at=Vt.get(R);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0};const al=F.createFramebuffer();this.setRenderTarget=function(R,Y=0,at=0){X=R,G=Y,z=at;let rt=!0,j=null,bt=!1,Ct=!1;if(R){const Bt=Vt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Bt.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Bt.__hasExternalTextures)U.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(Bt.__boundDepthTexture!==Xt){if(Xt!==null&&Vt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const Yt=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[Y])?j=Yt[Y][at]:j=Yt[Y],bt=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?j=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?j=Yt[at]:j=Yt,V.copy(R.viewport),ut.copy(R.scissor),st=R.scissorTest}else V.copy($).multiplyScalar(q).floor(),ut.copy(yt).multiplyScalar(q).floor(),st=Mt;if(at!==0&&(j=al),Wt.bindFramebuffer(F.FRAMEBUFFER,j)&&rt&&Wt.drawBuffers(R,j),Wt.viewport(V),Wt.scissor(ut),Wt.setScissorTest(st),bt){const Bt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,at)}else if(Ct){const Bt=Vt.get(R.texture),te=Y;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,at,te)}else if(R!==null&&at!==0){const Bt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(R,Y,at,rt,j,bt,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){Wt.bindFramebuffer(F.FRAMEBUFFER,Dt);try{const Bt=R.texture,te=Bt.format,Yt=Bt.type;if(!ie.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-rt&&at>=0&&at<=R.height-j&&F.readPixels(Y,at,rt,j,ne.convert(te),ne.convert(Yt),bt)}finally{const Bt=X!==null?Vt.get(X).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,at,rt,j,bt,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(Y>=0&&Y<=R.width-rt&&at>=0&&at<=R.height-j){Wt.bindFramebuffer(F.FRAMEBUFFER,Dt);const Bt=R.texture,te=Bt.format,Yt=Bt.type;if(!ie.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,bt.byteLength,F.STREAM_READ),F.readPixels(Y,at,rt,j,ne.convert(te),ne.convert(Yt),0);const pe=X!==null?Vt.get(X).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,pe);const Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await uE(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,bt),F.deleteBuffer(Xt),F.deleteSync(Te),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,at=0){const rt=Math.pow(2,-at),j=Math.floor(R.image.width*rt),bt=Math.floor(R.image.height*rt),Ct=Y!==null?Y.x:0,Dt=Y!==null?Y.y:0;U.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ct,Dt,j,bt),Wt.unbindTexture()};const rl=F.createFramebuffer(),Oi=F.createFramebuffer();this.copyTextureToTexture=function(R,Y,at=null,rt=null,j=0,bt=null){bt===null&&(j!==0?(Yu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=j,j=0):bt=0);let Ct,Dt,Bt,te,Yt,Xt,pe,Te,Ye;const xe=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(at!==null)Ct=at.max.x-at.min.x,Dt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,Yt=at.min.y,Xt=at.isBox3?at.min.z:0;else{const un=Math.pow(2,-j);Ct=Math.floor(xe.width*un),Dt=Math.floor(xe.height*un),R.isDataArrayTexture?Bt=xe.depth:R.isData3DTexture?Bt=Math.floor(xe.depth*un):Bt=1,te=0,Yt=0,Xt=0}rt!==null?(pe=rt.x,Te=rt.y,Ye=rt.z):(pe=0,Te=0,Ye=0);const ye=ne.convert(Y.format),qt=ne.convert(Y.type);let je;Y.isData3DTexture?(U.setTexture3D(Y,0),je=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),je=F.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const Me=F.getParameter(F.UNPACK_ROW_LENGTH),An=F.getParameter(F.UNPACK_IMAGE_HEIGHT),va=F.getParameter(F.UNPACK_SKIP_PIXELS),ke=F.getParameter(F.UNPACK_SKIP_ROWS),Pi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,Yt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Rn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const un=Vt.get(R),gn=Vt.get(Y),Mn=Vt.get(un.__renderTarget),Ei=Vt.get(gn.__renderTarget);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ii=0;Ii<Bt;Ii++)Fe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,j,Xt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(Y).__webglTexture,bt,Ye+Ii)),F.blitFramebuffer(te,Yt,Ct,Dt,pe,Te,Ct,Dt,F.DEPTH_BUFFER_BIT,F.NEAREST);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Vt.has(R)){const un=Vt.get(R),gn=Vt.get(Y);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,rl),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Oi);for(let Mn=0;Mn<Bt;Mn++)Fe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,j,Xt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,j),Rn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gn.__webglTexture,bt,Ye+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gn.__webglTexture,bt),j!==0?F.blitFramebuffer(te,Yt,Ct,Dt,pe,Te,Ct,Dt,F.COLOR_BUFFER_BIT,F.NEAREST):Rn?F.copyTexSubImage3D(je,bt,pe,Te,Ye+Mn,te,Yt,Ct,Dt):F.copyTexSubImage2D(je,bt,pe,Te,te,Yt,Ct,Dt);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Rn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(je,bt,pe,Te,Ye,Ct,Dt,Bt,ye,qt,xe.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(je,bt,pe,Te,Ye,Ct,Dt,Bt,ye,xe.data):F.texSubImage3D(je,bt,pe,Te,Ye,Ct,Dt,Bt,ye,qt,xe):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,bt,pe,Te,Ct,Dt,ye,qt,xe.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,bt,pe,Te,xe.width,xe.height,ye,xe.data):F.texSubImage2D(F.TEXTURE_2D,bt,pe,Te,Ct,Dt,ye,qt,xe);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,An),F.pixelStorei(F.UNPACK_SKIP_PIXELS,va),F.pixelStorei(F.UNPACK_SKIP_ROWS,ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pi),bt===0&&Y.generateMipmaps&&F.generateMipmap(je),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,at=null,rt=null,j=0){return Yu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,at,rt,j)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){G=0,z=0,X=null,Wt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const zv={type:"change"},Kd={type:"start"},N0={type:"end"},zu=new jd,Bv=new qa,wR=Math.cos(70*oE.DEG2RAD),hn=new nt,Gn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wh=1e-6;class CR extends XE{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Lr,this._lastTargetPosition=new nt,this._quat=new Lr().setFromUnitVectors(t.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fv,this._sphericalDelta=new fv,this._scale=1,this._panOffset=new nt,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new nt,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UR.bind(this),this._onPointerDown=DR.bind(this),this._onPointerUp=LR.bind(this),this._onContextMenu=FR.bind(this),this._onMouseWheel=PR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=zR.bind(this),this._onTouchMove=BR.bind(this),this._onMouseDown=NR.bind(this),this._onMouseMove=OR.bind(this),this._interceptControlDown=HR.bind(this),this._interceptControlUp=GR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zv),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;hn.copy(i).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Gn:r>Math.PI&&(r-=Gn),l<-Math.PI?l+=Gn:l>Math.PI&&(l-=Gn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),i.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=hn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new nt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new nt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(zu.origin.copy(this.object.position),zu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zu.direction))<wR?this.object.lookAt(this.target):(Bv.setFromNormalAndCoplanarPoint(this.object.up,this.target),zu.intersectPlane(Bv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wh||this._lastTargetPosition.distanceToSquared(this.target)>Wh?(this.dispatchEvent(zv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Gn/60*this.autoRotateSpeed*t:Gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){hn.setFromMatrixColumn(i,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,i){this.screenSpacePanning===!0?hn.setFromMatrixColumn(i,1):(hn.setFromMatrixColumn(i,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;hn.copy(l).sub(this.target);let u=hn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/r.clientHeight,this.object.matrix),this._panUp(2*i*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,u=i-r.top,f=r.width,d=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),u=.5*(t.pageY+r.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new de,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function DR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function UR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function LR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(N0),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function NR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ze.DOLLY;break;case ws.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}break;case ws.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Kd)}function OR(s){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function PR(s){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(s.preventDefault(),this.dispatchEvent(Kd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(N0))}function IR(s){this.enabled!==!1&&this._handleKeyDown(s)}function zR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ze.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ze.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(Kd)}function BR(s){switch(this._trackPointer(s),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ze.NONE}}function FR(s){this.enabled!==!1&&s.preventDefault()}function HR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function GR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const VR=()=>{const s=ct.useRef(),t=ct.useRef(),i=ct.useRef(),r=ct.useRef(),l=ct.useRef(),u=ct.useRef([]),f=ct.useRef([]),d=300,m=100,p=8e3,g=500;ct.useEffect(()=>{const v=s.current;if(!v)return;const S=new IE;S.background=new we(16777215),r.current=S;const E=new fi(75,window.innerWidth/window.innerHeight,.1,1e4);E.position.z=2e3,t.current=E;const T=new RR({alpha:!0});T.setSize(window.innerWidth,window.innerHeight),v.appendChild(T.domElement),i.current=T,new CR(E,T.domElement);const y=new pa,_=new Float32Array(p*3),O=new Float32Array(p*3);y.setAttribute("position",new hi(_,3)),y.setAttribute("color",new hi(O,3));const N=new A0({vertexColors:!0,size:3}),C=new FE(y,N);S.add(C),l.current=C,u.current=[],f.current=[],x(d);const B=setInterval(()=>{const X=u.current.length/3;X<p?x(Math.min(m,p-X)):clearInterval(B)},300),G=()=>{E.position.z-=1,C&&(C.rotation.y+=.001,C.rotation.x+=.003),T.render(S,E),requestAnimationFrame(G)};G();const z=()=>{!t.current||!i.current||(t.current.aspect=window.innerWidth/window.innerHeight,t.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",z),()=>{clearInterval(B),window.removeEventListener("resize",z),T.domElement&&v.removeChild(T.domElement)}},[]);const x=v=>{const S=l.current.geometry,E=u.current,T=f.current;E.length;for(let y=0;y<v;y++){let _=Math.random()*g-g/2,O=Math.random()*g-g/2,N=Math.random()*g-g/2;E.push(_,O,N),Math.random()<.05?T.push(1,0,0):T.push(0,0,1)}S.attributes.position.array.set(new Float32Array(E)),S.attributes.color.array.set(new Float32Array(T)),S.setDrawRange(0,E.length/3),S.attributes.position.needsUpdate=!0,S.attributes.color.needsUpdate=!0};return ot.jsx("div",{ref:s,style:{position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:-1}})},kR=()=>{const[s,t]=ct.useState([]),i=ct.useRef(0),[r,l]=ct.useState(""),f="I am a student, researcher, and an aspiring creative technologist from Mongolia, currently wrapping up my senior year of college in Shanghai. Through practice, I explore the creative dynamics between humans and algorithms.".split(" "),d=new Set(["student,","researcher,","creative","technologist","emergent","dynamics","humans","algorithms."]),m=()=>{if(i.current<f.length){const p=f[i.current];t(g=>[...g,p]),i.current++}};return ct.useEffect(()=>{const p=()=>{m()};document.addEventListener("keydown",p);const g=/Mobi|Android/i.test(navigator.userAgent);let x=null;return g&&setTimeout(()=>{x=setInterval(m,500)},1e3),()=>{document.removeEventListener("keydown",p),x&&clearInterval(x)}},[]),ct.useEffect(()=>{const p="try typing, dragging, or scrolling";let E=!1,T="",y=0;const _=()=>{!E&&y<p.length?(T+=p[y],l(T),y++,setTimeout(_,50)):!E&&y===p.length?(E=!0,setTimeout(_,5e3)):E&&T.length>0?(T=T.slice(0,-1),l(T),setTimeout(_,50)):E&&T.length===0&&(E=!1,y=0,setTimeout(_,3e3))};return _(),()=>{}},[]),ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{id:"header",children:ot.jsxs("ul",{id:"nav",children:[ot.jsx("li",{children:ot.jsxs(ei,{to:"/",id:"name",children:["EMY ",ot.jsx("br",{})," SAINBAYAR"]})}),ot.jsxs("div",{className:"right-nav",children:[ot.jsx("li",{children:ot.jsx(ei,{to:"/projects",id:"projects",children:"Index ->"})}),ot.jsx("li",{children:ot.jsx(ei,{to:"/info",id:"info",children:"About ->"})})]})]})}),ot.jsx("div",{id:"main",children:ot.jsx("div",{className:"typed-line",children:s.map((p,g)=>ot.jsx("span",{style:{color:d.has(p.trim())?"red":"inherit",marginRight:"4px",display:"inline-block",whiteSpace:"nowrap"},children:p},g))})}),ot.jsx("div",{id:"instructions",children:r})]})},XR=()=>{ct.useEffect(()=>{const t=document.getElementById("name");t&&(t.innerText="<- BACK TO HOME")},[]);const s=[{title:">> Endless (Authorless) Poem",slug:"endless-authorless-poem"},{title:">> LLMs Understand Numbers (Differently)?",slug:"llms-numbers"},{title:">> Enfut",slug:"enfut"},{title:">> Live Coding",slug:"live-coding"},{title:">> Breakfast: 12000, After Guild (Ongoing)",slug:"breakfast-12000-ag"},{title:">> Algorithmic Playwright (Ongoing)",slug:"algorithmic-playwright"}];return ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{id:"header",children:ot.jsxs("ul",{id:"nav",children:[ot.jsx("li",{children:ot.jsxs(ei,{to:"/",id:"name",children:["EMY ",ot.jsx("br",{})," SAINBAYAR"]})}),ot.jsxs("div",{className:"right-nav",children:[ot.jsx("li",{children:ot.jsx(ei,{to:"/projects",id:"projects",style:{color:"red"},children:"Index ->"})}),ot.jsx("li",{children:ot.jsx(ei,{to:"/info",id:"infoHtml",children:"About ->"})})]})]})}),ot.jsx("div",{id:"projects-container",children:ot.jsxs("div",{className:"receipt-column",children:[ot.jsxs("div",{className:"receipt-heading",children:[ot.jsx("pre",{className:"ascii-heading","aria-hidden":"true",children:String.raw`         
  _ ___    _ ___   ____     LJ    ____     ____   FJ_     ____   
 J '__ J  J '__ ",F __ J     _   F __ J   F ___J.J  _|   F ___J  
 | |--| | | |__|-| |--| |   J J | _____J | |---LJ| |-'  | '----_ 
 F L__J J F L  '-F L__J J   J  LF L___--.F L___--F |__-.)-____  L
J  _____/J__L   J\______/,-_J  J\______/J\______/\_____J\______/F
|_J_____F|__L    J______F\_____/J______F J______FJ_____FJ______F 
L_J                      \_____/                                 
               `}),ot.jsx("div",{className:"text-heading","aria-hidden":"true",children:"*** PROJECTS ***"})]}),ot.jsx("ul",{className:"project-list",children:s.map((t,i)=>ot.jsx("li",{className:"project-line",children:ot.jsx(ei,{to:`/projects/${t.slug}`,children:t.title})},i))})]})})]})},WR=()=>(ct.useEffect(()=>{const s=document.getElementById("name");s&&(s.innerText="<- BACK TO HOME")},[]),ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{id:"header",children:ot.jsxs("ul",{id:"nav",children:[ot.jsx("li",{children:ot.jsxs(ei,{to:"/",id:"name",children:["EMY ",ot.jsx("br",{})," SAINBAYAR"]})}),ot.jsxs("div",{className:"right-nav",children:[ot.jsx("li",{children:ot.jsx(ei,{to:"/projects",id:"projects",children:"Index ->"})}),ot.jsx("li",{children:ot.jsx(ei,{to:"/info",id:"infoHtml",style:{color:"red"},children:"About ->"})})]})]})}),ot.jsxs("div",{id:"info-container",className:"active",children:[ot.jsxs("div",{id:"name",children:[ot.jsx("div",{className:"title",children:"EMY (EMUJIN) SAINBAYAR"}),ot.jsxs("div",{className:"descriptions",children:[" ","I am a student, researcher and an aspiring creative technologist from Mongolia, currently wrapping up my senior year of college in Shanghai. Through practice, I explore the creative dynamics between humans and algorithms."]})]}),ot.jsx(ot.Fragment,{children:ot.jsxs("div",{id:"currently",children:[ot.jsx("div",{className:"title",children:"CURRENTLY"}),ot.jsxs("div",{className:"descriptions",children:[ot.jsxs("div",{className:"role",children:["Student @",ot.jsx("a",{href:"https://shanghai.nyu.edu/academics/majors/interactive-media-arts",target:"_blank",rel:"noopener noreferrer",children:"IMA"})]}),ot.jsxs("div",{className:"role",children:["Researcher @",ot.jsx("a",{href:"https://ml5js.org",target:"_blank",rel:"noopener noreferrer",children:"ML5.JS"})]}),ot.jsxs("div",{className:"role",children:["Research Assistant @",ot.jsx("a",{href:"https://www.e-flux.com/architecture/intensification/656807/soft-future/",target:"_blank",rel:"noopener noreferrer",children:"Soft Technologies"})]}),ot.jsxs("div",{className:"role",children:["Creator @",ot.jsx("a",{href:"https://www.instagram.com/zeencollective/",target:"_blank",rel:"noopener noreferrer",children:"ZEEN* Collective"})]})]})]})}),ot.jsxs("div",{id:"education",children:[ot.jsx("div",{className:"title",children:"EDUCATION"}),ot.jsx("div",{className:"descriptions",children:"Bachelor of Science in Interactive Media Arts, NYU Shanghai, 2025"})]}),ot.jsx("div",{id:"contact",children:ot.jsx("div",{className:"title",children:ot.jsx("a",{href:"mailto:emysainbayar@nyu.edu",style:{color:"inherit",textDecoration:"underline"},children:"emysainbayar@nyu.edu"})})})]})]})),Hs=({children:s})=>ot.jsxs(ot.Fragment,{children:[ot.jsx("div",{id:"header",children:ot.jsx("ul",{id:"nav",children:ot.jsx("li",{children:ot.jsx(ei,{to:"/projects",id:"projects",style:{color:"red"},children:"<- BACK TO INDEX"})})})}),ot.jsx("main",{children:s})]}),Gs=({title:s,info:t,description:i,media:r})=>ot.jsxs("div",{className:"project-wrapper",children:[ot.jsxs("div",{className:"left-panel",children:[ot.jsx("h1",{className:"project-title",children:s}),ot.jsx("p",{className:"project-info",children:t}),ot.jsx("div",{className:"project-description",children:i.map((l,u)=>ot.jsx("p",{children:l},u))})]}),ot.jsx("div",{className:"right-panel",children:r.map((l,u)=>l.type==="embed"?ot.jsx("div",{className:"project-media",dangerouslySetInnerHTML:{__html:l.embedCode}},u):l.type==="video"?ot.jsxs("video",{controls:!0,width:"100%",children:[ot.jsx("source",{src:l.src,type:"video/mp4"}),"Your browser does not support the video tag."]},u):ot.jsx("img",{src:l.src,alt:"",className:"project-media"},u))})]}),YR=()=>ot.jsx(Hs,{children:ot.jsx(Gs,{title:"ENFUT",info:"Simulation Game | Unity | 2025",description:["ENFUT is my first interactive simulation I built to explore the emergent behaviors that might arise from a world that is both precoded and pre-mediated. I wanted to see how digital beings might “decide” to move through such a space on their own terms.","Set within a speculative forest, the work stages a system in which agents don’t follow the player’s commands, but instead behave according to their own internal states. As a player, your role is observational. You’re tasked with decoding the conditional logics that shape this digital ecology — but you’re being watched just as much as watching.","The agents aren’t limited to visible creatures; I’ve treated the changes in sound, growth of plants, for example, as agents, too.",ot.jsxs(ot.Fragment,{children:["Try Enfut"," ",ot.jsx("a",{href:"https://emsbay.itch.io/enfut-web-build",target:"_blank",rel:"noopener noreferrer",children:"in the browser"}),"."]})],media:[{type:"image",src:"/imgs/enfut/enfut-1.jpeg"},{type:"embed",embedCode:'<iframe title="vimeo-player" src="https://player.vimeo.com/video/1077492825?h=1d74e5aec0" width="640" height="360" frameborder="0"    allowfullscreen></iframe>'},{type:"embed",embedCode:'<iframe title="vimeo-player" src="https://player.vimeo.com/video/1077491195?h=903bdb8584" width="640" height="360" frameborder="0"    allowfullscreen></iframe>'}]})}),qR=()=>ot.jsx(Hs,{children:ot.jsx(Gs,{title:"LLMs Understand Numbers (Differently)?",info:"Algorithms | 2024",description:["This project explores how large language models (LLMs) respond to numbers when removed from strictly mathematical contexts.",'By prompting the model with questions like "How does 531 make you feel?", we investigate if a numerical input can elicit expressive or interpretive responses. Rather than emphasizing correctness or computation, the focus is on meaning through association.',"P5.js is used as a middle layer to visualize the LLMs visual response."],media:[{type:"embed",embedCode:'<iframe title="vimeo-player" src="https://player.vimeo.com/video/1081432954?h=62a05c632f" width="640" height="360" frameborder="0"    allowfullscreen></iframe>'}]})}),jR=()=>ot.jsx(Hs,{children:ot.jsx(Gs,{title:"Endless (Authorless) Poem",info:"Algorithms | 2024",description:["An endless poem generated by a simple Markov chain-based algorithm that constructs 4-gram probability distributions scraped from Tumblr's #word-vomit tag, four posts at a time.","Titled as an Authorless poem, this project questions the authorship of the data used to train text large language models.","Credits (posts from): @fizzwizz-22, @wyzechyld, @starry-eyer, @theogonize."],media:[{type:"embed",embedCode:'<iframe title="vimeo-player" src="https://player.vimeo.com/video/1081535254?h=f32784ca2f" width="640" height="360" frameborder="0"    allowfullscreen></iframe>'}]})}),ZR=()=>ot.jsx(Hs,{children:ot.jsx(Gs,{title:"上highsubroute",info:"Live Coding | 2025",description:["First Live Coding performance @ CEDAR KITCHEN in March, 2025.","Performed with Shanghai Subroute."],media:[{type:"embed",embedCode:'<iframe title="vimeo-player" src="https://player.vimeo.com/video/1070392143?h=8c21b387de" width="640" height="360" frameborder="0"    allowfullscreen></iframe>'}]})}),KR=()=>ot.jsx(Hs,{children:ot.jsx(Gs,{title:"Breakfast: 12000 After Guild",info:"Speculative | Ongoing",description:["Inspired by Frank Herbert's desert planet Arrakis, this speculative project envisions how a breakfast routine might look like in a distant future shaped by extreme water scarcity.","Set as a collaborative interactive dining experience, the primary materials used to create the speculative meal are shelf-stable contemporary food products. These recipes are 100% water-free with dishware 3D printed from eggshell biocomposite.",ot.jsxs(ot.Fragment,{children:["Accompanying the meal is"," ",ot.jsx("a",{href:"https://atrius-digitial-encyclopedia.glitch.me/",target:"_blank",rel:"noopener noreferrer",children:"Atrius"}),", a digital encyclopedia which provides further information on the ingredients and the world-building of the project."]}),"Created in collaboration with Annie Church, as a part of Imogene and Mercer.","A more refined version of this project will be presented at the 2025 Shanghai Climate Week Conference."],media:[{type:"image",src:"/imgs/breakfast/br1.jpeg"},{type:"image",src:"/imgs/breakfast/br4.jpeg"},{type:"image",src:"/imgs/breakfast/br3.jpeg"}]})}),QR=()=>ot.jsx(Hs,{children:ot.jsx(Gs,{title:"Algorithmic Playwright",info:"Algorithmic Theater | Ongoing",description:["Algorithmic Playwright is my first prototype project of a research on Algorithmic Theater.","The interface requires two users to work. Both users are prompted to enter their character information, select a scene setting, and then asked to act out the script co-generated by a fine-tuned GPT-4 model. In this case, the users step to the role of actors, while the AI acts as a creative collaborator.","My goal with this prototype project was to explore the avenues in which an LLM might surprise you. Both the users step into the project without knowing what play they will be acting out. On top of that, a participant can only see their own character's lines, having to wait how the other participant will react to the story unfolding","Presented at the IMA Show, December 2024."],media:[{type:"image",src:"/imgs/ap/ap1.jpeg"},{type:"image",src:"/imgs/ap/ap2.jpeg"},{type:"embed",embedCode:'<iframe title="vimeo-player" src="https://player.vimeo.com/video/1081566460?h=eada15bdf9" width="640" height="360" frameborder="0"    allowfullscreen></iframe>'},{type:"image",src:"/imgs/ap/ap1.png"}]})});function JR(){return ot.jsxs(ot.Fragment,{children:[ot.jsx(VR,{}),ot.jsxs(lM,{children:[ot.jsx(Qi,{path:"/",element:ot.jsx(kR,{})}),ot.jsx(Qi,{path:"/info",element:ot.jsx(WR,{})}),ot.jsx(Qi,{path:"/projects",element:ot.jsx(XR,{})}),ot.jsx(Qi,{path:"/projects/enfut",element:ot.jsx(YR,{})}),ot.jsx(Qi,{path:"/projects/llms-numbers",element:ot.jsx(qR,{})}),ot.jsx(Qi,{path:"/projects/endless-authorless-poem",element:ot.jsx(jR,{})}),ot.jsx(Qi,{path:"/projects/live-coding",element:ot.jsx(ZR,{})}),ot.jsx(Qi,{path:"/projects/breakfast-12000-ag",element:ot.jsx(KR,{})}),ot.jsx(Qi,{path:"/projects/algorithmic-playwright",element:ot.jsx(QR,{})})]})]})}qy.createRoot(document.getElementById("root")).render(ot.jsx(Fy.StrictMode,{children:ot.jsx(oM,{children:ot.jsx(JR,{})})}));
