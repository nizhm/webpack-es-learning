const alphArr = [ 'z', 'c', 'a', 'b' ]
const result1 = alphArr.sort()
const result2 = alphArr.sort((el1, el2) => {
  console.log(el1, el2)
})
console.log(result2)