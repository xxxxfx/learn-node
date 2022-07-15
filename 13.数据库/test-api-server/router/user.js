const express = require('express');

const router = express.Router()
const userHandle = require('../router_handle/users')

// 注册用户
router.post('/reguser', userHandle.reguser)

// 登陆

router.get('/login', userHandle.login)

// 导出

module.exports = router