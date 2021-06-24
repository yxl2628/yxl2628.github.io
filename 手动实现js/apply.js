/**
 * 实现一个apply函数
 */
Function.prototype.myApply = function() {
  const targetObj = arguments[0];

  targetObj[Symbol.for('fn')] = this;

  let result = null;

  // 和call的区别，apply只有两个参数，第二个参数是一个数组
  if (arguments[1]) {
    result = targetObj[Symbol.for('fn')](...arguments[1]);
  } else {
    result = targetObj[Symbol.for('fn')]();
  }
  
  return result;
}

/**
 * 验证代码
 */
function test(age, sex) {
  const show = sex === 'male' ? '男' : '女';
  console.log(this.name + '已经' + age + '岁了，是一个' + show + '孩子。');
}

var name = '小明';
test(20, 'male');
// 浏览器里面运行，会显示：小明的年龄是：20岁；node环境会显示：undefined的年龄是：20岁

var person = {
  name: '小红'
};

test.myApply(person, [23, 'female']);