const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    idProfession: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Profession"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    addres: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

var Patients = mongoose.model('Patient', patientSchema);

module.exports = Patients;
