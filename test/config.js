var expect = require('chai').expect

describe('config', function() {
  it('should read config from the right directory', function(done) {
    var config = require('../index')

    expect(config.get('NODE_ENV')).to.equal('test');
    expect(config.get('INTEGER')).to.equal(1);
    expect(config.get('STRING')).to.equal('hello world');
    expect(config.get('FLOAT')).to.equal(0.5);
    expect(config.get('OBJECT').KEY).to.equal('VALUE');

    done();
  })
});