const express = require('express')
const Rooms = require('../models/Rooms')
const auth = require('../middleware/auth.middleware')
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
      const newRoom = await Rooms.create({
        ...generateRoomData(),
        ...req.body
      })
      res.status(200).send(newRoom)
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже...'
      })
    }
  })

router.delete('/:roomId', auth, async (req, res) => {
  try {
    const { roomId } = req.params
    const removedRoom = await Rooms.findById(roomId)
    // анaлогчный метод, только с фильтром
    // const removedComment = await Comment.find({ _id: commentId })

    await removedRoom.remove()
    return res.send(null)
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже...'
    })
  }
})

module.exports = router
