<template>
  <div class="page-wrap">
      <div class="header border-bottom">
          <div class="back" @click="back"><img src="../../../../assets/icon_fhs.png" alt=""></div>
          <div class="title">评价拿奖励</div>
      </div>

      <div class="pic">
          <img src="../../../../assets/borrow-5.png" alt="">
          <p>写评价，有机会最高拿<span>20元奖励金</span></p>
      </div>

      <!-- 评价项目 -->
      <app-scroll class="content">
          <ul>
              <li class="border-bottom" v-for="(item,index) in orderList" :key="index">
                  <img src="../../../../assets/logos.png" alt="">
                  <span class="company">{{item.info.company}}</span>
                  <span class="rate">产品的利润:<span class="rates">{{item.info.annRate}}</span></span>
                  <div class="btn"><span>我要评价</span></div>
              </li>
          </ul>
      </app-scroll>

    
     
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    components:{
        [Toast.name]:Toast
    },
    data() {
        return{
            orderList:[],
        }
    },
    filters:{
    
    },
    computed:{
        
    },
    methods:{
        back(){
            this.$router.back();
        },
    },
    created(){
        // 获取申请过的产品
        this.orderList = this.$store.state.product.allProduct
        console.log(this.orderList);
    }
}
</script>

<style scoped lang="scss">
.header{
    width:750px;
    height:130px;
    // background:rgba(248,152,78,1);
    overflow: hidden;
    .back{
        width: 44px;
        height: 44px;
        float: left;
        img{
            width: 44px;
            height: 44px;
            margin: 60px 0 0 19px;
            z-index: 150;
        }
    }
    .title{
        margin: 66px auto;
        width:180px;
        height:30px;
        font-size:32px; 
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:25px;
    }
}
.pic{
    position: relative;
    img{
        width: 100%;
        height: 50px;
    }
    p{
        position: absolute;
        top: 13px;
        left: 187px;
        width:377px;
        height:25px;
        font-size:24px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:25px;
        span{
            color: #E63F3F;
        }
    }
}
.content{
    top: 200px;
    ul{
        position: relative;
        li{
            overflow: hidden;
            height: 178px;
            width: 100%;
            img{
                width: 60px;
                height: 60px;
                position: absolute;
                top: 47px;
                left: 30px;
            }
            .company{
                width:250px;
                height:27px;
                font-size:28px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:25px;
                position: absolute;
                top: 45px;
                left: 115px;
            }
            .rate{
                position: absolute;
                top: 86px;
                left: 115px;
                font-size:24px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:25px;
                .rates{
                    color: #E63F3F;
                    font-size: 35px;
                }
            }
            .btn{
                width:131px;
                height:50px;
                border:2px solid rgba(248,152,78,1);
                border-radius:25px;
                line-height: 50px;
                text-align: center;
                position: absolute;
                top: 46px;
                right: 30px;
                span{
                    width:98px;
                    height:23px;
                    font-size:24px;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(248,152,78,1);
                    line-height:25px;
                }
            }
        }
    }
}
</style>