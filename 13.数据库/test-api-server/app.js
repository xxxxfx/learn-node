const express=require('express')
const Joi = require('joi');
// const router = express.Router()

// const mysql = require(mysql)

// 创建服务器实例对象
const app = express();
// 1.2配置cors跨域
const cors = require('cors');
app.use(cors());

// 1.3配置解析表单数据的中间件, 只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({ extended: false}))

// res.send优化
app.use((req, res, next) => {
  // status:1 失败状态
  res.cc = function(err, status=1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})
// 在路由之前配置token中间件
// jwt解密
const { expressjwt } = require("express-jwt");
const config = require('./config')
app.use(expressjwt({secret: config.jwtSecretKey, algorithms: config.algorithms }).unless({path: [/^\/api/]}))

// app.use((req, res, next) => {
//   let token = req.headers['authorization'];
//   if (token == undefined)	res.status(403).send({ code: -1, msg: '无效的token' })
//   expressjwt.verify(token.split(' ')[1], config.jwtSecretKey, (err, decoded) => {
//     if (err.name === 'JsonWebTokenError') {
//       res.status(403).send({ code: -1, msg: 'Token无效' })
//     } else if (err.name === 'TokenExpiredError') {
//       res.status(403).send({ code: -1, msg: 'Token过期' })
//     } else {
//       req.data = decoded
//     }
//   })
// 	return next()
// })

// 倒入并使用用户路由模块
const userRouter = require('./router/user');
const userInfoRouter = require('./router/userInfo')
app.use('/api', userRouter);
app.use('/my', userInfoRouter);
// 错误级别中间件
app.use(function (err, req, res, next) {
  //  Joi 参数校验失败
  if (err instanceof Joi.ValidationError) {
    return res.cc(err)
  }
  if (err.name === "UnauthorizedError") {
    return res.cc('身份认证失败')
  }
  //  未知错误
  res.cc(err)
})

// 启动服务器
app.listen('80', () => {
  console.log('app server running at http://127.0.0.1:80')
})

//


