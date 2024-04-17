const express = require('express')

const asistenceRouter = require('./assistance.route')
const pandsRouter =  require('./pands.route')

function routerApi(app) {
  const router  = express.Router();
  app.use('/api/v1',router)
  router.use('/assistance',asistenceRouter)
  router.use('/products-and-services',pandsRouter)
}

module.exports = routerApi
