const socketBtn = document.getElementById('socket');

const URL = 'ws://localhost:9301';

function listenSocket(socket) {
  socket.addEventListener('open', function handleOpen(event) {
    console.log('socket open');
    console.log(event);
    const msg = `(${ Date.now() })A connection from client`;
    for(let i = 0; i < 5; i++) {
      setTimeout(() => {
        socket.send(msg);
      }, i * 1000)
    }
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
  const socket = new WebSocket(URL, 'ws-first');
  listenSocket(socket);
}

socketBtn.addEventListener('click', launchSocket);
