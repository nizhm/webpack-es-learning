class Logger {
  static success(msg) {
    console.log(`[Success] ${msg}`)
  }

  static error(msg) {
    console.error(`[Error] ${msg}`)
  }

  static warn(msg) {
    console.warn(`[Warn] ${msg}`)
  }

  static info(msg) {
    console.log(`[Info] ${msg}`)
  }
}

module.exports = Logger