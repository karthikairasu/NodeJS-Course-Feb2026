var express = require('express');
const { body, validationResult } = require('express-validator');
var router = express.Router();

/* GET users listing. */
router.post('/', body('name').isEmail(), function(req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
        if(req.body.name === req.body.password) {
            req.session.user = req.body.name;
            // res.send({result:'success', message:'Login successfully'});
            res.redirect('/inbox');
        }else{
            // res.send({result:'error', message:'Invalid username or password'});
            res.render('loginerror');
        }
    }
});

module.exports = router;
