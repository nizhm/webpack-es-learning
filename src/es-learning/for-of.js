const arr = [1, 2, 3, 4, 5]
console.log('------for-of------')
function forOf(list) {
  for(item of list) {
    console.log(item)
    if(item > 6) {
      return true
    }
  }
  return 20
}
const a = forOf(arr)
console.log(a)
console.log('------forEach------')
const foreach = arr.forEach(item => {
  console.log(item)
  if(item === 3) {
    return 6
  }
})
console.log(foreach)