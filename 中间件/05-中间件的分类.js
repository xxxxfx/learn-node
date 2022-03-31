/**
 * 分类
 * 1.应用级别
 * 通过app.use app.get app.post绑定到app实例上的中间件
 * 2.路由级别中间件
 * 绑定到express.Roure()实力上的中间件
 * 3.错误级别中间件
 * 格式 function（err，req，res，next）
 * 错误级别的中间件必须注册在所有路由之后
 * 4.express内置中间件
 * express.static 快速托管静态资源的内置中间件
 * express.json(有兼容性，4.16.0+)
 * // app.use(express.json)
 * express.urllencode解析url-encode格式请求体数据(有兼容性，4.16.0+)
 * // app.use(exprss.urllencode)
 * 5.第三方中间件
 */
const express = require('express');
const app = express();
app.get('/', function(req,res){
  throw new Error('服务器内部发生错误');
  res.send('home page')
})
app.use((err,req,res,next)=> {
  console.log('发生错误', err.message);
  res.send('Error:'+ err.message);
})
app.listen('80', function() {
  console.log('http://192.168.1.8')
})
