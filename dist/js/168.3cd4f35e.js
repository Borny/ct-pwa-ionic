"use strict";(self["webpackChunkionic_pwa_citytaps"]=self["webpackChunkionic_pwa_citytaps"]||[]).push([[168],{168:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=t=>{let e,n,i,v,p=10*-u,f=0;const L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,h=()=>void 0!==e&&null!==e.parentElement,E=t=>{p=(0,o.q)(t),b(t)},w=t=>{p=(0,o.q)(t),y(t)},g=t=>{const e=(0,o.q)(t)-u;p<e&&b(t)},k=t=>{const e=(0,o.q)(t)-u;p<e&&y(t)},q=t=>{y(t)},T=()=>{clearTimeout(v),v=void 0,n&&(_(!1),n=void 0)},b=t=>{n||h()||(e=void 0,S(s(t),t))},y=t=>{S(void 0,t)},S=(t,e)=>{if(t&&t===n)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,o.p)(e);if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(r)||C(n,i,s),_(!0)}if(t){const e=m.get(t);e&&(clearTimeout(e),m.delete(t));const n=a(t)?0:d;t.classList.remove(r),v=setTimeout((()=>{C(t,i,s),v=void 0}),n)}n=t},C=(t,e,n)=>{f=Date.now(),t.classList.add(r);const o=L&&c(t);o&&o.addRipple&&(R(),i=o.addRipple(e,n))},R=()=>{void 0!==i&&(i.then((t=>t())),i=void 0)},_=t=>{R();const e=n;if(!e)return;const o=l-Date.now()+f;if(t&&o>0&&!a(e)){const t=setTimeout((()=>{e.classList.remove(r),m.delete(e)}),l);m.set(e,t)}else e.classList.remove(r)},x=document;x.addEventListener("ionScrollStart",(t=>{e=t.target,T()})),x.addEventListener("ionScrollEnd",(()=>{e=void 0})),x.addEventListener("ionGestureCaptured",T),x.addEventListener("touchstart",E,!0),x.addEventListener("touchcancel",w,!0),x.addEventListener("touchend",w,!0),x.addEventListener("mousedown",g,!0),x.addEventListener("mouseup",k,!0),x.addEventListener("contextmenu",q,!0)},s=t=>{if(!t.composedPath)return t.target.closest(".ion-activatable");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const n=e[t];if(n.classList&&n.classList.contains("ion-activatable"))return n}}},a=t=>t.classList.contains("ion-activatable-instant"),c=t=>{if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=168.3cd4f35e.js.map