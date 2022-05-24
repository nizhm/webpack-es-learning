import { createServer as httpCreateServer } from 'http';

const httpServer = httpCreateServer();

httpServer.on('checkContinue', function handleCheckContinue(incomingMessage,serverResponse) {
  console.log('checkContinue');
  console.log('arguments.length:', arguments.length);
});

httpServer.on('checkExpectation', function handleCheckExpectation(incomingMessage,serverResponse) {
  console.log('checkExpectation');
  console.log('arguments.length:', arguments.length);
});

httpServer.on('clientError', function handleClientError(error,duplex) {
  console.log('clientError');
  console.log('arguments.length:', arguments.length);
});

httpServer.on('close', function handleClose() {
  console.log('close');
  console.log('arguments.length:', arguments.length);
});

httpServer.on('connect', function handleConnect(incomingMessage,duplex, buffer) {
  console.log('connect');
  console.log('arguments.length:', arguments.length);
});

httpServer.on('connection', function handleConnection(socket) {
  console.log('connection');
  console.log('arguments.length:', arguments.length);
  // console.log(socket);
});

httpServer.on('request', function handleRequest(incomingMessage,serverResponse) {
  console.log('request');
  console.log('arguments.length:', arguments.length);
  serverResponse.setHeader('Access-control-Allow-Origin', '*');
  serverResponse.statusCode = 200;
  serverResponse.end('OK');
});

httpServer.on('upgrade', function handleUpgrade(incomingMessage,duplex, buffer) {
  console.log('upgrade');
  console.log('arguments.length:', arguments.length);
});

httpServer.on('error', function handleError(error) {
  console.log('error');
  console.log('arguments.length:', arguments.length);
});

httpServer.on('listening', function handleListening() {
  console.log('listening');
  console.log('arguments.length:', arguments.length);
  const { address, port } = this.address();
  console.log(`Server running at http://${address}:${port}`);
});

httpServer.listen(9009, 'localhost');
