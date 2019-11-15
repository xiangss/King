import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import credit from './credit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMoney:80000,
    borrowMoney:true
  },
  mutations: {
    setMoney(state,value){
      state.userMoney = state.userMoney - value
    }
  },
  actions: {
  },
  modules: {
    product,
    credit
  }
})
