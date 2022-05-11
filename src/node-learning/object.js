const EventEmitter = require('events');
const fsPromise = require('fs/promises');
const fs = require('fs');
const Stream = require('stream');

global.TypedArray = Int8Array.prototype.__proto__.constructor;
let int8Array = new Int8Array(10);
console.log(Object.getOwnPropertyDescriptors(Stream.__proto__));
console.log(Stream.__proto__ === EventEmitter);



