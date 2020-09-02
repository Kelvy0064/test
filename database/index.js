const db = require('mongoose')

db.connect('mongodb+srv://sales-control:salescontrolsenha@cluster0.ee9wc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
db.Promise = global.Promise

module.exports = db
