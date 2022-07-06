/**
 * `use strict`
 * 1.'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them.
 */

/**
 * Reference of `this`
 * 1.Callable functions created by `Function` constructor, function declaration, and function expression has `this` object inside local scope.
 * 2.Callable functions created by arrow function expression do not have self `this` and their `this` property come from wrapper scope.
 * 3.`this` object is a runtime object.
 * 4.For arrow functions, `this` comes from the wrapper scope.
 * 5.For non-arrow functions, `this` refers to the caller object(
 * if absent and non-strict mode, refers to the wrapper runtime object??? @since 20220402.
 * if absent and strict mode, `this` is assigned as `undefined`.)
 *
 * 5.For constructors(invoked by `new` keyword), `this` exactly refer to the newly created object.
 *
 */

/**
 * if absent and non-strict mode, refers to the `globalThis`;
 * caller object is related with function invoked ways, like `obj.fn()` means the caller object is `obj`,
 * however invoke `fn()` directly usually(do not think of `with`) means the caller object is absent(or undefined),
 * which will transform to `globalThis`;
 * @since 20220706
 */


function functionOfWindow() {
  debugger
  console.log('functionOfWindow `this`')
  // refer to the `window` when called by `functionOfWindow()`
  // refer to the `window` when called by `window.functionOfWindow()`
  // refer to the `functionsObj` when called by `functionsObj.functionOfWindow()`
  console.log(this)
}

function functionOfWindowStrictly() {
  // `debugger` before `use strict` will lead JavaScript compiler to ignore strict mode directive @since 20220402
  // debugger
  'use strict'
  debugger
  console.log('functionOfWindowStrictly `this`')
  // refer to `undefined` when called by `functionOfWindowStrictly()`
  // refer to `window` when called by `window.functionOfWindowStrictly()`
  // refer to `functionsObj` when called by `functionsObj.functionOfWindowStrictly()`
  console.log(this)
}

let functionOfScript = function functionOfScript() {
  debugger
  console.log('functionOfScript `this`')
  // refer to `window` when called by `functionOfScript()`
  // `window.functionOfScript` undefined(`let` declaration will not be added to `window`)
  // refer to `functionsObj` when called by `functionsObj.functionOfScript()`
  console.log(this)
}

let functionOfScriptStrictly = function functionOfScriptStrictly() {
  'use strict'
  debugger
  console.log('functionOfScriptStrictly `this`')
  // refer to `undefined` when called by `functionOfScriptStrictly()`
  // `window.functionOfScriptStrictly` undefined
  // refer to `functionsObj` when called by `functionsObj.functionOfScriptStrictly()`
  console.log(this)
}

let arrowFunctionOfScript = () => {
  debugger
  console.log('arrowFunctionOfScript `this`')
  // `this` property refers to `window` when called by `arrowFunctionOfScript()`
  // `window.arrowFunctionOfScript()` undefined
  // Local scope has not self `this`, and the `this` property comes from wrapper scope
  // `this` property refers to `window` when called by `functionsObj.arrowFunctionOfScript()`
  console.log(this)
}

let arrowFunctionOfScriptStrictly = () => {
  'use strict'
  debugger
  console.log('arrowFunctionOfScriptStrictly `this`')
  // `this` property refers to `window` when called by `arrowFunctionOfScriptStrictly()`
  // `window.arrowFunctionOfScriptStrictly()` undefined
  // Local scope has not self `this`, and the `this` property comes from wrapper scope
  // `this` property refers to `window` when called by `functionsObj.arrowFunctionOfScript()`
  console.log(this)
}

const functionsObj = {
  functionOfWindow,
  functionOfWindowStrictly,
  functionOfScript,
  functionOfScriptStrictly,
  arrowFunctionOfScript,
  arrowFunctionOfScriptStrictly,
  functionOfObject: function () {
    debugger
    console.log('functionOfObject `this`')
    console.log(this)
  },
  functionOfObjectStrictly: function () {
    'use strict'
    debugger
    console.log('functionOfObjectStrictly `this`')
    console.log(this)
  },
  arrowFunctionOfObject: () => {
    debugger
    console.log('arrowFunctionOfObject `this`')
    console.log(this)
  },
  arrowFunctionOfObjectStrictly: () => {
    'use strict'
    debugger
    console.log('arrowFunctionOfObjectStrictly `this`')
    console.log(this)
  }
}

// inner
function innerFunction() {
  console.log('innerFunction')
  console.log(this)
}

// outer
let outerFunction = () => {
  console.log('outerFunction')
  console.log(this)

  console.log(place)
}
let outerObject = {
  place: 'outerFunction'
}

// outer most
function outerMostFunction() {
  console.log('outerMostFunction')
  console.log(this)
  let place = 'outerMostFunction'
  const fun = function() {
    console.log('fun')
    place = place + '111'
    console.log(place)
  }
  fun()
  let place2 = 'outerMostFunction'
}
let outerMostObject = {
  place: 'outerMostFunction'
}

outerMostFunction()
let obj = {
  func: outerMostFunction
}

if ('createEvent' in document) {
  let event = document.createEvent('HTMLEvents')
  event.initEvent('change', true, true)
  target.dispatchEvent(event)
}

