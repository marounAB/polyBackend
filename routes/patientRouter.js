const express = require('express');
const bodyParser = require('body-parser');
var passport = require('passport');
var authenticatePatient = require('../authenticatePatient');

const Patients = require('../models/patients');

const patientRouter = express.Router();

patientRouter.use(bodyParser.json());

patientRouter.route('/')
    .get((req,res,next) => {
        Patients.find({})
            .then((patients) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(patients);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

   patientRouter.post('/signup', (req, res, next) => {
    Patients.register(new Patients({username: req.body.username, email: req.body.email, name: req.body.name, surname: 
        req.body.surname, idProfession: req.body.idProfession, phonenumber: req.body.phonenumber, dateofbirth: req.body.dateofbirth,
        address: req.body.address}),
        req.body.password, (err, user) => {
        if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
        }
        else {
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
            });
        }
    });
});

patientRouter.post('/login', passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

    
module.exports = patientRouter;