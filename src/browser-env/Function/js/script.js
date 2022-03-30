debugger;
function funC() {
  const position = 'C'
  console.log('funC')
  console.log(this)
}
function funB() {
  const position = 'B'
  console.log('funB')
  console.log(this)
  funC()
}
function funA() {
  'use strict'
  // debugger;
  const position = 'A'
  console.log('funA')
  console.log(this)
  funB()
}
let obj1 = {
  name: 'nizhm',
  fn: funA
}
funA()