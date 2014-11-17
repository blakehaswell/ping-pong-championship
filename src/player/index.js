var app = require('express')();

app.get('/attack', function (req, res) {
    var n = getRandomInt(1, 10);
    res.send(n.toString());
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(3000);
