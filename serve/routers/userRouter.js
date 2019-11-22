const express = require('express');
const User = require('../model/User');
const CodeSc = require('../model/Code');
const router = new express.Router();

const SMSClient = require('@alicloud/sms-sdk')
const accessKeyId = 'LTAI4FpyZsiRktYikorKECFs'
const secretAccessKey = 'elmef1NYo9uVw0L3yhaN54CGYm56B7'
//初始化sms_client
let smsClient = new SMSClient({
    accessKeyId,
    secretAccessKey
})

//发送验证码
router.get('/send_code', (req, response) => {
    //获取电话号码
    const { tel} = req.query;
    //随机验证码
    console.log(tel);
    
    const randomNUM =function() {
        let result = Math.floor(Math.random() * 1000000).toString();
        while (result.length < 6) {
            result = '0' + result;
        }
        return result;
    }
    const tepCode = randomNUM();
    //发送信息
    smsClient.sendSMS({
        PhoneNumbers: tel, //必填:待发送手机号,支持以逗号分隔的形式进行批量调用，目前从前端获取手机号码
        SignName: '旅行分享小站', //必填:短信签名-可在短信控制台中找到
        TemplateCode: 'SMS_176943943', //必填:短信模板-可在短信控制台中找到
        TemplateParam: `{"code":"${tepCode}"}` //可选:模板中的变量替换JSON串,目前不用
    }).then(function (res) {
        let {Code} = res;
        console.log(Code);
        
        if (Code === 'OK') {
            //处理返回参数
            // console.log(res)
            CodeSc.add(tel, tepCode)
            .then(function(){
                console.log('成功创建表格');
                response.json({
                    message:"验证码已发送",
                    code:0,
                    data:tepCode
                    
                })
            })
            .catch((error) => {
                response.json({
                    code: -2, //数据库问题
                    message: error.message
                })
            })
        }
    }, function (err) {
        console.log(err);
        response.json({
            message: 'no',
            code: -1
        })
    })
    
});
//注册
router.post('/regiester',(req,res)=>{
    const { tel,password} = req.body;//req.body =>post   req.query=> get
      console.log(tel,password);

    User.add(tel,password)
    .then((userinfo)=>{
        res.json({
            code:0,
            message:'ok'
        })
    })
    .catch((error)=>{
        res.json({
            code:-1,
            message:error.message
        })
    })
});
//登陆
router.post('/login',async (req,res)=>{
    
    const {tel,type,value} = req.body;
    console.log(tel,type,value);
    console.log(tel,type,value);
    
    if(type === 'code'){
        //验证码登陆
        let result = await User.findByTel(tel);
        console.log(result);
        if(!result){
            result = await User.add(tel,"NO");
            let infoResult =  await User.findByTelAndPsd(tel,"NO");
            if(infoResult){
                req.session.userinfo =infoResult;
                res.json({
                    code:0,
                    message:'登陆成功'
                })
            }else{
                res.json({
                    code:-2,
                    message:'密码错误'
                })
            }
        }
        
        if(result){
            console.log(1);
            
            let codeResult = await CodeSc.findByTel(tel);
            if(codeResult){
                console.log(codeResult);
                if(value ===codeResult.code ){
                    req.session.userinfo =result;
                    res.json({
                        message:'验证码对',
                        code:0
                    })
                }else{
                    res.json({
                        message:'验证码错误',
                        code:-1
                    })
                }
            }
        }else{
            res.json({
                message:"没注册"
            })
        }
    }else if(type === 'password'){
        let infoResult =  await User.findByTelAndPsd(tel,value);

        if(infoResult){
            req.session.userinfo =infoResult;
            res.json({
                code:0,
                message:'登陆成功'
            })
        }else{
            res.json({
                code:-2,
                message:'密码错误'
            })
        }
        
    }
})

//检查登陆是否过期

router.get('/check_login',(req,res)=>{
    if(req.session.userinfo && req.session.userinfo){
        res.json({
            code:0,
            message:'ok'
        })
    }else{
        res.json({
            code:-1,
            message:'请重新登陆'
        })
    }
})

//退出登陆

router.get('/logout',(req,res)=>{
    delete req.session.userinfo;
    res.json({
        code:0,
        message:'ok'
    })
})


module.exports = router;