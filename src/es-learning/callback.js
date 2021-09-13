function printResult(res) {
  console.log(res)
}
function execSum(num1, num2, cb) {
  const sum = num1 + num2
  cb(sum)
}
execSum(20, 30, printResult)