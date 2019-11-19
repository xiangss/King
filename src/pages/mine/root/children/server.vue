<template>
  <div class="server">
    <div class="img">
        <img src="../../../../assets/pic_zn.png" alt="">
       
    </div>
    <div class="info">
        <h1>在线客服竭诚为你服务</h1>
        <span @click="serverAction">点我咨询</span>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        serverAction(){
            this.$router.push('/mine/onlineServer');
        }
    }
}
</script>

<style lang="scss" scoped>
    .server{
        width: 100%;
        height: 228px;
        background: #3D97FE;
        border-radius: 15px;
        display: flex;
        box-sizing: border-box;
        padding: 37px 39px;
        img{
            width: 106px;
            height: 153px;
        }
        .info{
            color: white;

            h1{
                font-size: 32px;
                font-family: PingFang-SC-Medium;
                line-height: 50px;
                font-weight: Medium;
                margin-left: 40px;
            }
            span{
                display: inline-block;
                margin-left: 40px;
                margin-top: 25px;
                font-size: 26px;
                background: white;
                color: #333;
                font-weight: Medium;
                padding: 18px 27px;
                border-radius: 31px;
            }
        }
    }
</style>