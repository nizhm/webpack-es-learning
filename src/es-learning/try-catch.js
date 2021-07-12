/**
 * @field  try{} catch (e) {}
 * 1.try中的代码出错，try的代码块会停止执行；
 * 2.try停止执行后，其他部分代码继续执行；
 * 3.不加try catch则会导致整段代码停止执行；
 */
const obj = {
}
try {
  console.log('111111111')
  const age = obj.user
  console.log(age)
  console.log('00000000000')
}
catch (e) {
  console.log('e')
  console.log(e.message)
}
console.log('22222222')