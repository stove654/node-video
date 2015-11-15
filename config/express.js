/**
 * Express configuration
 */

'use strict';

var cors = require('cors');
module.exports = function(app) {

  app.use(cors());

  app.use(function(req, res, next) {
    res.contentType('application/json');
    next();
  });
};