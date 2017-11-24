let express=require('express');
let bodyParse=require('body-parser');
let session = require('express-session');
let app=express();
let sliders=require('../data/sliders');
let Item=require('../data/item');

app.use(bodyParse.json());
let users = [];
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'KKKKK'
}));
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Credentials',"true");
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.get('/sliders',function (req,res) {
    res.send(sliders)
})
app.get('/getItem',function (req,res) {
    res.send(Item)
})

//注册登录

app.post('/up',function (req,res) {
      let user=req.body;

    let oldUser = users.find(item=>item.username == user.username);
    if(!(/^1[34578]\d{9}$/.test(user.username))){
        res.json({code:1,error:'用户名必定为正确手机号!'});
    }else if(oldUser){
          res.json({code:1,error:'用户名已经被占用!'});
      }else{
          users.push(user)
          console.log(users);
          res.json({code:0,success:'用户注册成功!'});
      }
})

app.post('/in',function(req,res){
    let user = req.body;//得到请求体
    //在注册过的用户数组中找一找有没有对应的用户
    let oldUser = users.find(item=>item.username == user.username&& item.password == user.password);
    console.log(oldUser);
    if(oldUser){//如果有的话表示登录成功
        req.session.user = oldUser;//把登录成功的对象写入session
        console.log(req.session.user,"sssssssssssssss");
        res.json({code:0,success:'恭喜你，登录成功!',oldUser});
    }else{//如果没有则表示登录失败
        res.json({code:1,error:'用户名或密码错误!'});
    }
});

app.get('/validate',function(req,res) {

    if (req.session.user) {//如果会话对象中有user的话，表示已登录
        res.json({code: 0, user: req.session.user});
    } else {
        res.json({code: 1});
    }
});

app.post('/out',function(req,res) {
       req.session.user=null;
    console.log(users,666666);
    res.json({code:0,success:'退出成功去首页看看吧!'})
});
app.post('/cimg',function(req,res) {
    let user = req.body;
    console.log(user,7894562);
    let oldUser = users.find(item=>item.username == user.username);
    console.log(oldUser,555555555555555555);
    oldUser.img=user.img;
    req.session.user=oldUser
    res.setHeader('Content-Type','image/png');
    console.log(req.session.user,'ggggggggggggggggggggggg');
    res.send(user)

});


app.get('/is',function(req,res) {
    let is=req.session.user;
   if(is){
       let cc={code:0}
       let qwer= Object.assign({},is,cc);
       console.log(qwer);
       res.json(qwer)
   }else{
       res.json({code:1,username:''})
   }

});


app.listen(6719);