/**
 * @isArray(val)
 *  1.是Array instance时返回true，否则返回false；
 *  2.array-like返回false；
 *  3.iterator返回false；
 */

const fn = function (val) {
  console.log(Array.isArray(arguments))
  console.log(arguments)
  console.log(Array.isArray(val), Array.isArray(val.keys()))
}
fn([123])