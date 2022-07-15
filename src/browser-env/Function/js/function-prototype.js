/**
 * Function.prototype.myBind
 *
 * @param thisArg {any}
 * @param args {Array}
 * @return {(function(): void)}
 */
Function.prototype.myBind = function (thisArg, ...args) {
  var target = this;
  return function () {
    target.myCall(thisArg, ...args, ...arguments);
  };
};

/**
 * Function.prototype.myCall
 *
 * @param thisArg {any}
 * @param args {Array}
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...args) {
  var result, temporalPropName = 'Target' + Date.now();

  if (thisArg === null || thisArg === undefined) {
    window[temporalPropName] = this;
    result = window[temporalPropName](...args);
    delete window[temporalPropName];
    return result;
  }

  if (typeof thisArg !== 'object') {
    thisArg = new Object(thisArg);
  }
  thisArg[temporalPropName] = this;
  result = thisArg[temporalPropName](...args);
  delete thisArg[temporalPropName];
  return result;
};

/**
 * Function.prototype.myApply
 *
 * @param thisArg {any}
 * @param args {Array}
 * @return {any}
 */
Function.prototype.myApply = function (thisArg, args) {
  var result, temporalPropName = 'Target' + Date.now();

  if (thisArg === null || thisArg === undefined) {
    window[temporalPropName] = this;
    result = window[temporalPropName](...args);
    delete window[temporalPropName];
    return result;
  }

  if (typeof thisArg !== 'object') {
    thisArg = new Object(thisArg);
  }
  thisArg[temporalPropName] = this;
  result = thisArg[temporalPropName](...args);
  delete thisArg[temporalPropName];
  return result;
};

/**
 * 在函数外部判断函数是否是严格模式函数
 * @param {function} fn
 * @return {boolean}
 */
const MultipleCommentsRegExp = /(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g;
const SingleLindCommentsRegExp = /(?:^|\n|\r|\s)\s*\/\/.*(?:\r|\n|$)/g;
const FunctionBodyRegExp = /(?:\/\*[\s\S]*?\*\/|\/\/.*?\r?\n|[^{])+\{([\s\S]*)\}$/;

function isStrictFunction(fn) {
  if (typeof fn !== 'function') { return false; }

  // Assert: fn is function object
  let isStrict;
  try {
    const functionDeclarationString = fn.toString().match(FunctionBodyRegExp)[1],
      functionBodyString = functionDeclarationString.trim(),
      nonMultiple = functionBodyString.replace(MultipleCommentsRegExp, ''),
      nonSingle = nonMultiple.replace(SingleLindCommentsRegExp, ''),
      prologueString = nonSingle.replace(/\n/g, '').trim().substr(0, 12);
    isStrict = prologueString.includes('use strict');
  } catch(e) {
    isStrict = false;
  }
  return isStrict;
}

/**
 * 判断函数是否由runtime生成
 * @param fn {function}
 * @return {boolean}
 */
function isIntrinsicFunction(fn) {
  let isIntrinsic;
  try {
    const functionDeclarationString = fn.toString().match(FunctionBodyRegExp)[1],
      functionBodyString = functionDeclarationString.trim();
      isIntrinsic = functionBodyString === '[native code]';
  } catch(e) {
    isIntrinsic = false;
  }
  return isIntrinsic;
}

/**
 * 判断函数的类型
 * @param fn {function}
 * @return {'function'|'arrow'|'bound'|'class'|'generator'|'eval'|'intrinsic'}
 */
function functionType(fn) {
  if (typeof fn !== 'function') { return ''; }

  if (fn === eval) { return 'eval'; }

  if (
    fn === Function.prototype ||
    fn === Function.prototype.call ||
    fn === Function.prototype.apply ||
    fn === Function.prototype.bind
  ) { return 'intrinsic'; }

  // intrinsic function object other than `eval`
  if (isIntrinsicFunction(fn) && fn.prototype) { return 'intrinsic'; }

  const functionString = fn.toString();
  if (functionString.startsWith('class')) {
    return 'class';
  }

  if (!fn.prototype) {
    if (functionString.startsWith('function')) {
      // relative to Function.prototype.bind
      return 'bound';
    } else {
      return 'arrow';
    }
  }

  if (Object.getPrototypeOf(fn.prototype)[Symbol.toStringTag] === 'Generator') {
    return 'generator';
  }

  // standard function;
  return 'function';
}
