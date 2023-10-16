import{S as mt,i as ft,s as ht,k as s,a as x,q as A,l,m,h as o,c as w,r as P,n as e,K as vt,p as q,b as at,E as t,L as bt,J,y as gt,Q as _t,z as yt,A as Et,g as xt,d as wt,B as It}from"../chunks/index.62a8ee71.js";import{p as kt}from"../chunks/parse.bee59afc.js";import{j as Dt}from"../chunks/singletons.fc927cc5.js";import{i as Lt}from"../chunks/navigation.d245a318.js";function Tt(d){return Dt.apply_action(d)}function At(d){const r=JSON.parse(d);return r.data&&(r.data=kt(r.data)),r}function Pt(d){return HTMLElement.prototype.cloneNode.call(d)}function St(d,r=()=>{}){const n=async({action:p,result:c,reset:h})=>{c.type==="success"&&(h!==!1&&HTMLFormElement.prototype.reset.call(d),await Lt()),(location.origin+location.pathname===p.origin+p.pathname||c.type==="redirect"||c.type==="error")&&Tt(c)};async function a(p){var y,E,L;p.preventDefault();const c=new URL((y=p.submitter)!=null&&y.hasAttribute("formaction")?p.submitter.formAction:Pt(d).action),h=new FormData(d),v=(E=p.submitter)==null?void 0:E.getAttribute("name");v&&h.append(v,((L=p.submitter)==null?void 0:L.getAttribute("value"))??"");const g=new AbortController;let _=!1;const b=await r({action:c,cancel:()=>_=!0,controller:g,get data(){return h},formData:h,get form(){return d},formElement:d,submitter:p.submitter})??n;if(_)return;let f;try{const u=await fetch(c,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:h,signal:g.signal});f=At(await u.text()),f.type==="error"&&(f.status=u.status)}catch(u){if((u==null?void 0:u.name)==="AbortError")return;f={type:"error",error:u}}b({action:c,get data(){return h},formData:h,get form(){return d},formElement:d,update:u=>n({action:c,result:f,reset:u==null?void 0:u.reset}),result:f})}return HTMLFormElement.prototype.addEventListener.call(d,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(d,"submit",a)}}}function Vt(d){let r,n,a,p,c,h,v,g,_,O,b,f,y,E,L,u,i,D,T,I,N,R,S,V,K,Q,B,W,X,F,C,Y,Z,$,tt,et,rt;return{c(){r=s("div"),n=s("div"),a=s("form"),p=s("div"),c=s("img"),v=x(),g=s("p"),_=A("Please login to your account"),O=x(),b=s("div"),f=s("input"),y=x(),E=s("label"),L=A("ID"),u=x(),i=s("div"),D=s("input"),T=x(),I=s("label"),N=A("Password"),R=x(),S=s("div"),V=s("button"),K=A("LOG IN"),Q=x(),B=s("a"),W=A("Forgot password?"),X=x(),F=s("div"),C=s("p"),Y=A("Don't have an account?"),Z=x(),$=s("button"),tt=A("RESISTER"),this.h()},l(M){r=l(M,"DIV",{class:!0,style:!0});var G=m(r);n=l(G,"DIV",{class:!0});var ot=m(n);a=l(ot,"FORM",{method:!0});var k=m(a);p=l(k,"DIV",{class:!0});var st=m(p);c=l(st,"IMG",{class:!0,src:!0,alt:!0}),st.forEach(o),v=w(k),g=l(k,"P",{class:!0});var lt=m(g);_=P(lt,"Please login to your account"),lt.forEach(o),O=w(k),b=l(k,"DIV",{class:!0});var U=m(b);f=l(U,"INPUT",{placeholder:!0,type:!0,name:!0,class:!0}),y=w(U),E=l(U,"LABEL",{class:!0,for:!0});var nt=m(E);L=P(nt,"ID"),nt.forEach(o),U.forEach(o),u=w(k),i=l(k,"DIV",{class:!0});var z=m(i);D=l(z,"INPUT",{placeholder:!0,type:!0,name:!0,class:!0}),T=w(z),I=l(z,"LABEL",{class:!0,for:!0});var ct=m(I);N=P(ct,"Password"),ct.forEach(o),z.forEach(o),R=w(k),S=l(k,"DIV",{class:!0});var H=m(S);V=l(H,"BUTTON",{type:!0,class:!0,style:!0});var it=m(V);K=P(it,"LOG IN"),it.forEach(o),Q=w(H),B=l(H,"A",{href:!0});var ut=m(B);W=P(ut,"Forgot password?"),ut.forEach(o),H.forEach(o),X=w(k),F=l(k,"DIV",{class:!0});var j=m(F);C=l(j,"P",{class:!0});var dt=m(C);Y=P(dt,"Don't have an account?"),dt.forEach(o),Z=w(j),$=l(j,"BUTTON",{type:!0,class:!0});var pt=m($);tt=P(pt,"RESISTER"),pt.forEach(o),j.forEach(o),k.forEach(o),ot.forEach(o),G.forEach(o),this.h()},h(){e(c,"class","mx-auto w-72"),vt(c.src,h="https://i.esdrop.com/d/f/KRQCESGJO3/POBFgSGKVB.png")||e(c,"src",h),e(c,"alt","logo"),e(p,"class","my-12 text-center"),e(g,"class","mb-4"),e(f,"placeholder"," "),e(f,"type","text"),e(f,"name","userId"),e(f,"class","block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none svelte-1kh1tko"),e(E,"class","origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300 svelte-1kh1tko"),e(E,"for","userId"),e(b,"class","relative mb-5 rounded-md outline outline-1 outline-gray-300 svelte-1kh1tko"),e(D,"placeholder"," "),e(D,"type","password"),e(D,"name","password"),e(D,"class","block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none svelte-1kh1tko"),e(I,"class","origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300 svelte-1kh1tko"),e(I,"for","userId"),e(i,"class","relative mb-5 rounded-md outline outline-1 outline-gray-300 svelte-1kh1tko"),e(V,"type","submit"),e(V,"class","loginbtn"),q(V,"background","linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%)"),e(B,"href","#!"),e(S,"class","mb-12 pt-1 pb-1 text-center "),e(C,"class","mb-0 mr-2"),e($,"type","submit"),e($,"class","inline-block rounded bg-red-600 bg-opacity-80 px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-red-600 hover:bg-red-700"),e(F,"class","flex items-center justify-between pb-6"),e(a,"method","POST"),e(n,"class","text-lg text-white"),e(r,"class","rounded-xl bg-gray-700 px-16 py-10 shadow-lg backdrop-blur-md"),q(r,"min-width","450px"),q(r,"width","31%"),q(r,"max-width","510px")},m(M,G){at(M,r,G),t(r,n),t(n,a),t(a,p),t(p,c),t(a,v),t(a,g),t(g,_),t(a,O),t(a,b),t(b,f),t(b,y),t(b,E),t(E,L),t(a,u),t(a,i),t(i,D),t(i,T),t(i,I),t(I,N),t(a,R),t(a,S),t(S,V),t(V,K),t(S,Q),t(S,B),t(B,W),t(a,X),t(a,F),t(F,C),t(C,Y),t(F,Z),t(F,$),t($,tt),et||(rt=bt(St.call(null,a)),et=!0)},p:J,i:J,o:J,d(M){M&&o(r),et=!1,rt()}}}class Ft extends mt{constructor(r){super(),ft(this,r,null,Vt,ht,{})}}function Ot(d){let r,n,a,p="Component",c,h,v,g,_,O="Component Source",b,f,y,E="Component Explanation",L,u;return v=new Ft({}),{c(){r=x(),n=s("article"),a=s("div"),c=A(p),h=x(),gt(v.$$.fragment),g=x(),_=s("div"),b=A(O),f=x(),y=s("div"),L=A(E),this.h()},l(i){_t("svelte-1lr751o",document.head).forEach(o),r=w(i),n=l(i,"ARTICLE",{class:!0});var T=m(n);a=l(T,"DIV",{class:!0});var I=m(a);c=P(I,p),h=w(I),yt(v.$$.fragment,I),I.forEach(o),g=w(T),_=l(T,"DIV",{class:!0});var N=m(_);b=P(N,O),N.forEach(o),f=w(T),y=l(T,"DIV",{class:!0});var R=m(y);L=P(R,E),R.forEach(o),T.forEach(o),this.h()},h(){document.title="API",e(a,"class","row-span-1"),e(_,"class","row-span-1"),e(y,"class","row-span-1"),e(n,"class","contianer grid bg-white")},m(i,D){at(i,r,D),at(i,n,D),t(n,a),t(a,c),t(a,h),Et(v,a,null),t(n,g),t(n,_),t(_,b),t(n,f),t(n,y),t(y,L),u=!0},p:J,i(i){u||(xt(v.$$.fragment,i),u=!0)},o(i){wt(v.$$.fragment,i),u=!1},d(i){i&&o(r),i&&o(n),It(v)}}}class Ct extends mt{constructor(r){super(),ft(this,r,null,Ot,ht,{})}}export{Ct as component};