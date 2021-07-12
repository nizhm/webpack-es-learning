/**
 * @description object的key
 * 1. 所有primitive value都可以作为key使用;
 * 2. number类型会被转化为string类型；而且后声明会覆盖前声明的值；
 * 3.object类型也可以，不过会被转化为primitive value(调用valueOf或者toString)；
 * 4.按key访问时，null、undefined、true、false、正常的string，可以使用点操作符.访问；其他要用计算操作符[]访问；
 */
const sym = Symbol('sym')
const object = new Object()
const func = function () {
  return
}
const arr = ['5555']
const promise = new Promise(() => {})
const obj = {
  null: 'null-key',
  undefined: 'undefined-key',
  1: 'number-1-key',
  '1': 'string-1-key',
  '2': 'string-2-key',
  2: 'number-2-key',
  '3=': 'string-3=-key',
  '=4': 'string-=4-key',
  'age': 'ordinary-string-key',
  '': 'empty-string-key',
  true: 'true-key',
  false: 'false-key'
}
obj[sym] = 'symbol-key'
obj[object] = 'object-key'
obj[func] = 'functiong-key'
obj[arr] = 'array-key'
obj[promise] = 'promise-key'
console.log(Object.getOwnPropertyNames(obj))
console.log(obj[5555])