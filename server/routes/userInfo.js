import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userInfo.js';

const router = express.Router();

// Route to fetch all users
router.get('/', getAllUsers);

// Route to fetch a user by ID
router.get('/:id', getUserById);

export default router;
