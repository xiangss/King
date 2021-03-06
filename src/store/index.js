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
    userMoney:0,
    blackList: ['360311199511192030', '360311199511192032', '360311199511192033', '360311199511192030', '360311199511192030', '360311199511192030'],
     black:0,                  //是否进入黑名单
    // borrowMoney:false,
    allmoney: '6000',        //总额度
    borrowed: 0,        //已借的钱
    borrowedMoney: true,    //是否借了钱
    // userMoney: 0,       //账户余额
  },
  mutations: {
    setMoney(state,value){
      state.userMoney = state.userMoney - value
    },
    setisLogin(state, value){
      state.isLogin = value;
    },
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
    // 是否进入黑名单
     isBlackList(state, value) {
       state.black= value;
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
        state.userMoney = state.userMoney - value
      },
      


    // 评论成功增加20体验金
    addMoney(state){
      state.userMoney = state.userMoney + 20;
    }
  },

  getters : {
    canBorrow(state, getters) {
      return state.allmoney - state.borrowed;
    },
  },

  actions: {
    async requestUserInfo(context) {
      const { data: result } = await Http.get(api.IDENTITY_API);

      if (result.code == 0) {
        console.log(result);
 
         context.commit('', result);
        
        return result
      } else {
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
