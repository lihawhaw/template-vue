import{D as nt,o as rt,r as ot,E as st,B as W,G as ct,n as it,u as qe,h as at,p as Y,s as N,H as ze,I as ie,f as lt,g as ut,J as ft}from"./vue.897bbc33.js";import{_ as ht,c as dt}from"./todo.c3324e03.js";import{_ as pt,H as mt}from"./home.977e03d4.js";import{A as gt}from"./about.fde96edd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const vt={};function yt(e,t){const n=ot("router-view");return rt(),nt(n)}const Rt=pt(vt,[["render",yt]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof window<"u";function Et(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ae(e,t){const n={};for(const r in t){const o=t[r];n[r]=L(o)?o.map(e):e(o)}return n}const Q=()=>{},L=Array.isArray,wt=/\/$/,Pt=e=>e.replace(wt,"");function le(e,t,n="/"){let r,o={},i="",d="";const m=t.indexOf("#");let a=t.indexOf("?");return m<a&&m>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,m>-1?m:t.length),o=e(i)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=Ct(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+d,path:r,query:o,hash:d}}function St(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _e(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function _t(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&Ge(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ge(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!bt(e[n],t[n]))return!1;return!0}function bt(e,t){return L(e)?be(e,t):L(t)?be(t,e):e===t}function be(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ct(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function kt(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pt(e)}const At=/^[^#]+#/;function Ot(e,t){return e.replace(At,"#")+t}function xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const fe=new Map;function Lt(e,t){fe.set(e,t)}function Nt(e){const t=fe.get(e);return fe.delete(e),t}let Ht=()=>location.protocol+"//"+location.host;function Ke(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let m=o.includes(e.slice(i))?e.slice(i).length:1,a=o.slice(m);return a[0]!=="/"&&(a="/"+a),_e(a,"")}return _e(n,e)+r+o}function It(e,t,n,r){let o=[],i=[],d=null;const m=({state:u})=>{const g=Ke(e,location),R=n.value,C=t.value;let b=0;if(u){if(n.value=g,t.value=u,d&&d===R){d=null;return}b=C?u.position-C.position:0}else r(g);o.forEach(E=>{E(n.value,R,{delta:b,type:X.pop,direction:b?b>0?F.forward:F.back:F.unknown})})};function a(){d=n.value}function f(u){o.push(u);const g=()=>{const R=o.indexOf(u);R>-1&&o.splice(R,1)};return i.push(g),g}function s(){const{history:u}=window;!u.state||u.replaceState(S({},u.state,{scroll:te()}),"")}function l(){for(const u of i)u();i=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:a,listen:f,destroy:l}}function ke(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function $t(e){const{history:t,location:n}=window,r={value:Ke(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,f,s){const l=e.indexOf("#"),u=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+a:Ht()+e+a;try{t[s?"replaceState":"pushState"](f,"",u),o.value=f}catch(g){console.error(g),n[s?"replace":"assign"](u)}}function d(a,f){const s=S({},t.state,ke(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});i(a,s,!0),r.value=a}function m(a,f){const s=S({},o.value,t.state,{forward:a,scroll:te()});i(s.current,s,!0);const l=S({},ke(r.value,a,null),{position:s.position+1},f);i(a,l,!1),r.value=a}return{location:r,state:o,push:m,replace:d}}function Bt(e){e=kt(e);const t=$t(e),n=It(e,t.state,t.location,t.replace);function r(i,d=!0){d||n.pauseListeners(),history.go(i)}const o=S({location:"",base:e,go:r,createHref:Ot.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Tt(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Bt(e)}function jt(e){return typeof e=="string"||e&&typeof e=="object"}function Ve(e){return typeof e=="string"||typeof e=="symbol"}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},De=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function G(e,t){return S(new Error,{type:e,[De]:!0},t)}function I(e,t){return e instanceof Error&&De in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",qt={sensitive:!1,strict:!1,start:!0,end:!0},zt=/[.+*?^${}()[\]/\\]/g;function Gt(e,t){const n=S({},qt,t),r=[];let o=n.start?"^":"";const i=[];for(const f of e){const s=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let l=0;l<f.length;l++){const u=f[l];let g=40+(n.sensitive?.25:0);if(u.type===0)l||(o+="/"),o+=u.value.replace(zt,"\\$&"),g+=40;else if(u.type===1){const{value:R,repeatable:C,optional:b,regexp:E}=u;i.push({name:R,repeatable:C,optional:b});const P=E||Oe;if(P!==Oe){g+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${P}): `+M.message)}}let O=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;l||(O=b&&f.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),o+=O,g+=20,b&&(g+=-8),C&&(g+=-20),P===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function m(f){const s=f.match(d),l={};if(!s)return null;for(let u=1;u<s.length;u++){const g=s[u]||"",R=i[u-1];l[R.name]=g&&R.repeatable?g.split("/"):g}return l}function a(f){let s="",l=!1;for(const u of e){(!l||!s.endsWith("/"))&&(s+="/"),l=!1;for(const g of u)if(g.type===0)s+=g.value;else if(g.type===1){const{value:R,repeatable:C,optional:b}=g,E=R in f?f[R]:"";if(L(E)&&!C)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const P=L(E)?E.join("/"):E;if(!P)if(b)u.length<2&&(s.endsWith("/")?s=s.slice(0,-1):l=!0);else throw new Error(`Missing required param "${R}"`);s+=P}}return s||"/"}return{re:d,score:r,keys:i,parse:m,stringify:a}}function Kt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Vt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=Kt(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Dt={type:0,value:""},Ut=/[a-zA-Z0-9_]/;function Wt(e){if(!e)return[[]];if(e==="/")return[[Dt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const o=[];let i;function d(){i&&o.push(i),i=[]}let m=0,a,f="",s="";function l(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:s,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=a}for(;m<e.length;){if(a=e[m++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&l(),d()):a===":"?(l(),n=1):u();break;case 4:u(),n=r;break;case 1:a==="("?n=2:Ut.test(a)?u():(l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--);break;case 2:a===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+a:n=3:s+=a;break;case 3:l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),l(),d(),o}function Qt(e,t,n){const r=Gt(Wt(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Ft(e,t){const n=[],r=new Map;t=Ne({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function i(s,l,u){const g=!u,R=Yt(s);R.aliasOf=u&&u.record;const C=Ne(t,s),b=[R];if("alias"in s){const O=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of O)b.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,P;for(const O of b){const{path:M}=O;if(l&&M[0]!=="/"){const T=l.record.path,H=T[T.length-1]==="/"?"":"/";O.path=l.record.path+(M&&H+M)}if(E=Qt(O,l,C),u?u.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&s.name&&!Le(E)&&d(s.name)),R.children){const T=R.children;for(let H=0;H<T.length;H++)i(T[H],E,u&&u.children[H])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&a(E)}return P?()=>{d(P)}:Q}function d(s){if(Ve(s)){const l=r.get(s);l&&(r.delete(s),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(s);l>-1&&(n.splice(l,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function m(){return n}function a(s){let l=0;for(;l<n.length&&Vt(s,n[l])>=0&&(s.record.path!==n[l].record.path||!Ue(s,n[l]));)l++;n.splice(l,0,s),s.record.name&&!Le(s)&&r.set(s.record.name,s)}function f(s,l){let u,g={},R,C;if("name"in s&&s.name){if(u=r.get(s.name),!u)throw G(1,{location:s});C=u.record.name,g=S(Me(l.params,u.keys.filter(P=>!P.optional).map(P=>P.name)),s.params&&Me(s.params,u.keys.map(P=>P.name))),R=u.stringify(g)}else if("path"in s)R=s.path,u=n.find(P=>P.re.test(R)),u&&(g=u.parse(R),C=u.record.name);else{if(u=l.name?r.get(l.name):n.find(P=>P.re.test(l.path)),!u)throw G(1,{location:s,currentLocation:l});C=u.record.name,g=S({},l.params,s.params),R=u.stringify(g)}const b=[];let E=u;for(;E;)b.unshift(E.record),E=E.parent;return{name:C,path:R,params:g,matched:b,meta:Zt(b)}}return e.forEach(s=>i(s)),{addRoute:i,resolve:f,removeRoute:d,getRoutes:m,getRecordMatcher:o}}function Me(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Yt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Xt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Xt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Le(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zt(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ue(e,t){return t.children.some(n=>n===e||Ue(e,n))}const We=/#/g,Jt=/&/g,en=/\//g,tn=/=/g,nn=/\?/g,Qe=/\+/g,rn=/%5B/g,on=/%5D/g,Fe=/%5E/g,sn=/%60/g,Ye=/%7B/g,cn=/%7C/g,Xe=/%7D/g,an=/%20/g;function pe(e){return encodeURI(""+e).replace(cn,"|").replace(rn,"[").replace(on,"]")}function ln(e){return pe(e).replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function he(e){return pe(e).replace(Qe,"%2B").replace(an,"+").replace(We,"%23").replace(Jt,"%26").replace(sn,"`").replace(Ye,"{").replace(Xe,"}").replace(Fe,"^")}function un(e){return he(e).replace(tn,"%3D")}function fn(e){return pe(e).replace(We,"%23").replace(nn,"%3F")}function hn(e){return e==null?"":fn(e).replace(en,"%2F")}function ee(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function dn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Qe," "),d=i.indexOf("="),m=ee(d<0?i:i.slice(0,d)),a=d<0?null:ee(i.slice(d+1));if(m in t){let f=t[m];L(f)||(f=t[m]=[f]),f.push(a)}else t[m]=a}return t}function He(e){let t="";for(let n in e){const r=e[n];if(n=un(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(i=>i&&he(i)):[r&&he(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function pn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const mn=Symbol(""),Ie=Symbol(""),me=Symbol(""),Ze=Symbol(""),de=Symbol("");function U(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function B(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,m)=>{const a=l=>{l===!1?m(G(4,{from:n,to:t})):l instanceof Error?m(l):jt(l)?m(G(2,{from:t,to:l})):(i&&r.enterCallbacks[o]===i&&typeof l=="function"&&i.push(l),d())},f=e.call(r&&r.instances[o],t,n,a);let s=Promise.resolve(f);e.length<3&&(s=s.then(a)),s.catch(l=>m(l))})}function ue(e,t,n,r){const o=[];for(const i of e)for(const d in i.components){let m=i.components[d];if(!(t!=="beforeRouteEnter"&&!i.instances[d]))if(gn(m)){const f=(m.__vccOpts||m)[t];f&&o.push(B(f,n,r,i,d))}else{let a=m();o.push(()=>a.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${i.path}"`));const s=Et(f)?f.default:f;i.components[d]=s;const u=(s.__vccOpts||s)[t];return u&&B(u,n,r,i,d)()}))}}return o}function gn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=Y(me),n=Y(Ze),r=N(()=>t.resolve(W(e.to))),o=N(()=>{const{matched:a}=r.value,{length:f}=a,s=a[f-1],l=n.matched;if(!s||!l.length)return-1;const u=l.findIndex(z.bind(null,s));if(u>-1)return u;const g=Be(a[f-2]);return f>1&&Be(s)===g&&l[l.length-1].path!==g?l.findIndex(z.bind(null,a[f-2])):u}),i=N(()=>o.value>-1&&En(n.params,r.value.params)),d=N(()=>o.value>-1&&o.value===n.matched.length-1&&Ge(n.params,r.value.params));function m(a={}){return Rn(a)?t[W(e.replace)?"replace":"push"](W(e.to)).catch(Q):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:i,isExactActive:d,navigate:m}}const vn=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=at($e(e)),{options:r}=Y(me),o=N(()=>({[Te(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Te(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ze("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),yn=vn;function Rn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function En(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!L(o)||o.length!==r.length||r.some((i,d)=>i!==o[d]))return!1}return!0}function Be(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Te=(e,t,n)=>e!=null?e:t!=null?t:n,wn=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(de),o=N(()=>e.route||r.value),i=Y(Ie,0),d=N(()=>{let f=W(i);const{matched:s}=o.value;let l;for(;(l=s[f])&&!l.components;)f++;return f}),m=N(()=>o.value.matched[d.value]);ie(Ie,N(()=>d.value+1)),ie(mn,m),ie(de,o);const a=lt();return ut(()=>[a.value,m.value,e.name],([f,s,l],[u,g,R])=>{s&&(s.instances[l]=f,g&&g!==s&&f&&f===u&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),f&&s&&(!g||!z(s,g)||!u)&&(s.enterCallbacks[l]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=o.value,s=e.name,l=m.value,u=l&&l.components[s];if(!u)return je(n.default,{Component:u,route:f});const g=l.props[s],R=g?g===!0?f.params:typeof g=="function"?g(f):g:null,b=ze(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(l.instances[s]=null)},ref:a}));return je(n.default,{Component:b,route:f})||b}}});function je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pn=wn;function Sn(e){const t=Ft(e.routes,e),n=e.parseQuery||dn,r=e.stringifyQuery||He,o=e.history,i=U(),d=U(),m=U(),a=st($);let f=$;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=ae.bind(null,c=>""+c),l=ae.bind(null,hn),u=ae.bind(null,ee);function g(c,p){let h,v;return Ve(c)?(h=t.getRecordMatcher(c),v=p):v=c,t.addRoute(v,h)}function R(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function C(){return t.getRoutes().map(c=>c.record)}function b(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=S({},p||a.value),typeof c=="string"){const y=le(n,c,p.path),A=t.resolve({path:y.path},p),D=o.createHref(y.fullPath);return S(y,A,{params:u(A.params),hash:ee(y.hash),redirectedFrom:void 0,href:D})}let h;if("path"in c)h=S({},c,{path:le(n,c.path,p.path).path});else{const y=S({},c.params);for(const A in y)y[A]==null&&delete y[A];h=S({},c,{params:l(y)}),p.params=l(p.params)}const v=t.resolve(h,p),_=c.hash||"";v.params=s(u(v.params));const k=St(r,S({},c,{hash:ln(_),path:v.path})),w=o.createHref(k);return S({fullPath:k,hash:_,query:r===He?pn(c.query):c.query||{}},v,{redirectedFrom:void 0,href:w})}function P(c){return typeof c=="string"?le(n,c,a.value.path):S({},c)}function O(c,p){if(f!==c)return G(8,{from:p,to:c})}function M(c){return K(c)}function T(c){return M(S(P(c),{replace:!0}))}function H(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=P(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:"path"in v?{}:c.params},v)}}function K(c,p){const h=f=E(c),v=a.value,_=c.state,k=c.force,w=c.replace===!0,y=H(h);if(y)return K(S(P(y),{state:typeof y=="object"?S({},_,y.state):_,force:k,replace:w}),p||h);const A=h;A.redirectedFrom=p;let D;return!k&&_t(r,v,h)&&(D=G(16,{to:A,from:v}),Pe(v,v,!0,!1)),(D?Promise.resolve(D):ye(A,v)).catch(x=>I(x)?I(x,2)?x:oe(x):re(x,A,v)).then(x=>{if(x){if(I(x,2))return K(S({replace:w},P(x.to),{state:typeof x.to=="object"?S({},_,x.to.state):_,force:k}),p||A)}else x=Ee(A,v,!0,w,_);return Re(A,v,x),x})}function Je(c,p){const h=O(c,p);return h?Promise.reject(h):Promise.resolve()}function ve(c){const p=J.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(c):c()}function ye(c,p){let h;const[v,_,k]=_n(c,p);h=ue(v.reverse(),"beforeRouteLeave",c,p);for(const y of v)y.leaveGuards.forEach(A=>{h.push(B(A,c,p))});const w=Je.bind(null,c,p);return h.push(w),j(h).then(()=>{h=[];for(const y of i.list())h.push(B(y,c,p));return h.push(w),j(h)}).then(()=>{h=ue(_,"beforeRouteUpdate",c,p);for(const y of _)y.updateGuards.forEach(A=>{h.push(B(A,c,p))});return h.push(w),j(h)}).then(()=>{h=[];for(const y of k)if(y.beforeEnter)if(L(y.beforeEnter))for(const A of y.beforeEnter)h.push(B(A,c,p));else h.push(B(y.beforeEnter,c,p));return h.push(w),j(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=ue(k,"beforeRouteEnter",c,p),h.push(w),j(h))).then(()=>{h=[];for(const y of d.list())h.push(B(y,c,p));return h.push(w),j(h)}).catch(y=>I(y,8)?y:Promise.reject(y))}function Re(c,p,h){m.list().forEach(v=>ve(()=>v(c,p,h)))}function Ee(c,p,h,v,_){const k=O(c,p);if(k)return k;const w=p===$,y=q?history.state:{};h&&(v||w?o.replace(c.fullPath,S({scroll:w&&y&&y.scroll},_)):o.push(c.fullPath,_)),a.value=c,Pe(c,p,h,w),oe()}let V;function et(){V||(V=o.listen((c,p,h)=>{if(!Se.listening)return;const v=E(c),_=H(v);if(_){K(S(_,{replace:!0}),v).catch(Q);return}f=v;const k=a.value;q&&Lt(Ce(k.fullPath,h.delta),te()),ye(v,k).catch(w=>I(w,12)?w:I(w,2)?(K(w.to,v).then(y=>{I(y,20)&&!h.delta&&h.type===X.pop&&o.go(-1,!1)}).catch(Q),Promise.reject()):(h.delta&&o.go(-h.delta,!1),re(w,v,k))).then(w=>{w=w||Ee(v,k,!1),w&&(h.delta&&!I(w,8)?o.go(-h.delta,!1):h.type===X.pop&&I(w,20)&&o.go(-1,!1)),Re(v,k,w)}).catch(Q)}))}let ne=U(),we=U(),Z;function re(c,p,h){oe(c);const v=we.list();return v.length?v.forEach(_=>_(c,p,h)):console.error(c),Promise.reject(c)}function tt(){return Z&&a.value!==$?Promise.resolve():new Promise((c,p)=>{ne.add([c,p])})}function oe(c){return Z||(Z=!c,et(),ne.list().forEach(([p,h])=>c?h(c):p()),ne.reset()),c}function Pe(c,p,h,v){const{scrollBehavior:_}=e;if(!q||!_)return Promise.resolve();const k=!h&&Nt(Ce(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return it().then(()=>_(c,p,k)).then(w=>w&&Mt(w)).catch(w=>re(w,c,p))}const se=c=>o.go(c);let ce;const J=new Set,Se={currentRoute:a,listening:!0,addRoute:g,removeRoute:R,hasRoute:b,getRoutes:C,resolve:E,options:e,push:M,replace:T,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:i.add,beforeResolve:d.add,afterEach:m.add,onError:we.add,isReady:tt,install(c){const p=this;c.component("RouterLink",yn),c.component("RouterView",Pn),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>W(a)}),q&&!ce&&a.value===$&&(ce=!0,M(o.location).catch(_=>{}));const h={};for(const _ in $)Object.defineProperty(h,_,{get:()=>a.value[_],enumerable:!0});c.provide(me,p),c.provide(Ze,ct(h)),c.provide(de,a);const v=c.unmount;J.add(c),c.unmount=function(){J.delete(c),J.size<1&&(f=$,V&&V(),V=null,a.value=$,ce=!1,Z=!1),v()}}};function j(c){return c.reduce((p,h)=>p.then(()=>ve(h)),Promise.resolve())}return Se}function _n(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let d=0;d<i;d++){const m=t.matched[d];m&&(e.matched.find(f=>z(f,m))?r.push(m):n.push(m));const a=e.matched[d];a&&(t.matched.find(f=>z(f,a))||o.push(a))}return[n,r,o]}const bn=[{path:"/",component:mt},{path:"/about",component:gt},{path:"/todo",component:ht}],Cn=Sn({history:Tt("/template-vue/"),routes:bn});const ge=ft(Rt),kn=dt();ge.use(kn);ge.use(Cn);ge.mount("#app");
