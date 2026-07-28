var express = require('express');
var router = express.Router();
const User = require('../models/Users');

/* GET all users */
router.get('/', async function(req, res) {
    try {
        const users = await User.find(); // equivalent to SELECT * FROM users
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;