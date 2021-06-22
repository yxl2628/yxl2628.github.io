/**
 * 实现一个深拷贝
 */

function deepClone(obj) {
  const copy = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return copy;
}

/**
 * 验证代码
 */
const orignObj = {
  name: '小明',
  apge: 30,
  family: [
    {
      name: '大明',
      age: 60,
      relation: '爸爸'
    },
    {
      name: '小红',
      age: 24,
      relation: '妻子'
    },
    {
      name: '小小明',
      age: 1,
      relation: '儿子'
    },
  ],
  house: {
    name: '明光北里',
    addr: '北京市海淀区明光北里社区',
    room: '14号楼2单元1102室'
  }
}

const newObj = Object.assign({}, orignObj);

const deepObj = deepClone(orignObj);


newObj.name = '新小明'
newObj.family[0].name = '新大明';
// 改的是newObj，但是打印发现orignObj里面对象的值也变了，这就是浅拷贝，只能拷贝值引用，对象是地址引用
console.log(orignObj);


deepObj.name = '深小明'
deepObj.family[0].name = '深大明';
// 深拷贝的话，不会对原有对象造成改变
console.log(orignObj);