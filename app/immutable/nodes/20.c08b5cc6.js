import{s as N,C as V,f as y,a as I,l as z,e as L,g as k,h as O,d as _,c as P,m as S,k as v,j as u,M as X,i as m,x as w,A as j,y as q,H as Y,N as B,o as J,F as K}from"../chunks/scheduler.9e384549.js";import{e as Q}from"../chunks/each.e59479a4.js";import{S as R,i as U}from"../chunks/index.8915a013.js";function W(i,t,o){const l=i.slice();return l[4]=t[o],l}function Z(i){let t,o="make page longer";return{c(){t=y("p"),t.textContent=o},l(l){t=k(l,"P",{"data-svelte-h":!0}),K(t)!=="svelte-1xnt3ba"&&(t.textContent=o)},m(l,s){m(l,t,s)},p:q,d(l){l&&_(t)}}}function $(i){let t=!1,o=()=>{t=!1},l,s,n,f,p,h,H,b,M,d,g,C,A;V(i[3]);let E=Q([...Array(50).keys()]),r=[];for(let e=0;e<E.length;e+=1)r[e]=Z(W(i,E,e));return{c(){s=y("div"),n=y("img"),p=I(),h=y("h1"),H=z("Hello "),b=z(D),M=z("!"),d=I();for(let e=0;e<r.length;e+=1)r[e].c();g=L(),this.h()},l(e){s=k(e,"DIV",{id:!0,style:!0,class:!0});var a=O(s);n=k(a,"IMG",{style:!0,alt:!0,src:!0,class:!0}),a.forEach(_),p=P(e),h=k(e,"H1",{});var c=O(h);H=S(c,"Hello "),b=S(c,D),M=S(c,"!"),c.forEach(_),d=P(e);for(let T=0;T<r.length;T+=1)r[T].l(e);g=L(),this.h()},h(){v(n,"height",Math.max(F,Math.min(x,x-i[0]+G))+"px"),u(n,"alt",""),X(n.src,f="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png")||u(n,"src",f),u(n,"class","svelte-10rxzvn"),u(s,"id","wrapper"),v(s,"height",i[1]+"px"),u(s,"class","svelte-10rxzvn")},m(e,a){m(e,s,a),w(s,n),m(e,p,a),m(e,h,a),w(h,H),w(h,b),w(h,M),m(e,d,a);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,a);m(e,g,a),C||(A=[j(window,"resize",i[2]),j(window,"scroll",()=>{t=!0,clearTimeout(l),l=setTimeout(o,100),i[3]()})],C=!0)},p(e,[a]){a&1&&!t&&(t=!0,clearTimeout(l),scrollTo(window.pageXOffset,e[0]),l=setTimeout(o,100)),a&1&&v(n,"height",Math.max(F,Math.min(x,x-e[0]+G))+"px"),a&2&&v(s,"height",e[1]+"px")},i:q,o:q,d(e){e&&(_(s),_(p),_(h),_(d),_(g)),Y(r,e),C=!1,B(A)}}}let D="world",x=100,F=50,G=100;function ee(i,t,o){let l=0,s=100;J(()=>{o(1,s=document.body.clientHeight)});const n=()=>{o(1,s=document.body.clientHeight)};function f(){o(0,l=window.pageYOffset)}return[l,s,n,f]}class ae extends R{constructor(t){super(),U(this,t,ee,$,N,{})}}export{ae as component};