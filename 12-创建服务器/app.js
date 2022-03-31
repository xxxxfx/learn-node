// 导入并注册路由
const express = require('express');
const apiRouter = require('./01api路由模块');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(parser.urlencoded({extended: false}));

// 声明jsonp接口
app.get('/api/jsonp', (req, res) => {
  const funcName = req.query.callback;
  const data = { name: 'zs', age: 22 }
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  res.send(scriptStr);

})

// 把路由模块，注册到app
app.use('/api', apiRouter);

app.listen('80', (req,res) =>{
console.log('hello');
});
