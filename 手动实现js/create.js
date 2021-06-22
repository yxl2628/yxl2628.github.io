/**
 * 实现一个Object.create
 */
function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
/**
 * 验证代码
 */
function Person() {
  this.name = '小明';
  this.age = 32;
}

const person1 = Object.create(Person);

const person2 = createObject(Person);

console.log(person1.__proto__ === person2.__proto__);