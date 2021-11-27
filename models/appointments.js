const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

const appointmentSchema = new Schema({
    idDoctor: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Doctor"
    },
    idPatient: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Patient"
    },
    idTimeSlot: {
        type: mongoose.Types.ObjectId,
        required: true.valueOf,
        ref: "Timeslot"
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: ""
    }
}, {
    timestamps: true
});

var Doctors = mongoose.model('Doctor', doctorSchema);

module.exports = Doctors;
