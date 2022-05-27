function handleResume() {
  console.log('socket resume');
  console.log('arguments.length:', arguments.length);
}

function handleLookup() {
  console.log('socket lookup');
  console.log('arguments.length:', arguments.length);
}

function handleConnect() {
  console.log('socket connect');
  console.log('arguments.length:', arguments.length);
}

function handleReady() {
  console.log('socket ready');
  console.log('arguments.length:', arguments.length);
}

let len = 0;
const dataList = [];
function handleData(data) {
  console.log('socket data');
  console.log('arguments.length:', arguments.length);
  console.log('data');
  console.log({
    buffer: data,
    string: data.length
  });
  len += data.length;
  dataList.push(data);

  // socket.write(data);
  // socket.end();
}

function handleEnd() {
  console.log('socket end');
  console.log('arguments.length:', arguments.length);
}

function handleClose() {
  console.log('socket close');
  console.log('arguments.length:', arguments.length);
}

function handleTimeout() {
  console.log('socket timeout');
  console.log('arguments.length:', arguments.length);
  // socket.write('Timeout');
  this.write(Buffer.concat(dataList));
  this.end();
}

function handleError() {
  console.log('socket error');
  console.log('arguments.length:', arguments.length);
}

function handleDrain() {
  console.log('socket drain');
  console.log('arguments.length:', arguments.length);
}

function handlePause() {
  console.log('socket pause');
  console.log('arguments.length:', arguments.length);
}

function listenSocket(socket) {
  socket.setTimeout(6000);

  socket
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
}

export default listenSocket
