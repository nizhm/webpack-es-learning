debugger;
let year = '2022'
let month = '01'
let day = '23'
function printInfo(x, y, z) {
  console.log(this)
  console.log(x + y + z)
}
console.log(this)
printInfo(year, month, day)

export default printInfo