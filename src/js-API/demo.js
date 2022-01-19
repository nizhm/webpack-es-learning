'use strict'
function printInfo() {
  debugger;
  const name = 'nizhm'
  const age = '24'
  const time = Date.now()
  console.log(time)
  return function greeting(x, y) {
    const greeting = 'Hello'
    console.log(`${greeting} ${this.name}, you are now ${this.age} years old!`)
  }
}
printInfo().call({ name: 'aaaaaaa', age: 100000 })