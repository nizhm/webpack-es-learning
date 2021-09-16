const http = require('http')
const hostname = '127.0.0.1'
const port = 8888
const server = http.createServer((req, res) => {
  console.log(process.env.NODE_ENV)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World Http Server!')
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${ hostname }:${ port }`)
})