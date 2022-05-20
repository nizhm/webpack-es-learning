import { launchXHR as handleSubmit } from './xhr.js';

function updateFileList(files) {
  const box = document.querySelector('.form_fileList_box');
  while(box.firstChild) {
    box.removeChild(box.firstChild);
  }

  if(files.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No files currently selected';
    box.appendChild(para);
  } else {
    const list = document.createElement('ol');
    box.appendChild(list);

    for(const file of files) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      para.textContent = `${file.name} | ${file.size}Bytes | ${file.type}`;
      listItem.appendChild(para);
      list.appendChild(listItem);
    }
  }
}

async function handleLoadEnd(reader, file) {
  const result = reader.result;
  const arrayBuffer = await file.arrayBuffer();
  console.log(result);
  console.log(arrayBuffer);
  console.log(result === arrayBuffer);
}

function readFile(file) {
  if (!(file && file instanceof File)) return

  const reader = new FileReader();
  console.log(file);
  const readerEvents = ['abort', 'error', 'load', 'loadend', 'loadstart', 'progress'];
  readerEvents.forEach(readerEvent => {
    reader.addEventListener(readerEvent, function (progressEvent) {
      console.log(readerEvent + ':');
      console.log(progressEvent);
      if (readerEvent === 'loadend') {
        handleLoadEnd(reader, file);
      }
    })
  })

  reader.readAsArrayBuffer(file);
  // reader.readAsText(file);
  // reader.readAsBinaryString(file);
  // reader.readAsDataURL(file);
}

function convertCodePoint(codePoint) {
  const decimal = parseInt(codePoint.toString())
  if (decimal < 32 || decimal === 127) {
    return `[${decimal}|0x${decimal.toString(16)}]`
  }
  return String.fromCodePoint(codePoint)
}

async function BtoPlain(blob, type = 'plain') {
  if (!(blob && blob instanceof Blob)) return

  const uint8Array = new Uint8Array(await blob.arrayBuffer());
  let plain = ''
  uint8Array.forEach(item => {
    switch(type) {
      case 'plain':
        plain += convertCodePoint(item);
        break;
      case 'hex':
        plain += item.toString(16) + '-';
        break;
      default:
        plain += convertCodePoint(item);
    }
  })
  return type === 'hex' ? plain.substring(0, plain.length - 1) : plain
}

async function convertFile(file) {
  console.log(file);
  console.log('Blob.prototype.text():');
  console.log(await file.text());
  console.log('str:');
  console.log(await BtoPlain(file));
  console.log('hexStr:');
  console.log(await BtoPlain(file, 'hex'));

  /**
   * `Blob.prototype.arrayBuffer()` copies Blob and allocates new memory;
   */
  // const uint8Array = new Uint8Array(await file.arrayBuffer());
  // uint8Array.fill(0);
  // console.log('Uint8Array From File:');
  // console.log(uint8Array);
  // console.log('hexStr:');
  // console.log(await BtoPlain(file, 'hex'));
}

function handleFile(changeEvent) {
  // `this` refers to the target node in standard function listener, however refers to `undefined` in arrow function;
  updateFileList(this.files);
  // readFile(this.files[0]);
  convertFile(this.files[0]);
}

document.getElementById('fileInput').addEventListener('change', handleFile);
document.getElementById('submit').addEventListener('click', handleSubmit);
