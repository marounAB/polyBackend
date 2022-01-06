const express = require('express');
const bodyParser = require('body-parser');
var passport = require('passport');
var authenticateDoctor = require('../authenticateDoctor');

const Doctors = require('../models/doctors');

const doctorRouter = express.Router();

doctorRouter.use(bodyParser.json());

doctorRouter.route('/')
    .get((req,res,next) => {
        Doctors.find({})
            .then((doctors) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(doctors);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticateDoctor.verifyDoctor, authenticateDoctor.verifyAdmin, (req, res, next) => {
        Doctors.register(new Doctors({username: req.body.username, email: req.body.email, name: req.body.name, surname: req.body.surname, idSpeciality: req.body.idSpeciality,
         admin: req.body.admin, picture: req.body.picture, price: req.body.price }),
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

doctorRouter.post('/login', passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

module.exports = doctorRouter;

