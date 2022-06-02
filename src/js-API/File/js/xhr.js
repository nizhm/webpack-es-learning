import ContentTypes from './ContentType.js';

const selectElement = document.getElementById('contentType');
ContentTypes.forEach(item => {
  const optionElement = document.createElement('option');
  optionElement.value = item;
  optionElement.innerText = item;
  selectElement.appendChild(optionElement);
});

const method = 'POST';
const API = 'http://localhost:9201/';
function handleResponse(loadEvent) {
  const { target } = loadEvent,
        { status, response, responseText, responseType, responseURL } = target;
  console.log('response');
  console.log(loadEvent);
  console.log(target);
  // if (target.status === 200 && target.response) {
  //   const blob = new Blob([target.response]);
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = Date.now().toString();
  //   link.click();
  //   URL.revokeObjectURL(url);
  // }
}

async function launchXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open(method, API, true);
  xhr.addEventListener('load', handleResponse);

  let data;
  const files = document.getElementById('fileInput').files;
  if (!files.length) {
    data = null
    xhr.setRequestHeader('Content-Type', ContentTypes[0]);
    document.getElementById('contentType').value = ContentTypes[0];
  } else {
    const contentType = document.getElementById('contentType').value;
    xhr.setRequestHeader('Content-Type', contentType);

    switch(contentType) {
      case 'text/plain':
        const b = new Blob(files);
        data = await b.text();
        break;
      case 'text/html':
        data = document;
        break;
      case 'multipart/form-data':
        const formData = new FormData();
        for(let i = 0, len = files.length; i < len; i++) {
          formData.append('file' + i, files[i]);
        }
        data = formData;
        break;
      case 'application/x-www-form-urlencoded':
        const searchParams = new URLSearchParams();
        for(let i = 0, len = files.length; i < len; i++) {
          searchParams.append('fileName' + i, files[i].name);
          searchParams.append('fileSize' + i, files[i].size);
        }
        const params = searchParams.toString();
        data = params;
        break;
      case 'application/octet-stream':
        const blob = new Blob(files);
        data = blob
        break;
    }
  }
  console.log('data');
  console.log(data);
  xhr.send(data);
}

export { launchXHR }
