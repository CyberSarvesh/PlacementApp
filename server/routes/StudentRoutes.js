import express from 'express';
import { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, applyForJob } from '../controllers/StudentController.js';

const router = express.Router();

// Get all students
router.get('/', getStudents);

// Get a single student by ID
router.get('/:id', getStudentById);

// Create a new student
router.post('/', createStudent);

// Update a student by ID
router.put('/:id', updateStudent);

// Delete a student by ID
router.delete('/:id', deleteStudent);

// Apply for a job
router.post('/:id/apply', applyForJob);

export default router;
