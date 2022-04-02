/**
 * Person constructor stimulates built-in constructor
 * @constructor Person
 * @param work {string}
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
 */

class Person {

  // set in this way can not stimulate built-in performance
  // get [Symbol.toStringTag]() { return 'Person' }

  constructor(work = 'front') {
    this.work = work
    this.printWork = function () {
      console.log(this.work)
    }
  }
}

// set in this way can stimulate but descriptor is not suitable
// Person.prototype[Symbol.toStringTag] = 'Person'

// fully stimulate
// defined `Person.prototype`'s tag name with string 'Person'
Object.defineProperty(Person.prototype, Symbol.toStringTag, {
  configurable: true,
  value: 'Person'
})