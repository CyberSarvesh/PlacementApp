import express from 'express';
import { getHRs, getHRById, createHR, updateHR, deleteHR, postJob, getJobApplicants } from '../controllers/HrController.js';

const router = express.Router();

// Get all HRs
router.get('/', getHRs);

// Get a single HR by ID
router.get('/:id', getHRById);

// Create a new HR
router.post('/', createHR);

// Update an HR by ID
router.put('/:id', updateHR);

// Delete an HR by ID
router.delete('/:id', deleteHR);

// Post a job
router.post('/:id/postJob', postJob);

// Get students who applied for a job posted by this HR
router.get('/:id/applicants/:jobId', getJobApplicants);

export default router;
