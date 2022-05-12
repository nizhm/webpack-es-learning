function getRangeOf(typedArray) {
  if (!typedArray) throw 'A typedArray should be specified, for example "Int8Array".';

  if (!(typedArray.__proto__ && (typedArray.__proto__ === Int8Array.prototype.__proto__.constructor))) throw `${typedArray} is not type of TypedArray.`;

  let lowerBoundary = 0;
  let upperBoundary = 0;
  let isFloat = typedArray.name.toLowerCase().includes('float');
  let isBigInt = typedArray.name.toLowerCase().includes('bigint');
  if (isFloat || isBigInt) return [0, 0];


  try {
    const array = new typedArray(1);
    for(let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
      array[0] = i;
      if (!(array[0] === i)) {
        upperBoundary = i - 1;
        break;
      }
    }

    for(let i = 0; i > Number.MIN_SAFE_INTEGER; i--) {
      array[0] = i;
      if (!(array[0] === i)) {
        lowerBoundary = i + 1;
        break;
      }
    }
  } catch(e) {
    console.error(e);
  }

  return [lowerBoundary, upperBoundary];

}

/**
 * Get the prototype chain until `null`
 *
 * @param {Object|Function} obj - the object
 * @return {{Object|null} []|undefined}
 */

const getChainOf = function getChainOf(obj) {
  // invoked by [[Call]] only
  if (this instanceof getChainOf) throw new TypeError(`function 'getChainOf' is not a constructor`);

  // wrapper types, object type and function type are available
  if (obj === undefined || obj === null) throw new TypeError(`${obj} is not a type of {boolean|number|string|symbol|function|object}`);

  const prototypeChain = [];
  try {
    const getProto = function getProto(o) {
      const proto = Object.getPrototypeOf(o);
      prototypeChain.push(proto);

      // retrieve next prototype object
      if (proto !== null) getProto(proto);
    }
    getProto(obj);
  } catch(e) {
    console.error(e);
    return undefined;
  }

  return prototypeChain;
}

/**
 * define a specified tag for an object
 *
 * @param o { Object }
 * @param stringTag { undefined|string }
 */
const defTag = function defTag(o, stringTag) {
  // invoked by [[Call]] only
  if (this instanceof defTag) throw new TypeError(`function 'defTag' is not a constructor`);
  // an object required
  if (!(o && o instanceof Object)) throw 'The first parameter of "defTag" should be "object" type.';

  Object.defineProperty(o, Symbol.toStringTag, {
    value: stringTag,
    configurable: true
  });
}

export { getRangeOf, getChainOf, defTag }

