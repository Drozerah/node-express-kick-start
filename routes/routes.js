const express = require('express')
const router = express.Router()
const { middleware, visualizer } = require('express-routes-visualizer')

router.get('/', middleware({
  httpMethods: true,
  routerDir: 'routes' // routes directory
}), visualizer({ theme: 'plain' }))

module.exports = router
