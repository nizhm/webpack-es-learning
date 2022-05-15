import { objectGetOwnPropertyDescriptors, objectGetOwnPropertyNames } from './commons/Object.mjs';
import { defTag, getChainOf } from './commons/Utils.mjs';
import EventEmitter from 'events';
import { createServer, Server, Agent } from 'http';
import net from 'net';
const { Socket,Stream } = net;
import stream from 'stream';
const { Readable, Writable, Duplex, Transform } = stream;
import buffer from 'buffer';

defTag(Object.prototype, 'Object');
// console.log(objectGetOwnPropertyDescriptors(Stream));
// console.log(objectGetOwnPropertyNames(objectGetOwnPropertyDescriptors(Stream)).join('\n'));
// console.log(getChainOf(Stream));
console.log(Buffer === buffer.Buffer);
