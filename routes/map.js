var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

  res.render("map", {  layout: 'map' });

});

router.get('/ol', function (req, res, next) {

  res.render("ol-map", {  layout: 'ol-map' });

});


module.exports = router;
