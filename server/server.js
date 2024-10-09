// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Import your models
import User from './models/User.js';
import Job from './models/Job.js';
import Application from './models/Application.js';

config();

//Importing routes in this:
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationsRoutes.js";


// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies


// MongoDB Connection
const dbURL = process.env.dbURL || "mongodb://localhost:27017/placement-app"; // Replace with your MongoDB URI
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log('MongoDB connection error:', err));


//Routes for all users in ./routes/userRoutes.js
app.get("/api/users",userRoutes);
//Routes for all companies in ./routes/companyRoutes.js
app.use('/api/jobs', jobRoutes); 
//Routes for all applications in ./routes/applicationRoutes.js
app.use('/api/applications', applicationRoutes);

const PORT=process.env.PORT || 3000;
app.listen(`The website is running on port:${PORT}`);
