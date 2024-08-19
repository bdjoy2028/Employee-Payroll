
const addEmployeesBtn = document.querySelector('#add-employees-btn');


const collectEmployees = function() {
  
  const employeesArray = [];
  let addAnotherEmployee = true;

  while(addAnotherEmployee){
    const firstName = prompt("Enter employees first name:")
    const lastName = prompt("Enter employees last name:")
    let salary = prompt("Enter employees salary:")
  

    salary = isNaN(Number(salary)) ? 0 : Number(salary);


    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };


    employeesArray.push(employee);


    const continueAdding = confirm("Do you want to add another employee?")
    if (!continueAdding){
      addAnotherEmployee = false;
    }
}
return employeesArray;
}


const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;


  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: $${(totalSalary / employeesArray.length).toLocaleString(undefined, {maximumFractionDigits: 2})}`);
}


const getRandomEmployee = function(employeesArray) {
  
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];


  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  

employeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
return employeesArray;
  
}




const displayEmployees = function(employeesArray) {
 
  const employeeTable = document.querySelector('#employee-table');

 
  employeeTable.innerHTML = '';

  
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
   
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}


addEmployeesBtn.addEventListener('click', trackEmployeeData);