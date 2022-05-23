import { objectGetOwnPropertyDescriptors, objectGetOwnPropertyNames } from './commons/Object.mjs';
import { defTag, getChainOf } from './commons/Utils.mjs';
import EventEmitter from 'events';
import {
  createServer as httpCreateServer,
  Server,
  Agent,
  IncomingMessage,
  ServerResponse,
  OutgoingMessage,
  ClientRequest
} from 'http';
import net,
{
  Socket,
  Stream as netStream
} from 'net';
import stream,
{
  Stream,
  Readable,
  Writable,
  Duplex,
  Transform
} from 'stream';
import buffer from 'buffer';
import FormData from 'form-data';
// import path from 'src/node-learning/path/path.js';

defTag(Object.prototype, 'Object');
// const server = httpCreateServer((request, response) => {
//   console.log(objectGetOwnPropertyDescriptors(response));
//   console.log(objectGetOwnPropertyNames(objectGetOwnPropertyDescriptors(response)).join('\n'));
//   console.log(getChainOf(response));
//   response.end('ok');
// });
// server.listen(8080, '127.0.0.1', () => {
//   console.log(`Server running at http://192.168.1.150:8080`);
// });

// console.log(IncomingMessage.prototype.__proto__ === Readable.prototype);
// console.log(objectGetOwnPropertyDescriptors(ClientRequest));
// console.log(objectGetOwnPropertyNames(objectGetOwnPropertyDescriptors(ClientRequest)).join('\n'));
console.log(getChainOf(FormData));
