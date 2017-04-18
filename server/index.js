var express = require('express');
var path = require('path');

var app = module.exports = express();
var root = './public';

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/', function(req, res) {
    res.sendFile(path.resolve(root) + '/index.html');
});