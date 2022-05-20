import http from 'http';
import fs from 'fs';

const configPath = 'config/server.json'
let host = null;
let port = null;
try {
  const buffer = fs.readFileSync(configPath);
  const config = JSON.parse(buffer.toString());
  host = config.host;
  port = config.port;
} catch(e) {
  console.error(e);
}
if (!(host && port)) throw 'Can not get configuration'

const server = http.createServer(function (request, response){
  console.log(arguments);
  const responseBody = {
    code: '1',
    message: 'success',
    data: null
  }
  response.setHeader('Access-control-Allow-Origin', '*');
  response.setHeader('Access-control-Allow-Headers', 'Content-Type, Auth');

  response.setHeader('Content-Type', 'application/json');
  response.statusCode = 200;
  responseBody.data = request.headers;
  response.end(JSON.stringify(responseBody));
});
server.listen(port, host, () => {
  console.log(`Server running at http://${ host }:${ port }`);
});
