import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMoney:80000,
    borrowMoney:false
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
  }
})
