const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const xhr = new XMLHttpRequest()
console.log(Object.getOwnPropertyNames(xhr))

// promise wrap synchronous code to make it asynchronous
let promise = new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  let url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  xhr.open('GET', url, true)
  xhr.onload = function () {
    console.log(arguments)
    resolve(arguments)
  }
  xhr.send(null)
})
promise.then(res => {
  console.log(res)
})
