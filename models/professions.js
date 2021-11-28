const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//require('mongoose-currency').loadType(mongoose);

const professionSchema = new Schema({
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Professions = mongoose.model('Profession', professionSchema);

module.exports = Professions;
