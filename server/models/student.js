const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true, // Student name is required
  },
  email: {
    type: String,
    required: true,
    unique: true, // Each student must have a unique email
  },
  password: {
    type: String,
    required: true, // Password for login
  },
  cgpa: {
    type: Number,
    required: true, // Cumulative GPA for filtering applicants
  },
  tenthMarks: {
    type: Number, // 10th grade marks
    required: true,
  },
  twelfthMarks: {
    type: Number, // 12th grade marks
    required: true,
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job', // Array of jobs the student has applied for
  }],
  createdAt: {
    type: Date,
    default: Date.now, // Automatically store account creation date
  },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
