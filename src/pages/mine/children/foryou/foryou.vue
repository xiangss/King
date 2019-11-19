<template>
  <div class="page-wrap page" id="foryou">
    <div class="header">
      <van-icon class="back" name="arrow-left" @click="backAction" />
      <span>为您推荐</span>
      <span></span>
    </div>
    <app-scroll class="content">
        <div class="space"></div>
      <productbox v-for="(item,index) in foryouLoad" :key="index" :data="item"/>


      <p class="underline">
        <b>........</b>
        <span>我是有底线的</span>
        <i>........</i>
      </p>
    </app-scroll>
  </div>
</template>

<script>
import productbox from "./children/productbox";
export default {
  components: {
    productbox
  },
  methods: {
    backAction() {
      this.$router.back();
    }
  },
  beforeCreate(){
      this.$store.dispatch('kevin/foryou');
  },
  computed:{
      foryouLoad(){
          return this.$store.state.kevin.foryou;
      }
  },
//   watch:{
//       foryouLoad(){
//           console.log(this.foryouLoad);
//       }
//   },
};
</script>

<style lang="scss" scoped>
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

.content {
  top: 88px;
  bottom: 0;
  box-sizing: border-box;
  padding: 30px;
  .space{
      height: 1px;
  }
  .underline {
    margin: 30px 0;
    text-align: center;
    font-size: 24px;
    color: #999999;
    b {
      position: relative;
      top: -5px;
      font-size: 30px;
      right: 12px;
      color: #666;
    }
    i {
      position: relative;
      top: -4px;
      left: 9px;
       font-size: 30px;
    }
  }
}
#foryou {
  background: #f8f8f8;
}
</style>