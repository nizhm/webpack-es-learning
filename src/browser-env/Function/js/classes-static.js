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
  // can not be initiated by `new` operator(for reason, without constructor aka [[Construct]])
  static printSalary() {
    // `this` reference is decided when `printSalary` is called
    console.log(this.salary)
  }
  // can be initiated
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
}
WorkB.salary = 10001
WorkB.year = 2022
WorkB.thisRefer = WorkB
WorkB.prototypeRefer = WorkB.prototype
// `WorkB.printSalary` is enumerable, but `Work.printSalary` is not
WorkB.printSalary = function () {
  console.log(this.salary)
}
// Both `WorkB.printYear` and `Work.printYear` are enumerable
WorkB.printYear = () => {
  console.log(this.salary)
}