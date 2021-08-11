const axios = require('axios')
const url = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
axios({
  method: 'get',
  url: url,
  responseType: 'blob'
}).then(res => {
  const {
    status,
    statusText,
    data,
    headers,
    config,
    request
        } = res
  console.log(status)
  console.log(statusText)
  console.log(headers['content-type'], headers['content-length'] + ' bytes')
}).catch(err => {
  console.log('error')
  console.log(err)
})