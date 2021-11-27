const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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
    });

module.exports = doctorRouter;