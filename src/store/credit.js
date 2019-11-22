import api from '../utils/api'
import Http from '../utils/Http'

const state = {
  active: -1,
  mark:0,
  code:'',
  saveinfolist:{

  },
  userinfolist:{
  }
}
const getters = {
  infonlist(){
    return {
      ...state.saveinfolist,
      mark:645
    }
  }
}
const mutations = {
  changeActive(state,value){
    state.active = value;
  },
  changeSaveinfolist(state,value){
    state.saveinfolist = {
      ...state.saveinfolist,
      ...value
    };
  },
  deleteInfolist(state,value){
    state.saveinfolist = value;
  },
  changeMark(state,value){
    state.mark = value;
  },
  changeCode(state,value){
    state.code = value;
  },
  changeUserinfolist(state,value){
    console.log(value);
    state.userinfolist = {
      ...value
    }
  }
}
const actions = {
  async requestInfomation(context){
    let res = await Http.get(api.IDENTITY_API);
    // context.commit('changeUserinfolist',context.state.saveinfolist);
    console.log(res.data.data);
    if(res.data.code == 0){
      context.commit('changeUserinfolist',res.data.data);
    }
    context.state.mark = res.data.data ? res.data.data.mark : 0;
  },

  async saveInfomation(context){
    let {data} = await Http.post(api.SAVE_MESSAGE_API,context.getters.infonlist);
    console.log(data);
    context.commit('changeCode', data.code);
    if(data.code == 0){
      localStorage.setItem('credit',true);
    }
  },
  async deleteInfomation(context){
    let {data} = await Http.get(api.DELETE_MESSAGE_API);
    if(data.code == 0){
      context.commit('changeCode', data.code);
      localStorage.removeItem('credit');
      context.commit('changeUserinfolist',{});
      context.commit('deleteInfolist',{});
      context.commit('changeMark', 0);
      // context.state.saveinfolist = {};
      // context.state.userinfolist = {};
    }else{
      context.commit('changeCode', -1);
    }
  }
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}