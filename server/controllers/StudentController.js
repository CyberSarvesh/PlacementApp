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
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    // Check for required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "One of the fields not passed" });
    }

    // Check if the student already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) { // Check if existingStudent is truthy
      return res.status(400).json({ message: "There is a user with this email" });
    }

    // Create a new student if no existing student is found
    const newStudent = new Student({ name, email, password });
    await newStudent.save();
    
    res.status(201).json({ message: "Student created successfully." });
  } catch (error) {
    console.error("Error creating student:", error); // Log the error
    res.status(500).json({ message: "Error creating student", error: error.message });
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
    const { email } = req.params; // Get email from params
    const student = await Student.findOneAndDelete({ email: email });
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
