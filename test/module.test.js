/*
  Use `npm test` to run tests using mocha.
  or `./node_modules/.bin/mocha --reporter spec`
*/

var path = require( 'path' )
  , NgCode = require( path.resolve( path.join( __dirname, '..' ) ) )
  , expect = require( 'chai' ).expect;


describe('NG CODE', function( done ) {

    it('should load as a module', function(done) {
        expect( NgCode ).to.exist;
        done();
    });

});
