function handleIncomingMessage(incomingMessage){
  /**
   * when `readable.resume()` is called and readableFlowing is false
   */
  incomingMessage.on('resume', function handleResume() {
    console.log('incomingMessage resume');
    console.log('arguments.length:', arguments.length);
  });

  /**
   * when `readable.pause()` is called and readableFlowing is true
   */
  incomingMessage.on('pause', function handlePause() {
    console.log('incomingMessage pause');
    console.log('arguments.length:', arguments.length);
  });

  /**
   * when data from stream is available to be read OR the end of stream is arrived
   *
   * when data from stream is available, `readable.read()` returns the data
   * when the end of stream has been reached, `readable.read()` returns `null`
   */
  incomingMessage.on('readable', function handleReadable() {
    console.log('incomingMessage readable');
    console.log('arguments.length:', arguments.length);
    const readableData = this.read();
    console.log('readableData');
    console.log(readableData);
  });

  /**
   * when the stream relinquish chunk of data to a consumer
   *
   * only `Flowing mode`
   * switch to `Flowing mode` in three ways
   *  1.readable.pipe()
   *  2.readable.resume()
   *  3.readable.on('data') and not readable.on('readable')
   */
  // incomingMessage.on('data', function handleData(chunk) {
  //   console.log('incomingMessage data');
  //   console.log('arguments.length:', arguments.length);
  //   console.log('dataChunk');
  //   console.log(chunk);
  // });

  /**
   * when no more data from stream
   */
  incomingMessage.on('end', function handleEnd() {
    console.log('incomingMessage end');
    console.log('arguments.length:', arguments.length);
  });

  /**
   * when underlying connection(TCP socket) closed
   */
  incomingMessage.on('close', function handleClose() {
    console.log('incomingMessage close');
    console.log('arguments.length:', arguments.length);
  });

  /**
   * when An error occurs
   */
  // incomingMessage.on('error', function handleError() {
  //   console.log('incomingMessage error');
  //   console.log('arguments.length:', arguments.length);
  // });
}

export default handleIncomingMessage
