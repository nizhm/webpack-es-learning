const name = 'nizhm';
const fullName = 'Zhiming Ni';
export { name, fullName };
export default function printName() {
  console.log('printName');
};
export * from './country.js';
export * from './age.js';
