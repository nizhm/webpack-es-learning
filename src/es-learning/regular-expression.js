/**
 * @RegularExpression
 * @Object %RegExpPrototype%
 *    1.constructor  %RegExp%
 *    2.source       [[OriginalSource]] 即正则表达式字面量中 /.../ 之间的内容
 *    3.flags        sgimyu  [[OriginalFlags]]
 *    4.dotAll       's' => true (ES10)
 *    5.global       'g' => true
 *    6.ignoreCase   'i' => true
 *    7.multiline    'm' => true
 *    8.sticky       'y' => true
 *    9.unicode      'u' => true
 *    10.exec(string)
 *      10.1 返回值是类数组或者null
 *      10.2 [
 *        '[match result string]',
 *        index: { Integer }, // 匹配结果的开始位置（index + result.length = lastIndex）
 *        input: { String }, // 传入的字符串
 *        groups:
 *       ]
 *    11.test(string) test内部调用exec并判断其返回值，不为null则返回true，否则返回false；
 *    12.compile
 *    13.toString
 *      13.1 regExp.valueOf() == regExp.toString() => true
 *      13.2 regExp.valueOf() === regExp.toString() => false(Object do not equal to String)
 * @Object %RegExpInstance%
 *    1.lastIndex
 *      1.1 lastIndex初始值为0；
 *      1.2 lastIndex决定下次匹配的开始位置（where to start the next match）;
 *      1.3 exec()和test()方法会用到（test()内部会调用exec()并判断其返回值是否为null）；
 *        1.3.1 global模式下，每配对到一次，返回{ Array } | true，lastIndex记录下次匹配开始位置；
 *        1.3.2 global模式下，未匹配到，返回null | false，lastIndex重置为0；
 *        1.3.3 非global模式下，以上两种情况，lastIndex都不会变，一直是0；
 * @Object %RegExp%
 *    1. new RegExp(pattern string, flags string);
 *    2. 正则需要匹配metacharacters时，regExp中需要转义，pattern string中需要二次转义；
 *    3. 二次转义时，其实就是对转义字符进行转义;
 *    4. 特别的情况时，要匹配转义字符本身时，regExp中的\\需要在pattern string中二次转义为\\\\;
 *    5. pattern string必需string类型，而转义字符在字符串本身，也是转义字符，所以需要转义为字符；
 *    6. RegExp解析pattern string时会把字符串本身的转义字符去掉，保留其他字符作为正则表达式；
 */

function printRegExp(proto, regExpObj) {
  const protoKeyArr = Object.getOwnPropertyNames(proto)
  const objKeyArr = Object.getOwnPropertyNames(regExpObj)
  const keyArr = [...protoKeyArr, ...objKeyArr]
  for(const item of keyArr) {
    console.log(`${ item }: ${ regExpObj[item] }`)
  }
}
const regExp = new RegExp('\\^\\$\\\\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|', 'gi')
const regExp2 = /[1-9]\\$/gi
console.log(regExp2.source)
