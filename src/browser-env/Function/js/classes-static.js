class Work {
  /**
   * 1.static properties and methods will be added to the Class's properties.
   * static properties are the same as the properties added to a function,
   * however static methods are different in Descriptor.Enumerable field which is `false` for a static method.
   * 2.`this` refer to the class inside static initial block scope
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks
   */
  static salary = 10000
  static year = 2020
  static thisRefer = Work
  static prototypeRefer = Work.prototype
  // can not be instantiated by `new` operator(for reason, without constructor aka [[Construct]])
  static printSalary() {
    // `this` reference is decided when `printSalary` is called
    console.log(this.salary)
  }
  // can be instantiated
  static printYear = function () {
    console.log(this.year)
  }
  static {
    this.salary = 10000
    this.year = 2022
    // `this` === `Work`
    this.thisRefer = this
    // `this.prototype` === `Work.prototype`
    this.prototypeRefer = this.prototype
  }
}

function WorkB() {
  // !new.target
  // Or !(this instanceof WorkB)
  // @see https://github.com/vuejs/vue/blob/2.6/src/core/instance/index.js
  if (!new.target) {
    throw new TypeError(`Constructor function ${WorkB.name} cannot be invoked without 'new'`)
  }
}
WorkB.salary = 10001
WorkB.year = 2022
WorkB.thisRefer = WorkB
WorkB.prototypeRefer = WorkB.prototype
// `WorkB.printSalary` is enumerable, but `Work.printSalary` is not
WorkB.printSalary = function printSalary() {
  console.log(this.salary)
}
// Both `WorkB.printYear` and `Work.printYear` are enumerable
WorkB.printYear = function () {
  console.log(this.salary)
}

const prototypeObj = {}
Object.defineProperty(prototypeObj, 'constructor', {
  configurable: true,
  value: WorkB,
  writable: true
})
// prototype property is writable(default for function)
WorkB.prototype = prototypeObj