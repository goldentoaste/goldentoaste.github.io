import{s as K,f as N,g as D,h as w,d as h,j as a,i as k,x as M,A as ue,y as S,B as Ge,p as Se,C as de,a as P,D as B,c as L,E as I,F as Ue,G as ke,z as ie,o as Ae,e as Z,H as he,k as j,I as Fe,l as je,m as He,n as ze,J as We,K as te,L as Ze,r as qe,u as Je,v as Ke,w as Qe}from"../chunks/scheduler.9e384549.js";import{S as Q,i as x,a as v,g as G,t as b,c as U,f as oe,b as z,d as R,m as Y,e as O,h as xe}from"../chunks/index.8915a013.js";import{g as Re}from"../chunks/globals.7f7f1b26.js";import{e as J}from"../chunks/each.e59479a4.js";import{p as Ye}from"../chunks/stores.dc4c3218.js";import{a as et,L as tt,B as Oe,b as lt,c as rt,g as st}from"../chunks/ListItem.b4fd7534.js";import{D as it}from"../chunks/Divider.8e7ea2bc.js";import{f as ae}from"../chunks/index.fd5b8905.js";import{P as A,p as le,a as re,n as se}from"../chunks/pageUpdates.6d984346.js";const nt=!0,Ht=Object.freeze(Object.defineProperty({__proto__:null,prerender:nt},Symbol.toStringTag,{value:"Module"}));function ot(i){let t,r,e,l;return{c(){t=N("div"),r=N("div"),this.h()},l(s){t=D(s,"DIV",{class:!0});var n=w(t);r=D(n,"DIV",{class:!0}),w(r).forEach(h),n.forEach(h),this.h()},h(){a(r,"class","icon svelte-1aighl9"),a(t,"class","root svelte-1aighl9")},m(s,n){k(s,t,n),M(t,r),i[3](r),e||(l=ue(t,"click",i[1]),e=!0)},p:S,i:S,o:S,d(s){s&&h(t),i[3](null),e=!1,l()}}}function at(i,t,r){let{toggled:e=!1}=t,l,s=Ge();function n(){r(2,e=!e),s("toggle",{val:e})}function f(o){Se[o?"unshift":"push"](()=>{l=o,r(0,l)})}return i.$$set=o=>{"toggled"in o&&r(2,e=o.toggled)},i.$$.update=()=>{i.$$.dirty&5&&l&&(e?l.classList.add("toggled"):l.classList.remove("toggled"))},[l,n,e,f]}class ft extends Q{constructor(t){super(),x(this,t,at,ot,K,{toggled:2})}}const{window:Xe}=Re;function we(i,t,r){const e=i.slice();return e[12]=t[r],e[14]=r,e}function ye(i,t,r){const e=i.slice();return e[12]=t[r],e[14]=r,e}function Ee(i){let t,r,e,l,s;return{c(){t=N("div"),this.h()},l(n){t=D(n,"DIV",{id:!0,class:!0}),w(t).forEach(h),this.h()},h(){a(t,"id","cover"),a(t,"class","svelte-1bx90td")},m(n,f){k(n,t,f),e=!0,l||(s=ue(t,"click",i[6]),l=!0)},p:S,i(n){e||(de(()=>{e&&(r||(r=oe(t,ae,{duration:200},!0)),r.run(1))}),e=!0)},o(n){r||(r=oe(t,ae,{duration:200},!1)),r.run(0),e=!1},d(n){n&&h(t),n&&r&&r.end(),l=!1,s()}}}function ct(i){let t;return{c(){t=N("div"),this.h()},l(r){t=D(r,"DIV",{style:!0}),w(t).forEach(h),this.h()},h(){j(t,"content","''"),j(t,"height","4rem")},m(r,e){k(r,t,e)},p:S,i:S,o:S,d(r){r&&h(t)}}}function ut(i){let t,r,e,l=J(i[0]),s=[];for(let o=0;o<l.length;o+=1)s[o]=Me(ye(i,l,o));const n=o=>b(s[o],1,1,()=>{s[o]=null});let f=i[3]&&Te(i);return{c(){for(let o=0;o<s.length;o+=1)s[o].c();t=P(),f&&f.c(),r=Z()},l(o){for(let _=0;_<s.length;_+=1)s[_].l(o);t=L(o),f&&f.l(o),r=Z()},m(o,_){for(let g=0;g<s.length;g+=1)s[g]&&s[g].m(o,_);k(o,t,_),f&&f.m(o,_),k(o,r,_),e=!0},p(o,_){if(_&29){l=J(o[0]);let g;for(g=0;g<l.length;g+=1){const m=ye(o,l,g);s[g]?(s[g].p(m,_),v(s[g],1)):(s[g]=Me(m),s[g].c(),v(s[g],1),s[g].m(t.parentNode,t))}for(G(),g=l.length;g<s.length;g+=1)n(g);U()}o[3]?f?(f.p(o,_),_&8&&v(f,1)):(f=Te(o),f.c(),v(f,1),f.m(r.parentNode,r)):f&&(G(),b(f,1,1,()=>{f=null}),U())},i(o){if(!e){for(let _=0;_<l.length;_+=1)v(s[_]);v(f),e=!0}},o(o){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)b(s[_]);b(f),e=!1},d(o){o&&(h(t),h(r)),he(s,o),f&&f.d(o)}}}function Ce(i){let t,r;return t=new Oe({props:{selected:i[2][i[14]]&&!i[4],path:i[12].iconPath,href:i[12].dest,$$slots:{default:[dt]},$$scope:{ctx:i}}}),t.$on("click",i[7]),{c(){z(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,l){Y(t,e,l),r=!0},p(e,l){const s={};l&20&&(s.selected=e[2][e[14]]&&!e[4]),l&1&&(s.path=e[12].iconPath),l&1&&(s.href=e[12].dest),l&65537&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function dt(i){let t=i[12].name+"",r;return{c(){r=je(t)},l(e){r=He(e,t)},m(e,l){k(e,r,l)},p(e,l){l&1&&t!==(t=e[12].name+"")&&ze(r,t)},d(e){e&&h(r)}}}function Me(i){let t,r,e=(!i[3]||i[2][i[14]])&&Ce(i);return{c(){e&&e.c(),t=Z()},l(l){e&&e.l(l),t=Z()},m(l,s){e&&e.m(l,s),k(l,t,s),r=!0},p(l,s){!l[3]||l[2][l[14]]?e?(e.p(l,s),s&12&&v(e,1)):(e=Ce(l),e.c(),v(e,1),e.m(t.parentNode,t)):e&&(G(),b(e,1,1,()=>{e=null}),U())},i(l){r||(v(e),r=!0)},o(l){b(e),r=!1},d(l){l&&h(t),e&&e.d(l)}}}function Te(i){let t,r,e;function l(n){i[8](n)}let s={};return i[4]!==void 0&&(s.toggled=i[4]),t=new ft({props:s}),Se.push(()=>xe(t,"toggled",l)),{c(){z(t.$$.fragment)},l(n){R(t.$$.fragment,n)},m(n,f){Y(t,n,f),e=!0},p(n,f){const o={};!r&&f&16&&(r=!0,o.toggled=n[4],Fe(()=>r=!1)),t.$set(o)},i(n){e||(v(t.$$.fragment,n),e=!0)},o(n){b(t.$$.fragment,n),e=!1},d(n){O(t,n)}}}function Ne(i){let t,r,e,l;return t=new it({}),e=new tt({props:{style:"margin:1rem;margin-left:2rem;",$$slots:{default:[mt]},$$scope:{ctx:i}}}),{c(){z(t.$$.fragment),r=P(),z(e.$$.fragment)},l(s){R(t.$$.fragment,s),r=L(s),R(e.$$.fragment,s)},m(s,n){Y(t,s,n),k(s,r,n),Y(e,s,n),l=!0},p(s,n){const f={};n&65557&&(f.$$scope={dirty:n,ctx:s}),e.$set(f)},i(s){l||(v(t.$$.fragment,s),v(e.$$.fragment,s),l=!0)},o(s){b(t.$$.fragment,s),b(e.$$.fragment,s),l=!1},d(s){s&&h(r),O(t,s),O(e,s)}}}function De(i){let t,r;return t=new lt({props:{index:i[14],$$slots:{default:[_t]},$$scope:{ctx:i}}}),{c(){z(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,l){Y(t,e,l),r=!0},p(e,l){const s={};l&65553&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){b(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function ht(i){let t=i[12].name+"",r;return{c(){r=je(t)},l(e){r=He(e,t)},m(e,l){k(e,r,l)},p(e,l){l&1&&t!==(t=e[12].name+"")&&ze(r,t)},d(e){e&&h(r)}}}function _t(i){let t,r,e;return t=new Oe({props:{href:i[12].dest,path:i[12].iconPath,style:"margin:0;",$$slots:{default:[ht]},$$scope:{ctx:i}}}),t.$on("click",i[9]),{c(){z(t.$$.fragment),r=P()},l(l){R(t.$$.fragment,l),r=L(l)},m(l,s){Y(t,l,s),k(l,r,s),e=!0},p(l,s){const n={};s&1&&(n.href=l[12].dest),s&1&&(n.path=l[12].iconPath),s&65537&&(n.$$scope={dirty:s,ctx:l}),t.$set(n)},i(l){e||(v(t.$$.fragment,l),e=!0)},o(l){b(t.$$.fragment,l),e=!1},d(l){l&&h(r),O(t,l)}}}function Ve(i){let t,r,e=!i[2][i[14]]&&De(i);return{c(){e&&e.c(),t=Z()},l(l){e&&e.l(l),t=Z()},m(l,s){e&&e.m(l,s),k(l,t,s),r=!0},p(l,s){l[2][l[14]]?e&&(G(),b(e,1,1,()=>{e=null}),U()):e?(e.p(l,s),s&4&&v(e,1)):(e=De(l),e.c(),v(e,1),e.m(t.parentNode,t))},i(l){r||(v(e),r=!0)},o(l){b(e),r=!1},d(l){l&&h(t),e&&e.d(l)}}}function mt(i){let t,r,e=J(i[0]),l=[];for(let n=0;n<e.length;n+=1)l[n]=Ve(we(i,e,n));const s=n=>b(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=Z()},l(n){for(let f=0;f<l.length;f+=1)l[f].l(n);t=Z()},m(n,f){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(n,f);k(n,t,f),r=!0},p(n,f){if(f&21){e=J(n[0]);let o;for(o=0;o<e.length;o+=1){const _=we(n,e,o);l[o]?(l[o].p(_,f),v(l[o],1)):(l[o]=Ve(_),l[o].c(),v(l[o],1),l[o].m(t.parentNode,t))}for(G(),o=e.length;o<l.length;o+=1)s(o);U()}},i(n){if(!r){for(let f=0;f<e.length;f+=1)v(l[f]);r=!0}},o(n){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)b(l[f]);r=!1},d(n){n&&h(t),he(l,n)}}}function gt(i){let t,r,e,l,s,n,f,o,_,g,m,d,c,u,p,T,H,V,ne,X,_e='<nav id="botNav" class="svelte-1bx90td"></nav> <svg id="bottom" width="100%" class="svelte-1bx90td"><use xlink:href="#rect"></use></svg>',q,fe,me;de(i[5]);let y=i[4]&&Ee(i);const ge=[ut,ct],F=[];function pe($,C){return $[1]!==void 0?0:1}s=pe(i),n=F[s]=ge[s](i);let E=i[4]&&Ne(i);return{c(){y&&y.c(),t=P(),r=N("div"),e=N("div"),l=N("nav"),n.c(),f=P(),o=N("div"),E&&E.c(),g=P(),m=B("svg"),d=B("defs"),c=B("pattern"),u=B("rect"),p=B("circle"),T=B("circle"),H=B("circle"),V=B("rect"),ne=P(),X=N("div"),X.innerHTML=_e,this.h()},l($){y&&y.l($),t=L($),r=D($,"DIV",{id:!0,class:!0});var C=w(r);e=D(C,"DIV",{id:!0,class:!0});var W=w(e);l=D(W,"NAV",{id:!0,class:!0});var ve=w(l);n.l(ve),ve.forEach(h),f=L(W),o=D(W,"DIV",{id:!0,style:!0,class:!0});var $e=w(o);E&&E.l($e),$e.forEach(h),W.forEach(h),g=L(C),m=I(C,"svg",{id:!0,width:!0,height:!0,fill:!0,xmlns:!0,class:!0});var ce=w(m);d=I(ce,"defs",{});var be=w(d);c=I(be,"pattern",{id:!0,x:!0,y:!0,width:!0,height:!0,patternUnits:!0,patternTransform:!0});var ee=w(c);u=I(ee,"rect",{width:!0,height:!0,fill:!0}),w(u).forEach(h),p=I(ee,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),w(p).forEach(h),T=I(ee,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),w(T).forEach(h),H=I(ee,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),w(H).forEach(h),ee.forEach(h),be.forEach(h),V=I(ce,"rect",{id:!0,x:!0,y:!0,width:!0,height:!0,fill:!0}),w(V).forEach(h),ce.forEach(h),C.forEach(h),ne=L($),X=D($,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Ue(X)!=="svelte-i7ywo2"&&(X.innerHTML=_e),this.h()},h(){a(l,"id","navBar"),a(l,"class","svelte-1bx90td"),ke(l,"mobile",i[3]),a(o,"id","optionContianer"),a(o,"style",_=i[4]?"max-height:350px;":"max-height:0;"),a(o,"class","svelte-1bx90td"),a(e,"id","top"),a(e,"class","svelte-1bx90td"),a(u,"width","8"),a(u,"height","4"),a(u,"fill","currentColor"),a(p,"cx","22"),a(p,"cy","8"),a(p,"r","2"),a(p,"fill","currentColor"),a(T,"cx","34"),a(T,"cy","8"),a(T,"r","2"),a(T,"fill","currentColor"),a(H,"cx","28"),a(H,"cy","14"),a(H,"r","2"),a(H,"fill","currentColor"),a(c,"id","border"),a(c,"x","0"),a(c,"y","0"),a(c,"width","48"),a(c,"height","16"),a(c,"patternUnits","userSpaceOnUse"),a(c,"patternTransform","scale(0.7)"),a(V,"id","rect"),a(V,"x","0"),a(V,"y","0"),a(V,"width","100%"),a(V,"height","11"),a(V,"fill","url(#border)"),a(m,"id","top"),a(m,"width","100%"),a(m,"height","16"),a(m,"fill","none"),a(m,"xmlns","http://www.w3.org/2000/svg"),a(m,"class","svelte-1bx90td"),a(r,"id","root"),a(r,"class","svelte-1bx90td"),a(X,"id","botBar"),a(X,"class","svelte-1bx90td")},m($,C){y&&y.m($,C),k($,t,C),k($,r,C),M(r,e),M(e,l),F[s].m(l,null),M(e,f),M(e,o),E&&E.m(o,null),M(r,g),M(r,m),M(m,d),M(d,c),M(c,u),M(c,p),M(c,T),M(c,H),M(m,V),k($,ne,C),k($,X,C),q=!0,fe||(me=ue(Xe,"resize",i[5]),fe=!0)},p($,[C]){$[4]?y?(y.p($,C),C&16&&v(y,1)):(y=Ee($),y.c(),v(y,1),y.m(t.parentNode,t)):y&&(G(),b(y,1,1,()=>{y=null}),U());let W=s;s=pe($),s===W?F[s].p($,C):(G(),b(F[W],1,1,()=>{F[W]=null}),U(),n=F[s],n?n.p($,C):(n=F[s]=ge[s]($),n.c()),v(n,1),n.m(l,null)),(!q||C&8)&&ke(l,"mobile",$[3]),$[4]?E?(E.p($,C),C&16&&v(E,1)):(E=Ne($),E.c(),v(E,1),E.m(o,null)):E&&(G(),b(E,1,1,()=>{E=null}),U()),(!q||C&16&&_!==(_=$[4]?"max-height:350px;":"max-height:0;"))&&a(o,"style",_)},i($){q||(v(y),v(n),v(E),q=!0)},o($){b(y),b(n),b(E),q=!1},d($){$&&(h(t),h(r),h(ne),h(X)),y&&y.d($),F[s].d(),E&&E.d(),fe=!1,me()}}}function pt(i,t,r){let e;ie(i,Ye,p=>r(10,e=p));let{items:l=[]}=t,s=[],n,f=!1,o=!1;function _(){l.forEach((p,T)=>{r(2,s[T]=e.url.pathname===p.dest,s)})}et(_),Ae(()=>{r(2,s=Array(l.length).fill(!1))});function g(){r(1,n=Xe.innerWidth)}const m=()=>{r(4,o=!1)},d=()=>{window.scrollTo({top:0,behavior:"smooth"})};function c(p){o=p,r(4,o)}const u=()=>{r(4,o=!1)};return i.$$set=p=>{"items"in p&&r(0,l=p.items)},i.$$.update=()=>{i.$$.dirty&2&&r(3,f=n<1e3)},[l,n,s,f,o,g,m,d,c,u]}class vt extends Q{constructor(t){super(),x(this,t,pt,gt,K,{items:0})}}function $t(i){let t;return{c(){t=N("div"),this.h()},l(r){t=D(r,"DIV",{id:!0,class:!0}),w(t).forEach(h),this.h()},h(){a(t,"id","shadow"),a(t,"class","svelte-jnnaum")},m(r,e){k(r,t,e)},p:S,i:S,o:S,d(r){r&&h(t)}}}class bt extends Q{constructor(t){super(),x(this,t,null,$t,K,{})}}function kt(i){let t;return{c(){t=N("div"),this.h()},l(r){t=D(r,"DIV",{id:!0,class:!0}),w(t).forEach(h),this.h()},h(){a(t,"id","grid"),a(t,"class","svelte-1jjmyr5")},m(r,e){k(r,t,e)},p:S,i:S,o:S,d(r){r&&h(t)}}}class wt extends Q{constructor(t){super(),x(this,t,null,kt,K,{})}}const yt=(i,t,r)=>{let e;const l=()=>{const s=()=>{i(),l()},n=Math.floor(Math.random()*(r-t+1))+t;e=setTimeout(s,n)};return l(),{clear(){clearTimeout(e)}}};function Be(i,t,r){const e=i.slice();return e[2]=t[r],e}function Ie(i){let t,r;return{c(){t=B("svg"),r=B("path"),this.h()},l(e){t=I(e,"svg",{xmlns:!0,preserveAspectRatio:!0,style:!0,viewBox:!0,class:!0});var l=w(t);r=I(l,"path",{d:!0,stroke:!0,"stroke-width":!0}),w(r).forEach(h),l.forEach(h),this.h()},h(){a(r,"d","M 2 2 L 1400 1000"),a(r,"stroke","var(--fg)"),a(r,"stroke-width","1"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"preserveAspectRatio","xMidYMin meet"),j(t,"transition","all ease "+(10+.6*i[2])+"s"),j(t,"--baseX",i[2]*5*Math.random()+i[1]+"px"),j(t,"--baseY",i[2]*50+25*Math.random()+i[1]+"px"),a(t,"viewBox","0 0 1920 1080 "),a(t,"class","svelte-ziga44")},m(e,l){k(e,t,l),M(t,r)},p(e,l){l&2&&j(t,"--baseX",e[2]*5*Math.random()+e[1]+"px"),l&2&&j(t,"--baseY",e[2]*50+25*Math.random()+e[1]+"px")},d(e){e&&h(t)}}}function Et(i){let t,r,e,l,s,n,f,o,_=J([...Array(4).keys()]),g=[];for(let m=0;m<_.length;m+=1)g[m]=Ie(Be(i,_,m));return{c(){t=N("div");for(let m=0;m<g.length;m+=1)g[m].c();r=P(),e=B("svg"),l=B("circle"),s=B("circle"),this.h()},l(m){t=D(m,"DIV",{class:!0,style:!0});var d=w(t);for(let u=0;u<g.length;u+=1)g[u].l(d);r=L(d),e=I(d,"svg",{xmlns:!0,preserveAspectRatio:!0,style:!0,viewBox:!0,class:!0});var c=w(e);l=I(c,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,stroke:!0}),w(l).forEach(h),s=I(c,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,stroke:!0}),w(s).forEach(h),c.forEach(h),d.forEach(h),this.h()},h(){a(l,"cx","200px"),a(l,"cy","200px"),a(l,"r","400"),a(l,"fill","none"),a(l,"stroke-width","1"),a(l,"stroke","var(--fg)"),a(s,"cx","200px"),a(s,"cy","200px"),a(s,"r","410"),a(s,"fill","none"),a(s,"stroke-width","1"),a(s,"stroke","var(--fg)"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"preserveAspectRatio","xMidYMin meet"),j(e,"transition","all ease 10s"),j(e,"--baseX",Math.random()*25+i[1]+"px"),j(e,"--baseY",Math.random()*30+i[1]+"px"),a(e,"viewBox","0 0 1920 1080 "),a(e,"class","svelte-ziga44"),a(t,"class","parent svelte-ziga44"),a(t,"style",n=i[0]?"transform: scale(-1, -1);bottom:0;right:0;":"")},m(m,d){k(m,t,d);for(let c=0;c<g.length;c+=1)g[c]&&g[c].m(t,null);M(t,r),M(t,e),M(e,l),M(e,s),o=!0},p(m,[d]){if(d&2){_=J([...Array(4).keys()]);let c;for(c=0;c<_.length;c+=1){const u=Be(m,_,c);g[c]?g[c].p(u,d):(g[c]=Ie(u),g[c].c(),g[c].m(t,r))}for(;c<g.length;c+=1)g[c].d(1);g.length=_.length}(!o||d&2)&&j(e,"--baseX",Math.random()*25+m[1]+"px"),(!o||d&2)&&j(e,"--baseY",Math.random()*30+m[1]+"px"),(!o||d&1&&n!==(n=m[0]?"transform: scale(-1, -1);bottom:0;right:0;":""))&&a(t,"style",n)},i(m){o||(de(()=>{o&&(f||(f=oe(t,ae,{duration:300},!0)),f.run(1))}),o=!0)},o(m){f||(f=oe(t,ae,{duration:300},!1)),f.run(0),o=!1},d(m){m&&h(t),he(g,m),m&&f&&f.end()}}}function Ct(i,t,r){let e=0,{flip:l=!1}=t;return yt(()=>{r(1,e=Math.random())},2e3,9e3),i.$$set=s=>{"flip"in s&&r(0,l=s.flip)},[l,e]}class Mt extends Q{constructor(t){super(),x(this,t,Ct,Et,K,{flip:0})}}const{document:Pe}=Re;function Le(i){let t;const r=i[4].default,e=qe(r,i,i[3],null);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,s){e&&e.m(l,s),t=!0},p(l,s){e&&e.p&&(!t||s&8)&&Je(e,r,l,l[3],t?Qe(r,l[3],s,null):Ke(l[3]),null)},i(l){t||(v(e,l),t=!0)},o(l){b(e,l),t=!1},d(l){e&&e.d(l)}}}function Tt(i){let t,r,e,l,s,n,f,o,_,g,m,d;e=new Mt({}),s=new vt({props:{items:i[2]}});let c=(i[1]===A.NeedTransition||i[1]===A.NoTransition)&&Le(i);return _=new wt({}),m=new bt({}),{c(){t=N("meta"),r=P(),z(e.$$.fragment),l=P(),z(s.$$.fragment),n=P(),f=N("div"),c&&c.c(),o=P(),z(_.$$.fragment),g=P(),z(m.$$.fragment),this.h()},l(u){const p=We("svelte-1cgm8hy",Pe.head);t=D(p,"META",{name:!0,content:!0}),p.forEach(h),r=L(u),R(e.$$.fragment,u),l=L(u),R(s.$$.fragment,u),n=L(u),f=D(u,"DIV",{class:!0});var T=w(f);c&&c.l(T),T.forEach(h),o=L(u),R(_.$$.fragment,u),g=L(u),R(m.$$.fragment,u),this.h()},h(){a(t,"name","theme-color"),a(t,"content",i[0]),a(f,"class","rootLayoutParent svelte-1od30yr")},m(u,p){M(Pe.head,t),k(u,r,p),Y(e,u,p),k(u,l,p),Y(s,u,p),k(u,n,p),k(u,f,p),c&&c.m(f,null),k(u,o,p),Y(_,u,p),k(u,g,p),Y(m,u,p),d=!0},p(u,[p]){(!d||p&1)&&a(t,"content",u[0]),u[1]===A.NeedTransition||u[1]===A.NoTransition?c?(c.p(u,p),p&2&&v(c,1)):(c=Le(u),c.c(),v(c,1),c.m(f,null)):c&&(G(),b(c,1,1,()=>{c=null}),U())},i(u){d||(v(e.$$.fragment,u),v(s.$$.fragment,u),v(c),v(_.$$.fragment,u),v(m.$$.fragment,u),d=!0)},o(u){b(e.$$.fragment,u),b(s.$$.fragment,u),b(c),b(_.$$.fragment,u),b(m.$$.fragment,u),d=!1},d(u){u&&(h(r),h(l),h(n),h(f),h(o),h(g)),h(t),O(e,u),O(s,u),c&&c.d(),O(_,u),O(m,u)}}}function Nt(i,t,r){let e,l,s,n;ie(i,se,d=>r(5,e=d)),ie(i,re,d=>r(1,l=d)),ie(i,Ye,d=>r(6,s=d)),ie(i,le,d=>r(7,n=d));let{$$slots:f={},$$scope:o}=t,_=`M  0.1875,0.9000 C  0.1658,0.9000 0.1479,0.8929 0.1337,0.8787 C  0.1196,0.8646 0.1125,0.8467 0.1125,0.8250 V  0.3663 C  0.0800,0.3479 0.0531,0.3244 0.0319,0.2956 C  0.0106,0.2669 0.0000,0.2300 0.0000,0.1850 C  0.0000,0.1325 0.0177,0.0885 0.0531,0.0531 C  0.0885,0.0177 0.1325,0.0000 0.1850,0.0000 H  0.8150,0.0000 C  0.8675,0.0000 0.9115,0.0177 0.9469,0.0531 C  0.9823,0.0885 1.0000,0.1325 1.0000,0.1850 C  1.0000,0.2300 0.9894,0.2669 0.9681,0.2956 C  0.9469,0.3244 0.9204,0.3479 0.8887,0.3663 V  0.8250 C  0.8887,0.8467 0.8817,0.8646 0.8675,0.8787 C  0.8533,0.8929 0.8354,0.9000 0.8137,0.9000 H  0.1875,0.9000 Z  M  0.1875,0.8250 H  0.8137,0.8250 V  0.3312 L  0.8575,0.3038 C  0.8767,0.2921 0.8927,0.2767 0.9056,0.2575 C  0.9185,0.2383 0.9250,0.2142 0.9250,0.1850 C  0.9250,0.1542 0.9144,0.1281 0.8931,0.1069 C  0.8719,0.0856 0.8458,0.0750 0.8150,0.0750 H  0.1850,0.0750 C  0.1542,0.0750 0.1281,0.0856 0.1069,0.1069 C  0.0856,0.1281 0.0750,0.1542 0.0750,0.1850 C  0.0750,0.2150 0.0813,0.2394 0.0938,0.2581 C  0.1062,0.2769 0.1229,0.2925 0.1437,0.3050 L  
0.1875,0.3312 V  0.8250 Z`,g=[{name:"Home",dest:"/",iconPath:_},{name:"Projects",dest:"/projects",iconPath:_},{name:"Resume",dest:"/resume",iconPath:_},{name:"Experiences",dest:"/experiences",iconPath:_},{name:"Others",dest:"/other",iconPath:_}],m="#32302f";return Ae(async()=>{r(0,m=document.body.classList.contains("lightmode")?"#a89984":"#282828")}),rt(d=>{var c,u,p,T,H,V;if(console.log(d,n),d.type==="popstate"&&n!==0){te(se,e="",e),te(le,n=0,n),console.log("canceling");return}if(((c=d.to)==null?void 0:c.url.origin)!==s.url.origin||l===A.NoTransition||d.to===null||((u=d.to)==null?void 0:u.route.id)===s.route.id){te(se,e="",e),te(le,n=0,n),console.log("not interfeir",((p=d.to)==null?void 0:p.url.origin)!==s.url.origin,l===A.NoTransition,d.to===null,((T=d.to)==null?void 0:T.route.id)===s.route.id);return}l===A.NeedTransition&&te(re,l=A.Transitioning,l),l===A.Transitioning&&(d.type==="popstate"&&d.delta?(se.set("popstate"),le.set(d.delta)):se.set(((V=(H=d.to)==null?void 0:H.route.id)==null?void 0:V.replace(/\/?\(\w+\)/g,""))||"/"),d.cancel(),console.log("nav canceled"))}),re.subscribe(d=>{d===A.ReadyToNav&&e&&(console.log(document.referrer),e==="popstate"?(console.log("simulating history.go"),re.set(A.NoTransition),window.history.go(Ze(le))):st(e).then(c=>{console.log("transition ends, goto"),re.set(A.NoTransition)}))}),i.$$set=d=>{"$$scope"in d&&r(3,o=d.$$scope)},[m,l,g,o,f]}class zt extends Q{constructor(t){super(),x(this,t,Nt,Tt,K,{})}}export{zt as component,Ht as universal};