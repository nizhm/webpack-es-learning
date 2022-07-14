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
