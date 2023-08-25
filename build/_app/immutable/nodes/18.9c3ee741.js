import{S as Sa,i as Pa,s as Wa,k as t,a as i,q as n,l,m as r,c as o,r as v,h as a,n as s,b as Sl,E as e,J as Fs,y as qs,Q as La,z as Os,I as d,A as Hs,g as Js,d as Qs,B as Us}from"../chunks/index.62a8ee71.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.0ef8ad33.js";import{C as wl}from"../chunks/CodeBlock.0e205170.js";function Na(c){let p,u,E,f,z;return{c(){p=t("div"),u=t("input"),E=i(),f=t("label"),z=n("ID"),this.h()},l(y){p=l(y,"DIV",{class:!0});var g=r(p);u=l(g,"INPUT",{placeholder:!0,type:!0,name:!0,class:!0}),E=o(g),f=l(g,"LABEL",{class:!0,for:!0});var h=r(f);z=v(h,"ID"),h.forEach(a),g.forEach(a),this.h()},h(){s(u,"placeholder"," "),s(u,"type","text"),s(u,"name","userId"),s(u,"class","block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none svelte-1v8o0as"),s(f,"class","origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300 svelte-1v8o0as"),s(f,"for","userId"),s(p,"class","relative mb-0 w-60 rounded-md text-white outline outline-1 outline-gray-300 backdrop-blur-md svelte-1v8o0as")},m(y,g){Sl(y,p,g),e(p,u),e(p,E),e(p,f),e(f,z)},p:Fs,i:Fs,o:Fs,d(y){y&&a(p)}}}function Aa(c,p,u){let{type:E}=p,{inputName:f}=p,{style:z}=p,{placeholder:y}=p,{onChange:g}=p;return c.$$set=h=>{"type"in h&&u(0,E=h.type),"inputName"in h&&u(1,f=h.inputName),"style"in h&&u(2,z=h.style),"placeholder"in h&&u(3,y=h.placeholder),"onChange"in h&&u(4,g=h.onChange)},[E,f,z,y,g]}class ka extends Sa{constructor(p){super(),Pa(this,p,Aa,Na,Wa,{type:0,inputName:1,style:2,placeholder:3,onChange:4})}}function Ra(c){let p,u,E,f,z,y,g,h,de,Gs,Ks,S,T,D,ie,Ms,Xs,oe,ne,Ys,Zs,ve,le,et,ae,st,P,B,pe,ue,tt,lt,he,at,rt,V,fe,_e,ct,dt,Ce,it,ot,L,je,Ee,nt,vt,N,pt,ns,ut,ht,m,A,ze,ft,_t,cs,Ct,ds,jt,re,Et,C,k,ge,ye,zt,gt,Te,yt,Tt,R,me,Ie,mt,It,be,bt,wt,x,we,Se,St,Pt,$,Wt,vs,Dt,Bt,q,Pe,We,Vt,Lt,De,Nt,At,O,Be,Ve,kt,Rt,Le,xt,$t,H,Ne,Ae,qt,Ot,J,Ht,ps,Jt,Qt,I,Q,ke,Ut,Ft,W,Re,Gt,Kt,is,Mt,xe,Xt,Yt,$e,os,Zt,ce,el,j,U,qe,Oe,sl,tl,He,ll,al,F,Je,Qe,rl,cl,Ue,dl,il,G,Fe,Ge,ol,nl,K,vl,us,pl,ul,M,Ke,Me,hl,fl,Xe,_l,Cl,X,Ye,Ze,jl,El,es,zl,gl,Y,ss,ts,yl,Tl,Z,ml,hs,Il,fs;return le=new ka({}),ae=new wl({props:{language:"svelte",code:`<CardWrap
 addClass="h-56 w-72"
 addStyle=""
 shadowCalss="shadow-[inset_0_0_10px_#4B5563] shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]"
>
 <div class="flex h-full items-center justify-center">Content</div>
</CardWrap>
								`,class:c[0].CodeBlock}}),re=new wl({props:{language:"svelte",code:`<TitleCard
 addClass="h-56 w-72"
 addStyle=""
 shadowClass="shadow-inner shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]"
 cardTitle="Card Title"
 addTitleClass="py-4"
 addTitleStyle="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 50%, rgba(20,21,23,0) 100%);"
>
 <div class="flex h-full items-center justify-center">Content</div> 
</TitleCard>
					`,class:c[0].CodeBlock}}),ce=new wl({props:{language:"svelte",code:`<ReadabilityCard
 addClass=" bg-[#0a1631] h-56 w-72"
 addStyle=""
 shadowClass="shadow-[inset_0_0_11px_#3B445B] shadow-[#797B95] 2xl:shadow-[inset_0_0_25px_#797B95]"
 cardTitle="Card Title"
 addTitleClass="py-4"
 addTitleStyle="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 100%, rgba(20,21,23,0) 100%);"
>
 <div class="flex h-full items-center justify-center">Content</div>
</ReadabilityCard>
										`,class:c[0].CodeBlock}}),{c(){p=i(),u=t("div"),E=t("section"),f=t("div"),z=t("h2"),y=n("Input"),g=i(),h=t("span"),de=t("p"),Gs=n("ID , 암호 , 텍스트, 숫자 등 데이터 입력 작업을 수행하는 사용자 인터페이스를 제공 합니다."),Ks=i(),S=t("div"),T=t("article"),D=t("div"),ie=t("p"),Ms=n("1. Label Input"),Xs=i(),oe=t("div"),ne=t("p"),Ys=n(`데이터 입력 작업을 수행 할 경우 Label 이 위로 올라가 입력해야 할 Text 정보를
							나타내주는 Label Input 입니다.`),Zs=i(),ve=t("div"),qs(le.$$.fragment),et=i(),qs(ae.$$.fragment),st=i(),P=t("div"),B=t("div"),pe=t("li"),ue=t("p"),tt=n("addClass"),lt=i(),he=t("span"),at=n("Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다."),rt=i(),V=t("div"),fe=t("li"),_e=t("p"),ct=n("addStyle"),dt=i(),Ce=t("span"),it=n("각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다."),ot=i(),L=t("div"),je=t("li"),Ee=t("p"),nt=n("shadowClass"),vt=i(),N=t("span"),pt=n("Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. "),ns=t("br"),ut=n("카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다."),ht=i(),m=t("article"),A=t("div"),ze=t("p"),ft=n("2. Title Card"),_t=i(),cs=t("div"),Ct=i(),ds=t("div"),jt=i(),qs(re.$$.fragment),Et=i(),C=t("div"),k=t("div"),ge=t("li"),ye=t("p"),zt=n("addClass"),gt=i(),Te=t("span"),yt=n("Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다."),Tt=i(),R=t("div"),me=t("li"),Ie=t("p"),mt=n("addStyle"),It=i(),be=t("span"),bt=n("각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다."),wt=i(),x=t("div"),we=t("li"),Se=t("p"),St=n("shadowClass"),Pt=i(),$=t("span"),Wt=n("Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. "),vs=t("br"),Dt=n("카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다."),Bt=i(),q=t("div"),Pe=t("li"),We=t("p"),Vt=n("CardTitle"),Lt=i(),De=t("span"),Nt=n("Title 에 들어갈 Text 를 입력 합니다."),At=i(),O=t("div"),Be=t("li"),Ve=t("p"),kt=n("addTitleClass"),Rt=i(),Le=t("span"),xt=n("CardTitle 의 여백지정, 혹은 추가 Class 를 입력할 수 있습니다."),$t=i(),H=t("div"),Ne=t("li"),Ae=t("p"),qt=n("addTitleStyle"),Ot=i(),J=t("span"),Ht=n(`Title 의 가독성을 높이기 위해 Card Bg Color 와 조화를 이루며 투명도에 가까운 색상을
							추출해 radial-gradient 효과를 사용하였습니다. `),ps=t("br"),Jt=n(`Card 의 크기에 따라 % 로 gradient
							의 크기를 조절하여 커스텀 합니다. 필요에 따라 색상도 커스텀 하여 사용합니다.`),Qt=i(),I=t("article"),Q=t("div"),ke=t("p"),Ut=n("3. Readability Card _ 가독성 카드"),Ft=i(),W=t("div"),Re=t("p"),Gt=n(`Theme 와 기본 CardWrap Color 를 고려해 조화를 이루면서도 시각적으로 구별될 수 있는
							색상을 추출하고`),Kt=i(),is=t("p"),Mt=i(),xe=t("p"),Xt=n("그에 따른 InnerShadow Color 또한 추출된 색상과 대비될수 있는 색상으로 커스텀 합니다."),Yt=i(),$e=t("div"),os=t("container"),Zt=i(),qs(ce.$$.fragment),el=i(),j=t("div"),U=t("div"),qe=t("li"),Oe=t("p"),sl=n("addClass"),tl=i(),He=t("span"),ll=n("Background Color 변경, Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다."),al=i(),F=t("div"),Je=t("li"),Qe=t("p"),rl=n("addStyle"),cl=i(),Ue=t("span"),dl=n("각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다."),il=i(),G=t("div"),Fe=t("li"),Ge=t("p"),ol=n("shadowClass"),nl=i(),K=t("span"),vl=n("Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. "),us=t("br"),pl=n("카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다."),ul=i(),M=t("div"),Ke=t("li"),Me=t("p"),hl=n("CardTitle"),fl=i(),Xe=t("span"),_l=n("Title 에 들어갈 Text 를 입력 합니다."),Cl=i(),X=t("div"),Ye=t("li"),Ze=t("p"),jl=n("addTitleClass"),El=i(),es=t("span"),zl=n("CardTitle 의 여백지정, 혹은 추가 Class 를 입력할 수 있습니다."),gl=i(),Y=t("div"),ss=t("li"),ts=t("p"),yl=n("addTitleStyle"),Tl=i(),Z=t("span"),ml=n(`Title 의 가독성을 높이기 위해 Card Bg Color 와 조화를 이루며 투명도에 가까운 색상을
							추출해 radial-gradient 효과를 사용하였습니다. `),hs=t("br"),Il=n(`Card 의 크기에 따라 % 로 gradient
							의 크기를 조절하여 커스텀 합니다. 필요에 따라 색상도 커스텀 하여 사용합니다.`),this.h()},l(_){La("svelte-1n4pi3w",document.head).forEach(a),p=o(_),u=l(_,"DIV",{class:!0});var Pl=r(u);E=l(Pl,"SECTION",{class:!0});var _s=r(E);f=l(_s,"DIV",{class:!0});var Cs=r(f);z=l(Cs,"H2",{class:!0});var Wl=r(z);y=v(Wl,"Input"),Wl.forEach(a),g=o(Cs),h=l(Cs,"SPAN",{class:!0});var Dl=r(h);de=l(Dl,"P",{class:!0});var Bl=r(de);Gs=v(Bl,"ID , 암호 , 텍스트, 숫자 등 데이터 입력 작업을 수행하는 사용자 인터페이스를 제공 합니다."),Bl.forEach(a),Dl.forEach(a),Cs.forEach(a),Ks=o(_s),S=l(_s,"DIV",{class:!0});var ls=r(S);T=l(ls,"ARTICLE",{class:!0});var ee=r(T);D=l(ee,"DIV",{class:!0});var js=r(D);ie=l(js,"P",{class:!0});var Vl=r(ie);Ms=v(Vl,"1. Label Input"),Vl.forEach(a),Xs=o(js),oe=l(js,"DIV",{class:!0});var Ll=r(oe);ne=l(Ll,"P",{class:!0});var Nl=r(ne);Ys=v(Nl,`데이터 입력 작업을 수행 할 경우 Label 이 위로 올라가 입력해야 할 Text 정보를
							나타내주는 Label Input 입니다.`),Nl.forEach(a),Ll.forEach(a),js.forEach(a),Zs=o(ee),ve=l(ee,"DIV",{class:!0});var Al=r(ve);Os(le.$$.fragment,Al),Al.forEach(a),et=o(ee),Os(ae.$$.fragment,ee),st=o(ee),P=l(ee,"DIV",{class:!0});var as=r(P);B=l(as,"DIV",{class:!0});var Es=r(B);pe=l(Es,"LI",{class:!0});var kl=r(pe);ue=l(kl,"P",{class:!0});var Rl=r(ue);tt=v(Rl,"addClass"),Rl.forEach(a),kl.forEach(a),lt=o(Es),he=l(Es,"SPAN",{class:!0});var xl=r(he);at=v(xl,"Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다."),xl.forEach(a),Es.forEach(a),rt=o(as),V=l(as,"DIV",{class:!0});var zs=r(V);fe=l(zs,"LI",{class:!0});var $l=r(fe);_e=l($l,"P",{class:!0});var ql=r(_e);ct=v(ql,"addStyle"),ql.forEach(a),$l.forEach(a),dt=o(zs),Ce=l(zs,"SPAN",{class:!0});var Ol=r(Ce);it=v(Ol,"각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다."),Ol.forEach(a),zs.forEach(a),ot=o(as),L=l(as,"DIV",{class:!0});var gs=r(L);je=l(gs,"LI",{class:!0});var Hl=r(je);Ee=l(Hl,"P",{class:!0});var Jl=r(Ee);nt=v(Jl,"shadowClass"),Jl.forEach(a),Hl.forEach(a),vt=o(gs),N=l(gs,"SPAN",{class:!0});var ys=r(N);pt=v(ys,"Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. "),ns=l(ys,"BR",{class:!0}),ut=v(ys,"카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다."),ys.forEach(a),gs.forEach(a),as.forEach(a),ee.forEach(a),ht=o(ls),m=l(ls,"ARTICLE",{class:!0});var se=r(m);A=l(se,"DIV",{class:!0});var Ts=r(A);ze=l(Ts,"P",{class:!0});var Ql=r(ze);ft=v(Ql,"2. Title Card"),Ql.forEach(a),_t=o(Ts),cs=l(Ts,"DIV",{class:!0});var Da=r(cs);Da.forEach(a),Ts.forEach(a),Ct=o(se),ds=l(se,"DIV",{class:!0});var Ba=r(ds);Ba.forEach(a),jt=o(se),Os(re.$$.fragment,se),Et=o(se),C=l(se,"DIV",{class:!0});var b=r(C);k=l(b,"DIV",{class:!0});var ms=r(k);ge=l(ms,"LI",{class:!0});var Ul=r(ge);ye=l(Ul,"P",{class:!0});var Fl=r(ye);zt=v(Fl,"addClass"),Fl.forEach(a),Ul.forEach(a),gt=o(ms),Te=l(ms,"SPAN",{class:!0});var Gl=r(Te);yt=v(Gl,"Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다."),Gl.forEach(a),ms.forEach(a),Tt=o(b),R=l(b,"DIV",{class:!0});var Is=r(R);me=l(Is,"LI",{class:!0});var Kl=r(me);Ie=l(Kl,"P",{class:!0});var Ml=r(Ie);mt=v(Ml,"addStyle"),Ml.forEach(a),Kl.forEach(a),It=o(Is),be=l(Is,"SPAN",{class:!0});var Xl=r(be);bt=v(Xl,"각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다."),Xl.forEach(a),Is.forEach(a),wt=o(b),x=l(b,"DIV",{class:!0});var bs=r(x);we=l(bs,"LI",{class:!0});var Yl=r(we);Se=l(Yl,"P",{class:!0});var Zl=r(Se);St=v(Zl,"shadowClass"),Zl.forEach(a),Yl.forEach(a),Pt=o(bs),$=l(bs,"SPAN",{class:!0});var ws=r($);Wt=v(ws,"Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. "),vs=l(ws,"BR",{class:!0}),Dt=v(ws,"카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다."),ws.forEach(a),bs.forEach(a),Bt=o(b),q=l(b,"DIV",{class:!0});var Ss=r(q);Pe=l(Ss,"LI",{class:!0});var ea=r(Pe);We=l(ea,"P",{class:!0});var sa=r(We);Vt=v(sa,"CardTitle"),sa.forEach(a),ea.forEach(a),Lt=o(Ss),De=l(Ss,"SPAN",{class:!0});var ta=r(De);Nt=v(ta,"Title 에 들어갈 Text 를 입력 합니다."),ta.forEach(a),Ss.forEach(a),At=o(b),O=l(b,"DIV",{class:!0});var Ps=r(O);Be=l(Ps,"LI",{class:!0});var la=r(Be);Ve=l(la,"P",{class:!0});var aa=r(Ve);kt=v(aa,"addTitleClass"),aa.forEach(a),la.forEach(a),Rt=o(Ps),Le=l(Ps,"SPAN",{class:!0});var ra=r(Le);xt=v(ra,"CardTitle 의 여백지정, 혹은 추가 Class 를 입력할 수 있습니다."),ra.forEach(a),Ps.forEach(a),$t=o(b),H=l(b,"DIV",{class:!0});var Ws=r(H);Ne=l(Ws,"LI",{class:!0});var ca=r(Ne);Ae=l(ca,"P",{class:!0});var da=r(Ae);qt=v(da,"addTitleStyle"),da.forEach(a),ca.forEach(a),Ot=o(Ws),J=l(Ws,"SPAN",{class:!0});var Ds=r(J);Ht=v(Ds,`Title 의 가독성을 높이기 위해 Card Bg Color 와 조화를 이루며 투명도에 가까운 색상을
							추출해 radial-gradient 효과를 사용하였습니다. `),ps=l(Ds,"BR",{class:!0}),Jt=v(Ds,`Card 의 크기에 따라 % 로 gradient
							의 크기를 조절하여 커스텀 합니다. 필요에 따라 색상도 커스텀 하여 사용합니다.`),Ds.forEach(a),Ws.forEach(a),b.forEach(a),se.forEach(a),Qt=o(ls),I=l(ls,"ARTICLE",{class:!0});var te=r(I);Q=l(te,"DIV",{class:!0});var Bs=r(Q);ke=l(Bs,"P",{class:!0});var ia=r(ke);Ut=v(ia,"3. Readability Card _ 가독성 카드"),ia.forEach(a),Ft=o(Bs),W=l(Bs,"DIV",{class:!0});var rs=r(W);Re=l(rs,"P",{class:!0});var oa=r(Re);Gt=v(oa,`Theme 와 기본 CardWrap Color 를 고려해 조화를 이루면서도 시각적으로 구별될 수 있는
							색상을 추출하고`),oa.forEach(a),Kt=o(rs),is=l(rs,"P",{class:!0}),r(is).forEach(a),Mt=o(rs),xe=l(rs,"P",{class:!0});var na=r(xe);Xt=v(na,"그에 따른 InnerShadow Color 또한 추출된 색상과 대비될수 있는 색상으로 커스텀 합니다."),na.forEach(a),rs.forEach(a),Bs.forEach(a),Yt=o(te),$e=l(te,"DIV",{class:!0});var va=r($e);os=l(va,"CONTAINER",{class:!0});var Va=r(os);Va.forEach(a),va.forEach(a),Zt=o(te),Os(ce.$$.fragment,te),el=o(te),j=l(te,"DIV",{class:!0});var w=r(j);U=l(w,"DIV",{class:!0});var Vs=r(U);qe=l(Vs,"LI",{class:!0});var pa=r(qe);Oe=l(pa,"P",{class:!0});var ua=r(Oe);sl=v(ua,"addClass"),ua.forEach(a),pa.forEach(a),tl=o(Vs),He=l(Vs,"SPAN",{class:!0});var ha=r(He);ll=v(ha,"Background Color 변경, Card 의 여백지정 , 혹은 추가 Calss 를 입력할 수 있습니다."),ha.forEach(a),Vs.forEach(a),al=o(w),F=l(w,"DIV",{class:!0});var Ls=r(F);Je=l(Ls,"LI",{class:!0});var fa=r(Je);Qe=l(fa,"P",{class:!0});var _a=r(Qe);rl=v(_a,"addStyle"),_a.forEach(a),fa.forEach(a),cl=o(Ls),Ue=l(Ls,"SPAN",{class:!0});var Ca=r(Ue);dl=v(Ca,"각도 조절 및 세부 조정 커스텀이 필요한 경우엔 Css 를 사용하여 커스텀 해줍니다."),Ca.forEach(a),Ls.forEach(a),il=o(w),G=l(w,"DIV",{class:!0});var Ns=r(G);Fe=l(Ns,"LI",{class:!0});var ja=r(Fe);Ge=l(ja,"P",{class:!0});var Ea=r(Ge);ol=v(Ea,"shadowClass"),Ea.forEach(a),ja.forEach(a),nl=o(Ns),K=l(Ns,"SPAN",{class:!0});var As=r(K);vl=v(As,"Card Bg Color 와 대비되는 Shadow Color 를 사용하여 단일요소의 목적을 명확히 합니다. "),us=l(As,"BR",{class:!0}),pl=v(As,"카드 크기 혹은 색상에 따라 shadow Color 와 inset 속성의 크기를 커스텀 합니다."),As.forEach(a),Ns.forEach(a),ul=o(w),M=l(w,"DIV",{class:!0});var ks=r(M);Ke=l(ks,"LI",{class:!0});var za=r(Ke);Me=l(za,"P",{class:!0});var ga=r(Me);hl=v(ga,"CardTitle"),ga.forEach(a),za.forEach(a),fl=o(ks),Xe=l(ks,"SPAN",{class:!0});var ya=r(Xe);_l=v(ya,"Title 에 들어갈 Text 를 입력 합니다."),ya.forEach(a),ks.forEach(a),Cl=o(w),X=l(w,"DIV",{class:!0});var Rs=r(X);Ye=l(Rs,"LI",{class:!0});var Ta=r(Ye);Ze=l(Ta,"P",{class:!0});var ma=r(Ze);jl=v(ma,"addTitleClass"),ma.forEach(a),Ta.forEach(a),El=o(Rs),es=l(Rs,"SPAN",{class:!0});var Ia=r(es);zl=v(Ia,"CardTitle 의 여백지정, 혹은 추가 Class 를 입력할 수 있습니다."),Ia.forEach(a),Rs.forEach(a),gl=o(w),Y=l(w,"DIV",{class:!0});var xs=r(Y);ss=l(xs,"LI",{class:!0});var ba=r(ss);ts=l(ba,"P",{class:!0});var wa=r(ts);yl=v(wa,"addTitleStyle"),wa.forEach(a),ba.forEach(a),Tl=o(xs),Z=l(xs,"SPAN",{class:!0});var $s=r(Z);ml=v($s,`Title 의 가독성을 높이기 위해 Card Bg Color 와 조화를 이루며 투명도에 가까운 색상을
							추출해 radial-gradient 효과를 사용하였습니다. `),hs=l($s,"BR",{class:!0}),Il=v($s,`Card 의 크기에 따라 % 로 gradient
							의 크기를 조절하여 커스텀 합니다. 필요에 따라 색상도 커스텀 하여 사용합니다.`),$s.forEach(a),xs.forEach(a),w.forEach(a),te.forEach(a),ls.forEach(a),_s.forEach(a),Pl.forEach(a),this.h()},h(){document.title="Input",s(z,"class","mb-1.5 text-5xl font-medium svelte-czcj0d"),s(de,"class","svelte-czcj0d"),s(h,"class","text-lg leading-7 text-gray-300 svelte-czcj0d"),s(f,"class","mb-8 svelte-czcj0d"),s(ie,"class","text-3xl svelte-czcj0d"),s(ne,"class"," svelte-czcj0d"),s(oe,"class","text-lg leading-7 text-gray-300 svelte-czcj0d"),s(D,"class","space-y-2 svelte-czcj0d"),s(ve,"class","flex w-3/5 flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6 svelte-czcj0d"),s(ue,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(pe,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(he,"class",d(c[0].description)+" svelte-czcj0d"),s(B,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(_e,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(fe,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(Ce,"class",d(c[0].description)+" svelte-czcj0d"),s(V,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Ee,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(je,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(ns,"class","svelte-czcj0d"),s(N,"class",d(c[0].description)+" svelte-czcj0d"),s(L,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(P,"class","h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8 svelte-czcj0d"),s(T,"class","space-y-4 svelte-czcj0d"),s(ze,"class","text-3xl svelte-czcj0d"),s(cs,"class","svelte-czcj0d"),s(A,"class","space-y-2 svelte-czcj0d"),s(ds,"class","flex w-3/5 flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6 svelte-czcj0d"),s(ye,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(ge,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(Te,"class",d(c[0].description)+" svelte-czcj0d"),s(k,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Ie,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(me,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(be,"class",d(c[0].description)+" svelte-czcj0d"),s(R,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Se,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(we,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(vs,"class","svelte-czcj0d"),s($,"class",d(c[0].description)+" svelte-czcj0d"),s(x,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(We,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(Pe,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(De,"class",d(c[0].description)+" svelte-czcj0d"),s(q,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Ve,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(Be,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(Le,"class",d(c[0].description)+" svelte-czcj0d"),s(O,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Ae,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(Ne,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(ps,"class","svelte-czcj0d"),s(J,"class",c[0].description+" svelte-czcj0d"),s(H,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(C,"class","h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8 svelte-czcj0d"),s(m,"class","space-y-4 svelte-czcj0d"),s(ke,"class","text-3xl svelte-czcj0d"),s(Re,"class","svelte-czcj0d"),s(is,"class","svelte-czcj0d"),s(xe,"class","svelte-czcj0d"),s(W,"class","text-lg leading-7 text-gray-300 svelte-czcj0d"),s(Q,"class","space-y-2 svelte-czcj0d"),s(os,"class","flex items-center justify-start pl-1 svelte-czcj0d"),s($e,"class","flex w-3/5 flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6 svelte-czcj0d"),s(Oe,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(qe,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(He,"class",d(c[0].description)+" svelte-czcj0d"),s(U,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Qe,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(Je,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(Ue,"class",d(c[0].description)+" svelte-czcj0d"),s(F,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Ge,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(Fe,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(us,"class","svelte-czcj0d"),s(K,"class",d(c[0].description)+" svelte-czcj0d"),s(G,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Me,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(Ke,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(Xe,"class",d(c[0].description)+" svelte-czcj0d"),s(M,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(Ze,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(Ye,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(es,"class",d(c[0].description)+" svelte-czcj0d"),s(X,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(ts,"class",d(c[0].descriptionTitle)+" svelte-czcj0d"),s(ss,"class",d(c[0].descriptionTitleWrap)+" svelte-czcj0d"),s(hs,"class","svelte-czcj0d"),s(Z,"class",c[0].description+" svelte-czcj0d"),s(Y,"class",d(c[0].descriptionWrap)+" svelte-czcj0d"),s(j,"class","h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8 svelte-czcj0d"),s(I,"class","space-y-4 svelte-czcj0d"),s(S,"class","space-y-8 svelte-czcj0d"),s(E,"class","mb-3 px-3 py-5 svelte-czcj0d"),s(u,"class","h-[calc(100vh-60px)] overflow-y-scroll bg-[#0E0E0E] px-8 text-white svelte-czcj0d")},m(_,bl){Sl(_,p,bl),Sl(_,u,bl),e(u,E),e(E,f),e(f,z),e(z,y),e(f,g),e(f,h),e(h,de),e(de,Gs),e(E,Ks),e(E,S),e(S,T),e(T,D),e(D,ie),e(ie,Ms),e(D,Xs),e(D,oe),e(oe,ne),e(ne,Ys),e(T,Zs),e(T,ve),Hs(le,ve,null),e(T,et),Hs(ae,T,null),e(T,st),e(T,P),e(P,B),e(B,pe),e(pe,ue),e(ue,tt),e(B,lt),e(B,he),e(he,at),e(P,rt),e(P,V),e(V,fe),e(fe,_e),e(_e,ct),e(V,dt),e(V,Ce),e(Ce,it),e(P,ot),e(P,L),e(L,je),e(je,Ee),e(Ee,nt),e(L,vt),e(L,N),e(N,pt),e(N,ns),e(N,ut),e(S,ht),e(S,m),e(m,A),e(A,ze),e(ze,ft),e(A,_t),e(A,cs),e(m,Ct),e(m,ds),e(m,jt),Hs(re,m,null),e(m,Et),e(m,C),e(C,k),e(k,ge),e(ge,ye),e(ye,zt),e(k,gt),e(k,Te),e(Te,yt),e(C,Tt),e(C,R),e(R,me),e(me,Ie),e(Ie,mt),e(R,It),e(R,be),e(be,bt),e(C,wt),e(C,x),e(x,we),e(we,Se),e(Se,St),e(x,Pt),e(x,$),e($,Wt),e($,vs),e($,Dt),e(C,Bt),e(C,q),e(q,Pe),e(Pe,We),e(We,Vt),e(q,Lt),e(q,De),e(De,Nt),e(C,At),e(C,O),e(O,Be),e(Be,Ve),e(Ve,kt),e(O,Rt),e(O,Le),e(Le,xt),e(C,$t),e(C,H),e(H,Ne),e(Ne,Ae),e(Ae,qt),e(H,Ot),e(H,J),e(J,Ht),e(J,ps),e(J,Jt),e(S,Qt),e(S,I),e(I,Q),e(Q,ke),e(ke,Ut),e(Q,Ft),e(Q,W),e(W,Re),e(Re,Gt),e(W,Kt),e(W,is),e(W,Mt),e(W,xe),e(xe,Xt),e(I,Yt),e(I,$e),e($e,os),e(I,Zt),Hs(ce,I,null),e(I,el),e(I,j),e(j,U),e(U,qe),e(qe,Oe),e(Oe,sl),e(U,tl),e(U,He),e(He,ll),e(j,al),e(j,F),e(F,Je),e(Je,Qe),e(Qe,rl),e(F,cl),e(F,Ue),e(Ue,dl),e(j,il),e(j,G),e(G,Fe),e(Fe,Ge),e(Ge,ol),e(G,nl),e(G,K),e(K,vl),e(K,us),e(K,pl),e(j,ul),e(j,M),e(M,Ke),e(Ke,Me),e(Me,hl),e(M,fl),e(M,Xe),e(Xe,_l),e(j,Cl),e(j,X),e(X,Ye),e(Ye,Ze),e(Ze,jl),e(X,El),e(X,es),e(es,zl),e(j,gl),e(j,Y),e(Y,ss),e(ss,ts),e(ts,yl),e(Y,Tl),e(Y,Z),e(Z,ml),e(Z,hs),e(Z,Il),fs=!0},p:Fs,i(_){fs||(Js(le.$$.fragment,_),Js(ae.$$.fragment,_),Js(re.$$.fragment,_),Js(ce.$$.fragment,_),fs=!0)},o(_){Qs(le.$$.fragment,_),Qs(ae.$$.fragment,_),Qs(re.$$.fragment,_),Qs(ce.$$.fragment,_),fs=!1},d(_){_&&a(p),_&&a(u),Us(le),Us(ae),Us(re),Us(ce)}}}function xa(c){return[{descriptionWrap:"flex flex-row space-x-1 py-4",descriptionTitleWrap:"text-left w-[15%] border-r-[0.08rem] border-gray-400  flex items-center justify-center",descriptionTitle:"rounded px-1.5  text-sm bg-[#aad3cb] text-emerald-800",description:"pl-3 leading-7",CodeBlock:"overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"}]}class Ha extends Sa{constructor(p){super(),Pa(this,p,xa,Ra,Wa,{})}}export{Ha as component};
