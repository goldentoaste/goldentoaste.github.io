import{S as M,i as O,s as T,C as le,D as P,a as x,k as q,E as k,m as p,h as o,c as H,l as z,n as l,F as Y,b as V,G as y,H as ne,I as re,J as ae,K as ie,f as I,t as N,L as ce,p as oe,M as ue,g as fe,d as he,N as de,O as _e,o as ve,w as F,x as J,y as K,z as R,q as me,r as pe,u as ge,B as A}from"../../chunks/index-55194807.js";import{s as be,j as S}from"../../chunks/singletons-989bd676.js";const we=()=>{const i=be;return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},updated:i.updated}},Ee={subscribe(i){return we().page.subscribe(i)}};S.disable_scroll_handling;const ye=S.goto;S.invalidate;S.invalidateAll;S.preload_data;S.preload_code;S.before_navigate;const Ce=S.after_navigate;function ee(i){let e;return{c(){e=q("div"),this.h()},l(s){e=z(s,"DIV",{class:!0,style:!0}),p(e).forEach(o),this.h()},h(){l(e,"class","icon svelte-189riov"),oe(e,"clip-path","url('#clip')")},m(s,r){V(s,e,r)},d(s){s&&o(e)}}}function $e(i){let e,s,r,a,c,n,h,v,w,u,t,b,m=i[0]&&ee();const B=i[6].default,$=le(B,i,i[5],null);return{c(){e=P("svg"),s=P("defs"),r=P("clipPath"),a=P("path"),c=x(),n=q("button"),m&&m.c(),h=x(),v=q("div"),$&&$.c(),this.h()},l(f){e=k(f,"svg",{width:!0,height:!0,xmlns:!0});var C=p(e);s=k(C,"defs",{});var U=p(s);r=k(U,"clipPath",{id:!0,clipPathUnits:!0});var D=p(r);a=k(D,"path",{d:!0,fill:!0}),p(a).forEach(o),D.forEach(o),U.forEach(o),C.forEach(o),c=H(f),n=z(f,"BUTTON",{style:!0,class:!0});var _=p(n);m&&m.l(_),h=H(_),v=z(_,"DIV",{class:!0});var G=p(v);$&&$.l(G),G.forEach(o),_.forEach(o),this.h()},h(){l(a,"d",i[0]),l(a,"fill","black"),l(r,"id","clip"),l(r,"clipPathUnits","objectBoundingBox"),l(e,"width","0"),l(e,"height","0"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(v,"class","inner svelte-189riov"),l(n,"style",w=i[2]?"text-transform: uppercase;":""),l(n,"class","svelte-189riov"),Y(n,"selected",i[1])},m(f,C){V(f,e,C),y(e,s),y(s,r),y(r,a),V(f,c,C),V(f,n,C),m&&m.m(n,null),y(n,h),y(n,v),$&&$.m(v,null),u=!0,t||(b=ne(n,"click",i[3]),t=!0)},p(f,[C]){(!u||C&1)&&l(a,"d",f[0]),f[0]?m||(m=ee(),m.c(),m.m(n,h)):m&&(m.d(1),m=null),$&&$.p&&(!u||C&32)&&re($,B,f,f[5],u?ie(B,f[5],C,null):ae(f[5]),null),(!u||C&4&&w!==(w=f[2]?"text-transform: uppercase;":""))&&l(n,"style",w),(!u||C&2)&&Y(n,"selected",f[1])},i(f){u||(I($,f),u=!0)},o(f){N($,f),u=!1},d(f){f&&o(e),f&&o(c),f&&o(n),m&&m.d(),$&&$.d(f),t=!1,b()}}}function Pe(i,e,s){let{$$slots:r={},$$scope:a}=e,{href:c=""}=e,{path:n=""}=e,{selected:h=!1}=e,{upper:v=!0}=e;const w=ce();function u(t){c&&ye(c),w("click",t.detail)}return i.$$set=t=>{"href"in t&&s(4,c=t.href),"path"in t&&s(0,n=t.path),"selected"in t&&s(1,h=t.selected),"upper"in t&&s(2,v=t.upper),"$$scope"in t&&s(5,a=t.$$scope)},[n,h,v,u,c,a,r]}class ke extends M{constructor(e){super(),O(this,e,Pe,$e,T,{href:4,path:0,selected:1,upper:2})}}function te(i,e,s){const r=i.slice();return r[4]=e[s],r[6]=s,r}function Ve(i){let e=i[4].name+"",s;return{c(){s=me(e)},l(r){s=pe(r,e)},m(r,a){V(r,s,a)},p(r,a){a&1&&e!==(e=r[4].name+"")&&ge(s,e)},d(r){r&&o(s)}}}function se(i){let e,s;return e=new ke({props:{selected:i[1][i[6]],path:i[4].iconPath,href:i[4].dest,$$slots:{default:[Ve]},$$scope:{ctx:i}}}),{c(){F(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,a){K(e,r,a),s=!0},p(r,a){const c={};a&2&&(c.selected=r[1][r[6]]),a&1&&(c.path=r[4].iconPath),a&1&&(c.href=r[4].dest),a&129&&(c.$$scope={dirty:a,ctx:r}),e.$set(c)},i(r){s||(I(e.$$.fragment,r),s=!0)},o(r){N(e.$$.fragment,r),s=!1},d(r){R(e,r)}}}function Be(i){let e,s,r,a,c,n,h,v,w,u,t,b,m,B,$,f,C,U,D=i[0],_=[];for(let d=0;d<D.length;d+=1)_[d]=se(te(i,D,d));const G=d=>N(_[d],1,1,()=>{_[d]=null});return{c(){e=q("div"),s=q("nav");for(let d=0;d<_.length;d+=1)_[d].c();r=x(),a=P("svg"),c=P("defs"),n=P("pattern"),h=P("rect"),v=P("circle"),w=P("circle"),u=P("circle"),t=P("rect"),b=x(),m=q("div"),B=q("nav"),$=x(),f=P("svg"),C=P("use"),this.h()},l(d){e=z(d,"DIV",{class:!0});var E=p(e);s=z(E,"NAV",{id:!0,class:!0});var g=p(s);for(let Q=0;Q<_.length;Q+=1)_[Q].l(g);g.forEach(o),r=H(E),a=k(E,"svg",{id:!0,width:!0,height:!0,fill:!0,xmlns:!0,class:!0});var j=p(a);c=k(j,"defs",{});var W=p(c);n=k(W,"pattern",{id:!0,x:!0,y:!0,width:!0,height:!0,patternUnits:!0,patternTransform:!0});var L=p(n);h=k(L,"rect",{width:!0,height:!0,fill:!0}),p(h).forEach(o),v=k(L,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),p(v).forEach(o),w=k(L,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),p(w).forEach(o),u=k(L,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),p(u).forEach(o),L.forEach(o),W.forEach(o),t=k(j,"rect",{id:!0,x:!0,y:!0,width:!0,height:!0,fill:!0}),p(t).forEach(o),j.forEach(o),E.forEach(o),b=H(d),m=z(d,"DIV",{id:!0,class:!0});var Z=p(m);B=z(Z,"NAV",{id:!0,class:!0}),p(B).forEach(o),$=H(Z),f=k(Z,"svg",{id:!0,width:!0,class:!0});var X=p(f);C=k(X,"use",{"xlink:href":!0}),p(C).forEach(o),X.forEach(o),Z.forEach(o),this.h()},h(){l(s,"id","navBar"),l(s,"class","svelte-b51qz4"),l(h,"width","8"),l(h,"height","4"),l(h,"fill","currentColor"),l(v,"cx","22"),l(v,"cy","8"),l(v,"r","2"),l(v,"fill","currentColor"),l(w,"cx","34"),l(w,"cy","8"),l(w,"r","2"),l(w,"fill","currentColor"),l(u,"cx","28"),l(u,"cy","14"),l(u,"r","2"),l(u,"fill","currentColor"),l(n,"id","border"),l(n,"x","0"),l(n,"y","0"),l(n,"width","48"),l(n,"height","16"),l(n,"patternUnits","userSpaceOnUse"),l(n,"patternTransform","scale(0.7)"),l(t,"id","rect"),l(t,"x","0"),l(t,"y","0"),l(t,"width","100%"),l(t,"height","11"),l(t,"fill","url(#border)"),l(a,"id","top"),l(a,"width","100%"),l(a,"height","16"),l(a,"fill","none"),l(a,"xmlns","http://www.w3.org/2000/svg"),l(a,"class","svelte-b51qz4"),l(e,"class","svelte-b51qz4"),l(B,"id","botNav"),l(B,"class","svelte-b51qz4"),ue(C,"xlink:href","#rect"),l(f,"id","bottom"),l(f,"width","100%"),l(f,"class","svelte-b51qz4"),l(m,"id","botBar"),l(m,"class","svelte-b51qz4")},m(d,E){V(d,e,E),y(e,s);for(let g=0;g<_.length;g+=1)_[g].m(s,null);y(e,r),y(e,a),y(a,c),y(c,n),y(n,h),y(n,v),y(n,w),y(n,u),y(a,t),V(d,b,E),V(d,m,E),y(m,B),y(m,$),y(m,f),y(f,C),U=!0},p(d,[E]){if(E&3){D=d[0];let g;for(g=0;g<D.length;g+=1){const j=te(d,D,g);_[g]?(_[g].p(j,E),I(_[g],1)):(_[g]=se(j),_[g].c(),I(_[g],1),_[g].m(s,null))}for(fe(),g=D.length;g<_.length;g+=1)G(g);he()}},i(d){if(!U){for(let E=0;E<D.length;E+=1)I(_[E]);U=!0}},o(d){_=_.filter(Boolean);for(let E=0;E<_.length;E+=1)N(_[E]);U=!1},d(d){d&&o(e),de(_,d),d&&o(b),d&&o(m)}}}function De(i,e,s){let r;_e(i,Ee,h=>s(2,r=h));let{items:a=[]}=e,c=[];function n(){a.forEach((h,v)=>{s(1,c[v]=r.url.pathname===h.dest,c)})}return Ce(n),ve(()=>{s(1,c=Array(a.length).fill(!1))}),i.$$set=h=>{"items"in h&&s(0,a=h.items)},[a,c]}class qe extends M{constructor(e){super(),O(this,e,De,Be,T,{items:0})}}function ze(i){let e;return{c(){e=q("div"),this.h()},l(s){e=z(s,"DIV",{id:!0,class:!0}),p(e).forEach(o),this.h()},h(){l(e,"id","shadow"),l(e,"class","svelte-1ory77z")},m(s,r){V(s,e,r)},p:A,i:A,o:A,d(s){s&&o(e)}}}class Ie extends M{constructor(e){super(),O(this,e,null,ze,T,{})}}function Ne(i){let e;return{c(){e=q("div"),this.h()},l(s){e=z(s,"DIV",{id:!0,class:!0}),p(e).forEach(o),this.h()},h(){l(e,"id","grid"),l(e,"class","svelte-vsfiu")},m(s,r){V(s,e,r)},p:A,i:A,o:A,d(s){s&&o(e)}}}class xe extends M{constructor(e){super(),O(this,e,null,Ne,T,{})}}function He(i){let e,s,r,a,c,n,h,v;e=new qe({props:{items:i[0]}});const w=i[2].default,u=le(w,i,i[1],null);return c=new xe({}),h=new Ie({}),{c(){F(e.$$.fragment),s=x(),r=q("div"),u&&u.c(),a=x(),F(c.$$.fragment),n=x(),F(h.$$.fragment),this.h()},l(t){J(e.$$.fragment,t),s=H(t),r=z(t,"DIV",{class:!0});var b=p(r);u&&u.l(b),b.forEach(o),a=H(t),J(c.$$.fragment,t),n=H(t),J(h.$$.fragment,t),this.h()},h(){l(r,"class","parent svelte-1miaf55")},m(t,b){K(e,t,b),V(t,s,b),V(t,r,b),u&&u.m(r,null),V(t,a,b),K(c,t,b),V(t,n,b),K(h,t,b),v=!0},p(t,[b]){u&&u.p&&(!v||b&2)&&re(u,w,t,t[1],v?ie(w,t[1],b,null):ae(t[1]),null)},i(t){v||(I(e.$$.fragment,t),I(u,t),I(c.$$.fragment,t),I(h.$$.fragment,t),v=!0)},o(t){N(e.$$.fragment,t),N(u,t),N(c.$$.fragment,t),N(h.$$.fragment,t),v=!1},d(t){R(e,t),t&&o(s),t&&o(r),u&&u.d(t),t&&o(a),R(c,t),t&&o(n),R(h,t)}}}function Se(i,e,s){let{$$slots:r={},$$scope:a}=e,c=` M  0.1875,0.9000 C  0.1658,0.9000 0.1479,0.8929 0.1337,0.8787 C  0.1196,0.8646 0.1125,0.8467 0.1125,0.8250 V  0.3663 C  0.0800,0.3479 0.0531,0.3244 0.0319,0.2956 C  0.0106,0.2669 0.0000,0.2300 0.0000,0.1850 C  0.0000,0.1325 0.0177,0.0885 0.0531,0.0531 C  0.0885,0.0177 0.1325,0.0000 0.1850,0.0000 H  0.8150,0.0000 C  0.8675,0.0000 0.9115,0.0177 0.9469,0.0531 C  0.9823,0.0885 1.0000,0.1325 1.0000,0.1850 C  1.0000,0.2300 0.9894,0.2669 0.9681,0.2956 C  0.9469,0.3244 0.9204,0.3479 0.8887,0.3663 V  0.8250 C  0.8887,0.8467 0.8817,0.8646 0.8675,0.8787 C  0.8533,0.8929 0.8354,0.9000 0.8137,0.9000 H  0.1875,0.9000 Z  M  0.1875,0.8250 H  0.8137,0.8250 V  0.3312 L  0.8575,0.3038 C  0.8767,0.2921 0.8927,0.2767 0.9056,0.2575 C  0.9185,0.2383 0.9250,0.2142 0.9250,0.1850 C  0.9250,0.1542 0.9144,0.1281 0.8931,0.1069 C  0.8719,0.0856 0.8458,0.0750 0.8150,0.0750 H  0.1850,0.0750 C  0.1542,0.0750 0.1281,0.0856 0.1069,0.1069 C  0.0856,0.1281 0.0750,0.1542 0.0750,0.1850 C  0.0750,0.2150 0.0813,0.2394 0.0938,0.2581 C  0.1062,0.2769 0.1229,0.2925 0.1437,0.3050 L  
0.1875,0.3312 V  0.8250 Z`,n=[{name:"Home",dest:"/",iconPath:c},{name:"Projects",dest:"/projects",iconPath:c},{name:"Resume",dest:"/resume",iconPath:c},{name:"Experiences",dest:"/experiences",iconPath:c},{name:"Others",dest:"/other",iconPath:c}];return i.$$set=h=>{"$$scope"in h&&s(1,a=h.$$scope)},[n,a,r]}class Ae extends M{constructor(e){super(),O(this,e,Se,He,T,{})}}export{Ae as default};
