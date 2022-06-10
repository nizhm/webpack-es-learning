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
import axi from './axi.js';

const req = axi();
req.then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});
