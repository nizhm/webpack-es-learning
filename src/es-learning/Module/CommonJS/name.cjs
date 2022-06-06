const name = 'nizhm';
const fullName = 'Zhiming Ni';
function printName() {
  console.log('printName');
}

exports = {
  // conflict key between other modules will be preserved(however ESM does not)
  ...(require('./age.cjs')),
  ...(require('./country.cjs')),
  name,
  fullName,
  default: printName
}
module.exports = exports
