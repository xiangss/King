<template>
<div id="credit">
  <div class="tpage">
    <p class="t-title">信用</p>
    <div class="ttop">
      <van-circle class="tcircle"
        v-model="currentRate"
        :rate="nowRate"
        :speed="100"
        layer-color="#ccc"
        :stroke-width="70"
        color="#fff"
        :size="150"
      />
      <p class="ttext">
        <span class="tfenshu">{{$store.state.credit.mark}}</span>
        <span class="xinyongfen">信用分</span>
      </p>
      <div class="trak">
        <p>评估时间：{{nowTime}}</p>
      </div>
      <p class="ttip">
        完善资料有助于提高信用分,解锁更多特权
      </p>
    </div>
    <div @click="addAction" class="adduserinfo">
      <span class="ttitle">完善个人资料</span>
      <van-icon class="iconright" name="arrow" />
    </div>
    <div @click="seeAction" class="seeuserinfo">
      <span class="ttitle">查看个人资料</span>
      <van-icon class="iconright" name="arrow" />
    </div>
  </div>
   <p class="infomation">所填资料仅用于您的贷款申请</p>
  <router-view></router-view>
  <div class="isLogin" v-if="show">
    <p>信用</p>
    <span @click="goLogin">去登录</span>
  </div>
</div>
</template>

<script>
import { Circle } from 'vant';
export default {
  components:{
    [Circle.name]:Circle
  },
  data() {
    return {
      currentRate: 0,
      rate:50,
      show:true,
    };
  },
  computed:{
    nowTime(){
      var d = new Date();
      var y = d.getFullYear();
      var m = d.getMonth()+1;
      var day = d.getDate()
      return y+'-'+m+'-'+day
    },
    nowRate(){
      return (this.$store.state.credit.mark)/1000*(this.rate)
    }
  },
  methods:{
    addAction(){
      this.$router.push({name:'edituserInfo'})
    },
    seeAction(){
      this.$router.push({name:'userInfo'});
    },
    async getInfomation(){
      await this.$store.dispatch('credit/requestInfomation');
    },
    goLogin(){
      this.$router.push('/login')
    }
  },
  created(){
    if(this.$store.state.isLogin == 0){
      this.show = true;
      this.$router.push({name:'credit'});
      this.getInfomation();
    }
    else if(this.$store.state.isLogin == 1){
      this.show = false;
    }
    
  },

}
</script>
<style lang="scss" scoped>
#credit{
  width: 100%;
  height: 100%;
  .isLogin{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 98px;
    background-color: #F7F7F7;
    z-index: 999;
    background: url('../../../assets/pic_bg.png') no-repeat center;
    background-size: cover;
    p{
      width: 100%;
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 36px;
      color: #fff;
    }
    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 40px;
      background-color: #FFB140;
      padding: 20px 60px;
      color: #fff;
      border-radius: 20px;
    }
  }
  .tpage{
    position: absolute;
    top: 0;
    bottom: 98px;
    width: 100%;
    background-color: #F7F7F7;
    position: relative;  
    
  }
  .infomation{
      position: absolute;
      width: 100%;
      height: 40px;
      font-size:22px;
      color:rgb(245, 64, 64);
      top: 65%;
      text-align: center;
    }
  .t-title{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 80px;
      font-size: 36px;
      text-align: center;
      line-height: 80px;
      color: #fff;
      z-index: 9;
    }
  .ttop{
    width: 100%;
    height: 460px;
    background-color: #F8984E;
    position: relative;
    .ttext{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 250px;
      height: 250px;
      transform: translate(-50%,-50%);
      .tfenshu{
        position: absolute;
        top: 35%;
        left: 50%;
        font-size: 60px;
        color: #fff;
        transform: translateX(-50%);
        text-align: center;
      }
      .xinyongfen{
        position: absolute;
        top: 60%;
        left: 50%;
        font-size: 30px;
        color: #fff;
        transform: translateX(-50%);
        text-align: center;
      }
    }
    .trak{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 175px;
      background-color: #F8984E;
      p{
        text-align: center;
        font-size: 22px;
        color: #fff;
        line-height: 80px;
      }
    }
    .tcircle{
      // transform: rotateZ(-90deg);
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%,-50%) rotateZ(-90deg);
    }
    .ttip{
      width:690px;
      height:80px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius:40px;
      text-align: center;
      line-height: 80px;
      font-size: 26px;
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .seeuserinfo,.adduserinfo{
    width:690px;
    height:125px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius:12px;
    position: absolute;
    top: 550px;
    left: 50%;
    transform: translateX(-50%);
    .ttitle{
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
    }
    .iconright{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
      right: 40px;
    }
  }
  .seeuserinfo{
    top: 700px;
  }
}
</style>
