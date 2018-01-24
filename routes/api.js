var express = require('express');
var router = express.Router();
var crud = require('../api/crud')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/insert',crud.insertmethod);
router.post('/update',crud.updatemethod);
router.post('/delete',crud.deletemethod);
module.exports = router;
