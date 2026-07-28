var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    req.session.destroy(function(err){
        if(err){
            res.send({result:'error', message:err.message});
        }else{
            res.send({result:'success', message:'Logout successfully'});
        }
    });
//   res.send('respond with a resource');
});

module.exports = router;
