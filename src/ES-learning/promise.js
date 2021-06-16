const showResult = () => {
  return new Promise((fn1, fn2) => {
    const done = true
    if(done) {
      const workFulfilled = {code: 200, data: {status: 'workFulfilled'}, msg: 'success'}
      fn1(workFulfilled)
    }else {
      const workRejected = new Error('workRejected')
      fn2(workRejected)
    }
  })
}
showResult().then(res => {
  console.log(res)
  return Promise.resolve(res.code)
}).then(val => {
  console.log(val)
}).catch(err => {
  console.log(err)
})
