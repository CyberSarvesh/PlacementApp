
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cgpa: {
        type: Number,
        required: true
    },
    collegeId: {
        unique: true,
        type: Number,
        required: true
    }
});

const User = mongoose.model("User", userSchema);
export default User;
