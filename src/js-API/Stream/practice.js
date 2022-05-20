(async () => {
  const files = document.getElementById('fileInput').files;
  if (!files.length) {
    alert('no file selected');
    return
  }

  const readableStream = new ReadableStream({
    start(controller) {
      for(const file of files) {
        controller.enqueue(file);
      }
      controller.close();
    }
  });
  const reader = readableStream.getReader();
  while(true) {
    const { done, value } = await reader.read();
    if (done) break;

    console.log('reader value:');
    console.log(value);
  }
  reader.releaseLock();

  return 'async IIFE finished'
})()
