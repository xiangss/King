<template>
    <div class="page subpage " id="check">
    
       <header1/>
    
        <div class="find">
                <div class="black">
                    <img src="../../../../assets/banner_bj.png" alt=""> 
                </div>
                <ul class="info1">
                    <li>
                        <span>
                            姓名
                        </span>
                        <span v-text="message2">
                        </span>
                    </li>
                        <li>
                        <span>
                            身份证号
                        </span>
                        <span v-text="message3">
                        </span>
                    </li>
                        <li>
                        <span>
                            电话号码
                        </span>
                        <span v-text="message4">
                        </span>
                    </li>
                </ul> 
                <button class="btn1" @click="checkAction" >查询</button> 
            
            
        </div>   

    
    </div>
</template>

<script>
   import header1 from './components/header1';
   import { Toast } from 'vant';

export default {
 
        components: {
            header1,
            Toast
          },
          data(){
            return{
           
             message2:"",
              message3:"",
                message4:"",
            
          }
          props:{
           
          }
        },
  created(){
      this.message2=this.$store.state.credit.userinfolist&&this.$store.state.credit.userinfolist.cname;
      this.message3=this.$store.state.credit.userinfolist&&this.$store.state.credit.userinfolist.identityCardNumber;
      this.message4=this.$store.state.credit.userinfolist&&this.$store.state.credit.userinfolist.ftel;
      
  },
 
  updated(){
     this.message1=this.$store.getters.canBorrow;

  },
  methods:{
    quAction(){
      this.$router.push(`/home/quota/lend`)  
    },
    checkAction(){
        let flag = 0;
        var credit=this.$store.state.credit.mark;
        for(var i=0;i<this.$store.state.blackList.length;i++){
           if(this.$store.state.credit.userinfolist.identityCardNumber==this.$store.state.blackList.length[i]){
             credit=0;
             flag = 1;
              this.$store.commit('isBlackList',1); 
               setTimeout(() => {
                
                Toast.fail('你已进入黑名单');  
            }, 500);
            return;
           }else{
              flag = 0;
           }

        };
        if(flag == 0){
            setTimeout(() => {
                
                Toast.fail('您未进黑名单');  
            }, 500);
        }
        // if(this.$store.state.forbid=1){
        //     setTimeout(() => {
                
        //         Toast.fail('你已进入黑名单');  
        //     }, 500);
        // }
    }

  }


  }
</script>

<style lang="scss" scoped>
  #check{
        
        width:100%;
        background-color:#F8984E ;
        overflow: hidden;
       .find{
            width:630px;
            padding:0 30px;
            margin:16px 30px 0 30px; 
            margin-top: 120px;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius:12px;
            overflow: hidden;
            background-color: white;
            .black{
                width:630px;
                height:180px;
                
                margin-top: 41px;
                // border:1px dashed black;
                img{
                    width:630px;
                    height:180px;
                    
                }
            }
            .info1{
                width:630px;
                li{
                    width:630px;
                    height:120px;
                    background-color: white;
                    border-bottom:2px solid rgba(238,238,238,1);
                    span{
                        font-size:26px;
                        font-family:PingFang SC;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:120px;
                        &:nth-of-type(1){
                            float:left;
                        }
                        &:nth-of-type(2){
                            float:right;
                        }
                    }
                }
            }
            .btn1{
                text-align: center;
                width:400px;
                height:60px;
                border:2px solid rgba(248,152,78,1);
                border-radius:30px; 
                font-size:28px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(248,152,78,1);
                line-height:25px;
                background-color: white;
                margin:15px 115px 20px 115px;
                
            }

                
        }
    }



   

</style>