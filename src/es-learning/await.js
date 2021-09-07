/**
 * @async-await
 *  1.执行到await会阻断代码块结束之前的代码，等待异步操作结果；
 *  2.异步操作resolve或reject之后，从await位置重新开始执行阻断的代码块；
 *  3.await的阻断，并不能阻止函数的返回值，即函数还是直接返回了值，这个值是pending状态的promise；
 *  4.要是await阻断的代码中有return，那么恢复执行后，return的值，会传递到下一个promise处理逻辑的then块或catch块；
 *  5.函数加了async之后，返回promise；再加入await时，才会有异步阻断的特性；
 */
function resolveHello() {
  return new Promise((resolve, reject) => {
    resolve('Hello')
  })
}
async function printHello() {
  await resolveHello().then(res => {
    console.log('fulfill', res)
  }).catch(err => {
    console.log('err', err)
  })
}
printHello(function (res) {
  console.log(arguments)
})