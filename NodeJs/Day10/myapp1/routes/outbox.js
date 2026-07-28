var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.session.user) {
        const username = req.cookies.username;
        res.send({result:'success', message:'This is outbox page, welcome '+ req.session.user, username:username});
    }else{
        res.send({result:'error', message:'Please login to access your outbox'});
    }
});

module.exports = router;
