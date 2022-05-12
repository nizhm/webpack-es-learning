class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get title() {
    return this.__proto__.constructor.name;
  }
}
Object.defineProperty(Person.prototype, Symbol.toStringTag, {
  value: 'Person',
  writable: false,
  enumerable: false,
  configurable: true
});

export default Person
