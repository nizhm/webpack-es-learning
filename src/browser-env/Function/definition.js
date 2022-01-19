/**
 * 比较8种不同形式声明函数获得的函数对象的区别；
 *  1.standard：function fn(...params) {...}
 *  2.literal + assignment： let fn = function (...params) {...}
 *  3.arrow function + assignment: let fn = (...params) => {...}
 *  4.Function + assignment: let fn = new Function(...)
 *  5.standard： (function fn(...params) {...})
 *  6.literal: (function (...params) {...})
 *  7.arrow function: ((...params) => {...})
 *  8.Function: (new Function(...))
 * @aspect name property
 * @aspect typeof operator
 * @aspect instanceof operator
 * @aspect function texture character
 * @aspect Object.getPrototypeOf
 * @aspect Object.getOwnPropertyDescriptors
 * @aspect Object.getOwnPropertyNames
 * @aspect Object.getOwnPropertySymbols
 * @since 20220119
 * @author nizhm
 * */
function funA(name, age) { console.log(`Function A: ${name} is ${age} years old!`) }

let funB = function (name, age) { console.log(`Function B: ${name} is ${age} years old!`) }

let funC = (name, age) => { console.log(`Function C: ${name} is ${age} years old!`) }

let funD = new Function('name', 'age', "console.log(`Function D: ${name} is ${age} years old!`)")

console.log('---------- name property ----------')
console.log(funA.name)
console.log(funB.name)
console.log(funC.name)
console.log(funD.name)
console.log('----------')
console.log((function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) }).name)
console.log((function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) }).name)
console.log(((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) }).name)
console.log((new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)")).name)
console.log('---------- name property ----------')

console.log('---------- typeof ----------')
console.log(typeof funA)
console.log(typeof funB)
console.log(typeof funC)
console.log(typeof funD)
console.log('----------')
console.log(typeof (function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) }))
console.log(typeof (function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(typeof ((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(typeof (new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)")))
console.log('---------- typeof ----------')

console.log('---------- instanceof Function ----------')
console.log(funA instanceof Function)
console.log(funB instanceof Function)
console.log(funC instanceof Function)
console.log(funD instanceof Function)
console.log('----------')
console.log((function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) }) instanceof Function)
console.log((function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) }) instanceof Function)
console.log(((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) }) instanceof Function)
console.log((new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)")) instanceof Function)
console.log('---------- instanceof Function ----------')

console.log('---------- function texture ----------')
console.log(funA)
console.log(funB)
console.log(funC)
console.log(funD)
console.log('----------')
console.log(function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) })
console.log(function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) })
console.log((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) })
console.log(new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)"))
console.log('---------- function texture ----------')

console.log('---------- Object.getPrototypeOf ----------')
console.log(Object.getPrototypeOf(funA))
console.log(Object.getPrototypeOf(funB))
console.log(Object.getPrototypeOf(funC))
console.log(Object.getPrototypeOf(funD))
console.log('----------')
console.log(Object.getPrototypeOf(function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) }))
console.log(Object.getPrototypeOf(function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getPrototypeOf((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getPrototypeOf(new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)")))
console.log('---------- Object.getPrototypeOf ----------')

console.log('---------- Object.getOwnPropertyDescriptors ----------')
console.log(Object.getOwnPropertyDescriptors(funA))
console.log(Object.getOwnPropertyDescriptors(funB))
console.log(Object.getOwnPropertyDescriptors(funC))
console.log(Object.getOwnPropertyDescriptors(funD))
console.log('----------')
console.log(Object.getOwnPropertyDescriptors(function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertyDescriptors(function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertyDescriptors((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertyDescriptors(new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)")))
console.log('---------- Object.getOwnPropertyDescriptors ----------')

console.log('---------- Object.getOwnPropertyNames ----------')
console.log(Object.getOwnPropertyNames(funA))
console.log(Object.getOwnPropertyNames(funB))
console.log(Object.getOwnPropertyNames(funC))
console.log(Object.getOwnPropertyNames(funD))
console.log('----------')
console.log(Object.getOwnPropertyNames(function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertyNames(function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertyNames((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertyNames(new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)")))
console.log('---------- Object.getOwnPropertyNames ----------')

console.log('---------- Object.getOwnPropertySymbols ----------')
console.log(Object.getOwnPropertySymbols(funA))
console.log(Object.getOwnPropertySymbols(funB))
console.log(Object.getOwnPropertySymbols(funC))
console.log(Object.getOwnPropertySymbols(funD))
console.log('----------')
console.log(Object.getOwnPropertySymbols(function funE(name, age) { console.log(`Function E: ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertySymbols(function (name, age) { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertySymbols((name, age) => { console.log(`Function '': ${name} is ${age} years old!`) }))
console.log(Object.getOwnPropertySymbols(new Function('name', 'age', "console.log(`Function 'anonymous': ${name} is ${age} years old!`)")))
console.log('---------- Object.getOwnPropertySymbols ----------')