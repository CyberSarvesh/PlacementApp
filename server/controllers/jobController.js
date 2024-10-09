import Job from '../models/Job.js';

// Function to create a job
export const createJob = async (req, res) => {
    const { title, description, company, location, salary } = req.body;

    try {
        const newJob = new Job({ title, description, company, location, salary, postedBy: req.user._id });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ message: 'Error creating job', error });
    }
};

// Function to get all jobs
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('postedBy', 'name'); // Populate postedBy field with user data
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving jobs', error });
    }
};

// Function to get a job by ID
export const getJobById = async (req, res) => {
    const { id } = req.params;

    try {
        const job = await Job.findById(id).populate('postedBy', 'name');
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving job', error });
    }
};

// Function to update a job
export const updateJob = async (req, res) => {
    const { id } = req.params;
    const { title, description, company, location, salary } = req.body;

    try {
        const updatedJob = await Job.findByIdAndUpdate(id, { title, description, company, location, salary }, { new: true });
        if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: 'Error updating job', error });
    }
};

// Function to delete a job
export const deleteJob = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedJob = await Job.findByIdAndDelete(id);
        if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
    }
};

// Function to get jobs by company
export const getJobsByCompany = async (req, res) => {
    const { companyId } = req.params;

    try {
        const jobs = await Job.find({ postedBy: companyId }).populate('postedBy', 'name');
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving jobs', error });
    }
};
