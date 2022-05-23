import { createServer as httpCreateServer } from 'http';
import { URL } from 'url';
import FormData from 'form-data';
import { config } from '../config/server.js';

const handleRequest = (request, response) => {
  // console.log(request.headers);

  if (request.method === 'GET') {
    const params = (new URL(request.headers.host + request.url)).searchParams.toString();
    console.log('params');
    console.log(params);
    response.end(params);
    return
  }

  let data = Buffer.alloc(0);
  request.on('data', chunk => {
    data = Buffer.concat([ data, chunk ], data.length + chunk.length);
  });
  request.on('end', () => {
    response.setHeader('Access-control-Allow-Origin', '*');
    response.setHeader('Access-control-Allow-Headers', 'Content-Type, Auth');
    response.setHeader('Content-Type', 'application/octet-stream');
    // response.setHeader('Content-Disposition', 'attachment;filename=' + Date.now() + '.txt');

    const formData = new FormData(data.toString());
    console.log('formData');
    console.log(formData);
    console.log(data.toString());

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
