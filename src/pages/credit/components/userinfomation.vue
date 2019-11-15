<template>
<div id="userinfomation">
  <div class="idcar">
    <img :src="infolist.identityCardF" alt="">
    <img :src="infolist.identityCardR" alt="">
  </div>
    <p>身份证:<span>{{infolist.identityCardNumber}}</span></p>
    <p>姓名:<span>{{infolist.cname}}</span></p>
    <p>学历:<span>{{infolist.edu}}</span></p>
    <p>职业:<span>{{infolist.job}}</span></p>
    <p>月均收入:<span>{{infolist.salary}}</span></p>
    <p>期望贷款金额:<span>{{infolist.expectMoney}}</span></p>
    <div class="homeaddress">
      <p>居住地址:</p>
      <p class="address">{{infolist.address}}</p>
    </div>
    <p>单位名称:<span></span></p>
    <div class="jobaddress">
      <p>工作地址:</p>
      <p class="address">{{infolist.workAddress}}</p>
    </div>
    <p>联系人姓名:<span>{{infolist.fname}}</span></p>
    <p>联系人电话:<span>{{infolist.ftel}}</span></p>
  </div>
</template>

<script>
export default {
  props:{
    infolist:{
      type:Object,
      default:{}
    }
  }
}
</script>
<style lang="scss" scoped>
#userinfomation{
  width: 100%;
  background-color: #fff;
  .idcar{
    width: 100%;
    overflow: hidden;
    img{
      float: left;
      width: 300px;
      height: 200px;
      border: 1px dashed #ccc;
      margin: 20px 0 20px  45px;
    }
  }
  p{
    width: 95%;
    height: 80px;
    position: relative;
    font-size: 28px;
    line-height: 80px;
    border-bottom: 1px solid #ddd;
    text-indent: 20px;
    margin-left: 20px;
    span{
      position: absolute;
      right: 20px;
      color: rgb(250, 36, 36)
    }
    &.address{
      font-size: 26px;
      color: rgb(250, 36, 36)
    }
  }
}
</style>
