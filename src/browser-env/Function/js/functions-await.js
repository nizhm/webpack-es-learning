/**
 * 1.`await` keyword stop an `async` function(return a Pending promise with `undefined` result([[PromiseResult]]))
 * util another `async` function's result([[PromiseResult]]).
 * 2.After the function continue to finish, the promise is resolved(or rejected) with the `return` value(default `undefined`).
 * 3.`await` can be only used in `async` function.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function
 */

async function getName(n = 'nizhm') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n)
    }, 3000)
  })
}

const getWork = async (work = 'front') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(work)
    }, 1000)
  })
}

async function printProfile() {
  const name = await getName()
  // `getWork` invoked after `getName` resolved(or rejected)
  const work = await getWork()
  console.log('name: ', name)
  console.log('work: ', work)

  // if `Error` occurs, the promise is rejected with `Error`
  throw 'an error'
  // else, the promise is resolved with `return` value
  return `${name}'s work is ${work}`
}

