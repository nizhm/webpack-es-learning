//console.log(global.null === null)
//console.log(global.undefined === undefined)
//console.log(global.NaN === NaN)
//console.log(global.Infinity === Infinity)
const obj = {
  name: 'nizm',
  null: 'null',
  myFun: function () {
    return
  }
}
console.log(Object.getOwnPropertyNames(obj))