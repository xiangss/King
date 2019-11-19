<template>
<div class="page subpage " id="lend">
  
  <header1/>
     
     <div class="jie">
         <input type="text" ref="ipt1"   class="ipt1" placeholder="请输入金额">
     </div>
  
  
  <button class="comfire" @click="comfireAction">确认</button>

</div>
</template>

<script>
   import header1 from './components/header1';
   import { Toast } from 'vant';

export default {
 
        components: {
            header1,
            Toast,
          },
          data(){
            return{
            message1:"",
             message2:"",
            
          }
          props:{
           
          }
  },
  
  methods:{
    comfireAction(){
        var money2=parseInt(this.$refs.ipt1.value);
        if(money2>0&&money2<=this.$store.getters.canBorrow){
            
            this.$store.commit('getMoney',money2); 
             this.$store.commit('setBorrowed',money2);
              this.$store.commit('setHaveBorrow',true);
            console.log(this.$store.state.userMoney);
             console.log(this.$store.state.borrowed);
              console.log(this.$store.getters.canBorrow);
               console.log(this.$store.state.borrowedMoney);
            
            this.$refs.ipt1.value='';

            Toast.success('借钱成功');
           
        }
        else if(money2>this.$store.getters.canBorrow){
           
             Toast.fail('金额太大哦');
        }
         else if(money2=='0'){
             Toast.fail('不能为0哦');
        }
        else{
           Toast.fail('还没输入呢');
        }

    }


  }


}
</script>

<style lang="scss" scoped>
  
 #lend{
  z-index: 60;
  background-color:white;
  width:100%;
  .jie{
    margin-top: 88px;
    height:464px;
    background-color: #F8984E;
    overflow: hidden;
    .ipt1{
        width:500px;
        height:80px;
        text-align: center;
        outline: none;
        border:none;
        background-color: #F8984E;
        border-bottom: 10px solid white;
        margin:210px 0 0 110px ;
        font-family:PingFang SC;
        font-size: 50px;
    }
    
  }
  .comfire{
        width:490px;
        height:88px;
        background:#F8984E;
        border-radius:44px;
        font-size:32px;
        font-family:PingFang SC;
        font-weight:500;
          margin: 0 auto;
        margin-top: 320px;
        color:rgba(255,255,255,1);
        border:none;
        outline:none;
        display: block; 
        text-align: center;

  }

  .Toast{
      width:500px;
      height: 500px;
  }
}
   

</style>