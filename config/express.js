/**
 * Express configuration
 */

'use strict';

var cors = require('cors');
var multer  = require('multer');

module.exports = function(app) {

  app.use(cors());

  var done=false;
  app.use(multer({ dest: './uploads/',
    rename: function (fieldname, filename) {
      console.log(filename);
      return filename;
    },
    onFileUploadStart: function (file) {
    },
    onFileUploadComplete: function (file) {
      done=true;
      console.log("File uploaded.");
    }
  }));

  app.use(function(req, res, next) {
    res.contentType('application/json');
    next();
  });

  app.route('/images')
    .get(function (req, res) {
      res.json({message: 'hello'})
    })
    .post(function( req, res) {
      console.log('uploaded')
    });

};