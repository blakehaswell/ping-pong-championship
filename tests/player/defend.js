var afterEach  = require('mocha').afterEach;
var beforeEach = require('mocha').beforeEach;
var describe   = require('mocha').describe;
var expect     = require('chai').expect;
var it         = require('mocha').it;
var request    = require('superagent');

var app        = require('../../src/player/app.js');

describe('when the player is asked to defend', function () {

    beforeEach(function () {
        this.server = app.listen(3000);
    });

    afterEach(function () {
        this.server.close();
    });

    describe('and the player ID has been set', function () {

        beforeEach(function () {
            app.set('PLAYER_ID', 3);
        });

        afterEach(function () {
            app.set('PLAYER_ID', null);
        });

        it('responds with a 200', function (done) {
            request
                .get('http://localhost:3000/defend')
                .end(function (res) {
                    expect(res.status).to.equal(200);
                    done();
                });
        });

        it(
            'responds with an array of unique random numbers from 1 to 10',
            function (done) {
                request
                    .get('http://localhost:3000/defend')
                    .end(function (res) {
                        res.body.forEach(function (n, i) {
                            expect(n).to.be.within(1, 10);
                            expect(res.body.indexOf(n)).to.equal(i);
                        });
                        done();
                    });
            }
        );

        it(
            'responds with an array whose length is determined by config',
            function (done) {
                request
                    .get('http://localhost:3000/defend')
                    .end(function (res) {
                        expect(res.body).to.have.length(7);
                        done();
                    });
            }
        );

    });

    describe('and the player ID has not been set', function () {

        it('responds with a 500', function (done) {
            request
                .get('http://localhost:3000/defend')
                .end(function (res) {
                    expect(res.status).to.equal(500);
                    done();
                });
        });

    });

});
