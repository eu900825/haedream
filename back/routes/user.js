const express = require('express');
const db = require('../models')

const router = express.Router();

router.get('/', (req, res) => {

})

router.post('/', async (req, res, next) => {
    try {
        const exUser = await db.User.findOne({
            where: {
                phone: req.body.phone
            },
        });
        if(exUser) {
            return res.status(403).send('이미 신청하신 휴대폰번호입니다.');
        }
        const newUser = await db.User.create({
            name: req.body.name,
            phone: req.body.phone,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch(e) {
        console.error(e);
        // 에러 처리
        return next(e);
    }
})

module.exports = router;