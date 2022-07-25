// 存在问题： then中必须要有return的值
class MyPromise {
  // 构造方法
  constructor(executor) {
    // const PENDING = 'pending';
    // const FULFILLED = 'fulfilled';
    // const REJECTED = 'rejected';
    this.initValue();
    this.initBind();
    executor(this.resolve, this.reject)
  }
  initBind() {
    // 初始化this
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }
  initValue() {
    console.log('初始化值')
    this.PromiseResult = null;
    this.PromiseState = 'pending';
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
  }
  resolve(value) {
    // 实现状态不可变
    if(this.PromiseState !== 'pending') return;
    this.PromiseState = 'fulfilled';
    this.PromiseResult = value;
    while(this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult)
    }
  }
  reject(reason) {
    if(this.PromiseState !== 'pending') return;
    this.PromiseState = 'rejected';
    this.PromiseResult = reason;
    // then函数中的回调函数是一个异步
    while(this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.PromiseResult)
    }
  }

  // then(onFulFilled, onRejected) {
  //   // 实现链式调用，就是then执行后返回的对象是一个promise对象
  //   onFulFilled  = typeof onFulFilled === 'function' ? onFulFilled : value => value
  //   onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
  //   var thenPromise = new MyPromise((resolve, reject) => {
  //     const resolvePromsie = cb => {
  //       try {
  //         const x = cb(this.PromiseResult)
  //         console.log('cb参数', x)
  //         if( x=== thenPromise ) {
  //           // 不能返回自身哦
  //           throw new Error('不能返回自身。。。')
  //         }
  //         if (x instanceof MyPromise) {
  //           // 如果返回值是Promise
  //           // 如果返回值是promise对象，返回值为成功，新promise就是成功
  //           // 如果返回值是promise对象，返回值为失败，新promise就是失败
  //           // 谁知道返回的promise是失败成功？只有then知道
  //           x.then(resolve, reject)
  //       } else {
  //           // 非Promise就直接成功
  //           resolve(x)
  //       }
  //       } catch(err) {
  //         reject(err)
  //         throw new Error(err)
  //       }
  //     }
  //     if(this.PromiseState === 'fulfilled') {
  //       resolvePromsie(onFulFilled)
  //     } else if(this.PromiseState === 'rejected') {
  //       resolvePromsie(onRejected)
  //     } else if(this.PromiseState==='pending'){
  //       this.onFulfilledCallbacks.push(resolvePromsie.bind(this, onFulFilled))
  //       this.onRejectedCallbacks.push(resolvePromsie.bind(this, onRejected))
  //     }
  //   })
  //   return thenPromise
  // }
  then(onFulfilled, onRejected) {
    // 接收两个回调 onFulfilled, onRejected

    // 参数校验，确保一定是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }


    var thenPromise = new MyPromise((resolve, reject) => {

        const resolvePromise = cb => {
            try {
                const x = cb(this.PromiseResult)
                if (x === thenPromise) {
                    // 不能返回自身哦
                    throw new Error('不能返回自身。。。')
                }
                if (x instanceof MyPromise) {
                    // 如果返回值是Promise
                    // 如果返回值是promise对象，返回值为成功，新promise就是成功
                    // 如果返回值是promise对象，返回值为失败，新promise就是失败
                    // 谁知道返回的promise是失败成功？只有then知道
                    x.then(resolve, reject)
                } else {
                    // 非Promise就直接成功
                    resolve(x)
                }
            } catch (err) {
                // 处理报错
                reject(err)
                throw new Error(err)
            }
        }

        if (this.PromiseState === 'fulfilled') {
            // 如果当前为成功状态，执行第一个回调
            resolvePromise(onFulfilled)
        } else if (this.PromiseState === 'rejected') {
            // 如果当前为失败状态，执行第二个回调
            resolvePromise(onRejected)
        } else if (this.PromiseState === 'pending') {
            // 如果状态为待定状态，暂时保存两个回调
            // 如果状态为待定状态，暂时保存两个回调
            this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled))
            this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected))
        }
    })

    // 返回这个包装的Promise
    return thenPromise

}
}
const test3 = new MyPromise((resolve, reject) => {
  resolve(100) // 输出 状态：成功 值： 200
  // reject(100) // 输出 状态：成功 值：300
}).then(res => 2*res,
  err => 3 * err)
  .then(res => {
    console.log('成功', res)
    return res}, 
    err => console.log('失败', err))
