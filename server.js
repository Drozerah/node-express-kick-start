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
// home
app.use('/', require('./routes/home'))
// routes visualizer
app.use('/routes', require('./routes/routes'))

// * Routes errors handler
// 404
app.use((req, res, next) => {
  return res.status(404).send({ message: `Route' ${req.url} Not found.` })
})
// 500 - Any server error
app.use((err, req, res, next) => {
  return res.status(500).send({ error: err })
})

// * APP Start
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`[APP][start][${process.env.NODE_ENV}]`) // !DEBUG
  console.log(`http://localhost:${PORT}`) // !DEBUG
})

module.exports = app

// TODO
// [ ] your todo
