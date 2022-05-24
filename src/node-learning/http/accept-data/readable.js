import { createServer as httpCreateServer } from 'http';
import { URL } from 'url';
import { config } from '../config/server.js';

const handleRequest = (request, response) => {
  // console.log(request);

  if (request.method === 'GET') {
    const params = (new URL(request.headers.host + request.url)).searchParams.toString();
    console.log('params');
    console.log(params);
    response.end(params);
    return
  }

  const chunkList = [];
  let chunk;
  request.on('readable', function () {
    while((chunk = this.read()) !== null) {
      console.log('chunk');
      console.log(chunk);
      if (chunk) chunkList.push(chunk);
    }
  });
  request.on('end', () => {
    response.setHeader('Access-control-Allow-Origin', '*');
    response.setHeader('Access-control-Allow-Headers', 'Content-Type, Auth');
    response.setHeader('Content-Type', 'application/octet-stream');

    const data = Buffer.concat(chunkList);
    console.log('data');
    console.log(data);
    response.statusCode = 200;
    response.end(data);
  });
};

function handleListened() {
  const { address, port } = this.address();
  console.log(`Server running at http://${address}:${port}`);
};

httpCreateServer(handleRequest).listen(config, handleListened);
