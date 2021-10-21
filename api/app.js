const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//Controllers
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const bookingsRouter = require('./controllers/bookings')

//Utils import
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        logger.info('connected to MongoDB')
    })
    .catch(error => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/bookings', bookingsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app