<template>
<div id="idcard">
  <div class="idcar">
      <div class="face">
      <p>身份证人像正面</p>
      <span>+</span>
      <img :src="face" alt="">
      <van-uploader class="car" :after-read="afterReadface" />
    </div>
    <div class="noface">
      <p>身份证国徽面</p>
      <span>+</span>
      <img :src="noface" alt="">
      <van-uploader class="car" :after-read="afterReadnoface" />
    </div>
    <div class="info">
      <!-- <p @click="showName">姓名<span :class="{tactive : name =='' ,tactived: name != ''}">{{(name || $store.state.credit.idinfo.cname) ? (name || $store.state.credit.idinfo.cname) : '请输入'}}</span></p> -->
       <p @click="showName">姓名<span :class="{tactive : !name ,tactived: name }">{{name ? name : '请输入'}}</span></p>
      <p @click="showId">身份证号<span :class="{tactive : !idinfo,tactived: idinfo}">{{idinfo ? idinfo : '请输入'}}</span></p>
    </div>
  </div>

  <van-button @click="nextAction" class="next" type="warning">下一步</van-button>

<van-popup class="nameflag" v-model="nameflag" closeable>
  <div class="callmain">
    <input type="text" v-model="name">
    <van-button @click="namebtn" class="namebtn" type="info">确定</van-button>
  </div>
</van-popup>
<van-popup class="idflag" v-model="idflag" closeable>
  <div class="callmain">
    <input type="text" v-model="idinfo">
    <van-button @click="idbtn" class="idbtn" type="info">确定</van-button>
  </div>
</van-popup>

</div>
</template>

<script>
import { Uploader,Popup,Button  } from 'vant'
import { Toast } from 'vant'
export default {
  components:{
    [Uploader.name]:Uploader,
    [Popup.name]:Popup,
    [Button.name]:Button,
    [Toast.name]:Toast
  },
  data(){
    return{
      face:'',
      noface:'',
      nameflag:false,
      idflag:false,
      name:'',
      idinfo:''
    }
  },
  methods: {
    afterReadface({content}) {
      this.face = content;
    },
    afterReadnoface({content}){
      this.noface = content;
    },
    nextAction(){
      let idinfo = {};
      //路由回退时保证界面还可以显示数据
      // this.face = this.face || this.$store.state.credit.idinfo.identityCardF;
      // this.noface = this.noface || this.$store.state.credit.idinfo.identityCardF;
      // this.name = this.name || this.$store.state.credit.idinfo.cname;
      // this.idinfo = this.idinfo || this.$store.state.credit.idinfo.identityCardNumber;
      if(this.face && this.noface && this.name && this.idinfo ){
        idinfo.identityCardF = this.face;
        idinfo.identityCardR = this.noface ;
        idinfo.cname = this.name;
        idinfo.identityCardNumber = this.idinfo;

        // 跳转下一个，并存储数据到仓库
        this.$router.push({name:'infomation'});
        this.$store.commit('credit/changeActive',0);
        this.$store.commit('credit/changeSaveinfolist',idinfo);

      }else{
        Toast('请输入完整！');
      }
    },
    namebtn(){
      this.nameflag = false;
    },
    showName(){
      this.nameflag = true;
    },
    idbtn(){
      this.idflag = false;
    },
    showId(){
      this.idflag = true;
    }
  },
  //路由回退时保证界面还可以显示数据
  created(){
      this.face = this.$store.state.credit.saveinfolist.identityCardF;
      this.noface = this.$store.state.credit.saveinfolist.identityCardF;
      this.name = this.$store.state.credit.saveinfolist.cname;
      this.idinfo = this.$store.state.credit.saveinfolist.identityCardNumber;
  }
}
</script>
<style lang="scss" scoped>
#idcard{
  width: 100%;
  .next{
    position: absolute;
    left: 50%;
    top: 550px;
    width: 60%;
    transform: translateX(-50%);
    height: 80px;
    font-size: 36px;
    border-radius: 40px;
  }
  .idcar{
    width: 100%;
    height: 500px;
    background-color: #fff;
    position: relative;
    .info{
      position: absolute;
      width: 100%;
      top: 300px;
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
    .face{
      position: absolute;
      top: 20px;
      left: 0;
      width: 50%;
      span{
        position: absolute;
        top: 135px;
        left: 175px;
        font-size: 40px;
        color: #ccc;
      }
      p{
        font-size: 28px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      img,.car{
        position: absolute;
        width: 300px;
        height: 200px;
        // opacity: 0;
        left: 40px;
        top: 60px;
      }
      .car{
        opacity: 0;
      }
      img{
        border: 1px dashed #ccc;
      }
    }
    .noface{
      position: absolute;
      top: 20px;
      right: 0;
      width: 50%;
      span{
        position: absolute;
        top: 135px;
        left: 140px;
        font-size: 40px;
        color: #ccc;
      }
      p{
        font-size: 28px;
        height: 40px;
        line-height: 40px;
        text-indent: 60px;
      }
      img,.car{
        position: absolute;
        width: 300px;
        height: 200px;
        top: 60px;
      }
      .car{
        opacity: 0;
      }
      img{
        border: 1px dashed #ccc;
      }
    }
  }
  .nameflag,.idflag{
    width: 80%;
    height: 200px;
    border-radius: 20px;
    input{
      width: 100%;
      height: 80px;
      text-align: center;
      font-size:28px;
    }
    .namebtn,.idbtn{
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
