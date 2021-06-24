/**
 * 实现一个promise函数
 */
class MyPromise {
  constructor(func) {
    this.state = 'pending';
    this.value = undefined;
    this.error = undefined;

    const resolve = (value) => {
      this.state = 'fulfilled';
      this.value = value;
    }

    const reject = (value) => {
      this.state = 'rejected';
      this.error = value;
    }
    // 自执行函数
    try {
      func(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  // then方法
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.state === 'rejected'){
      onRejected(this.error);
    }
  }
}

/**
 * 验证代码
 */
// 模拟一个延时方法
const delay = function(timeout) {
  return new MyPromise(function(resolve) {
    setTimeout(resolve, timeout);
  })
}

delay(3000).then(function() {
  console.log('myPromise')
});