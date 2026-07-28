var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id/:name', function(req, res, next) {
    var id = req.params.id;
    var name = req.params.name;
    res.send({result:'success', message:'This is the product page for product Id: ' +id +' and name: '+ name});
});

module.exports = router;
