import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import credit from './credit'

import kevin from './kevin'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:0,
    userMoney:80000000,
    borrowMoney:true
  },
  mutations: {
    setMoney(state,value){
      state.userMoney = state.userMoney - value
    },
    setisLogin(state, value){
      state.isLogin = value;
    },
    // 评论成功增加20体验金
    addMoney(state){
      state.userMoney = state.userMoney + 20;
    }
  },
  actions: {
  },
  modules: {
    product,
    credit,
    kevin
  }
})
