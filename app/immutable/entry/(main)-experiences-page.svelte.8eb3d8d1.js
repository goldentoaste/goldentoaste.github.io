import{S as W,i as x,s as ee,e as ae,b as N,g as S,v as le,d as R,f as se,h as m,o as Ie,k as D,q as G,a as z,l as E,m as P,r as X,c as B,n as $,p as M,G as v,u as F,L as K,Z as be,R as oe,y as J,z as Q,A as U,B as Z,J as q,T as re,a0 as we,$ as fe,I as $e,X as De,Q as Ee,w as ce,H as Pe}from"../chunks/index.7e0517ef.js";import{p as ue,P as ke}from"../chunks/pageUpdates.a43efd9f.js";import{f as de,c as Te}from"../chunks/index.1e99727b.js";import{D as Ve}from"../chunks/Divider.e3cd20ab.js";import{S as Se}from"../chunks/SpotLightBox.0555316d.js";function he(s){let e,l,t,r,i,d,g,_,k,p,f,H,n,c,y;return{c(){e=D("yearIndicator"),l=D("h1"),t=G(s[0]),r=z(),i=D("div"),d=D("div"),g=z(),_=D("div"),k=z(),p=D("div"),f=z(),H=D("div"),this.h()},l(a){e=E(a,"YEARINDICATOR",{class:!0});var w=P(e);l=E(w,"H1",{class:!0});var h=P(l);t=X(h,s[0]),h.forEach(m),r=B(w),i=E(w,"DIV",{class:!0});var o=P(i);d=E(o,"DIV",{class:!0,style:!0}),P(d).forEach(m),g=B(o),_=E(o,"DIV",{class:!0,style:!0}),P(_).forEach(m),k=B(o),p=E(o,"DIV",{class:!0,style:!0}),P(p).forEach(m),f=B(o),H=E(o,"DIV",{class:!0}),P(H).forEach(m),o.forEach(m),w.forEach(m),this.h()},h(){$(l,"class","svelte-g7rv04"),$(d,"class","dot x1 svelte-g7rv04"),M(d,"right","0"),M(d,"top","0"),M(d,"transform","translate(150%, -150%)"),$(_,"class","dot x2 svelte-g7rv04"),M(_,"right","0"),M(_,"top","0"),M(_,"transform","translate(150%, 150%)"),$(p,"class","dot x3 svelte-g7rv04"),M(p,"left","0"),M(p,"top","0"),M(p,"transform","translate(300%, 150%)"),$(H,"class","diamond svelte-g7rv04"),$(i,"class","lineDecor svelte-g7rv04"),$(e,"class","svelte-g7rv04")},m(a,w){N(a,e,w),v(e,l),v(l,t),v(e,r),v(e,i),v(i,d),v(i,g),v(i,_),v(i,k),v(i,p),v(i,f),v(i,H),y=!0},p(a,w){(!y||w&1)&&F(t,a[0])},i(a){y||(a&&(n||K(()=>{n=be(i,s[2],{}),n.start()})),a&&K(()=>{y&&(c||(c=oe(e,de,{},!0)),c.run(1))}),y=!0)},o(a){a&&(c||(c=oe(e,de,{},!1)),c.run(0)),y=!1},d(a){a&&m(e),a&&c&&c.end()}}}function ze(s){let e,l=s[1]&&he(s);return{c(){l&&l.c(),e=ae()},l(t){l&&l.l(t),e=ae()},m(t,r){l&&l.m(t,r),N(t,e,r)},p(t,[r]){t[1]?l?(l.p(t,r),r&2&&S(l,1)):(l=he(t),l.c(),S(l,1),l.m(e.parentNode,e)):l&&(le(),R(l,1,1,()=>{l=null}),se())},i(t){S(l)},o(t){R(l)},d(t){l&&l.d(t),t&&m(e)}}}function Be(s,e,l){let{year:t}=e,r=!1;Ie(()=>{l(1,r=!0)});function i(d,{duration:g=500,maxWidth:_=500}){return{duration:g,css:k=>`
                width: ${Te(k)*_}px;`}}return s.$$set=d=>{"year"in d&&l(0,t=d.year)},[t,r,i]}class Re extends W{constructor(e){super(),x(this,e,Be,ze,ee,{year:0})}}function _e(s,e,l){const t=s.slice();return t[3]=e[l],t}function me(s){let e,l=s[3]+"",t;return{c(){e=D("li"),t=G(l)},l(r){e=E(r,"LI",{});var i=P(e);t=X(i,l),i.forEach(m)},m(r,i){N(r,e,i),v(e,t)},p(r,i){i&1&&l!==(l=r[3]+"")&&F(t,l)},d(r){r&&m(e)}}}function Le(s){let e,l,t,r=s[0].title+"",i,d,g,_=s[0].duration+"",k,p,f,H,n,c,y,a;f=new Ve({props:{usePadding:!1}});let w=s[0].details,h=[];for(let o=0;o<w.length;o+=1)h[o]=me(_e(s,w,o));return{c(){e=D("div"),l=D("div"),t=D("h3"),i=G(r),d=z(),g=D("span"),k=G(_),p=z(),J(f.$$.fragment),H=z(),n=D("ul");for(let o=0;o<h.length;o+=1)h[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var V=P(e);l=E(V,"DIV",{class:!0});var I=P(l);t=E(I,"H3",{class:!0});var O=P(t);i=X(O,r),O.forEach(m),d=B(I),g=E(I,"SPAN",{class:!0});var L=P(g);k=X(L,_),L.forEach(m),I.forEach(m),p=B(V),Q(f.$$.fragment,V),H=B(V),n=E(V,"UL",{class:!0});var A=P(n);for(let Y=0;Y<h.length;Y+=1)h[Y].l(A);A.forEach(m),V.forEach(m),this.h()},h(){$(t,"class","svelte-1wbth1k"),$(g,"class","duration svelte-1wbth1k"),$(l,"class","top svelte-1wbth1k"),$(n,"class","svelte-1wbth1k"),$(e,"class","item svelte-1wbth1k")},m(o,V){N(o,e,V),v(e,l),v(l,t),v(t,i),v(l,d),v(l,g),v(g,k),v(e,p),U(f,e,null),v(e,H),v(e,n);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(n,null);c=!0,y||(a=[q(e,"click",s[1]),q(e,"keypress",s[2])],y=!0)},p(o,V){if((!c||V&1)&&r!==(r=o[0].title+"")&&F(i,r),(!c||V&1)&&_!==(_=o[0].duration+"")&&F(k,_),V&1){w=o[0].details;let I;for(I=0;I<w.length;I+=1){const O=_e(o,w,I);h[I]?h[I].p(O,V):(h[I]=me(O),h[I].c(),h[I].m(n,null))}for(;I<h.length;I+=1)h[I].d(1);h.length=w.length}},i(o){c||(S(f.$$.fragment,o),c=!0)},o(o){R(f.$$.fragment,o),c=!1},d(o){o&&m(e),Z(f),re(h,o),y=!1,we(a)}}}function Me(s){let e,l;return e=new Se({props:{style:"margin:1rem; margin-left:2rem;",$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,[r]){const i={};r&65&&(i.$$scope={dirty:r,ctx:t}),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Ne(s,e,l){let{info:t}=e;function r(d){fe.call(this,s,d)}function i(d){fe.call(this,s,d)}return s.$$set=d=>{"info"in d&&l(0,t=d.info)},[t,r,i]}class Oe extends W{constructor(e){super(),x(this,e,Ne,Me,ee,{info:0})}}const{setTimeout:ve}=Ee;function pe(s,e,l){const t=s.slice();return t[15]=e[l],t[16]=e,t[17]=l,t}function ge(s,e,l){const t=s.slice();return t[18]=e[l],t}function ye(s){let e,l;return e=new Oe({props:{info:s[18]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,r){const i={};r&1&&(i.info=t[18]),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Ae(s){let e,l,t,r=s[17],i,d,g;t=new Re({props:{year:s[15].year}});const _=()=>s[13](l,r),k=()=>s[13](null,r);let p=s[15].items,f=[];for(let n=0;n<p.length;n+=1)f[n]=ye(ge(s,p,n));const H=n=>R(f[n],1,1,()=>{f[n]=null});return{c(){e=D("div"),l=D("div"),J(t.$$.fragment),i=z();for(let n=0;n<f.length;n+=1)f[n].c();d=z(),this.h()},l(n){e=E(n,"DIV",{class:!0});var c=P(e);l=E(c,"DIV",{class:!0});var y=P(l);Q(t.$$.fragment,y),y.forEach(m),i=B(c);for(let a=0;a<f.length;a+=1)f[a].l(c);d=B(c),c.forEach(m),this.h()},h(){$(l,"class","year svelte-19fefue"),$(e,"class","group")},m(n,c){N(n,e,c),v(e,l),U(t,l,null),_(),v(e,i);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(e,null);v(e,d),g=!0},p(n,c){s=n;const y={};if(c&1&&(y.year=s[15].year),t.$set(y),r!==s[17]&&(k(),r=s[17],_()),c&1){p=s[15].items;let a;for(a=0;a<p.length;a+=1){const w=ge(s,p,a);f[a]?(f[a].p(w,c),S(f[a],1)):(f[a]=ye(w),f[a].c(),S(f[a],1),f[a].m(e,d))}for(le(),a=p.length;a<f.length;a+=1)H(a);se()}},i(n){if(!g){S(t.$$.fragment,n);for(let c=0;c<p.length;c+=1)S(f[c]);g=!0}},o(n){R(t.$$.fragment,n),f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)R(f[c]);g=!1},d(n){n&&m(e),Z(t),k(),re(f,n)}}}function Ye(s){let e=!1,l=()=>{e=!1},t,r,i,d,g,_,k,p,f,H,n,c,y,a,w,h,o,V,I,O;K(s[10]),K(s[11]);let L=s[0],A=[];for(let u=0;u<L.length;u+=1)A[u]=Ae(pe(s,L,u));const Y=u=>R(A[u],1,1,()=>{A[u]=null});return{c(){r=D("h1"),i=G("Past Experiences and Achievement"),d=z(),g=D("div"),_=D("div"),k=D("div"),f=z(),H=D("div"),n=D("div"),c=D("div"),y=z(),a=D("div"),h=z(),o=D("div");for(let u=0;u<A.length;u+=1)A[u].c();this.h()},l(u){r=E(u,"H1",{});var T=P(r);i=X(T,"Past Experiences and Achievement"),T.forEach(m),d=B(u),g=E(u,"DIV",{class:!0});var b=P(g);_=E(b,"DIV",{class:!0,style:!0});var C=P(_);k=E(C,"DIV",{class:!0}),P(k).forEach(m),C.forEach(m),f=B(b),H=E(b,"DIV",{class:!0,style:!0});var ne=P(H);n=E(ne,"DIV",{class:!0});var j=P(n);c=E(j,"DIV",{class:!0}),P(c).forEach(m),y=B(j),a=E(j,"DIV",{class:!0}),P(a).forEach(m),j.forEach(m),ne.forEach(m),b.forEach(m),h=B(u),o=E(u,"DIV",{style:!0});var ie=P(o);for(let te=0;te<A.length;te+=1)A[te].l(ie);ie.forEach(m),this.h()},h(){$(k,"class","decor svelte-19fefue"),$(_,"class","hline svelte-19fefue"),$(_,"style",p=s[3]?"max-width:800px;":""),$(c,"class","innerArrow svelte-19fefue"),$(a,"class","littleArrow svelte-19fefue"),$(n,"class","scrollDiamond svelte-19fefue"),$(H,"class","vline svelte-19fefue"),$(H,"style",w=s[3]?`height:${s[4]-He-s[6]+s[2]}px;`:""),$(g,"class","timelineParent svelte-19fefue"),M(o,"margin-left","2.5rem")},m(u,T){N(u,r,T),v(r,i),N(u,d,T),N(u,g,T),v(g,_),v(_,k),v(g,f),v(g,H),v(H,n),v(n,c),v(n,y),v(n,a),s[12](H),N(u,h,T),N(u,o,T);for(let b=0;b<A.length;b+=1)A[b]&&A[b].m(o,null);V=!0,I||(O=[q(window,"resize",s[8]),q(window,"scroll",()=>{e=!0,clearTimeout(t),t=ve(l,100),s[10]()}),q(window,"resize",s[11])],I=!0)},p(u,[T]){if(T&2&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,u[1]),t=ve(l,100)),(!V||T&8&&p!==(p=u[3]?"max-width:800px;":""))&&$(_,"style",p),(!V||T&92&&w!==(w=u[3]?`height:${u[4]-He-u[6]+u[2]}px;`:""))&&$(H,"style",w),T&129){L=u[0];let b;for(b=0;b<L.length;b+=1){const C=pe(u,L,b);A[b]?(A[b].p(C,T),S(A[b],1)):(A[b]=Ae(C),A[b].c(),S(A[b],1),A[b].m(o,null))}for(le(),b=L.length;b<A.length;b+=1)Y(b);se()}},i(u){if(!V){for(let T=0;T<L.length;T+=1)S(A[T]);V=!0}},o(u){A=A.filter(Boolean);for(let T=0;T<A.length;T+=1)R(A[T]);V=!1},d(u){u&&m(r),u&&m(d),u&&m(g),s[12](null),u&&m(h),u&&m(o),re(A,u),I=!1,we(O)}}}let He=150;function Ce(s,e,l){let t;$e(s,ue,h=>l(14,t=h));let{pageInput:r}=e,i=!1,d=0,g=0,_=0,k=0,p,f=0,H=Array(r.length);H.fill(void 0);function n(){l(9,d=document.body.clientHeight)}Ie(()=>{De(ue,t=ke.NeedTransition,t),l(6,f=p.getBoundingClientRect().top),setTimeout(()=>{l(3,i=!0),n()},50)});function c(){l(1,_=window.pageYOffset)}function y(){l(4,g=window.innerHeight)}function a(h){ce[h?"unshift":"push"](()=>{p=h,l(5,p)})}function w(h,o){ce[h?"unshift":"push"](()=>{H[o]=h,l(7,H)})}return s.$$set=h=>{"pageInput"in h&&l(0,r=h.pageInput)},s.$$.update=()=>{s.$$.dirty&514&&l(1,_=Math.min(d,_)),s.$$.dirty&6&&l(2,k=Math.round(Math.max(_,k)))},[r,_,k,i,g,p,f,H,n,d,c,y,a,w]}class qe extends W{constructor(e){super(),x(this,e,Ce,Ye,ee,{pageInput:0})}}function Ge(s){let e,l;return e=new qe({props:{pageInput:s[0]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p:Pe,i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Xe(s){return[[{year:"2023",items:[{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]}]},{year:"22222",items:[{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]}]}]]}class Fe extends W{constructor(e){super(),x(this,e,Xe,Ge,ee,{})}}export{Fe as default};
