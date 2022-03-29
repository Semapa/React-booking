const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const cors = require('cors')
const initDatabase = require('./startUp/initDatabase')
const routes = require('./routes')
const { patch } = require('./routes')

const app = express()

const PORT = config.get('port') ?? 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// все роуты на которые будет реагировать приложения будут начинаться /api
app.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
  console.log('Production')

  // ТАКОЙ ПОДХОД РАБОТАЕТ КОГДА И КЛИЕНТ И СЕРВЕР НАХОДЯТСЯ В ОДНОМ КОНТЕЙНЕРЕ
  // используем статическую папку build
  // app.use('/', express.static(patch.join(__dirname, '..', 'client', 'build')))

  // на каждый запрос, который не относиться к api выдаем статичкский index.html
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
  // })
} else {
  console.log('Development')
}

async function start() {
  try {
    // проверить, есть ли в базе базовые сущности
    // как только произошло соединение, один раз(once, on-каждый раз)
    mongoose.connection.once('open', () => {
      initDatabase()
    })

    // чтобы использовать development.env
    // const {
    //   MONGO_INITDB_ROOT_USERNAME: username,
    //   MONGO_INITDB_ROOT_PASSWORD: password,
    //   MONGO_HOST: host
    // } = process.env
    // const uri = `mongodb://${username}:${password}@${host}/booking?authSource=admin`

    // подключаем БД
    await mongoose.connect(config.get('mongoUri'))
    console.log(chalk.green(`MongoDB connected.`))
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port ${PORT}...`))
    })
  } catch (error) {
    console.log(chalk.red(error.message))
    // останавливаем процесс
    process.exit(1)
  }
}

start()
