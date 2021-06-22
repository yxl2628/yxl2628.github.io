/**
 * 实现一个call函数
 */
Function.prototype.myCall = function() {
  const [targetObj, ...args] = [...arguments];

  targetObj[Symbol.for('fn')] = this;

  // 和apply的区别，call的参数是(xxx, param1, param2,..., paramN)这样的不定参数
  const result = targetObj[Symbol.for('fn')](...args);

  delete targetObj[Symbol.for('fn')];

  return result;
}

/**
 * 验证代码
 */
function test (age, sex) {
  const show = sex === 'male' ? '男' : '女';
  console.log(this.name + '已经' + age + '岁了，是一个' + show + '孩子。');
}

var name = '小明';
test(20, 'male');
// 浏览器里面运行，会显示：小明的年龄是：20岁；node环境会显示：undefined的年龄是：20岁

var person = {
  name: '小红'
};

test.myCall(person, 23, 'female');
