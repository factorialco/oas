'use strict';

var utils = require('../utils/writer.js');
var CoreEmployeesV2 = require('../service/CoreEmployeesV2Service');

module.exports.v2CoreEmployeesGET = function v2CoreEmployeesGET (req, res, next, full_text_name) {
  CoreEmployeesV2.v2CoreEmployeesGET(full_text_name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2CoreEmployeesIdGET = function v2CoreEmployeesIdGET (req, res, next, id) {
  CoreEmployeesV2.v2CoreEmployeesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2CoreEmployeesIdPUT = function v2CoreEmployeesIdPUT (req, res, next, body, id) {
  CoreEmployeesV2.v2CoreEmployeesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v2CoreEmployeesPOST = function v2CoreEmployeesPOST (req, res, next, body) {
  CoreEmployeesV2.v2CoreEmployeesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
