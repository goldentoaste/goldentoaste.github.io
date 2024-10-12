import{s as P,a as $,f as c,l as S,c as v,g as h,F as b,h as H,d as o,m as M,j as g,i as l,x as A,y as j}from"../chunks/scheduler.9e384549.js";import{S as q,i as E,b as C,d as I,m as k,a as w,t as T,e as D}from"../chunks/index.8915a013.js";import{I as O}from"../chunks/IconListItem.d1573a2a.js";import{s as U,I as z,T as B}from"../chunks/svgs.882462a0.js";function G(y){let t,m="Github repo",r,s,p="Deployed demo";return{c(){t=c("a"),t.textContent=m,r=$(),s=c("a"),s.textContent=p,this.h()},l(a){t=h(a,"A",{target:!0,href:!0,"data-svelte-h":!0}),b(t)!=="svelte-7g3s9b"&&(t.textContent=m),r=v(a),s=h(a,"A",{target:!0,href:!0,"data-svelte-h":!0}),b(s)!=="svelte-f7kqaz"&&(s.textContent=p),this.h()},h(){g(t,"target","_blank"),g(t,"href","https://github.com/goldentoaste/gadget-lang"),g(s,"target","_blank"),g(s,"href","https://gadget-lang.vercel.app/")},m(a,i){l(a,t,i),l(a,r,i),l(a,s,i)},p:j,d(a){a&&(o(t),o(r),o(s))}}}function V(y){let t,m,r,s=`A custom interpreted programming language implemented in python. The general architecture is
    mostly borrowed from <a href="https://craftinginterpreters.com/" target="_blank">Crafting Interpreter</a>, but I put fair amount of my own spin on it. The language supports basic programming features,
    functional programming, and basic OOP, with a syntax similar to javascript, and a few ideas
    borrowed from
    <a href="https://github.com/TodePond/DreamBerd" target="_blank" rel="noopener noreferrer">Dreamberd</a>. Please see demo site or github repo for more some documentation.`,p,a,i,x,u,d,f,F="<li>Dynamically typed</li> <li>Functional programming, pass function as variables</li> <li>Functional closure</li> <li>Function overloading</li> <li>Chained comparison</li> <li>C-style variable closure</li>",_;return t=new O({props:{path:U.github,key:"github",$$slots:{default:[G]},$$scope:{ctx:y}}}),i=new z({props:{height:600,maxWidth:800,title:"Demo Images",items:[{desc:"Example of bubble sort and result from running it.",src:"gadget/1.png"}]}}),u=new B({props:{input:[{name:"Frontend",items:[{name:"Sveltekit",src:"icons/svelte.svg"}]},{name:"Interpreter",items:[{name:"Python",src:"icons/python.svg"}]}]}}),{c(){C(t.$$.fragment),m=$(),r=c("p"),r.innerHTML=s,p=$(),a=c("div"),C(i.$$.fragment),x=$(),C(u.$$.fragment),d=S(`\r
\r
Some features:\r
\r
`),f=c("ul"),f.innerHTML=F,this.h()},l(e){I(t.$$.fragment,e),m=v(e),r=h(e,"P",{"data-svelte-h":!0}),b(r)!=="svelte-1up1wf2"&&(r.innerHTML=s),p=v(e),a=h(e,"DIV",{class:!0});var n=H(a);I(i.$$.fragment,n),x=v(n),I(u.$$.fragment,n),n.forEach(o),d=M(e,`\r
\r
Some features:\r
\r
`),f=h(e,"UL",{"data-svelte-h":!0}),b(f)!=="svelte-d4p3bm"&&(f.innerHTML=F),this.h()},h(){g(a,"class","top svelte-14kyk3d")},m(e,n){k(t,e,n),l(e,m,n),l(e,r,n),l(e,p,n),l(e,a,n),k(i,a,null),A(a,x),k(u,a,null),l(e,d,n),l(e,f,n),_=!0},p(e,[n]){const L={};n&1&&(L.$$scope={dirty:n,ctx:e}),t.$set(L)},i(e){_||(w(t.$$.fragment,e),w(i.$$.fragment,e),w(u.$$.fragment,e),_=!0)},o(e){T(t.$$.fragment,e),T(i.$$.fragment,e),T(u.$$.fragment,e),_=!1},d(e){e&&(o(m),o(r),o(p),o(a),o(d),o(f)),D(t,e),D(i),D(u)}}}class Q extends q{constructor(t){super(),E(this,t,null,V,P,{})}}export{Q as component};
