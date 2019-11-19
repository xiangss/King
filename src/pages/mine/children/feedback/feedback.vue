<template>
  <div class="page-wrap" id="feedback">
    <div class="header">
      <van-icon class="back" name="arrow-left" @click="backAction" />
      <span>意见反馈</span>
      <span></span>
    </div>
    <div class="wraper">
      <div class="title">
        <h1>请选择问题类型</h1>
        <span>*必填</span>
      </div>

      <div class="problems">
        <span @click="activeAction(1)" :class="{active :isactive==1}">功能bug</span>
        <span @click="activeAction(2)" :class="{active :isactive==2}">功能性建议</span>
        <span @click="activeAction(3)" :class="{active :isactive==3}">内容性建议</span>
        <span @click="activeAction(4)" :class="{active :isactive==4}">广告问题</span>
        <span @click="activeAction(5)" :class="{active :isactive==5}">网络环境问题</span>
        <span @click="activeAction(6)" :class="{active :isactive==6}">其他问题</span>
      </div>

      <div class="title">
        <h1>描述你的问题</h1>
        <span>*必填</span>
      </div>

      <div class="textarea">
        <textarea name id v-model="value" placeholder="您的宝贵意见是我们前进的动力"></textarea>
      </div>

      <div class="email">
        <h2>留下你的联系方式，我们将提供更好的服务</h2>
        <input type="text" v-model="QQ" placeholder="留下你的QQ或者邮箱" />
      </div>

      <p class="btn" ref="submit" @click="showPopup">提交</p>

      <van-popup v-model="show" round :style="{ height: '40%' ,width:'80%'}">
        <div class="popbox">
            <img src="../../../../assets/ok.png" alt />
          <hr />
          <p @click="backAction">返回个人中心</p>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Icon, Popup } from "vant";
export default {
  components: {
    Icon,
    "van-popup": Popup
  },
  data() {
    return {
      isactive: 0,
      value: "",
      QQ: "",
      show: false
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    activeAction(n) {
      this.isactive = n;
    },
    showPopup() {
      if(this.value && this.isactive){
        this.show = true;
        }
    }
  },
  computed:{
    isShow(){
       if(this.value && this.isactive){
        return 1;
        }else{
          return 0;
        }
    }
  },
  watch:{
    isShow(){
      if(this.isShow == 1){
        this.$refs.submit.style.background = "#F8984E"
      }else{
        this.$refs.submit.style.background = "#999"

      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  background: #ddd;
}
.popbox{
  width: 100%;
  height: 100%;
  text-align: center;
  img{
    display: inline-block;  
    height: 420px;

  }
  hr{
    border: none;
    border-bottom: 2px solid #ddd;
  }
  p{
    font-size: 30px;
    line-height: 75px;
  }
}
#feedback {
  //   background: #eee;
  overflow: hidden;
  .header {
    display: flex;
    height: 88px;
    background: white;
    font-size: 36px;
    justify-content: space-between;
    align-items: center;
    .back {
      font-size: 40px;
      padding-left: 20px;
    }
    span {
      font-size: 32px;
    }
  }
  .wraper {
    box-sizing: border-box;
    padding: 20px;
    height: 1000px;

    .title {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      h1 {
        font-size: 30px;
        color: #333;
      }
      span {
        color: #999;
      }
    }
    .problems {
      height: 180px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      span {
        width: 200px;
        font-size: 28px;
        color: #333;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 60px;
        margin: 16px;
      }
    }
    .textarea {
      width: 96%;
      height: 300px;
      box-sizing: border-box;
      margin: 2%;
      margin-top: 40px;
      textarea {
        resize: none;
        width: 100%;
        height: 100%;
        font-size: 30px;
        box-sizing: border-box;
        padding: 20px;
      }
    }
    .email {
      margin-top: 40px;
      h2 {
        font-size: 30px;
        color: #333;
        margin: 20px 0;
      }
      input {
        width: 96%;
        box-sizing: border-box;
        margin: 2%;
        font-size: 30px;
        line-height: 65px;
        padding: 0 20px;
      }
    }
    .btn {
      position: absolute;
      width: 90%;
      left: 0;
      bottom: 0;
      height: 80px;
      background: #ccc;
      margin: 40px 5%;
      box-sizing: border-box;
      line-height: 80px;
      font-size: 35px;
      text-align: center;
      color: white;
      letter-spacing: 20px;
    }
  }
}
</style>