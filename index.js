// Step 1: Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Step 2: Function that updates employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Step 3: Function that updates employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Step 4: Function that deletes a key non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Step 5: Function that deletes a key destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Usage examples
  console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St")); // New object with updated address
  console.log(employee); // Original object remains unchanged
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Pine St")); // Updates original object
  console.log(employee); // Mutated object
  
  console.log(deleteFromEmployeeByKey(employee, "name")); // Returns new object without "name"
  console.log(employee); // Original object remains unchanged
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "name")); // Mutates original object
  console.log(employee); // "name" property is removed
  
  