const mongoose = require('mongoose')

const KidSchema = new mongoose.Schema({
    name: {
        type
    }
})

const Kid = mongoose.model('Kid', KidSchema)
module.exports = Kid