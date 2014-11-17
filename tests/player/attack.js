var describe = require('mocha').describe;
var expect   = require('chai').expect;
var it       = require('mocha').it;
var request  = require('superagent');

describe('when the player is asked to attack', function () {

    it('responds with a 200', function (done) {
        request
            .get('http://localhost:3000/attack')
            .end(function (res) {
                expect(res.status).to.equal(200);
                done();
            });
    });

    it('responds with a random number between 1 and 10', function (done) {
        request
            .get('http://localhost:3000/attack')
            .end(function (res) {
                var n = parseInt(res.text, 10);
                expect(n).to.be.within(1, 10);
                done();
            });
    });

});
