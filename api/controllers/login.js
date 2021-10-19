const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/user')

router.post('/', async (req, res) => {
    const user = await User.findOne({ email: req.body.email }).populate('booking', { user_id: 1, date: 1, note: 1 })

    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(req.body.password, user.password)

    if (user && passwordCorrect) {
        res.status(200).send(user)
    } else {
        return res.status(401).send({ error: 'invalid email or password' }).end()
    }
})

module.exports = router