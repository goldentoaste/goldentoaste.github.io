import{S as pe,i as _e,s as K,L as Q,k as S,q as L,a as D,y as v,l as z,m as A,r as W,h as p,c as M,z as w,n as h,b as g,G as C,A as b,J as R,v as J,d,f as O,g as _,B as k,a0 as ve,I as we,o as be,X as ke,H as x,w as X,U as ye,V as Ie,e as G,T as de,Y as re,Z as je,u as me,R as se}from"../chunks/index.7e0517ef.js";import{p as oe,P as qe,f as Pe}from"../chunks/pageUpdates.a43efd9f.js";import{L as $e,b as he,B as ge}from"../chunks/ListItem.7b570b99.js";import{I as Ee}from"../chunks/InfoBox.31008984.js";import{D as Y}from"../chunks/Divider.e3cd20ab.js";import{D as De}from"../chunks/DropDown.02636e4d.js";import{f as Z}from"../chunks/index.1e99727b.js";function ie(i,e,o){const n=i.slice();return n[15]=e[o],n[17]=o,n}function ae(i,e,o){const n=i.slice();return n[15]=e[o],n[17]=o,n}function Me(i){let e,o,n;function t(r){i[11](r)}let a={title:i[0][i[1]].text,$$slots:{default:[Be]},$$scope:{ctx:i}};return i[6]!==void 0&&(a.expanded=i[6]),e=new De({props:a}),X.push(()=>ye(e,"expanded",t)),{c(){v(e.$$.fragment)},l(r){w(e.$$.fragment,r)},m(r,s){b(e,r,s),n=!0},p(r,s){const l={};s&3&&(l.title=r[0][r[1]].text),s&524355&&(l.$$scope={dirty:s,ctx:r}),!o&&s&64&&(o=!0,l.expanded=r[6],Ie(()=>o=!1)),e.$set(l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){d(e.$$.fragment,r),n=!1},d(r){k(e,r)}}}function Ce(i){let e,o;return e=new $e({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,t){b(e,n,t),o=!0},p(n,t){const a={};t&524291&&(a.$$scope={dirty:t,ctx:n}),e.$set(a)},i(n){o||(_(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){k(e,n)}}}function Se(i){let e=i[15].text+"",o;return{c(){o=L(e)},l(n){o=W(n,e)},m(n,t){g(n,o,t)},p(n,t){t&1&&e!==(e=n[15].text+"")&&me(o,e)},d(n){n&&p(o)}}}function ze(i){let e,o;function n(){return i[10](i[17])}return e=new ge({props:{selected:i[1]==i[17],selectExpands:!1,path:i[15].path,upper:!1,style:"width:100%; margin:0;",$$slots:{default:[Se]},$$scope:{ctx:i}}}),e.$on("click",n),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){b(e,t,a),o=!0},p(t,a){i=t;const r={};a&2&&(r.selected=i[1]==i[17]),a&1&&(r.path=i[15].path),a&524289&&(r.$$scope={dirty:a,ctx:i}),e.$set(r)},i(t){o||(_(e.$$.fragment,t),o=!0)},o(t){d(e.$$.fragment,t),o=!1},d(t){k(e,t)}}}function fe(i){let e,o,n;return e=new he({props:{index:i[17],style:"width:100%;",$$slots:{default:[ze]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment),o=D()},l(t){w(e.$$.fragment,t),o=M(t)},m(t,a){b(e,t,a),g(t,o,a),n=!0},p(t,a){const r={};a&524355&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){k(e,t),t&&p(o)}}}function Ae(i){let e,o,n=i[0],t=[];for(let r=0;r<n.length;r+=1)t[r]=fe(ie(i,n,r));const a=r=>d(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=G()},l(r){for(let s=0;s<t.length;s+=1)t[s].l(r);e=G()},m(r,s){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(r,s);g(r,e,s),o=!0},p(r,s){if(s&67){n=r[0];let l;for(l=0;l<n.length;l+=1){const f=ie(r,n,l);t[l]?(t[l].p(f,s),_(t[l],1)):(t[l]=fe(f),t[l].c(),_(t[l],1),t[l].m(e.parentNode,e))}for(J(),l=n.length;l<t.length;l+=1)a(l);O()}},i(r){if(!o){for(let s=0;s<n.length;s+=1)_(t[s]);o=!0}},o(r){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)d(t[s]);o=!1},d(r){de(t,r),r&&p(e)}}}function Be(i){let e,o;return e=new $e({props:{style:"padding-right:2rem;",$$slots:{default:[Ae]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,t){b(e,n,t),o=!0},p(n,t){const a={};t&524355&&(a.$$scope={dirty:t,ctx:n}),e.$set(a)},i(n){o||(_(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){k(e,n)}}}function He(i){let e=i[15].text+"",o;return{c(){o=L(e)},l(n){o=W(n,e)},m(n,t){g(n,o,t)},p(n,t){t&1&&e!==(e=n[15].text+"")&&me(o,e)},d(n){n&&p(o)}}}function Ne(i){let e,o,n;function t(){return i[9](i[17])}return e=new ge({props:{selected:i[1]==i[17],selectExpands:!1,path:i[15].path,upper:!1,style:"width:100%; margin:0;",$$slots:{default:[He]},$$scope:{ctx:i}}}),e.$on("click",t),{c(){v(e.$$.fragment),o=D()},l(a){w(e.$$.fragment,a),o=M(a)},m(a,r){b(e,a,r),g(a,o,r),n=!0},p(a,r){i=a;const s={};r&2&&(s.selected=i[1]==i[17]),r&1&&(s.path=i[15].path),r&524289&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(a){n||(_(e.$$.fragment,a),n=!0)},o(a){d(e.$$.fragment,a),n=!1},d(a){k(e,a),a&&p(o)}}}function ue(i){let e,o;return e=new he({props:{index:i[17],style:"width:100%;",$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,t){b(e,n,t),o=!0},p(n,t){const a={};t&524291&&(a.$$scope={dirty:t,ctx:n}),e.$set(a)},i(n){o||(_(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){k(e,n)}}}function Te(i){let e,o,n=i[0],t=[];for(let r=0;r<n.length;r+=1)t[r]=ue(ae(i,n,r));const a=r=>d(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=G()},l(r){for(let s=0;s<t.length;s+=1)t[s].l(r);e=G()},m(r,s){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(r,s);g(r,e,s),o=!0},p(r,s){if(s&3){n=r[0];let l;for(l=0;l<n.length;l+=1){const f=ae(r,n,l);t[l]?(t[l].p(f,s),_(t[l],1)):(t[l]=ue(f),t[l].c(),_(t[l],1),t[l].m(e.parentNode,e))}for(J(),l=n.length;l<t.length;l+=1)a(l);O()}},i(r){if(!o){for(let s=0;s<n.length;s+=1)_(t[s]);o=!0}},o(r){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)d(t[s]);o=!1},d(r){de(t,r),r&&p(e)}}}function ce(i){let e,o,n,t,a,r,s;return{c(){e=S("iframe"),o=L("Content loading..."),this.h()},l(l){e=z(l,"IFRAME",{loading:!0,title:!0,src:!0,scrolling:!0,class:!0});var f=A(e);o=W(f,"Content loading..."),f.forEach(p),this.h()},h(){h(e,"loading","lazy"),h(e,"title",n=i[2].title),re(e.src,t=`./${i[2].page}`)||h(e,"src",t),h(e,"scrolling","no"),h(e,"class","svelte-qjkhq9")},m(l,f){g(l,e,f),C(e,o),i[13](e),r||(s=R(e,"load",i[7]),r=!0)},p(l,f){f&4&&n!==(n=l[2].title)&&h(e,"title",n),f&4&&!re(e.src,t=`./${l[2].page}`)&&h(e,"src",t)},i(l){a||Q(()=>{a=je(e,Z,{duration:500}),a.start()})},o:x,d(l){l&&p(e),i[13](null),r=!1,s()}}}function Ve(i){let e,o,n=i[1],t,a,r;e=new Y({props:{usePadding:!1}});let s=ce(i);return a=new Y({props:{usePadding:!1}}),{c(){v(e.$$.fragment),o=D(),s.c(),t=D(),v(a.$$.fragment)},l(l){w(e.$$.fragment,l),o=M(l),s.l(l),t=M(l),w(a.$$.fragment,l)},m(l,f){b(e,l,f),g(l,o,f),s.m(l,f),g(l,t,f),b(a,l,f),r=!0},p(l,f){f&2&&K(n,n=l[1])?(J(),d(s,1,1,x),O(),s=ce(l),s.c(),_(s,1),s.m(t.parentNode,t)):s.p(l,f)},i(l){r||(_(e.$$.fragment,l),_(s),_(a.$$.fragment,l),r=!0)},o(l){d(e.$$.fragment,l),d(s),d(a.$$.fragment,l),r=!1},d(l){k(e,l),l&&p(o),s.d(l),l&&p(t),k(a,l)}}}function Le(i){let e,o,n,t,a,r,s,l,f,$,B,q,H,V,y,I,N,c,j,U,ee;Q(i[8]);const te=[Ce,Me],P=[];function ne(u,m){return u[5]>850?0:1}return f=ne(i),$=P[f]=te[f](i),q=new Y({}),I=new Ee({props:{title:i[2].title,hovering:!1,style:"width:auto; height:100%; margin:0;",$$slots:{default:[Ve]},$$scope:{ctx:i}}}),{c(){e=S("h1"),o=L("My Projects 🔨"),n=D(),t=S("p"),a=L(`A list of notable projects I have worked on. More detailed descriptions and\r
    interactive demos coming soon!`),r=D(),s=S("div"),l=S("div"),$.c(),B=D(),v(q.$$.fragment),V=D(),y=S("div"),v(I.$$.fragment),this.h()},l(u){e=z(u,"H1",{});var m=A(e);o=W(m,"My Projects 🔨"),m.forEach(p),n=M(u),t=z(u,"P",{});var T=A(t);a=W(T,`A list of notable projects I have worked on. More detailed descriptions and\r
    interactive demos coming soon!`),T.forEach(p),r=M(u),s=z(u,"DIV",{class:!0,style:!0});var E=A(s);l=z(E,"DIV",{class:!0,style:!0});var F=A(l);$.l(F),B=M(F),w(q.$$.fragment,F),F.forEach(p),V=M(E),y=z(E,"DIV",{class:!0,style:!0});var le=A(y);w(I.$$.fragment,le),le.forEach(p),E.forEach(p),this.h()},h(){h(l,"class","listHolder svelte-qjkhq9"),h(l,"style",H=i[5]<850?"max-width:none; width:100%;":""),h(y,"class","content svelte-qjkhq9"),h(y,"style",N=i[5]<850?" width:100%;":""),h(s,"class","root svelte-qjkhq9"),h(s,"style",c=i[5]<850?"flex-direction:column":"")},m(u,m){g(u,e,m),C(e,o),g(u,n,m),g(u,t,m),C(t,a),g(u,r,m),g(u,s,m),C(s,l),P[f].m(l,null),C(l,B),b(q,l,null),i[12](l),C(s,V),C(s,y),b(I,y,null),j=!0,U||(ee=[R(window,"resize",i[7],{passive:!0}),R(window,"resize",i[8])],U=!0)},p(u,[m]){let T=f;f=ne(u),f===T?P[f].p(u,m):(J(),d(P[T],1,1,()=>{P[T]=null}),O(),$=P[f],$?$.p(u,m):($=P[f]=te[f](u),$.c()),_($,1),$.m(l,B)),(!j||m&32&&H!==(H=u[5]<850?"max-width:none; width:100%;":""))&&h(l,"style",H);const E={};m&4&&(E.title=u[2].title),m&524302&&(E.$$scope={dirty:m,ctx:u}),I.$set(E),(!j||m&32&&N!==(N=u[5]<850?" width:100%;":""))&&h(y,"style",N),(!j||m&32&&c!==(c=u[5]<850?"flex-direction:column":""))&&h(s,"style",c)},i(u){j||(_($),_(q.$$.fragment,u),_(I.$$.fragment,u),j=!0)},o(u){d($),d(q.$$.fragment,u),d(I.$$.fragment,u),j=!1},d(u){u&&p(e),u&&p(n),u&&p(t),u&&p(r),u&&p(s),P[f].d(),k(q),i[12](null),k(I),U=!1,ve(ee)}}}function We(i,e,o){let n;we(i,oe,c=>o(14,n=c));let{contents:t=[]}=e,a=0,r,s,l,f,$=!1;function B(){var c,j;((c=s.contentWindow)==null?void 0:c.document.body.scrollHeight)+"px"!==s.style.height&&o(3,s.style.height=((j=s.contentWindow)==null?void 0:j.document.body.scrollHeight)+40+"px",s)}be(()=>{ke(oe,n=qe.NeedTransition,n)});function q(){o(5,f=window.innerWidth)}const H=c=>{o(1,a=c)},V=c=>{o(1,a=c),o(6,$=!1)};function y(c){$=c,o(6,$)}function I(c){X[c?"unshift":"push"](()=>{l=c,o(4,l)})}function N(c){X[c?"unshift":"push"](()=>{s=c,o(3,s)})}return i.$$set=c=>{"contents"in c&&o(0,t=c.contents)},i.$$.update=()=>{i.$$.dirty&3&&o(2,r=t[a])},[t,a,r,s,l,f,$,B,q,H,V,y,I,N]}class Fe extends pe{constructor(e){super(),_e(this,e,We,Le,K,{contents:0})}}function Re(i){let e,o,n,t,a,r;return o=new Fe({props:{contents:[{text:"🔮 Toneteller",title:"Toneteller - Ai tool for emotion detection",path:"",page:"toneteller"},{text:"🥠 MisFortune Cookie",title:"MisFortune Cookie: Tasty daily fortune",path:"",page:"fortunecookie"},{text:"✂️ ScreenCap",title:"ScreenCap - A screen capturing/utilities tool for desktop",path:"",page:"screencap"},{text:"🍔 Nommers",title:"Nommers : Resturant finder web app",path:"",page:"nommers"}]}}),{c(){e=S("div"),v(o.$$.fragment)},l(s){e=z(s,"DIV",{});var l=A(e);w(o.$$.fragment,l),l.forEach(p)},m(s,l){g(s,e,l),b(o,e,null),t=!0,a||(r=R(e,"outroend",Pe),a=!0)},p:x,i(s){t||(_(o.$$.fragment,s),Q(()=>{t&&(n||(n=se(e,Z,{duration:150},!0)),n.run(1))}),t=!0)},o(s){d(o.$$.fragment,s),n||(n=se(e,Z,{duration:150},!1)),n.run(0),t=!1},d(s){s&&p(e),k(o),s&&n&&n.end(),a=!1,r()}}}class Ke extends pe{constructor(e){super(),_e(this,e,null,Re,K,{})}}export{Ke as default};
