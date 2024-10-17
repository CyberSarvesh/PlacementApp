import express from 'express';
import {
  getAdmins,
  getAdminByEmail,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  manageUsers,
  manageJobs,
} from '../controllers/AdminController.js';

const router = express.Router();

// Get all admins
router.get('/', getAdmins);

// Get a single admin by email
router.get('/email/:email', getAdminByEmail);  // Updated route

// Create a new admin
router.post('/', createAdmin);

// Update an admin by ID
router.put('/:id', updateAdmin);

// Delete an admin by ID
router.delete('/:id', deleteAdmin);

// Manage all users (HRs and Students)
router.get('/manage/users', manageUsers);

// Manage all jobs
router.get('/manage/jobs', manageJobs);

export default router;
