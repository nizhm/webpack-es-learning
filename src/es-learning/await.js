/**
 * @async-await
 *  1.执行到await会阻断代码块结束之前的代码，等待异步操作结果；
 *  @deprecated 2.异步操作resolve或reject之后，从await位置重新开始执行阻断的代码块；
 *  2.await仅解构fulfilled状态promise；rejected会导致reason被throw，如果没有被catch，则函数不会恢复执行，程序被阻断；
 *  3.await的阻断，并不能阻止函数的返回值，即函数还是直接返回了值，这个值是pending状态的promise；
 *  4.要是await阻断的代码中有return，那么恢复执行后，return的值，会传递到下一个promise处理逻辑的then块或catch块；
 *  5.函数加了async之后，返回promise；再加入await时，才会有异步阻断的特性；
 */
async function outerAsyncFun() {
  const innerResult = await innerAsyncFun();
  console.log('innerResult of await:', innerResult);
}

async function innerAsyncFun() {
  // catch之后，相当于链式处理了promise，最终返回了一个resolve状态的promise，其result是catch块的return值;
  // finally块会在await恢复之前、reason被throw之前执行；
  const asyncResult = await asyncFun(false).finally(() => console.log('finally'));
  console.log('asyncResult of await:', asyncResult);
}

async function asyncFun(flag) {
  return new Promise((resolve, reject) => flag ? resolve('success') : reject('fail'));
}

outerAsyncFun();

