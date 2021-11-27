const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;

const doctorSchema = new Schema({
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
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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

var Doctors = mongoose.model('Doctor', doctorSchema);

module.exports = Doctors;
