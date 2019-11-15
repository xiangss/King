<template>
  <div class="page">
      <div class="header"><span>借钱</span></div>

      <div class="nav">
          <div class="li">
              <img src="../../../assets/borrow-1.png" alt="">
              <span>新品上市</span>
          </div>
          <div class="li">
              <img src="../../../assets/borrow-2.png" alt="">
              <span>新品上市</span>
          </div>
          <div class="li">
              <img src="../../../assets/borrow-3.png" alt="">
              <span>新品上市</span>
          </div>
          <div class="li">
              <img src="../../../assets/borrow-4.png" alt="">
              <span>新品上市</span>
          </div>
      </div>

      <div class="pic"><img src="../../../assets/borrow-5.png" alt=""></div>

      <!-- 申请列表 -->
      <app-scroll class="content scroll">
        <application-item v-for="item in company.data" :key="item.id" :data="item"></application-item>
      </app-scroll>

      <!-- application页面 -->
      <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            company:[]
        }
    },
    methods:{
        async request(){
            this.company =await this.$store.dispatch('product/requestAllCompany')
            console.log(this.company);
            
            // this.$nextTick(()=>{
            //     this.company = this.$store.state.product.currentAllCompany
            //     console.log(this.company);
            // })
        }
    },
    created(){
        this.request();
    },
}
</script>

<style scoped lang="scss">
.header{
    height: 218px;
    width: 100%;
    background: #F8984E;
    position: relative;
    text-align: center;
    overflow: hidden;
    span{
        // position: absolute;
        display: inline-block;
        padding-top: 69px;
        width:64px;
        height:30px;
        font-size:32px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:25px;
    }
}
.nav{
    width:690px;
    height:165px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 16px 0px rgba(0, 0, 0, 0.16);
    border-radius:12px;
    display: flex;
    margin: -80px auto;
    position: relative;
    z-index: 2;
    .li{
        flex: 1;
        text-align: center;
        img{
            height: 64px;
            width: 64px;
            margin: 28px auto;
            margin-bottom: 0;
        }
        span{
            width:98px;
            height:23px;
            font-size:24px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:25px;
            display: inline-block;
        }
    }
}
.pic{
    height: 50px;
    width: 100%;
    img{
        height: 50px;
        width: 100%;
        margin-top: 80px;
    }
}
.scroll{
    top: 350px;
}
</style>