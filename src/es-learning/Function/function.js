let myFun = new Function()
myFun.prototype.name = 'nizm'
//console.log(myFun)
//myFun()
let a = new myFun()
//console.log(a)
/**
 * @param new.target
 * 1.new.target只能在函数内部访问到；
 * 2.调用[[Contruct]]时，new.target是个地址值，指向new关键字后面的函数对象；
 * 3.调用[[Call]]时，new.target的值为undefined；
 */
function myFuntion() {
  return new.target
}
let b = new myFuntion()
console.log(b === myFuntion)