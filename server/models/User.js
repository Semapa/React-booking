const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    // Описываем поля, которые присутствуют в модели
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: String,
    isAdmin: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = model('User', schema)
