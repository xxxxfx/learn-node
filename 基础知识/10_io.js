// 1.node非阻塞io
// 2.node events模块
/**
 * node事件循环
 * 1.node 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高
 * 2.node的每一个api都是异步的，并作为一个独立线程运行，是要异步函数调用，并处理并发
 * 3.node有多个内置的事件，我们可以通过events模块，并通过实例话eventEmitter类来帮定和监听事件
 */
// 引入events模块
let fs = require('fs');
let events = require('events');
let EventEmitter = new events.EventEmitter();
getExt = () => {
  fs.readFile('./08_ext.json', (err, data) => {
    EventEmitter.emit('data', data.toString());
  })
}
getExt();
EventEmitter.on('data',(ext) => {
  console.log('哈哈哈哈',ext);
})