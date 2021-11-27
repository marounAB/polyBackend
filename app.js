var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var appointmentRouter = require('./routes/appointmentRouter');
// var availabilityRouter = require('./routes/availabilityRouter');
var doctorRouter = require('./routes/doctorRouter');
// var patientRouter = require('./routes/patientRouter');
// var professionRouter = require('./routes/professionRouter');
// var specialityRouter = require('./routes/specialityRouter');
// var timeslotRouter = require('./routes/timeslotRouter');

const mongoose = require('mongoose');

const Doctors = require("./models/doctors");

const url = 'mongodb+srv://maroun:haha123@polyclinique.eqpxz.mongodb.net/polyclinique?retryWrites=true&w=majority';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();
app.use(session({
    name: 'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.use('/appointments', appointmentRouter);
// app.use('/availabilities', availabilityRouter);
app.use('/doctors', doctorRouter);
// app.use('/patients', patientRouter);
// app.use('professions', professionRouter);
// app.use('specialities', specialityRouter);
// app.use('/timeslots', timeslotRouter);

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
