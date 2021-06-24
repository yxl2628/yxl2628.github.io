/**
 * 实现一个bind函数
 */
Function.prototype.myBind = function() {
  const [targetObj, ...args] = [...arguments];

  const self = this;
  
  return function() {
    return self.call(targetObj, ...args);
  }

}
/**
 * 验证代码
 */
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
// 这里和call的区别是bind返回了函数，所以需要执行的话，要加()
test.myBind(person, 23, 'female')();