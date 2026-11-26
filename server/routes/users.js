const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');

router.post('/login', async (req, res) => {
    try {
        const { username } = req.body;
        if (!username) {
            return res.status(400).json({
                success: false,
                error: 'Please enter a username'
            });
        }
        let user = await Users.findOne({ username });
        if (!user) {
            user = await Users.create({ username });
        }
        return res.status(200).json({
            success: true,
            user: user
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.toString()
        });
    }
});

module.exports = router;