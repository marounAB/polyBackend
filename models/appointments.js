const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    idPatient: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Patient"
    },
    idDoctor: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Doctor"
    },
    idTimeSlot: {
        type: mongoose.Types.ObjectId,
        required: true,
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

var Appointments = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointments;
