const express = require('express')
const router = express.Router()

const producController = require('../app/controller/productController')


router.get('/static', producController.getAllProductStatic)
router.get('/', producController.getAllProduct)


module.exports = router