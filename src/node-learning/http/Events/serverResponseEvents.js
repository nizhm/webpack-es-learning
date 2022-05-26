function listenServerResponse(serverResponse) {

  /**
   * when the buffer of the message is free again
   */
  serverResponse.on('drain', function handleDrain() {
    console.log('serverResponse drain');
    console.log('arguments.length:', arguments.length);
  });

  /**
   * when `serverResponse.end()` is called
   *
   * response data is ready to be sent
   */
  serverResponse.on('prefinish', function handlePrefinish() {
    console.log('serverResponse prefinish');
    console.log('arguments.length:', arguments.length);
  });

  /**
   * when the last segment of response has been sent
   */
  serverResponse.on('finish', function handleFinish() {
    console.log('serverResponse finish');
    console.log('arguments.length:', arguments.length);
  });

  /**
   * when the response is completed OR the underlying connection was terminated
   */
  serverResponse.on('close', function handleClose() {
    console.log('serverResponse close');
    console.log('arguments.length:', arguments.length);
  });
}

export default listenServerResponse
