<template>
<div id="not-find">
  <div class="noFound">
    <van-icon @click="btnbackAction" class="btnback" name="arrow-left" />
    <img src="../../../assets/404.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  methods:{
    btnbackAction(){
      this.$router.push('/');
    }
  }
}
</script>
<style lang="scss" scoped>
#not-find{
  width: 100%;
  .noFound{
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 999;
    img{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }
    .btnback{
      position: absolute;
      padding: 20px;
      font-size: 40px;
      left: 0;
      top: 0;
    }
  }
  
}
</style>
