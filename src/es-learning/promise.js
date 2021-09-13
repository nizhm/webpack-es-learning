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
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('error')
  }, 1000)
})
promise.then(res => {
  throw new Error(res)
  console.log('then:' + res)
}).catch(err => {
  console.log('error:' + (typeof err === 'object'))
}).finally(() => {
  console.log('finally:')
})