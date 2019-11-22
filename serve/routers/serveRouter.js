const express = require('express');
const Serve = require('../model/Server');
const router = new express.Router();


router.post('/add',(req,res)=>{
    Serve.add(req.body);
    res.json({
        mesasge:'ok',
        code:0
    })
});


router.get('/online', async (req,res)=>{
    let result = await Serve.findOne();
    console.log(result);
    
    res.json({
        mesasge:'ok',
        code:0,
        data:result
    })
});

module.exports = router;