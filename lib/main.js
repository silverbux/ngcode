'use strict';

/*
 *  npm-ngcode
 *  https://github.com/silverbux/ngcode
 *  AngularJS Code Generator
 */

/**
 * Module dependencies.
 */
var path = require('path')
  , utils = require(path.resolve(path.join(__dirname, 'utils')))
  , _ = require('lodash')
  , fs = require('fs');

/**
 * Module constructor.
 */

function NgCode(config) {
  this.init(config);
};

/**
 * Module init.
 */
NgCode.prototype.init = function (config) {
  var argv = process.argv.slice(2);
  var command = _.first(argv)
  var _command = command.split(':')
  this.method = _.first(_command)
  this.title = _.camelCase(_.last(_command))
  this.generate()
};

NgCode.prototype.generate = function () {
  var method = this.method
  , title = this.title
  , path = title + '.' + method + '.js'
  , writeFile = this.write

  this.getTemplate(function (data) {
    data = data.replace(/<<title>>/g, title);
    writeFile(path, data, function (data) {
      utils.doneGenerateMessage(path)
    })
  })
};

NgCode.prototype.getTemplate = function (cb) {
  fs.readFile(path.join(__dirname, '../templates', this.method + '.txt'), 'utf-8', function (err, data) {
    if (err) throw err;

    return cb(data)
  });
};

NgCode.prototype.write = function (path, data, cb) {
  fs.exists(path, function (exists) {
    if ( exists ) {
      utils.error(path + ' already exists. ')
    } else {
      fs.writeFile(path, data, function (err) {
        if (err) throw err;

        return cb('success')
      })
    }
  });
};

/**
 * Export default singleton.
 *
 * @api public
 */

exports = module.exports = new NgCode();
