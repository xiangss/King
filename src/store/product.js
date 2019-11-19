import api from '../utils/api'
import Http from '../utils/Http'
import { log } from 'util'
import { request } from 'http'

const state = {
    currentAllCompany : null,
    currentCompanyDetail : null,
    allProduct:null
}
const getters = {

}
const mutations = {
    // 设置公司列表数据
    setCurrentAllCompany(state,value){
        state.currentAllCompany = value;
    },

    // 将申请过来的产品放在state中
    setProduct(state,value){
        state.allProduct = value;
    },

    // 修改数据的statues
    setStatues(state,value){
        // console.log('我来修改statues');
        state.allProduct.forEach((item=>{
            if(item._id == value){
                item.statues = 2;
                console.log(item);
            }
        }))
    },
    // 将点击评价后的_v修改为1
    setv(state,value){
        state.allProduct.forEach(item=>{
            if(item._id == value){
                item.__v = 1;
            }
        })
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
    },

    // 请求订单数据
    async requestOrderList(context){
        const {data:list} = await Http.get(api.ORDER_LIST_API)
        console.log(list);

        context.commit('setProduct',list.data)
    }

}

export default {
    namespaced:true,
    getters,
    state,
    mutations,
    actions
}
