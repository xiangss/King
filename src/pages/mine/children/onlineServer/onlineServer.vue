<template>
  <div class="page-wrap page">
    <div class="header">
      <van-icon class="back" name="arrow-left" @click="backAction" />
      <span>在线客服</span>
      <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
    </div>
    <app-scroll class="content">
      <messageLeft message="智能机器人小错在线为您服务" />
      <!-- <messageLeft :message="messageLeft"/>

      <messageRight :message="messageRight"/>

          <messageLeft :message="messageLeft"/>

      <messageRight :message="messageRight"/>-->

      <div v-for="(item,index) in message" :key="index">
        <messageRight :message="item.right" />
        <messageLeft :message="item.left" />
      </div>
    </app-scroll>

    <div class="inputbox">
      <input type="text" v-model="text" @keyup.enter="sendAction" placeholder="输入您的问题" />
      <span @click="sendAction">发送</span>
    </div>
  </div>
</template>

<script>
import messageLeft from "./children/messageLeft";
import messageRight from "./children/messageRight";
// import scroll  from '../../../../components/app-scroll'
export default {
  components: {
    messageLeft,
    messageRight
  },
  data() {
    return {
      message: [],
      setences: [
        "今天的月亮好圆啊",
        "你猜",
        "今天天气不错",
        "你说啥",
        "真的吗",
      ],
      text: ""
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    sendAction(ev) {
      if(!this.text){
        return;
      }
      let obj = null;
      if (this.message.length >= 3) {
         obj = {
          left: "实在无能为力请拨打：95511",
          right: this.text
        };
      } else {
         obj = {
          left: this.setences[Math.floor(Math.random() * 5)],
          right: this.text
        };
      }

      this.message.push(obj);
      this.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 100px;
}
.content {
  top: 88px;
  bottom: 100px;
  background: #eee;
  box-sizing: border-box;
  padding: 20px;
}
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
.inputbox {
  height: 100px;
  // background: red;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  input {
    width: 80%;
    line-height: 100px;
    border: none;
    font-size: 28px;
    border: none;
    box-sizing: border-box;
    padding-left: 20px;
  }
  span {
    display: inline-block;
    width: 20%;
    line-height: 106px;
    background: #f8984e;
    color: white;
    letter-spacing: 5px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>