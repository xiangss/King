<template>
<div id="userinfo">
  <div class="ttop">
    <van-icon @click="btnbackAction" class="btnback" name="arrow-left" />
    <p class="title">个人信息</p>
  </div>
  <app-scroll class="content">
   <Userinfomation :infolist="userinfomation"></Userinfomation>
   <div class="changeBtn">
     <van-button @click="editAction" class="editbtn" type="warning">修改</van-button>
    <van-button @click="deleteAction" class="deletebtn" type="danger">删除</van-button>
  </div>
  </app-scroll>
  <van-popup class="yes" v-model="show">
    <p>你确定要删除吗？</p>
    <div class="btn">
      <van-button @click="exitAction" class="yesbtn" type="info">取消</van-button>
      <van-button @click="yesbtnAction" class="yesbtn" type="danger">确定</van-button>
    </div>
  </van-popup>
</div>
</template>

<script>
import Userinfomation from '../../components/userinfomation'
import { Button ,Popup,Toast  } from 'vant';
export default {
  components:{
    Userinfomation,
    [Button.name]:Button,
    [Popup .name]:Popup,
    [Toast.name]:Toast 
  },
  data(){
    return{
      userinfomation:{

      },
      show: false
    }
  },
  methods:{
    btnbackAction(){
      this.$router.back();
    },
    deleteAction(){
      this.show = true;
    },
    editAction(){
      this.$router.push({name:'edituserInfo'})
    },
    exitAction(){
      this.show = false;
    },
    async yesbtnAction(){
      this.show = false;
      await this.$store.dispatch('credit/deleteInfomation');
      if(this.$store.state.credit.code == 0){
        Toast('删除成功！');
        this.$store.commit('credit/changeActive',-1);
        setTimeout(()=>{
          this.$router.push({name:'credit'});
        },2000);
      }else{
        Toast('出现异常!');
      }
    },
    async getInfomation(){
      await this.$store.dispatch('credit/requestInfomation');
    }
  },
  created(){
    this.getInfomation();
    console.log(this.$store.state.credit.userinfolist);
    this.userinfomation = {
      ...this.$store.state.credit.userinfolist
      };
      
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
  .yes{
    width: 60%;
    height: 15%;
    border-radius: 40px;
    p{
      margin-top: 20px;
      widows: 100%;
      height: 60px;
      font-size: 38px;
      text-align: center;
      line-height: 60px;
    }
    .btn{
      display: flex;
      .yesbtn{
        flex: 1;
        height: 60px;
        margin: 20px;
        font-size: 30px;
        border-radius: 20px;
      }
    }
  }
  .content{
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    .changeBtn{
      height: 150px;
      display: flex;
      .deletebtn,.editbtn{
        flex: 1;
        margin: 40px 40px;
        height: 80px;
        font-size: 36px;
        border-radius: 40px;
      }
    }
  }
  .ttop{
    width: 100%;
    height: 80px;
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
  }
 
}
</style>
