const xhrGet = document.getElementById('xhrGet');
const xhrPost = document.getElementById('xhrPost');

const API = 'http://localhost:9009/';
const methodGet = 'GET';
const methodPost = 'POST';

function launchGet() {
  // console.log(arguments);
  const httpGet = new XMLHttpRequest();
  httpGet.open(methodGet, API);
  // httpGet.setRequestHeader('Content-Type', 'x-www-form-urlencoded');
  // httpGet.setRequestHeader('Connection', 'close');
  httpGet.send();
}
xhrGet.addEventListener('click', launchGet);


function launchPost() {
  // console.log(arguments);
  const httpGet = new XMLHttpRequest();
  httpGet.open(methodPost, API);
  // httpGet.setRequestHeader('Expect', '100-continue');
  // httpGet.setRequestHeader('Content-Type', 'x-www-form-urlencoded');
  httpGet.setRequestHeader('Connection', 'close');
  httpGet.send('A Post request');
}
xhrPost.addEventListener('click', launchPost);
