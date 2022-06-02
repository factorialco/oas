'use strict';


/**
 * Get employees from a company
 * Only `admins` can see all the employees' information, `regular users` will get a restricted version of the payload as a response based on the permission set by the admin
 *
 * full_text_name String Retrieves the list of employees by full names (optional)
 * returns List
 **/
exports.v2CoreEmployeesGET = function(full_text_name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get employee
 * Only admins can see all the employees' information, regular users will get a restricted version of the payload as a response based on the permission set by the admin
 *
 * id String (Required) 
 * returns Employee
 **/
exports.v2CoreEmployeesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update employee
 * Update employee
 *
 * body Employees_id_body  (optional)
 * id String (Required) 
 * returns Employee
 **/
exports.v2CoreEmployeesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create employee
 * Create employee
 *
 * body Core_employees_body  (optional)
 * returns Employee
 **/
exports.v2CoreEmployeesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

