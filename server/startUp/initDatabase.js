const Options = require('../models/Options')

const optionsMock = require('../mock/options')

module.exports = async () => {
  const options = await Options.find()
  if (options.length !== optionsMock.length) {
    await createInitialEntity(Options, optionsMock)
  }
}

async function createInitialEntity(Model, data) {
  // Чтобы не было дублирований, очищаем коллекцию
  await Model.collection.drop()

  // Работает с массивом и ждет пока все выполнятся
  return Promise.all(
    data.map(async (item) => {
      try {
        // Удаляем id из объекта, чтобы он не записывался в базу данных
        delete item._id
        const newItem = new Model(item)
        // сохраняем в базу
        await newItem.save()
        return newItem
      } catch (error) {
        return error
      }
    })
  )
}
