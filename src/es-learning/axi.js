function axi() {
  return new Promise(( (resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      resolve();
    });
    xhr.addEventListener("error", () => {
      reject();
    });

    xhr.open('GET', '127.0.0.1');
    xhr.send('msg');
  } ));
}

export default axi
