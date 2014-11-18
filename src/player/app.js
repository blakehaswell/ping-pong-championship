var app          = require('express')();
var find         = require('lodash.find');
var nconf        = require('nconf');

var getRandomInt = require('./utils/getRandomInt');
var players      = require('../../conf/players');

nconf.argv().env().defaults({
    'PORT': 3000
});

app.set('PLAYER_ID', nconf.get('PLAYER_ID'));
app.set('PORT', nconf.get('PORT'));

app.get('/attack', function (req, res) {
    var n = getRandomInt(1, 10);
    res.send(n.toString());
});

app.get('/defend', function (req, res) {
    if (!app.get('PLAYER_ID')) {
        res.sendStatus(500);
        return;
    }
    var player = find(players, { id: app.get('PLAYER_ID') });
    var nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var defenseSet = [];
    var i;
    while (defenseSet.length < player.defenseSetLength) {
        i = getRandomInt(0, nums.length - 1);
        defenseSet.push(nums[i]);
        nums.splice(i, 1);
    }
    res.send(defenseSet);
});

module.exports = app;
