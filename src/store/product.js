import api from '../utils/api'
import Http from '../utils/Http'
import { log } from 'util'
import { request } from 'http'

const state = {
    currentAllCompany : null,
    currentCompanyDetail : null,
    allProduct:[
        {
            "_id": "5dc7ada7446ae12874f31c878",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "3",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "001",
                "company": "深圳牛热科技1",
                "productName": "四营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
        {
            "_id": "5dc7ada7446ae12874f31c877",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "3",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "002",
                "company": "深圳牛热科技2",
                "productName": "三营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
        {
            "_id": "5dc7ada7446ae12874f31c876",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "1",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "003",
                "company": "深圳牛热科技3",
                "productName": "三营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
        {
            "_id": "5dc7ada7446ae12874f31c875",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "1",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "004",
                "company": "深圳牛热科技4",
                "productName": "三营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
        {
            "_id": "5dc7ada7446ae12874f31c874",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "1",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "005",
                "company": "深圳牛热科技5",
                "productName": "三营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
        {
            "_id": "5dc7ada7446ae12874f31c873",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "1",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "006",
                "company": "深圳牛热科技6",
                "productName": "三营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
        {
            "_id": "5dc7ada7446ae12874f31c872",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "1",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "007",
                "company": "深圳牛热科技7",
                "productName": "三营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
        {
            "_id": "5dc7ada7446ae12874f31c871",
            "user": "5dc7a019851ac90e4047f8af",
            "cId": "5dc79dc992fb99067caf22ae",
            "statues": "1",
            "__v": 0,
            "info": {
                "_id": "5dc79dc992fb99067caf22ae",
                "cId": "008",
                "company": "深圳牛热科技8",
                "productName": "三营卡贷",
                "numOfApplications": "1.1万人",
                "equDropMoneyTime": "12小时",
                "moneyLimit": "0.1-3.0万元",
                "advantage": "速度快，利率低",
                "equMoney": "12000",
                "maxMoney": "30000",
                "minMoney": "1000",
                "annRate": "30.44%",
                "timeLimit": "3-12个月",
                "__v": 0
            }
        },
    ]
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
        state.allProduct.push(value);
    },

    // 修改数据的statues
    setStatues(state,value){
        state.allProduct.forEach((item=>{
            if(item._id == value){
                item.statues = 2;
            }
        }))
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
