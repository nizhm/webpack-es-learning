import EventEmitter from 'events';
import { eventEmitterEvents } from './Events.js';

const eventEmitter = new EventEmitter();
eventEmitterEvents.forEach(eventName => {
  eventEmitter.on(eventName, function () {
    console.log(eventName);
    console.log('arguments.length:', arguments.length);
    if (arguments.length) console.log(arguments);
  });
});

// eventEmitterEvents.forEach(eventName => {
//   eventEmitter.emit(eventName);
// });
