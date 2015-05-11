var express = require('express');
var router = express.Router();

router.get("/", function(req,res,next){
  res.sendFile(path.resolve(__dirname, '../views/index.html'));
});
/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});


module.exports = router;
