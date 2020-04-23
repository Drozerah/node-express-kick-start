'use strict'
require('dotenv').config()
const express = require('express')
const app = express()

// * APP Configuration
// Init view engine
require('./config/view_engine/view_engine_init')(app)
// Config view engine
require('./config/view_engine/view_engine_config')(app)
// Serve static files
require('./config/static-files/public')(app)

// * APP Routes
app.use('/', require('./routes/home'))

// Routes errors handler
require('./routes/errors')(app)

console.log(process.env.NODE_ENV) // !DEBUG

// * APP Start
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`[APP][start][${process.env.NODE_ENV}]`) // !DEBUG
  console.log(`http://localhost:${PORT}`) // !DEBUG
})

module.exports = app

// TODO
// [ ] your todo
