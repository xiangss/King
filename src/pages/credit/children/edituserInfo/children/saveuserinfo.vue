<template>
<div id="saveuserinfo">
 <Userinfomation :infolist="userinfomation"></Userinfomation>
  <div class="save">
    <van-button @click="nextAction" class="next" type="warning">保存</van-button>
  </div>
</div>
</template>

<script>
import Userinfomation from '../../../components/userinfomation'
import { Button ,Toast } from 'vant';
export default {
  components:{
    Userinfomation,
    [Button.name]:Button
  },
  data(){
    return{
      userinfomation:{
      },
    }
  },
  methods:{
    async nextAction(){
      await this.$store.dispatch('credit/saveInfomation');
      if(this.$store.state.credit.code == 0){
        this.$store.commit('credit/changeMark',645);
        Toast('保存成功！');
        setTimeout(()=>{
          this.$router.push({name:'credit'});
        },2000);
      }else{
        Toast('出现异常!');
      }
      
      
    }
  },
  created(){
    this.userinfomation = this.$store.getters['credit/infonlist']
  }
}
</script>
<style lang="scss" scoped>
#saveuserinfo{
  width: 100%;
  .save{
    position: relative;
    height: 150px;
    .next{
      position: absolute;
      left: 50%;
      top: 30px;
      width: 60%;
      transform: translateX(-50%);
      height: 80px;
      font-size: 36px;
      border-radius: 40px;
    }
  }
  

}

</style>
