function testWhile() {
  let flag = true
  return new Promise(resolve=>{setTimeout(()=>{flag=false;resolve();},5000)})
  while(flag) {
    console.log(flag)
  }
  return flag
}
const res = testWhile()
console.log(res)