'use strict';

const { log } = require("util");

function logRequest(req, res, next) {
  console.log('__REQUEST__', req.method, req.path);
}
module.exports = logRequest;