/**
 * properties of function object and function local scope
 * @see https://docs.qq.com/sheet/DY2pqS1ZQY3RaT0ZC
 */

/**
 * A: function declaration
 */
function printProfileA(n='nizhm', work='front') {
  debugger
  let localScope = {
    thisRefer: this,
    arguments: arguments,
    target: new.target,
    // superRefer: super,
    self: printProfileA
  }
  console.log(printProfileA.arguments)
  console.log(arguments)
  // return `false`, however they look the same.
  console.log(printProfileA.arguments === arguments)
  let profile = `${n} work as ${work}`
}

/**
 * B: function expression with function name
 */
let printProfileB = function printProfileB(n='nizhm', work='front') {
  debugger
  let localScope = {
    thisRefer: this,
    arguments: arguments,
    target: new.target,
    // superRefer: super,
    self: printProfileB
  }
  console.log(printProfileB.arguments)
  console.log(arguments)
  // return `false`, however they look the same.
  console.log(printProfileB.arguments === arguments)
  let profile = `${n} work as ${work}`
}

/**
 * C: function expression without function name
 */
let printProfileC = function (n='nizhm', work='front') {
  debugger
  let localScope = {
    thisRefer: this,
    arguments: arguments,
    target: new.target,
    // superRefer: super,
    self: printProfileC
  }
  console.log(printProfileC.arguments)
  console.log(arguments)
  // return `false`, however they look the same.
  console.log(printProfileC.arguments === arguments)
  let profile = `${n} work as ${work}`
}
