import{S as x,i as ee,s as te,e as oe,b as z,g as S,v as se,d as C,f as ne,h as _,o as De,k as I,q as X,a as L,l as E,m as w,r as J,c as B,n as P,p as R,G as v,u as K,L as W,Z as Te,R as ce,y as Q,z as U,A as Z,B as j,J as G,T as ie,a0 as Ie,$ as ue,I as Ve,X as ke,Q as Se,a3 as Ee,a4 as we,w as fe,H as Le}from"../chunks/index.077b7635.js";import{p as de,P as Be}from"../chunks/pageUpdates.bd58528b.js";import{f as he,c as Re}from"../chunks/index.9fa555f9.js";import{D as ze}from"../chunks/Divider.5205e257.js";import{S as Ce}from"../chunks/SpotLightBox.8f8fd7e6.js";function me(s){let e,t,l,i,r,h,c,f,g,y,$,H,p,o,k;return{c(){e=I("yearIndicator"),t=I("h1"),l=X(s[0]),i=L(),r=I("div"),h=I("div"),c=L(),f=I("div"),g=L(),y=I("div"),$=L(),H=I("div"),this.h()},l(a){e=E(a,"YEARINDICATOR",{class:!0});var d=w(e);t=E(d,"H1",{class:!0});var u=w(t);l=J(u,s[0]),u.forEach(_),i=B(d),r=E(d,"DIV",{class:!0});var n=w(r);h=E(n,"DIV",{class:!0,style:!0}),w(h).forEach(_),c=B(n),f=E(n,"DIV",{class:!0,style:!0}),w(f).forEach(_),g=B(n),y=E(n,"DIV",{class:!0,style:!0}),w(y).forEach(_),$=B(n),H=E(n,"DIV",{class:!0}),w(H).forEach(_),n.forEach(_),d.forEach(_),this.h()},h(){P(t,"class","svelte-g7rv04"),P(h,"class","dot x1 svelte-g7rv04"),R(h,"right","0"),R(h,"top","0"),R(h,"transform","translate(150%, -150%)"),P(f,"class","dot x2 svelte-g7rv04"),R(f,"right","0"),R(f,"top","0"),R(f,"transform","translate(150%, 150%)"),P(y,"class","dot x3 svelte-g7rv04"),R(y,"left","0"),R(y,"top","0"),R(y,"transform","translate(300%, 150%)"),P(H,"class","diamond svelte-g7rv04"),P(r,"class","lineDecor svelte-g7rv04"),P(e,"class","svelte-g7rv04")},m(a,d){z(a,e,d),v(e,t),v(t,l),v(e,i),v(e,r),v(r,h),v(r,c),v(r,f),v(r,g),v(r,y),v(r,$),v(r,H),k=!0},p(a,d){(!k||d&1)&&K(l,a[0])},i(a){k||(a&&(p||W(()=>{p=Te(r,s[2],{}),p.start()})),a&&W(()=>{k&&(o||(o=ce(e,he,{},!0)),o.run(1))}),k=!0)},o(a){a&&(o||(o=ce(e,he,{},!1)),o.run(0)),k=!1},d(a){a&&_(e),a&&o&&o.end()}}}function Me(s){let e,t=s[1]&&me(s);return{c(){t&&t.c(),e=oe()},l(l){t&&t.l(l),e=oe()},m(l,i){t&&t.m(l,i),z(l,e,i)},p(l,[i]){l[1]?t?(t.p(l,i),i&2&&S(t,1)):(t=me(l),t.c(),S(t,1),t.m(e.parentNode,e)):t&&(se(),C(t,1,1,()=>{t=null}),ne())},i(l){S(t)},o(l){C(t)},d(l){t&&t.d(l),l&&_(e)}}}function Ne(s,e,t){let{year:l}=e,i=!1;De(()=>{t(1,i=!0)});function r(h,{duration:c=500,maxWidth:f=500}){return{duration:c,css:g=>`
                width: ${Re(g)*f}px;`}}return s.$$set=h=>{"year"in h&&t(0,l=h.year)},[l,i,r]}class Ye extends x{constructor(e){super(),ee(this,e,Ne,Me,te,{year:0})}}function _e(s,e,t){const l=s.slice();return l[3]=e[t],l}function ve(s){let e,t=s[3]+"",l;return{c(){e=I("li"),l=X(t)},l(i){e=E(i,"LI",{});var r=w(e);l=J(r,t),r.forEach(_)},m(i,r){z(i,e,r),v(e,l)},p(i,r){r&1&&t!==(t=i[3]+"")&&K(l,t)},d(i){i&&_(e)}}}function Oe(s){let e,t,l,i=s[0].title+"",r,h,c,f=s[0].duration+"",g,y,$,H,p,o,k,a;$=new ze({props:{usePadding:!1}});let d=s[0].details,u=[];for(let n=0;n<d.length;n+=1)u[n]=ve(_e(s,d,n));return{c(){e=I("div"),t=I("div"),l=I("h3"),r=X(i),h=L(),c=I("span"),g=X(f),y=L(),Q($.$$.fragment),H=L(),p=I("ul");for(let n=0;n<u.length;n+=1)u[n].c();this.h()},l(n){e=E(n,"DIV",{class:!0});var T=w(e);t=E(T,"DIV",{class:!0});var b=w(t);l=E(b,"H3",{class:!0});var N=w(l);r=J(N,i),N.forEach(_),h=B(b),c=E(b,"SPAN",{class:!0});var M=w(c);g=J(M,f),M.forEach(_),b.forEach(_),y=B(T),U($.$$.fragment,T),H=B(T),p=E(T,"UL",{class:!0});var A=w(p);for(let O=0;O<u.length;O+=1)u[O].l(A);A.forEach(_),T.forEach(_),this.h()},h(){P(l,"class","svelte-1wbth1k"),P(c,"class","duration svelte-1wbth1k"),P(t,"class","top svelte-1wbth1k"),P(p,"class","svelte-1wbth1k"),P(e,"class","item svelte-1wbth1k")},m(n,T){z(n,e,T),v(e,t),v(t,l),v(l,r),v(t,h),v(t,c),v(c,g),v(e,y),Z($,e,null),v(e,H),v(e,p);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(p,null);o=!0,k||(a=[G(e,"click",s[1]),G(e,"keypress",s[2])],k=!0)},p(n,T){if((!o||T&1)&&i!==(i=n[0].title+"")&&K(r,i),(!o||T&1)&&f!==(f=n[0].duration+"")&&K(g,f),T&1){d=n[0].details;let b;for(b=0;b<d.length;b+=1){const N=_e(n,d,b);u[b]?u[b].p(N,T):(u[b]=ve(N),u[b].c(),u[b].m(p,null))}for(;b<u.length;b+=1)u[b].d(1);u.length=d.length}},i(n){o||(S($.$$.fragment,n),o=!0)},o(n){C($.$$.fragment,n),o=!1},d(n){n&&_(e),j($),ie(u,n),k=!1,Ie(a)}}}function qe(s){let e,t;return e=new Ce({props:{style:"margin:1rem; margin-left:2rem;",$$slots:{default:[Oe]},$$scope:{ctx:s}}}),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,i){Z(e,l,i),t=!0},p(l,[i]){const r={};i&65&&(r.$$scope={dirty:i,ctx:l}),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function Ge(s,e,t){let{info:l}=e;function i(h){ue.call(this,s,h)}function r(h){ue.call(this,s,h)}return s.$$set=h=>{"info"in h&&t(0,l=h.info)},[l,i,r]}class Xe extends x{constructor(e){super(),ee(this,e,Ge,qe,te,{info:0})}}function $e(s,[e,t,l]){function i(r){s.getBoundingClientRect().bottom<t-l&&(e(s),document.removeEventListener("scroll",i))}return document.addEventListener("scroll",i),{destroy(){document.removeEventListener("scroll",i)},update([r,h,c]){t=h,l=c,i()}}}const{setTimeout:pe}=Se;function ge(s,e,t){const l=s.slice();return l[15]=e[t],l[16]=e,l[17]=t,l}function He(s,e,t){const l=s.slice();return l[18]=e[t],l}function Ae(s){let e,t,l,i,r,h;return t=new Xe({props:{info:s[18]}}),{c(){e=I("div"),Q(t.$$.fragment),this.h()},l(c){e=E(c,"DIV",{class:!0});var f=w(e);U(t.$$.fragment,f),f.forEach(_),this.h()},h(){P(e,"class","iniHidden")},m(c,f){z(c,e,f),Z(t,e,null),i=!0,r||(h=Ee(l=$e.call(null,e,[Pe,s[4],Y/2])),r=!0)},p(c,f){const g={};f&1&&(g.info=c[18]),t.$set(g),l&&we(l.update)&&f&16&&l.update.call(null,[Pe,c[4],Y/2])},i(c){i||(S(t.$$.fragment,c),i=!0)},o(c){C(t.$$.fragment,c),i=!1},d(c){c&&_(e),j(t),r=!1,h()}}}function ye(s){let e,t,l,i,r=s[17],h,c,f,g,y;l=new Ye({props:{year:s[15].year}});const $=()=>s[13](t,r),H=()=>s[13](null,r);let p=s[15].items,o=[];for(let a=0;a<p.length;a+=1)o[a]=Ae(He(s,p,a));const k=a=>C(o[a],1,1,()=>{o[a]=null});return{c(){e=I("div"),t=I("div"),Q(l.$$.fragment),h=L();for(let a=0;a<o.length;a+=1)o[a].c();c=L(),this.h()},l(a){e=E(a,"DIV",{class:!0});var d=w(e);t=E(d,"DIV",{class:!0});var u=w(t);U(l.$$.fragment,u),u.forEach(_),h=B(d);for(let n=0;n<o.length;n+=1)o[n].l(d);c=B(d),d.forEach(_),this.h()},h(){P(t,"class","year iniHidden svelte-l1acod"),P(e,"class","group")},m(a,d){z(a,e,d),v(e,t),Z(l,t,null),$(),v(e,h);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null);v(e,c),f=!0,g||(y=Ee(i=$e.call(null,t,[be,s[4],Y/2])),g=!0)},p(a,d){s=a;const u={};if(d&1&&(u.year=s[15].year),l.$set(u),i&&we(i.update)&&d&16&&i.update.call(null,[be,s[4],Y/2]),r!==s[17]&&(H(),r=s[17],$()),d&17){p=s[15].items;let n;for(n=0;n<p.length;n+=1){const T=He(s,p,n);o[n]?(o[n].p(T,d),S(o[n],1)):(o[n]=Ae(T),o[n].c(),S(o[n],1),o[n].m(e,c))}for(se(),n=p.length;n<o.length;n+=1)k(n);ne()}},i(a){if(!f){S(l.$$.fragment,a);for(let d=0;d<p.length;d+=1)S(o[d]);f=!0}},o(a){C(l.$$.fragment,a),o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)C(o[d]);f=!1},d(a){a&&_(e),j(l),H(),ie(o,a),g=!1,y()}}}function Je(s){let e=!1,t=()=>{e=!1},l,i,r,h,c,f,g,y,$,H,p,o,k,a,d,u,n,T,b,N;W(s[10]),W(s[11]);let M=s[0],A=[];for(let m=0;m<M.length;m+=1)A[m]=ye(ge(s,M,m));const O=m=>C(A[m],1,1,()=>{A[m]=null});return{c(){i=I("h1"),r=X("Past Experiences and Achievement"),h=L(),c=I("div"),f=I("div"),g=I("div"),$=L(),H=I("div"),p=I("div"),o=I("div"),k=L(),a=I("div"),u=L(),n=I("div");for(let m=0;m<A.length;m+=1)A[m].c();this.h()},l(m){i=E(m,"H1",{});var V=w(i);r=J(V,"Past Experiences and Achievement"),V.forEach(_),h=B(m),c=E(m,"DIV",{class:!0});var D=w(c);f=E(D,"DIV",{class:!0,style:!0});var q=w(f);g=E(q,"DIV",{class:!0}),w(g).forEach(_),q.forEach(_),$=B(D),H=E(D,"DIV",{class:!0,style:!0});var re=w(H);p=E(re,"DIV",{class:!0});var F=w(p);o=E(F,"DIV",{class:!0}),w(o).forEach(_),k=B(F),a=E(F,"DIV",{class:!0}),w(a).forEach(_),F.forEach(_),re.forEach(_),D.forEach(_),u=B(m),n=E(m,"DIV",{style:!0});var ae=w(n);for(let le=0;le<A.length;le+=1)A[le].l(ae);ae.forEach(_),this.h()},h(){P(g,"class","decor svelte-l1acod"),P(f,"class","hline svelte-l1acod"),P(f,"style",y=s[3]?"max-width:800px;":""),P(o,"class","innerArrow svelte-l1acod"),P(a,"class","littleArrow svelte-l1acod"),P(p,"class","scrollDiamond svelte-l1acod"),P(H,"class","vline svelte-l1acod"),P(H,"style",d=s[3]?`height:${s[4]-Y-s[6]+s[2]}px;`:""),P(c,"class","timelineParent svelte-l1acod"),R(n,"margin-left","2.5rem"),R(n,"margin-bottom","10rem")},m(m,V){z(m,i,V),v(i,r),z(m,h,V),z(m,c,V),v(c,f),v(f,g),v(c,$),v(c,H),v(H,p),v(p,o),v(p,k),v(p,a),s[12](H),z(m,u,V),z(m,n,V);for(let D=0;D<A.length;D+=1)A[D]&&A[D].m(n,null);T=!0,b||(N=[G(window,"resize",s[8]),G(window,"scroll",()=>{e=!0,clearTimeout(l),l=pe(t,100),s[10]()}),G(window,"resize",s[11])],b=!0)},p(m,[V]){if(V&2&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,m[1]),l=pe(t,100)),(!T||V&8&&y!==(y=m[3]?"max-width:800px;":""))&&P(f,"style",y),(!T||V&92&&d!==(d=m[3]?`height:${m[4]-Y-m[6]+m[2]}px;`:""))&&P(H,"style",d),V&145){M=m[0];let D;for(D=0;D<M.length;D+=1){const q=ge(m,M,D);A[D]?(A[D].p(q,V),S(A[D],1)):(A[D]=ye(q),A[D].c(),S(A[D],1),A[D].m(n,null))}for(se(),D=M.length;D<A.length;D+=1)O(D);ne()}},i(m){if(!T){for(let V=0;V<M.length;V+=1)S(A[V]);T=!0}},o(m){A=A.filter(Boolean);for(let V=0;V<A.length;V+=1)C(A[V]);T=!1},d(m){m&&_(i),m&&_(h),m&&_(c),s[12](null),m&&_(u),m&&_(n),ie(A,m),b=!1,Ie(N)}}}let Y=150;const be=s=>{s.classList.add("visible")},Pe=s=>{s.classList.add("visible")};function Qe(s,e,t){let l;Ve(s,de,u=>t(14,l=u));let{pageInput:i}=e,r=!1,h=0,c=0,f=0,g=0,y,$=0,H=Array(i.length);H.fill(void 0);function p(){t(9,h=document.body.clientHeight)}De(()=>{ke(de,l=Be.NeedTransition,l),setTimeout(()=>{t(3,r=!0),p(),t(6,$=y.getBoundingClientRect().top),console.log("owo",c,Y,$,g,c-Y-$+g)},50)});function o(){t(1,f=window.pageYOffset)}function k(){t(4,c=window.innerHeight)}function a(u){fe[u?"unshift":"push"](()=>{y=u,t(5,y)})}function d(u,n){fe[u?"unshift":"push"](()=>{H[n]=u,t(7,H)})}return s.$$set=u=>{"pageInput"in u&&t(0,i=u.pageInput)},s.$$.update=()=>{s.$$.dirty&514&&t(1,f=Math.min(h,f)),s.$$.dirty&6&&t(2,g=Math.round(Math.max(f,g)))},[i,f,g,r,c,y,$,H,p,h,o,k,a,d]}class Ue extends x{constructor(e){super(),ee(this,e,Qe,Je,te,{pageInput:0})}}function Ze(s){let e,t;return e=new Ue({props:{pageInput:s[0]}}),{c(){Q(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,i){Z(e,l,i),t=!0},p:Le,i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){j(e,l)}}}function je(s){return[[{year:"2023",items:[{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]}]},{year:"22222",items:[{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]}]},{year:"2078",items:[{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]},{title:"Present Day",duration:"Present Time",details:["*HAHAHAHA*"]}]}]]}class tt extends x{constructor(e){super(),ee(this,e,je,Ze,te,{})}}export{tt as default};
