import{S as P,i as j,s as w,k as u,a as m,l as o,m as h,c as k,h as d,n as r,O as D,b as v,G as _,H as g}from"./index.a9f96c15.js";function y(c){let e;return{c(){e=u("div"),this.h()},l(t){e=o(t,"DIV",{class:!0}),h(e).forEach(d),this.h()},h(){r(e,"class","dot svelte-1hwjskk")},m(t,l){v(t,e,l)},d(t){t&&d(e)}}}function b(c){let e;return{c(){e=u("div"),this.h()},l(t){e=o(t,"DIV",{class:!0}),h(e).forEach(d),this.h()},h(){r(e,"class","dot svelte-1hwjskk")},m(t,l){v(t,e,l)},d(t){t&&d(e)}}}function E(c){let e,t,l,f,i=c[2]&&y(),s=c[2]&&b();return{c(){e=u("div"),i&&i.c(),t=m(),l=u("div"),f=m(),s&&s.c(),this.h()},l(n){e=o(n,"DIV",{class:!0,style:!0});var a=h(e);i&&i.l(a),t=k(a),l=o(a,"DIV",{class:!0}),h(l).forEach(d),f=k(a),s&&s.l(a),a.forEach(d),this.h()},h(){r(l,"class","bar svelte-1hwjskk"),r(e,"class","divider svelte-1hwjskk"),r(e,"style",c[1]),D(e,"usePadding",c[0])},m(n,a){v(n,e,a),i&&i.m(e,null),_(e,t),_(e,l),_(e,f),s&&s.m(e,null)},p(n,[a]){n[2]?i||(i=y(),i.c(),i.m(e,t)):i&&(i.d(1),i=null),n[2]?s||(s=b(),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&2&&r(e,"style",n[1]),a&1&&D(e,"usePadding",n[0])},i:g,o:g,d(n){n&&d(e),i&&i.d(),s&&s.d()}}}function I(c,e,t){let{usePadding:l=!0}=e,{style:f=""}=e,{useDecoration:i=!0}=e;return c.$$set=s=>{"usePadding"in s&&t(0,l=s.usePadding),"style"in s&&t(1,f=s.style),"useDecoration"in s&&t(2,i=s.useDecoration)},[l,f,i]}class S extends P{constructor(e){super(),j(this,e,I,E,w,{usePadding:0,style:1,useDecoration:2})}}export{S as D};