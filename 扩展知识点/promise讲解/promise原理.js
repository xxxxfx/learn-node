/**
 * promise是通过构造函数实例话一个对象，然后通过实例对象上的then方法，来处理异步返回的结果
 * 一个promise当前的状态必须是一下状态之一： pending fulfiled rejected
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function Promise(executor) {
  const _this = this;
  this.state = PENDING; // 状态
  this.value = undefined; // 成功返回
  this.reason = undefined; // 失败返回
  // 参照发布订阅模式，当执行then的时候，若此时的状态还是pending的时候好就将回调函数存储在数组中，
  // 当状态改变的时从数组中取出回调函数
  this.onFulFilled = []; //成功回调
  this.onRejected = []; // 失败回调

  function resolve(value) { // 成功回调
    // console.log('resolve');
    if(_this.state === PENDING) {
      _this.state = FULFILLED;
      _this.value = value;
      _this.onFulFilled.forEach(fn => fn(value))
    }
  };
  function reject(reason) { // 失败回调
    if(_this.state = PENDING) {
      _this.state = REJECTED;
      _this.reason = reason;
      _this.onRejected.forEach(fn => fn(reason))
    }
  } 
  try {
    executor(resolve, reject)
  } catch(e) {
    reject(e)
  }
  
}
Promise.prototype.then = function(onFulFilled, onRejected) {
  // 支持异步
  if(this.state === PENDING) {
    typeof onFulFilled === 'function' && this.onFulFilled.push(onFulFilled)
    typeof onRejected === 'function' && this.onRejected.push(onRejected)
  }
  if(this.state === FULFILLED) {
    typeof onFulFilled === 'function' && onFulFilled(this.value)
  }
  if(this.state === REJECTED) {
    typeof onRejected === 'function' && onRejected(this.reason)
  }
};
module.exports = Promise;