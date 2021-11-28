const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Specialities = require('../models/specialities');

const specialityRouter = express.Router();

specialityRouter.use(bodyParser.json());

specialityRouter.route('/')
    .get((req,res,next) => {
        Specialities.find({})
            .then((spe) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(spe);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    
    module.exports = specialityRouter;