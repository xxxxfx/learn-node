const Promise = require('./promise原理');
// let myP = new Promise((resolve, reject) => {
//   console.log('执行了');
//   setTimeout(function() {
//     reject(3)
//   }, 10000)
// })
// myP.then(function(res) {
//   console.log('成功', res)
// }, function(err) {
//   console.log('错误', err)
// })
const MyPromise = require('./promise-原理-class');
const test3 = new MyPromise((resolve, reject) => {
  resolve(100) // 输出 状态：成功 值： 200
  // reject(100) // 输出 状态：成功 值：300
}).then(res => console.log(2 * res), err => 3 * err)
