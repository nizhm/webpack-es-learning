/**
 * event loop
 * 1.loop starts
 * 2.loop
 *  2.1 priority A: synchronous code execution/DOM action handle/network request send/start timer/...
 *  2.2 priority B: microtasks queue
 *  2.3 priority C: a task of old tasks queue
 * 3.rerender/paint
 * 4.loop ends
 *
 * tasks queue
 * 1.Script and Module initial
 * 2.timer callback
 * 3.asynchronous network request callback(async XMLHttpRequest and fetch API)
 * 4.DOM action callback(click/keyboard/onload/...)
 *
 * microtasks queue
 * 1.promise callback(Promise/async-await)
 * 2.MutationObserver callback
 * 3.queueMicrotask()
 *
 * questions
 * 1.the sign of event loop ends??? @since 20220407
 */

console.log('script starts: -------------------------------')

const node = document.querySelector('#app')
console.log('innerText: ', node.innerText)
const config = {
  subtree: true,
  childList: true,
  attributes: true,
  attributeOldValue: true,
  characterData: true,
  characterDataOldValue: true
}
const mo = new MutationObserver(function () {
  console.log('DOM changed')
  console.log(arguments)
  // will be handled in current loop
  queueMicrotask(() => {
    console.log('microtask B')
  })
  console.log('microtask B pushed')
})
mo.observe(node, config)
console.log('DOM observing')

// will be handled in next loop
setTimeout(() => {
  console.log('task 1')
  // will be handled before 'task 2' in next loop
  queueMicrotask(() => {
    console.log('microtask C')
  })
  console.log('microtask C pushed')
})
console.log('task 1 pushed')

// a microtask pushed into microtasks queue after `innerText` changed
node.innerText = 'Event loops(innerText)'
console.log('innerText value change code finished')
console.log('innerText: ', node.innerText)

// will be handled in current loop
queueMicrotask(() => {
  console.log('microtask A')
})
console.log('microtask A pushed')

// will be handled in next loop
setTimeout(() => {
  console.log('task 2')
})
console.log('task 2 pushed')

console.log('script ends: ---------------------------------')

/**
 * Result
 */
// script starts: -------------------------------
// innerText:  What?
// DOM observing
// task 1 pushed
// innerText value change code finished
// innerText:  Event loops(innerText)
// microtask A pushed
// task 2 pushed
// script ends: ---------------------------------
// DOM changed
// Arguments(2) [Array(1), MutationObserver, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// microtask B pushed
// microtask A
// microtask B
// task 1
// microtask C pushed
// microtask C
// task 2

function eventLoopA() {
  console.log('function `eventLoopA` starts: ---------------------------------')
  setTimeout(() => {
    console.log('timer111')
  })
  console.log('timer111 pushed')
  queueMicrotask(() => {
    console.log('microtasks111')
  })
  console.log('microtasks111 pushed')
  console.log('function `eventLoopA` ends: ---------------------------------')
}
function eventLoopB() {
  console.log('function `eventLoopB` starts: ---------------------------------')
  setTimeout(() => {
    console.log('timer222')
  })
  console.log('timer222 pushed')
  Promise.resolve().then(() => {
    console.log('microtasks333')
  })
  console.log('microtasks333 pushed')
  queueMicrotask(() => {
    console.log('microtasks222')
  })
  console.log('microtasks222 pushed')
  console.log('function `eventLoopB` ends: ---------------------------------')
}

eventLoopA()
eventLoopB()

/**
 * Result
 */
// function `eventLoopA` starts: ---------------------------------
// timer111 pushed
// microtasks111 pushed
// function `eventLoopA` ends: ---------------------------------
// function `eventLoopB` starts: ---------------------------------
// timer222 pushed
// microtasks222 pushed
// function `eventLoopB` ends: ---------------------------------
// microtasks111
// microtasks222
// timer111
// timer222
