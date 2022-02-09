const express = require('express')
const Options = require('../models/Options')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    // const professions = await Profession.find()
    // res.status(200).json({
    //   list: professions
    // })
    // более короткая запись
    const list = await Options.find()
    // res.status(200).json({ list }) при такой записи возвращается ключ list: и за ним уже массив с провфессиями
    res.status(200).send(list) // нам ключ лист не нужен, поэтому делаем таким способом
  } catch (error) {
    // отправится на клиент
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже...'
    })
  }
})

module.exports = router
