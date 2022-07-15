const mysql = require('mysql'); // 引入

// 建立与数据库的连接
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库ip地址
  user: 'root',
  password: '123456',
  database: 'my_db_01'
})

// 测试链接
db.query('select 1',(err, results) => {
  if(err) return console.log(err.message)
  console.log(results);
})