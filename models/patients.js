const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// https://www.npmjs.com/package/passport-local-mongoose
var passportLocalMongoose = require('passport-local-mongoose');

//require('mongoose-currency').loadType(mongoose);

const patientSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    
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
    phonenumber: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

patientSchema.plugin(passportLocalMongoose);

var Patients = mongoose.model('Patient', patientSchema);

module.exports = Patients;
