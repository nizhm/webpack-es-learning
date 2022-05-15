import { objectGetOwnPropertyDescriptors, objectGetOwnPropertyNames } from './commons/Object.mjs';
import { defTag, getChainOf } from './commons/Utils.mjs';
import EventEmitter from 'events';
import { createServer, Server, Agent } from 'http';
import net, { Socket,Stream } from 'net';
import stream, { Readable, Writable, Duplex, Transform } from 'stream';
import buffer from 'buffer';
import path from 'src/node-learning/path/path.js';


// defTag(Object.prototype, 'Object');
// console.log(objectGetOwnPropertyDescriptors(path));
// console.log(objectGetOwnPropertyNames(objectGetOwnPropertyDescriptors(path)).join('\n'));
// console.log(getChainOf(path));
