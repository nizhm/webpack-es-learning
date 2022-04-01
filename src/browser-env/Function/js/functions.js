let sayHello = function sayHello(name) {
  console.log(`Hello, ${name}`)
  console.log(sayHello)
}
let aFun = sayHello
sayHello = null
console.log(aFun)
console.log(sayHello)

let sayHi = name => { console.log(`Hi, ${name}`) }

let sayGreet = new Function('name', 'console.log(`Hello, ${name}`)')

let obj = {
  aFunction: function sayInfo(name) {
    console.log(`Hello, ${name}`)
    console.log(sayInfo === this.aFunction)
  },
  bFunction: function (name) {
    console.log(`Hello, ${name}`)
    console.log(this.bFunction)
  }
}

function person(n, age) {
  this.n = n
  this.age = age
  this.printProfile = function () {
    console.log(this.n, this.age)
    console.log(this)
  }
  console.log(this.n, this.age)
  console.log(this)
}
person.prototype.sort = Array.prototype.sort

// IIFE is Expression(verbosely)
(
  function IIFEFun() {
    'use strict'
    console.log('IIFE')
    console.log(IIFEFun)
    // ignored in non-strict mode
    IIFEFun = null
    console.log(IIFEFun)
  }
) ()