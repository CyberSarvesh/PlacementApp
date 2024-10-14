import Student from '../models/student.js';
import Job from '../models/Job.js';

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students' });
  }
};

// Get a student by ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student' });
  }
};

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: 'Error creating student' });
  }
};

// Update a student by ID
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: 'Error updating student' });
  }
};

// Delete a student by ID
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student' });
  }
};

// Apply for a job
export const applyForJob = async (req, res) => {
  try {
    const job = await Job.findById(req.body.jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    student.appliedJobs.push(req.body.jobId);
    await student.save();

    res.json({ message: 'Applied for job successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error applying for job' });
  }
};
