const position = 'wrapper'
function superFun(fun) {
  const position = 'superFun'
  console.log(this === global)
}
const subFun = function () {
  //const position = 'subFun'
  console.log(this)
}
const obj = {
  position: 'obj',
  subFun,
  objFun: () => {
    this.position = 'objFun'
    console.log(this)
  }
}
obj.subFun()
obj.objFun()