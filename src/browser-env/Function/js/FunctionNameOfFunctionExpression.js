let sayHello = function sayHello(name) {
  // 'use strict'
  /**
   * 1.function name of a Function Expression is local only to the function body scope.
   * 2.it is a constant variable which ignores any assignment,
   * and an Error{@TypeError} will be reported by browser when assign to it in strict mode.
   * 3.this feature can be used for invoked self inside function body.
   * tips: `arguments.callee` is a non-standard feature
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function#named_function_expression
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function#parameters
   */
  debugger
  console.log(`Hello, ${name}`)
  // `sayHello` refers to the variable inside the function body scope
  // rather than the outside scope's `sayHello` which declared by `let`
  // ignored, however a TypeError occurs in strict mode
  sayHello = 123
  console.log(sayHello)
}