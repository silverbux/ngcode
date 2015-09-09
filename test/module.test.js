/*
  Use `npm test` to run tests using mocha.
  or `./node_modules/.bin/mocha --reporter spec`
*/

var path = require( 'path' )
  , NgCode = require( path.resolve( path.join( __dirname, '..', 'index.js' ) ) )
  , fs     = require('fs')
  , expect = require( 'chai' ).expect;

console.log(NgCode)
describe('NGCODE Methods', function( done ) {
    it('should load as a module', function(done) {
        expect( NgCode ).to.exist;
        done();
    });

    it('has init method', function(done) {
        expect( NgCode.prototype.init ).to.exist;
        done();
    });

    it('has generate method', function(done) {
        expect( NgCode.prototype.generate ).to.exist;
        done();
    });

    it('has write method', function(done) {
        expect( NgCode.prototype.write ).to.exist;
        done();
    });
});

describe('NGCODE Functions', function( done ) {
    it('Controller', function(done) {
        var arg = {
            title : 'hello34551',
            method : 'controller',
            showmessage: false
        }

        var ngcodeIns = new NgCode(arg)

        expect( ngcodeIns.method ).to.equal('controller');
        expect( ngcodeIns.title.orig ).to.equal('hello34551');
        expect( ngcodeIns.title.cap ).to.equal('Hello34551');
        expect( ngcodeIns.title.low ).to.equal('hello34551');
        expect( ngcodeIns.title.camel ).to.equal('hello34551');

        done();
    });

    it('Directive', function(done) {
        var arg = {
            title : 'hello34551',
            method : 'directive',
            showmessage: false
        }

        var ngcodeIns = new NgCode(arg)

        expect( ngcodeIns.method ).to.equal('directive');
        expect( ngcodeIns.title.orig ).to.equal('hello34551');
        expect( ngcodeIns.title.cap ).to.equal('Hello34551');
        expect( ngcodeIns.title.low ).to.equal('hello34551');
        expect( ngcodeIns.title.camel ).to.equal('hello34551');

        done();
    });

    it('Factory', function(done) {
        var arg = {
            title : 'hello34551',
            method : 'factory',
            showmessage: false
        }

        var ngcodeIns = new NgCode(arg)

        expect( ngcodeIns.method ).to.equal('factory');
        expect( ngcodeIns.title.orig ).to.equal('hello34551');
        expect( ngcodeIns.title.cap ).to.equal('Hello34551');
        expect( ngcodeIns.title.low ).to.equal('hello34551');
        expect( ngcodeIns.title.camel ).to.equal('hello34551');

        done();
    });

    it('Module', function(done) {
        var arg = {
            title : 'hello34551',
            method : 'module',
            showmessage: false
        }

        var ngcodeIns = new NgCode(arg)

        expect( ngcodeIns.method ).to.equal('module');
        expect( ngcodeIns.title.orig ).to.equal('hello34551');
        expect( ngcodeIns.title.cap ).to.equal('Hello34551');
        expect( ngcodeIns.title.low ).to.equal('hello34551');
        expect( ngcodeIns.title.camel ).to.equal('hello34551');

        done();
    });

    it('Filter', function(done) {
        var arg = {
            title : 'hello34551',
            method : 'filter',
            showmessage: false
        }

        var ngcodeIns = new NgCode(arg)

        expect( ngcodeIns.method ).to.equal('filter');
        expect( ngcodeIns.title.orig ).to.equal('hello34551');
        expect( ngcodeIns.title.cap ).to.equal('Hello34551');
        expect( ngcodeIns.title.low ).to.equal('hello34551');
        expect( ngcodeIns.title.camel ).to.equal('hello34551');

        done();
    });

    it('Services', function(done) {
        var arg = {
            title : 'hello34551',
            method : 'service',
            showmessage: false
        }

        var ngcodeIns = new NgCode(arg)

        expect( ngcodeIns.method ).to.equal('service');
        expect( ngcodeIns.title.orig ).to.equal('hello34551');
        expect( ngcodeIns.title.cap ).to.equal('Hello34551');
        expect( ngcodeIns.title.low ).to.equal('hello34551');
        expect( ngcodeIns.title.camel ).to.equal('hello34551');

        done();
    });

    after(function() {
        var contFile = 'hello34551.controller.js'
        var dirFile = 'hello34551.directive.js'
        var facFile = 'hello34551.factory.js'
        var filFile = 'hello34551.filter.js'
        var modFile = 'hello34551.module.js'
        var serFile = 'hello34551.service.js'

        fs.exists(contFile, function(exists) {
            if (exists) {
                fs.unlinkSync(contFile);
            }
        });

        fs.exists(dirFile, function(exists) {
            if (exists) {
                fs.unlinkSync(dirFile);
            }
        });

        fs.exists(facFile, function(exists) {
            if (exists) {
                fs.unlinkSync(facFile);
            }
        });

        fs.exists(modFile, function(exists) {
            if (exists) {
                fs.unlinkSync(modFile);
            }
        });

        fs.exists(filFile, function(exists) {
            if (exists) {
                fs.unlinkSync(filFile);
            }
        });

        fs.exists(serFile, function(exists) {
            if (exists) {
                fs.unlinkSync(serFile);
            }
        });
    });
});