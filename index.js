
const app = require('./app') // the actual Express application
const Config = require('./utils/config')
const Logger = require('./utils/logger')

app.listen(Config.PORT, () => {
  Logger.info(`Server running on port ${Config.PORT}`)
})



