class ExplicitConstructor {
  static createTime = Date.now()
  static {
    // `this` refer to Class
    console.log(typeof this)
  }

  constructor(name = 'nizhm', age = 25) {
    // `this` refer to a new object
    console.log(this)
    this.n = name
    this.age = age
    this.classPropertyA = 'classPropertyA'
    this.classPropertyB = 'classPropertyB'

    let constructorPropertyA = 'constructor place variable'
    const constructorPropertyB = 'constructor site variable'
    function logInfo() {
      console.log(constructorPropertyA)
      console.log(constructorPropertyB)
    }
  }

  printProfile() {
    console.log(`${this.n} is ${this.age} years old.`)
  }
}

let obj = new ExplicitConstructor()
console.log(obj)
console.log(Object.getPrototypeOf(new Promise(resolve => resolve())))

module.exports = ExplicitConstructor