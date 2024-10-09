import express from 'express';
import {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob
} from '../controllers/jobController.js';

const router = express.Router();

// Route to create a new job
router.post('/', createJob); // POST /api/jobs

// Route to get all jobs
router.get('/', getAllJobs); // GET /api/jobs

// Route to get a job by ID
router.get('/:id', getJobById); // GET /api/jobs/:id

// Route to update a job
router.put('/:id', updateJob); // PUT /api/jobs/:id

// Route to delete a job
router.delete('/:id', deleteJob); // DELETE /api/jobs/:id

export default router;
