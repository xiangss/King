<template>
  <div class="advertise" @click="pushAction">
    <div class="img">
      <img src="../../../../assets/pic_zn.png" alt />
      <span>智能助手为你找到一款产品</span>
    </div>
    <div class="box">
      <div class="img">
        <img src="../../../../assets/logo_advise.png" alt />
        <h3>小赢卡贷</h3>
      </div>
      <div class="money">
        <h3>额度</h3>
        <p>1000-150000</p>
      </div>
      <div class="money">
        <h3>期限</h3>
        <p>12-36个月</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getMoneyAction() {
      this.$router.push("/borrow");
    },
    colletionAction() {
      this.$router.push("/home");
    },
    orderAction() {
      this.$router.push("/home");
    },
    payAction() {
      this.$router.push("/credit");
    },
    pushAction(){
      this.$router.push(`/borrow/application/010`);
    }
  }
};
</script>

<style lang = "scss" scoped>
.advertise {
  width: 100%;
  height: 250px;
  border-radius: 15px;
  box-shadow: 0 0 10px #ddd;
  background: white;
  margin-top: 25px;
  box-sizing: border-box;
  padding: 20px 30px;
  .img {
    height: 100px;
    width: 100%;
    img {
      height: 100%;
      display: inline-block;
    }
    span {
      font-size: 24px;
      color: #666;
      position: relative;
      top: -40px;
      left: 30px;
    }
  }
  .box {
    height: 98px;
    width: 100%;
    background: #f4f4f4;
    margin-top: 15px;
    border-radius: 15px;
    display: flex;
    .img {
      width: 250px;
      img {
        display: inline-block;
        height: 36px;
        width: 36px;
        margin-top: 34px;
        margin-left: 23px;
      }
      h3{
        display: inline-block;
        font-size: 28px;
        color: #333;
        margin-left: 10px;
        position: relative;
        top: -5px; 
      }
    }
    .money{
      width: 165px;
      h3{
        font-size: 24px;
        color:#999;
        margin-top: 20px;
        margin-bottom: 12px;
      }
      p{
        color: #333;
        font-size: 24px;
      }
    }
  }
}
</style>