<template>
<div class="page subpage " id="quota">
  
  <header1/>
  
  <ul class="qian">
    <li >你可以借:</li>
    <li  v-text="message1" ></li>
    <li>总额度:</li>
    <li v-text="message2"></li>
  </ul>
  <button class="qu" @click="quAction">下一步</button>
   <router-view></router-view>
</div>
</template>

<script>
   import header1 from './components/header1';

export default {
 
        components: {
            header1
          },
          data(){
            return{
            message1:"",
             message2:"",
            
          }
          props:{
           
          }
  },
  mounted(){
      // var credit = JSON.parse(localStorage.getItem('credit'));
     
      
      var credit=this.$store.state.credit.mark;
        console.log(this.$store.state.credit.mark);
        for(var i=0;i<this.$store.state.blackList.length;i++){
           if(this.$store.state.credit.userinfolist.identityCardNumber==this.$store.state.blackList.length[i]){
             credit=0;
              this.$store.commit('isBlackList',1); 
           }

        };
         
        console.log(credit);
        
       var total = parseInt((credit) / 100) * 15000;
          this.$store.commit('setAllMoney',total); 
          console.log(this.$store.state.allmoney);
            this.message2= this.$store.state.allmoney;
  },
  
  updated(){
     this.message1=this.$store.getters.canBorrow;

  },
  methods:{
    quAction(){
      this.$router.push(`/home/quota/lend`)  
    }

  }


}
</script>

<style lang="scss" scoped>
  
 #quota{
  
  width:100%;
  .qian{
    margin-top: 88px;
    height:464px;
    background-color: #F8984E;
    overflow: hidden;
    li{
      width:100%;
      color:white;
      &:nth-of-type(1){
        margin-top: 80px;
        margin-left: 60px;
        font-size: 20px;
        line-height: 60px;
        font-family:PingFang SC;
      }
      &:nth-of-type(2){
         font-size: 80px;
         font-weight: 800;
         margin-left: 270px;
         line-height: 120px;
         font-family:PingFang SC;
      }
      &:nth-of-type(3){
        margin-top: 80px;
        margin-left: 60px;
        font-size: 20px;
        line-height: 60px;
        font-family:PingFang SC;
      }
      &:nth-of-type(4){
         font-size: 40px;
         font-weight: 600;
         margin-left: 270px;
         font-family:PingFang SC;
      }

    }
    
    
  }
  .qu{
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

  
}
   

</style>