const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    // Описываем поля, которые присутствуют в модели
    type: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // добавит два поля, когда создана модель и когда обновлена
  }
)

module.exports = model('RoomsCategory', schema)
