const express = require('express');
const {reg_login_schema} = require('../schema/user')
const expressJoi = require('@escook/express-joi')


const router = express.Router()
const userHandle = require('../router_handle/users')

// 注册用户
router.post('/reguser',expressJoi(reg_login_schema), userHandle.reguser)

// 登陆

router.post('/login',expressJoi(reg_login_schema), userHandle.login)

// update
router.post('/update', userHandle.update)
// 导出

module.exports = router