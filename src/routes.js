const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => res.render('mainPage/index'))

module.exports = routes
