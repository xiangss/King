(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-530aafa2"],{"0f04":function(t,e,i){},1276:function(t,e,i){"use strict";var n=i("e572"),o=i("e441"),s=i("9388"),a=i("65b9"),r=Object(n["a"])("popup"),c=r[0],h=r[1];e["a"]=c({mixins:[s["a"]],props:{round:Boolean,duration:Number,closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(i){return t.$emit(e,i)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var i=this.round,n=this.position,s=this.duration,r=this.transition||("center"===n?"van-fade":"van-popup-slide-"+n),c={};return Object(o["b"])(s)&&(c.transitionDuration=s+"s"),e("transition",{attrs:{name:r},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:c,class:h((t={round:i},t[n]=n,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(a["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:h("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},"16f5":function(t,e,i){"use strict";var n=i("46c0"),o=i("e572"),s=i("44dd"),a=i("e441");function r(t){return Array.isArray(t)?t:[t]}function c(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function h(t,e){return r(t).some((function(t){return t.size>e}))}var l=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function u(t){return l.test(t)}function d(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?u(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var f=i("65b9"),v=i("7595"),p=i("6e6d"),m=i("ab20"),g=i("49b8"),b=i("9388"),w=i("32fc"),y=i("69be"),S=i("f5a5"),O=i("9ee6"),x=Object(o["a"])("image-preview"),C=x[0],T=x[1];function I(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var $,z=C({mixins:[b["a"],w["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:T("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{value:function(){this.setActive(this.startPosition)},startPosition:function(t){this.setActive(t)}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var e=this;Object(g["c"])(t);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},o=n.offsetX,s=void 0===o?0:o,a=n.offsetY,r=void 0===a?0:a;i<300&&s<10&&r<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){var t=e.active;e.$emit("close",{index:t,url:e.images[t]}),e.asyncClose||e.$emit("input",!1),e.doubleClickTimer=null}),300))},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),n=window.innerWidth,o=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-o)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=I(t.touches)},onImageTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},n=i.offsetX,o=void 0===n?0:n;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||o||this.startZoom(t)},onImageTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&Object(g["c"])(t,!0),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(m["a"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(m["a"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var o=I(e),s=this.startScale*o/this.startDistance;this.scale=Object(m["a"])(s,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&Object(g["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:T("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:T("cover")},[e])},genImages:function(){var t=this,e=this.$createElement,i={loading:function(){return e(y["a"],{attrs:{type:"spinner"}})}};return e(S["a"],{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:T("swipe"),on:{change:this.setActive},nativeOn:{touchstart:this.onWrapperTouchStart,touchMove:g["c"],touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[this.images.map((function(n,o){return e(O["a"],[e(v["a"],{attrs:{src:n,fit:"contain",lazyLoad:t.lazyLoad},class:T("image"),scopedSlots:i,style:o===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])}},render:function(){var t=arguments[0];if(this.value)return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[T(),this.className]},[this.genImages(),this.genIndex(),this.genCover()])])}}),k={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1},j=function(){$=new(p["a"].extend(z))({el:document.createElement("div")}),document.body.appendChild($.$el),$.$on("change",(function(t){$.onChange&&$.onChange(t)}))},P=function(t,e){if(void 0===e&&(e=0),!a["d"]){$||j();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(n["a"])($,k,i),$.$once("input",(function(t){$.value=t})),i.onClose&&$.$once("close",i.onClose),$}};P.install=function(){p["a"].use(z)};var M=P,B=Object(o["a"])("uploader"),N=B[0],D=B[1];e["a"]=N({inheritAttrs:!1,model:{prop:"fileList"},props:{disabled:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:Number,default:Number.MAX_VALUE},maxCount:{type:Number,default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"}},computed:{previewSizeWithUnit:function(){return Object(s["a"])(this.previewSize)}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(n.then)return void n.then((function(){e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=h(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return c(t,e.resultType)}))).then((function(n){var o=t.map((function(t,e){var i={file:t};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(o,i)}))}else c(t,this.resultType).then((function(n){var o={file:t};n&&(o.content=n),e.onAfterRead(o,i)}))},onAfterRead:function(t,e){e?this.$emit("oversize",t,this.getDetail()):(this.resetInput(),this.$emit("input",[].concat(this.fileList,r(t))),this.afterRead&&this.afterRead(t,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(n.then)return void n.then((function(){i.deleteFile(t,e)})).catch(a["e"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return d(t)})),n=i.map((function(t){return t.content||t.url}));this.imagePreview=M({images:n,closeOnPopstate:!0,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}})}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},genPreviewItem:function(t,e){var i=this,n=this.$createElement,o=this.deletable&&n(f["a"],{attrs:{name:"clear"},class:D("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}}),s=d(t)?n(v["a"],{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,radius:4},class:D("preview-image"),on:{click:function(){i.onPreviewImage(t)}}}):n("div",{class:D("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[n(f["a"],{class:D("file-icon"),attrs:{name:"description"}}),n("div",{class:[D("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url])]);return n("div",{class:D("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[s,o])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)){var e,i=this.slots(),o=t("input",{attrs:Object(n["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:D("input"),on:{change:this.onChange}});if(i)return t("div",{class:D("input-wrapper")},[i,o]);if(this.previewSize){var s=this.previewSizeWithUnit;e={width:s,height:s}}return t("div",{class:D("upload"),style:e},[t(f["a"],{attrs:{name:"plus"},class:D("upload-icon")}),this.uploadText&&t("span",{class:D("upload-text")},[this.uploadText]),o])}}},render:function(){var t=arguments[0];return t("div",{class:D()},[t("div",{class:D("wrapper")},[this.genPreviewList(),this.genUpload()])])}})},"2cf7":function(t,e,i){},4487:function(t,e,i){"use strict";i("1dea"),i("c18c"),i("6ba8"),i("0f04"),i("e2ab"),i("2cf7"),i("71d5")},"6ba8":function(t,e,i){},"71d5":function(t,e,i){},9388:function(t,e,i){"use strict";var n={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},o=i("32fc"),s=i("6e6d");function a(t){return"string"===typeof t?document.querySelector(t):t()}function r(t){var e=t.ref,i=t.afterPortal;return s["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,n=this.getContainer,o=e?this.$refs[e]:this.$el;n?t=a(n):this.$parent&&(t=this.$parent.$el),t&&t!==o.parentNode&&t.appendChild(o),i&&i.call(this)}}})}var c=i("49b8"),h=i("db7a"),l=s["a"].extend({mixins:[Object(h["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?c["b"]:c["a"];e(window,"popstate",this.close)}}}}),u=i("46c0"),d=i("23c4"),f=i.n(d),v=i("e572"),p=i("e441"),m=i("0dbe"),g=Object(v["a"])("overlay"),b=g[0],w=g[1];function y(t){Object(c["c"])(t,!0)}function S(t,e,i,n){var o=Object(u["a"])({zIndex:e.zIndex},e.customStyle);return Object(p["b"])(e.duration)&&(o.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",f()([{directives:[{name:"show",value:e.show}],style:o,class:[w(),e.className],on:{touchmove:y}},Object(m["b"])(n,!0)]),[i.default&&i.default()])])}S.props={show:Boolean,duration:[Number,String],className:null,customStyle:Object,zIndex:{type:[Number,String],default:1}};var O,x=b(S),C={className:"",customStyle:{}};function T(){if(n.top){var t=n.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function I(){if(O||(O=Object(m["c"])(x,{on:{click:T}})),n.top){var t=n.top,e=t.vm,i=t.config,o=e.$el;o&&o.parentNode?o.parentNode.insertBefore(O.$el,o):document.body.appendChild(O.$el),Object(u["a"])(O,C,i,{show:!0})}else O.show=!1}function $(t,e){n.stack.some((function(e){return e.vm===t}))||(n.stack.push({vm:t,config:e}),I())}function z(t){var e=n.stack;e.length&&(n.top.vm===t?(e.pop(),I()):n.stack=e.filter((function(e){return e.vm!==t})))}var k=i("c5ec");i.d(e,"a",(function(){return j}));var j={mixins:[o["a"],l,r({afterPortal:function(){this.overlay&&I()}})],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(n.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(c["b"])(document,"touchstart",this.touchStart),Object(c["b"])(document,"touchmove",this.onTouchMove),n.lockCount||document.body.classList.add("van-overflow-hidden"),n.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(n.lockCount--,Object(c["a"])(document,"touchstart",this.touchStart),Object(c["a"])(document,"touchmove",this.onTouchMove),n.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,z(this),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",i=Object(k["b"])(t.target,this.$el),n=i.scrollHeight,o=i.offsetHeight,s=i.scrollTop,a="11";0===s?a=o>=n?"00":"01":s+o>=n&&(a="10"),"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||Object(c["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?$(t,{zIndex:n.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):z(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++n.zIndex+t}}}},"9ee6":function(t,e,i){"use strict";var n=i("46c0"),o=i("e572"),s=Object(o["a"])("swipe-item"),a=s[0],r=s[1];e["a"]=a({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],e=this.$parent,i=e.vertical,o=e.computedWidth,s=e.computedHeight,a={width:o+"px",height:i?s+"px":"100%",transform:"translate"+(i?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:r(),style:a,on:Object(n["a"])({},this.$listeners)},[this.slots()])}})},c5ec:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return c})),i.d(e,"a",(function(){return h}));var n=/scroll|auto/i;function o(t,e){void 0===e&&(e=window);var i=t;while(i&&"HTML"!==i.tagName&&1===i.nodeType&&i!==e){var o=window.getComputedStyle(i),s=o.overflowY;if(n.test(s)){if("BODY"!==i.tagName)return i;var a=window.getComputedStyle(i.parentNode),r=a.overflowY;if(n.test(r))return i}i=i.parentNode}return e}function s(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function a(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function r(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function c(t){a(window,t),a(document.body,t)}function h(t){return(t===window?0:t.getBoundingClientRect().top)+r()}},cf5a:function(t,e,i){"use strict";i("1dea"),i("c18c"),i("6ba8")},d81c:function(t,e,i){"use strict";(function(t){i.d(e,"c",(function(){return h})),i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return u}));var n=i("e441"),o=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-o)),n=setTimeout(t,i);return o=e+i,n}var a=n["d"]?t:window,r=a.requestAnimationFrame||s,c=a.cancelAnimationFrame||a.clearTimeout;function h(t){return r.call(a,t)}function l(t){h((function(){h(t)}))}function u(t){c.call(a,t)}}).call(this,i("7bc3"))},db7a:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("49b8");function o(t){function e(){this.binded||(t.call(this,n["b"],!0),this.binded=!0)}function i(){this.binded&&(t.call(this,n["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:i,beforeDestroy:i}}},e2ab:function(t,e,i){},f5a5:function(t,e,i){"use strict";var n=i("e572"),o=i("49b8"),s=i("32fc"),a=i("db7a"),r=i("d81c"),c=i("ab20"),h=Object(n["a"])("swipe"),l=h[0],u=h[1];e["a"]=l({mixins:[s["a"],Object(a["a"])((function(t,e){t(window,"resize",this.onResize,!0),e?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var e=this.$el.getBoundingClientRect();this.computedWidth=this.width||e.width,this.computedHeight=this.height||e.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(o["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count;return t?this.loop?Object(c["a"])(e+t,-1,i):Object(c["a"])(e+t,0,i-1):e},getTargetOffset:function(t,e){var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=Math.round(e-i);return this.loop||(n=Object(c["a"])(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,o=void 0===n?0:n,s=t.emitChange,a=this.loop,r=this.count,c=this.active,h=this.swipes,l=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(i),f=this.getTargetOffset(d,o);if(a){if(h[0]){var v=f<u;h[0].offset=v?l:0}if(h[r-1]){var p=f>0;h[r-1].offset=p?-l:0}}this.active=d,this.offset=f,s&&d!==c&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(r["b"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,i.move({pace:n-i.active,emitChange:!0}),e.immediate?Object(r["b"])((function(){i.swiping=!1})):i.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(r["b"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,o=this.slots("indicator");return o||(this.showIndicators&&i>1?e("div",{class:u("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,o){return e("i",{class:u("indicator",{active:o===n}),style:o===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:u()},[t("div",{ref:"track",style:this.trackStyle,class:u("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.genIndicator()])}})}}]);
//# sourceMappingURL=chunk-530aafa2.4815d249.js.map