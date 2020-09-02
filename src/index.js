const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
require('../controllers/authController')(app)
require('../controllers/productsController')(app)
require('../controllers/customerBillController')(app)
require('../controllers/viewCustomerController')(app)
require('../controllers/userController')(app)
app.listen(process.env.PORT || 3000)
