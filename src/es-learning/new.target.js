function myFun() {
  console.log(new.target)
}
let fun = new myFun()