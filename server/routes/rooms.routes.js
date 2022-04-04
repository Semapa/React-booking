const express = require('express')
const Rooms = require('../models/Rooms')
const { generateRoomData } = require('../utils/helpers')
const router = express.Router({ mergeParams: true })

// /api/rooms
router
  .route('/')
  .get(async (req, res) => {
    try {
      const list = await Rooms.find()
      res.send(list)
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже...'
      })
    }
  })
  .post(async (req, res) => {
    try {
      console.log('rooms.router req.body', req.body)
      const newRoom = await Rooms.create({
        ...generateRoomData(),
        ...req.body
      })
      res.status(200).send(newRoom)
    } catch (error) {
      console.log('rooms.router error', error)
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже...'
      })
    }
  })

module.exports = router
