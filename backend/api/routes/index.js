const express = require('express')

const asistenceRouter = require('./assistance.route')

function routerApi(app) {
  const router  = express.Router();
  app.use('/api/v1',router)
  router.use('/assistance',asistenceRouter)
}

module.exports = routerApi
