const objectAssign = function () {
  return Object.assign(...arguments)
}
const objectGetOwnPropertyDescriptor = function () {
  return Object.getOwnPropertyDescriptor(...arguments)
}
const objectGetOwnPropertyDescriptors = function () {
  return Object.getOwnPropertyDescriptors(...arguments)
}
const objectGetOwnPropertyNames = function () {
  return Object.getOwnPropertyNames(...arguments)
}
const objectGetOwnPropertySymbols = function () {
  return Object.getOwnPropertySymbols(...arguments)
}
const objectGetPrototypeOf = function () {
  return Object.getPrototypeOf(...arguments)
}

export {
  objectAssign,
  objectGetOwnPropertyDescriptors,
  objectGetOwnPropertyDescriptor,
  objectGetOwnPropertyNames,
  objectGetOwnPropertySymbols,
  objectGetPrototypeOf
}
