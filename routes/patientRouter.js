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
    })

    .post((req, res, next) => {
        Patients.create(req.body)
            .then((patients) => {
                console.log('Patient added ', patients);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(patients);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        Patients.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

   /* doctorRouter.route('/:doctorId')
        .get((req,res,next) => {
            Doctors.findById(req.params.doctorId)
                .then((doctors) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(doctors);
                }, (err) => next(err))
                .catch((err) => next(err));
    });*/

module.exports = patientRouter;