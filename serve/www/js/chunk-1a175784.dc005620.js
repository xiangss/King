(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a175784"],{"04b5":function(t,e,a){},"2e6b":function(t,e,a){"use strict";a("1dea"),a("c18c")},"2e9a":function(t,e,a){},"4a62":function(t,e,a){"use strict";a("1dea"),a("6ba8"),a("c18c"),a("2e9a")},"63f7":function(t,e,a){"use strict";function n(t,e){var a=e.to,n=e.url,i=e.replace;if(a&&t){var o=t[i?"replace":"push"](a);o&&o.catch&&o.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else n&&(i?location.replace(n):location.href=n)}function i(t){n(t.parent&&t.parent.$router,t.props)}a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return o}));var o={url:String,replace:Boolean,to:[String,Object]}},"83f6":function(t,e,a){"use strict";var n=a("46c0"),i=a("23c4"),o=a.n(i),c=a("e572"),s=a("0dbe"),r=a("7f9d"),l=a("63f7"),d=a("65b9"),u=a("69be"),f=Object(c["a"])("button"),p=f[0],v=f[1];function m(t,e,a,n){var i,c=e.tag,f=e.icon,p=e.type,m=e.color,h=e.plain,g=e.disabled,b=e.loading,y=e.hairline,C=e.loadingText,k={};function O(t){b||g||(Object(s["a"])(n,"click",t),Object(l["a"])(n))}function x(t){Object(s["a"])(n,"touchstart",t)}m&&(k.color=h?m:r["i"],h||(k.background=m),-1!==m.indexOf("gradient")?k.border=0:k.borderColor=m);var S=[v([p,e.size,{plain:h,disabled:g,hairline:y,block:e.block,round:e.round,square:e.square}]),(i={},i[r["d"]]=y,i)];function j(){var n,i=[];return b?i.push(t(u["a"],{class:v("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):f&&i.push(t(d["a"],{attrs:{name:f},class:v("icon")})),n=b?C:a.default?a.default():e.text,n&&i.push(t("span",{class:v("text")},[n])),i}return t(c,o()([{style:k,class:S,attrs:{type:e.nativeType,disabled:g},on:{click:O,touchstart:x}},Object(s["b"])(n)]),[j()])}m.props=Object(n["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=p(m)},8702:function(t,e,a){"use strict";a.r(e);var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"idcard"}},[a("div",{staticClass:"idcar"},[a("div",{staticClass:"face"},[a("p",[t._v("身份证人像正面")]),a("span",[t._v("+")]),a("img",{attrs:{src:t.face,alt:""}}),a("van-uploader",{staticClass:"car",attrs:{"after-read":t.afterReadface}})],1),a("div",{staticClass:"noface"},[a("p",[t._v("身份证国徽面")]),a("span",[t._v("+")]),a("img",{attrs:{src:t.noface,alt:""}}),a("van-uploader",{staticClass:"car",attrs:{"after-read":t.afterReadnoface}})],1),a("div",{staticClass:"info"},[a("p",{on:{click:t.showName}},[t._v("姓名"),a("span",{class:{tactive:!t.name,tactived:t.name}},[t._v(t._s(t.name?t.name:"请输入"))])]),a("p",{on:{click:t.showId}},[t._v("身份证号"),a("span",{class:{tactive:!t.idinfo,tactived:t.idinfo}},[t._v(t._s(t.idinfo?t.idinfo:"请输入"))])])])]),a("van-button",{staticClass:"next",attrs:{type:"warning"},on:{click:t.nextAction}},[t._v("下一步")]),a("van-popup",{staticClass:"nameflag",attrs:{closeable:""},model:{value:t.nameflag,callback:function(e){t.nameflag=e},expression:"nameflag"}},[a("div",{staticClass:"callmain"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("van-button",{staticClass:"namebtn",attrs:{type:"info"},on:{click:t.namebtn}},[t._v("确定")])],1)]),a("van-popup",{staticClass:"idflag",attrs:{closeable:""},model:{value:t.idflag,callback:function(e){t.idflag=e},expression:"idflag"}},[a("div",{staticClass:"callmain"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.idinfo,expression:"idinfo"}],attrs:{type:"text"},domProps:{value:t.idinfo},on:{input:function(e){e.target.composing||(t.idinfo=e.target.value)}}}),a("van-button",{staticClass:"idbtn",attrs:{type:"info"},on:{click:t.idbtn}},[t._v("确定")])],1)])],1)},o=[],c=(a("f972"),a("e4e2")),s=(a("4a62"),a("b427")),r=(a("2e6b"),a("83f6")),l=(a("cf5a"),a("1276")),d=(a("4487"),a("16f5")),u={components:(n={},Object(c["a"])(n,d["a"].name,d["a"]),Object(c["a"])(n,l["a"].name,l["a"]),Object(c["a"])(n,r["a"].name,r["a"]),Object(c["a"])(n,s["a"].name,s["a"]),n),data:function(){return{face:"",noface:"",nameflag:!1,idflag:!1,name:"",idinfo:""}},methods:{afterReadface:function(t){var e=t.content;this.face=e},afterReadnoface:function(t){var e=t.content;this.noface=e},nextAction:function(){var t={};this.face&&this.noface&&this.name&&this.idinfo?(t.identityCardF=this.face,t.identityCardR=this.noface,t.cname=this.name,t.identityCardNumber=this.idinfo,this.$router.push({name:"infomation"}),this.$store.commit("credit/changeActive",0),this.$store.commit("credit/changeSaveinfolist",t)):Object(s["a"])("请输入完整！")},namebtn:function(){this.nameflag=!1},showName:function(){this.nameflag=!0},idbtn:function(){this.idflag=!1},showId:function(){this.idflag=!0}},created:function(){this.face=this.$store.state.credit.saveinfolist.identityCardF,this.noface=this.$store.state.credit.saveinfolist.identityCardF,this.name=this.$store.state.credit.saveinfolist.cname,this.idinfo=this.$store.state.credit.saveinfolist.identityCardNumber}},f=u,p=(a("9d9e"),a("4e82")),v=Object(p["a"])(f,i,o,!1,null,"26a1bfca",null);e["default"]=v.exports},"9d9e":function(t,e,a){"use strict";var n=a("04b5"),i=a.n(n);i.a},b427:function(t,e,a){"use strict";var n=a("46c0"),i=a("6e6d"),o=a("e572"),c=a("e441"),s=a("9388"),r=a("65b9"),l=a("69be"),d=Object(o["a"])("toast"),u=d[0],f=d[1],p=u({mixins:[s["a"]],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;if(this.clickable!==t){this.clickable=t;var e=t?"add":"remove";document.body.classList[e]("van-toast--unclickable")}},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,a=this.type,n=this.iconPrefix,i=this.loadingType,o=e||"success"===a||"fail"===a;return o?t(r["a"],{class:f("icon"),attrs:{classPrefix:n,name:e||a}}):"loading"===a?t(l["a"],{class:f("loading"),attrs:{type:i}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,a=this.message;if(Object(c["b"])(a)&&""!==a)return"html"===e?t("div",{class:f("text"),domProps:{innerHTML:a}}):t("div",{class:f("text")},[a])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[f([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),v={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},m={},h=[],g=!1,b=Object(n["a"])({},v);function y(t){return Object(c["c"])(t)?t:{message:t}}function C(){if(c["d"])return{};if(!h.length||g){var t=new(i["a"].extend(p))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),h.push(t)}return h[h.length-1]}function k(t){return Object(n["a"])({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function O(t){void 0===t&&(t={});var e=C();return e.value&&e.updateZIndex(),t=y(t),t=Object(n["a"])({},b,{},m[t.type||b.type],{},t),t.clear=function(){e.value=!1,t.onClose&&t.onClose(),g&&!c["d"]&&e.$on("closed",(function(){clearTimeout(e.timer),h=h.filter((function(t){return t!==e}));var t=e.$el.parentNode;t&&t.removeChild(e.$el),e.$destroy()}))},Object(n["a"])(e,k(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var x=function(t){return function(e){return O(Object(n["a"])({type:t},y(e)))}};["loading","success","fail"].forEach((function(t){O[t]=x(t)})),O.clear=function(t){h.length&&(t?(h.forEach((function(t){t.clear()})),h=[]):g?h.shift().clear():h[0].clear())},O.setDefaultOptions=function(t,e){"string"===typeof t?m[t]=e:Object(n["a"])(b,t)},O.resetDefaultOptions=function(t){"string"===typeof t?m[t]=null:(b=Object(n["a"])({},v),m={})},O.allowMultiple=function(t){void 0===t&&(t=!0),g=t},O.install=function(){i["a"].use(p)},i["a"].prototype.$toast=O;e["a"]=O}}]);
//# sourceMappingURL=chunk-1a175784.dc005620.js.map