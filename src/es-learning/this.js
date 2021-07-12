const superFunction = function (fun) {
  const position = 'super'
  console.log(this)
  fun()
}
const subFunction = function (val) {
  const position = 'sub'
  subFunction.caller(() => {console.log(8)})
}
const obj = {
  position: 'obj',
  superFun: superFunction,
  subFun: subFunction,
  this: this
}

const xObj = {
  x: 'x',
  getX: function () {
    console.log(this.x)
  }
}
//const printX = xObj.getX.bind()
//printX()
/**
 * @param this
 * @param arguments
 * 1.箭头函数自身没有this和arguments对象；
 * 2.箭头函数中使用this和arguments其实是在使用外层（函数）的this和arguments对象；
 */
function myArrowFun() {
  const arrowFun = (...arg) => {
    console.log(this)
    console.log(arguments)
    console.log(arg)
  }
  arrowFun(33, 44)
}
//myArrowFun()
const arrowFun = (...arg) => {
  console.log(this)
  console.log(arguments)
  console.log(arg)
}
//arrowFun(33, 44)