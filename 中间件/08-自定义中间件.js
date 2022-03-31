/**
 * c l c
 */
const express = require('express');
const app = express();
const qs = require('querystring');
// 1.监听req的data事件 如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器，
// 所以data时间可能会触发多次，每一次触发data事件时，获取到的数据只是完整数据的一部分
// 需要手动对接收到的数据进行拼接
app.use(function(req,res,next) {
  let str = '';
  req.on('data', (chunk) => {
    str += chunk;
  })
  req.on('end', () => {
    // 字符串格式解析为对象格式
    const body = qs.parse(str);
    req.body = body;
    console.log(body);
  })
  next();
})
app.listen('80', (req,res) =>{
console.log('hello');
})