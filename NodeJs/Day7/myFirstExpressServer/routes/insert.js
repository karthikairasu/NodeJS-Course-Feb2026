var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET users listing. */
router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var mobile = req.body.mobile;

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "myapp"
    });

    var sql = "insert into users(name, pass, email, mobile) values(?, ?, ?, ?)";
    var values = [username, password, email, mobile];

    connection.excute(sql, values, (err, result) => {
        if (err) throw err;
        res.send({result:'success', message:'Record inserted successfully'});
    });
});

module.exports = router;
