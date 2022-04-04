const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    // Описываем поля, которые присутствуют в модели
    title: { type: String, required: true },
    description: { type: String, required: true },
    area: { type: String },
    price: { type: String, required: true },
    options: [{ type: Schema.Types.ObjectId, ref: 'Options' }],
    rating: Number, // можно не указывать объект, и тип если один параметр
    img: String,
    descriptionFull: { type: String, required: true },
    reservation: Boolean,
    roomNumber: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Rooms', schema)
