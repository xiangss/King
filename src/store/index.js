import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import credit from './credit'
import Http from '../utils/Http'
import api from '../utils/api'

import kevin from './kevin'
import { request } from 'http'
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
    // 获取登录后的的用户信息
    async requestUserInfo(context){
      const {data:result} = await Http.get(api.IDENTITY_API);

      if(result.code == 0){
        return result
      }else{
        throw new Error(result.message);
      }
    }
  },
  modules: {
    product,
    credit,
    kevin
  }
})
