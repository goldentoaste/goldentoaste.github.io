import{S as Ae,i as Ne,s as Pe,C as Ve,k as h,a as P,l as _,m as v,h as s,c as L,p as q,n as I,b as $,G as i,J as ne,g as G,v as Re,d as J,f as We,D as Te,E as xe,F as qe,L as Le,_ as ze,$ as He,Z as Fe,I as Ge,q as j,r as C,R as je,y as ie,z as le,A as fe,B as me,H as Ue}from"../chunks/index.4db08ef9.js";import{D as Xe}from"../chunks/Divider.753d441d.js";import"../chunks/IconListItem.e8682a0f.js";import{a as Be,I as Je,T as Ke,s as Y}from"../chunks/svgs.2b602a4c.js";import"../chunks/InfoBox.719416b5.js";import{a as ye,f as Ye}from"../chunks/index.dac5905b.js";function Ce(n){let t,o,l,f,y;return{c(){t=h("div"),o=h("p"),l=j("stuff"),this.h()},l(a){t=_(a,"DIV",{id:!0,style:!0,class:!0});var d=v(t);o=_(d,"P",{class:!0});var p=v(o);l=C(p,"stuff"),p.forEach(s),d.forEach(s),this.h()},h(){I(o,"class","svelte-1okajc7"),I(t,"id","label"),q(t,"justify-content",n[0].rot>0?"end":"start"),I(t,"class","svelte-1okajc7")},m(a,d){$(a,t,d),i(t,o),i(o,l),y=!0},p(a,d){(!y||d&1)&&q(t,"justify-content",a[0].rot>0?"end":"start")},i(a){y||(Le(()=>{y&&(f||(f=je(t,ye,{y:-50,duration:300},!0)),f.run(1))}),y=!0)},o(a){f||(f=je(t,ye,{y:-50,duration:300},!1)),f.run(0),y=!1},d(a){a&&s(t),a&&f&&f.end()}}}function Ze(n){let t,o,l,f=Math.abs(n[0].rot)>5,y,a,d,p,b,A,m=f&&Ce(n);const M=n[7].default,w=Ve(M,n,n[6],null);return{c(){t=h("div"),o=h("div"),l=h("div"),m&&m.c(),y=P(),w&&w.c(),this.h()},l(r){t=_(r,"DIV",{id:!0,style:!0,class:!0});var c=v(t);o=_(c,"DIV",{style:!0});var z=v(o);l=_(z,"DIV",{style:!0});var S=v(l);m&&m.l(S),S.forEach(s),z.forEach(s),y=L(c),w&&w.l(c),c.forEach(s),this.h()},h(){q(l,"transform","translate("+170*n[3]+"px , "+10*n[3]+"px) rotate("+-n[0].rot+"deg) translate("+-170*n[3]+"px , "+-10*n[3]+"px)"),q(o,"clip-path","path(' M0, 15 q0,-15,15,-15 h370 q15,0,15, 15 v200 h-400 z ')"),I(t,"id","container"),q(t,"transform","translate("+(n[0].x+250)+"px,"+(n[0].y+20)+"px) rotate("+n[0].rot+"deg) "),I(t,"class","svelte-1okajc7")},m(r,c){$(r,t,c),i(t,o),i(o,l),m&&m.m(l,null),i(t,y),w&&w.m(t,null),p=!0,b||(A=[ne(window,"mousemove",n[5]),ne(window,"mouseup",n[8]),ne(t,"mousedown",n[9]),ne(t,"mouseup",n[10])],b=!0)},p(r,[c]){c&1&&(f=Math.abs(r[0].rot)>5),f?m?(m.p(r,c),c&1&&G(m,1)):(m=Ce(r),m.c(),G(m,1),m.m(l,null)):m&&(Re(),J(m,1,1,()=>{m=null}),We()),(!p||c&9)&&q(l,"transform","translate("+170*r[3]+"px , "+10*r[3]+"px) rotate("+-r[0].rot+"deg) translate("+-170*r[3]+"px , "+-10*r[3]+"px)"),w&&w.p&&(!p||c&64)&&Te(w,M,r,r[6],p?qe(M,r[6],c,null):xe(r[6]),null),(!p||c&1)&&q(t,"transform","translate("+(r[0].x+250)+"px,"+(r[0].y+20)+"px) rotate("+r[0].rot+"deg) ")},i(r){p||(G(m),G(w,r),Le(()=>{p&&(d&&d.end(1),a=ze(t,ye,{y:-30,duration:500}),a.start())}),p=!0)},o(r){J(m),J(w,r),a&&a.invalidate(),d=He(t,Ye,{duration:500}),p=!1},d(r){r&&s(t),m&&m.d(),w&&w.d(r),r&&d&&d.end(),b=!1,Fe(A)}}}const ge=400,we=400,O=132,Oe=10;function Qe(n,t,o){let l,{$$slots:f={},$$scope:y}=t,a={x:0,y:0,rot:0},d=Be({x:0,y:0,rot:0},{stiffness:.1,damping:.7});Ge(n,d,u=>o(0,l=u));let p=!1,b;const A=u=>{if(u.buttons!==1||!p)return;let E=a.x+u.movementX,N=a.y+u.movementY;o(1,a={x:m(E,-O,O),y:N,rot:a.rot});let T=Math.sign(E),V=Math.min(O,Math.max(0,Math.abs(E)))/O,D=T*M(V)*O,x=T*V*Oe,R=.1*N,k=w(D+ge/2,R+we/2,D+ge/2,R+we,x);d.set({x:k.x-ge/2,y:k.y-we/2,rot:x})},m=(u,E,N)=>Math.max(E,Math.min(N,u)),M=u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2,w=(u,E,N,T,V)=>{let D=r(V),x=u-N,R=E-T,k=Math.cos(D),W=Math.sin(D);return{x:N+(x*k-R*W),y:T+(x*W+R*k)}},r=u=>u*(Math.PI/180),c=()=>{o(1,a.x=0,a),o(1,a.y=0,a),d.set(a)},z=()=>{o(2,p=!0)},S=()=>{o(2,p=!1)};return n.$$set=u=>{"$$scope"in u&&o(6,y=u.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&o(3,b=l.rot>0?1:-1)},[l,a,p,b,d,A,y,f,c,z,S]}class et extends Ae{constructor(t){super(),Ne(this,t,Qe,Ze,Pe,{})}}function tt(n){let t,o;return{c(){t=h("div"),o=j("More work is needed for this widget"),this.h()},l(l){t=_(l,"DIV",{class:!0});var f=v(t);o=C(f,"More work is needed for this widget"),f.forEach(s),this.h()},h(){I(t,"class","demo svelte-p1outk")},m(l,f){$(l,t,f),i(t,o)},p:Ue,d(l){l&&s(t)}}}function st(n){let t,o,l,f,y,a,d,p,b,A,m,M,w,r,c,z,S,u,E,N,T,V,D,x,R,k,W,ue,U,Q,X,de,B,ce,ee,K,pe,te,H,F,se;return d=new Xe({}),W=new Je({props:{maxWidth:500,width:500,height:300,title:"Project show case",items:[{desc:"Promo image of Nommers",src:"nommer/1.jpg"},{desc:"Nom Nom Nom",src:"nommer/2.jpg"},{desc:"Image of an unrelated cat",src:"nommer/cat.jpg"},{desc:"Image of two unrelated cats",src:"nommer/2cats.jpg"}]}}),U=new Ke({props:{input:[{name:"Front End",items:[{name:"SvelteKit",src:"icons/svelte.svg"}]},{name:"Deployment",items:[{name:"AWS Elasticache",path:Y.aws},{name:"AWS RDS",path:Y.aws},{name:"AWS EBS",path:Y.aws},{name:"AWS EC2",path:Y.aws},{name:"AWS S3",path:Y.aws}]},{name:"Server",items:[{name:"Django",src:"icons/django.svg"},{name:"Django Channels",src:"icons/django.svg"},{name:"Redis",src:"icons/redis.svg"},{name:"Websockets",path:Y.websocket}]}]}}),F=new et({props:{$$slots:{default:[tt]},$$scope:{ctx:n}}}),{c(){t=h("h1"),o=j("Nommers!"),l=P(),f=h("p"),y=j(`Can't decide where to eat with your friends? Too many good options nearby\r
    but don't which one to go with? Simple solution: enforce democracy with\r
    Nommers! (and nom the process)`),a=P(),ie(d.$$.fragment),p=P(),b=h("ul"),A=h("li"),m=j("Co-created with: "),M=h("a"),w=j("Christina Raganit"),r=P(),c=h("li"),z=j(`Links:\r
        `),S=h("ul"),u=h("li"),E=h("a"),N=j("Github"),T=P(),V=h("li"),D=h("a"),x=j("DevPost"),R=P(),k=h("div"),ie(W.$$.fragment),ue=P(),ie(U.$$.fragment),Q=P(),X=h("p"),de=j(`Nommers is an app that helps you and your friends discover local resturants,\r
    and also decide which one to go to as a group. The voting is system is\r
    inspired by the game series`),B=h("a"),ce=j('"Reigns"'),ee=P(),K=h("p"),pe=j("Here is a demo of the voting card:"),te=P(),H=h("div"),ie(F.$$.fragment),this.h()},l(e){t=_(e,"H1",{});var g=v(t);o=C(g,"Nommers!"),g.forEach(s),l=L(e),f=_(e,"P",{});var Z=v(f);y=C(Z,`Can't decide where to eat with your friends? Too many good options nearby\r
    but don't which one to go with? Simple solution: enforce democracy with\r
    Nommers! (and nom the process)`),Z.forEach(s),a=L(e),le(d.$$.fragment,e),p=L(e),b=_(e,"UL",{});var re=v(b);A=_(re,"LI",{});var he=v(A);m=C(he,"Co-created with: "),M=_(he,"A",{target:!0,href:!0});var $e=v(M);w=C($e,"Christina Raganit"),$e.forEach(s),he.forEach(s),r=L(re),c=_(re,"LI",{});var _e=v(c);z=C(_e,`Links:\r
        `),S=_(_e,"UL",{});var ae=v(S);u=_(ae,"LI",{});var be=v(u);E=_(be,"A",{target:!0,href:!0});var Ee=v(E);N=C(Ee,"Github"),Ee.forEach(s),be.forEach(s),T=L(ae),V=_(ae,"LI",{});var ke=v(V);D=_(ke,"A",{target:!0,href:!0});var Ie=v(D);x=C(Ie,"DevPost"),Ie.forEach(s),ke.forEach(s),ae.forEach(s),_e.forEach(s),re.forEach(s),R=L(e),k=_(e,"DIV",{class:!0});var oe=v(k);le(W.$$.fragment,oe),ue=L(oe),le(U.$$.fragment,oe),oe.forEach(s),Q=L(e),X=_(e,"P",{});var ve=v(X);de=C(ve,`Nommers is an app that helps you and your friends discover local resturants,\r
    and also decide which one to go to as a group. The voting is system is\r
    inspired by the game series`),B=_(ve,"A",{target:!0,href:!0});var Me=v(B);ce=C(Me,'"Reigns"'),Me.forEach(s),ve.forEach(s),ee=L(e),K=_(e,"P",{});var De=v(K);pe=C(De,"Here is a demo of the voting card:"),De.forEach(s),te=L(e),H=_(e,"DIV",{style:!0});var Se=v(H);le(F.$$.fragment,Se),Se.forEach(s),this.h()},h(){I(M,"target","_blank"),I(M,"href","https://github.com/christinaraganit"),I(E,"target","_blank"),I(E,"href","https://github.com/goldentoaste/nommers"),I(D,"target","_blank"),I(D,"href","https://devpost.com/software/nommers"),I(k,"class","top svelte-p1outk"),I(B,"target","_blank"),I(B,"href","https://www.reignsgame.com/"),q(H,"width","500px"),q(H,"height","500px")},m(e,g){$(e,t,g),i(t,o),$(e,l,g),$(e,f,g),i(f,y),$(e,a,g),fe(d,e,g),$(e,p,g),$(e,b,g),i(b,A),i(A,m),i(A,M),i(M,w),i(b,r),i(b,c),i(c,z),i(c,S),i(S,u),i(u,E),i(E,N),i(S,T),i(S,V),i(V,D),i(D,x),$(e,R,g),$(e,k,g),fe(W,k,null),i(k,ue),fe(U,k,null),$(e,Q,g),$(e,X,g),i(X,de),i(X,B),i(B,ce),$(e,ee,g),$(e,K,g),i(K,pe),$(e,te,g),$(e,H,g),fe(F,H,null),se=!0},p(e,[g]){const Z={};g&1&&(Z.$$scope={dirty:g,ctx:e}),F.$set(Z)},i(e){se||(G(d.$$.fragment,e),G(W.$$.fragment,e),G(U.$$.fragment,e),G(F.$$.fragment,e),se=!0)},o(e){J(d.$$.fragment,e),J(W.$$.fragment,e),J(U.$$.fragment,e),J(F.$$.fragment,e),se=!1},d(e){e&&s(t),e&&s(l),e&&s(f),e&&s(a),me(d,e),e&&s(p),e&&s(b),e&&s(R),e&&s(k),me(W),me(U),e&&s(Q),e&&s(X),e&&s(ee),e&&s(K),e&&s(te),e&&s(H),me(F)}}}class ft extends Ae{constructor(t){super(),Ne(this,t,null,st,Pe,{})}}export{ft as default};
