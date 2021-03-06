/**
 * construct person
 * @constructor
 * @param {string} personName - person's full name
 * @param {string} age - person's age
 * @return {Person}
 */

function Person(personName, age) {
  if (!(this instanceof Person)) throw new TypeError(`Person should be invoked with 'new' keyword`)

  this.personName = personName
  this.age = age
}

/**
 * add a method to prototype
 */
Person.prototype.printProfile = function () {
  console.log(`${this.personName} is ${this.age} years old.`)
}

/**
 * define a name tag for `Person.prototype` object
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
 */
Object.defineProperty(Person.prototype, Symbol.toStringTag, {
  configurable: true,
  value: 'Person'
})

// node(v14.10.1 to validate) also provide __proto__ accessor properties
let person = new Person()
console.log(person.__proto__)
console.log(Object.getOwnPropertyDescriptors(Object.prototype))
