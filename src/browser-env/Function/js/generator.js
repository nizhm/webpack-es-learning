/**
 * 1.use `function*` keyword defined generator function.
 * 2.in the beginning of generator function invoked,
 * a new generator object created with state(i.e. [[GeneratorState]]) `suspend`(which means the function is suspended)
 * 4.use `yield` keyword suspend function execution.
 * 5.use `yield*` keyword consumes an iterator.
 *
 * four place will stop
 * 1.the beginning of generator function
 * 2.`yield` keyword
 * 3.`yield*` keyword
 * 4.the end of generator function
 *
 * @[[Prototype]]
 * 1.next() @param {any} @return iterator
 *  iterator's `value` filed value is the `return` value or `yield` value
 *  the param's value will replace the `yield`(different from `yield*`) expression(last stopping place)
 * 2.return() @param {any} @return iterator
 *  close the generator and skip non-run part of function.
 *  the param's value will become the iterator's `value` field value.
 * 3.throw() @params {any}
 *  close the generator and skip non-run part of function.
 *  the error which should be caught by `try{}catch(e){}` stops JavaScript running.
 *
 * @[[GeneratorState]] {'suspend' | 'close'}
 * @returns {Generator<string, string, *>}
 */

function* generator() {
  console.log('generator log')
  // string 'step 1' will be sent to generator
  // value passed in next invoked for generator is regarded as `yield 'step 1'`'s return value
  // i.e. step1 get `100` if next generator invoked by `[generator].next(100)`
  let step1 = yield 'step 1'
  console.log('step1:', step1)
  // same as:
  // yield '1'
  // yield '2'
  // let step2 = undefined
  let step2 = yield* ['1', '2']
  console.log('step2:', step2)
  return 'generator return'
}

/**
 * same as iterating ['step 1', undefined]
 */
// for(const item of generator()) {
//   console.log(item)
// }

/**
 * same as iterating [1, 2, 3, [4, 5, 6]]
 */
// function* iteratorFromGenerator() {
//   // iterator consumed
//   yield* [1, 2, 3]
//   // iterator not consumed
//   yield [4, 5, 6]
// }
// for(const item of iteratorFromGenerator()) {
//   console.log(item)
// }

/**
 * generator function without `yield` keyword
 *
 * 1.
 * @returns {Generator<*, string, *>}
 */
let generatorWithoutYield = function* () {
  console.log('generatorWithoutYield')
  return '`return` from generatorWithoutYield'
}