(function() {
  var expect, udefine;

  udefine = require('../../dist/udefine');

  expect = require('chai').expect;

  describe('udefine commonjs dependencies', function() {
    return it('multiple dependencies', function(done) {
      udefine.paths.commonjs.base = 'test/node';
      udefine.commonjs = {
        dep1: './dep1',
        dep2: './dep2'
      };
      return udefine('nodetest', ['dep1', 'dep2'], function(dep1, dep2) {
        var num;

        console.log(arguments);
        expect(dep1).to.be.a('object');
        expect(dep1).to.have.property('number');
        expect(dep2).to.be.a('function');
        num = dep1.number + dep2();
        expect(num).to.be.a('number');
        return done();
      });
    });
  });

}).call(this);
