// Exercise
// * 1. Employee Class
// Create an Employee class which accepts:
// id of the employee as a number
// firstName of the employee as a string
// lastName of the employee as as string
// taxId as a number
// salary as a number

class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.employeeID = id;
    this.employeeFirstName = firstName;
    this.employeeLastName = lastName;
    this.employeeTaxID = taxId;
    this.employeeSalary = salary;
  }

  // * 2 The Employee class should have a generatePaySlip method which returns:
  //        Employee ID: id
  //        Name: firstName lastName
  //        Tax ID: taxId
  //        Pay: monthlySalary --> will need to be calculated based off of salary
  generatePaySlip() {
    return `Employee ID: ${this.employeeID}
            Name: ${this.employeeFirstName} ${this.employeeLastName}
            Tax ID: ${this.employeeTaxID}
            Pay: Monthly salary is ${this.employeeSalary / 12}`;
  }

  //   generatePaySlip() {
  //     let obj = { EmployeeID: this.employeeID,
  //             Name: this.lastName,
  //             taxID: this.employeeTaxID,
  //             pay: `Monthly salary is ${this.employeeSalary / 12}`
  //   };
  //   return obj;
}

const employeeOne = new Employee(7, 'James', 'Bond', 24681012, 200000);
const employeeTwo = new Employee(4, 'Max', 'Payne', 24681012, 200000);
const employeeThree = new Employee(5, 'Max', 'Payne', 24681012, 200000);

console.log(employeeOne);
console.log(employeeOne.generatePaySlip());

// * 2. Manager Class
// Create a Manager class which extends the Employee class
// The Manager class will need the addition of a managedEmployees array
// The Manager class will need two methods:
// addManagedEmployee to add a managed employee to the managedEmployees array
// removeManagedEmployee to remove a managed employee from the managedEmployees array

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(...employee) {
    // console.log('employee:', employee);
    let operation = employee.forEach((element) => {
      this.managedEmployees.push(element);
    });
  }

  removeManagedEmployee(employeeId) {
    // ? EmployeeObject manipulation
    let findEmployeeID = this.managedEmployees.findIndex((employee) => {
      return employeeId === employee.employeeID;
    });

    if (findEmployeeID !== -1) {
      return `DELETED: ${JSON.stringify(
        this.managedEmployees.splice(findEmployeeID, 1)
      )} from managed employees!`;
    } else {
      return 'Employee not found!';
    }
  }
}

const managerOne = new Manager(114, 'Money', 'Penny', 5555555, 400000);
console.log(managerOne);
// managerOne.addManagedEmployee('James Bond', 'Max Payne', 'Bruce Wayne');
managerOne.addManagedEmployee(employeeOne, employeeTwo, employeeThree);
console.log(managerOne);
// managerOne.addManagedEmployee('Max Payne', 'John Wayne', 'Bruce Wayne');
// console.log(managerOne);

let call = managerOne.removeManagedEmployee(4);
console.log(managerOne);
console.log(call);
