const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

var passportLocalMongoose = require('passport-local-mongoose');

const doctorSchema = new Schema({
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
    idSpeciality: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Speciality"
    },
   
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    picture: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 50
    }
}, {
    timestamps: true
});

doctorSchema.plugin(passportLocalMongoose);
var Doctors = mongoose.model('Doctor', doctorSchema);

module.exports = Doctors;
