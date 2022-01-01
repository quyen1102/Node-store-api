const express = require('express')
const router = express.Router()

const siteController = require('../app/controller/siteController')

router.get('/', siteController.Home)

module.exports = router