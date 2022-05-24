const eventEmitterEvents = [ 'newListener', 'removeListener' ];

const readableAdditionalEvents = 'close/data/end/error/pause/readable/resume'.split('/');
const readableEvents = [
  ...eventEmitterEvents,
  ...readableAdditionalEvents
]

const writableAdditionalEvents = 'close/drain/error/finish/pipe/unpipe'.split('/');
const writableEvents = [
  ...eventEmitterEvents,
  ...writableAdditionalEvents
]

const socketAdditionalEvents = 'close/connect/data/drain/end/error/lookup/ready/timeout'.split('/');
const socketEvents = [
  ...readableEvents,
  ...socketAdditionalEvents
]

const netServerAdditionalEvents = 'close/connection/error/listening'.split('/');
const netServerEvents = [
  ...eventEmitterEvents,
  ...netServerAdditionalEvents
]

const httpServerAdditionalEvents = 'checkContinue/checkExpectation/clientError/close/connect/connection/request/upgrade'.split('/');
const httpServerEvents = [
  ...netServerAdditionalEvents,
  ...httpServerAdditionalEvents
]

const incomingMessageAdditionalEvents = 'close'.split('/');
const incomingMessageEvents = [
  ...readableEvents,
  ...incomingMessageAdditionalEvents
]

const outgoingMessageAdditionalEvents = 'drain/finish/prefinish'.split('/');
const outgoingMessageEvents = [
  ...eventEmitterEvents,
  ...outgoingMessageAdditionalEvents
]

const serverResponseAdditionalEvents = 'close/finish'.split('/');
const serverResponseEvents = [
  ...outgoingMessageEvents,
  ...serverResponseAdditionalEvents
]

export {
  eventEmitterEvents,
  readableEvents,
  writableEvents,
  socketEvents,
  netServerEvents,
  httpServerEvents,
  incomingMessageEvents,
  outgoingMessageEvents,
  serverResponseEvents
}
