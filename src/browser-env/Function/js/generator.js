/**
 * 1.use `function*` keyword defined generator function.
 * 2.in the beginning of generator function invoked,
 * a new generator object created with state(i.e. [[GeneratorState]]) `suspend`(which means the function is suspended)
 * 4.use `yield` keyword suspend function execution.
 * 5.use `yield*` keyword consumes an iterator.
 * @returns {Generator<string, string, *>}
 */
function* generator() {
  console.log('generator log')
  // string 'step 1' will be sent to generator
  // value passed in next invoked for generator is regarded as `yield 'step 1'`'s return value
  // i.e. step1 get `100` if next generator invoked by `[generator].next(100)`
  let step1 = yield 'step 1'
  //
  console.log('step1:', step1)
  let step2 = yield
  console.log('step2:', step2)
  return 'generator return'
}

function* iteratorFromGenerator() {
  // iterator consumed
  yield* [1, 2, 3]
  // iterator not consumed
  yield [4, 5, 6]
}

// same as iterating [1, 2, 3, [4, 5, 6]]
for(const item of iteratorFromGenerator()) {
  console.log(item)
}
// same as iterating ['step 1', undefined]
for(const item of generator()) {
  console.log(item)
}