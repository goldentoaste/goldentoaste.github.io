import{S as H,i as L,s as M,C as te,k as g,a as w,l as $,m as v,c as D,h as c,n as m,b,G as h,I as se,J as le,K as ie,f as z,t as R,q as P,r as j,u as ae,D as q,E as A,p as ne,w as F,x as N,y as Q,z as W,o as re,O as oe,B as fe}from"../../chunks/index-48d928d8.js";function x(f){let e,l;return{c(){e=g("div"),l=P(f[0]),this.h()},l(t){e=$(t,"DIV",{class:!0});var i=v(e);l=j(i,f[0]),i.forEach(c),this.h()},h(){m(e,"class","title svelte-1mnj65c")},m(t,i){b(t,e,i),h(e,l)},p(t,i){i&1&&ae(l,t[0])},d(t){t&&c(e)}}}function ce(f){let e,l,t,i,o=f[0]&&x(f);const n=f[3].default,r=te(n,f,f[2],null);return{c(){e=g("div"),o&&o.c(),l=w(),t=g("div"),r&&r.c(),this.h()},l(a){e=$(a,"DIV",{class:!0,style:!0});var s=v(e);o&&o.l(s),l=D(s),t=$(s,"DIV",{class:!0});var _=v(t);r&&r.l(_),_.forEach(c),s.forEach(c),this.h()},h(){m(t,"class","body svelte-1mnj65c"),m(e,"class","container svelte-1mnj65c"),m(e,"style",f[1])},m(a,s){b(a,e,s),o&&o.m(e,null),h(e,l),h(e,t),r&&r.m(t,null),i=!0},p(a,[s]){a[0]?o?o.p(a,s):(o=x(a),o.c(),o.m(e,l)):o&&(o.d(1),o=null),r&&r.p&&(!i||s&4)&&se(r,n,a,a[2],i?ie(n,a[2],s,null):le(a[2]),null),(!i||s&2)&&m(e,"style",a[1])},i(a){i||(z(r,a),i=!0)},o(a){R(r,a),i=!1},d(a){a&&c(e),o&&o.d(),r&&r.d(a)}}}function ue(f,e,l){let{$$slots:t={},$$scope:i}=e,{title:o=""}=e,{style:n=""}=e;return f.$$set=r=>{"title"in r&&l(0,o=r.title),"style"in r&&l(1,n=r.style),"$$scope"in r&&l(2,i=r.$$scope)},[o,n,i,t]}class he extends H{constructor(e){super(),L(this,e,ue,ce,M,{title:0,style:1})}}function ee(f){let e;return{c(){e=g("div"),this.h()},l(l){e=$(l,"DIV",{class:!0,style:!0}),v(e).forEach(c),this.h()},h(){m(e,"class","imgDiv svelte-11c5xrt"),ne(e,"clip-path","url('#clip')")},m(l,t){b(l,e,t)},d(l){l&&c(e)}}}function _e(f){let e,l,t,i,o,n,r,a,s=f[0]&&ee();const _=f[2].default,d=te(_,f,f[1],null);return{c(){e=q("svg"),l=q("defs"),t=q("clipPath"),i=q("path"),o=w(),n=g("div"),s&&s.c(),r=w(),d&&d.c(),this.h()},l(u){e=A(u,"svg",{width:!0,height:!0,xmlns:!0});var p=v(e);l=A(p,"defs",{});var B=v(l);t=A(B,"clipPath",{id:!0,clipPathUnits:!0});var y=v(t);i=A(y,"path",{d:!0,fill:!0}),v(i).forEach(c),y.forEach(c),B.forEach(c),p.forEach(c),o=D(u),n=$(u,"DIV",{});var V=v(n);s&&s.l(V),r=D(V),d&&d.l(V),V.forEach(c),this.h()},h(){m(i,"d",f[0]),m(i,"fill","black"),m(t,"id","clip"),m(t,"clipPathUnits","objectBoundingBox"),m(e,"width","0"),m(e,"height","0"),m(e,"xmlns","http://www.w3.org/2000/svg")},m(u,p){b(u,e,p),h(e,l),h(l,t),h(t,i),b(u,o,p),b(u,n,p),s&&s.m(n,null),h(n,r),d&&d.m(n,null),a=!0},p(u,[p]){(!a||p&1)&&m(i,"d",u[0]),u[0]?s||(s=ee(),s.c(),s.m(n,r)):s&&(s.d(1),s=null),d&&d.p&&(!a||p&2)&&se(d,_,u,u[1],a?ie(_,u[1],p,null):le(u[1]),null)},i(u){a||(z(d,u),a=!0)},o(u){R(d,u),a=!1},d(u){u&&c(e),u&&c(o),u&&c(n),s&&s.d(),d&&d.d(u)}}}function me(f,e,l){let{$$slots:t={},$$scope:i}=e,{path:o=""}=e;return f.$$set=n=>{"path"in n&&l(0,o=n.path),"$$scope"in n&&l(1,i=n.$$scope)},[o,i,t]}class de extends H{constructor(e){super(),L(this,e,me,_e,M,{path:0})}}function ve(f){let e;return{c(){e=P("Perosnal info here")},l(l){e=j(l,"Perosnal info here")},m(l,t){b(l,e,t)},d(l){l&&c(e)}}}function pe(f){let e,l,t,i,o,n,r,a;return r=new de({props:{$$slots:{default:[ve]},$$scope:{ctx:f}}}),{c(){e=g("img"),t=w(),i=g("div"),o=w(),n=g("div"),F(r.$$.fragment),this.h()},l(s){e=$(s,"IMG",{alt:!0,src:!0,class:!0}),t=D(s),i=$(s,"DIV",{class:!0});var _=v(i);_.forEach(c),o=D(s),n=$(s,"DIV",{class:!0});var d=v(n);N(r.$$.fragment,d),d.forEach(c),this.h()},h(){m(e,"alt",""),oe(e.src,l="/bigBread.svg")||m(e,"src",l),m(e,"class","svelte-1j4z6jx"),m(i,"class","imgHolder"),m(n,"class","list svelte-1j4z6jx")},m(s,_){b(s,e,_),b(s,t,_),b(s,i,_),b(s,o,_),b(s,n,_),Q(r,n,null),a=!0},p(s,_){const d={};_&2&&(d.$$scope={dirty:_,ctx:s}),r.$set(d)},i(s){a||(z(r.$$.fragment,s),a=!0)},o(s){R(r.$$.fragment,s),a=!1},d(s){s&&c(e),s&&c(t),s&&c(i),s&&c(o),s&&c(n),W(r)}}}function ge(f){let e,l,t,i,o,n,r,a,s,_,d,u,p,B,y,V,S,C,J,U,G;return n=new he({props:{title:"Profile info",style:"margin-top:5rem;",$$slots:{default:[pe]},$$scope:{ctx:f}}}),{c(){e=g("div"),l=g("div"),t=g("h1"),i=P("Ray Gong's website (Under Construction)"),o=w(),F(n.$$.fragment),r=w(),a=g("p"),s=P("Resume "),_=g("a"),d=P("here"),u=w(),p=g("p"),B=P("Github "),y=g("a"),V=P("https://github.com/goldentoaste"),S=w(),C=g("p"),J=P("Email: "),U=P(f[0]),this.h()},l(I){e=$(I,"DIV",{class:!0});var E=v(e);l=$(E,"DIV",{class:!0});var k=v(l);t=$(k,"H1",{class:!0});var X=v(t);i=j(X,"Ray Gong's website (Under Construction)"),X.forEach(c),o=D(k),N(n.$$.fragment,k),k.forEach(c),r=D(E),a=$(E,"P",{});var K=v(a);s=j(K,"Resume "),_=$(K,"A",{href:!0});var Y=v(_);d=j(Y,"here"),Y.forEach(c),K.forEach(c),u=D(E),p=$(E,"P",{});var O=v(p);B=j(O,"Github "),y=$(O,"A",{href:!0});var Z=v(y);V=j(Z,"https://github.com/goldentoaste"),Z.forEach(c),O.forEach(c),S=D(E),C=$(E,"P",{});var T=v(C);J=j(T,"Email: "),U=j(T,f[0]),T.forEach(c),E.forEach(c),this.h()},h(){m(t,"class","svelte-1j4z6jx"),m(l,"class","headContainer svelte-1j4z6jx"),m(_,"href","/resume"),m(y,"href","https://github.com/goldentoaste"),m(e,"class","container")},m(I,E){b(I,e,E),h(e,l),h(l,t),h(t,i),h(l,o),Q(n,l,null),h(e,r),h(e,a),h(a,s),h(a,_),h(_,d),h(e,u),h(e,p),h(p,B),h(p,y),h(y,V),h(e,S),h(e,C),h(C,J),h(C,U),G=!0},p(I,[E]){const k={};E&2&&(k.$$scope={dirty:E,ctx:I}),n.$set(k),(!G||E&1)&&ae(U,I[0])},i(I){G||(z(n.$$.fragment,I),G=!0)},o(I){R(n.$$.fragment,I),G=!1},d(I){I&&c(e),W(n)}}}function $e(f,e,l){let t="";return re(()=>{setTimeout(()=>{l(0,t="rayg2375@gmail.com")},1e3)}),[t]}class Ee extends H{constructor(e){super(),L(this,e,$e,ge,M,{})}}function be(f){let e,l;return e=new Ee({}),{c(){F(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,i){Q(e,t,i),l=!0},p:fe,i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}class ye extends H{constructor(e){super(),L(this,e,null,be,M,{})}}export{ye as default};
