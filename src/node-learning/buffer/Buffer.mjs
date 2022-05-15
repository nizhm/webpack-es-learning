import { Buffer } from 'buffer';
import { Encodings } from '../commons/encoding.mjs';

// const buf = Buffer.from('abc', 'utf8');
const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
for(const encoding of Encodings.keys()) {
  console.log(`${encoding}: `);
  console.log(buf.toString(encoding));
}
