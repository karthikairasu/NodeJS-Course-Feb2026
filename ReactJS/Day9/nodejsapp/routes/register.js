var express = require('express');
var router = express.Router();
// var mysql = require('mysql2');
const User = require('../models/Users');

/* GET users listing. */
router.post('/', async function(req, res, next) {
    // var connection = mysql.createConnection({
    //     host:"localhost",
    //     user:"root",
    //     password:"root",
    //     database:"mynodedata"
    // })
    // connection.connect();
    // connection.query("insert into users(name, password, email, mobile, age) values(?, ?, ?, ?,?)", [req.body.name, req.body.password, req.body.email, req.body.mobile, req.body.age], (err, result) => {
    //     if(err) throw err;
    //     res.send(result);
    // })

     try {
        const newUser = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            mobile: req.body.mobile,
            age: req.body.age
        });

        const result = await newUser.save();
        res.status(201).json(result);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
