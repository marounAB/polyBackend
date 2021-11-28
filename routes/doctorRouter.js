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
    })

    .post((req, res, next) => {
        Doctors.create(req.body)
            .then((doctors) => {
                console.log('Doctor added ', doctors);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(doctors);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        Doctors.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

   doctorRouter.route('/:doctorId')
        .get((req,res,next) => {
            Doctors.findById(req.params.doctorId)
                .then((doctors) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(doctors);
                }, (err) => next(err))
                .catch((err) => next(err));
    });

module.exports = doctorRouter;

