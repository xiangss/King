<template>
  <div class="tools">
    <p>必备工具</p>

    <div class="box">
      <div class="left" @click="toMonetAction">
        <span>
          <img src="../../../../assets/icon_bb_fkjy.png" alt />
        </span>
        <p>反馈意见</p>
      </div>
      <div class="right">
        <span>
          <img src="../../../../assets/back.png" alt />
        </span>
        <p>我的评价</p>
      </div>
      <div class="left"  @click="toAskforAction">
        <span>
          <img src="../../../../assets/iocn_jk.png" alt />
        </span>
        <p>借款问题</p>
      </div>
      <div class="right" @click="toMarkAction">
        <span>
          <img src="../../../../assets/icon_hk.png" alt />
        </span>
        <p>为您推荐</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toMonetAction() {
      this.$router.push("/mine/feedback");
    },
    toMarkAction() {
      this.$router.push("/mine/foryou");
    },
    toAskforAction(){
      this.$router.push("/mine/askfor");
    }
  }
};
</script>

<style lang = "scss" scoped>
.tools {
  width: 100%;
  font-size: 24px;
  margin-top: 30px;
  color: #333;
  p {
    font-size: 28px;
    color: #333;
    font-family: PingFang-SC-Regular;
    margin-bottom: 20px;
  }
  .box {
    display: flex;
    width: 100%;
    height: 240px;
    flex-wrap: wrap;
    div {
      width: 330px;
      height: 98px;
      background: white;
      box-shadow: 0 0 10px #ddd;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 24px  35px;
      &.left {
        margin-right: 10px;
      }
      &.right {
        margin-left: 18px;
      }
      span{
        width: 50px;
        height: 50px;
        display: inline-block;
        img{
          display: inline-block;
          width: 100%;
          height: 100%;
          
        }
      }
      p{
        display: inline-block;
        color: #666;
        font-size: 28px;
        font-family: PingFang-SC-Regular;
        padding-left: 35px;
        position: relative;
        top: -14px;
      }
    }
  }
}
</style>