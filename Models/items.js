
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('item', menuItemsSchema, 'items');