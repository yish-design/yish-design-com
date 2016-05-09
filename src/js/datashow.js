!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.DataShow=e()}(this,function(){return window.DataShow=function(t){"use strict";function e(e){this.docElem=t.document.documentElement,this.options=this.extend(this.defaults,e),this.styleBank={},1==this.options.init&&this.init()}var i=1,o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}();return e.prototype={defaults:{after:"0s",enter:"bottom",move:"24px",over:"0.66s",easing:"ease-in-out",opacity:0,viewportFactor:.33,reset:!1,init:!0},init:function(){this.scrolled=!1;var e=this;this.elems=Array.prototype.slice.call(this.docElem.querySelectorAll("[data-show]")),this.elems.forEach(function(t){var o=t.getAttribute("data-show-id");o||(o=i++,t.setAttribute("data-show-id",o)),e.styleBank[o]||(e.styleBank[o]=t.getAttribute("style")),e.update(t)});var n=function(){e.scrolled||(e.scrolled=!0,o(function(){e._scrollPage()}))},r=function(){function t(){e._scrollPage(),e.resizeTimeout=null}e.resizeTimeout&&clearTimeout(e.resizeTimeout),e.resizeTimeout=setTimeout(t,200)};t.addEventListener("scroll",n,!1),t.addEventListener("resize",r,!1)},_scrollPage:function(){var t=this;this.elems.forEach(function(e){t.update(e)}),this.scrolled=!1},parseLanguage:function(t){function e(t){var e=[],i=["from","the","and","then","but","with"];return t.forEach(function(t){i.indexOf(t)>-1||e.push(t)}),e}var i=t.getAttribute("data-show").split(/[, ]+/),o={};return i=e(i),i.forEach(function(t,e){switch(t){case"enter":return void(o.enter=i[e+1]);case"after":return void(o.after=i[e+1]);case"wait":return void(o.after=i[e+1]);case"move":return void(o.move=i[e+1]);case"ease":return o.move=i[e+1],void(o.ease="ease");case"ease-in":return o.move=i[e+1],void(o.easing="ease-in");case"ease-in-out":return o.move=i[e+1],void(o.easing="ease-in-out");case"ease-out":return o.move=i[e+1],void(o.easing="ease-out");case"over":return void(o.over=i[e+1]);default:return}}),o},update:function(t){var e=this.genCSS(t),i=this.styleBank[t.getAttribute("data-show-id")];return null!=i?i+=";":i="",t.getAttribute("data-show-initialized")||(t.setAttribute("style",i+e.initial),t.setAttribute("data-show-initialized",!0)),this.isElementInViewport(t,this.options.viewportFactor)?t.getAttribute("data-show-complete")?void 0:this.isElementInViewport(t,this.options.viewportFactor)?(t.setAttribute("style",i+e.target+e.transition),void(this.options.reset||setTimeout(function(){""!=i?t.setAttribute("style",i):t.removeAttribute("style"),t.setAttribute("data-show-complete",!0)},e.totalDuration))):void 0:void(this.options.reset&&t.setAttribute("style",i+e.initial+e.reset))},genCSS:function(t){var e,i,o=this.parseLanguage(t);o.enter?(("top"==o.enter||"bottom"==o.enter)&&(e=o.enter,i="y"),("left"==o.enter||"right"==o.enter)&&(e=o.enter,i="x")):(("top"==this.options.enter||"bottom"==this.options.enter)&&(e=this.options.enter,i="y"),("left"==this.options.enter||"right"==this.options.enter)&&(e=this.options.enter,i="x")),("top"==e||"left"==e)&&(o.move=o.move?"-"+o.move:"-"+this.options.move);var n=o.move||this.options.move,r=o.over||this.options.over,s=o.after||this.options.after,a=o.easing||this.options.easing,u=o.opacity||this.options.opacity,c="-webkit-transition: -webkit-transform "+r+" "+a+" "+s+",  opacity "+r+" "+a+" "+s+";transition: transform "+r+" "+a+" "+s+", opacity "+r+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",f="-webkit-transition: -webkit-transform "+r+" "+a+" 0s,  opacity "+r+" "+a+" "+s+";transition: transform "+r+" "+a+" 0s,  opacity "+r+" "+a+" "+s+";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",l="-webkit-transform: translate"+i+"("+n+");transform: translate"+i+"("+n+");opacity: "+u+";",p="-webkit-transform: translate"+i+"(0);transform: translate"+i+"(0);opacity: 1;";return{transition:c,initial:l,target:p,reset:f,totalDuration:1e3*(parseFloat(r)+parseFloat(s))}},getViewportH:function(){var e=this.docElem.clientHeight,i=t.innerHeight;return i>e?i:e},getOffset:function(t){var e=0,i=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i}},isElementInViewport:function(e,i){var o=t.pageYOffset,n=o+this.getViewportH(),r=e.offsetHeight,s=this.getOffset(e).top,a=s+r,i=i||0;return n>=s+r*i&&a>=o||"fixed"==(e.currentStyle?e.currentStyle:t.getComputedStyle(e,null)).position},extend:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}},e}(window),DataShow});