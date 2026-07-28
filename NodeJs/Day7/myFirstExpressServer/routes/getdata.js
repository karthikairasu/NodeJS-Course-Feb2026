var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if(username === 'admin' && password === 'admin') {
        res.send({result:'success', message:'Login successfully'});
    }else {
        res.send({result:'error', message:'Invalid username or password'});
    }
});

module.exports = router;
