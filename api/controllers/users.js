const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

//Model import
const User = require('../models/user')

router.get('/', async(req, res) => {
    const users = await User.find({})
    res.status(200).json(users.map(user => user.toJSON()))
})

router.get('/:id', async(req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        user.populate('bookings')
        res.status(200).json(user.toJSON())
    } else {
        return res.status(404).send({ error: 'user not found' }).end()
    }
})

router.post('/', async(req, res) => {
    const { fullName, email, password } = req.body

    if (!fullName || !email || !password) res.status(400).send({ error: 'name, email or password missing' }).end()

    if (password && fullName) {
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        const user = await new User({ fullName, email, password: passwordHash, shared: 1 })
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    }
})

router.put('/:id', async(req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, { ...user._doc, ...req.body }, { new: true })
        res.status(200).json(updatedUser).end()
    } else {
        return res.status(404).send({ error: 'user not found' }).end()
    }
})

module.exports = router