const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const MealtypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mealtypeId: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('mealtype', MealtypeSchema, 'mealtypes');