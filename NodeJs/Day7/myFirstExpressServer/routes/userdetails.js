var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "myapp"
    });
    var sql = "select * from users";
    con.query(sql, (err, result) => {
        if (err) { res.send({result:'error', message:err.message});
    }else{
        res.send({result:'success', message:result});
        }
    });

});

module.exports = router;
