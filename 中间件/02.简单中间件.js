const express = require('express');
const app = express();
const mw = function(req, res, next) {
  const startTime = Date.now();
  req.startTime = startTime;
  console.log('这是一个最简单的中间件')
  next();
}

app.use(mw);
app.get('/',(req,res) => {
  console.log('初始页面');
  res.send('home page' + req.startTime);
});
app.get('/user',(req,res) => {
  res.send('user page');
})
app.listen(80, ()=> {
  console.log('http://192.168.1.8')
})
// 全局生效的中间件 通过调用app.use(中间件函数)，即可定义一个全局生效的中间件
/**
 * 中间件的作用
 * 多个中间件之间，共享同一份req和res，基于这样的特性，我们可以在上游的中间件中，
 * 统一为req和res对象添加自定义的属性或方法，供下游的中间件或路由进行使用
 */