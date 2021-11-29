const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//require('mongoose-currency').loadType(mongoose);

const availabilitySchema = new Schema({
    idDoctor: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Doctor"
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Availabilities = mongoose.model('Availability', availabilitySchema);

module.exports = Availabilities;
