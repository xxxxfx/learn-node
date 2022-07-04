const express = require('express');
const app = express();

const session = require('express-session');
app.use(
  session({
    secret: 'ihhhxs',
    resave: false,
    saveUninitialized: true
  }))
  // 前端请求后端接口不存在跨域问题，使用session身份认证机制
  // 存在跨域请求 使用jwt（json web token）认证机制
  /**
   * 客户端登录：提交账号密码——》服务端验证账号和密码——〉验证通过生成加密token——》token发送到客户端——〉客户端存储到localstorage或sessionstorage
   * ——》客户端请求时请求头authorization携带token发送到服务器——〉服务器将token还原成用户信息对象
   * 
   * jwt信息保存在浏览器，session保存到服务器端
   * 三部分组成： header . payload .signature
   */

// 存数据
  app.post('/api/login', (req, res) => {
    if(req.body.userName !== 'admin' || req.body.password !== 'mima') {
      return res.send({})
    }
    // 登陆成功用户信息保存到session中
    req.session = req.body;
    req.session.islogin = true;
    res.send({})
  })

  // 取数据
  app.get('/api/username', (req,res) => {
    if(!req.session.islogin) {
      return res.send({})
    }
    res.send({
      userName: req.session.user.userName
    })

  })
  // 清空session req.session.destory()
app.listen('80', (req,res) =>{
console.log('hello');
})