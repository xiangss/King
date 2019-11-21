<template>
<div class="page subpage " id="repayment">
    <!-- 未借钱还款页面 -->
  <div class="noBorrow" v-if="noBorrow">
        <header1/>
        <dl class="bills">
            <dt>
                <img src="../../../../assets/pic_qs.png" alt="">
            </dt>
            <dd>亲，你还没有账单哦!</dd>
        </dl>
        <button  class="borrows" @click="borrwsAction">去借钱</button>
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
                                省份证号
                            </span>
                            <span v-text="message3">
                            </span>
                        </li>
                            <li>
                            <span>
                                手机号
                            </span>
                            <span v-text="message4">
                            </span>
                        </li>
                    </ul> 
                    <button class="btn1" @click="borrwqAction">查一查是否上黑名单</button> 
                    

                
                </div>
        <router-view></router-view>
  </div>   

 <!-- 有借钱还款页面 -->
 <div class="hasborrowed" v-if="hasborrowed">
       <header1/>
        <div class="bill">
            <div class="bg1">
                <img src="../../../../assets/pic_qs.png" alt="">
            </div>
            <input type="text" ref="ipt2"   class="ipt2" placeholder='输入还款金额'>
        </div>
    
    
        <button class="sure" @click="sureAction">确认</button>
 </div>
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
              message2:'',
              message3:'',
              message4:'',
              noBorrow:1,
              hasborrowed:0,
              
            }
    },
    mounted(){
            if(this.$store.state.borrowed>0){
                this.noBorrow=0;
                    this.hasborrowed=1;
                }
                else{
                    this.noBorrow=1;
                    this.hasborrowed=0;
                }
            
    },
    created(){
      this.message2=this.$store.state.credit.userinfolist&&this.$store.state.credit.userinfolist.cname;
      this.message3=this.$store.state.credit.userinfolist&&this.$store.state.credit.userinfolist.identityCardNumber;
      this.message4=this.$store.state.credit.userinfolist&&this.$store.state.credit.userinfolist.ftel;
      
  },

  
   methods:{
            borrwqAction() {
               this.$router.push(`/home/check`);
             },     
            borrwsAction(){
                        this.$router.push(`/home/quota`)  
                    },
        
            sureAction(){
                this.litter=this.$store.state.borrowed;
                var money3=parseInt(this.$refs.ipt2.value);
                console.log(money3);
                console.log(this.$store.state.borrowed)
                if(money3<=this.$store.state.borrowed&&money3>0){
                        if(money3<=this.$store.state.userMoney)
                        //修改还款后仓库剩余借的钱
                        {this.$store.commit('setShenYu',money3); 
                        //修改还款后仓库账户余额
                        this.$store.commit('setMyMoney',money3);
                            
                        console.log(this.$store.state.userMoney);
                        console.log(this.$store.state.borrowed);
                        console.log(this.$store.getters.canBorrow);
                        
                        this.$refs.ipt2.value='';
                        var litt=this.$store.state.borrowed;

                        Toast.success('还钱成功');
                        setTimeout(() => {
                        Toast.success('剩余待还:'+litt);  
                        },3000)
                        }

                        else{
                            Toast.fail('需要先充值哦');
                        }

                }
                else if(money3==0){
                    Toast.fail('金额不能为0哦   ')
                }
                else if(money3>this.$store.state.borrowed)
                {
                    
                    Toast.fail('还太多了哦');
                }
            }

        
   }

}
</script>

<style lang="scss" scoped>
#repayment{
    width:100%;
    //    未借款时还款页面css------------------------
   .noBorrow{
        z-index: 65;
        background-color:#F8F8F8;
        width:100%;
        overflow: hidden;
        .bills{
            width:100%;
            height:464px;
            background-color:white;
            overflow: hidden;
        
            margin-bottom: 16px;

            dt{
                width:298px;
                height:192px;
                margin:160px 226px 0 226px;
                img{
                width:298px;
                height:192px;
                }
            }
            dd{
                margin-top: 31px;
                font-size:24px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:25px; 
                text-align: center;
                
            }
            
        }
        .borrows{
                width:490px;
                height:88px;
                background:#F8984E;
                border-radius:44px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:500;
                margin: 0 auto;
                margin-top: 30px;
                color:rgba(255,255,255,1);
                border:none;
                outline:none;
                display: block; 
                text-align: center;
                margin-bottom: 42px;  
        }
        .find{
            margin-top:16px;
            width:630px;
            padding:0 30px;
            margin:16px 30px 0 30px; 
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
                    height:90px;
                    background-color: white;
                    border-bottom:2px solid rgba(238,238,238,1);
                    span{
                        font-size:26px;
                        font-family:PingFang SC;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:90px;
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


   //    未借款时还款页面css------------------------
  .hasborrowed{
        z-index: 60;
        background-color:#F8F8F8;
        width:100%;
        .bill{
            margin-top:120px;
            height:464px;
            background-color: #F8984E;
            overflow: hidden; 
            border-bottom: 10px solid #999;
            .bg1{
                margin-left: 210px;
                margin-top: 90px;
                width:298px;
                height:192px;
                img{
                    width:298px;
                    height:192px;
                }
            }
            .ipt2{
                
                width:500px;
                height:80px;
                text-align: center ;
                outline: none;
                border:none;
                background-color: #F8984E;
                border-bottom: 10px solid white;
                margin:5px 0 0 110px ;
                font-family:PingFang SC;
                font-size: 50px;
            }
            
        }
        .sure{
                width:490px;
                height:88px;
                background:#F8984E;
                border-radius:44px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:500;
                margin: 0 auto;
                margin-top: 260px;
                color:rgba(255,255,255,1);
                border:none;
                outline:none;
                display: block; 
                text-align: center;

        }
    }
   
}
</style>