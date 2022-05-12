import Employee from './Employee.mjs';
import Person from './Person.mjs';
import { getChainOf } from '../commons/Utils.mjs';

const employee = new Employee('zhm', 'ni', 25, 9500);
console.log(employee.title);
console.log(Employee.prototype);
console.log(getChainOf(Employee));
console.log(getChainOf(employee));
console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

