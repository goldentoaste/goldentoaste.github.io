function b(){}const K=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return t()}function et(){return Object.create(null)}function v(t){t.forEach(ot)}function L(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Qt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function wt(t){return Object.keys(t).length===0}function vt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ut(t,e,n){t.$$.on_destroy.push(vt(e,n))}function Vt(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function Xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function Yt(t,e,n,i,s,o){if(s){const r=ct(e,n,i,o);t.p(r,s)}}function Zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function te(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ee(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ne(t,e,n){return t.set(n),e}function ie(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const lt=typeof window<"u";let Q=lt?()=>window.performance.now():()=>Date.now(),U=lt?t=>requestAnimationFrame(t):b;const k=new Set;function at(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&U(at)}function V(t){let e;return k.size===0&&U(at),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let W=!1;function Et(){W=!0}function Tt(){W=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:kt(1,s,h=>e[n[h]].claim_order,a))-1;i[l]=n[d]+1;const u=d+1;n[u]=l,s=Math.max(u,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const d=a<o.length?o[a]:null;t.insertBefore(r[l],d)}}function ut(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=F("style");return St(ft(t),e),e.sheet}function St(t,e){return ut(t.head||t,e),e.sheet}function Mt(t,e){if(W){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){t.insertBefore(e,n||null)}function jt(t,e,n){W&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function re(){return X(" ")}function oe(){return X("")}function nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ce(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Dt(t,i,e[i])}function le(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Lt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,s=!1){_t(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function mt(t,e,n,i){return ht(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ae(t,e,n){return mt(t,e,n,F)}function ue(t,e,n){return mt(t,e,n,dt)}function Pt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function fe(t){return Pt(t," ")}function it(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function de(t,e){const n=it(t,"HTML_TAG_START",0),i=it(t,"HTML_TAG_END",n);if(n===i)return new st(void 0,e);_t(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new st(o,e)}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function he(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let H;function Ht(){if(H===void 0){H=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{H=!0}}return H}function me(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=F("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Ht();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=nt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=nt(i.contentWindow,"resize",e),e()}),ut(t,i),()=>{(s||o&&i.contentWindow)&&o(),A(i)}}function pe(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ge(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ot{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=dt(n.nodeName):this.e=F(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class st extends Ot{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}}function ye(t,e){return new t(e)}const z=new Map;let R=0;function zt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:At(e),rules:{}};return z.set(t,n),n}function q(t,e,n,i,s,o,r,c=0){const l=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);a+=p*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${zt(d)}_${c}`,h=ft(t),{stylesheet:f,rules:_}=z.get(h)||Rt(h,t);_[u]||(_[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${s}ms 1 both`,R+=1,u}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),R-=s,R||qt())}function qt(){U(()=>{R||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),z.clear())})}let D;function j(t){D=t}function Y(){if(!D)throw new Error("Function called outside component initialization");return D}function be(t){Y().$$.on_mount.push(t)}function xe(t){Y().$$.after_update.push(t)}function $e(){const t=Y();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=pt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function we(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],rt=[];let N=[];const I=[],gt=Promise.resolve();let J=!1;function yt(){J||(J=!0,gt.then(bt))}function ve(){return yt(),gt}function S(t){N.push(t)}function Ee(t){I.push(t)}const G=new Set;let E=0;function bt(){if(E!==0)return;const t=D;do{try{for(;E<T.length;){const e=T[E];E++,j(e),Bt(e.$$)}}catch(e){throw T.length=0,E=0,e}for(j(null),T.length=0,E=0;rt.length;)rt.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];G.has(n)||(G.add(n),n())}N.length=0}while(T.length);for(;I.length;)I.pop()();J=!1,G.clear(),j(t)}function Bt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Wt(t){const e=[],n=[];N.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),N=e}let C;function Z(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function w(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const O=new Set;let y;function Te(){y={r:0,c:[],p:y}}function ke(){y.r||v(y.c),y=y.p}function Ft(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Ne(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),y.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const tt={duration:0};function Ae(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,c,l=0;function a(){r&&B(t,r)}function d(){const{delay:h=0,duration:f=300,easing:_=K,tick:m=b,css:p}=s||tt;p&&(r=q(t,0,1,f,h,_,p,l++)),m(0,1);const g=Q()+h,M=g+f;c&&c.abort(),o=!0,S(()=>w(t,!0,"start")),c=V(x=>{if(o){if(x>=M)return m(1,0),w(t,!0,"end"),a(),o=!1;if(x>=g){const $=_((x-g)/f);m($,1-$)}}return o})}let u=!1;return{start(){u||(u=!0,B(t),L(s)?(s=s(i),Z().then(d)):d())},invalidate(){u=!1},end(){o&&(a(),o=!1)}}}function Se(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const c=y;c.r+=1;function l(){const{delay:a=0,duration:d=300,easing:u=K,tick:h=b,css:f}=s||tt;f&&(r=q(t,1,0,d,a,u,f));const _=Q()+a,m=_+d;S(()=>w(t,!1,"start")),V(p=>{if(o){if(p>=m)return h(0,1),w(t,!1,"end"),--c.r||v(c.c),!1;if(p>=_){const g=u((p-_)/d);h(1-g,g)}}return o})}return L(s)?Z().then(()=>{s=s(i),l()}):l(),{end(a){a&&s.tick&&s.tick(1,0),o&&(r&&B(t,r),o=!1)}}}function Me(t,e,n,i){const s={direction:"both"};let o=e(t,n,s),r=i?0:1,c=null,l=null,a=null;function d(){a&&B(t,a)}function u(f,_){const m=f.b-r;return _*=Math.abs(m),{a:r,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:p=K,tick:g=b,css:M}=o||tt,x={start:Q()+_,b:f};f||(x.group=y,y.r+=1),c||l?l=x:(M&&(d(),a=q(t,r,f,m,_,p,M)),f&&g(0,1),c=u(x,m),S(()=>w(t,f,"start")),V($=>{if(l&&$>l.start&&(c=u(l,m),l=null,w(t,c.b,"start"),M&&(d(),a=q(t,r,c.b,c.duration,0,p,o.css))),c){if($>=c.end)g(r=c.b,1-r),w(t,c.b,"end"),l||(c.b?d():--c.group.r||v(c.group.c)),c=null;else if($>=c.start){const xt=$-c.start;r=c.a+c.d*p(xt/c.duration),g(r,1-r)}}return!!(c||l)}))}return{run(f){L(o)?Z().then(()=>{o=o(s),h(f)}):h(f)},end(){d(),c=l=null}}}const Ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function je(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],c=e[o];if(c){for(const l in r)l in c||(i[l]=1);for(const l in c)s[l]||(n[l]=c[l],s[l]=1);t[o]=c}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function De(t){return typeof t=="object"&&t!==null?t:{}}function Le(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Pe(t){t&&t.c()}function He(t,e){t&&t.l(e)}function Gt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||S(()=>{const r=t.$$.on_mount.map(ot).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),o.forEach(S)}function It(t,e){const n=t.$$;n.fragment!==null&&(Wt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(T.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,i,s,o,r,c=[-1]){const l=D;j(t);const a=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:et(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const _=f.length?f[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=_)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](_),d&&Jt(t,u)),h}):[],a.update(),d=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Et();const u=Lt(e.target);a.fragment&&a.fragment.l(u),u.forEach(A)}else a.fragment&&a.fragment.c();e.intro&&Ft(t.$$.fragment),Gt(t,e.target,e.anchor,e.customElement),Tt(),bt()}j(l)}class ze{$destroy(){It(this,1),this.$destroy=b}$on(e,n){if(!L(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Se as $,Gt as A,It as B,Vt as C,Yt as D,Zt as E,Xt as F,Mt as G,b as H,Ut as I,nt as J,$e as K,S as L,dt as M,ue as N,pe as O,le as P,Ce as Q,Me as R,ze as S,se as T,Le as U,Ee as V,ge as W,ne as X,Qt as Y,v as Z,Ae as _,re as a,we as a0,$t as a1,ce as a2,je as a3,ee as a4,te as a5,st as a6,de as a7,De as a8,K as a9,ie as aa,Q as ab,V as ac,me as ad,jt as b,fe as c,Ne as d,oe as e,ke as f,Ft as g,A as h,Oe as i,xe as j,F as k,ae as l,Lt as m,Dt as n,be as o,he as p,X as q,Pt as r,Kt as s,ve as t,_e as u,Te as v,rt as w,ye as x,Pe as y,He as z};
