(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbd3c7e4"],{1276:function(t,e,n){"use strict";var o=n("e572"),i=n("e441"),a=n("9388"),s=n("65b9"),c=Object(o["a"])("popup"),r=c[0],l=c[1];e["a"]=r({mixins:[a["a"]],props:{round:Boolean,duration:Number,closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,o=this.position,a=this.duration,c=this.transition||("center"===o?"van-fade":"van-popup-slide-"+o),r={};return Object(i["b"])(a)&&(r.transitionDuration=a+"s"),e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:r,class:l((t={round:n},t[o]=o,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(s["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})},"2f70":function(t,e,n){"use strict";var o,i=n("46c0"),a=n("6e6d"),s=n("e572"),c=n("44dd"),r=n("7f9d"),l=n("9388"),u=n("83f6"),d=Object(s["a"])("dialog"),h=d[0],f=d[1],p=d[2],v=h({mixins:[l["a"]],props:{title:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")}},render:function(){var t,e,n=this,o=arguments[0];if(this.shouldRender){var i=this.message,a=this.messageAlign,s=this.slots(),l=this.slots("title")||this.title,d=l&&o("div",{class:f("header",{isolated:!i&&!s})},[l]),h=(s||i)&&o("div",{class:f("content")},[s||o("div",{domProps:{innerHTML:i},class:f("message",(t={"has-title":l},t[a]=a,t))})]),v=this.showCancelButton&&this.showConfirmButton,m=o("div",{class:[r["e"],f("footer",{buttons:v})]},[this.showCancelButton&&o(u["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||p("cancel")},class:f("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&o(u["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||p("confirm")},class:[f("confirm"),(e={},e[r["c"]]=v,e)],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})]);return o("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[o("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||i},class:[f(),this.className],style:{width:Object(c["a"])(this.width)}},[d,h,m])])}}}),m=n("e441");function b(t){return document.body.contains(t)}function g(){o&&o.$destroy(),o=new(a["a"].extend(v))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function y(t){return m["d"]?Promise.resolve():new Promise((function(e,n){o&&b(o.$el)||g(),Object(i["a"])(o,y.currentOptions,t,{resolve:e,reject:n})}))}y.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},y.alert=y,y.confirm=function(t){return y(Object(i["a"])({showCancelButton:!0},t))},y.close=function(){o&&(o.value=!1)},y.setDefaultOptions=function(t){Object(i["a"])(y.currentOptions,t)},y.resetDefaultOptions=function(){y.currentOptions=Object(i["a"])({},y.defaultOptions)},y.resetDefaultOptions(),y.install=function(){a["a"].use(v)},y.Component=v,a["a"].prototype.$dialog=y;e["a"]=y},"63f7":function(t,e,n){"use strict";function o(t,e){var n=e.to,o=e.url,i=e.replace;if(n&&t){var a=t[i?"replace":"push"](n);a&&a.catch&&a.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else o&&(i?location.replace(o):location.href=o)}function i(t){o(t.parent&&t.parent.$router,t.props)}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return a}));var a={url:String,replace:Boolean,to:[String,Object]}},"6ba8":function(t,e,n){},"83f6":function(t,e,n){"use strict";var o=n("46c0"),i=n("23c4"),a=n.n(i),s=n("e572"),c=n("0dbe"),r=n("7f9d"),l=n("63f7"),u=n("65b9"),d=n("69be"),h=Object(s["a"])("button"),f=h[0],p=h[1];function v(t,e,n,o){var i,s=e.tag,h=e.icon,f=e.type,v=e.color,m=e.plain,b=e.disabled,g=e.loading,y=e.hairline,w=e.loadingText,k={};function C(t){g||b||(Object(c["a"])(o,"click",t),Object(l["a"])(o))}function O(t){Object(c["a"])(o,"touchstart",t)}v&&(k.color=m?v:r["i"],m||(k.background=v),-1!==v.indexOf("gradient")?k.border=0:k.borderColor=v);var x=[p([f,e.size,{plain:m,disabled:b,hairline:y,block:e.block,round:e.round,square:e.square}]),(i={},i[r["d"]]=y,i)];function B(){var o,i=[];return g?i.push(t(d["a"],{class:p("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):h&&i.push(t(u["a"],{attrs:{name:h},class:p("icon")})),o=g?w:n.default?n.default():e.text,o&&i.push(t("span",{class:p("text")},[o])),i}return t(s,a()([{style:k,class:x,attrs:{type:e.nativeType,disabled:b},on:{click:C,touchstart:O}},Object(c["b"])(o)]),[B()])}v.props=Object(o["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=f(v)},9388:function(t,e,n){"use strict";var o={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},i=n("32fc"),a=n("6e6d");function s(t){return"string"===typeof t?document.querySelector(t):t()}function c(t){var e=t.ref,n=t.afterPortal;return a["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,o=this.getContainer,i=e?this.$refs[e]:this.$el;o?t=s(o):this.$parent&&(t=this.$parent.$el),t&&t!==i.parentNode&&t.appendChild(i),n&&n.call(this)}}})}var r=n("49b8"),l=n("db7a"),u=a["a"].extend({mixins:[Object(l["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?r["b"]:r["a"];e(window,"popstate",this.close)}}}}),d=n("46c0"),h=n("23c4"),f=n.n(h),p=n("e572"),v=n("e441"),m=n("0dbe"),b=Object(p["a"])("overlay"),g=b[0],y=b[1];function w(t){Object(r["c"])(t,!0)}function k(t,e,n,o){var i=Object(d["a"])({zIndex:e.zIndex},e.customStyle);return Object(v["b"])(e.duration)&&(i.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",f()([{directives:[{name:"show",value:e.show}],style:i,class:[y(),e.className],on:{touchmove:w}},Object(m["b"])(o,!0)]),[n.default&&n.default()])])}k.props={show:Boolean,duration:[Number,String],className:null,customStyle:Object,zIndex:{type:[Number,String],default:1}};var C,O=g(k),x={className:"",customStyle:{}};function B(){if(o.top){var t=o.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function S(){if(C||(C=Object(m["c"])(O,{on:{click:B}})),o.top){var t=o.top,e=t.vm,n=t.config,i=e.$el;i&&i.parentNode?i.parentNode.insertBefore(C.$el,i):document.body.appendChild(C.$el),Object(d["a"])(C,x,n,{show:!0})}else C.show=!1}function $(t,e){o.stack.some((function(e){return e.vm===t}))||(o.stack.push({vm:t,config:e}),S())}function j(t){var e=o.stack;e.length&&(o.top.vm===t?(e.pop(),S()):o.stack=e.filter((function(e){return e.vm!==t})))}var A=n("c5ec");n.d(e,"a",(function(){return z}));var z={mixins:[i["a"],u,c({afterPortal:function(){this.overlay&&S()}})],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(r["b"])(document,"touchstart",this.touchStart),Object(r["b"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(o.lockCount--,Object(r["a"])(document,"touchstart",this.touchStart),Object(r["a"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,j(this),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(A["b"])(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,a=n.scrollTop,s="11";0===a?s=i>=o?"00":"01":a+i>=o&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(e,2)||Object(r["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?$(t,{zIndex:o.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):j(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++o.zIndex+t}}}},"974d":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"backBtn",on:{click:t.backAction}},[n("van-icon",{attrs:{name:"arrow-left"}})],1),n("div",{staticClass:"slideBox"},[n("span",{staticClass:"slideItem",class:{active:1==t.slider},attrs:{slide:t.slider},on:{click:function(e){return t.sliderAction(1)}}},[t._v("验证码登陆/注册")]),n("span",{staticClass:"slideItem",class:{active:2==t.slider},attrs:{slide:t.slider},on:{click:function(e){return t.sliderAction(2)}}},[t._v("密码登陆")])]),1==t.slider?n("div",{staticClass:"loginBox"},[n("p",[t._v("手机号")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.phone,expression:"phone",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.phone},on:{change:function(e){t.phone=e.target.value}}}),n("hr"),n("p",[t._v("验证码")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.value,expression:"value",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.value},on:{change:function(e){t.value=e.target.value}}}),n("span",{ref:"code",on:{click:t.codeAction}},[t._v("获取验证码")]),n("hr"),n("p",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.readDoc,expression:"readDoc"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.readDoc)?t._i(t.readDoc,null)>-1:t.readDoc},on:{change:function(e){var n=t.readDoc,o=e.target,i=!!o.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);o.checked?s<0&&(t.readDoc=n.concat([a])):s>-1&&(t.readDoc=n.slice(0,s).concat(n.slice(s+1)))}else t.readDoc=i}}}),t._v("我已阅读并同意 "),n("span",[t._v("《用户服务条款》")])]),n("p",{staticClass:"btn",on:{click:t.LoginAction}},[t._v("登陆")])]):n("div",{staticClass:"loginBox"},[n("p",[t._v("手机号")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.phone,expression:"phone",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.phone},on:{change:function(e){t.phone=e.target.value}}}),n("hr"),n("p",[t._v("密码")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.value,expression:"value",modifiers:{lazy:!0}}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.value},on:{change:function(e){t.value=e.target.value}}}),n("hr"),n("p",{staticClass:"forgetPassword",on:{click:t.findPasswordAction}},[t._v("忘记密码?")]),n("p",{staticClass:"btn dark",on:{click:t.LoginAction}},[t._v("登陆")])]),n("forgetPass",{ref:"forgetPass"})],1)},i=[],a=(n("245d"),n("63ff"),n("cf5a"),n("1276")),s=(n("c6a9"),n("2f70")),c=(n("2d28"),n("65b9")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{staticClass:"box",style:{height:"20%",width:"80%"},attrs:{round:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("h3",[t._v("登陆失败")]),n("span",[t._v("密码错误，重置密码？")]),n("p",{staticClass:"Actions"},[n("span",{on:{click:t.cancleAction}},[t._v("残忍离开")]),n("span",{staticClass:"middle"},[t._v("|")]),n("span",{staticClass:"right",on:{click:t.comfirmAction}},[t._v("重置密码")])])])},l=[],u={components:{"van-popup":a["a"]},data:function(){return{show:!1}},methods:{cancleAction:function(){this.show=!1},comfirmAction:function(){this.$router.push("/resetPassword")}}},d=u,h=(n("dcc8"),n("4e82")),f=Object(h["a"])(d,r,l,!1,null,"4bb11219",null),p=f.exports,v={data:function(){return{slider:1,checked:!0,phone:"",readDoc:!1,value:"",password:""}},computed:{type:function(){return 1==this.slider?"code":"password"}},components:{Icon:c["a"],Dialog:s["a"],"van-popup":a["a"],forgetPass:p},methods:{backAction:function(){this.$router.back()},sliderAction:function(t){this.slider=t},codeAction:function(){if(this.phone){if(!/^1[3456789]\d{9}$/.test(this.phone))return Object(s["a"])({message:"手机号码有误",width:"320px",className:"dialog"}),!1;this.$store.dispatch("kevin/sendCode",this.phone),this.$refs.code.innerText="60s";var t=59,e=this;clearInterval(n);var n=setInterval((function(){e.$refs.code.innerText="".concat(t--,"s"),0===t&&(e.$refs.code.innerText="点击重新获取",clearInterval(n))}),1e3)}else Object(s["a"])({message:"请输入手机号码",width:"320px",className:"dialog"})},LoginAction:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if("type"!==this.type){t.next=7;break}if(this.readDoc){t.next=4;break}return Object(s["a"])({message:"请阅读服务条款",width:"320px",className:"dialog"}),t.abrupt("return");case 4:if(this.value){t.next=7;break}return Object(s["a"])({message:"请输入验证码",width:"320px",className:"dialog"}),t.abrupt("return");case 7:return t.next=9,regeneratorRuntime.awrap(this.$store.dispatch("kevin/logAction",{tel:this.phone,type:this.type,value:this.value}));case 9:0==this.$store.state.kevin.code?(this.$store.commit("setisLogin",1),this.$store.state.kevin.isLogin=1,this.$router.push("/mine")):Object(s["a"])({message:"code"==this.type?"验证码不正确":"密码不正确",width:"320px",className:"dialog"});case 10:case"end":return t.stop()}}),null,this)},findPasswordAction:function(){this.$refs.forgetPass.show=!0}},created:function(){this.$store.state.kevin.isRegiester?this.slider=2:this.slider=1}},m=v,b=(n("b27f"),Object(h["a"])(m,o,i,!1,null,"07037e5a",null));e["default"]=b.exports},a4bf:function(t,e,n){},b27f:function(t,e,n){"use strict";var o=n("d188"),i=n.n(o);i.a},c5ec:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return l}));var o=/scroll|auto/i;function i(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&1===n.nodeType&&n!==e){var i=window.getComputedStyle(n),a=i.overflowY;if(o.test(a)){if("BODY"!==n.tagName)return n;var s=window.getComputedStyle(n.parentNode),c=s.overflowY;if(o.test(c))return n}n=n.parentNode}return e}function a(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function s(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function c(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function r(t){s(window,t),s(document.body,t)}function l(t){return(t===window?0:t.getBoundingClientRect().top)+c()}},c6a9:function(t,e,n){"use strict";n("1dea"),n("6ba8"),n("c18c"),n("a4bf")},c8d0:function(t,e,n){},cf5a:function(t,e,n){"use strict";n("1dea"),n("c18c"),n("6ba8")},d188:function(t,e,n){},db7a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("49b8");function i(t){function e(){this.binded||(t.call(this,o["b"],!0),this.binded=!0)}function n(){this.binded&&(t.call(this,o["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:n,beforeDestroy:n}}},dcc8:function(t,e,n){"use strict";var o=n("c8d0"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-dbd3c7e4.e220b288.js.map