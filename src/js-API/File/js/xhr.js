const files = document.getElementById('fileInput').files;
const blob = files.length ? new Blob(files) : null;
const data = blob;

const method = 'POST';
const API = 'http://localhost:9009';
function handleResponse(loadEvent) {
  const { target } = loadEvent,
        { status, response, responseText, responseType, responseURL } = target;
  console.log('response');
  console.log(loadEvent);
  console.log(target);
}

function launchXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open(method, API, true);
  xhr.addEventListener('load', handleResponse);

  xhr.setRequestHeader('Auth', 'ok');
  xhr.setRequestHeader('Content-Type', '*');

  xhr.send(data);
}

export { launchXHR }
