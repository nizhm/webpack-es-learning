function replaceValue(match, p, offset, string, group) {
  console.log(match, p, offset, string, group)
  console.log(arguments)
  return 'd'
}
const str = '1a2b3c'
const regExp = /[ab]/g
console.log(str.replace(regExp, replaceValue))