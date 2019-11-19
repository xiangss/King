<template>
  <div class="page-wrap page">
      <div class="header border-bottom">
          <div class="back" @click="writeback"><img src="../../../../assets/icon_fhs.png" alt=""></div>
          <div class="title">写评价</div>
      </div>


     <!-- 评论对象 -->
     <div class="head border-bottom">
         <img src="../../../../assets/logos.png" alt="">
         <div class="company">公司的名字</div>
         <div class="right">评价将匿名展示</div>

         <div class="jindu">
             <span class="left">进度</span>
             <span class="right"></span>
             <span class="rights" ref="progress"></span>
         </div>

         <span class="bottom">写评价，有机会拿最高20元现金奖励</span>
     </div>

    <div class="beijing">
     <!-- 评论图标 -->
     <div class="icon">
         <p>此次借款体验如何？</p>
         <div class="flex"> 
            <div ref="a">
                <span class="font" @click="iconActiona"><van-icon name="close" /></span>
                <span>很糟糕</span>
            </div>

            <div ref="b">
                <span class="font" @click="iconActionb"><van-icon name="smile-o" /></span>
                <span>一般般</span>
            </div>

            <div ref="c">
                <span class="font" @click="iconActionc"><van-icon name="like-o" /></span>
                <span>棒极了</span>
            </div>
         </div>
     </div>

     <!-- 评论框 -->
     <div class="write">
         <textarea name="" id="" cols="30" rows="10" class="text" ref="customerMessage" @input="input"></textarea>
         <p class="text-count" ref="text-count"><span id="textCount" ref="textCount">0</span>/200    </p>
     </div>

     <!-- 提交框 -->
     <div class="btn" @click="submit"><span>提交</span></div>


    </div>
     
  </div>
</template>

<script>
import { Toast } from 'vant';
import { log } from 'util';
var lengths = 0;
export default {
    components:{
        [Toast.name]:Toast
    },
    data() {
        return{
            flag:false,
            currentlen:null
        }
    },
    computed:{
        percent(){
            if(this.flag == true){
                var w=0,s;
                return s=setInterval(() => {
                    w = w+1
                    this.$refs.progress.style.width = w+'px'
                    console.log(w);
                    if(w > 60){
                        clearInterval(s);
                    }
                }, 50);
            }
        }
    },
    methods:{
        // 获取文本长度函数
        txtCount(el) {
            var val = el.value;
            var eLen = val.length;
            return eLen;
        },
        writeback(){
            this.$router.back();
            console.log(1);
        },
        // 文本框的输入事件
        input(){
            var len = this.txtCount(this.$refs.customerMessage);
            this.currentlen = len
            this.$refs.textCount.innerHTML = len;
            if(len > 200){
                Toast('亲，评论到上限了哦，后面的内容无效呢')
            }
            lengths = this.$refs.progress.style.width;

            this.$refs.progress.style.width =   len +61+ 'px';
            // console.log(parseInt(length)  + parseInt(len));
            
        },
        // 提交评论
        submit(){
            if(this.currentlen < 100){
                Toast('评论不能少于100字哦')
                return;
            }
            this.$store.commit('addMoney')
            Toast('亲恭喜你获得20体验金哦，快去查看账户吧');
        },
        // 图标的点击事件
        iconActiona(){
            this.$refs.a.style.color = '#ce6518';
            this.$refs.b.style.color = 'black';
            this.$refs.c.style.color = 'black';
            this.$refs.a.style.transform = 'scale(1.3)'
            this.$refs.b.style.transform = 'scale(1)'
            this.$refs.c.style.transform = 'scale(1)'
            this.flag = true;
            console.log(this.percent);
        },
        iconActionb(){
            this.$refs.a.style.color = 'black';
            this.$refs.b.style.color = '#4933f1';
            this.$refs.c.style.color = 'black';
            this.$refs.a.style.transform = 'scale(1)'
            this.$refs.b.style.transform = 'scale(1.3)'
            this.$refs.c.style.transform = 'scale(1)'
            this.flag = true;
            console.log(this.percent);

        },
        iconActionc(){
            this.$refs.a.style.color = 'black';
            this.$refs.b.style.color = 'black';
            this.$refs.c.style.color = '#f50000';
            this.$refs.a.style.transform = 'scale(1)'
            this.$refs.b.style.transform = 'scale(1)'
            this.$refs.c.style.transform = 'scale(1.3)'
            this.flag = true;
            console.log(this.percent);

        }
    },
    created(){
        
    }
}
</script>

<style scoped lang="scss">
.beijing{
    background:rgb(244, 244, 244);
    overflow: hidden;
}
.content{
    top: 150px;
}
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
        text-align: center; 
    }
}
.head{
    height: 260px;
    width: 100%;
    overflow: hidden;
    position: relative;
    img{
        height: 60px;
        width: 60px;
        position: absolute;
        top: 28px;
        left: 30px;
    }
    .company{
        font-size:30px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        position: absolute;
        top: 44px;
        left: 111px;
    }
    .right{
        font-size:24px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        position: absolute;
        top: 48px;
        right: 32px;
    }
    .jindu{
        .left{
            font-size:30px;
            font-family:PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            position: absolute;
            top: 129px;
            left: 31px;
        }
        .right{
            display: inline-block;
            width:604px;
            height:13px;
            background:rgba(238,238,238,1);
            border-radius:7px;
            position: absolute;
            top: 135px;
            left: 107px;
        }
        .rights{
            width:1px;
            height:13px;
            background:rgba(248,152,78,1);
            border-radius:7px;
            position: absolute;
            top: 135px;
            left: 107px;
        }
    }
    .bottom{
        width:401px;
        height:24px;
        font-size:24px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:25px;
        position: absolute;
        top: 187px;
        left: 31px;
    }
}
.icon{
    width:690px;
    height:324px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius:12px;
    margin: 30px auto;
    overflow: hidden;
    
    p{
        width:350px;
        height:30px;
        font-size:32px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:25px;
        text-align: center;
        margin: 51px auto;
    }
    .flex{
        display: flex;
        div{
            flex: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
            span{
                font-family:PingFang SC;
                flex: 1;
                font-size: 30px;
            }
            .font{
                font-size: 90px;
            }
        }
    }
}
.write{
    width:690px;
    height:324px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius:12px;
    margin: 20px auto;
    margin-bottom: 100px;
    .text{
        width:690px;
        height:324px;
        border: none;
        text-indent: 20px;
        padding: 10px;
        font-size: 35px;
        font-family:PingFang SC;
    }
}
.btn{
    width:490px;
    height:70px;
    background:rgba(248,152,78,1);
    border-radius:35px;
    margin: 0 auto;
    margin-bottom: 63px;
    text-align: center;
    line-height: 70px;
    span{
        font-size:26px;
        font-family:PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
}
</style>