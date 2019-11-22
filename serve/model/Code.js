const mongoose = require('mongoose');

const Code = mongoose.model('code', new mongoose.Schema({
    tel: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  }));
  
  // 新增
  module.exports.add = async (tel, code)=>{
    
    const result = await Code.findOne({tel});
    
    if(result){
    //   throw new Error('该电话号码已存在');
     return await Code.updateOne({tel:tel},{$set:{code:code}});
    }else{
      console.log('进入 save');
      console.log(tel,code);
      const newcode = new Code({tel, code});
      return await newcode.save();
    }
  }


  module.exports.findByTel = async (tel)=>{
    console.log(1);
    return await Code.findOne({tel});
}

  