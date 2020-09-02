const db = require('mongoose')

db.connect('mongodb:mongodb+srv://sales-control:<password>@cluster0.ee9wc.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
db.Promise = global.Promise

module.exports = db
