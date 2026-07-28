var express = require('express');
var mysql = require('mysql2');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    const username = req.cookies.username;
    const password = req.cookies.password;

    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"mynodedata"
    })
    connection.connect();
    connection.query("select * from users where name = ? and password = ?", [username, password], (err, result) => {
        if(err) throw err;
        res.send(result);
    })

});

module.exports = router;
