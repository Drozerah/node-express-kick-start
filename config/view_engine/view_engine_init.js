const engines = require('consolidate')

module.exports = (app) => {
  // Set up template engine Handlebars
  app.set('views', './views')
  app.set('view engine', 'hbs')
  app.engine('hbs', engines.handlebars)
}
