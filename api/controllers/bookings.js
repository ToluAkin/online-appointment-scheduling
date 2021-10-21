const express = require('express')
const router = express.Router()

//Model import
const Booking = require('../models/booking')
const User = require('../models/user')

// save a booking
router.post('/', async(req, res) => {
    const { user_id, date, note } = req.body

    if (user_id) {
        if (!date || !note) return res.status(401).send({ error: 'no date or note added' }).end()

        const user =  await User.findById(user_id)
        if (user) {
            const booking = await new Booking(req.body)
            await booking.save()
            user.bookings = user.bookings.concat({ date: booking.date, note: booking.note })
            const updatedUser =  await user.save()
            res.status(201).json(updatedUser)
        } else {
            return res.status(404).send({ error: 'user not found' }).end()
        }
    } else {
        return res.status(401).send({ error: 'user_id is missing' }).end()
    }
})


module.exports = router