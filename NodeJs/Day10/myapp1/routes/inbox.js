var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET users listing. */
router.get('/', function(req, res, next) {
if(req.session.user) {

    const config = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'gIhZ4@example.com',
            pass: 'password'
        }
    });

    const mail = {
        from: 'gIhZ4@example.com',
        to: req.session.user,
        subject: 'This is a test mail',
        text: 'This is a test mail'
    };
    try{
        config.sendMail(mail, (err, info) => {
            if(err){
                console.log(err);
            }else{
                console.log('Email sent: ' + info.response);
            }
        });
        if(req.cookies.username) {
            res.clearCookie('username');
        }
    }catch(e){
        console.log(e);
    }

    res.cookie('username', req.session.user, { maxAge: 900000});
    res.send({result:'success', message:'This is inbox page, welcome '+ req.session.user});
}else{
    res.send({result:'error', message:'Please login to access your inbox'});
}
});

module.exports = router;
