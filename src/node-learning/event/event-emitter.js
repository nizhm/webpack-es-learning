import EventEmitter from 'events';

const eventEmitter = new EventEmitter();
eventEmitter.on('update', function first() {
  console.log('First update event emitted!');
});
eventEmitter.on('update', function second() {
  console.log('Second update event emitted!');
});
eventEmitter.once('update', function third() {
  console.log('Third update event emitted!');
});
eventEmitter.addListener('add', function third() {
  console.log('First add event emitted!');
});
eventEmitter.emit('update');
eventEmitter.emit('add');
console.log(eventEmitter.listenerCount('update'));
console.log(eventEmitter.getMaxListeners());
