<template>
<div id="userinfo">
  <div class="ttop">
    <van-icon @click="btnbackAction" class="btnback" name="arrow-left" />
    <p class="title">填写资料</p>
    <van-steps class="t-step" :active="active">
      <van-step>实名认证</van-step>
      <van-step>个人信息</van-step>
      <van-step>联系人</van-step>
    </van-steps>
  </div>
  <app-scroll class="content">
    <!-- <Idcard v-if="active== -1" @sendId="handlegetNumber"></Idcard>
    <InfoMation v-if="active == 0"  @sendjob="handlegetInfomation"></InfoMation>
    <FirendsInfon v-if="active == 1" @sendfirends="handlegetFirends"></FirendsInfon> -->
    <router-view></router-view>
  </app-scroll>
</div>
</template>

<script>
import { Step, Steps } from 'vant'
import Idcard from '../../components/identification'
import InfoMation from '../../components/infomation'
import FirendsInfon from '../../components/firendsinfon'
export default {
  components:{
    Idcard,
    InfoMation,
    FirendsInfon,
    [Step.name]:Step,
    [Steps.name]:Steps
  },
   data() {
    return {
    };
  },
  computed:{
    active(){
      return this.$store.state.credit.active;
    }
  },
  methods:{
    btnbackAction(){
      this.$router.back();
    },
    handlegetNumber(idinfo){
      console.log(idinfo);
      this.active = idinfo.index0;
    },
    handlegetInfomation(jobinfo){
      console.log(jobinfo);
      this.active = jobinfo.index1;
    },
    handlegetFirends(firends){
      console.log(firends);
      this.active = firends.index2;
    }
  }

}
</script>
<style lang="scss" scoped>
#userinfo{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #F7F7F7;
  z-index: 99;
  .content{
    position: absolute;
    top: 354px;
    bottom: 0;
    width: 100%;
  }
  .ttop{
    width: 100%;
    height: 354px;
    background-color: #F8984E;
    position: relative;
    .btnback{
      position: absolute;
      padding: 20px;
      font-size: 40px;
      color: #fff;
      left: 0;
      top: 0;
    }
    .title{
      font-size: 36px;
      width: 100%;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #fff;
    }
    .t-step{
      background-color: #F8984E;
      height: 100px;
      width: 80%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
