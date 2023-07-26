const mongoose = require('mongoose')

const WomanSchema = new mongoose.Schema({
    name: {
        type
    }
})

const Woman = mongoose.model('Woman', WomanSchema)
module.exports = Woman