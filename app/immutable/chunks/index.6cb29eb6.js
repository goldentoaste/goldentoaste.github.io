function b(){}const G=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function Y(){return Object.create(null)}function v(t){t.forEach(tt)}function M(t){return typeof t=="function"}function Lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function zt(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Ft(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)o[c]=e.dirty[c]|r[c];return o}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,o){if(r){const s=et(e,n,i,o);t.p(s,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t,e,n){return t.set(n),e}function Jt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const nt=typeof window<"u";let I=nt?()=>window.performance.now():()=>Date.now(),J=nt?t=>requestAnimationFrame(t):b;const N=new Set;function it(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&J(it)}function K(t){let e;return N.size===0&&J(it),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let B=!1;function gt(){B=!0}function yt(){B=!1}function bt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=a?r+1:bt(1,r,h=>e[n[h]].claim_order,a))-1;i[l]=n[_]+1;const u=_+1;n[u]=l,r=Math.max(u,r)}const o=[],s=[];let c=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<o.length&&s[l].claim_order>=o[a].claim_order;)a++;const _=a<o.length?o[a]:null;t.insertBefore(s[l],_)}}function xt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=ct("style");return vt(rt(t),e),e.sheet}function vt(t,e){return xt(t.head||t,e),e.sheet}function Et(t,e){if(B){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){B&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ct(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Ut(){return Q(" ")}function Vt(){return Q("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){At(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function lt(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function te(t,e,n){return lt(t,e,n,ct)}function ee(t,e,n){return lt(t,e,n,kt)}function St(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function ne(t){return St(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function se(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ce(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function oe(t,e){return new t(e)}const R=new Map;let q=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:wt(e),rules:{}};return R.set(t,n),n}function L(t,e,n,i,r,o,s,c=0){const l=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*o(p);a+=p*100+`%{${s(g,1-g)}}
`}const _=a+`100% {${s(n,1-n)}}
}`,u=`__svelte_${Ct(_)}_${c}`,h=rt(t),{stylesheet:f,rules:d}=R.get(h)||Tt(h,t);d[u]||(d[u]=!0,f.insertRule(`@keyframes ${u} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${r}ms 1 both`,q+=1,u}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||jt())}function jt(){J(()=>{q||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),R.clear())})}let D;function j(t){D=t}function U(){if(!D)throw new Error("Function called outside component initialization");return D}function le(t){U().$$.on_mount.push(t)}function ae(t){U().$$.after_update.push(t)}function ue(){const t=U();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=at(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function fe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],Z=[];let A=[];const H=[],ut=Promise.resolve();let W=!1;function ft(){W||(W=!0,ut.then(_t))}function _e(){return ft(),ut}function S(t){A.push(t)}function de(t){H.push(t)}const F=new Set;let E=0;function _t(){if(E!==0)return;const t=D;do{try{for(;E<k.length;){const e=k[E];E++,j(e),Dt(e.$$)}}catch(e){throw k.length=0,E=0,e}for(j(null),k.length=0,E=0;Z.length;)Z.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];F.has(n)||(F.add(n),n())}A.length=0}while(k.length);for(;H.length;)H.pop()();W=!1,F.clear(),j(t)}function Dt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Mt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let T;function V(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function w(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const P=new Set;let y;function he(){y={r:0,c:[],p:y}}function me(){y.r||v(y.c),y=y.p}function Ot(t,e){t&&t.i&&(P.delete(t),t.i(e))}function pe(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),y.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const X={duration:0};function ge(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,c,l=0;function a(){s&&z(t,s)}function _(){const{delay:h=0,duration:f=300,easing:d=G,tick:m=b,css:p}=r||X;p&&(s=L(t,0,1,f,h,d,p,l++)),m(0,1);const g=I()+h,C=g+f;c&&c.abort(),o=!0,S(()=>w(t,!0,"start")),c=K($=>{if(o){if($>=C)return m(1,0),w(t,!0,"end"),a(),o=!1;if($>=g){const x=d(($-g)/f);m(x,1-x)}}return o})}let u=!1;return{start(){u||(u=!0,z(t),M(r)?(r=r(i),V().then(_)):_())},invalidate(){u=!1},end(){o&&(a(),o=!1)}}}function ye(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,s;const c=y;c.r+=1;function l(){const{delay:a=0,duration:_=300,easing:u=G,tick:h=b,css:f}=r||X;f&&(s=L(t,1,0,_,a,u,f));const d=I()+a,m=d+_;S(()=>w(t,!1,"start")),K(p=>{if(o){if(p>=m)return h(0,1),w(t,!1,"end"),--c.r||v(c.c),!1;if(p>=d){const g=u((p-d)/_);h(1-g,g)}}return o})}return M(r)?V().then(()=>{r=r(i),l()}):l(),{end(a){a&&r.tick&&r.tick(1,0),o&&(s&&z(t,s),o=!1)}}}function be(t,e,n,i){const r={direction:"both"};let o=e(t,n,r),s=i?0:1,c=null,l=null,a=null;function _(){a&&z(t,a)}function u(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=G,tick:g=b,css:C}=o||X,$={start:I()+d,b:f};f||($.group=y,y.r+=1),c||l?l=$:(C&&(_(),a=L(t,s,f,m,d,p,C)),f&&g(0,1),c=u($,m),S(()=>w(t,f,"start")),K(x=>{if(l&&x>l.start&&(c=u(l,m),l=null,w(t,c.b,"start"),C&&(_(),a=L(t,s,c.b,c.duration,0,p,o.css))),c){if(x>=c.end)g(s=c.b,1-s),w(t,c.b,"end"),l||(c.b?_():--c.group.r||v(c.group.c)),c=null;else if(x>=c.start){const dt=x-c.start;s=c.a+c.d*p(dt/c.duration),g(s,1-s)}}return!!(c||l)}))}return{run(f){M(o)?V().then(()=>{o=o(r),h(f)}):h(f)},end(){_(),c=l=null}}}const $e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function xe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function we(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(tt).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),o.forEach(S)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Mt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(k.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,r,o,s,c=[-1]){const l=D;j(t);const a=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:r,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Y(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const d=f.length?f[0]:h;return a.ctx&&r(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),_&&qt(t,u)),h}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){gt();const u=Nt(e.target);a.fragment&&a.fragment.l(u),u.forEach(st)}else a.fragment&&a.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),yt(),_t()}j(l)}class ke{$destroy(){Rt(this,1),this.$destroy=b}$on(e,n){if(!M(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{fe as $,Pt as A,Rt as B,Ft as C,Wt as D,Gt as E,Ht as F,Et as G,b as H,Bt as I,Xt as J,ue as K,S as L,kt as M,ee as N,se as O,Zt as P,$e as Q,be as R,ke as S,Qt as T,xe as U,de as V,ce as W,It as X,zt as Y,ge as Z,ye as _,Ut as a,v as a0,G as a1,Jt as a2,I as a3,K as a4,Kt as b,ne as c,pe as d,Vt as e,me as f,Ot as g,st as h,Ee as i,ae as j,ct as k,te as l,Nt as m,Yt as n,le as o,re as p,Q as q,St as r,Lt as s,_e as t,ie as u,he as v,Z as w,oe as x,we as y,ve as z};
