// jsonwebtoken 生成jwt字符串
// express-jwt 将jwt字符串解析还原成json对象

// secret密钥(网络传输的过程中加密和解密)
const express = require('express')
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { application } = require('express');


const secretKey = 'itnkcds--)('
const app = express()
// 注册将jwt字符串解析还原成json对象中间件
// unless指定那些接口不需要访问权限
app.use(expressJWT({secret: secretKey})).unless({path: [/^\/api\//]})

// jwt.sign() 三个参数： 用户信息 加密密钥 配置对象，可以设置token 有效期
// 不要把密码加密到token字符串中，否则很危险
app.post('/api/login', (req, res) => {
  res.send({
    token: jwt.sign({username: userinfo.username}, secretKey, { expiresIn: '30s'})
  })
})

// 这是一个有权限的接口
app.get('/admin/getinfo', (req, res) => {
  // 可以得到req.user
  console.log(req.user)
})

// 捕获解析jwt失败后产生的错误，通过express的错误中间件捕获错误
app.use((err,req, res, next) => {
  if(err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token'
    })
  }
})