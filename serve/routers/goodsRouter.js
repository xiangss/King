const express = require('express');
const Goods = require('../model/Goods');
const router = new express.Router();


router.post('/add',(req,res)=>{
    // console.log(req.body);
    Goods.add(req.body)
    res.json({
        message:'添加成功',
        code:0
    })
});

router.get('/all',async (req,res)=>{
    const result = await Goods.findAll();
    if(result){
        res.json({
            message:'ok',
            code:0,
            data:result
        })
        console.log(result);
    }else{
        res.json({
            message:'请求失败',
            code:-1,
        })  
    }3
});


router.get('/detail',async (req,res)=>{
    console.log(req.query);
    
    const result =await Goods.findById(req.query.cId)
    res.json({
        message:'ok',
        code:0,
        data:result
    })
});



module.exports = router;