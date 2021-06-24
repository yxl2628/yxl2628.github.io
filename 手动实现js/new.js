/**
 * 实现一个new的过程
 */
function createNew() {
  // 1.创建空对象
  const obj = {};
  // 2.连接到原型对象
  // const constructor = Array.prototype.shift.call(arguments);
  const [constructor, ...args] = [...arguments]; // 等价于上面的方法
  constructor.prototype = obj.__proto__;
  // 3.绑定this值
  // const result = constructor.apply(obj, arguments);
  const result = constructor.apply(obj, args); // 等价于上面的方法
  // 4.返回新对象
  return typeof result === 'object' ? result : obj;
}

/**
 * 验证代码
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const people1 = createNew(Person, '小明', 32);
console.log(people1.name, people1.age);

const people2 = createNew(Person, '小红', 33);
console.log(people2.name, people2.age);