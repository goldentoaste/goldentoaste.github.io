import{S as x,i as ee,s as te,L as se,k as C,q as V,a as S,w as B,l as j,m as z,r as X,h as p,c as T,x as D,n as h,b as v,G as P,y as H,I as F,f as w,t as y,z as A,a1 as le,H as ne,o as re,X as oe,e as G,g as ae,d as ie,T as fe,a0 as K,K as Z,B as ue}from"../../../../chunks/index-23000ca5.js";import{P as ce,p as J}from"../../../../chunks/pageUpdates-29d33dfc.js";import{L as me,b as pe,B as _e}from"../../../../chunks/ListItem-161aeb4e.js";import{I as de}from"../../../../chunks/InfoBox-eda99878.js";import{D as O}from"../../../../chunks/Divider-5be254a5.js";function Q(n,t,o){const e=n.slice();return e[13]=t[o],e[15]=o,e}function $e(n){let t=n[13].text+"",o;return{c(){o=V(t)},l(e){o=X(e,t)},m(e,s){v(e,o,s)},p:ue,d(e){e&&p(o)}}}function ge(n){let t,o,e;function s(){return n[9](n[15])}return t=new _e({props:{selected:n[0]==n[15],selectExpands:!1,path:n[13].path,upper:!1,style:"width:100%; margin:0;",$$slots:{default:[$e]},$$scope:{ctx:n}}}),t.$on("click",s),{c(){B(t.$$.fragment),o=S()},l(u){D(t.$$.fragment,u),o=T(u)},m(u,l){H(t,u,l),v(u,o,l),e=!0},p(u,l){n=u;const r={};l&1&&(r.selected=n[0]==n[15]),l&65536&&(r.$$scope={dirty:l,ctx:n}),t.$set(r)},i(u){e||(w(t.$$.fragment,u),e=!0)},o(u){y(t.$$.fragment,u),e=!1},d(u){A(t,u),u&&p(o)}}}function U(n){let t,o;return t=new pe({props:{index:n[15],$$slots:{default:[ge]},$$scope:{ctx:n}}}),{c(){B(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){H(t,e,s),o=!0},p(e,s){const u={};s&65537&&(u.$$scope={dirty:s,ctx:e}),t.$set(u)},i(e){o||(w(t.$$.fragment,e),o=!0)},o(e){y(t.$$.fragment,e),o=!1},d(e){A(t,e)}}}function he(n){let t,o,e=n[6],s=[];for(let l=0;l<e.length;l+=1)s[l]=U(Q(n,e,l));const u=l=>y(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();t=G()},l(l){for(let r=0;r<s.length;r+=1)s[r].l(l);t=G()},m(l,r){for(let i=0;i<s.length;i+=1)s[i].m(l,r);v(l,t,r),o=!0},p(l,r){if(r&65){e=l[6];let i;for(i=0;i<e.length;i+=1){const c=Q(l,e,i);s[i]?(s[i].p(c,r),w(s[i],1)):(s[i]=U(c),s[i].c(),w(s[i],1),s[i].m(t.parentNode,t))}for(ae(),i=e.length;i<s.length;i+=1)u(i);ie()}},i(l){if(!o){for(let r=0;r<e.length;r+=1)w(s[r]);o=!0}},o(l){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)y(s[r]);o=!1},d(l){fe(s,l),l&&p(t)}}}function ve(n){let t,o,e,s,u,l,r,i,c,_,d;return t=new O({props:{usePadding:!1}}),i=new O({props:{usePadding:!1}}),{c(){B(t.$$.fragment),o=S(),e=C("iframe"),s=V("Content loading..."),r=S(),B(i.$$.fragment),this.h()},l(a){D(t.$$.fragment,a),o=T(a),e=j(a,"IFRAME",{loading:!0,title:!0,src:!0,scrolling:!0,class:!0});var m=z(e);s=X(m,"Content loading..."),m.forEach(p),r=T(a),D(i.$$.fragment,a),this.h()},h(){h(e,"loading","lazy"),h(e,"title",u=n[1].title),K(e.src,l=`./${n[1].page}`)||h(e,"src",l),h(e,"scrolling","no"),h(e,"class","svelte-1xykssk")},m(a,m){H(t,a,m),v(a,o,m),v(a,e,m),P(e,s),n[11](e),v(a,r,m),H(i,a,m),c=!0,_||(d=F(e,"load",n[7]),_=!0)},p(a,m){(!c||m&2&&u!==(u=a[1].title))&&h(e,"title",u),(!c||m&2&&!K(e.src,l=`./${a[1].page}`))&&h(e,"src",l)},i(a){c||(w(t.$$.fragment,a),w(i.$$.fragment,a),c=!0)},o(a){y(t.$$.fragment,a),y(i.$$.fragment,a),c=!1},d(a){A(t,a),a&&p(o),a&&p(e),n[11](null),a&&p(r),A(i,a),_=!1,d()}}}function we(n){let t=!1,o=()=>{t=!1},e,s,u,l,r,i,c,_,d,a,m,b,M,$,k,I,L,Y,R;return se(n[8]),a=new me({props:{$$slots:{default:[he]},$$scope:{ctx:n}}}),b=new O({}),I=new de({props:{title:n[1].title,hovering:!1,style:"width:100%; height:100%;",$$slots:{default:[ve]},$$scope:{ctx:n}}}),{c(){s=C("h1"),u=V("My Projects 🔨"),l=S(),r=C("p"),i=V("A list of notable projects I have worked on. More detailed descriptions and interactive demos coming soon!"),c=S(),_=C("div"),d=C("div"),B(a.$$.fragment),m=S(),B(b.$$.fragment),$=S(),k=C("div"),B(I.$$.fragment),this.h()},l(f){s=j(f,"H1",{});var g=z(s);u=X(g,"My Projects 🔨"),g.forEach(p),l=T(f),r=j(f,"P",{});var N=z(r);i=X(N,"A list of notable projects I have worked on. More detailed descriptions and interactive demos coming soon!"),N.forEach(p),c=T(f),_=j(f,"DIV",{class:!0});var E=z(_);d=j(E,"DIV",{class:!0,style:!0});var q=z(d);D(a.$$.fragment,q),m=T(q),D(b.$$.fragment,q),q.forEach(p),$=T(E),k=j(E,"DIV",{class:!0});var W=z(k);D(I.$$.fragment,W),W.forEach(p),E.forEach(p),this.h()},h(){h(d,"class","listHolder svelte-1xykssk"),h(d,"style",M=n[5]===-1?"":`transform:translate(0, max(${n[4]-n[5]}px + 6rem, 0px));`),h(k,"class","content svelte-1xykssk"),h(_,"class","root svelte-1xykssk")},m(f,g){v(f,s,g),P(s,u),v(f,l,g),v(f,r,g),P(r,i),v(f,c,g),v(f,_,g),P(_,d),H(a,d,null),P(d,m),H(b,d,null),n[10](d),P(_,$),P(_,k),H(I,k,null),L=!0,Y||(R=[F(window,"resize",n[7]),F(window,"scroll",()=>{t=!0,clearTimeout(e),e=setTimeout(o,100),n[8]()})],Y=!0)},p(f,[g]){g&16&&!t&&(t=!0,clearTimeout(e),scrollTo(window.pageXOffset,f[4]),e=setTimeout(o,100));const N={};g&65537&&(N.$$scope={dirty:g,ctx:f}),a.$set(N),(!L||g&48&&M!==(M=f[5]===-1?"":`transform:translate(0, max(${f[4]-f[5]}px + 6rem, 0px));`))&&h(d,"style",M);const E={};g&2&&(E.title=f[1].title),g&65542&&(E.$$scope={dirty:g,ctx:f}),I.$set(E)},i(f){L||(w(a.$$.fragment,f),w(b.$$.fragment,f),w(I.$$.fragment,f),L=!0)},o(f){y(a.$$.fragment,f),y(b.$$.fragment,f),y(I.$$.fragment,f),L=!1},d(f){f&&p(s),f&&p(l),f&&p(r),f&&p(c),f&&p(_),A(a),A(b),n[10](null),A(I),Y=!1,le(R)}}}function be(n,t,o){let e;ne(n,J,$=>o(12,e=$));let s=[{text:"🍔 Nommers",title:"Nommers : Svelte web app",path:"",page:"debug1"},{text:"Test page 1",title:"ASDASD",path:"",page:"debug2"},{text:"page 2",title:"XYZ",path:"",page:"debug1"},{text:"page 3",title:"ABC",path:"",page:"debug2"}],u=0,l,r,i,c=0,_=-1;function d(){var $,k;(($=r.contentWindow)==null?void 0:$.document.body.scrollHeight)+"px"!==r.style.height&&o(2,r.style.height=((k=r.contentWindow)==null?void 0:k.document.body.scrollHeight)+40+"px",r)}re(()=>{oe(J,e=ce.NeedTransition,e),o(5,_=i.getBoundingClientRect().top)});function a(){o(4,c=window.pageYOffset)}const m=$=>{o(0,u=$)};function b($){Z[$?"unshift":"push"](()=>{i=$,o(3,i)})}function M($){Z[$?"unshift":"push"](()=>{r=$,o(2,r)})}return n.$$.update=()=>{n.$$.dirty&1&&o(1,l=s[u])},[u,l,r,i,c,_,s,d,a,m,b,M]}class Se extends x{constructor(t){super(),ee(this,t,be,we,te,{})}}export{Se as default};
