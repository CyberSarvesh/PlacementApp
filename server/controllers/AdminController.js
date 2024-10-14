import Admin from '../models/admin.js';
import Student from '../models/student.js';
import HR from '../models/hr.js';
import Job from '../models/Job.js';

// Get all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admins' });
  }
};

// Get admin by ID
export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admin' });
  }
};

// Create a new admin
export const createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(400).json({ message: 'Error creating admin' });
  }
};

// Update admin by ID
export const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json(admin);
  } catch (error) {
    res.status(400).json({ message: 'Error updating admin' });
  }
};

// Delete admin by ID
export const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting admin' });
  }
};

// Manage users (students and HR)
export const manageUsers = async (req, res) => {
  try {
    const students = await Student.find();
    const hr = await HR.find();
    res.json({ students, hr });
  } catch (error) {
    res.status(500).json({ message: 'Error managing users' });
  }
};

// Manage jobs
export const manageJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error managing jobs' });
  }
};
