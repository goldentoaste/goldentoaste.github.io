import{S as A,i as F,s as Q,N as z,C as P,a as j,k as D,D as w,m as p,h as u,c as C,l as N,n as c,T as I,b as B,F as y,U as G,O as H,P as J,Q as K,f as L,t as M,V as R,p as O}from"./index-e06c9e0e.js";import{j as g}from"./singletons-0ade1048.js";g.disable_scroll_handling;const W=g.goto;g.invalidate;g.invalidateAll;g.preload_data;g.preload_code;const $=g.before_navigate,ee=g.after_navigate;function S(i){let l;return{c(){l=D("div"),this.h()},l(s){l=N(s,"DIV",{class:!0,style:!0}),p(l).forEach(u),this.h()},h(){c(l,"class","icon svelte-agdqgl"),O(l,"clip-path","url('#"+i[3]+"')")},m(s,n){B(s,l,n)},p(s,n){n&8&&O(l,"clip-path","url('#"+s[3]+"')")},d(s){s&&u(l)}}}function X(i){let l,s,n,h,_,a,m,d,v,o,b,k,e=i[0]&&S(i);const q=i[8].default,r=z(q,i,i[7],null);return{c(){l=P("svg"),s=P("defs"),n=P("clipPath"),h=P("path"),_=j(),a=D("button"),e&&e.c(),m=j(),d=D("div"),r&&r.c(),this.h()},l(t){l=w(t,"svg",{width:!0,height:!0,xmlns:!0});var f=p(l);s=w(f,"defs",{});var U=p(s);n=w(U,"clipPath",{id:!0,clipPathUnits:!0});var T=p(n);h=w(T,"path",{d:!0,fill:!0}),p(h).forEach(u),T.forEach(u),U.forEach(u),f.forEach(u),_=C(t),a=N(t,"BUTTON",{style:!0,class:!0});var E=p(a);e&&e.l(E),m=C(E),d=N(E,"DIV",{class:!0});var V=p(d);r&&r.l(V),V.forEach(u),E.forEach(u),this.h()},h(){c(h,"d",i[0]),c(h,"fill","black"),c(n,"id",i[3]),c(n,"clipPathUnits","objectBoundingBox"),c(l,"width","0"),c(l,"height","0"),c(l,"xmlns","http://www.w3.org/2000/svg"),c(d,"class","inner svelte-agdqgl"),c(a,"style",v=`${i[2]?"text-transform: uppercase;":""}${i[4]}`),c(a,"class","svelte-agdqgl"),I(a,"selected",i[1])},m(t,f){B(t,l,f),y(l,s),y(s,n),y(n,h),B(t,_,f),B(t,a,f),e&&e.m(a,null),y(a,m),y(a,d),r&&r.m(d,null),o=!0,b||(k=G(a,"click",i[5]),b=!0)},p(t,[f]){(!o||f&1)&&c(h,"d",t[0]),(!o||f&8)&&c(n,"id",t[3]),t[0]?e?e.p(t,f):(e=S(t),e.c(),e.m(a,m)):e&&(e.d(1),e=null),r&&r.p&&(!o||f&128)&&H(r,q,t,t[7],o?K(q,t[7],f,null):J(t[7]),null),(!o||f&20&&v!==(v=`${t[2]?"text-transform: uppercase;":""}${t[4]}`))&&c(a,"style",v),(!o||f&2)&&I(a,"selected",t[1])},i(t){o||(L(r,t),o=!0)},o(t){M(r,t),o=!1},d(t){t&&u(l),t&&u(_),t&&u(a),e&&e.d(),r&&r.d(t),b=!1,k()}}}function Y(i,l,s){let{$$slots:n={},$$scope:h}=l,{href:_=""}=l,{path:a=""}=l,{selected:m=!1}=l,{upper:d=!0}=l,{key:v="clip"}=l,{style:o=""}=l;const b=R();function k(e){_&&W(_),b("click",e.detail)}return i.$$set=e=>{"href"in e&&s(6,_=e.href),"path"in e&&s(0,a=e.path),"selected"in e&&s(1,m=e.selected),"upper"in e&&s(2,d=e.upper),"key"in e&&s(3,v=e.key),"style"in e&&s(4,o=e.style),"$$scope"in e&&s(7,h=e.$$scope)},[a,m,d,v,o,k,_,h,n]}class te extends A{constructor(l){super(),F(this,l,Y,X,Q,{href:6,path:0,selected:1,upper:2,key:3,style:4})}}export{te as B,ee as a,$ as b,W as g};
