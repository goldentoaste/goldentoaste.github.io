import{S as A,i as B,s as C,C as N,k as h,a as I,l as v,m,c as k,h as u,n as d,O as b,b as g,G as c,D as P,E as F,F as G,g as O,d as j,q as D,r as S,u as V}from"./index.a65c0af5.js";function E(f){let e,n,a,r,t=f[1]&&q(f);return{c(){e=h("div"),n=h("span"),a=D(f[0]),r=I(),t&&t.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var _=m(e);n=v(_,"SPAN",{});var o=m(n);a=S(o,f[0]),o.forEach(u),r=k(_),t&&t.l(_),_.forEach(u),this.h()},h(){d(e,"class","title svelte-1nyvq0g")},m(l,_){g(l,e,_),c(e,n),c(n,a),c(e,r),t&&t.m(e,null)},p(l,_){_&1&&V(a,l[0]),l[1]?t?t.p(l,_):(t=q(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&u(e),t&&t.d()}}}function q(f){let e,n;return{c(){e=h("span"),n=D(f[1]),this.h()},l(a){e=v(a,"SPAN",{class:!0});var r=m(e);n=S(r,f[1]),r.forEach(u),this.h()},h(){d(e,"class","titleEnd svelte-1nyvq0g")},m(a,r){g(a,e,r),c(e,n)},p(a,r){r&2&&V(n,a[1])},d(a){a&&u(e)}}}function w(f){let e,n,a,r,t,l=f[0]&&E(f);const _=f[6].default,o=N(_,f,f[5],null);return{c(){e=h("div"),l&&l.c(),n=I(),a=h("div"),o&&o.c(),this.h()},l(i){e=v(i,"DIV",{class:!0,style:!0});var s=m(e);l&&l.l(s),n=k(s),a=v(s,"DIV",{class:!0});var y=m(a);o&&o.l(y),y.forEach(u),s.forEach(u),this.h()},h(){d(a,"class","body svelte-1nyvq0g"),d(e,"class","container svelte-1nyvq0g"),d(e,"style",r=f[2]+(f[4]?"border:2px solid var(--bg-alt2);":"")),b(e,"hovering",f[3])},m(i,s){g(i,e,s),l&&l.m(e,null),c(e,n),c(e,a),o&&o.m(a,null),t=!0},p(i,[s]){i[0]?l?l.p(i,s):(l=E(i),l.c(),l.m(e,n)):l&&(l.d(1),l=null),o&&o.p&&(!t||s&32)&&P(o,_,i,i[5],t?G(_,i[5],s,null):F(i[5]),null),(!t||s&20&&r!==(r=i[2]+(i[4]?"border:2px solid var(--bg-alt2);":"")))&&d(e,"style",r),(!t||s&8)&&b(e,"hovering",i[3])},i(i){t||(O(o,i),t=!0)},o(i){j(o,i),t=!1},d(i){i&&u(e),l&&l.d(),o&&o.d(i)}}}function z(f,e,n){let{$$slots:a={},$$scope:r}=e,{title:t=""}=e,{titleEnd:l=""}=e,{style:_=""}=e,{hovering:o=!0}=e,{outline:i=!1}=e;return f.$$set=s=>{"title"in s&&n(0,t=s.title),"titleEnd"in s&&n(1,l=s.titleEnd),"style"in s&&n(2,_=s.style),"hovering"in s&&n(3,o=s.hovering),"outline"in s&&n(4,i=s.outline),"$$scope"in s&&n(5,r=s.$$scope)},[t,l,_,o,i,r,a]}class J extends A{constructor(e){super(),B(this,e,z,w,C,{title:0,titleEnd:1,style:2,hovering:3,outline:4})}}export{J as I};