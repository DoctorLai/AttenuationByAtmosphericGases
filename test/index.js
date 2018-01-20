/*
  Unit Tests for Attenuation By Atmospheric Gases
  Built on: mocha and chai
  Tests for frequency ranges from 0 to 350 Ghz
*/

var should = require('chai').should(),
    module = require('../index'),
    GetAirAttenuation = module.GetAirAttenuation;

describe('54', function() {
  it('30', function() {
    GetAirAttenuation(30, 13, 1000).should.be.closeTo(0.0207, 1e-3);
  }); 
});

describe('60', function() {
  it('60', function() {
    GetAirAttenuation(60, 13, 1000).should.be.closeTo(15.097, 1e-3);
  }); 
});

describe('62', function() {
  it('61', function() {
    GetAirAttenuation(61, 13, 1000).should.be.closeTo(14.7173, 1e-3);
  }); 
});

describe('66', function() {
  it('65', function() {
    GetAirAttenuation(65, 13, 1000).should.be.closeTo(3.7769, 1e-3);
  }); 
});

describe('120', function() {
  it('100', function() {
    GetAirAttenuation(100, 13, 1000).should.be.closeTo(0.0252, 1e-3);
  }); 
});

describe('350', function() {
  it('200', function() {
    GetAirAttenuation(200, 13, 1000).should.be.closeTo(0.0101, 1e-3);
  }); 
});
