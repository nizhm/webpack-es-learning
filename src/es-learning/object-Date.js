/**
 * @object %Date%
 * 1.Date.now():返回当前时刻对应的timestamp，返回值为Number类型；
 * 2.Date.UTC():接收不少于2个参数，返回对应的timestamp(0个或1个参数，返回NaN)，返回值为Number类型；
 * 3.Date.parse():把字符串解析为timestamp，返回值为Number类型；
 * 4.返回timestamp的几个函数都是返回的[[DateValue]]的值（Date.now、Date.parse、Date.UTC、getTime）；
 */

/**
 * @object Date Instance
 * 1.[[DateValue]]存的是UTC的timestamp，输出时才转换为local；
 * 2.转换的逻辑：timestamp + LocalTZA + DayLightSavingTA(timestamp);
 * 2.get系列函数，转换后取值输出，****FromTime(LocalTime(timestamp))；
 * 3.toString系列函数，输出时转换，<Runtime Semantics>toDateString(timestamp);
 */

let aDate = new Date()
//console.log(Date.now())
//console.log(Date.UTC(2012, 6, 8))
//console.log(Date.parse('2012-07-08'))

/**
 * @object %DatePrototype%
 * 1.1 valueOf(): timestamp/time value/[[DateValue]], return Number type;
 * 1.2 toString(): 'day MM DD YYYY HH:mm:ss GMT+0800(CST)';
 * 1.3 Date[Symbol.toPrimitive](hint): hint @['default', 'string', 'number'];hint为number时与valueOf一样；else时和toString一样；
 *
 * 2.1 toUTCString(): 'day, DD MM YYYY HH:mm:ss GMT';
 * 2.2 toISOString(): 'YYYY-MM-DDTHH:mm:ss.sssZ';
 * 2.3 toJSON(): 'YYYY-MM-DDTHH:mm:ss.sssZ';同toISOString的值；
 * 2.4 toLocaleString(): 'YYYY/MM/DD AM|PMHH:mm:ss';
 *
 * 2.5 toDateString(): 'day MM DD YYYY';
 * 2.6 toLocaleDateString(): 'YYYY/MM/DD';
 *
 * 2.7 toTimeString(): 'HH:mm:ss GMT+0800(CST)';
 * 2.8 toLocaleTimeString(): 'AM|PMHH:mm:ss'
 *
 * 3.0 getTime(): 同valueOf的值;
 * 3.0 getTimezoneOffset(): ([[DateValue]] - toLocalTime([[DateValue]])) / 1000，为正数时本地慢于UTC，为负数时本地快于UTC;
 *
 * 3.1 getFullYear(): YYYY;
 * 3.2 getMonth(): 0-11，1月-12月;
 * 3.3 getDate(): 1-31，1号-31号;
 * 3.4 getDay(): 0-6，周日-周六;
 * 3.4 getHours(): 0-23，0时-23时;
 * 3.5 getMinutes(): 0-59，0分-59分;
 * 3.6 getSeconds(): 0-59， 0秒-59秒;
 * 3.7 getMilliSeconds(): 0-999，0毫秒-999毫秒;
 * 3.8888 get --> set, get --> getUTC, getUTC --> setUTC;
 * 3.9999 没有setDay();
 * 3.1000 get系列返回的都是number类型；
 *
 * 4.1 @deprecated getYear(): 千禧年问题;
 * 4.2 @deprecated setYear(): 千禧年问题;
 * 4.3 @deprecated toGMTString(): 有些浏览器还支持;
 */

function parseTime(val) {
  return val > 10 ? val : '0' + val
}

function formatTime(time, format) {
  const t = new Date(time)
  if(format) {
    const y = t.getFullYear()
    const m = parseTime(t.getMonth() + 1)
    const d = parseTime(t.getDate())
    const h = parseTime(t.getHours())
    const mi = parseTime(t.getMinutes())
    const s = parseTime(t.getSeconds())
    const UTCStr = t.toUTCString()
    const day = UTCStr.slice(0, UTCStr.indexOf(','))
    let val = format
    val = val.replace('YYYY', y)
    val = val.replace('MM', m)
    val = val.replace('DD', d)
    val = val.replace('HH', h)
    val = val.replace('mm', mi)
    val = val.replace('ss', s)
    val = val.replace('day', day)
    return val
  }else {
    const tStr = t.toISOString()
    return tStr.slice(0, -5).replace('T', ' ')
  }
}
const myDate = formatTime(aDate.getTime(), 'day >= YYYY-MM-DD =< HH:mm:ss')
console.log(myDate)