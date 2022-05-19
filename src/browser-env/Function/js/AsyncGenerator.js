/**
 * Async Generator, consumed only by `for await of` loop
 * @return {AsyncGenerator<unknown, void, *>}
 * genFun.next() --return--> Promise { [[PromiseResult]]: undefined } -> Promise { [[PromiseResult]]: { value: any, done: Boolean } }
 */
async function* AsyncGenFun() {
  for(let i = 0, len = 10; i < len; i++) {
    yield await new Promise(resolve => { setTimeout(resolve, 100, i + 1) })
  }
}

let asyncGenFun = AsyncGenFun();
(async () => {
  for await (const item of asyncGenFun) {
    console.log(item);
  }
})()

/**
 * Generator with Promises yields, consumed by `for await of` loop or `for of` loop
 * @return {AsyncGenerator<unknown, void, *>}
 * genFun.next() --return--> { value: Promise { [[PromiseResult]]: undefined }, done: Boolean } -> { value: Promise { [[PromiseResult]]: any }, done: Boolean}
 */
function* GenFun() {
  for(let i = 0, len = 10; i < len; i++) {
    yield new Promise(resolve => { setTimeout(resolve, 100, i + 1) })
  }
}

let genFun = GenFun();
// (async () => {
//   for await (const item of genFun) {
//     console.log(item);
//   }
// })()
(async () => {
  for (const item of genFun) {
    console.log(await item);
  }
})()

