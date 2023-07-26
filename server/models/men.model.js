const mongoose = require('mongoose')

const MenSchema = new mongoose.Schema({
    name: {
        type
    }
})

const Men = mongoose.model('Men', MenSchema)
module.exports = Men