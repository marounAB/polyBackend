
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Professions = require('../models/professions');

const professionRouter = express.Router();

professionRouter.use(bodyParser.json());

professionRouter.route('/')
    .get((req,res,next) => {
        Professions.find({})
            .then((professions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(professions);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {
        Professions.create(req.body)
            .then((professions) => {
                console.log('Profession added ', professions);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(professions);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        Professions.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = professionRouter;