<template>
  <div class="right">
      <span>
          {{message}}<em></em></span>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
};
</script>

<style lang="scss" scoped>
.right {
    text-align: right;
    margin: 20px 0;
  span {
    height: 80px;
    border-radius: 15px;
    font-size: 35px;
    background: #f8984e;
    padding: 15px 0 15px 15px;
     em{
          display: inline-block;
          width: 0;
          height: 0;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid #f8984e;
          border-right: 15px solid transparent;
          position: relative;
          right: -23px;
          top: 0px;
      }
  }
}
</style>