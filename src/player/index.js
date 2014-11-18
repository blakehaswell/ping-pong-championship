var app          = require('express')();

var getRandomInt = require('./utils/getRandomInt');

app.get('/attack', function (req, res) {
    var n = getRandomInt(1, 10);
    res.send(n.toString());
});

app.listen(3000);
