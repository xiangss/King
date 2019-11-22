<template>
  <div id="login">
    <div class="backBtn" @click="backAction">
      <van-icon name="arrow-left" />
    </div>
    <div class="slideBox">
      <span
        class="slideItem"
        @click="sliderAction(1)"
        :slide="slider"
        :class="{active :slider ==1}"
      >验证码登陆/注册</span>
      <span
        class="slideItem"
        @click="sliderAction(2)"
        :slide="slider"
        :class="{active :slider ==2}"
      >密码登陆</span>
    </div>
    <!-- 验证码登陆 -->
    <div v-if="slider==1" class="loginBox">
      <p>手机号</p>
      <input type="text" placeholder="请输入手机号" v-model.lazy="phone" />
      <hr />
      <p>验证码</p>
      <input type="text" placeholder="请输入验证码" v-model.lazy="value" />
      <span ref="code" @click="codeAction">获取验证码</span>
      <hr />
      <p class="checkbox">
        <input type="checkbox" v-model="readDoc" />我已阅读并同意
        <span>《用户服务条款》</span>
      </p>
      <p class="btn" @click="LoginAction"  ref="loginBtn" >登陆</p>
    </div>
    <!-- 密码登陆 -->
    <div v-else class="loginBox">
      <p>手机号</p>
      <input type="text" placeholder="请输入手机号" v-model.lazy="phone" />
      <hr />
      <p>密码</p>
      <input type="password" placeholder="请输入密码" v-model.lazy="value" />
      <hr />
      <p class="forgetPassword" @click="findPasswordAction">忘记密码?</p>
      <p class="btn dark" @click="LoginAction">登陆</p>
    </div>

    <forgetPass ref="forgetPass"/>
  </div>
</template>

<script>
import forgetPass  from './children/forgetPass'
import { Icon } from "vant";
import { Popup, Dialog } from "vant";
export default {
  data() {
    return {
      slider: 1,
      checked: true,
      phone: "",
      readDoc: false,
      value: "",
      password: "",
      timer:null
    };
  },
  computed: {
    type() {
      if (this.slider == 1) {
        return "code";
      } else {
        return "password";
      }
    },

  },
  watch:{
    slider(newVal,oldVal){
      if(newVal==2){
        clearInterval(this.timer);
      }
      
    },

    readDoc(newVal){
      if(newVal){
        console.log(this.$refs);
        this.$refs.loginBtn.style.opacity = 1;
      }else{
        this.$refs.loginBtn.style.opacity = 0.5;

      }
    }
    
  },
  components: {
    Icon,
    Dialog,
    "van-popup": Popup,
    forgetPass
  },
  methods: {
    //返回键
    backAction() {
      clearInterval(this.timer);
      this.$router.back();
    },
    //滑动
    sliderAction(n) {
      this.slider = n;
    },
    //获取验证码
    codeAction() {
      console.log(this.$refs);
      
      clearInterval(this.timer);
      if (!this.phone) {
        // console.log("请输入手机号码");
        Dialog({
          message: "请输入手机号码",
          width: "320px",
          className: "dialog"
        });
        return;
      }

      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        Dialog({
          message: "手机号码有误",
          width: "320px",
          className: "dialog"
        });
        return false;
      }
      this.$store.dispatch("kevin/sendCode", this.phone);
      this.$refs.code.innerText = "60s";
      let n = 59;
      let _this = this;
      clearInterval(this.timer);
      this.timer = setInterval(function() {
        _this.$refs.code.innerText = `${n--}s`;
        if (n === 0) {
          _this.$refs.code.innerText = "点击重新获取";
          clearInterval(this.timer);
        }
      }, 1000);
    },

    //登陆
    async LoginAction() {
      
      if (this.type === "type") {
        if (!this.readDoc) {
          Dialog({
            message: "请阅读服务条款",
            width: "320px",
            className: "dialog"
          });
          return;
        }
        if (!this.value) {
          Dialog({
            message: "请输入验证码",
            width: "320px",
            className: "dialog"
          });
          return;
        }
      }
      await this.$store.dispatch("kevin/logAction", {
        tel: this.phone,
        type: this.type,
        value: this.value
      });
      if (this.$store.state.kevin.code == 0) {
        clearInterval(this.timer);
        this.$store.commit('setisLogin',1);
        this.$store.state.kevin.isLogin = 1;
        this.$router.push("/mine");
      } else {
        Dialog({
          message: this.type == "code" ? "验证码不正确" : "密码不正确",
          width: "320px",
          className: "dialog"
        });
      }
    },

    //找回密码

    findPasswordAction() {
      clearInterval(this.timer);
      this.$refs.forgetPass.show =true;
    },

    //取消按钮


  },

  created(){
    if(this.$store.state.kevin.isRegiester){
      this.slider=2
    }else{
      this.slider=1

    }
    
  }
};
</script>

<style lang="scss" scoped>
#login {
  touch-action: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: red;
  z-index: 100;
  background: url(../../../../assets/pic_bg.png);
  background-size: cover;
  .backBtn {
    margin-left: 18px;
    margin-top: 40px;
    font-size: 44px;
    color: white;
  }
  .slideBox {
    text-align: center;
    font-size: 30px;
    margin-top: 90px;
    .slideItem {
      color: white;
      margin: 0 40px;
      padding: 10px 0;
    }
    .active {
      border-bottom: 4px solid white;
    }
  }
  .loginBox {
    margin: 80px 60px;
    height: 600px;
    background: white;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 50px;
    p {
      font-size: 30px;
      color: #333;
      font-family: PingFang-SC-Medium;
      font-weight: Medium;
      line-height: 80px;
    }
    input {
      border: none;
      font-size: 27px;
      color: #999;
      line-height: 60px;
    }
    hr {
      border: none;
      border-bottom: 2px solid #f4f4f4;
    }
    span {
      color: #f8984e;
      font-size: 27px;
      padding-left: 50px;
    }
    .checkbox {
      font-size: 22px;
      color: #999999;
      input {
        position: relative;
        top: 5px;
      }
      span {
        font-size: 22px;
        padding: 0;
      }
    }
    .btn {
      margin-top: 20px;
      height: 70px;
      background: #f8984e;
      border-radius: 35px;
      font-size: 32px;
      color: white;
      line-height: 70px;
      text-align: center;
      opacity: 0.5;
    }
    .forgetPassword {
      font-size: 22px;
      padding: 0;
      text-align: right;
      color: #999;
      // opacity: 0;
    }
    .dark {
      opacity: 1;
    }
  }
}
</style>