<template>
<div id="app">
  <router-view></router-view>
  <tab-bar></tab-bar>

</div>


</template>

<script>
import TabBar from './components/tab-bar'
export default {
  components: {
    [TabBar.name]: TabBar
  }
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
.page{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 98px;
  width: 100%;
  .content{
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}

.t-step .van-step__circle-container{
  padding: 10px !important;
  border-radius: 50% !important;
}
.t-step .van-step__circle{
  width: 20px !important;
  height: 20px !important;
}
.van-step__title{
  font-size: 30px !important;
  margin-top: 60px !important;
}
.car .van-uploader__upload{
  width: 300px !important;
  height: 200px !important;
}
.tactive{
  color: #ccc;
}
.tactived{
  color: #F8984E;
}
</style>






