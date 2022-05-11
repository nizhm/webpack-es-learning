import { readFile as readFileAsync } from 'fs/promises';
import { readFile as readFileCallback, readFileSync } from 'fs';

const filePath = 'D:\\Projects\\All\\webpack-es-learning\\src\\node-learning\\file-system\\files\\scriptFile.js';
const options = {
  // null(default -> buffer)/utf8/hex/utf16le/latin1/base64/ascii/binary
  encoding: null
};
function readFileCB(err, data) {
  console.log('Callback:');
  console.log(data);
}

const dataByAsync = await readFileAsync(filePath, options);
console.log('Async:');
console.log(dataByAsync);

const dataBySync = readFileSync(filePath, options);
console.log('Sync:');
console.log(dataBySync);

readFileCallback(filePath, options, readFileCB);
