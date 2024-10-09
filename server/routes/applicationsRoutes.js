import express from 'express';
import {
    createApplication,
    getAllApplications,
    getApplicationsByUserId,
    getApplicationsByJobId,
    deleteApplication
} from '../controllers/applicationController.js';

const router = express.Router();

// Route to create a new application
router.post('/', createApplication); // POST /api/applications

// Route to get all applications
router.get('/', getAllApplications); // GET /api/applications

// Route to get applications by user ID
router.get('/user/:userId', getApplicationsByUserId); // GET /api/applications/user/:userId

// Route to get applications by job ID
router.get('/job/:jobId', getApplicationsByJobId); // GET /api/applications/job/:jobId

// Route to delete an application
router.delete('/:id', deleteApplication); // DELETE /api/applications/:id

export default router;
