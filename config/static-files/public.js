const express = require('express')
/**
 * Serve static files
 */
module.exports = (app) => app.use(express.static('public'))
