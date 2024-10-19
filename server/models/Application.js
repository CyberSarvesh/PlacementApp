
import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  studentId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', 
    required: true 
  },
  jobId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true 
  },
  status: { 
    type: String,
    enum: ['Applied', 'Interviewed', 'Accepted', 'Denied'],
    default: 'Applied'
  },
  appliedDate:{ 
    type: Date, default: Date.now
  },
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
