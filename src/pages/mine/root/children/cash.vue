<template>
  <div class="cash">
        <div @click="toMonetAction">
          <span>{{this.$store.state.userMoney}}</span>
          <p>现金</p>
        </div>
         <div>
          <span>0</span>
          <p>免息券</p>
        </div>
         <div>
          <span>0</span>
          <p>拒就赔</p>
        </div>
         <div @click="toMarkAction">
          <span>0</span>
          <p>信用分</p>
        </div>
  </div>
</template>

<script>

export default {

  methods:{
    toMonetAction(){
      this.$router.push('/home');
    },
    toMarkAction(){
      this.$router.push('/credit');

    }
  }
}
</script>

<style lang = "scss" scoped>
    .cash{
        width: 100%;
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size: 24px;
        color: #333;
        margin: 30px 0 0 0 ;
        p{
          padding-top: 15px;
        }
    }

</style>