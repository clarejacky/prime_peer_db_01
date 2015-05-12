var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", function(req,res,next){
  console.log("got this far");
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});


module.exports = router;