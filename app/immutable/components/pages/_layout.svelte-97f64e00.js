import{S as R,i as Z,s as F,k as B,a as q,C as E,l as S,m as $,h as c,c as z,D as N,n as l,E as oe,b as y,F as C,f as w,g as le,d as ae,t as V,G as ce,H as W,o as ne,w as G,x as U,y as j,z as O,q as ue,r as fe,u as he,B as H,I as de,J as me,K as _e,L as pe,M as ve,N as ge}from"../../chunks/index-a37f4800.js";import{s as be}from"../../chunks/singletons-16c572b3.js";import{a as $e,B as Ce,P as x,p as Q,g as we,n as ye}from"../../chunks/pageUpdates-c31317a0.js";const Ee=()=>{const n=be;return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},updated:n.updated}},Ne={subscribe(n){return Ee().page.subscribe(n)}};function ee(n,e,s){const t=n.slice();return t[4]=e[s],t[6]=s,t}function Pe(n){let e=n[4].name+"",s;return{c(){s=ue(e)},l(t){s=fe(t,e)},m(t,r){y(t,s,r)},p(t,r){r&1&&e!==(e=t[4].name+"")&&he(s,e)},d(t){t&&c(s)}}}function te(n){let e,s;return e=new Ce({props:{selected:n[1][n[6]],path:n[4].iconPath,href:n[4].dest,$$slots:{default:[Pe]},$$scope:{ctx:n}}}),{c(){G(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,r){j(e,t,r),s=!0},p(t,r){const i={};r&2&&(i.selected=t[1][t[6]]),r&1&&(i.path=t[4].iconPath),r&1&&(i.href=t[4].dest),r&129&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){O(e,t)}}}function Ve(n){let e,s,t,r,i,d,f,b,v,m,o,a,h,P,J,k,I,M,T=n[0],_=[];for(let u=0;u<T.length;u+=1)_[u]=te(ee(n,T,u));const ie=u=>V(_[u],1,1,()=>{_[u]=null});return{c(){e=B("div"),s=B("nav");for(let u=0;u<_.length;u+=1)_[u].c();t=q(),r=E("svg"),i=E("defs"),d=E("pattern"),f=E("rect"),b=E("circle"),v=E("circle"),m=E("circle"),o=E("rect"),a=q(),h=B("div"),P=B("nav"),J=q(),k=E("svg"),I=E("use"),this.h()},l(u){e=S(u,"DIV",{class:!0});var g=$(e);s=S(g,"NAV",{id:!0,class:!0});var p=$(s);for(let K=0;K<_.length;K+=1)_[K].l(p);p.forEach(c),t=z(g),r=N(g,"svg",{id:!0,width:!0,height:!0,fill:!0,xmlns:!0,class:!0});var D=$(r);i=N(D,"defs",{});var X=$(i);d=N(X,"pattern",{id:!0,x:!0,y:!0,width:!0,height:!0,patternUnits:!0,patternTransform:!0});var L=$(d);f=N(L,"rect",{width:!0,height:!0,fill:!0}),$(f).forEach(c),b=N(L,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),$(b).forEach(c),v=N(L,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),$(v).forEach(c),m=N(L,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),$(m).forEach(c),L.forEach(c),X.forEach(c),o=N(D,"rect",{id:!0,x:!0,y:!0,width:!0,height:!0,fill:!0}),$(o).forEach(c),D.forEach(c),g.forEach(c),a=z(u),h=S(u,"DIV",{id:!0,class:!0});var A=$(h);P=S(A,"NAV",{id:!0,class:!0}),$(P).forEach(c),J=z(A),k=N(A,"svg",{id:!0,width:!0,class:!0});var Y=$(k);I=N(Y,"use",{"xlink:href":!0}),$(I).forEach(c),Y.forEach(c),A.forEach(c),this.h()},h(){l(s,"id","navBar"),l(s,"class","svelte-b51qz4"),l(f,"width","8"),l(f,"height","4"),l(f,"fill","currentColor"),l(b,"cx","22"),l(b,"cy","8"),l(b,"r","2"),l(b,"fill","currentColor"),l(v,"cx","34"),l(v,"cy","8"),l(v,"r","2"),l(v,"fill","currentColor"),l(m,"cx","28"),l(m,"cy","14"),l(m,"r","2"),l(m,"fill","currentColor"),l(d,"id","border"),l(d,"x","0"),l(d,"y","0"),l(d,"width","48"),l(d,"height","16"),l(d,"patternUnits","userSpaceOnUse"),l(d,"patternTransform","scale(0.7)"),l(o,"id","rect"),l(o,"x","0"),l(o,"y","0"),l(o,"width","100%"),l(o,"height","11"),l(o,"fill","url(#border)"),l(r,"id","top"),l(r,"width","100%"),l(r,"height","16"),l(r,"fill","none"),l(r,"xmlns","http://www.w3.org/2000/svg"),l(r,"class","svelte-b51qz4"),l(e,"class","svelte-b51qz4"),l(P,"id","botNav"),l(P,"class","svelte-b51qz4"),oe(I,"xlink:href","#rect"),l(k,"id","bottom"),l(k,"width","100%"),l(k,"class","svelte-b51qz4"),l(h,"id","botBar"),l(h,"class","svelte-b51qz4")},m(u,g){y(u,e,g),C(e,s);for(let p=0;p<_.length;p+=1)_[p].m(s,null);C(e,t),C(e,r),C(r,i),C(i,d),C(d,f),C(d,b),C(d,v),C(d,m),C(r,o),y(u,a,g),y(u,h,g),C(h,P),C(h,J),C(h,k),C(k,I),M=!0},p(u,[g]){if(g&3){T=u[0];let p;for(p=0;p<T.length;p+=1){const D=ee(u,T,p);_[p]?(_[p].p(D,g),w(_[p],1)):(_[p]=te(D),_[p].c(),w(_[p],1),_[p].m(s,null))}for(le(),p=T.length;p<_.length;p+=1)ie(p);ae()}},i(u){if(!M){for(let g=0;g<T.length;g+=1)w(_[g]);M=!0}},o(u){_=_.filter(Boolean);for(let g=0;g<_.length;g+=1)V(_[g]);M=!1},d(u){u&&c(e),ce(_,u),u&&c(a),u&&c(h)}}}function ke(n,e,s){let t;W(n,Ne,f=>s(2,t=f));let{items:r=[]}=e,i=[];function d(){r.forEach((f,b)=>{s(1,i[b]=t.url.pathname===f.dest,i)})}return $e(d),ne(()=>{s(1,i=Array(r.length).fill(!1))}),n.$$set=f=>{"items"in f&&s(0,r=f.items)},[r,i]}class Be extends R{constructor(e){super(),Z(this,e,ke,Ve,F,{items:0})}}function Se(n){let e;return{c(){e=B("div"),this.h()},l(s){e=S(s,"DIV",{id:!0,class:!0}),$(e).forEach(c),this.h()},h(){l(e,"id","shadow"),l(e,"class","svelte-1ory77z")},m(s,t){y(s,e,t)},p:H,i:H,o:H,d(s){s&&c(e)}}}class Te extends R{constructor(e){super(),Z(this,e,null,Se,F,{})}}function qe(n){let e;return{c(){e=B("div"),this.h()},l(s){e=S(s,"DIV",{id:!0,class:!0}),$(e).forEach(c),this.h()},h(){l(e,"id","grid"),l(e,"class","svelte-vsfiu")},m(s,t){y(s,e,t)},p:H,i:H,o:H,d(s){s&&c(e)}}}class ze extends R{constructor(e){super(),Z(this,e,null,qe,F,{})}}const{document:se}=me;function re(n){let e;const s=n[4].default,t=_e(s,n,n[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,i){t&&t.m(r,i),e=!0},p(r,i){t&&t.p&&(!e||i&8)&&pe(t,s,r,r[3],e?ge(s,r[3],i,null):ve(r[3]),null)},i(r){e||(w(t,r),e=!0)},o(r){V(t,r),e=!1},d(r){t&&t.d(r)}}}function De(n){let e,s,t,r,i,d,f,b,v,m;t=new Be({props:{items:n[2]}});let o=(n[1]===x.NeedTransition||n[1]===x.NoTransition)&&re(n);return f=new ze({}),v=new Te({}),{c(){e=B("meta"),s=q(),G(t.$$.fragment),r=q(),i=B("div"),o&&o.c(),d=q(),G(f.$$.fragment),b=q(),G(v.$$.fragment),this.h()},l(a){const h=de("svelte-1cgm8hy",se.head);e=S(h,"META",{name:!0,content:!0}),h.forEach(c),s=z(a),U(t.$$.fragment,a),r=z(a),i=S(a,"DIV",{class:!0});var P=$(i);o&&o.l(P),P.forEach(c),d=z(a),U(f.$$.fragment,a),b=z(a),U(v.$$.fragment,a),this.h()},h(){l(e,"name","theme-color"),l(e,"content",n[0]),l(i,"class","parent svelte-1miaf55")},m(a,h){C(se.head,e),y(a,s,h),j(t,a,h),y(a,r,h),y(a,i,h),o&&o.m(i,null),y(a,d,h),j(f,a,h),y(a,b,h),j(v,a,h),m=!0},p(a,[h]){(!m||h&1)&&l(e,"content",a[0]),a[1]===x.NeedTransition||a[1]===x.NoTransition?o?(o.p(a,h),h&2&&w(o,1)):(o=re(a),o.c(),w(o,1),o.m(i,null)):o&&(le(),V(o,1,1,()=>{o=null}),ae())},i(a){m||(w(t.$$.fragment,a),w(o),w(f.$$.fragment,a),w(v.$$.fragment,a),m=!0)},o(a){V(t.$$.fragment,a),V(o),V(f.$$.fragment,a),V(v.$$.fragment,a),m=!1},d(a){c(e),a&&c(s),O(t,a),a&&c(r),a&&c(i),o&&o.d(),a&&c(d),O(f,a),a&&c(b),O(v,a)}}}function xe(n,e,s){let t,r;W(n,ye,m=>s(5,t=m)),W(n,Q,m=>s(1,r=m));let{$$slots:i={},$$scope:d}=e,f=` M  0.1875,0.9000 C  0.1658,0.9000 0.1479,0.8929 0.1337,0.8787 C  0.1196,0.8646 0.1125,0.8467 0.1125,0.8250 V  0.3663 C  0.0800,0.3479 0.0531,0.3244 0.0319,0.2956 C  0.0106,0.2669 0.0000,0.2300 0.0000,0.1850 C  0.0000,0.1325 0.0177,0.0885 0.0531,0.0531 C  0.0885,0.0177 0.1325,0.0000 0.1850,0.0000 H  0.8150,0.0000 C  0.8675,0.0000 0.9115,0.0177 0.9469,0.0531 C  0.9823,0.0885 1.0000,0.1325 1.0000,0.1850 C  1.0000,0.2300 0.9894,0.2669 0.9681,0.2956 C  0.9469,0.3244 0.9204,0.3479 0.8887,0.3663 V  0.8250 C  0.8887,0.8467 0.8817,0.8646 0.8675,0.8787 C  0.8533,0.8929 0.8354,0.9000 0.8137,0.9000 H  0.1875,0.9000 Z  M  0.1875,0.8250 H  0.8137,0.8250 V  0.3312 L  0.8575,0.3038 C  0.8767,0.2921 0.8927,0.2767 0.9056,0.2575 C  0.9185,0.2383 0.9250,0.2142 0.9250,0.1850 C  0.9250,0.1542 0.9144,0.1281 0.8931,0.1069 C  0.8719,0.0856 0.8458,0.0750 0.8150,0.0750 H  0.1850,0.0750 C  0.1542,0.0750 0.1281,0.0856 0.1069,0.1069 C  0.0856,0.1281 0.0750,0.1542 0.0750,0.1850 C  0.0750,0.2150 0.0813,0.2394 0.0938,0.2581 C  0.1062,0.2769 0.1229,0.2925 0.1437,0.3050 L  
0.1875,0.3312 V  0.8250 Z`,b=[{name:"Home",dest:"/",iconPath:f},{name:"Projects",dest:"/projects",iconPath:f},{name:"Resume",dest:"/resume",iconPath:f},{name:"Experiences",dest:"/experiences",iconPath:f},{name:"Others",dest:"/other",iconPath:f}],v="#32302f";return ne(()=>{s(0,v=document.body.classList.contains("lightmode")?"#a89984":"#282828")}),Q.subscribe(m=>{m===x.ReadyToNav&&t&&we(t).then(o=>{Q.set(x.NoTransition)})}),n.$$set=m=>{"$$scope"in m&&s(3,d=m.$$scope)},[v,r,b,d,i]}class Me extends R{constructor(e){super(),Z(this,e,xe,De,F,{})}}export{Me as default};
