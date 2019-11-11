import api from '../utils/api'
import Http from '../utils/Http'
import { log } from 'util'
import { request } from 'http'

const state = {
    currentAllCompany : null,
    currentCompanyDetail : null
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
            // context.commit('setCurrentAllCompany',result)
            return result;
        }else{
            throw new Error(result.message);
        }        
    },

    // 请求公司的详情
    async requestCompanyDetail(context,value){
        // 获取
      
        
        const {data:result} = await Http.get(api.COMPANY_DETAIL_API,value)
        console.log(result);
        
        return result;
        // if(result.code === 0){
        //     return result;
        // }else{
        //     throw new Error(result.message)
        // }
        
    }
}

export default {
    namespaced:true,
    getters,
    state,
    mutations,
    actions
}
