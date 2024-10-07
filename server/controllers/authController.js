// controllers/authController.js
import User from '../models/user.js'; // Adjust path as needed
import bcrypt from 'bcrypt';

// Register User
export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, cgpa, collegeId } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            cgpa,
            collegeId
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Optionally, you can send back user data excluding the password
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
