var mongoose = require('mongoose')

module.exports = mongoose.model('List',{
    creator: String
})