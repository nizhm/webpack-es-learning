//const showResult = () => {
//  return new Promise((resolve, reject) => {
//      resolve('success')
//})
//}
//let resultPromise = showResult().then(
//    value => {
//    console.log('value:')
//throw new Error(value)
//},
//reason => {
//  console.log('reason:')
//  console.log(reason)
//}
//).catch(err => {
//  console.log('catch:')
//console.log(err)
//return new Error()
//})
//setTimeout(()=>{
//  console.log(resultPromise)
//},5000)
//console.log(Promise.resolve(new Error()))
const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('111')
  }, 1000)
})
promise.then(res => {
  console.log('then:' + res)
  console.log(val)
}).catch(err => {
  console.log('error:' + err)
}).finally(() => {
  console.log('finally:')
})