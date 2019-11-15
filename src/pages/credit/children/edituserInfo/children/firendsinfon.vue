<template>
<div id="firends">
  <div class="ttop" >
    <p @click="fnameAction">姓名<span :class="{tactive : !fname,tactived: fname}">{{fname ? fname : '请输入'}}</span></p>
    <p @click="ftelAction">电话<span :class="{tactive : !ftel ,tactived: ftel}">{{ftel ? ftel : '请输入'}}</span></p>
    <p @click="guanxiAction">关系<span :class="{tactive : !guanxi,tactived: guanxi}">{{guanxi ? guanxi : '请输入'}}</span></p>
  </div>


  <div>
    <van-button @click="nextAction" class="next" type="warning">下一步</van-button>
  </div>

  <van-popup class="firends" v-model="fnameflag" closeable>
    <div class="callmain">
      <input type="text" v-model="fname">
      <van-button @click="fnameAction"  class="firendsbtn" type="info">确定</van-button>
    </div>
  </van-popup>
  <van-popup class="firends" v-model="ftelflag" closeable>
    <div class="callmain">
      <input type="text" v-model="ftel">
      <van-button @click="ftelAction"  class="firendsbtn" type="info">确定</van-button>
    </div>
  </van-popup>
  <van-popup class="firends" v-model="guanxiflag" closeable>
    <div class="callmain">
      <input type="text" v-model="guanxi">
      <van-button @click="guanxiAction"  class="firendsbtn" type="info">确定</van-button>
    </div>
  </van-popup>

</div>
</template>

<script>
import { Uploader,Popup,Button,Toast  } from 'vant';
export default {
  components:{
    [Uploader.name]:Uploader,
    [Popup.name]:Popup,
    [Button.name]:Button
  },
  data(){
    return{
      fnameflag:false,
      ftelflag:false,
      guanxiflag:false,
      fname:'',
      ftel:'',
      guanxi:''
    }
  },
  methods:{
    nextAction(){
     
      if(this.fname && this.ftel  && this.guanxi ){
        let firendsinfo = {
          fname:this.fname,
          ftel:this.ftel,
          guanxi:this.guanxi
        }
        this.$router.push({name:'saveuserinfo'});
        this.$store.commit('credit/changeActive',2);
        this.$store.commit('credit/changeSaveinfolist',firendsinfo);
      }else{
        Toast('请输入完整！');
      }
    },
    fnameAction(){
      this.fnameflag = ! this.fnameflag;
    },
    ftelAction(){
      this.ftelflag = ! this.ftelflag;

    },
    guanxiAction(){
      this.guanxiflag = ! this.guanxiflag;

    }
  },
  created(){
     this.fname = this.$store.state.credit.saveinfolist.fname;
      this.ftel = this.$store.state.credit.saveinfolist.ftel;
      this.guanxi = this.$store.state.credit.saveinfolist.guanxi;
  }
  
}
</script>
<style lang="scss" scoped>
#firends{
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
  .firends{
    width: 80%;
    height: 100%;
    height: 200px;
    border-radius: 20px;
    input{
      width: 100%;
      height: 80px;
      text-align: center;
      font-size:28px;
    }
    .firendsbtn{
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
}
</style>
