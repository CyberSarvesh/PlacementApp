import express from 'express'; 
import { config } from 'dotenv';
import mongoose from 'mongoose';
import CompanyInfo from './routes/CompanyInfo.js';
import userInfo from './routes/userInfo.js';
import companyLocation from './routes/companyLocation.js';
//import userFilterGrade from './routes/userFilterGrade.js';
import authRoutes from './routes/auth.js';

config();

const PORT = process.env.PORT || 3000;
const app = express();
const dbURL = process.env.dbURL;

app.use(express.json());

// Connect to the MongoDB database
mongoose
    .connect(dbURL)
    .then(() => {
        console.log("Database connected successfully on URL %s", dbURL);
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

// Existing routes
app.get("/api/companyinfo", CompanyInfo);
app.get("/api/userinfo", userInfo);
app.get('/api/companies/location/:location', companyLocation);
//app.get("/api/eligibility/:min_cgpa/:min_highschool_score", userFilterGrade);

// Use authentication routes
app.use('/api/auth', authRoutes);

// Route to add a new company
app.post("/api/company", async (req, res) => {
    const { companyName, companyLogo, companyDescription, contact_info, location, eligibility } = req.body;

    try {
        const newCompany = new Company({
            companyName,
            companyLogo,
            companyDescription,
            contact_info,
            location,
            eligibility
        });

        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (err) {
        res.status(500).json({ error: "Error adding new company." });
    }
});

// Route to add a new user
app.post("/api/user", async (req, res) => {
    const { firstName, lastName, email, password, cgpa, collegeId } = req.body;

    try {
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            cgpa,
            collegeId
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: "Error adding new user." });
    }
});

// Listen to the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
