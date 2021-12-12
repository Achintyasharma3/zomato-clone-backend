const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    thumb:{
        type:Array,
    },
    aggregrate_rating:{
        type:Number,
    },
    rating_text:{
        type:String,
    },
    min_price:{
        type:Number,
    },
    contact_Number:{
        type:String,
    },
    cuisine_id:{
        type:Array,
    },
    cuisine:{
        type:Array,
    },
    image:{
        type:String,
    },
    mealtype_id:{
        type:Number
    }
    
})
module.exports = mongoose.model('restaurant', RestaurantSchema, 'restaurants');