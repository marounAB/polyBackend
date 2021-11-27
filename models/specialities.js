const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

const specialitySchema = new Schema({
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Specialities = mongoose.model('Speciality', specialitySchema);

module.exports = Specialities;
