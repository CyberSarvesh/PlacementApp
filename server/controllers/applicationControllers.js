import Application from '../models/Application.js';
import Job from '../models/Job.js';
import User from '../models/User.js';

// Function to create a new application
export const createApplication = async (req, res) => {
    const { userId, jobId } = req.body;

    try {
        // Check if the job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a new application
        const newApplication = new Application({ userId, jobId });
        await newApplication.save();

        res.status(201).json(newApplication);
    } catch (error) {
        res.status(400).json({ message: 'Error creating application', error });
    }
};

// Function to get all applications
export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().populate('userId jobId');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving applications', error });
    }
};

// Function to get applications by user ID
export const getApplicationsByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const applications = await Application.find({ userId }).populate('jobId');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving applications', error });
    }
};

// Function to get applications by job ID
export const getApplicationsByJobId = async (req, res) => {
    const { jobId } = req.params;

    try {
        const applications = await Application.find({ jobId }).populate('userId');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving applications', error });
    }
};

// Function to delete an application
export const deleteApplication = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedApplication = await Application.findByIdAndDelete(id);
        if (!deletedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting application', error });
    }
};
