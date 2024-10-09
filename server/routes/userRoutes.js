import express from 'express';
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

const router = express.Router();

// Route to create a new user
router.post('/', createUser); // POST /api/users

// Route to get all users
router.get('/', getAllUsers); // GET /api/users

// Route to get a user by ID
router.get('/:id', getUserById); // GET /api/users/:id

// Route to update a user
router.put('/:id', updateUser); // PUT /api/users/:id

// Route to delete a user
router.delete('/:id', deleteUser); // DELETE /api/users/:id

export default router;
