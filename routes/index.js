var express = require('express');
var router = express.Router();
const categoryRoute = require("./categories")
const productRoute = require("./product")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/api/category', categoryRoute);
router.use('/api/product', productRoute);
module.exports = router;
