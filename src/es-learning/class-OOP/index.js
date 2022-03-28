// CommonJS module
const Logger = require('./Logger')
const ExplicitConstructor = require('./ExplicitConstructor')

// ES module
// import Logger from './Logger.js'

// Logger.error('There is an error')

// const explicitConstructor = new ExplicitConstructor('ni', 26)
class SubExplicitConstructor extends ExplicitConstructor {
  static createTime = new Date()
  constructor() {
    super(...arguments)
  }
}
console.log(SubExplicitConstructor.createTime)
const subExplicitConstructor = new SubExplicitConstructor('ni')
subExplicitConstructor.printProfile()