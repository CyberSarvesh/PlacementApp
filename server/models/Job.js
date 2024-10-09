import mongoose from 'mongoose';

// Define Job schema
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model (HR who posted the job)
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create Job model
const Job = mongoose.model('Job', jobSchema);

export default Job;
