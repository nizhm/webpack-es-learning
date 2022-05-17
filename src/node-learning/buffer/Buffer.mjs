import { Buffer } from 'buffer';
import { Encodings } from '../commons/encoding.mjs';

const encoding = 'utf8'
const buf = Buffer.from('Chinese中文', encoding);
console.log(buf.length);
console.log('Buffer.prototype.toString:', buf.toString(encoding));
console.log('fromCharCode:', String.fromCharCode(...buf));
console.log('fromCodePoint:', String.fromCodePoint(...buf));
