<template>
<div class="page" id="mine">
  <h1>我的</h1>
  <button @click="order">我的订单</button>
  <button @click="assess">评价</button>


  <!-- 动画进入 -->
  <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  methods:{
    order(){
      this.$router.push('/mine/order')
    },
    assess(){
      this.$router.push('/mine/assess')
    }
  }
}
</script>

<style>

</style>