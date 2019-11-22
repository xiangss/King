const mongoose = require('mongoose');


const Order = mongoose.model('order', new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    cId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'goods'
    },
    statues: {
        type: String,
        required: true
    }
}));

module.exports.add = async (user, cId, statues) => {
    console.log(111111);
    
    console.log(user,cId,statues);
    const newOrder = new Order({
        user,
        cId,
        statues
    });
    console.log(newOrder);
    
    return await newOrder.save();
}


module.exports.findAll = async (user) => {

    return await Order.find({
        user: user
    });
};

module.exports.delete = async (user, id) => {
    return await Order.remove({user:user,cId:id});
};

module.exports.handle= async (user,id,statues)=>{
    console.log(user,id,statues);
    return await Order.update({user:user,cId:id},{$set:{statues:statues}})
}
// db.users.update({age: 25}, {$set: {name: 'changeName'}}, false, true);