const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true, // Admin name
  },
  email: {
    type: String,
    required: true,
    unique: true, // Each admin must have a unique email
  },
  password: {
    type: String,
    required: true, // Password for login
  },
  role: {
    type: String,
    default: 'admin', // Set a default role as 'admin'
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically store account creation date
  },
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
