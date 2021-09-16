const readline = require('readline');

/**
 * 创建流监听器
 * @method readline.createInterface(options)
 * @param { object } options监听器配置信息；
 *    @options-keys [input, output, completer, terminal, history, historySize, removeHistoryDuplicates, prompt, crlfDelay, escapeCodeTimeout, tabSize, signal]
 *      input { stream.Readable } ！！！必选项！！！ 监听的可读流；
 *      output { stream.Writable } 可写流；
 *      prompt { string } default "> ",提示字符串；
 * @return { readline.Interface } 监听器实例；
 *
 * @method rl.on(event, callback) 添加事件监听
 * @param { string } event监听的readline.Interface实例事件
 *    @events [close, line, history, pause, resume, SIGCONT, SIGINT, SIGTSTP]
 *      close 流监听器关闭事件 1.rl.close() 2.
 *      line 用户输入结束事件 1.输入\n 2.\r 3.\r\n
 *      history 历史记录数组更改事件
 *      pause 流监听暂停事件
 *      resume 流监听恢复事件
 *
 * @method rl.close() 关闭流监听器
 * @method rl.pause() 暂停流监听器
 * @method rl.prompt([preserveCursor]) 继续流监听
 * @method rl.resume() 恢复流监听
 *
 * @method rl.question(query[, options], callback)
 * @param { string } query询问用户的问题；
 * @param { object } options配置信息，keys: [signal]；
 * @param { function } 用户输入结束的回调函数；
 *
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'nzhming> '
});
const que = 'What\'s you favourite color ?';
rl.question(que, answer => {
  console.log(`Oh, so nice! My favourite color is also ${ answer }!`);
  rl.close();
});
rl.on('close', () => {
  console.log('Nice to meet you and wish a good day!');
  process.exit(0);
});