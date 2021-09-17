const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('click', function (){
  console.log(arguments);
  console.log(this);
  console.log('An click event occurred!');
});
myEmitter.emit('click', 'a');
myEmitter.emit('click', 'b');