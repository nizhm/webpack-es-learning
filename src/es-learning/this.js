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
const printX = xObj.getX.bind()
printX()