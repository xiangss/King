<template>
  <div>
    <div class="page" id="mine">
      <!-- 头像及用户名 -->
      <photo />
      <!-- box1 -->
      <cash />
      <!-- box2 -->
      <order />
      <!-- box3 tool -->
      <tools />
      <!-- server help -->
      <server-help />

      <!-- 推介广告 -->

      <advertise />
      <!-- <button @click="Action">dakai</button> -->
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>

    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
      <!-- 退出登陆 修改用户名 -->
    <van-popup position="bottom" round :style="{ height: '16%' }" v-model="show">
      <p class="bottom">分享</p>
      <p class="bottom" @click="changeNameAction">修改用户名</p>
      <p class="bottom" @click="logOutAction">退出登陆</p>
    </van-popup>
      <!-- 修改用户名弹框 -->
    <van-popup round :style="{ height: '20%' ,width:'80%'}" v-model="showInput">
      
      <input class="inputBox" type="text" ref="username" placeholder="输入新的用户名">

      <p class="Actions"> <span @click="cancleAction">取消</span> <span @click="comfirmAction">确认</span></p>

    </van-popup>
  </div>
</template>

<script>
import photo from "./children/photo";
import order from "./children/order";
import cash from "./children/cash";
import tools from "./children/tools";
import server from "./children/server";
import advertise from "./children/advertise";
import { Popup, Cell } from "vant";
export default {
  data() {
    return {
      show: false,
      showInput:false,
      
    };
  },
  components: {
    photo,
    order,
    cash,
    tools,
    advertise,
    "server-help":server,
    "van-popup": Popup,
  },
  methods: {
    Action() {
      this.$router.push("/mine/collect");
    },
    showPopup() {
      this.show = true;
    },
    logOutAction() {
      this.$store.dispatch("kevin/logOutAction");
      this.show = false;
      this.$store.state.kevin.img="";
    },
    changeNameAction() {
      this.showInput=true;
      this.show=false;
    },
    cancleAction(){
      this.showInput=false;
    },
    comfirmAction(){
      this.$store.state.kevin.username =  this.$refs.username.value
      this.showInput=false;
      
    }
  },
  beforeCreate(){
    this.$store.state.isLogin =this.$store.state.kevin.isLogin;
    console.log(this.$store.state.isLogin );
    
  }
};
</script>

<style lang="scss" scoped>
#mine {
  background: #f7f7f7;
  box-sizing: border-box;
  padding: 30px;
  // overflow: scroll;
}

.inputBox{
  display: block;
  margin: 50px auto;
  line-height: 60px;
  height: 60px;
  width: 80%;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid #ddd;
}
.Actions{
  display: flex;
  justify-content: space-around;
  font-size: 28px;
}
@keyframes slideInRight {
  0% {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
@keyframes slideOutRight {
  0% {
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}
.slideOutRight {
  animation-name: slideOutRight;
}
.slideOutRight,
.slideInRight {
  animation-duration: 200ms;
}
.bottom {
  line-height: 70px;
  font-size: 30px;
  text-align: center;
}
</style>