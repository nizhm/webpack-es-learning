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