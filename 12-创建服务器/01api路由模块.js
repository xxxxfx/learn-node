const express = require('express');
const apiRouter = express.Router();

// bind your router here 挂载对应的路由
apiRouter.get('/get', (req,res) => {
  const query = req.query;
  res.send({
    status: 1000,
    data: query,
    message: '成功'
  })
})
apiRouter.post('/post', (req, res) => {
  const body = req.body;
  res.send({
    status:1000,
    data: body,
    message: '成功'
  })
})
module.exports = apiRouter