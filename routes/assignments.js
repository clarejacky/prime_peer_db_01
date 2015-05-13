var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var assignments = require('../models/assignments.js');


router.get("/", function(req, res, next){
    assignments.find(function(err, assingments){
        res.json(assingments);
    });
});

router.post("/", function(req,res,next){
    console.log(req.body);
    assignments.create(req.body, function(err, post){
        res.json(post);
    })
});

router.put("/:id", function(req,res,next){
    assignments.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err){
            console.log("Error", err);
        }
        res.json(post);
    });
});


router.delete("/:id", function(req,res,next){
   assignments.findByIdAndRemove(req.params.id, req.body, function(err, post){
       if(err){
           console.log("Error", err);
       }
    res.json(post);
   });
});




module.exports = router;