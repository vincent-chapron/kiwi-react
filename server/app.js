var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var history = require('connect-history-api-fallback');

var app = express();
app.use(history());

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({});
});


module.exports = app;
