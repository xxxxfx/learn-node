const db = require('../db/index')
const bcrypt = require('bcryptjs')

exports.getUserInfo = (req, res) => {
  const sql = `select id,username,nickname,email,user_pic from ev_users where id=?`
  // express-jwt解析出用户id
  db.query(sql,req.auth.data.id, (err, results) => {
    console.log('sqlsql', results)
    if(err) return res.cc(err)
    if(results.length!==1) return res.cc('获取用户信息失败')
    res.send({
      status: 0,
      message: '获取用户信息成功',
      data: results[0]
    })
  })
}
exports.updateUserInfo = (req, res) => {
  const sql = 'update ev_users set ? where id=?'
  db.query(sql, [req.body, req.body.id], (err, results) => {
    if(err) return res.cc(err)
    if(results.affectedRows!==1) return res.cc(results.err)
    res.cc('更新用户信息成功')
  })
}
exports.updateUserPwd = (req,res) => {
  // 根据id查询用户信息
  const queryUser = 'select * from ev_users where id=?'
  // 更新用户信息
 
 db.query(queryUser, req.auth.data.id, (err,results) => {
   console.log('gengxin',req)
   if(err) return res.cc(err)
   if(results.length!==1) return res.cc('用户不存在')
   const compareSync = bcrypt.compareSync(req.body.oldPwd, results[0].password)

   // 判断用户输入旧密码是否正确
   if(!compareSync) return res.cc('旧密码错误')
   const sql = 'update ev_users set password=? where id=?'
   const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
   db.query(sql,[newPwd, req.auth.data.id], (err,results) => {
    if(err) return res.cc(err)
    if(results.affectedRows!==1) return res.cc('更新密码失败')
    res.send('更新is ok')
   })
   
 })
}