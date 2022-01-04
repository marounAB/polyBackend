var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
//var authenticate = require('./authenticate');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appointmentRouter = require('./routes/appointmentRouter');
var availabilityRouter = require('./routes/availabilityRouter');
var doctorRouter = require('./routes/doctorRouter');
var patientRouter = require('./routes/patientRouter');
var professionRouter = require('./routes/professionRouter');
var specialityRouter = require('./routes/specialityRouter');
var timeslotRouter = require('./routes/timeslotRouter');
var config = require('./config')

const mongoose = require('mongoose');


//const url = 'mongodb+srv://maroun:haha123@polyclinique.eqpxz.mongodb.net/polyclinique?retryWrites=true&w=majority';
const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();


app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/appointments', appointmentRouter);
app.use('/availabilities', availabilityRouter);
app.use('/doctors', doctorRouter);
app.use('/patients', patientRouter);
app.use('/professions', professionRouter);
app.use('/specialities', specialityRouter);
app.use('/timeslots', timeslotRouter);

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
