import { createWriteStream as fsCreateWriteStream } from 'fs';

const bigFile = fsCreateWriteStream('./files/smallOne.file');
for(let i = 0; i <= 5; i++) {
  bigFile.write('This is a line in big file, This is a line in big fileThis is a line in big fileThis is a line in big file.This is a line in big fileThis is a line in big fileThis is a line in big fileThis is a line in big fileThis is a line in big file \n');
}
bigFile.end();
