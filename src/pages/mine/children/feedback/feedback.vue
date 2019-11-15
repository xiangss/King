<template>
  <div class="page-wrap" id="feedback">
    <div class="header">
      <van-icon class="back" name="arrow-left" @click="backAction" />
      <span>意见反馈</span>
      <span></span>
    </div>
    <div class="wraper">
      <div class="title">
        <h1>请选择问题类型</h1>
        <span>*必填</span>
      </div>

      <div class="problems">
        <span @click="activeAction(1)" :class="{active :isactive==1}">功能bug</span>
        <span @click="activeAction(2)" :class="{active :isactive==2}">功能性建议</span>
        <span @click="activeAction(3)" :class="{active :isactive==3}">内容性建议</span>
        <span @click="activeAction(4)" :class="{active :isactive==4}">广告问题</span>
        <span @click="activeAction(5)" :class="{active :isactive==5}">网络环境问题</span>
        <span @click="activeAction(6)" :class="{active :isactive==6}">其他问题</span>
      </div>

      <div class="title">
        <h1>描述你的问题</h1>
        <span>*必填</span>
      </div>

      <div class="textarea">
        <textarea name id v-model="value" class></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    Icon
  },
  data() {
    return {
      isactive: 0,
      value: ""
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    activeAction(n) {
      this.isactive = n;
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  background: #ddd;
}
#feedback {
  //   background: #eee;
  overflow: hidden;
  .header {
    display: flex;
    height: 88px;
    background: white;
    font-size: 36px;
    justify-content: space-between;
    align-items: center;
    .back {
      font-size: 40px;
      padding-left: 20px;
    }
    span {
      font-size: 32px;
    }
  }
  .wraper {
    box-sizing: border-box;
    padding: 20px;
    height: 1000px;

    .title {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      h1 {
        font-size: 30px;
        color: #333;
      }
      span {
        color: #999;
      }
    }
    .problems {
      height: 180px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      span {
        width: 200px;
        font-size: 28px;
        color: #333;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 60px;
        margin: 16px;
      }
    }
    .textarea {
      width: 100%;
      height: 240px;
      background: red;
      box-sizing: border-box;
      textarea {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>