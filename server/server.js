import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import HrRoutes from './routes/HrRoutes.js';
import studentRoutes from './routes/StudentRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express(); // Initialize app before using it
const PORT = process.env.PORT || 3000;
const dbURL = process.env.dbURL || 'mongodb://localhost:27017/placementapp'; // Default MongoDB port is 27017

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbURL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use('/api/student', studentRoutes);
app.use('/api/hr', HrRoutes);
app.use('/api/admin', adminRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`The server/backend is running on Port: ${PORT}`);
});
