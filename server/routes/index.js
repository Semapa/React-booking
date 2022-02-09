const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/auth', require('./auth.routes'))
router.use('/options', require('./options.routes'))

router.use('/user', require('./user.routes'))

module.exports = router
