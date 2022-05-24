import { createWriteStream as fsCreateWriteStream } from 'fs';

const writeStream = fsCreateWriteStream('./files/big.txt');
writeStream.on('open', function (fd) {
  console.log('open');
  console.log(fd);
});
writeStream.on('ready', function () {
  console.log('ready');
});
writeStream.on('close', function () {
  console.log('close');
});
for(let i = 0; i <= 1e6; i++) {
  writeStream.write('This is a line in big file.\n');
}
writeStream.close();
