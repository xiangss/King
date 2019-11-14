

const state = {
  active: -1,
  idinfo:{
  },
  jobinfo:{

  },
  firendsinfo:{

  }
}
const getters = {
}
const mutations = {
  changeActive(state,value){
    state.active = value;
  },
  changeIdinfo(state,value){
    state.idinfo = {...value};
  },
  changeJobinfo(state,value){
    state.jobinfo = {...value};
  },
  changeFirendsinfo(state,value){
    state.firendsinfo = {...value};
  }
}
const actions = {
}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}