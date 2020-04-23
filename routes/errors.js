/**
 * Routes Erros Handler
 */
module.exports = (app) => {
  // 404
  app.use((req, res, next) => {
    return res.status(404).send({ message: `Route' ${req.url} Not found.` })
  })
  // 500 - Any server error
  app.use((err, req, res, next) => {
    return res.status(500).send({ error: err })
  })
}
