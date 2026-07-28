var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const persons =[
        {name : "karthik",age : 24,city: "Chennai"},
        {name: "ramesh",age: 25,city: "Chennai"},
        {name: "suresh",age: 26,city: "Chennai"}
    ]
    res.render('viewdata', {name : persons});
});

module.exports = router;
