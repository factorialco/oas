'use strict';

var utils = require('../utils/writer.js');
var CoreMe = require('../service/CoreMeService');

module.exports.v1MeGET = function v1MeGET (req, res, next) {
  CoreMe.v1MeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
