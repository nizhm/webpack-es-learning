/**
 * 1.`this` inside `constructor` scope refer to newly instance object
 * 2.data properties will be added to `Work` instances
 * 3.methods and accessor properties will be added to `Work.prototype`
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 */
class Work{
  static isOk = true
  salary = null
  year = null
  thisRefer = null
  printSalary = function () {
    console.log(this.salary)
  }
  printYear = function printYear() {
    console.log(this.year)
  }
  // method `printWork` will be put into `Work.prototype`
  printWork() {
    console.log(this.salary, this.year)
  }
  // accessor property `profile` will be put into `Work.prototype`
  get profile() {
    return this.year + ',' + this.salary
  }
  set profile(payload) {
    // `this` reference is assigned when set profile is called
    // Call set profile from prototype(Work.prototype.profile = payload) will modify prototype object(add new properties to it),
    // but this does not affect the performance of `profile` accessor for a `Work` instance
    this.salary = payload.salary
    this.year = payload.year
  }
  constructor(salary = 10000, year = 2022) {
    // `static` properties should access by `Work` class
    if (Work.isOk) {
      this.salary = salary
      this.year = year
      this.thisRefer = this
    }
  }
}

function WorkB(salary = 10000, year = 2022) {
  if (WorkB.isOk) {
    this.salary = salary
    this.year = year
    this.thisRefer = this
  } else {
    this.salary = null
    this.year = null
    this.thisRefer = null
  }
  this.printSalary = function () {
    console.log(this.salary)
  }
  this.printYear = function printYear() {
    console.log(this.year)
  }
}
WorkB.isOk = true
WorkB.prototype.printWork = function printWork() {
  console.log(this.salary, this.year)
}
Object.defineProperty(WorkB.prototype, 'profile', {
  // es6 new feature: `get() {}` instead of `get: function () {}`
  get() {
    return this.year + ',' + this.salary
  },
  set(payload) {
    this.salary = payload.salary
    this.year = payload.year
  }
})
