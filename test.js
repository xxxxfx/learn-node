// console.log(process.env.PATH)
// process.env = 'dev'
process.env.NODE_ENV='dev'
console.log(process.env, '环境')

// nextTick的使用， 延迟执行
const Eventemitter = require('events').EventEmitter;
function complexOperate() {
  const events = new Eventemitter();
  process.nextTick(() => {
    events.emit('success')
  })
  return events;
}
complexOperate().on('success',() => {
  console.log('监听到success')
})