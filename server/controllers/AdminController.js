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
  console.log(req.body);
  try{
    const {name,email,password}=req.body;
    if(!name | !email | !password){
      res.status(400).json({message:"One of the fields doesnt exist"});
    }
    const existingAdmin=await Admin.findOne({email});
    if(existingAdmin){
      res.status(400).json({message:"There already exist a admin with this email"});
    }
    const newAdmin=new Admin({
      name,email,password
    });
    await newAdmin.save();
    res.status(200).json({message:"A new admin created successfully"});

  }catch(error){
    console.error("Error creating Admin:", error); // Log the error
    res.status(500).json({ message: "Error creating HR", error: error.message });
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
