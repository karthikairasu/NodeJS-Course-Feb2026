var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    const name = req.query.name || 'world';
    res.send({message:'Hello ' + name});
});

module.exports = router;
