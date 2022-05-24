import { readFile as readFileAsync } from 'fs/promises';
import { readFile as readFileCallback, readFileSync } from 'fs';

const filePath = './files/config.json';
const options = {
  // null(default -> buffer)/utf8/hex/utf16le/latin1/base64/ascii/binary
  encoding: null
};
function readFileCB(err, buf) {
  if (err) {
    console.error(err);
    return
  }
  const config = JSON.parse(buf.toString());
  console.log('Callback:');
  console.log(config.devDependencies.axios);
  console.log(config.dependencies);
}

readFileCallback(filePath, options, readFileCB);
