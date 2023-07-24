const employee= {
    address:'12 Broadway',
    name:'Sam'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
   return{...employee, ...{[key]: value}}

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    delete employee.key;
    return{employee}
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
