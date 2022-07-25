const express = require('express');
const router = express.Router();
const userInfoHandle = require('../router_handle/userInfo')
const expressJoi = require('@escook/express-joi')
const {update_userInfo_schema, update_userInfo_pwd} = require('../schema/user')



router.get('/userInfo', userInfoHandle.getUserInfo)
router.post('/userInfo', expressJoi(update_userInfo_schema), userInfoHandle.updateUserInfo)
router.post('/updatePwd', expressJoi(update_userInfo_pwd), userInfoHandle.updateUserPwd)
module.exports = router