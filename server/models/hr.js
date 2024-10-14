import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const hrSchema = new Schema({
  name: {
    type: String,
    required: true, // HR name
  },
  email: {
    type: String,
    required: true,
    unique: true, // Each HR must have a unique email
  },
  password: {
    type: String,
    required: true, // Password for login
  },
  company: {
    type: String,
    required: true, // The company HR represents
  },
  postedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job', // Array of jobs the HR has posted
  }],
  createdAt: {
    type: Date,
    default: Date.now, // Automatically store account creation date
  },
});

const hr = mongoose.model('HR', hrSchema);
export default hr;
