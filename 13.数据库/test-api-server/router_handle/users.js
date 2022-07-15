
// 密码加密
const bcrypt = require('bcryptjs')
const db = require('../db')
exports.reguser =  (req, res) => {
  const userInfo = req.body;
  console.log('用户信息', userInfo)
  const {password, username} = userInfo
  if(!password || !username) {
    return res.send({status:1, message: '用户信息或者密码不合法'})
  }
  // 判断用户名是否被占用
  const sql = 'select * from ev_users where username=?'
  db.query(sql, [username], (err, results) => {
    if(err) {
      return res.send({status: 1,message: err.message})
    }
    console.log(results, '查询到的数据')
    if(results.length > 0) {
      return res.send({status: 1,message: '用户名被占用'})
    }
    // 使用bcrypt.hashSnyc()对密码进行加密(10是随机盐系数)
    userInfo.password = bcrypt.hashSync(userInfo.password, 10)
    // console.log(userInfo,'加密后数据')
    // 用于插入新用户的sql语句
    const addSql = 'insert into ev_users set ?'
    db.query(addSql, {username: userInfo.username, password: userInfo.password}, (err,results) => {
      if(err) return res.send({status:1,message:err.message})
      // 判断影响行数
      if(results.affectedRows!== 1) {
        return res.send({status: 1, message: '注册用户失败，请稍后再试'})
      }
      res.send({status: 0, message: '注册用户成功'})
    })
  })
  // res.send('reguser ok')
}
exports.login = (req,res) => {
  // 获取客户端的信息
  const userInfo = req.body;
  // 对表单中的数据进行校验
  if(!userInfo.username || !userInfo.password) {
    res.send('发送的数据不合法')
  }
  res.send('login Ok')
}