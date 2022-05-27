const socketBtn = document.getElementById('socket');

const URL = 'ws://localhost:9009';

function listenSocket(socket) {
  socket.addEventListener('open', function handleOpen(event) {
    console.log('socket open');
    console.log(event);
    socket.send('A connection from client');
    // socket.send();
  });

  socket.addEventListener('message', function handleMessage(event) {
    console.log('socket message');
    console.log(event.data);
  });

  socket.addEventListener('close', function handleClose(closeEvent) {
    console.log('socket close');
    console.log(closeEvent);
  });

  socket.addEventListener('error', function handleError(event) {
    console.log('socket error');
    console.log(event);
  });
}

function launchSocket() {
  const socket = new WebSocket(URL);
  listenSocket(socket);
}

socketBtn.addEventListener('click', launchSocket);
