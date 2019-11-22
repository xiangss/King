const mongoose = require('mongoose');

const Server = mongoose.model('server',new mongoose.Schema({
    n:{
        type:String,
        required:true
    },
    sentence:{
        type:String,
        required:true
    }
}))

module.exports.add = async (obj)=>{
    const newServe = new Server(obj);
    return await newServe.save();
}
module.exports.findOne = async (obj)=>{
    return await Server.findOne({n:1});
}

