const express = require('express');

/**
 * 可以使用app.use连续顶底多个全局中间件，客户端在到达服务器之后，会按照中间件定义的先后顺序依次进行调用
 */
 const app = express();
 app.use(function(req,res,next) {
   console.log('中间件1');
   next();
 });
 app.use(function(req,res,next) {
  console.log('中间件2');
  next();
});
app.use(function(req,res,next) {
  console.log('中间件3');
  next();
});
app.get('/', function(req,res) {
  console.log('home page')
  res.send('home page')
})
app.listen(80, ()=> {
  console.log('http://192.168.1.8')
})