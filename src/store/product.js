import api from '../utils/api'
import Http from '../utils/Http'
import { log } from 'util'

const state = {
    currentAllCompany : null
}
const getters = {

}
const mutations = {
    // 设置公司列表数据
    setCurrentAllCompany(state,value){
        state.currentAllCompany = value;
    }
}
const actions = {
    // 请求公司的列表数据
    async requestAllCompany(context){
        // 获取数据
        const {data:result} = await Http.get(api.COMPANY_LIST_API);
        // 判断请求的结果
        if(result.code === 0){
            // 调用修state的方法
            context.commit('setCurrentAllCompany',result)
        }else{
            throw new Error(result.message);
        }        
    },
}

export default {
    namespaced:true,
    getters,
    state,
    mutations,
    actions
}
