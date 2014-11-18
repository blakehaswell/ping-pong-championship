var describe     = require('mocha').describe;
var expect       = require('chai').expect;
var it           = require('mocha').it;

var getRandomInt = require('../src/player/utils/getRandomInt');

describe('getRandomInt', function () {

    it('returns an int within the min and max (inclusive)', function () {
        var min = 24;
        var max = 107;
        var val;
        for (var i = 0, l = 1000; i < l; i++) {
            val = getRandomInt(min, max);
            expect(val).to.be.within(min, max);
            expect(val % 1).to.equal(0);
        }
    });

});
