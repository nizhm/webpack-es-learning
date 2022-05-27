import { createServer as netCreateServer } from 'net';
import listenSocket from './listenSocket.js';
import ServerConfig from './ServerConfig.js';

function handleListening() {
  console.log('netServer listening');
  console.log('arguments.length:', arguments.length);
  const { address, port } = this.address();
  console.log(`TCP server runs at: ws://${ address }:${ port }`);
}

function handleConnection(socket) {
  console.log('netServer connection');
  console.log('arguments.length:', arguments.length);
  console.log(socket);
  listenSocket(socket);
}

function handleClose() {
  console.log('netServer close');
  console.log('arguments.length:', arguments.length);
}

function handleError(error) {
  console.log('netServer error');
  console.log('arguments.length:', arguments.length);
}

netCreateServer()
  .on('listening', handleListening)
  .on('connection', handleConnection)
  .on('close', handleClose)
  .on('error', handleError)
  .listen(ServerConfig);
