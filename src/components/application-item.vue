<template>
  <div class="application-item border-bottom">
    <div class="head">
        <span class="kuai"></span>
        <span class="title">{{data.productName}}</span>
        <span class="count">{{data.numOfApplications}}<em>申请</em></span>
    </div>
    <div class="center">
        <div class="left">
            <p>{{data.equMoney}}</p>
            <span>平均放宽金额</span>
        </div>
        <div class="centers">
            <span class="rate"><em>综合年利率:</em><span>{{data.annRate}}</span></span>
            <span class="data"><em>借款期限:</em><span>{{data.timeLimit}}</span></span>
        </div>
        <div class="right">
            <div class="box">
                <span class="btn" @click="goDetailAction(data.cId)" >申请</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'application-item',
    props:{
        data:Object
    },
    methods:{
        goDetailAction(id){
            this.$router.push(`/borrow/application/${id}`)
        }
    },
    created(){
        console.log(this.data);
        
    }

}
</script>

<style scoped lang="scss">
.application-item{
    height: 293px;
    // border-bottom: 1px solid #cccccc;
    // background: #e49999;
    .head{
        height: 36px;
        width: 100%;
        // overflow: hidden;
        .kuai{
            display: inline-block;
            width:36px;
            height:36px;
            background:rgba(230,63,63,1);
            border-radius:8px;
            margin: 30px 16px 0 29px;
        }
        .title{
            width:113px;
            height:27px;
            font-size:28px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:25px;
        }
        .count{
            float:right;
            margin: 43px 30px 0 0;
            width:153px;
            height:21px;
            font-size:28px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height:25px;
        }
    }
    .center{
        width: 100%;
        display: flex;
        div{
            flex: 1;
            text-align: center;
            padding: 44px;
            box-sizing: border-box;
        }
        .left{
            p{
                width:120px;
                height:31px;
                font-size:40px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(230,63,63,1);
                line-height:25px;
            }
            span{
                display: inline-block; 
                width:160px;
                height:23px;
                font-size:25px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:25px;
            }
        }
        .centers{
            box-sizing: content-box;
            span{
                display: inline-block;
                width:250px;
                height:23px;
                font-size:24px;
                font-family:PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height:25px;
                text-align: left;
                em{
                    display: inline-block;
                    width:140px;
                    height:19px;
                    font-size:24px;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:25px;
                }
                span{
                    display: inline-block;
                    width: 107px;
                }
            }
        }
        .right{
            // text-align: center;
            // justify-content: center;
            .box{
                width:120px;
                height:2px;
                background:rgba(248,152,78,1);
                border-radius:25px;
                text-align: center;
                position: relative;
                .btn{
                    position: absolute;
                    top: 30px;
                    right: 35px;
                    display: inline-block;
                    width:60px;
                    height:23px;
                    font-size:30px;
                    font-family:PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
            }
            }
        }
    }
}
</style>