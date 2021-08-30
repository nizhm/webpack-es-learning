/**
 * @ArrowFunction
 *   1.() => expression; 会把简单表达式的结果作为return；
 *   2.() => { return ... } 有{}时，必需用return语句返回值；
 */
const arr = [ 111, 222, 333, 444, 555 ]
const list = [
  { id: 111 },
  { id: 222 },
  { id: 333 },
  { id: 444 },
  { id: 555 }
]
const result1 = arr.map(item => item * 2)
const result2 = list.map(item => {
  return item.id + 'id'
})
console.log(result2)