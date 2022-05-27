import { createConnection as netCreateConnection } from 'net';
import { readFileSync as fsReadFileSync } from 'fs';
import ServerConfig from './ServerConfig.js';

function handleResume() {
  console.log('client resume');
  console.log('arguments.length:', arguments.length);
}

function handleLookup(error, address, family, host) {
  console.log('client lookup');
  const lookupInfo = { error, address, family, host };
  console.log(lookupInfo);
}

function handleConnect() {
  this.setTimeout(10000);
  console.log('client connect');

  const buffer = fsReadFileSync('./files/bmp.bmp');
  console.log('file:', buffer.length);
  // client.write('Hello world!\r\n');
  this.write(buffer);
  // this.end();
}

function handleReady() {
  console.log('client ready');
  console.log('arguments.length:', arguments.length);
}

const dataList = [];
function handleData(data) {
  console.log('client data');
  console.log({
    buffer: data,
    string: data.length
  });
  dataList.push(data);
  // this.end();
}

function handleEnd() {
  console.log('client end');
  const buffer = Buffer.concat(dataList);
  console.log({
    buffer,
    length: buffer.length
  });
}

function handleClose() {
  console.log('client close');
  console.log('arguments.length:', arguments.length);
}

function handleTimeout() {
  console.log('client timeout');
  console.log('arguments.length:', arguments.length);
}

function handleError() {
  console.log('client error');
  console.log('arguments.length:', arguments.length);
}

function handleDrain() {
  console.log('client drain');
  console.log('arguments.length:', arguments.length);
}

function handlePause() {
  console.log('client pause');
  console.log('arguments.length:', arguments.length);
}

netCreateConnection(ServerConfig)
  .on('resume', handleResume)
  .on('lookup', handleLookup)
  .on('connect', handleConnect)
  .on('ready', handleReady)
  .on('data', handleData)
  .on('end', handleEnd)
  .on('close', handleClose)
  .on('timeout', handleTimeout)
  .on('error', handleError)
  .on('drain', handleDrain)
  .on('pause', handlePause);
