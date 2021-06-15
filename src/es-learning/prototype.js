function Person(name, age, eyeColor) {
  this.age = age
  this.eyeColor = eyeColor
  this.symbolKey = Symbol('nizm')
  this[this.symbolKey] = '@@nizm'
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
console.log(Symbol.keyFor(Symbol.for('nizm')))
console.log(newPerson)
console.log(newPerson[newPerson.symbolKey])