import { createServer as httpCreateServer } from 'http';
import { networkInterfaces as osNetworkInterfaces } from 'os';
import handleIncomingMessage from './incomingMessageEvents.js';
import listenServerResponse from './serverResponseEvents.js';

const network = osNetworkInterfaces();
const IP = network[Object.getOwnPropertyNames(network)[0]].find(el => el.family === 'IPv4').address;

const httpServer = httpCreateServer();

/**
 * about `Expect` request and response header
 */
// httpServer.on('checkContinue', function handleCheckContinue(incomingMessage,serverResponse) {
//   console.log('checkContinue');
//   console.log('arguments.length:', arguments.length);
// });
// httpServer.on('checkExpectation', function handleCheckExpectation(incomingMessage,serverResponse) {
//   console.log('checkExpectation');
//   console.log('arguments.length:', arguments.length);
// });

/**
 * when client mistakes
 */
// httpServer.on('clientError', function handleClientError(error,duplex) {
//   console.log('clientError');
//   console.log('arguments.length:', arguments.length);
// });

/**
 * about `CONNECT` request
 */
// httpServer.on('connect', function handleConnect(incomingMessage,duplex, buffer) {
//   console.log('connect');
//   console.log('arguments.length:', arguments.length);
// });

/**
 * when client request http server upgrade
 */
// httpServer.on('upgrade', function handleUpgrade(incomingMessage,duplex, buffer) {
//   console.log('upgrade');
//   console.log('arguments.length:', arguments.length);
// });

/**
 * when start listen connections
 */
httpServer.on('listening', function handleListening() {
  console.log('listening');
  console.log('arguments.length:', arguments.length);
  const { port } = this.address();
  console.log(`Server running at\r\n Local: http://localhost:${port}\r\n NetWork: http://${IP}:${port}`);
});

/**
 * when A new connection established
 */
httpServer.on('connection', function handleConnection(socket) {
  console.log('connection');
  // console.log(socket);
});

/**
 * when A request arrives
 */
httpServer.on('request', function handleRequest(incomingMessage,serverResponse) {
  console.log('request', incomingMessage.method);
  serverResponse.setHeader('Access-control-Allow-Origin', '*');
  serverResponse.setHeader('Access-control-Allow-Headers', 'Content-Type');
  serverResponse.setHeader('Access-control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');

  listenServerResponse(serverResponse);
  handleIncomingMessage(incomingMessage, serverResponse);
});

/**
 * when all connections closed
 *
 * To call `server.close()` only stops listening new connection, all connections established continue util closed.
 */
// httpServer.on('close', function handleClose() {
//   console.log('close');
//   console.log('arguments.length:', arguments.length);
// });

/**
 * when error occurs???
 *
 * I never stimulate this
 */
// httpServer.on('error', function handleError(error) {
//   console.log('error');
//   console.log('arguments.length:', arguments.length);
// });

const listenOptions = {
  port: 9009,
  host: 'localhost'
}
httpServer.listen(listenOptions);

// setTimeout(() => {
//   // httpServer.close();
//   httpServer.listen(listenOptions);
// }, 1000);
