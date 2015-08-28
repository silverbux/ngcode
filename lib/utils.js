/**
 * Module Utils.
 * Also see: http://nodejs.org/api/util.html
 */
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8')

var clc = require('cli-color')
  , colors  = {
      sky:        clc.cyanBright,
      green:      clc.xterm(112),
      blue:       clc.xterm(68),
      orange:     clc.xterm(172),
      red:        clc.xterm(1),
      gray:       clc.xterm(7),
      grey:       clc.xterm(7),
      darkGray:   clc.xterm(8),
      darkGrey:   clc.xterm(8),
      lightGreen: clc.xterm(11),
      lightGray:  clc.xterm(250)
    };

module.exports.fail = module.exports.error = function (msg) {
  console.log(colors.red(msg));
  process.exit(0);
}

module.exports.doneGenerateMessage = function (msg) {
  var cat = [
        '                              ',
        '    < Done Generating Sir... >',
        '    -------------------------',
        '           \\  ^__^',
        '            \\ (oo)\_______',
        '              (__)\       )\\',
        '                 ||----w | \\',
        '                 ||     ||',
        '    ' + colors.orange('<' + msg + '>'),
        '                              ',
        '                              ',
      ]

  for (var i = 0; i <= cat.length; i ++) {
    if (cat[i]) {
      console.log(colors.blue(cat[i]));
    }
  }
}

module.exports.info = function (msg) {
  console.log(colors.blue(msg));
}

module.exports.warn = function (msg) {
  console.log(colors.orange(msg));
}

module.exports.error = function (msg) {
  console.log('\n' + colors.red(msg) + '\n');
}

module.exports.utilFunction = function (msg) {
  console.log(colors.orange(msg));
}

//simply removes unsafe characters and html tags from a html segement
module.exports.stripHTML = function (html) {
  return html.replace(/[^a-z0-9$%\/\\#&+.\-<>\"\'\\= ]/gi, '');
}
