const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Appointments = require('../models/appointments');

const appointmentRouter = express.Router();

appointmentRouter.use(bodyParser.json());

appointmentRouter.route('/')
    .get((req,res,next) => {
        Appointments.find({})
            .then((app) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(app);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {
        Appointments.create(req.body)
            .then((app) => {
                console.log('Appointments added ', app);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(app);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

    appointmentRouter.route('/:appointmentId')
        .put((req, res, next) => {
            Appointments.findByIdAndUpdate(req.params.appointmentId, {
                    $set: req.body
                }, { new: true })
                .then((app) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(app);
    
                }, (err) => next(err))
                .catch((err) => next(err));
        })
        .delete((req, res, next) => {
            Appointments.findByIdAndRemove(req.params.appointmentId)
                .then((resp) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(resp);
                }, (err) => next(err))
                .catch((err) => next(err));
        });
 

module.exports = appointmentRouter;