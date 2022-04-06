/**
 * event loop
 * 1.loop starts
 * 2.loop
 *  2.1 priority A: user interaction/script/...
 *  2.2 priority B: microtasks queue
 *  2.3 priority C: a task of old tasks queue
 * 3.rerender/paint
 * 4.loop ends
 *
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