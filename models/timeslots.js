const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//require('mongoose-currency').loadType(mongoose);

const timeslotSchema = new Schema({
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Timeslots = mongoose.model('Timeslot', timeslotSchema);

module.exports = Timeslots;
