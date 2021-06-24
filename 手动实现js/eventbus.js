/**
 * 实现一个event bus
 */
class EventBus {
  constructor() {
    this.events = this.events || {};
  }

  addListener(type, func) {
    if (!this.events[type]) {
      this.events[type] = func;
    }
  }

  emit(type) {
    const currentEevent = this.events[type];
    currentEevent.apply(this, [...arguments].slice(1));
  }
}
/**
 * 验证代码
 */

const emitTest = new EventBus();

emitTest.addListener('age', function(age) {
  console.log('age is ' + age);
});

emitTest.emit('age', 32);