const express=require('express')
// const mysql = require(mysql)

// 创建服务器实例对象
const app = express();
// 1.2配置cors跨域
const cors = require('cors');
app.use(cors());

// 1.3配置解析表单数据的中间件, 只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({ extended: false}))

// 倒入并使用用户路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);

// 启动服务器
app.listen('80', () => {
  console.log('app server running at http://127.0.0.1:80')
})

//


