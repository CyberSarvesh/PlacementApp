const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Job Schema
const jobSchema = new Schema({
  title: {
    type: String,
    required: true, // Job title is required
  },
  description: {
    type: String,
    required: true, // Job description is required
  },
  package: {
    type: Number, // Salary offered for the job
    required: true,
  },
  hrId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the HR who posted the job
    ref: 'HR',
    required: true,
  },
  appliedStudents: [{
    type: mongoose.Schema.Types.ObjectId, // Array of references to students who applied for this job
    ref: 'Student',
  }],
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the date when the job was posted
  },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
