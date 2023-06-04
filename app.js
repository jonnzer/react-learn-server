
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Logger = require('./utils/logger')
const config = require('./utils/config')
const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const cors = require('cors')

Logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
    .then(result => {
      Logger.info('connected to MongoDB!')
    })
    .catch((error) => {
      Logger.info('error connecting to MongoDB:', error.message)
    })
app.use(cors())
app.use(express.static('build'))
app.use(express.json()) // 如果没有 json-parser，body 属性将是未定义的。json-parser 的功能是将请求的 JSON 数据转化为 JavaScript 对象，然后在调用路由处理程序之前将其附加到 request 对象的 body 属性。
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app



