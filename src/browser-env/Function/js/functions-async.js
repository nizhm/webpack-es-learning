/**
 * 1.`async` keyword makes the `return` value Or an `Error` wrapped by a Promise object.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */

async function consoleName(n = 'nizhm') {
  // return Promise.resolve([undefined])
}

async function consoleWork(work = 'front') {
  // return Promise.resolve(work)
  return work
}

async function invokeFun() {
  // return Promise.reject(error)
  // `ReferenceError`
  fun()
}

async function throwInsideAsyncFunction(work = 'front') {
  // return Promise.reject(value | object)
  throw work
  return `Work is ${work}`
}

