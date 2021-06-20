let myFun = new Function()
myFun.prototype.name = 'nizm'
console.log(myFun)
myFun()
let a = new myFun()
console.log(a)