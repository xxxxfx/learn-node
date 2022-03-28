
console.log('impert被引入了');
module.exports = store => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('我是一个定时器异步');
      resolve('success');
    }, 500)
  })
}
