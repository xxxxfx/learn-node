// 中间件的作用
/**
 * 对请求进行预处理
 * 上一个中间件的输出作为下一个中间件的输入
 * var express = require('express')
 * var app = express()
 * app.get('/', function(req, res,next) {
 * next()})
 * 注意： 中间件函数的形参列表中，必须包含next参数，而路由处理函数中只包含req和res
 * app.listen(3000)
 * 5.next函数的作用
 * next函数是实现多个中间件连续调用的关键，他表示把流转关系转交给下一个中间件或路由
 */