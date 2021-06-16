function Person(name, age, eyeColor) {
  this.age = age
  this.eyeColor = eyeColor
  this.symbolKey = Symbol('nizm')
  this[this.symbolKey] = '@@nizm'
  this[Symbol('nizm')] = '545465'
}
Person.prototype.myName = 'nizm'
let newPerson = new Person('nizm', 24, 'black')
Object.defineProperty(newPerson, 'findPrototype', {
  get: function () {
    return Object.getPrototypeOf(this)
  },
  set: function (val) {
    this.firstName = val
  },
  enumerable: false,
  configurable: true
})
console.log(Symbol.for('nizm'))
console.log(newPerson)
console.log(newPerson[Symbol.for('nizm')])
console.log(newPerson[Object.getOwnPropertySymbols(newPerson)[0]])