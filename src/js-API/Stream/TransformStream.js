async function* asyncGen() {
  for(let i = 0, len = 5; i < len; i++) {
    yield await new Promise(resolve => setTimeout(resolve, 1000, i));
  }
}

let transformStream = new TransformStream({
  transform(chunk, controller) {
    const value = chunk * 2;
    controller.enqueue(value);
    console.log('transformed:');
    console.log(value);
  }
});

/**
 * consume a producer
 * lock -> loop [write -> transform -> transformed -> read -> read -> written] -> unlock
 * @type {WritableStreamDefaultWriter<any>}
 */
let { readable, writable } = transformStream;
let transformStreamReader = readable.getReader();
(async () => {
  while(true) {
    const { done, value } = await transformStreamReader.read();
    if (done) break;

    console.log('read');
    console.log(value);
  }
})();
let transformStreamWriter = writable.getWriter();
(async () => {
  for await (let chunk of asyncGen()) {
    const written = await transformStreamWriter.write(chunk);
    console.log('written');
    console.log(written);
  }
  await transformStreamWriter.close();
})();
transformStreamWriter.releaseLock();
transformStreamReader.releaseLock();

