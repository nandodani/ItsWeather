/*! For license information please see 748.6969b1fa.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkits_weather=self.webpackChunkits_weather||[]).push([[748],{448:function(t,e,n){n.r(e),n.d(e,{GESTURE_CONTROLLER:function(){return i.G},createGesture:function(){return a}});var r,i=n(503),o=function(t,e,n,r){var i,o,c=u(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,n,c),function(){t[o](e,n,c)}},u=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(n){r=!1}return!!r},c=function(t){return t instanceof Document?t:t.ownerDocument},a=function(t){var e=!1,n=!1,r=!0,u=!1,a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),d=a.canStart,f=a.onWillStart,m=a.onStart,p=a.onEnd,h=a.notCaptured,y=a.onMove,X=a.threshold,Y=a.passive,_=a.blurOnStart,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},b=function(t,e,n){var r=n*(Math.PI/180),i="x"===t,o=Math.cos(r),u=e*e,c=0,a=0,s=!1,v=0;return{start:function(t,e){c=t,a=e,v=0,s=!0},detect:function(t,e){if(!s)return!1;var n=t-c,r=e-a,l=n*n+r*r;if(l<u)return!1;var d=Math.sqrt(l),f=(i?n:r)/d;return v=f>o?1:f<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==v},getDirection:function(){return v}}}(a.direction,a.threshold,a.maxAngle),T=i.G.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=function(){e&&(u=!1,y&&y(g))},w=function(){return!!T.capture()&&(e=!0,r=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,f?f(g).then(S):S(),!0)},S=function(){_&&function(){if("undefined"!==typeof document){var t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}}(),m&&m(g),r=!0},L=function(){e=!1,n=!1,u=!1,r=!0,T.release()},G=function(t){var n=e,i=r;L(),i&&(s(g,t),n?p&&p(g):h&&h(g))},D=function(t,e,n,r,i){var u,a,s,v,l,d,f,m=0,p=function(r){m=Date.now()+2e3,e(r)&&(!a&&n&&(a=o(t,"touchmove",n,i)),s||(s=o(r.target,"touchend",y,i)),v||(v=o(r.target,"touchcancel",y,i)))},h=function(r){m>Date.now()||e(r)&&(!d&&n&&(d=o(c(t),"mousemove",n,i)),f||(f=o(c(t),"mouseup",X,i)))},y=function(t){Y(),r&&r(t)},X=function(t){_(),r&&r(t)},Y=function(){a&&a(),s&&s(),v&&v(),a=s=v=void 0},_=function(){d&&d(),f&&f(),d=f=void 0},g=function(){Y(),_()},b=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(u&&u(),l&&l(),u=l=void 0,g()):(u||(u=o(t,"touchstart",p,i)),l||(l=o(t,"mousedown",h,i)))};return{enable:b,stop:g,destroy:function(){b(!1),r=n=e=void 0}}}(a.el,(function(t){var e=l(t);return!(n||!r)&&(v(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!d||!1!==d(g))&&(T.release(),!!T.start()&&(n=!0,0===X?w():(b.start(g.startX,g.startY),!0))))}),(function(t){e?!u&&r&&(u=!0,s(g,t),requestAnimationFrame(E)):(s(g,t),b.detect(g.currentX,g.currentY)&&(b.isGesture()&&w()||O()))}),G,{capture:!1,passive:Y}),O=function(){L(),D.stop(),h&&h(g)};return{enable:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t||(e&&G(void 0),L()),D.enable(t)},destroy:function(){T.destroy(),D.destroy()}}},s=function(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.currentTime;v(e,t);var o=t.currentX,u=t.currentY,c=(t.currentTime=l(e))-i;if(c>0&&c<100){var a=(o-n)/c,s=(u-r)/c;t.velocityX=.7*a+.3*t.velocityX,t.velocityY=.7*s+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=u-t.startY,t.event=e}},v=function(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r},l=function(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=748.6969b1fa.chunk.js.map