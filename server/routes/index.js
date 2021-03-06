const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/auth', require('./auth.routes'))
router.use('/rooms', require('./rooms.routes'))
router.use('/options', require('./options.routes'))
router.use('/users', require('./user.routes'))

module.exports = router
