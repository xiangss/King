import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import credit from './credit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
    credit
  }
})
