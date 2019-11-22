const express = require('express');
const Order = require('../model/Order');
const Goods = require('../model/Goods');
const router = new express.Router();

router.get('/orderList', async (req, res) => {
    if (req.session.userinfo && req.session.userinfo) {
        let result = await Order.findAll(req.session.userinfo._id);
        console.log(result.length);
        if(!result.length){
            res.json({
                message:'没有订单',
                code:-1
            });
        }
        let promise =  new Promise(function(resolve,reject){
            
            let resF = [];
            result.forEach(async function (val, index) {
                const info = await Goods.findBy_Id(val.cId);
                let obj = {
                    ...val._doc
                };
                obj["info"] = info;
                resF.push(obj);
                // console.log(resF);
                if(!result[index+1]){
                    resolve(resF);
                }
            })
        })
        promise.then(function(data){
            
            res.json({
                code: 0,
                message: '可以获取',
                data: data
            })
        },(error)=>{
            console.log("失败了");
            
        })

    } else {
        res.json({
            code: -1,
            message: '没有登陆'
        })
    }
});


router.post('/addOrder', async (req, res) => {
    console.log(req.session.userinfo._id, req.body);
    if (req.session.userinfo && req.session.userinfo) {
        let idResult = await Goods.findById( req.body.cId);
        console.log(idResult);
        
        let result = await Order.add(req.session.userinfo._id, idResult._id, req.body.statues);
        console.log(result);
        
        if (result) {
            res.json({
                code: 0,
                message: '已存入'
            })
        }
    } else {
        res.json({
            code: -1,
            message: '没有登陆'
        })
    }
});

router.get('/deleta', async(req,res)=>{
    let result = await Order.delete(req.session.userinfo._id,req.query.cId);
    if(result.ok == 1){
        res.json({
            message:'删除成功',
            code:0,
        })
    }
});

router.get('/handle',async(req,res)=>{
    console.log(req);
    
    let result = await Order.handle(req.session.userinfo._id,req.query.cId,req.query.statues);
    if(result.ok == 1){
        res.json({
            message:'操作成功',
            code:0,
        })
    }
});


module.exports = router;