const arrayBuffer = new ArrayBuffer(2);
const subArrayBuffer = arrayBuffer.slice(0);
console.log(ArrayBuffer.isView(subArrayBuffer));
console.log(subArrayBuffer);
