<template>
<div id="infomation">
  <div class="ttop" >
    <p @click="xueliAction">学历<span :class="{tactive : xueli =='',tactived: xueli != ''}">{{(xueli || $store.state.credit.jobinfo.edu) ? (xueli || $store.state.credit.jobinfo.edu) : '请输入'}}</span></p>
    <p @click="jobAction">职业信息<span :class="{tactive : job =='',tactived: job != ''}">{{(job || $store.state.credit.jobinfo.job) ? (job || $store.state.credit.jobinfo.job) : '请输入'}}</span></p>
    <p @click="salarAction">月均收入<span :class="{tactive : salar =='',tactived: salar != ''}">{{(salar || $store.state.credit.jobinfo.salary) ? (salar || $store.state.credit.jobinfo.salary) : '请输入'}}</span></p>
    <p @click="moneyAction">期望借款金额<span :class="{tactive : money =='',tactived: money != ''}">{{(money || $store.state.credit.jobinfo.expectMoney) ? (money || $store.state.credit.jobinfo.expectMoney) : '请输入'}}</span></p>
  </div>
  <div class="address">
    <p>居住地址</p>
    <input :class="{tactived: address != ''}" type="text" :placeholder=" $store.state.credit.jobinfo.address || '请输入详细地址'" v-model="address">
  </div>
  <div class="jobAddress">
    <p @click="jobNameAction">单位名称<span :class="{tactive : jobName =='',tactived: jobName != ''}">{{(jobName || $store.state.credit.jobinfo.company) ? (jobName || $store.state.credit.jobinfo.company) : '请输入'}}</span></p>
    <p>工作地址</p>
    <input :class="{tactived: workAddress != ''}" type="text" :placeholder="$store.state.credit.jobinfo.workAddress || '请输入详细地址'" v-model="workAddress">
  </div>

  <div>
    <van-button @click="nextAction" class="next" type="warning">下一步</van-button>
  </div>

  <van-popup class="showxueli" v-model="showxueli" closeable>
    <div class="callmain">
      <input type="text" v-model="xueli">
      <van-button @click="xueliAction"  class="xuelibtn" type="info">确定</van-button>
    </div>
  </van-popup>
  <van-popup class="showjob" v-model="showjob" closeable>
    <div class="callmain">
      <input type="text" v-model="job">
      <van-button @click="jobAction"  class="jobbtn" type="info">确定</van-button>
    </div>
  </van-popup>
  <van-popup class="showsalar" v-model="showsalar" closeable>
    <div class="callmain">
      <input type="text" v-model="salar">
      <van-button @click="salarAction"  class="salarbtn" type="info">确定</van-button>
    </div>
  </van-popup>
  <van-popup class="showmoney" v-model="showmoney" closeable>
    <div class="callmain">
      <input type="text" v-model="money">
      <van-button @click="moneyAction"  class="moneybtn" type="info">确定</van-button>
    </div>
  </van-popup>
  <van-popup class="showjob" v-model="showjobname" closeable>
    <div class="callmain">
      <input type="text" v-model="jobName">
      <van-button @click="jobNameAction"  class="jobbtn" type="info">确定</van-button>
    </div>
  </van-popup>

</div>
</template>

<script>
import { Uploader,Popup,Button  } from 'vant';
export default {
  components:{
    [Uploader.name]:Uploader,
    [Popup.name]:Popup,
    [Button.name]:Button
  },
  data(){
    return{
      showxueli:false,
      showjob:false,
      showsalar:false,
      showmoney:false,
      showjobname:false,
      xueli:'',
      job:'',
      salar:'',
      money:'',
      address:'',
      workAddress:'',
      jobName:''
    }
  },
  methods:{
    nextAction(){
      this.xueli = this.xueli || this.$store.state.credit.jobinfo.edu;
      this.job = this.job || this.$store.state.credit.jobinfo.job;
      this.salar = this.salar || this.$store.state.credit.jobinfo.salary;
      this.money = this.money || this.$store.state.credit.jobinfo.expectMoney;
      this.address = this.address || this.$store.state.credit.jobinfo.address;
      this.jobName = this.jobName || this.$store.state.credit.jobinfo.company;
      this.workAddress = this.workAddress || this.$store.state.credit.jobinfo.workAddress;
      if(this.xueli && this.job && this.salar && this.money  && this.address && this.workAddress && this.jobName){
        let jobinfo = {
          edu:this.xueli,
          job:this.job,
          salary:this.salar, 
          expectMoney:this.money,
          address:this.address,
          company:this.jobName,
          workAddress:this.workAddress,
        }

        // 跳转下一个，并存储数据到仓库
        this.$router.push({name:'firendsinfon'});
        this.$store.commit('credit/changeActive',1);
        this.$store.commit('credit/changeJobinfo',jobinfo);
      }else{
        alert('请输入完整！！！');
      }
    },
    xueliAction(){
      this.showxueli = !this.showxueli;
    },
    jobAction(){
      this.showjob = !this.showjob;
    },
    salarAction(){
      this.showsalar = !this.showsalar;
    },
    moneyAction(){
      this.showmoney = !this.showmoney;
    },
    jobNameAction(){
      this.showjobname = !this.showjobname;
    }
  }
  
}
</script>
<style lang="scss" scoped>
#infomation{
  width: 100%;
  .next{
    // position: absolute;
    left: 50%;
    top: 30px;
    width: 60%;
    transform: translateX(-50%);
    height: 80px;
    font-size: 36px;
    border-radius: 40px;
  }
  .ttop{
    width: 100%;
    background-color: #fff;
    margin-bottom: 20px;
    p{
      width: 95%;
      height: 80px;
      position: relative;
      font-size: 28px;
      line-height: 80px;
      border-bottom: 1px solid #ddd;
      text-indent: 20px;
      margin-left: 20px;
      span{
        position: absolute;
        right: 20px;
      }
    }
  }
  .jobAddress, .address{
    width: 100%;
    background-color: #fff;
    margin-bottom: 20px;
    p{
      width: 95%;
      height: 80px;
      font-size: 28px;
      position: relative;
      line-height: 80px;
      border-bottom: 1px solid #ddd;
      text-indent: 20px;
      margin-left: 20px;
      span{
        position: absolute;
        right: 20px;
      }
    }
    input{
      width: 100%;
      border: none;
      height: 80px;
      text-indent: 40px;
      font-size: 26px;
    }
  }
  .showxueli,.showjob,.showsalar,.showmoney{
    width: 80%;
    height: 100%;
    height: 200px;
    border-radius: 20px;
    position: fixed;
    z-index: 999;
    input{
      width: 100%;
      height: 80px;
      text-align: center;
      font-size:28px;
    }
    .xuelibtn,.jobbtn,.salarbtn,.moneybtn{
      height: 80px;
      width: 100px;
      font-size: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 20px;
    }
  }
  .tactive{
    color: #ccc;
  }
}
</style>
