import { createReadStream as fsCreateReadStream } from 'fs';

const readStream = fsCreateReadStream('./files/config.json');
readStream.on('open', function (fd) {
  console.log('open');
  console.log(fd);
});
readStream.on('ready', function () {
  console.log('ready');
});
let data;
readStream.on('data', function (chunk) {
  console.log('data');
  data = chunk;
  console.log(chunk);
});
readStream.on('close', function () {
  console.log('close');
  console.log({
    buffer: data,
    text: data.toString()
  });
});
