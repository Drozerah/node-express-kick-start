const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  try {
    const config = {
      css: req.app.locals.css // CSS file
    }
    return res.render('home', {
      config,
      title: 'Express App'
    })
  } catch (error) {
    console.log('[error][get][/]') // * error log
    next(error)
  }
})

module.exports = router
