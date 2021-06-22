/**
 * 实现一个instanceof
 */
function myInstanceOf(left, right) {
  let L = left.__proto__;
  let R = right.prototype;
  
  while(true) {
    if (L === null) {
      return false;
    }
    if (L === R) {
      return true;
    }
    L = L.__proto__
  }

}

/**
 * 验证代码
 */

const testArr = [1, 2, 3, 4];

console.log(testArr instanceof Array);
console.log(myInstanceOf(testArr, Array));