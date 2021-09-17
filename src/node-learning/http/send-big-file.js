const http = require('http');
const fs = require('fs');

const server = http.createServer();
const bigFilePath = '../file-system/files/big.file';
server.on('request', (req, res) => {
  // 写入到http响应对象
  fs.readFile(bigFilePath, (err, data) => {
    if(err) { throw err };
    res.end(data);
  });
  // res作为writable接收可读流；
  //const src = fs.createReadStream(bigFilePath);
  //src.pipe(res);
});
server.listen(8000);