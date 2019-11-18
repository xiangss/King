<template>
  <div class="page-wrap" id="feedback">
    <div class="header">
      <van-icon class="back" name="arrow-left" @click="backAction" />
      <span>借款问题</span>
      <span></span>
    </div>
    <div class="wraper">
      <div class="problems">
        <questionBox v-for="(item,index) in content " :content="item" :key="index" />
      </div>
      <p class="btn" @click="serverAction">
        <img src="../../../../assets/icon_kf.png" alt /> 咨询在线客服
      </p>
    </div>

    <van-popup v-model="show" closeable position="bottom" :style="{ height: '30%' }">
      <div class="feedbackBox">
        <p>为什么没用</p>

        <hr />
        <div>
          <p @click="thanks">内容太复杂没看懂</p>
             <hr />
          <p @click="thanks">内容有错误</p>
             <hr />
          <p @click="thanks">看完操作以后未能解决问题</p>
             <hr />
          <p @click="thanks">对改项功能不满意</p>
        </div>
      </div>
    </van-popup>

    <van-popup v-model="thankshow"  round :style="{ height: '8%' ,width:'30%'}"> <p class="thanks">感谢您的反馈</p> </van-popup>
  </div>
</template>

<script>
import questionBox from "./children/question";
import { Icon, Popup } from "vant";
export default {
  components: {
    Icon,
    "van-popup": Popup,
    questionBox
  },
  data() {
    return {
      isactive: 0,
      value: "",
      QQ: "",
      show: false,
      thankshow: false,
      active: 1,
      content: [
        {
          title: "问题1",
          inside: `答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案`
        },
        {
          title: "问题2",
          inside: `答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案`
        },
        {
          title: "问题3",
          inside: `答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案`
        },
        {
          title: "问题3",
          inside: `答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案`
        },
        {
          title: "问题3",
          inside: `答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案一答案一答案一答案一
            答案一答案一答案一答案一答案一答案`
        }
      ]
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
      this.show = true;
    },
    serverAction() {
      this.$router.push("/mine/onlineServer");
    },
    thanks(){
      this.show = false;
      this.thankshow=true;
    }
  },
  computed: {
    userful() {
      return this.$store.state.kevin.isuseful;
    }
  },
  watch: {
    userful() {
      if (this.userful == 0) {
        this.show = true;
        this.$store.commit("kevin/userful", -1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
hr{
  border: none;
  border-bottom: 2px solid #ddd;
}
.active {
  background: #ddd;
}
.popbox {
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    display: inline-block;
    height: 420px;
  }
  hr {
    border: none;
    border-bottom: 2px solid #ddd;
  }
  p {
    font-size: 30px;
    line-height: 75px;
  }
}
#feedback {
  background: #eee;
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

    .problems {
      width: 100%;
      min-height: 2px;
      background: white;
      border-radius: 15px;
      box-sizing: border-box;
      padding: 15px;
      .questionBox {
        .questionTitle {
          font-size: 26px;
          line-height: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .question {
          font-size: 24px;
          display: none;
        }
      }
    }

    .btn {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 80px;
      background: #f8984e;
      box-sizing: border-box;
      line-height: 80px;
      font-size: 30px;
      text-align: center;
      color: white;
      letter-spacing: 5px;
      img {
        height: 40px;
        width: 40px;
        display: inline-block;
        position: relative;
        top: 8px;
      }
    }
  }
}
.thanks{
  text-align: center;
  line-height: 100px;
  font-size: 26px;
}
.feedbackBox{
  text-align: center;
  font-size: 26px;
  p{
    padding-top: 10px;
    line-height: 60px;
    color:#999;
  }
  div{
    box-sizing: border-box;
    padding: 0 30px;
    p{
      font-size: 28px;
      line-height: 40px;
      color: #333;
    }
  }
}
</style>