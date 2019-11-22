const express =require('express');
const mongoose = require('mongoose');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

const server = express();

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/king',
    collection: 'session'
  });
   
  // Catch errors
  store.on('error', function(error) {
    console.log(error);
  });
   
  server.use(require('express-session')({
    secret: 'hello world',
    name: 'login_session',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
  }));
// server.use(bodyParser.json({limit : '2100000kb'}));  
server.use(express.urlencoded({urlencoded:false}));
server.use(express.json());

//设置跨域访问
server.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

server.use('/api/user',require('./routers/userRouter'));
server.use('/api/order',require('./routers/orderRouter'));
server.use('/api/information',require('./routers/informationRouter'));
server.use('/api/goods',require('./routers/goodsRouter'));
server.use('/api/serve',require('./routers/serveRouter'));

// 响应首页
server.get('/', (req, res)=>{
  res.sendFile(__dirname+'/www/index.html');
})

// 响应静态资源
server.use('/js', express.static('./www/js'));
server.use('/css', express.static('./www/css'));
server.use('/img', express.static('./www/img'));
server.get('/favicon.ico', (req, res)=>{
  res.sendFile(__dirname+'/www/favicon.ico');
})

server.use((req, res)=>{
  res.sendFile(__dirname+'/www/index.html');
})

mongoose.connect('mongodb://localhost:27017/king',{useNewUrlParser:true},(error)=>{
    if(error){
        console.log('数据库链接失败');
        console.log(error);
    }else{
        console.log('数据库链接成功');

        server.listen('9000',(error)=>{
            if(error){
                console.log('服务器启动失败');
                console.log(error);
            }else{
                console.log('服务器启动成功');
            }
        })
    }
})
