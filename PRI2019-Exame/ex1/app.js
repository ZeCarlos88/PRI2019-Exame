var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/arqmusical', {userNewUrlParser: true, useUnitifiedTopology: true})
        .then(() => console.log('> Mongo ready: ' + mongoose.connection.readyState))
        .catch((erro) => console.log('> Mongo: erro na conexão: ' + erro))


var compositoresRouter = require('./routes/compositores');
var arqRouter = require('./routes/arqmus');
var arqRouter = require('./routes/arqCount');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/compositores', compositoresRouter);
app.use('/api/obras', arqRouter);
app.use('/api/arqCount', arqRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
