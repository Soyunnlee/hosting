import{w}from"./index.eb4e7526.js";import{a8 as _}from"./index.62a8ee71.js";const h=w(void 0),c={};function m(e){return e==="local"?localStorage:sessionStorage}function g(e,S,t){const o=(t==null?void 0:t.serializer)??JSON,i=(t==null?void 0:t.storage)??"local";function u(a,n){m(i).setItem(a,o.stringify(n))}if(!c[e]){const a=w(S,r=>{const s=m(i).getItem(e);s&&r(o.parse(s));{const d=l=>{l.key===e&&r(l.newValue?o.parse(l.newValue):null)};return window.addEventListener("storage",d),()=>window.removeEventListener("storage",d)}}),{subscribe:n,set:f}=a;c[e]={set(r){u(e,r),f(r)},update(r){const s=r(_(a));u(e,s),f(s)},subscribe:n}}return c[e]}g("modeOsPrefers",!1);g("modeUserPrefers",void 0);g("modeCurrent",!1);export{h as s};