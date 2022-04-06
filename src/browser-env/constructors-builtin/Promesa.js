/**
 * Promesa stimulates `Promise`.
 * spanish Promesa.
 */

// @see https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask#when_queuemicrotask_isnt_available
if (typeof self.queueMicrotask !== "function") {
  self.queueMicrotask = function (callback) {
    setTimeout(() => {
      try { callback() } catch(e) { throw e }
    }, 0)
  }
}

class Promesa {
  // static fields
  static PromesaStates
  static resolve
  static reject
  static all
  static allSettled
  static any
  static race

  static {
    this.PromesaStates = ['pending', 'fulfilled', 'rejected']
    this.resolve = result => new Promesa(resolve => resolve(result))
    this.reject = reason => new Promesa((resolve, reject) => reject(reason))
  }

  // prototype fields
  then(onFulfilled, onReject) {
    this.#onFulfilled = onFulfilled
    this.#onRejectedOfThen = onReject
    return this
  }
  catch(onReject) {
    this.#onRejectedOfCatch = onReject
    return this
  }
  finally(onSettled) {
    this.#onSettled = onSettled
    return this
  }
  // set #setPromesaState(state) {
  //   this.#PromesaState = state
  // }
  // set #setPromesaResult(result) {
  //   this.#PromesaResult = result
  // }

  // private instance fields
  #PromesaState
  #PromesaResult
  #resolvePromesa
  #rejectPromesa
  #onFulfilled
  #onRejectedOfThen
  #onRejectedOfCatch
  #onSettled
  #invokeFulfilledHandler
  #invokeRejectedHandler
  #invokeSettledHandler
  constructor(executor) {
    if (typeof executor !== 'function') throw new TypeError('Promesa resolver undefined is not a function')

    this.#PromesaState = 'pending'
    this.#PromesaResult = undefined
    this.#invokeFulfilledHandler = () => {
      typeof this.#onFulfilled === 'function' && this.#onFulfilled()
    }
    this.#invokeRejectedHandler = () => {
      (typeof this.#onRejectedOfThen === 'function' && this.#onRejectedOfThen()) ||
      (typeof this.#onRejectedOfCatch === 'function' && this.#onRejectedOfCatch())
    }
    this.#resolvePromesa = (result) => {
      console.log('#resolvePromesa')
      this.#PromesaState = Promesa.PromesaStates[1]
      this.#PromesaResult = result
      console.log(this.#PromesaState)
      if (this.#PromesaState !== 'pending') {
        this.#invokeFulfilledHandler()
      }
    }
    this.#rejectPromesa = (reason) => {
      console.log('#rejectPromesa')
      this.#PromesaState = Promesa.PromesaStates[2]
      this.#PromesaResult = reason
      console.log(this.#PromesaState)
      if (this.#PromesaState !== 'pending') {
        this.#invokeRejectedHandler()
      }
    }
    // put executor to tasks queue
    // for reason that executor should run after blocks(then/catch/finally) initiated.
    // setTimeout(() => {
    //   executor(this.#resolvePromesa, this.#rejectPromesa)
    // }, 0)
    queueMicrotask(() =>  { executor(this.#resolvePromesa, this.#rejectPromesa) })
  }
}

// define prototype object's tag
Object.defineProperty(Promesa.prototype, Symbol.toStringTag, {
  configurable: true,
  value: 'Promesa'
})

/**
 * test how `Promise` execute executor
 */
// new Promise(resolve => {
//   debugger
//   if (true) {
//     resolve(123)
//   }
// })

/**
 * test `callback` as a parameter
 */
// const executor = (resolve, reject) => {
//   if (true) {
//     resolve(123)
//   } else {
//     reject(456)
//   }
// }
//
// function executorContainer(callback) {
//   debugger
//   console.log(callback)
//   callback()
// }

/**
 * 1.each block(`then`/`catch`/`finally`) return a new promise object.
 * 2.`then` and `catch` block handle the promise from last block.
 * @type {Promise<unknown>}
 */
// let promise = new Promise((resolve, reject) => {
//   reject('A')
// })
// let promise2 = promise.then(result => {
//   console.log('onFulfilled handler')
//   console.log(this)
//   throw result + ',error'
// }, reason => {
//   console.log('onRejectedOfThen handler')
//   console.log(this)
//   throw reason + ',error'
// }).catch(reason => {
//   console.log('onRejectedOfCatch handler')
//   console.log(this)
//   throw reason + ',error'
// }).finally(() => {
//   console.log('onSettled handler')
//   console.log(this)
// })

let promesa = new Promesa((resolve) => {
  setTimeout(() => {
    resolve(123)
  }, 3000)
})
promesa.then(() => {
  console.log('onFulfilled handler')
}, () => {
  console.log('onRejectOfThen handler')
}).catch(() => {
  console.log('onRejectOfCatch handler')
}).finally(() => {
  console.log('onSettled handler')
})