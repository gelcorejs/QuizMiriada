var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz Curso MiriadaX' });
});
router.get('/author',function(req,res){
    res.render('author',{title:'Creditos'})
});
module.exports = router;
