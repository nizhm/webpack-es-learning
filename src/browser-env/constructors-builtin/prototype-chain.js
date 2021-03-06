/**
 * Get the prototype chain until `null`
 *
 * @param {Object|Function} obj - the object
 * @return {*[]|undefined}
 */

function getPrototypeChainOf(obj) {
  // invoked by [[Call]] only
  if (this instanceof getPrototypeChainOf) {
    throw new TypeError(`function 'getPrototypeChainOf' is not a constructor`)
  }

  // wrapper types, object type and function type are available
  if (obj === undefined || obj === null) {
    throw new TypeError(`${obj} is not a type of {boolean|number|string|symbol|function|object}`)
  }

  const prototypeChain = []
  try {
    const getProto = function getProto(o) {
      const proto = Object.getPrototypeOf(o)
      prototypeChain.push(proto)

      // retrieve next prototype object
      if (proto !== null) {
        getProto(proto)
      }
    }
    getProto(obj)
  } catch(e) {
    console.error(e)
    return undefined
  }

  return prototypeChain
}
