"use strict";(self["webpackChunkionic_pwa_citytaps"]=self["webpackChunkionic_pwa_citytaps"]||[]).push([[753],{753:function(n,e,t){t.r(e),t.d(e,{mdTransitionAnimation:function(){return o}});var i=t(980),a=t(26);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(n,e)=>{const t="40px",o="0px",r="back"===e.direction,s=e.enteringEl,c=e.leavingEl,l=(0,a.g)(s),d=l.querySelector("ion-toolbar"),u=(0,i.c)();if(u.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible"),r?u.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):u.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${t})`,`translateY(${o})`).fromTo("opacity",.01,1),d){const n=(0,i.c)();n.addElement(d),u.addAnimation(n)}if(c&&r){u.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,i.c)();n.addElement((0,a.g)(c)).onFinish((e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform",`translateY(${o})`,`translateY(${t})`).fromTo("opacity",1,0),u.addAnimation(n)}return u}}}]);
//# sourceMappingURL=753.3a379b40.js.map