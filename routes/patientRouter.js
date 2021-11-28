const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

    
module.exports = patientRouter;