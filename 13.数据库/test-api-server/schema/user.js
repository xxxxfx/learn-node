// 导入 Joi 来定义验证规则
const Joi = require('joi');
// 1. 导入 @escook/express-joi
// const expressJoi = require('@escook/express-joi')
const username = Joi.string().alphanum().min(3).max(12).required();
const password = Joi.string().pattern(/^[\S]{6,15}$/).required();
const id =Joi.number().integer().min(1).required()
const nickname = Joi.string().required()
const email = Joi.string().email().required()
exports.reg_login_schema =  {
  // 2.1 校验 req.body 中的数据
  body: {
    username,
    password,
    repassword: Joi.ref('password')
  }
  // // 2.2 校验 req.query 中的数据
  // query: {
  //   name: Joi.string().alphanum().min(3).required(),
  //   age: Joi.number().integer().min(1).max(100).required()
  // },
  // // 2.3 校验 req.params 中的数据
  // params: {
  //   id: Joi.number().integer().min(0).required()
  // }
}
exports.update_userInfo_schema = {

  body: {
    id,
    nickname,
    email
  }
}
exports.update_userInfo_pwd = {
  body: {
    oldPwd: password,
    newPwd: Joi.not(Joi.ref('oldPwd')).concat(password),
  }
}