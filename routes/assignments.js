var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var assignments = require('../models/assignments.js');


router.get("/", function(req, res, next){
    assignments.find(function(err, assignments){
        res.json(assignments);
    });
});

router.post("/", function(req,res,next){
    console.log(req.body);
    assignments.create(req.body, function(err, post){
        res.json(post);
    })
});




module.exports = router;