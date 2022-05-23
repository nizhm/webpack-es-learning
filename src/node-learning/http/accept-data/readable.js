import { createServer as httpCreateServer } from 'http';
import { URL } from 'url';
import { config } from '../config/server.js';

const handleRequest = (request, response) => {
  console.log(request);

  if (request.method === 'GET') {
    const params = (new URL(request.headers.host + request.url)).searchParams.toString();
    console.log('params');
    console.log(params);
    response.end(params);
    return
  }

  let data = Buffer.alloc(0);
  let chunk;
  request.on('readable', function () {
    while((chunk = this.read()) !== null) {
      console.log('chunk');
      console.log(chunk);
      if (chunk) data = Buffer.concat([ data, chunk ], data.length + chunk.length);
    }
  });
  request.on('end', () => {
    response.statusCode = 200;
    console.log('data');
    console.log(data);
    response.end(data);
  });
};

function handleListened() {
  const { address, port } = this.address();
  console.log(`Server running at http://${address}:${port}`);
};

httpCreateServer(handleRequest).listen(config, handleListened);
