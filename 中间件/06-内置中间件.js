const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.post('/user',(req,res) => {
  // 在服务器，可以使用req.body这个属性，来接受客户端发送过来的请求体数据
  //默认情况下，如果不配置解析表单数据的中间件，则req.body默认为undefined
  console.log(req.body);
  res.send('ok')
});
app.post('/book',(req,res)=> {
  // req.body可以得到json和form形式格式的数据
  console.log(req.body);
  res.send('ok')
})
app.listen('80', function(req,res) {
  console.log('http://192.168.1.8')
})