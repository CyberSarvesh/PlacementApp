import mongoose from 'mongoose';

// Define User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'hr', 'admin'], // Roles can be student, hr, or admin
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create User model
const User = mongoose.model('User', userSchema);

export default User;
