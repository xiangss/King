<template>
  <div class="order">
    <div @click="getMoneyAction">
      <p>
        <img src="../../../../assets/icon_lljl.png" alt />
      </p>
      <span>马上有钱</span>
    </div>
    <div @click="colletionAction">
      <p>
        <img src="../../../../assets/icon_sc.png" alt />
      </p>
      <span>收藏</span>
    </div>
    <div @click="orderAction">
      <p>
        <img src="../../../../assets/icon_dd.png" alt />
      </p>
      <span>订单</span>
    </div>
    <div @click="payAction">
      <p>
        <img src="../../../../assets/icon_hk.png" alt />
      </p>
      <span>还款</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getMoneyAction() {
      this.$router.push("/borrow");
    },
    colletionAction() {
      this.$router.push("/home");
    },
    orderAction() {
      this.$router.push("/home");
    },
    payAction() {
      this.$router.push("/credit");
    }
  }
};
</script>

<style lang = "scss" scoped>
.order {
  width: 100%;
  height: 143px;
  border-radius: 15px;
  box-shadow: 0 0 10px #ddd;
  background: white;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  div {
    width: 25%;
    p {
        margin: 20px auto;
      height: 44px;
      width: 44px;
      
      img {
        
        height: 100%;
        width: 100%;
      }
    }

    span {
      text-align: center;
      font-size: 24px;
      color: #666;
    }
  }
}
</style>