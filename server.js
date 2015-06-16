var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/AboutMe.html'));
});

app.get('/zachy', function(req, res) {
    res.sendFile(path.join(__dirname + '/ZachFacts.html'));
});

app.use(express.static(__dirname + '/public'));

app.listen(port);