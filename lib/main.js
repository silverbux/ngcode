'use strict';

/*
 *  ngcode
 *  https://github.com/silverbux/ngcode
 *  AngularJS Code Generator
 */

var path = require('path')
  , utils = require(path.resolve(path.join(__dirname, 'utils')))
  , _ = require('lodash')
  , fs = require('fs')
  , program = require('commander');

function NgCode(arg) {
  this.init(arg);
};

NgCode.prototype.init = function (arg) {
  var title    = arg.title;
  this.method  = arg.method;
  this.showmessage = arg.showmessage
  this.title   = {
    orig  : title,
    cap   : _.capitalize(title),
    low   : title.toLowerCase(),
    camel : _.camelCase(title)
  }

  this.generate()
};

NgCode.prototype.generate = function () {
  var method = this.method
  , title = this.title
  , showmessage = this.showmessage
  , path = title.low + '.' + method + '.js'
  , writeFile = this.write

  this.getTemplate(function (data) {
    var compiled = _.template(data);
    data = compiled({'title': title});
    writeFile(path, data, function (data) {
      if ( showmessage ) {
        utils.doneGenerateMessage(path)
      }
    })
  })
};

NgCode.prototype.getTemplate = function (cb) {
  var method = this.method;
  var tplPath = path.join(__dirname, '../templates', method + '.txt')
  fs.exists(tplPath, function (exists) {
    if (exists) {
      fs.readFile(tplPath, 'utf-8', function (err, data) {
        if (err) throw err;

        return cb(data)
      });
    } else {
      utils.error('Unknown Command: ' + method);
    }

  });
};

NgCode.prototype.write = function (path, data, cb) {
  fs.exists(path, function (exists) {
    if (exists) {
      utils.error(path + ' already exists. ')
    } else {
      fs.writeFile(path, data, function (err) {
        if (err) throw err;

        return cb('success')
      })
    }
  });
};

program
  .version('0.0.8')
  .arguments('<cmd>')
  .action(function (cmd, env) {
    var _command = cmd.split(':');
    var cmd      = _.first(_command);
    var title   = _.last(_command);

    switch (cmd) {
      case 'con':
        cmd = 'controller';
        break;
      case 'dir':
        cmd = 'directive';
        break;
      case 'fac':
        cmd = 'factory';
        break;
      case 'fil':
        cmd = 'filter';
        break;
      case 'mod':
        cmd = 'module';
        break;
      case 'ser':
        cmd = 'service';
        break;
    }

    var arg = {
      method: cmd,
      title: title,
      showmessage: true,
    }

    new NgCode(arg);
  })

program.on('--help', function () {
  console.log('  Examples:');
  console.log(' ');
  console.log('    Directives');
  console.log('      ngcode directive:helloworld');
  console.log(' ');
  console.log('    Controllers');
  console.log('      ngcode controller:helloworld');
  console.log(' ');
  console.log('    Factory');
  console.log('      ngcode factory:helloworld');
  console.log(' ');
  console.log('    Filter');
  console.log('      ngcode filter:helloworld');
  console.log(' ');
  console.log('    Module');
  console.log('      ngcode module:helloworld');
  console.log(' ');
  console.log('    Service');
  console.log('      ngcode service:helloworld');
  console.log('');
});

program.parse(process.argv);

module.exports = NgCode