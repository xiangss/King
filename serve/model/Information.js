const mongoose = require('mongoose');


const Information = mongoose.model('information',new mongoose.Schema({
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    identityCardF:{
        type:String,
        required:true
    },
    identityCardR:{
        type:String,
        required:true
    },
    cname:{
        type:String,
        required:true
    },
    identityCardNumber:{
        type:String,
        required:true
    },
    edu:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    expectMoney:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    workAddress:{
        type:String,
        required:true
    },
    fname:{
        type:Object,
        required:true
    },
    ftel:{
        type:Object,
        required:true
    },
    mark:{
        type:String,
        required:true
    }
}));

module.exports.save = async (user,info)=>{
    let infoObj = Object.assign({user:user._id},info);
    // console.log(infoObj);
    const newInfomation = new Information(infoObj);
    // console.log(newInfomation);
    return await newInfomation.save();
};

module.exports.edit = async (user,item)=>{
    return await Information.update({user:user},{$set: item});
};

module.exports.find = async (uesr)=>{
    console.log(uesr);
    return await Information.findOne({user:uesr});
};

module.exports.delete = async (user)=>{
    console.log(user);
    return await Information.remove({user:user})
}

