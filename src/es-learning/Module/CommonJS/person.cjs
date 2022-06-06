const nameModuleExports = require('./name.cjs');
const countryModuleExports = require('./country.cjs');
const ageModuleExports = require('./age.cjs');
const defaultExport = require('./name.cjs').default;

console.log(nameModuleExports);
console.log(countryModuleExports);
console.log(ageModuleExports);
console.log(defaultExport);
