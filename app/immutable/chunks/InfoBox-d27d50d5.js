import{S as b,i as D,s as E,C as k,k as c,a as V,l as d,m as h,c as q,h as u,n as _,O as g,b as I,G as v,D as B,E as C,F as S,f as F,t as G,q as O,r as j,u as w}from"./index-6c671713.js";function y(o){let e,n;return{c(){e=c("div"),n=O(o[0]),this.h()},l(a){e=d(a,"DIV",{class:!0});var l=h(e);n=j(l,o[0]),l.forEach(u),this.h()},h(){_(e,"class","title svelte-1savgds")},m(a,l){I(a,e,l),v(e,n)},p(a,l){l&1&&w(n,a[0])},d(a){a&&u(e)}}}function z(o){let e,n,a,l,t=o[0]&&y(o);const r=o[4].default,i=k(r,o,o[3],null);return{c(){e=c("div"),t&&t.c(),n=V(),a=c("div"),i&&i.c(),this.h()},l(s){e=d(s,"DIV",{class:!0,style:!0});var f=h(e);t&&t.l(f),n=q(f),a=d(f,"DIV",{class:!0});var m=h(a);i&&i.l(m),m.forEach(u),f.forEach(u),this.h()},h(){_(a,"class","body svelte-1savgds"),_(e,"class","container svelte-1savgds"),_(e,"style",o[1]),g(e,"hovering",o[2])},m(s,f){I(s,e,f),t&&t.m(e,null),v(e,n),v(e,a),i&&i.m(a,null),l=!0},p(s,[f]){s[0]?t?t.p(s,f):(t=y(s),t.c(),t.m(e,n)):t&&(t.d(1),t=null),i&&i.p&&(!l||f&8)&&B(i,r,s,s[3],l?S(r,s[3],f,null):C(s[3]),null),(!l||f&2)&&_(e,"style",s[1]),(!l||f&4)&&g(e,"hovering",s[2])},i(s){l||(F(i,s),l=!0)},o(s){G(i,s),l=!1},d(s){s&&u(e),t&&t.d(),i&&i.d(s)}}}function A(o,e,n){let{$$slots:a={},$$scope:l}=e,{title:t=""}=e,{style:r=""}=e,{hovering:i=!0}=e;return o.$$set=s=>{"title"in s&&n(0,t=s.title),"style"in s&&n(1,r=s.style),"hovering"in s&&n(2,i=s.hovering),"$$scope"in s&&n(3,l=s.$$scope)},[t,r,i,l,a]}class J extends b{constructor(e){super(),D(this,e,A,z,E,{title:0,style:1,hovering:2})}}export{J as I};
