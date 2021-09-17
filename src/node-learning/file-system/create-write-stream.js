const fs = require('fs');

const bigFile = fs.createWriteStream('./files/big.file');
for(let i = 0; i <= 1e6; i++) {
  bigFile.write('This is a line in big file, This is a line in big fileThis is a line in big fileThis is a line in big file.This is a line in big fileThis is a line in big fileThis is a line in big fileThis is a line in big fileThis is a line in big file \n');
}
bigFile.end();