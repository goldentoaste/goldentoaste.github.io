import{T as W,S as D,i as I,s as j,k as v,a as S,l as y,m as $,h,c as V,n as m,b,F as L,P as X,f as E,g as Y,d as A,U as q,V as H,t as k,W as J,G as K,X as Q,Y as tt,w as N,x as O,y as z,Z as et,_ as nt,z as F,$ as st,q as G,r as R,u as at,B as ot,H as rt,o as lt,a0 as Z}from"../../../chunks/index-a37f4800.js";import{B as it,P as x,p as M}from"../../../chunks/pageUpdates-c31317a0.js";function ut(e){const t=e-1;return t*t*t+1}function U(e){return Math.pow(e-1,3)*(1-e)+1}function ct(e,{delay:t=0,duration:n=400,easing:s=W}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:a=>`opacity: ${a*o}`}}function ft(e,{delay:t=0,duration:n=400,easing:s=ut,x:o=0,y:a=0,opacity:u=0}={}){const r=getComputedStyle(e),l=+r.opacity,d=r.transform==="none"?"":r.transform,p=l*(1-u);return{delay:t,duration:n,easing:s,css:(i,T)=>`
			transform: ${d} translate(${(1-i)*o}px, ${(1-i)*a}px);
			opacity: ${l-p*T}`}}function B(e,t,n){const s=e.slice();return s[3]=t[n],s[5]=n,s}function dt(e){let t=e[3].text+"",n;return{c(){n=G(t)},l(s){n=R(s,t)},m(s,o){b(s,n,o)},p(s,o){o&1&&t!==(t=s[3].text+"")&&at(n,t)},d(s){s&&h(n)}}}function C(e){let t,n,s,o,a;const u=[P(e[3]),{key:e[3].text},{style:"margin:0; flex:1;"}];let r={$$slots:{default:[dt]},$$scope:{ctx:e}};for(let l=0;l<u.length;l+=1)r=Q(r,u[l]);return n=new it({props:r}),n.$on("click",function(){tt(e[3].onClick||w)&&(e[3].onClick||w).apply(this,arguments)}),{c(){t=v("div"),N(n.$$.fragment),s=S(),this.h()},l(l){t=y(l,"DIV",{id:!0,class:!0});var d=$(t);O(n.$$.fragment,d),s=V(d),d.forEach(h),this.h()},h(){m(t,"id","buttonHolder"),m(t,"class","svelte-fcl3dg")},m(l,d){b(l,t,d),z(n,t,null),L(t,s),a=!0},p(l,d){e=l;const p=d&1?et(u,[nt(P(e[3])),d&1&&{key:e[3].text},u[2]]):{};d&65&&(p.$$scope={dirty:d,ctx:e}),n.$set(p)},i(l){a||(E(n.$$.fragment,l),o||q(()=>{o=H(t,ft,{delay:40*e[5],duration:70,easing:U,x:-40}),o.start()}),a=!0)},o(l){k(n.$$.fragment,l),a=!1},d(l){l&&h(t),F(n)}}}function _t(e){let t,n,s,o,a,u,r,l,d,p=e[0],i=[];for(let c=0;c<p.length;c+=1)i[c]=C(B(e,p,c));const T=c=>k(i[c],1,1,()=>{i[c]=null});return{c(){t=v("div"),n=v("div"),o=S(),a=v("div");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){t=y(c,"DIV",{id:!0,class:!0});var _=$(t);n=y(_,"DIV",{id:!0,class:!0}),$(n).forEach(h),o=V(_),a=y(_,"DIV",{id:!0,style:!0,class:!0});var f=$(a);for(let g=0;g<i.length;g+=1)i[g].l(f);f.forEach(h),_.forEach(h),this.h()},h(){m(n,"id","decor"),m(n,"class","svelte-fcl3dg"),m(a,"id","listContainer"),m(a,"style",e[1]),m(a,"class","svelte-fcl3dg"),m(t,"id","parent"),m(t,"class","svelte-fcl3dg")},m(c,_){b(c,t,_),L(t,n),L(t,o),L(t,a);for(let f=0;f<i.length;f+=1)i[f].m(a,null);r=!0,l||(d=X(t,"outroend",e[2]),l=!0)},p(c,[_]){if(e=c,_&1){p=e[0];let f;for(f=0;f<p.length;f+=1){const g=B(e,p,f);i[f]?(i[f].p(g,_),E(i[f],1)):(i[f]=C(g),i[f].c(),E(i[f],1),i[f].m(a,null))}for(Y(),f=p.length;f<i.length;f+=1)T(f);A()}(!r||_&2)&&m(a,"style",e[1])},i(c){if(!r){s||q(()=>{s=H(n,pt,{duration:300,easing:U}),s.start()});for(let _=0;_<p.length;_+=1)E(i[_]);u&&u.end(1),r=!0}},o(c){i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)k(i[_]);c&&(u=J(t,ct,{duration:100})),r=!1},d(c){c&&h(t),K(i,c),c&&u&&u.end(),l=!1,d()}}}function pt(e,{delay:t=0,duration:n=500,easing:s=o=>o}){return{delay:t,duration:n,css:o=>`transform: scale(1, ${s(o)})`}}function P(e){const{text:t,...n}=e;return{...n}}const w=()=>{};function ht(e,t,n){let{buttons:s=[]}=t,{style:o=""}=t;function a(u){st.call(this,e,u)}return e.$$set=u=>{"buttons"in u&&n(0,s=u.buttons),"style"in u&&n(1,o=u.style)},[s,o,a]}class mt extends D{constructor(t){super(),I(this,t,ht,_t,j,{buttons:0,style:1})}}function gt(e){let t,n,s,o,a,u;return a=new mt({props:{style:"width:30%;",buttons:[{text:"TEst",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z",upper:!1},{text:"TEst",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z"},{text:"TEst",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z"},{text:"TEst",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z"},{text:"TEst",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z"},{text:"TEst",path:"M 0,0 L 1,0 L 1,1 L 0,1 Z"}]}}),a.$on("outroend",e[1]),{c(){t=v("h1"),n=G("Projects page not done yet! 🔨"),s=S(),o=v("div"),N(a.$$.fragment)},l(r){t=y(r,"H1",{});var l=$(t);n=R(l,"Projects page not done yet! 🔨"),l.forEach(h),s=V(r),o=y(r,"DIV",{});var d=$(o);O(a.$$.fragment,d),d.forEach(h)},m(r,l){b(r,t,l),L(t,n),b(r,s,l),b(r,o,l),z(a,o,null),u=!0},p:ot,i(r){u||(E(a.$$.fragment,r),u=!0)},o(r){k(a.$$.fragment,r),u=!1},d(r){r&&h(t),r&&h(s),r&&h(o),F(a)}}}function vt(e,t,n){let s;return rt(e,M,a=>n(0,s=a)),lt(()=>{Z(M,s=x.NeedTransition,s)}),[s,()=>{s===x.Transitioning&&Z(M,s=x.ReadyToNav,s)}]}class bt extends D{constructor(t){super(),I(this,t,vt,gt,j,{})}}export{bt as default};
