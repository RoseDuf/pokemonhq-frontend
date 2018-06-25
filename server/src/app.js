const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const {sequelize} = require('./models')
const app = express()

dotenv.config()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
require('./passport')
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 8081)
  console.log('server started')
})

