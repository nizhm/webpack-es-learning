/**
 * Get property keys of an object
 * Keys are insisted of two types @{string|symbol}
 *
 * @param {Object} object which means `typeof object === 'object'` is true
 * @return {string[]}
 */

function getOwnPropertyKeys(object) {
  const symbolKeys = Object.getOwnPropertySymbols(object).map(value => {
    const symbolString = value.toString()
    return symbolString.substr(0, symbolString.length - 1).slice(7)
  })
  return [...Object.getOwnPropertyNames(object), ...symbolKeys]
}

function hasPrototype(prototype,
 object) {
  let has = false
  if (getPrototypeChainOf(object).includes(prototype)) has = true
  return has
}

function getChildren(constructorObject, rangeObject) {
  const prototype = constructorObject.prototype
  const propsList = getOwnPropertyKeys(rangeObject)
  const list = []
  for(const listElement of propsList) {
    if (typeof rangeObject[listElement] === 'function' && rangeObject[listElement].prototype && hasPrototype(prototype, rangeObject[listElement].prototype)) {
      list.push(listElement)
    }
  }
  return list
}
