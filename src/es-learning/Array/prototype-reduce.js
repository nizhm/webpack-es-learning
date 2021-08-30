const intArr = [ 1, 2, 3, 4, 5 ]
const result1 = intArr.reduce((pre, cur) => {
  console.log(pre, cur)
  return pre.toString() + cur
}, 0)