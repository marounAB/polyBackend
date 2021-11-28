const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Timeslots = require('../models/timeslots');

const timeslotRouter = express.Router();

timeslotRouter.use(bodyParser.json());

timeslotRouter.route('/')
    .get((req,res,next) => {
        Timeslots.find({})
            .then((timeslot) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(timeslot);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = timeslotRouter;