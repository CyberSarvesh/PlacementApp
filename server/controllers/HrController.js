import hr from '../models/hr.js';
import Job from '../models/Job.js';
import student from '../models/student.js';

// Get all HRs
export const getHRs = async (req, res) => {
  try {
    const Hr = await hr.find();
    res.json(Hr);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching HRs' });
  }
};

// Get HR by ID
export const getHRById = async (req, res) => {
  try {
    const Hr = await hr.findById(req.params.id);
    if (!Hr) return res.status(404).json({ message: 'HR not found' });
    res.json(hr);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching HR' });
  }
};

// Create a new HR
export const createHR = async (req, res) => {
  try {
    const Hr = new hr(req.body);
    const savedHR = await hr.save();
    res.status(201).json(savedHR);
  } catch (error) {
    res.status(400).json({ message: 'Error creating HR' });
  }
};

// Update HR by ID
export const updateHR = async (req, res) => {
  try {
    const Hr = await hr.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!Hr) return res.status(404).json({ message: 'HR not found' });
    res.json(Hr);
  } catch (error) {
    res.status(400).json({ message: 'Error updating HR' });
  }
};

// Delete HR by ID
export const deleteHR = async (req, res) => {
  try {
    const Hr = await hr.findByIdAndDelete(req.params.id);
    if (!Hr) return res.status(404).json({ message: 'HR not found' });
    res.json({ message: 'HR deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting HR' });
  }
};

// Post a job
export const postJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, hr: req.params.id });
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: 'Error posting job' });
  }
};

// Get applicants for a job posted by this HR
export const getJobApplicants = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job || job.hr.toString() !== req.params.id) {
      return res.status(404).json({ message: 'Job not found or you do not have access' });
    }

    const Students = await student.find({ appliedJobs: req.params.jobId });
    res.json(Students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job applicants' });
  }
};
