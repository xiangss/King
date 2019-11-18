<template>
  <div class="questionBox">
    <div class="questionTitle">
      <span>{{content.title}}</span>
      <van-icon class="rightBtn" name="arrow-down" ref="show" @click="slideAction(active)" />
    </div>
    <div class="question" ref="que">
      <p class="grayBackround">{{content.inside}}</p>

      <p class="job">
        <span class="useful" @click="useful" ref="useful">
          <van-icon class="good" name="good-job-o" />
          <span>有用</span>
        </span>
        <span class="unuseful" @click="unuseful"  ref="unuseful">
          <van-icon class="bad" name="good-job-o" />
          <span>无用</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    Icon
  },
  props: {
    content: Object
  },
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    slideAction(n) {
      if (n) {
        this.$refs.que.style.display = "block";
        this.active = 0;
        this.$refs.show.style.transform = "rotate(180deg)";
      } else {
        this.$refs.que.style.display = "none";
        this.active = 1;
        this.$refs.show.style.transform = "rotate(0deg)";
      }
    },
    useful(){
      this.$refs.useful.style.color = 'red';
      this.$refs.unuseful.style.color = '#333';
      this.$store.commit('kevin/userful',1);

    },
     unuseful(){
      this.$refs.unuseful.style.color = 'red'
      this.$refs.useful.style.color = '#333'
      this.$store.commit('kevin/userful',0);
    }
  }
};
</script>

<style lang="scss" scoped>
.questionBox {
  .questionTitle {
    font-size: 26px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question {
    .grayBackround {
      background: #eee;
      border-radius: 15px;
      box-sizing: border-box;
      padding: 15px 10px 15px 20px;
    }
    .job {
      box-sizing: border-box;
      padding: 15px 15px 0 15px;
      font-size: 26px;
      color: #333;
      text-align: right;
      .useful{
        padding-right: 30px;
        .good{
          position: relative;
          top: 5px;
          font-size: 30px;
          padding-right: 5px;
        }
      }
      .unuseful{
        .bad{
          position: relative;
          top: 5px;
          font-size: 30px;
          padding-right: 5px;
          transform:  rotate(180deg);
        }
      }
    }
    font-size: 24px;
    display: none;
    box-sizing: border-box;
    padding: 20px;
    transition: linear 2s;
  }
}
</style>