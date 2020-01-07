const express = require('express');
const db = require('../models')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await db.User.findAll({});
        res.json(users);
    } catch(e) {
        console.error(e);
        next(e);
    }
})

router.post('/', (req, res) => {

})

module.exports = router;