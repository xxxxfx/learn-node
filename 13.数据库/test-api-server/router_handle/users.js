
// 密码加密
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db')
const config = require('../config')
exports.reguser =  (req, res) => {
  const userInfo = req.body;
  // console.log('用户信息', userInfo)
  const {password, username} = userInfo
  // if(!password || !username) {
  //   return res.send({status:1, message: '用户信息或者密码不合法'})
  // }
  // 判断用户名是否被占用
  const sql = 'select * from ev_users where username=?'
  db.query(sql, [username], (err, results) => {
    if(err) {
      // return res.send({status: 1,message: err.message})
      return res.cc(err)
    }
    if(results.length > 0) {
      return res.send({status: 1,message: '用户名被占用'})
    }
    // 使用bcrypt.hashSnyc()对密码进行加密(10是随机盐系数)
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)
    // console.log(userInfo,'加密后数据')
    // 用于插入新用户的sql语句
    const addSql = 'insert into ev_users set ?'
    db.query(addSql, {username: userInfo.username, password: userInfo.password}, (err,results) => {
      if(err) return res.cc(err)
      // 判断影响行数
      if(results.affectedRows!== 1) {
        // return res.send({status: 1, message: '注册用户失败，请稍后再试'})
        return res.cc('注册用户失败，请稍后再试')
      }
      // res.send({status: 0, message: '注册用户成功'})
      res.cc('注册用户成功', 0)
    })
  })
  // res.send('reguser ok')
}
exports.login = (req,res) => {
  // 获取客户端的信息
  const userInfo = req.body;
  const sql = 'select * from ev_users where username=?'
  db.query(sql, userInfo.username, (err, result) => {
    if(err) return req.cc(err)
    if(result.length !== 1) return res.cc('登陆失败')
    const compareResult = bcrypt.compareSync(userInfo.password, result[0].password)
    if(!compareResult) return res.cc('登录失败')
    // todo 在服务器生成token字符串, 排除敏感信息
    const user= {...result[0], password: '', user_pic: ''}

    // 生成token字符串
    const tokenSTr = jwt.sign({data: user, expiresIn: 60 * 60 * 3}, config.jwtSecretKey)
    // const tokenSTr = jwt.sign({
    //   data: 'foobar'
    // }, 'secret', { expiresIn: '1h' });

    res.send({
      status: 1,
      message: '登陆成功',
      data: {
        token: 'Bearer ' + tokenSTr,
        user,
      }
    })
  })
  // 对表单中的数据进行校验
  // if(!userInfo.username || !userInfo.password) {
  //   res.send('发送的数据不合法')
  // }
}

// 修改用户信息
exports.update = (req, res) => {}