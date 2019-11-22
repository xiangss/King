const express = require('express');
const Information = require('../model/Information');
const router = new express.Router();


router.post('/save',async (req,res)=>{
    if(req.session.userinfo && req.session.userinfo){
        // console.log(req.session.userinfo);
        // console.log(req.body);
        let result = await Information.save(req.session.userinfo,req.body);
        if(result){
            res.json({
                code:0,
                message:'信息已保存'
            })
        }
    }else{
        res.json({
            code:-1,
            message:'请登陆'
        })
    }
});

router.post('/edit',async (req,res)=>{
    let result = await Information.edit(req.session.userinfo._id,req.body)
    console.log(result);
    
});

router.get('/find',async (req,res)=>{
    if(req.session.userinfo && req.session.userinfo){
        let result = await Information.find(req.session.userinfo._id);
        console.log(result);
        
        if(result.cname){
            res.json({
                code:0,
                message:'获取成功',
                data:result,
                // mark:667
            })
        }else{
            res.json({
                code:0,
                message:'获取成功,未完善信息',
                mark:0
            })
        }
    }else{
        res.json({
            code:-1,
            message:'请登陆'
        })
    }
});


router.get('/delete',async (req,res)=>{
    console.log(req);
    
    let result = await Information.delete(req.session.userinfo._id)
    console.log(result);
    if(result.ok == 1){
        res.json({
            message:'删除成功',
            code:0
        })
    }
})



module.exports = router;