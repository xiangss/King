<template>
  <div class="left">
    <div class="img">
      <img src="../../../../../assets/icon_kf.png" alt />
    </div>
    <span><em></em>{{message}}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
};
</script>

<style lang="scss" scoped>
.left {
  .img {
    height: 80px;
    width: 80px;
    background: #f8984e;
    border-radius: 15px;
    margin: 20px 0;
    img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    display: inline-block;
  }
  span {
      font-size: 35px;
      background: white;
      padding: 15px 15px 15px 0;
      border-radius: 15px;
      position: relative;
      top: -25px;
      margin-left: 20px;
      em{
          display: inline-block;
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 8px solid transparent;
          border-right: 8px solid white;
          position: relative;
          left: -17px;
          top: -5px;
      }
  }
}
</style>