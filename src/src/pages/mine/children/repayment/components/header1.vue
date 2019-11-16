<template>
<div class="header border-bottom">
  <van-icon v-if="hasBack" class="back-btn" name="arrow-left" @click="backAction"/>
  <h1 class="title">还款管理</h1>
</div>
</template>

<script>
export default {
  name: 'header1',
  props: {
    hasBack: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    backAction(){
      this.$router.back();
    }
  }
}
</script>

<style scoped lang="scss">
.header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 88px;
    .title{
      width: 70%;
      margin: 0 auto;
      height: 88px;
      line-height: 88px;
      text-align: center;
      font-size: 20px;
      font-family:PingFang SC
    }
    .back-btn{
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 10px;
      font-size: 20px;
      line-height: 88px;
      color:rgb(3,154,255)
    }
  }
</style>