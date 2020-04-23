/**
 * View engine configuration
 */
module.exports = (app) => {
  // Set up production CSS file
  app.locals.css = process.env.MODE === 'production' ? 'styles.min.css' : 'styles.css'
}
