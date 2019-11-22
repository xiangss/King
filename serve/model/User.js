const mongoose = require('mongoose');


const User = mongoose.model('user',new mongoose.Schema({
    tel:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}));

//新增
module.exports.add = async (tel,password)=>{
    const result = await User.findOne({tel});
    console.log(result);
   
    if(result){


           return await User.update({tel},{$set:{password}})
    }else{
        const user = new User({tel,password});
        return await user.save();
    }
}
//查询
module.exports.findByTel = async (tel)=>{
    return await User.findOne({tel});
}

module.exports.findByTelAndPsd = async (tel,password)=>{
    return await User.findOne({tel,password});
}