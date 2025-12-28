const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    JobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    
    status: {
        type: String,
        enum: ['applied', 'in review', 'rejected', 'accepted'],
        default: 'applied'
    },

    appliedAt: {
        type: Date,
        default: Date.now
    }
});

const applicationModel = mongoose.model('Application', applicationSchema);

module.exports = applicationModel;