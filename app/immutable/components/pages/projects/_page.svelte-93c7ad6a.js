import{S as F,i as G,s as N,k,a as E,l as L,m as w,h as p,c as I,n as y,b as g,F as $,U as Q,f as M,g as W,d as ee,I as O,X as R,t as T,Y as te,G as se,Z as le,_ as oe,w as U,x as X,y as Y,$ as ae,a0 as ne,z as J,a1 as ie,q as x,r as P,u as re,B as ue,H as ce,o as fe,L as de}from"../../../chunks/index-e06c9e0e.js";import{q as K,b as pe,f as he,P as _e,p as q}from"../../../chunks/index-9e4b3ea0.js";import{B as me}from"../../../chunks/Button-5b5a8dd9.js";function C(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function be(s){let e=s[3].text+"",t;return{c(){t=x(e)},l(l){t=P(l,e)},m(l,r){g(l,t,r)},p(l,r){r&1&&e!==(e=l[3].text+"")&&re(t,e)},d(l){l&&p(t)}}}function H(s){let e,t,l,r,f;const d=[A(s[3]),{key:s[3].text},{style:"margin:0; flex:1;"}];let h={$$slots:{default:[be]},$$scope:{ctx:s}};for(let u=0;u<d.length;u+=1)h=le(h,d[u]);return t=new me({props:h}),t.$on("click",function(){oe(s[3].onClick||z)&&(s[3].onClick||z).apply(this,arguments)}),{c(){e=k("div"),U(t.$$.fragment),l=E(),this.h()},l(u){e=L(u,"DIV",{id:!0,class:!0});var _=w(e);X(t.$$.fragment,_),l=I(_),_.forEach(p),this.h()},h(){y(e,"id","buttonHolder"),y(e,"class","svelte-fcl3dg")},m(u,_){g(u,e,_),Y(t,e,null),$(e,l),f=!0},p(u,_){s=u;const m=_&1?ae(d,[ne(A(s[3])),_&1&&{key:s[3].text},d[2]]):{};_&65&&(m.$$scope={dirty:_,ctx:s}),t.$set(m)},i(u){f||(M(t.$$.fragment,u),r||O(()=>{r=R(e,pe,{delay:40*s[5],duration:70,easing:K,x:-40}),r.start()}),f=!0)},o(u){T(t.$$.fragment,u),f=!1},d(u){u&&p(e),J(t)}}}function ve(s){let e,t,l,r,f,d,h,u,_,m=s[0],n=[];for(let i=0;i<m.length;i+=1)n[i]=H(C(s,m,i));const j=i=>T(n[i],1,1,()=>{n[i]=null});return{c(){e=k("div"),t=k("div"),r=E(),f=k("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=L(i,"DIV",{id:!0,class:!0});var c=w(e);t=L(c,"DIV",{id:!0,class:!0}),w(t).forEach(p),r=I(c),f=L(c,"DIV",{id:!0,style:!0,class:!0});var a=w(f);for(let b=0;b<n.length;b+=1)n[b].l(a);a.forEach(p),c.forEach(p),this.h()},h(){y(t,"id","decor"),y(t,"class","svelte-fcl3dg"),y(f,"id","listContainer"),y(f,"style",s[1]),y(f,"class","svelte-fcl3dg"),y(e,"id","parent"),y(e,"class","svelte-fcl3dg")},m(i,c){g(i,e,c),$(e,t),$(e,r),$(e,f);for(let a=0;a<n.length;a+=1)n[a].m(f,null);h=!0,u||(_=Q(e,"outroend",s[2]),u=!0)},p(i,[c]){if(s=i,c&1){m=s[0];let a;for(a=0;a<m.length;a+=1){const b=C(s,m,a);n[a]?(n[a].p(b,c),M(n[a],1)):(n[a]=H(b),n[a].c(),M(n[a],1),n[a].m(f,null))}for(W(),a=m.length;a<n.length;a+=1)j(a);ee()}(!h||c&2)&&y(f,"style",s[1])},i(i){if(!h){l||O(()=>{l=R(t,ge,{duration:300,easing:K}),l.start()});for(let c=0;c<m.length;c+=1)M(n[c]);d&&d.end(1),h=!0}},o(i){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)T(n[c]);i&&(d=te(e,he,{duration:100})),h=!1},d(i){i&&p(e),se(n,i),i&&d&&d.end(),u=!1,_()}}}function ge(s,{delay:e=0,duration:t=500,easing:l=r=>r}){return{delay:e,duration:t,css:r=>`transform: scale(1, ${l(r)})`}}function A(s){const{text:e,...t}=s;return{...t}}const z=()=>{};function ye(s,e,t){let{buttons:l=[]}=e,{style:r=""}=e;function f(d){ie.call(this,s,d)}return s.$$set=d=>{"buttons"in d&&t(0,l=d.buttons),"style"in d&&t(1,r=d.style)},[l,r,f]}class ke extends F{constructor(e){super(),G(this,e,ye,ve,N,{buttons:0,style:1})}}function Le(s){let e,t,l,r,f,d,h,u,_,m,n,j,i,c,a,b,B;return b=new ke({props:{style:"width:30%;",buttons:[{text:"Project number 1",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z",upper:!1},{text:"Project number 2",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z",upper:!1},{text:"The other project",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z",upper:!1},{text:"Much better project",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z",upper:!1},{text:"Average project",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z",upper:!1},{text:"A total disaster :^(",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z",upper:!1}]}}),{c(){e=k("h1"),t=x("Projects page not done yet! 🔨"),l=E(),r=k("p"),f=x(`This page will later have a this list(with animated intro of course) that each is one of my past projects, when clicked on, more \r
    info should display on a big window on the side.`),d=E(),h=k("p"),u=x("If the project selected is runs on the web, maybe a interactive demo could be shown in the right side group?"),_=k("br"),m=x(`\r
    This could be platform dependent, so for example big/resource intensive projects, like a unity game probably shouldnt load on mobile.`),n=E(),j=k("p"),i=x("Speaking of mobile, making this particular page mobile friendly could be difficult because they will look very different."),c=E(),a=k("div"),U(b.$$.fragment)},l(o){e=L(o,"H1",{});var v=w(e);t=P(v,"Projects page not done yet! 🔨"),v.forEach(p),l=I(o),r=L(o,"P",{});var Z=w(r);f=P(Z,`This page will later have a this list(with animated intro of course) that each is one of my past projects, when clicked on, more \r
    info should display on a big window on the side.`),Z.forEach(p),d=I(o),h=L(o,"P",{});var S=w(h);u=P(S,"If the project selected is runs on the web, maybe a interactive demo could be shown in the right side group?"),_=L(S,"BR",{}),m=P(S,`\r
    This could be platform dependent, so for example big/resource intensive projects, like a unity game probably shouldnt load on mobile.`),S.forEach(p),n=I(o),j=L(o,"P",{});var V=w(j);i=P(V,"Speaking of mobile, making this particular page mobile friendly could be difficult because they will look very different."),V.forEach(p),c=I(o),a=L(o,"DIV",{});var D=w(a);X(b.$$.fragment,D),D.forEach(p)},m(o,v){g(o,e,v),$(e,t),g(o,l,v),g(o,r,v),$(r,f),g(o,d,v),g(o,h,v),$(h,u),$(h,_),$(h,m),g(o,n,v),g(o,j,v),$(j,i),g(o,c,v),g(o,a,v),Y(b,a,null),B=!0},p:ue,i(o){B||(M(b.$$.fragment,o),B=!0)},o(o){T(b.$$.fragment,o),B=!1},d(o){o&&p(e),o&&p(l),o&&p(r),o&&p(d),o&&p(h),o&&p(n),o&&p(j),o&&p(c),o&&p(a),J(b)}}}function $e(s,e,t){let l;return ce(s,q,r=>t(0,l=r)),fe(()=>{de(q,l=_e.NeedTransition,l)}),[]}class Pe extends F{constructor(e){super(),G(this,e,$e,Le,N,{})}}export{Pe as default};
