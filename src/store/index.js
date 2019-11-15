import Vue from 'vue'
import Vuex from 'vuex'
import kevin from './kevin'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    isLogin:0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    kevin
  }
})
