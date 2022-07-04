var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'nodeCURD'
});

connection.connect();
// 新增
let addSql = "INSERT INTO user(id,username,passward) VALUES(0,?,?)"
let addParams = ["刘亦菲", 'xxiii']
connection.query(addSql, addParams, function (err, res) {
  if (err) {
    console.log("新增错误：");
    console.log(err);
    return;
  } else {
    console.log("新增成功：");
    console.log(res);
  }
});

// 删除
var delSql = 'DELETE FROM user where id = 4';

// 连接 SQL 并实施语句
connection.query(delSql, function (err, res) {
  if (err) {
    console.log("删除错误：");
    console.log(err);
    return;
  } else {
    console.log("删除成功：");
    console.log(res);
  }
});

connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();