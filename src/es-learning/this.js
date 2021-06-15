'use strict'

global.age = 23
let name = 'nizm'
let sayColor = () => {
  console.log(this.color)
}

let globalObj = {
  name: 'globalObj',
  color: 'yellow',
  obj: {
    name: 'obj',
    color: 'red'
  },
  anotherObj: {
    name: 'anotherObj',
    color: 'green',
    sayName: function () {
      console.log(this)
      let f = () => {
        console.log(this)
      }
      return f()
    }
  }
}
// globalObj.anotherObj.sayName()
// globalObj.sayName = globalObj.anotherObj.sayName
// globalObj.sayName()

function printMe() {
  let name = 'nizm'
  console.log(this)
}
globalObj.printMe = printMe
globalObj.printMe()