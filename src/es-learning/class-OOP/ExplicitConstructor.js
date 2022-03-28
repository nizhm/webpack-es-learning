class ExplicitConstructor {
  static createTime = Date.now()

  constructor(name = 'nizhm', age = 25) {
    this.n = name
    this.age = age
  }

  printProfile() {
    console.log(`${this.n} is ${this.age} years old.`)
  }
}

module.exports = ExplicitConstructor