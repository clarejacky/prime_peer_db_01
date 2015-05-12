var express = require('express');
var router = express.Router();
var path = require('path');
var assignments = require('../models/assignments.js');

router.get("/", function(req,res,next){
  console.log("got this far");
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

router.post("/", function(req,res,next){
  console.log(req.body);
  assignments.create(req.body, function(err, post){
    res.json(post);
  })
});


module.exports = router;