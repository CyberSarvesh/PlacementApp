import mongoose from 'mongoose';

// Define Application schema
const applicationSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model (student)
        required: true,
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job', // Reference to the Job model
        required: true,
    },
    status: {
        type: String,
        enum: ['applied', 'interview', 'offered', 'rejected'], // Possible application statuses
        default: 'applied',
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});

// Create Application model
const Application = mongoose.model('Application', applicationSchema);

export default Application;
