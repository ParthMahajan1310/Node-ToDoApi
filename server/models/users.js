const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        min: 1,
        trim: true,
        required: true
    },
    email: {
        type: String,
        min: 1,
        trim: true,
        required: true
    }
});

let Users = mongoose.model('Users', UsersSchema);
module.exports = { Users };