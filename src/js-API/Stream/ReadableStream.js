async function* asyncGen() {
  for(let i = 0, len = 5; i < len; i++) {
    yield await new Promise(resolve => setTimeout(resolve, 1000, i));
  }
}

/**
 * create a ReadableStream
 * @type {ReadableStream<any>}
 */
let readableStream = new ReadableStream({
  async start(controller) {
    for await (let chunk of asyncGen()) {
      controller.enqueue(chunk);
    }
    controller.close();
  }
});

/**
 * consume a ReadableStream
 * lock -> loop [read -> read] -> unlock
 * @type {ReadableStreamDefaultReader<any>}
 */
let readableSteamDefaultReader = readableStream.getReader();
(async () => {
  while(true) {
    const { done, value } = await readableSteamDefaultReader.read();
    if (done) break;

    console.log(value);
  }
})();
readableSteamDefaultReader.releaseLock();
