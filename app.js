var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

app.set('view engine', 'pug');
app.get('/', function (req, res) {
    // res.send(req.connection.remoteAddress);
    res.render('index', {header: req.query.header});
});

app.post('/', function(req, res) {
    res.send(req.query.post1);
});

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});