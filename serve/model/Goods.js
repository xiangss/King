const mongoose = require('mongoose');

const Goods = mongoose.model('goods', new mongoose.Schema({
    cId: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    numOfApplications: {
        type: String,
        required: true
    },
    equDropMoneyTime: {
        type: String,
        required: true
    },
    moneyLimit: {
        type: String,
        required: true
    },
    advantage: {
        type: String,
        required: true
    },
    equMoney: {
        type: String,
        required: true
    },
    maxMoney: {
        type: String,
        required: true
    },
    minMoney: {
        type: String,
        required: true
    },
    annRate: {
        type: String,
        required: true
    },
    timeLimit: {
        type: String,
        required: true
    },
}));

module.exports.add = async (obj)=>{
    // console.log(obj);
    const newGood = new Goods(obj);
    return await newGood.save();
}

module.exports.findAll = async ()=>{
    return await Goods.find();
}

module.exports.findById = async (id)=>{
    return await Goods.findOne({cId:id});
}

module.exports.findBy_Id = async (id)=>{
    return await Goods.findOne({_id:id});
}