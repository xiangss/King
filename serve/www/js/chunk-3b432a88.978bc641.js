(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b432a88"],{"66d3":function(t,e,n){"use strict";n.r(e);var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"saveuserinfo"}},[n("Userinfomation",{attrs:{infolist:t.userinfomation}}),n("div",{staticClass:"save"},[n("van-button",{staticClass:"next",attrs:{type:"warning"},on:{click:t.nextAction}},[t._v("保存")])],1)],1)},s=[],r=(n("f972"),n("245d"),n("63ff"),n("e4e2")),c=(n("4a62"),n("b427")),o=(n("2e6b"),n("83f6")),u=n("7584"),f={components:(a={Userinfomation:u["a"]},Object(r["a"])(a,o["a"].name,o["a"]),Object(r["a"])(a,c["a"].name,c["a"]),a),data:function(){return{userinfomation:{}}},methods:{nextAction:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$store.dispatch("credit/saveInfomation"));case 2:0==this.$store.state.credit.code?(this.$store.commit("credit/changeMark",645),Object(c["a"])("保存成功！"),setTimeout((function(){t.$router.push({name:"credit"})}),2e3)):Object(c["a"])("出现异常!");case 3:case"end":return e.stop()}}),null,this)}},created:function(){this.userinfomation=this.$store.getters["credit/infonlist"]}},d=f,m=(n("e25c"),n("4e82")),h=Object(m["a"])(d,i,s,!1,null,"94b5852e",null);e["default"]=h.exports},cd1c:function(t,e,n){},e25c:function(t,e,n){"use strict";var a=n("cd1c"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-3b432a88.978bc641.js.map