var express = require('express');
var router = express.Router();
var path = require('path');
var assignments = require('../models/assignments.js');

router.get('/', function(request, response){
    var file = request.params[0] || '../views/index.html';
    response.sendFile(path.join(__dirname, file));

});

router.post("/", function(req,res,next){
  console.log("This is working: " + req.body);
  assignments.create(req.body, function(err, post){
    res.json(post);
  })
});

module.exports = router;