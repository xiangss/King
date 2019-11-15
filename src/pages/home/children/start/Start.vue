<template>
<div id="start" v-if="allshow">
  <div class="start" v-if="stratFlag">
    <img src="../../../../assets/1-1.png" alt="">
  </div>
  <van-swipe v-if="show" :loop="false" :show-indicators="false" class="content">
    <van-swipe-item>
      <img src="../../../../assets/1-2.png" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="../../../../assets/1-3.png" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="../../../../assets/1-4.png" alt="">
      <span @click="btnAction" class="btn"></span>
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem,Toast } from 'vant'
export default {
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Toast.name]:Toast
  },
  data(){
    return{
      stratFlag:true,
      show:true,
      allshow:true,
    }
  },
  methods: {
    btnAction(){ 
      this.show = false;
      this.allshow = false;
    }
  },
  mounted(){
    if(!(sessionStorage.getItem('allshow'))){
      this.allshow = true;
      sessionStorage.setItem('allshow',true);
    }else{
      this.allshow = false;
    }
    if(!(sessionStorage.getItem('startFlag'))){
      setTimeout(()=>{
        this.stratFlag = false;
        sessionStorage.setItem('startFlag',true);
      },2000)
    }else{
      this.stratFlag = false;
    }
    if(!(localStorage.getItem('show'))){
      this.show = true;
      localStorage.setItem('show',true);
    }else{
      this.show = false;
    }
  }
}
</script>
<style lang="scss" scoped>
#start{
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0px;
  z-index: 999;
  background-color: #fff;
  .start{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .content{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
    }
    .btn{
      position: absolute;
      bottom: 120px;
      width: 500px;
      height: 130px;
      left: 240px;
    }
  }
}
</style>
