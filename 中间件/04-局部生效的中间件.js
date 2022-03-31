/**
 * 注意事项
 * 1.在路由函数之前注册中间件
 * 2.客户端发送过来的请求，可以连续调用多个中间件进行处理
 * 3.执行完中间件业务代码后，不要忘记调用next（）函数
 * 4.调用next函数之后不要再写额外的代码
 * 5.连续调用多个中间件时，多个中间件之间共享req和res
 */
const express = require('express');
const app = express();
const mw1 = (req,res, next)=> {
  console.log('局部中间件');
  next();
}
const mw2 = (req,res ,next) => {
  console.log('局部中间件2');
  next();
}
// 创建路由
app.get('/',[mw1,mw2], (req, res) => {
  res.send('home')
})
app.get('/user', (req, res) => {
  res.send('user')
})
app.listen('80', ()=> {
  console.log('192.168.1.8')
})
