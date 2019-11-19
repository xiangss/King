<template>
  <div class="page-wrap">
      <div class="header">
          <div class="back" @click="back"><img src="../../../assets/icon_fh.png" alt=""></div>
          <div class="title">{{datas.company}}</div>
      </div>

      <!-- 详情 -->
      <div class="detail">
          <div class="shang">
              <div class="item">
                <span class="num">{{datas.equMoney}}</span>
                <span class="font">平均放宽金额</span>
              </div>
              <div class="item">
                <span class="num">{{datas.annRate}}</span>
                <span class="font">综合年利率</span>
              </div>
              <div class="item">
                <span class="num">{{datas.equDropMoneyTime}}</span>
                <span class="font">平均放款时间</span>
              </div>
          </div>

          <div class="xia">
              <div class="item">
                <span class="num">{{datas.moneyLimit}}</span>
                <span class="font">额度</span>
              </div>
              <div class="item">
                <span class="num">{{datas.timeLimit}}</span>
                <span class="font">期限</span>
              </div>
          </div>
      </div>

      <!--  -->
      <div class="gonglue  border-bottom">
          <span class="one">攻略</span>
          <span class="two">申请技巧及注意事项</span>
      </div>

      <!-- 评价 -->
      <div class="assess">
          <div><p>申请资料</p></div>
          <ul>
              <li class="border-bottom">
                  <span class="left lefts">基本资料</span>
                  <span class="right" >已完成</span>
              </li>
              <li class="border-bottom">
                  <span class="left">手机号</span>
                  <span class="right" >18270760103</span>
              </li>
              <li class="border-bottom">
                  <span class="left">姓名</span>
                  <span class="right" >张三</span>
              </li>
              <li class="border-bottom">
                  <span class="left">身份证</span>
                  <span class="right" >360727199708250015</span>
              </li>
              <li class="border-bottom">
                  <span class="left">职业</span>
                  <span class="right" >工薪族</span>
              </li>
          </ul>
      </div>


      <!-- 收藏、、申请 -->
      <div class="footer">
          <div class="left">
              <img :src="picSrc" alt="" ref="pic" @click="collect(datas.cId)">
              <span>收藏</span>
          </div>
          <div class="right">
              <span @click="applicationAction(datas.cId,status)">提交申请</span>
          </div>
      </div>
  </div>
</template>

<script>
import Http from '../../../utils/Http'
import api from '../../../utils/api'
import picA from '../../../assets/icon_scs.png'
import picB from '../../../assets/icon_sc.png'
import { Toast } from 'vant';
export default {
    components:{
        [Toast.name] : Toast
    },
    props:{
        id:String,
        datas:Object
    },
    data(){
        return{
            picPath:"../../../assets/icon_scs.png",
            picFlag:false,
            status:1
        }
    },
    computed:{
        picSrc(){
           if(!this.picFlag){
               this.picPath = picA
           }else{
                 this.picPath= picB
           }
           return this.picPath;
        }
    },
    methods:{
        async request(){
            const result = await this.$store.dispatch('product/requestCompanyDetail',{cId:this.id});
            this.datas = result.data;
            console.log(this.datas);
        },
         // 点击返回
        back(){
            this.$router.back();
        },
        // 点击收藏
        collect(cId){
            // console.log(888);
            const flag = this.$store.state.isLogin;
            // const flag = true;
            if(!flag){
                Toast('亲，先去登录借钱哦');
                return
            }
            
                Http.post(api.ADD_ORDER_API,{cId,statues:3})
                .then((result)=>{
                    console.log(result);
                    
                    if(result.data.code == -1){
                    Toast('请先登录');
                }else if(result.data.code == 0){
                    console.log(999);

                    Toast('收藏成功');
                    // 将申请成功获得产品信息存入仓库
                    // this.$store.commit('product/setProduct',result.data.data[0])
                    // 改变图片的样式
                    this.picFlag = !this.picFlag
                    this.$store.dispatch('product/requestOrderList')
                }
                })
                .catch((error)=>{
                    Toast('收藏失败')
                    console.log(error);
                })
        },
        // 提交申请
        applicationAction(cId,status){
            // 根据标识判断有没有登录
            const flag = this.$store.state.isLogin;
            // const flag = true;
            if(!flag){
                Toast('亲，先去登录借钱哦');
                return
            }
            Http.post(api.ADD_ORDER_API,{cId,statues:1})
            .then((result)=>{
                console.log(result);
                if(result.data.code == -1){
                    Toast('请先登录');
                    console.log(1);
                    
                }else if(result.data.code == 0){
                    console.log(2);
                    Toast('申请成功');
                    // 将收藏成功获得产品信息存入仓库
                    // this.$store.commit('product/setProduct',result.data.data[0])
                    this.$store.dispatch('product/requestOrderList')
                }
            })
            .catch((error)=>{
                Toast('申请失败')
                console.log(1);
                console.log(error);
            })
        }

    },
    created(){
        this.request();
               
    },  
        
}
</script>

<style scoped lang="scss">
.header{
    width:750px;
    height:418px;
    background:rgba(248,152,78,1);
    overflow: hidden;
    .back{
        width: 44px;
        height: 44px;
        float: left;
        img{
            width: 44px;
            height: 44px;
            margin: 60px 0 0 19px;
        }
    }
    .title{
        margin: 66px auto;
        width:200px;
        height:30px;
        font-size:32px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:25px;
    }
}
.detail{
    width:690px;
    height:286px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius:12px;
    margin: 0 auto;
    margin-top: -238px;
    .shang,.xia{
        width:690px;
        height:143px;
        display: flex;
        .item{
            flex: 1;
            display: flex;
            flex-direction: column;
            text-align: center;
            // line-height: 71.5px;
            .num{
                flex: 0.5;
                line-height: 71.5px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
            }
            .font{
                flex: 0.5;
                font-size:24px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
            }
        }
    }
}
.gonglue{
    width:749px;
    height:84px;
    background:rgba(255,255,255,1);
    line-height: 84px;
    // margin-top: 50px;
    .one{
        width:88px;
        height:44px;
        border:2px solid rgba(230,63,63,1);
        border-radius:12px;
        font-size:26px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(230,63,63,1);
        line-height:25px;
        margin: 0 41px 0 48px;
    }
    .two{
        width:323px;
        height:25px;
        font-size:26px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:25px;
    }
}
.assess{
    div{
        width:749px;
        height:84px;
        p{
            width:749px;
            height:84px;
            font-size:26px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:84px;
            text-align: center;
            border-bottom: 8px solid #F8984E;
        }
    }
    li{
        width:749px;
        height:84px;
        .left{
            float: left;
            font-size:26px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:84px;
            margin-left: 30px;
            &.lefts{
                font-size:28px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
            }
        }
        .right{
            float: right;
            font-size:24px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:84px;
            margin-right: 30px;
        }
    }
}
.footer{
    position: absolute;
    bottom: 0;
    width:750px;
    height:98px;
    background:rgba(248,152,78,1);
    box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    // overflow: hidden;
    .left{
        width:150px;
        height:98px;
        background:rgba(255,255,255,1);
        text-align: center;
        overflow: hidden;
        float: left;
        img{
            width: 44px;
            height: 44px;
            margin:  0 auto;
            margin-top: 15px;
        }
        span{
            width:39px;
            height:19px;
            font-size:20px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:25px;
        }
    }
    .right{
        width: 580px;
        height:98px;
        float: right;
        text-align: center;
        line-height: 98px;
        span{
            width:122px;
            height:29px;
            font-size:30px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:25px;
        }
    }
}
</style>