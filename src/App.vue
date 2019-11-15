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
  height: 100px;
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
.van-tabs--line .van-tabs__wrap{
    height: 80px ;
}
.van-tab{
  height: 80px;
  line-height: 80px !important;
}
.van-ellipsis{
  font-size: 30px;
  height: 80px ;
}
.van-tabs__nav .van-tabs__nav--line{
    height: 80px;
}
.van-tabs__wrap .van-hairline--top-bottom{
    height: 80px;
}
.van-tabs--line .van-tabs__wrap{
    height: 80px !important;
}
</style>



