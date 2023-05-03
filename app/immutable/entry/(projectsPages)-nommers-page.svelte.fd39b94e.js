import{a3 as _e,a4 as Be,S as Pe,i as Ve,s as Se,a as C,e as we,c as G,b as D,g as H,v as ve,d as L,f as be,h as u,I as Xe,X as ee,y as te,z as se,A as ie,B as le,k as I,q as Y,l as M,m as w,r as $,n as m,G as p,H as Ne,M as z,N as F,Y as Q,p as V,J as q,u as ae,a0 as je}from"../chunks/index.6cb29eb6.js";import{D as Ae}from"../chunks/Divider.c0123edc.js";import{I as Te}from"../chunks/InfoBox.19d628b5.js";import{w as Ce}from"../chunks/index.0aaffedd.js";function ye(i){return Object.prototype.toString.call(i)==="[object Date]"}function fe(i,e,t,l){if(typeof t=="number"||ye(t)){const s=l-t,r=(t-e)/(i.dt||1/60),n=i.opts.stiffness*s,a=i.opts.damping*r,c=(n-a)*i.inv_mass,o=(r+c)*i.dt;return Math.abs(o)<i.opts.precision&&Math.abs(s)<i.opts.precision?l:(i.settled=!1,ye(t)?new Date(t.getTime()+o):t+o)}else{if(Array.isArray(t))return t.map((s,r)=>fe(i,e[r],t[r],l[r]));if(typeof t=="object"){const s={};for(const r in t)s[r]=fe(i,e[r],t[r],l[r]);return s}else throw new Error(`Cannot spring ${typeof t} values`)}}function Ge(i,e={}){const t=Ce(i),{stiffness:l=.15,damping:s=.8,precision:r=.01}=e;let n,a,c,o=i,_=i,h=1,X=0,v=!1;function b(N,T={}){_=N;const J=c={};return i==null||T.hard||S.stiffness>=1&&S.damping>=1?(v=!0,n=_e(),o=N,t.set(i=_),Promise.resolve()):(T.soft&&(X=1/((T.soft===!0?.5:+T.soft)*60),h=0),a||(n=_e(),v=!1,a=Be(B=>{if(v)return v=!1,a=null,!1;h=Math.min(h+X,1);const P={inv_mass:h,opts:S,settled:!0,dt:(B-n)*60/1e3},j=fe(P,o,i,_);return n=B,o=i,t.set(i=j),P.settled&&(a=null),!P.settled})),new Promise(B=>{a.promise.then(()=>{J===c&&B()})}))}const S={set:b,update:(N,T)=>b(N(_,i),T),subscribe:t.subscribe,stiffness:l,damping:s,precision:r};return S}function ke(i){let e,t;return e=new Te({props:{title:i[0],$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){te(e.$$.fragment)},l(l){se(e.$$.fragment,l)},m(l,s){ie(e,l,s),t=!0},p(l,s){const r={};s&1&&(r.title=l[0]),s&524288&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function He(i){let e,t;return{c(){e=I("p"),t=Y("Image frame no content. (zero images provided)"),this.h()},l(l){e=M(l,"P",{class:!0});var s=w(e);t=$(s,"Image frame no content. (zero images provided)"),s.forEach(u),this.h()},h(){m(e,"class","svelte-10awphs")},m(l,s){D(l,e,s),p(e,t)},p:Ne,d(l){l&&u(e)}}}function Ee(i){let e,t;return e=new Te({props:{style:i[2]+"border:solid 2px var(--bg-alt2); width:min-content;",title:i[0],$$slots:{default:[qe]},$$scope:{ctx:i}}}),{c(){te(e.$$.fragment)},l(l){se(e.$$.fragment,l)},m(l,s){ie(e,l,s),t=!0},p(l,s){const r={};s&4&&(r.style=l[2]+"border:solid 2px var(--bg-alt2); width:min-content;"),s&1&&(r.title=l[0]),s&524666&&(r.$$scope={dirty:s,ctx:l}),e.$set(r)},i(l){t||(H(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function Ie(i){let e,t,l;return{c(){e=I("div"),t=I("img"),this.h()},l(s){e=M(s,"DIV",{class:!0});var r=w(e);t=M(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),r.forEach(u),this.h()},h(){Q(t.src,l=i[1][i[5]+1].src)||m(t,"src",l),m(t,"alt","item"),V(t,"width","calc("+i[3]+"px - 2rem)"),m(t,"class","svelte-10awphs"),m(e,"class","imageItem svelte-10awphs")},m(s,r){D(s,e,r),p(e,t)},p(s,r){r&34&&!Q(t.src,l=s[1][s[5]+1].src)&&m(t,"src",l),r&8&&V(t,"width","calc("+s[3]+"px - 2rem)")},d(s){s&&u(e)}}}function Me(i){let e,t,l;return{c(){e=I("div"),t=I("img"),this.h()},l(s){e=M(s,"DIV",{class:!0,style:!0});var r=w(e);t=M(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),r.forEach(u),this.h()},h(){Q(t.src,l=i[1][i[5]-1].src)||m(t,"src",l),m(t,"alt","item"),V(t,"width","calc("+i[3]+"px - 2rem)"),m(t,"class","svelte-10awphs"),m(e,"class","imageItem svelte-10awphs"),V(e,"border-right","2px solid var(--fg)"),V(e,"width",U(0,i[6],i[3])+"px")},m(s,r){D(s,e,r),p(e,t)},p(s,r){r&34&&!Q(t.src,l=s[1][s[5]-1].src)&&m(t,"src",l),r&8&&V(t,"width","calc("+s[3]+"px - 2rem)"),r&72&&V(e,"width",U(0,s[6],s[3])+"px")},d(s){s&&u(e)}}}function De(i){let e,t=i[5]+1+"",l,s,r=i[1].length+"",n;return{c(){e=I("div"),l=Y(t),s=Y("/"),n=Y(r),this.h()},l(a){e=M(a,"DIV",{id:!0,class:!0});var c=w(e);l=$(c,t),s=$(c,"/"),n=$(c,r),c.forEach(u),this.h()},h(){m(e,"id","counter"),m(e,"class","svelte-10awphs")},m(a,c){D(a,e,c),p(e,l),p(e,s),p(e,n)},p(a,c){c&32&&t!==(t=a[5]+1+"")&&ae(l,t),c&2&&r!==(r=a[1].length+"")&&ae(n,r)},d(a){a&&u(e)}}}function qe(i){let e,t,l,s,r,n,a,c,o,_,h,X,v,b,S,N,T,J,B,P,j,d,O,Z,W,R=i[1][i[5]].desc+"",x,A,re,me,y=i[5]!=i[1].length-1&&i[6]<0&&Ie(i),k=i[5]!=0&&i[6]>0&&Me(i),E=i[1].length>1&&De(i);return O=new Ae({props:{usePadding:!1,style:"margin-top: 0.7rem; margin-bottom:0.7rem;"}}),{c(){e=I("div"),t=z("svg"),l=z("defs"),s=z("symbol"),r=z("clipPath"),n=z("rect"),a=z("g"),c=z("rect"),o=z("path"),_=C(),h=I("div"),y&&y.c(),X=C(),v=I("div"),b=I("img"),T=C(),k&&k.c(),J=C(),E&&E.c(),B=C(),P=I("div"),j=I("div"),d=C(),te(O.$$.fragment),Z=C(),W=I("p"),x=Y(R),this.h()},l(f){e=M(f,"DIV",{class:!0});var g=w(e);t=F(g,"svg",{xmlns:!0,display:!0});var he=w(t);l=F(he,"defs",{});var ce=w(l);s=F(ce,"symbol",{fill:!0,viewBox:!0,id:!0});var oe=w(s);r=F(oe,"clipPath",{id:!0});var ue=w(r);n=F(ue,"rect",{width:!0,height:!0,fill:!0}),w(n).forEach(u),ue.forEach(u),a=F(oe,"g",{"clip-path":!0});var ne=w(a);c=F(ne,"rect",{x:!0,y:!0,width:!0,height:!0,transform:!0,stroke:!0,"stroke-width":!0}),w(c).forEach(u),o=F(ne,"path",{d:!0,stroke:!0,"stroke-width":!0}),w(o).forEach(u),ne.forEach(u),oe.forEach(u),ce.forEach(u),he.forEach(u),_=G(g),h=M(g,"DIV",{class:!0,style:!0});var K=w(h);y&&y.l(K),X=G(K),v=M(K,"DIV",{class:!0,style:!0});var de=w(v);b=M(de,"IMG",{src:!0,alt:!0,style:!0,class:!0}),de.forEach(u),T=G(K),k&&k.l(K),K.forEach(u),J=G(g),E&&E.l(g),B=G(g),P=M(g,"DIV",{id:!0,class:!0});var pe=w(P);j=M(pe,"DIV",{id:!0,class:!0}),w(j).forEach(u),pe.forEach(u),g.forEach(u),d=G(f),se(O.$$.fragment,f),Z=G(f),W=M(f,"P",{class:!0});var ge=w(W);x=$(ge,R),ge.forEach(u),this.h()},h(){m(n,"width","6"),m(n,"height","6"),m(n,"fill","white"),m(r,"id","clip0_413_3"),m(c,"x","1"),m(c,"y","3"),m(c,"width","1.5"),m(c,"height","1.5"),m(c,"transform","rotate(-45 1 3)"),m(c,"stroke","var(--fg-alt)"),m(c,"stroke-width","0.5"),m(o,"d","M3 1L5 3L3 5"),m(o,"stroke","var(--fg-alt)"),m(o,"stroke-width","0.5"),m(a,"clip-path","url(#clip0_413_3)"),m(s,"fill","none"),m(s,"viewBox","0 0 6 6"),m(s,"id","arrow"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"display","none"),Q(b.src,S=i[1][i[5]].src)||m(b,"src",S),m(b,"alt","item"),V(b,"width","calc("+i[3]+"px - 2rem)"),m(b,"class","svelte-10awphs"),m(v,"class","imageItem svelte-10awphs"),m(v,"style",N=i[6]<0&&i[5]!=i[1].length-1?`border-right: 2px solid var(--fg); width:${U(0,i[3]+i[6],i[3])}px;`:""),m(h,"class","imagewrapper svelte-10awphs"),V(h,"width",i[3]+"px"),V(h,"height",i[4]+"px"),m(j,"id","star"),m(j,"class","svelte-10awphs"),m(P,"id","starWrap"),m(P,"class","svelte-10awphs"),m(e,"class","imgHolder svelte-10awphs"),m(W,"class","svelte-10awphs")},m(f,g){D(f,e,g),p(e,t),p(t,l),p(l,s),p(s,r),p(r,n),p(s,a),p(a,c),p(a,o),p(e,_),p(e,h),y&&y.m(h,null),p(h,X),p(h,v),p(v,b),p(h,T),k&&k.m(h,null),p(e,J),E&&E.m(e,null),p(e,B),p(e,P),p(P,j),D(f,d,g),ie(O,f,g),D(f,Z,g),D(f,W,g),p(W,x),A=!0,re||(me=[q(h,"mousedown",i[9]),q(h,"mouseup",i[10]),q(h,"mouseleave",i[10]),q(h,"mousemove",i[11]),q(h,"touchstart",i[12]),q(h,"touchend",i[13]),q(h,"touchmove",i[14]),q(e,"mouseenter",i[15]),q(e,"mouseleave",i[16])],re=!0)},p(f,g){f[5]!=f[1].length-1&&f[6]<0?y?y.p(f,g):(y=Ie(f),y.c(),y.m(h,X)):y&&(y.d(1),y=null),(!A||g&34&&!Q(b.src,S=f[1][f[5]].src))&&m(b,"src",S),(!A||g&8)&&V(b,"width","calc("+f[3]+"px - 2rem)"),(!A||g&106&&N!==(N=f[6]<0&&f[5]!=f[1].length-1?`border-right: 2px solid var(--fg); width:${U(0,f[3]+f[6],f[3])}px;`:""))&&m(v,"style",N),f[5]!=0&&f[6]>0?k?k.p(f,g):(k=Me(f),k.c(),k.m(h,null)):k&&(k.d(1),k=null),(!A||g&8)&&V(h,"width",f[3]+"px"),(!A||g&16)&&V(h,"height",f[4]+"px"),f[1].length>1?E?E.p(f,g):(E=De(f),E.c(),E.m(e,B)):E&&(E.d(1),E=null),(!A||g&34)&&R!==(R=f[1][f[5]].desc+"")&&ae(x,R)},i(f){A||(H(O.$$.fragment,f),A=!0)},o(f){L(O.$$.fragment,f),A=!1},d(f){f&&u(e),y&&y.d(),k&&k.d(),E&&E.d(),f&&u(d),le(O,f),f&&u(Z),f&&u(W),re=!1,je(me)}}}function ze(i){let e,t,l,s=i[1].length===0&&ke(i),r=i[1].length>0&&Ee(i);return{c(){s&&s.c(),e=C(),r&&r.c(),t=we()},l(n){s&&s.l(n),e=G(n),r&&r.l(n),t=we()},m(n,a){s&&s.m(n,a),D(n,e,a),r&&r.m(n,a),D(n,t,a),l=!0},p(n,[a]){n[1].length===0?s?(s.p(n,a),a&2&&H(s,1)):(s=ke(n),s.c(),H(s,1),s.m(e.parentNode,e)):s&&(ve(),L(s,1,1,()=>{s=null}),be()),n[1].length>0?r?(r.p(n,a),a&2&&H(r,1)):(r=Ee(n),r.c(),H(r,1),r.m(t.parentNode,t)):r&&(ve(),L(r,1,1,()=>{r=null}),be())},i(n){l||(H(s),H(r),l=!0)},o(n){L(s),L(r),l=!1},d(n){s&&s.d(n),n&&u(e),r&&r.d(n),n&&u(t)}}}const Fe=.01;function U(i,e,t){return Math.min(Math.max(i,Math.abs(e)),t)}function Le(i,e,t){let l,{title:s=""}=e,{items:r=[]}=e,{containerStyle:n=""}=e,{width:a=200}=e,{height:c=200}=e,o=Ge(0,{stiffness:.15,damping:.6});Xe(i,o,d=>t(6,l=d));let _=1,h=!1,X=0,v=!1;function b(d){console.log("down"),h=!0,X=d.clientX-l}function S(d){console.log("up"),h=!1,Math.abs(l)>.5*a?ee(o,l=Math.sign(l)*a,l):ee(o,l=0,l)}function N(d){console.log("mov"),h&&(ee(o,l=d.clientX-X,l),console.log(d.clientX,X,U(0,a+l,a)))}const T=d=>{b(d.touches[0])},J=d=>{S(d.touches[0])},B=d=>{N(d.touches[0])},P=()=>{t(8,v=!0)},j=()=>{t(8,v=!1)};return i.$$set=d=>{"title"in d&&t(0,s=d.title),"items"in d&&t(1,r=d.items),"containerStyle"in d&&t(2,n=d.containerStyle),"width"in d&&t(3,a=d.width),"height"in d&&t(4,c=d.height)},i.$$.update=()=>{i.$$.dirty&104&&Math.abs(Math.abs(l)-a)<Fe&&(t(5,_=_-Math.sign(l)),t(7,o.stiffness=1,o),t(7,o.damping=1,o),ee(o,l=0,l),t(7,o.stiffness=.1,o),t(7,o.damping=.6,o))},[s,r,n,a,c,_,l,o,v,b,S,N,T,J,B,P,j]}class Je extends Pe{constructor(e){super(),Ve(this,e,Le,ze,Se,{title:0,items:1,containerStyle:2,width:3,height:4})}}function Oe(i){let e,t,l,s,r,n,a,c;return a=new Je({props:{width:200,maxHeight:400,title:"Test",items:[{desc:"now this is one big bread image. Truely one of the bread images of our time.",src:"bigBread.svg"},{desc:"This is my favorite language of all time.",src:"java-icon.svg"},{src:"heroku.svg",desc:"Memories from a better time."}]}}),{c(){e=I("h1"),t=Y("Nommers!"),l=C(),s=I("p"),r=Y(`Can't decide where to eat with your friends? Too many good options nearby but don't which one to go with? Simple\r
    solution: enforce democracy with Nommers! (and nom the process)`),n=C(),te(a.$$.fragment)},l(o){e=M(o,"H1",{});var _=w(e);t=$(_,"Nommers!"),_.forEach(u),l=G(o),s=M(o,"P",{});var h=w(s);r=$(h,`Can't decide where to eat with your friends? Too many good options nearby but don't which one to go with? Simple\r
    solution: enforce democracy with Nommers! (and nom the process)`),h.forEach(u),n=G(o),se(a.$$.fragment,o)},m(o,_){D(o,e,_),p(e,t),D(o,l,_),D(o,s,_),p(s,r),D(o,n,_),ie(a,o,_),c=!0},p:Ne,i(o){c||(H(a.$$.fragment,o),c=!0)},o(o){L(a.$$.fragment,o),c=!1},d(o){o&&u(e),o&&u(l),o&&u(s),o&&u(n),le(a,o)}}}class Qe extends Pe{constructor(e){super(),Ve(this,e,null,Oe,Se,{})}}export{Qe as default};