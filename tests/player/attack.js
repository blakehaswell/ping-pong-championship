var afterEach  = require('mocha').afterEach;
var beforeEach = require('mocha').beforeEach;
var describe   = require('mocha').describe;
var expect     = require('chai').expect;
var it         = require('mocha').it;
var request    = require('superagent');

var app        = require('../../src/player/app.js');

describe('when the player is asked to attack', function () {

    beforeEach(function () {
        this.server = app.listen(3000);
    });

    afterEach(function () {
        this.server.close();
    });

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
