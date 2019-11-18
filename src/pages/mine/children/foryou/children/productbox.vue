<template>
  <div class="productbox">
    <span class="tip">可复借</span>

    <div class="title">
      <img src="../../../../../assets/logo.png" alt />
      <b>{{data.productName}}</b>
      <span>2019-6-6</span>
    </div>

    <div class="inside">
      <div class="money">
        <p>{{data.equMoney}}</p>
        <span>借款金额</span>
      </div>
      <div class="time">
        <p>{{data.timeLimit}}</p>
        <span>借款期限</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        data:Object
    }
};
</script>

<style lang="scss" scoped>
.productbox {
  width: 100%;
  height: 201px;
  background: white url(../../../../../assets/bq_dtx.png) no-repeat right top;
  background-size: 105px 105px;
  border-radius: 15px;
  position: relative;
  box-sizing: border-box;
  padding: 25px 109px 25px 25px;
  margin-top: 30px;
  .tip {
    position: absolute;
    top: 26px;
    right: 0;
    color: white;
    font-size: 24px;
    font-family: PingFang-SC-Regular;
    transform: rotate(45deg);
  }
  .title {
    img {
      height: 36px;
      width: 36px;
      display: inline-block;
    }
    b {
      font-size: 28px;
      color: #333;
      font-weight: bold;
      line-height: 36px;
      position: relative;
      top: -6px;
      left: 20px;
    }
    span {
      position: relative;
      top: -6px;
      left: 320px;
      color: #999;
    }
  }
  .inside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
  }
  .money {
    flex: 1;
    p{
        font-size: 32px;
        color: #E63F3F;
        margin-bottom: 10px;
    }
    span{
        color: #999;
        font-size: 24px;
    }
  }
  .time {
    flex: 1;
     p{
        font-size: 32px;
        margin-bottom: 10px;
    }
    span{
        color: #999;
        font-size: 24px;
    }
  }
}
</style>