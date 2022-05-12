import Person from './Person.mjs';

class Employee extends Person {
  constructor(firstName, lastName, age, salary) {
    super(firstName, lastName, age);
    this.salary = salary;
  }
}
export default Employee
