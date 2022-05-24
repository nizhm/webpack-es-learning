import { createReadStream as fsCreateReadStream } from 'fs';

const smallFile = fsCreateReadStream('./files/smallOne.file');
console.log('smallFile');
console.log(smallFile);
const content = smallFile.read(10);
console.log('content');
console.log(content);
