"use strict";(self["webpackChunkionic_pwa"]=self["webpackChunkionic_pwa"]||[]).push([[515],{515:function(e,t,r){r.r(t),r.d(t,{GESTURE_CONTROLLER:function(){return n.G},createGesture:function(){return d}});var n=r(350);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(e,t,r,n)=>{const o=s(e)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let c,a;return e["__zone_symbol__addEventListener"]?(c="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(c="addEventListener",a="removeEventListener"),e[c](t,r,o),()=>{e[a](t,r,o)}},s=e=>{if(void 0===c)try{const t=Object.defineProperty({},"passive",{get:()=>{c=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(t){c=!1}return!!c};let c;const a=2e3,i=(e,t,r,n,s)=>{let c,i,l,d,v,m,p,y=0;const X=n=>{y=Date.now()+a,t(n)&&(!i&&r&&(i=o(e,"touchmove",r,s)),l||(l=o(n.target,"touchend",Y,s)),d||(d=o(n.target,"touchcancel",Y,s)))},h=n=>{y>Date.now()||t(n)&&(!m&&r&&(m=o(u(e),"mousemove",r,s)),p||(p=o(u(e),"mouseup",_,s)))},Y=e=>{f(),n&&n(e)},_=e=>{b(),n&&n(e)},f=()=>{i&&i(),l&&l(),d&&d(),i=l=d=void 0},b=()=>{m&&m(),p&&p(),m=p=void 0},g=()=>{f(),b()},T=(t=!0)=>{t?(c||(c=o(e,"touchstart",X,s)),v||(v=o(e,"mousedown",h,s))):(c&&c(),v&&v(),c=v=void 0,g())},E=()=>{T(!1),n=r=t=void 0};return{enable:T,stop:g,destroy:E}},u=e=>e instanceof Document?e:e.ownerDocument,l=(e,t,r)=>{const n=r*(Math.PI/180),o="x"===e,s=Math.cos(n),c=t*t;let a=0,i=0,u=!1,l=0;return{start(e,t){a=e,i=t,l=0,u=!0},detect(e,t){if(!u)return!1;const r=e-a,n=t-i,d=r*r+n*n;if(d<c)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture(){return 0!==l},getDirection(){return l}}},d=e=>{let t=!1,r=!1,o=!0,s=!1;const c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),a=c.canStart,u=c.onWillStart,d=c.onStart,y=c.onEnd,X=c.notCaptured,h=c.onMove,Y=c.threshold,_=c.passive,f=c.blurOnStart,b={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},g=l(c.direction,c.threshold,c.maxAngle),T=n.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),E=e=>{const t=p(e);return!(r||!o)&&(m(e,b),b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime=t,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=e,(!a||!1!==a(b))&&(T.release(),!!T.start()&&(r=!0,0===Y?L():(g.start(b.startX,b.startY),!0))))},w=e=>{t?!s&&o&&(s=!0,v(b,e),requestAnimationFrame(S)):(v(b,e),g.detect(b.currentX,b.currentY)&&(g.isGesture()&&L()||C()))},S=()=>{t&&(s=!1,h&&h(b))},L=()=>!(T&&!T.capture())&&(t=!0,o=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime,u?u(b).then(D):D(),!0),G=()=>{if("undefined"!==typeof document){const e=document.activeElement;null!==e&&e.blur&&e.blur()}},D=()=>{f&&G(),d&&d(b),o=!0},O=()=>{t=!1,r=!1,s=!1,o=!0,T.release()},k=e=>{const r=t,n=o;O(),n&&(v(b,e),r?y&&y(b):X&&X(b))},x=i(c.el,E,w,k,{capture:!1,passive:_}),C=()=>{O(),x.stop(),X&&X(b)};return{enable(e=!0){e||(t&&k(void 0),O()),x.enable(e)},destroy(){T.destroy(),x.destroy()}}},v=(e,t)=>{if(!t)return;const r=e.currentX,n=e.currentY,o=e.currentTime;m(t,e);const s=e.currentX,c=e.currentY,a=e.currentTime=p(t),i=a-o;if(i>0&&i<100){const t=(s-r)/i,o=(c-n)/i;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*o+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=c-e.startY,e.event=t},m=(e,t)=>{let r=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];r=e.clientX,n=e.clientY}else void 0!==e.pageX&&(r=e.pageX,n=e.pageY)}t.currentX=r,t.currentY=n},p=e=>e.timeStamp||Date.now()}}]);
//# sourceMappingURL=515.57545cc4.js.map