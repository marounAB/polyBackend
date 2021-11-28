const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Availabilities = require('../models/availabilities');

const availabilityRouter = express.Router();

availabilityRouter.use(bodyParser.json());

availabilityRouter.route('/')
    .get((req,res,next) => {
        Availabilities.find({})
            .then((av) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(av);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {
        Availabilities.create(req.body)
            .then((av) => {
                console.log('Availabilities added ', av);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(av);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

    availabilityRouter.route('/:availabilityId')
        .delete((req, res, next) => {
            Availabilities.findByIdAndRemove(req.params.availabilityId)
                .then((resp) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(resp);
                }, (err) => next(err))
                .catch((err) => next(err));
        });





    module.exports = availabilityRouter;