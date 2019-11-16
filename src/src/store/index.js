import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allmoney: '6000',        //总额度
    borrowed: 1,        //已借的钱
    borrowedMoney: false,    //是否借了钱
    userMoney: 0,       //账户余额
    isLogin:0,         //是否登录

  },

  getters : {
    canBorrow(state, getters) {
      return state.allmoney - state.borrowed;
    },
  },
  mutations: {
    //根据信用额度确认可借的总额度
    setAllMoney(state, value) {
      state.allmoney = value;
    },
    //借钱后-------------------------------
    //账户余额设置方法  value借来的钱
  getMoney(state,  value) {
    state.userMoney = state.userMoney  + value
  },
  
  //  已经借的钱   value
  setBorrowed(state, value) {
    state.borrowed = state.borrowed+value
  },
  // 是否借过钱
  setHaveBorrow(state, value) {
    state.borrowedMoney = value;
  },





  //买东西后----------------------------
    //账户余额设置方法  value花掉的钱  
  setMoney(state, value) {
      state.userMoney = state.userMoney - value
  },



   
    // 还款后--------------  
    //剩余借的钱   value
    setShenYu(state, value) {
      state.borrowed = state.borrowed - value
    },

    //账户余额   value
    setMyMoney(state, value) {
      state.userMoney = state.borrowed - value
    },
    

},


  actions: {
  },
  modules: {
  }
})
