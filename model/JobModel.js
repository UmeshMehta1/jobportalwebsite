const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

}, { timestamps: true });

const jobModel = mongoose.model('Job', jobSchema);

module.exports = jobModel;