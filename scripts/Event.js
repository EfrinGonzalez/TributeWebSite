var mongoose = require('mongoose')

module.exports = mongoose.model('Event',{

    name:String,
    date:String,
    date:String,
    price:String,
    location:
        {
            address: String,
            city: String,
            province: String

        }
    ,
    abstract:String,
    imageUrl:String,
    facebook_event:String


})