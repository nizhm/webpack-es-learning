async function* asyncGen() {
  for(let i = 0, len = 5; i < len; i++) {
    yield await new Promise(resolve => setTimeout(resolve, 1000, i));
  }
}

/**
 * create a WritableStream
 * @type {WritableStream<any>}
 */
let writableStream = new WritableStream({
  write(value) {
    console.log(value);
  }
});

/**
 * consume a producer
 * lock -> loop [write -> written] -> unlock
 * @type {WritableStreamDefaultWriter<*>}
 */
let writableStreamDefaultWriter = writableStream.getWriter();
(async () => {
  for await (let chunk of asyncGen()) {
    await writableStreamDefaultWriter.ready;
    await writableStreamDefaultWriter.write(chunk);
  }
  await writableStreamDefaultWriter.close();
})();
writableStreamDefaultWriter.releaseLock();
