const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    placedBy: {
        type: String,
        required: true
    },
    placedByUserId:{
        type: String,
        required: true
    },
    placedOn:{
        type: String,
        required: true
    },
    items:{
        type: Array,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    restaurantId:{
        type: Number,
        required: true
    } 

})

module.exports = mongoose.model('orders', orderSchema, 'orders');