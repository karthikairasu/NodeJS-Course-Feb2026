var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"mynodedata"
    })
    connection.connect();
    connection.query("select * from users", (err, result) => {
        if(err) throw err;
        res.send(result);
    })
});

module.exports = router;