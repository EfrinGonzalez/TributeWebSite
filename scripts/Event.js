var mongoose = require('mongoose')

module.exports = mongoose.model('Event',{

    creator: String,
    name: String
})