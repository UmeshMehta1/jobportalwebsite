
const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum:["jobseeker","jobprovider"],
        default:"jobseeker",
    
    }
});

const authModel = mongoose.model('user', authSchema);

module.exports = authModel;