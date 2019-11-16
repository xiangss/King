<template>
   <div class="page" id="home">
       <!-- //登录前首页 -->
        <div class="loginhome" v-if="hasLogin">
            <div class="content1">
                <h1 class="title">王者闪贷</h1>
                <div class="bar">
                <img src="../../../assets/jt.png" alt="">
                </div>
                
                <div class="steps">
                <van-notice-bar  class="adve" text="桂林 葛女士（尾号6952）获得额度45000元" left-icon="volume-o"/>
                <!-- <van-notice-bartext v-text="message" class="adve" left-icon="volume-o"/> -->
                <h2 v-text="message1" class="money"></h2>
                <div class="prog">
                    <dl class="pic">
                    <dt>
                    <img src="../../../assets/icon_ssjh.png" alt="">
                    </dt>
                    <dd>随时借还</dd>
                    </dl>
                    <dl class="pic">
                    <dt>
                    <img src="../../../assets/icon_smsp.png" alt="">
                    </dt> 
                    <dd>三秒审批</dd>
                    </dl>
                    <dl class="pic">
                    <dt>
                    <img src="../../../assets/icon_wfz.png" alt="">
                    </dt> 
                    <dd>五分钟到账</dd>
                    </dl>
                </div>
                
                <button v-text="message2" class="borrow" @click="borrowAction"></button>
                
                </div>
            </div>
            <div class="shen">
                <img src="../../../assets/banner.png" alt="">
            </div>
            <p v-text="message3" class="label"></p>
    </div>




        <!-- //登录后首页-------------------------------- -->
        <div class="loginedHome" v-if="isLogin">
                <div class="head1">
                    <div class="location">
                    <!-- <van-area :area-list="areaList" :columns-num="2" title="标题" />
                    <van-icon name="arrow-down" /> -->
                    </div>
                    <input type="text" placeholder="小赢卡贷" class="search">
                </div>
                <div class="robot">
                    <dl>
                        <dt>
                        <img src="../../../assets/znzs.png" alt="">
                        </dt>
                        <dd v-text="message4">
                        </dd>
                    </dl>
                    <ul class="work1">
                    <li>
                        <span>
                            <img src="../../../assets/icon_hmd.png" alt=""> 
                        </span>
                        <span>
                            黑名单检测
                        </span>
                    </li> 
                    <li>
                        <span>
                            <img src="../../../assets/icon_djd.png" alt=""> 
                        </span>
                        <span>
                            大家都在借
                        </span>
                    </li> 
                    <li>
                        <span>
                            <img src="../../../assets/icon_fkyj.png" alt=""> 
                        </span>
                        <span>
                            反馈与建议
                        </span>
                    </li> 
                    </ul>
                </div>

                <ul class="work2">
                    <li>
                        <span>
                            <img src="../../../assets/icon_hy.png" alt=""> 
                        </span>
                        <span>
                            钻石会员
                        </span>
                    </li> 
                    <li>
                        <span>
                            <img src="../../../assets/icon_hmdjc.png" alt=""> 
                        </span>
                        <span>
                            黑名单检测
                        </span>
                    </li> 
                    <li>
                        <span>
                            <img src="../../../assets/icon_bjfx.png" alt=""> 
                        </span>
                        <span>
                            被拒分析
                        </span>
                    </li> 
                    <li>
                        <span>
                            <img src="../../../assets/icon_cdtjd.png" alt=""> 
                        </span>
                        <span>
                            查多头借款
                        </span>
                    </li> 
                    <li>
                        <span>
                            <img src="../../../assets/icon_xyk.png" alt=""> 
                        </span>
                        <span>
                            行用卡
                        </span>
                    </li> 
                    
                </ul>

                <button  class="borrow2" @click="borrwAction">立即借钱</button>
                <div class="find">
                    <div class="black">
                        <img src="../../../assets/banner_bj.png" alt=""> 
                    </div>
                    
                
                </div>
            <router-view></router-view>
       </div>
  </div>



  
</template>

<script>
  import { Area } from 'vant';
   import { Icon } from 'vant';
   import { NoticeBar } from 'vant';
   
export default {
  components: {
    [Area.name]: Area,
   [Icon .name]:Icon ,
     NoticeBar,

   }, 
  
  data(){
    return{
        message1:"200000",
        message2:'立即借钱',
        message3:'无需手续费，咨询费不向学生提供服务',
        message4:"你还需要什么帮助尽管来找我吧",
        isLogin:0,
         hasLogin:1,
        
         } 
    },
  mounted(){
          this.isLogin=this.$store.state.isLogin;
          this.hasLogin=!(this.$store.state.isLogin);
          console.log( this.hasLogin);
          
  
    },
  methods:{
    borrwAction(){
      this.$router.push(`/home/quota`)  
    },
    borrowAction(){
      this.$router.push(`/mine/login`)  
    }


  }

}
</script>

<style lang="scss" scoped>
   
//    登录前首页
#home{
     width:100%;
    .loginhome{
      position: absolute;
      top:0;
      background:linear-gradient(0deg,rgba(215,215,215,1),rgba(244,244,244,1),rgba(248,152,78,1),rgba(248,152,78,1));
      overflow: hidden;
      bottom: 0;
      .content1{
        width:100%;
        position:relative;
        height:728px;
        overflow: hidden;
        
        .title{
              margin-top: 72px;
              width:100%;
              height:30px;
              font-size:32px;
              font-family:PingFang SC;
              font-weight:500;
              color:rgba(255,255,255,1);
              line-height:25px;
              text-align: center;
        }
        .bar{
          width:686px;
          height:24px;
          position:absolute;
          left:50%;
          margin-left: -343px;
          top:128px;
          img{
              width:686px;
              height:24px;
          }
        }
        .steps{
            width:638px;
            height:580px;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.1);
            border-radius:0px 0px 20px 20px;
            margin:0 auto ;
             position:absolute;
            left:50%;
            margin-left: -319px;
            top:142px;
            z-index: 30;
            background-color:white;
           .adve{
                
                margin: 35px 0 0 14px;
                background-color:white;
                color:black;
        
         
            }
           
            h2{
              height:63px;
              font-size:80px;
              font-family:PingFang SC;
              font-weight:bold;
              color:rgba(51,51,51,1);
              line-height:25px;
              text-align: center;
              margin-top: 72px;
            }
          .prog{
              margin-top: 63px;
              width: 100%;
              .pic {
                  
                  margin-right: 58px;
                  
                  float: left;
                  &:nth-of-type(1){
                    margin-left: 70px;
                  }
                 
                  dt{
                      margin:0 auto;
                      width:88px;
                      height: 88px;
                      border:1px dashed black;
                      margin-bottom: 16px;
                      img{
                        width:88px;
                        height:88px;
                      }
                  }
                  dd{
                    font-size:22px;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:25px;
                    // background-color: orange;
                  }
                
              }
       
          } 
          .borrow{
            width:490px;
            height:88px;
            background:#F8984E;
            border-radius:44px;
            font-size:32px;
            font-family:PingFang SC;
            font-weight:500;
             margin: 0 auto;
            margin-top: 263px;
            color:rgba(255,255,255,1);
            border:none;
            outline:none;
            display: block; 
            text-align: center;
            
            
          }
        
        }
      }  
      
      
      .shen{
        margin-top: 44px;
        width:100%;
        height:198px;
        background-color: red;
        border:1px dashed black;
        img{
          height:198px;
          width:100%;
        }
      }
      .label{
        margin: 171px auto 0;
        width:399px;
        height:47px;
        font-size:22px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:26px;
        text-align: center;
        
      }
    }
   
   
   
   
//    登录后
    .loginedHome{
        overflow: hidden; 
        position: absolute;
        top:0;
              
        background: url(../../../assets/banner_pic.png) no-repeat left top;
        background-size: 750px 409px;
        overflow: hidden;
        .head1{
            height:60px;
            margin-top: 54px;
            .location{
                // width:140px;
                // height:54px;
            }
            .search{
                margin-left: 130px;
                background:rgba(255,255,255,1);
                border-radius:12px;
                width:470px;
                height:60px;
            }

        }
        .robot{
            overflow: hidden;
            margin: 236px 30px 0 30px;
            width:690px;
            height:264px;
            background-color: white;
            box-shadow:0px 0px 16px 0px rgba(0, 0, 0, 0.16);
            border-radius:12px;
            dl{
                width:100%;
                height: 103px;
                margin-top: 14px;
                dt{
                    width:76px;
                    height:103px;
                    margin-left: 41px;
                    float:left;
                    img{
                        width:76px;
                        height:103px;
                    }

                }
                dd{
                    margin:29px 0 20px 9px;
                    width:454px;
                    height:54px;
                    background:rgba(244,244,244,1);
                    border-radius:27px;
                    font-size:24px;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(18,150,219,1);
                    line-height: 54px;
                    float:left;
                    text-align: center;
                }
            }
            .work1{
                display: flex;
                width:100%;
                height:122px;
                margin-top: 25px;
                
                li{
                    flex:1;
                   display: flex;
                   flex-direction: column;
                   height:122px;
                   span{
                       flex:1;
                       display: flex;
                       text-align: center;
                       justify-content: center;
                       &:nth-of-type(1){
                         text-align: center;
                          img{
                           width:41px;
                           height:43px;
                           display: block;
                          }
                       }
                   }
                  
                }
            }
        
        }
        .work2{
            height:134px;
            width:100%;
            display: flex;
            margin-top: 50px;
            li{
                flex:1;
                display: flex;
                flex-direction: column;
                span{
                    display: flex;
                    justify-content: center;
                    flex:1;
                }
            }
        }
        .borrow2{
           width:490px;
            height:88px;
            background:#F8984E;
            border-radius:44px;
            font-size:32px;
            font-family:PingFang SC;
            font-weight:500;
             margin: 0 auto;
            margin-top: 56px;
            color:rgba(255,255,255,1);
            border:none;
            outline:none;
            display: block; 
            text-align: center;  
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
                border:1px dashed black;
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
                margin-left: 115px;
                margin-top: 60px;
            }

        }

    }
}   
</style>