/**
 * get the prototype chain
 *
 * @param {Object|Function} obj - the object
 * @return {*[]}
 */
function getPrototypeChainOf(obj) {
  if (! (obj && obj instanceof Object)) {
    throw new TypeError(`${obj} is not an object`)
  }

  const prototypeChain = []
  const getProto = function getProto(o) {
    const proto = Object.getPrototypeOf(o)
    prototypeChain.push(proto)

    if (proto !== null) {
      getProto(proto)
    }
  }
  getProto(obj)

  return prototypeChain
}
