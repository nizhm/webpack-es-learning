// CommonJS module
const Logger = require('./Logger')
// const ExplicitConstructor = await import('./ExplicitConstructor.js')
import EventEmitter from 'events'

// ES module
// import Logger from './Logger.js'

// Logger.error('There is an error')

// module object of node
// console.log(module)
// class SubExplicitConstructor extends ExplicitConstructor {
//   static createTime = new Date()
//   constructor() {
//     super(...arguments)
//   }
// }
// console.log(SubExplicitConstructor.createTime)
// const subExplicitConstructor = new SubExplicitConstructor('ni')
// subExplicitConstructor.printProfile()
const e = new EventEmitter()
console.log(e)