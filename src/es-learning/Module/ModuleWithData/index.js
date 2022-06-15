import { fileName, person, work } from './data.js';
import { person as personClone } from './data.js';
import * as dataModule from './data.js'

console.log(dataModule);
console.log(Object.getOwnPropertyDescriptors(dataModule));

// fileName = 'd'; // cannot set, cause module.[[Set]] always returns `false`
// work = 'back-end'; // cannot set even though it is declared by `let`
// person = {}; // cannot set

person.name = 'nizhming'; // valid, however it changes everywhere.

console.log(fileName);
console.log(person);
console.log(personClone);
// person and personClone refer to the same object, which created inside data module
console.log(personClone === person);
console.log(work);
