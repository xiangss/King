<template>
  <div class="page-wrap">
      <div class="header border-bottom">
          <div class="back" @click="back"><img src="../../../../assets/icon_fhs.png" alt=""></div>
          <div class="title">订单管理</div>
      </div>

      <!-- tab -->
      <van-tabs v-model="active">
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款"></van-tab>
        <van-tab title="已付款"></van-tab>
        <van-tab title="已收藏"></van-tab>
      </van-tabs>


      <!-- 订单的item -->
      <app-scroll class="content"> 
        <ul ref="ul" v-if="show">
            <li   v-for="(item,index) in showList" :key="index" ref="name" >
                <span class="flag"></span><span class="company">{{item.info.company}}</span>
                <span class="money">{{item.info.equMoney}}</span><span class="moneyname">产品价值</span>
                <span class="time">{{item.info.timeLimit}}</span><span class="timename">产品有效期</span>
                <span class="rate" v-if="active === 0 ||active === 1">{{item.info.annRate}}</span><span class="ratename" v-if="active === 0 ||active === 1">增值率</span>
                <div class="pay" @click="remove(item._id,item.info.equMoney)" v-if="active === 1">立即付款</div>
                <div class="pay pays"  v-if="active === 2">已付款</div>
                <span class="rate" v-if="active === 2">{{item | currency}}</span><span class="ratename" v-if="active === 2">到期后增值</span>
            </li>
        </ul>

        
      </app-scroll>

      <!-- 付款界面 -->
        <div class="payMoney" v-if="showPayMoney">
            <p>王者闪贷用户付款</p>
            <div class="detail">
                <div>
                    <span class="userMoney">{{getuserMoney}}</span>
                    <span class="usertitle">用户余额</span>
                </div>

                <div>
                    <span class="productMoney">{{item.productPrice}}</span>
                    <span class="productTitle">产品价格</span>
                </div>
            </div>

            <li>
                <span>{{item | buyaftermoney}}</span>
                <span>付款后用户余额</span>
            </li>

            <span class="btn" @click="payFor">立即付款</span>

            <span class="close" @click="close">×</span>
        </div>
  </div>
</template>

<script>
import { Tab, Tabs,Toast } from 'vant';
export default {
    components:{
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
        [Toast.name]:Toast
    },
    data() {
        return {
        active: 0,
        orderList:[],
        weifukuan:[],
        show:true,
        flag:'已付款',
        showPayMoney:false,
        borrowMoney:'',
        item:{
            userMoney:'',
            productPrice:'',
            id:''
        },
        // 账户余额不够的标识
        hardMoney:true
        };
    },
    filters:{
    // 计算到期后的利润
        'currency'(item){
        return '$' + (parseInt(item.info.equMoney) * parseInt(item.info.annRate));
        },
    // 计算购买后的账户余额
        'buyaftermoney'(item){
            if(item.userMoney - item.productPrice < 0){
                return '-' + item.userMoney - item.productPrice;
            }
            return item.userMoney - item.productPrice;
        }
    },
    computed:{
        showList(){
            if(this.active === 0){
                return this.orderList
            }
            return  this.orderList.filter(item=>{
                return item.statues == this.active
            })
            
        },
        // 用户余额
        getuserMoney(){
            return this.item.userMoney
        }
    },
    methods:{
        back(){
            this.$router.back();
        },
        // 点击立即付款，移除未付款，改变status的值
        remove(id,price){
            // 保存产品id的值
            this.item.id = id
            // 获取用户是否已经借钱的标识
            this.borrowMoney = this.$store.state.borrowMoney;
            console.log(this.borrowMoney);
            if(!this.borrowMoney){
                Toast('亲！请先去借钱哦');
                return
            }
            // 展示付款的界面
            this.showPayMoney = true;
            // 获取用户余额，产品的价格,整个item
            this.item.userMoney = this.$store.state.userMoney;
            this.item.productPrice = parseInt(price);
        },
        close(){
            this.showPayMoney = false;
        },
        payFor(){
            // 修改用户的余额
            if(this.item.userMoney - this.item.productPrice < 0){
                Toast('亲！余额不够哦，快去借钱吧')
                return
            }
            this.$store.commit('setMoney',this.item.productPrice)
            console.log(this.$store.state.userMoney);
            // 去仓库修改statues的值
            this.$store.commit('product/setStatues',this.item.id);
            // 关闭支付窗口
            this.showPayMoney = false;
            Toast('亲，支付成功哦')
        }

    },
    created(){
        this.orderList = this.$store.state.product.allProduct;
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
        width:130px;
        height:30px;
        font-size:32px; 
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:25px;
    }
}
.content{
    top: 240px;
    ul{
        li{
            width:690px;
            height:201px;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius:12px;
            margin: 0 auto;
            position: relative;
            margin-bottom: 35px;
            span{
                display: inline-block;
                position: absolute;
            }
            .flag{
                width: 36px;
                height: 36px;
                top: 25px;
                left: 28px;
                background: #F8984E;
                border-radius: 10px;
            }
            .company{
                width: 200px;
                height: 27px;
                top: 30px;
                left: 80px;
                font-size:28px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:25px;
            }
            .money{
                width: 97px;
                height: 25px;
                top: 99px;
                left: 29px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(230,63,63,1);
                line-height:25px;
            }
            .moneyname{
                width: 98px;
                height: 23px;
                top: 145px;
                left: 29px;
                font-size:24px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:25px;
            }
            .time{
                width: 150px;
                height: 27px;
                top: 99px;
                left: 291px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:25px;
            }
            .timename{
                width: 120px;
                height: 23px;
                top: 145px;
                left: 291px;
                font-size:24px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:25px;
            }
            .rate{
                width: 150px;
                height: 23px;
                top: 99px;
                left: 500px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgb(228, 31, 31);
                line-height:25px;
            }
            .ratename{
                width: 180px;
                height: 23px;
                top: 145px;
                left: 500px;
                font-size:32px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgb(236, 119, 24);
                line-height:25px;
            }
            .pay{
                position: absolute;
                top: 25px;
                right: 45px;
                width: 130px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                background: rgb(228, 31, 31);
                color: #ffffff;
                border-radius: 10px;
                font-family:PingFang SC;
                font-weight:500;
            }
            .pays{
                background: rgb(236, 128, 26);
            }
        }
    }
}
.payMoney{
    position: fixed;
    top: 50%;
    left: 50%;
    background: #F8984E;
    width: 530px;
    height: 620px;
    transform: translate(-50%,-50%);
    overflow: hidden;
    border-radius: 25px;
    text-align: center;
    p{
        width:100%;
        height:38px;
        font-size:38px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgb(255, 253, 253);
        line-height:38px;
        text-align: center;
        margin-top: 60px;
    }
    .detail{
        display: flex;
        background: #ffffff;
        border-radius: 15px;
        transform: scaleX(0.95);
        text-align: center;
        height: 150px;
        margin-top: 80px;
        div{
            flex: 1;
            display: flex;
            flex-direction: column;
            span:nth-of-type(2){
                font-size:35px;
                font-family:PingFang SC;
                font-weight:800;
                color:#F8984E;
            }
            span:nth-of-type(1){
                font-size:40px;
                font-family:PingFang SC;
                font-weight:800;
                color:rgb(255, 0, 0);
            }
            span{
                flex: 1;
                line-height: 75px;
            }
        }
    }
    li{
        height: 150px;
        width: 300px;
        background: rgb(255, 255, 255);
        border-radius: 15px;
        margin: 0 auto; 
        margin-top: 20px;
        list-style: none;
        display: flex;
        flex-direction: column;
        span{
            flex: 1;
            text-align: center;
            line-height: 75px;
        }
        span:nth-of-type(2){
            font-size:35px;
            font-family:PingFang SC;
            font-weight:800;
            color:#F8984E;
        }
        span:nth-of-type(1){
            font-size:40px;
            font-family:PingFang SC;
            font-weight:800;
            color:rgb(255, 0, 0);
        }
    }
    .btn{
        display: block;
        width: 360px;
        height: 75px;
        text-align: center;
        background: #f32525;
        font-size:35px;
        font-family:PingFang SC;
        font-weight:800;
        color:rgb(250, 247, 244);
        border-radius: 37.5px;
        line-height: 75px;
        margin-left: 83px;;
        margin-top: 23px;
    }
    .close{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 50px;
        color: #ffffff;
    }
}
</style>