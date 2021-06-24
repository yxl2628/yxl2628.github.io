/**
 * Compiler类：负责编译模板， 把{{value}}解析成data中的value
 */
class Compiler {
  constructor(el, vm) {
    // 判断el是元素还是字符串，如果是字符串，则用字符串获取该元素
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // 每一次插入节点就会引起DOM树的变化，所以需要引入模板碎片
    const fragment = this.nodeToFrament(this.el);
    // 编译模板碎片
    this.compile(fragment);
    // 插入到具体dom节点
    this.el.appendChild(fragment);
  }
  // 判断是否是Node节点: noteType: 1-Element；2-Attr；3-Text；4-CDATASection；5-Entity引用；6-Entity；7-ProcessingInstruction；8-Comment；9-Document；10-DocuemntType；11-DocuemntFargement；12-Notation
  isElementNode(node) {
    return node.nodeType === 1;
  }
  // 判断是否是指令，如： v-xxx
  isDirective(attrName) {
    return attrName.startsWith('v-');
  }
  nodeToFrament(node) {
    const fragment = document.createDocumentFragment();
    let firstChild = node.firstChild;
    while(firstChild) {
      fragment.appendChild(firstChild);
      firstChild = node.firstChild;
    }
    return fragment;
  }
  // 编译节点
  compile(node) {
    // 获取子节点
    const childNodes = node.childNodes;
    // 遍历子节点
    [...childNodes].forEach(child => {
      // 判断是元素还是文本
      if (this.isElementNode(child)) {
        // 编译当前节点
        this.compileElement(child);
        // 同时调用自身，递归处理其子节点
        this.compile(child);
      } else {
        // 如果是文本的话，直接调用编译文本
        this.compileText(child);
      }
    })
  }
  // 编译文本节点
  compileText(node) {
    // 获取节点的文本内容
    const content = node.textContent;
    // 匹配{{}}
    if (/\{\{(.+?)\}\}/.test(content)) {
      CompileUtil['text'](node, content, this.vm);
    }
  }
  // 处理元素节点
  compileElement(node) {
    const atrributes = node.attributes;
    [...atrributes].forEach(attr => {
      // 结构每隔属性
      const { name, value: expr } = attr;
      // 判断是否是指令：v-xxxx
      if (this.isDirective(name)) {
        // 按照横线分割第一部分，比如v-model、v-on:click
        const [v, directive] = name.split('-');
        // 按照冒号分割第二部分，比如 v-on:click
        const [directiveName, eventName] = directive.split(':');
        // 对指令进行分类操作，比如：model、on、click
        CompileUtil[directiveName](node, expr, this.vm, eventName);
      };
    });
  }
}
// 编译工具类
CompileUtil = {
  // 从$data中查询对应的值，如:user.name
  getValue(vm, expr) {
    return expr.split('.').reduce((data, current) => {
      return data[current];
    }, vm.$data);
  },
  // 给data赋值
  setValue(vm, expr, value) {
    expr.split('.').reduce((data, current, index, arr) => {
      // 如果已经是最后一个
      if (arr.length - 1 === index) {
        return data[current] = value;
      }
      return data[current];
    }, vm.$data);
  },
  // node 为节点 expr为表达式 vm为当前实例
  text(node, expr, vm) {
    const fn = this.updater['textUpdater'];
    // 处理替换大括号的内容
    const content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      new Watcher(vm, args[1], () => {
        const entireValue = this.getContentValue(vm, expr);
        fn(node, entireValue);
      })
      return this.getValue(vm, args[1]);
    });
    fn(node, content);
  },
  // node 为节点 expr为表达式 vm为当前实例
  html(node, expr, vm) {
    const fn = this.updater['htmlUpdater'];
    new Watcher(vm, expr, (newValue) => {
      fn(node, newValue);
    });
    const value = this.getValue(vm, expr);
    fn(node, value);
  },
  // node 为节点 expr为表达式 vm为当前实例
  model(node, expr, vm) {
    const fn = this.updater['modelUpdater'];
    new Watcher(vm, expr, (newValue) => {
      fn(node, newValue);
    });
    node.addEventListener('input', (e) => {
      const value = e.target.value;
      this.setValue(vm, expr, value);
    });
    const value = this.getValue(vm, expr);
    fn(node, value);
  },
  // node 为节点 expr为表达式 vm为当前实例 eventName为事件名称
  on(node, expr, vm, eventName) {
    node.addEventListener(eventName, (e) => {
      vm[expr].call(vm, e);
    });
  },
  updater: {
    // 处理文本节点
    textUpdater(node, value) {
      node.textContent = value;
    },
    // 处理html文本
    htmlUpdater(node, value) {
      node.innerHTML = value;
    },
    // 处理model
    modelUpdater(node, value) {
      node.value = value;
    }
  },
  getContentValue(vm, expr) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getValue(vm, args[1]);
    });
  }
}

/**
 * 发布-订阅模式
 * 每一个被监听的属性都必须具有这样的功能：
 *    当它被set时，判断前后两值是否相同，如果不相同，监听新值，
 *    并且通知订阅者 -- 我被改变了，请更新内容
 * 这就是所谓发布订阅模式。
 */

/**
 * Dep类：订阅管理器
 * 用来添加订阅者，通知订阅者更新
 */
class Dep {
  constructor() {
    // 存放所有的观察者
    this.subs = [];
  }

  // 订阅-添加观察者
  addSub(watcher) {
    this.subs.push(watcher);
  }
  // 通知所有观察者
  notify() {
    this.subs.forEach(watcher => watcher.update());
  }
}

Dep.target = null;

/**
 * Watcher类：订阅者
 */
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    // 拿到旧的数据
    this.oldValue = this.get();
  }

  get() {
    Dep.target = this;
    const value = CompileUtil.getValue(this.vm, this.expr);
    Dep.target = null;
    return value;
  }

  update() {
    const newValue = CompileUtil.getValue(this.vm, this.expr);
    if (newValue !== this.oldValue) {
      this.cb(newValue);
    }
  }
}

/**
 * Observer类： 观察者
 */
class Observer {
  constructor(data) {
    this.observer(data);
  }
  observer(data) {
    if (data && typeof data === 'object') {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.defineReactive(data, key, data[key]);
        }
      }
    }
  }
  defineReactive(obj, key, value) {
    this.observer(value);
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      get: () => {
        // 创建watcher时，会将取到的对应内容放到全局上
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set: (newValue) => {
        if (value !== newValue) {
          // 如何赋值了新的对象，要增加监听
          this.observer(newValue);
          value = newValue;
          dep.notify();
        }
      }
    })
  }
}

/**
 * MVVM类
 */
class MVVM {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    const computed = options.computed;
    const methods = options.methods;
    if (this.$el) {
      new Observer(this.$data);

      for (let key in computed) {
        Object.defineProperty(this.$data, key, {
          get: () => {
            return computed[key].call(this);
          }
        })
      }

      for (let key in methods) {
        Object.defineProperty(this, key, {
          get: () => {
            return methods[key];
          }
        })
      }
      this.proxy(this.$data);
      new Compiler(this.$el, this);
    }
  }
  // 将data代理到MVVM对象上，方便调用者取值
  proxy(data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        Object.defineProperty(this, key, {
          get() {
            return data[key];
          },
          set(value) {
            data[key] = value;
          }
        })
      }
    }
  }
}
