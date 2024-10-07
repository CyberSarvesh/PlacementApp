import Company from '../models/Company.js'; // Adjust path as needed

// Fetch all companies
export const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new company with job details
export const addCompany = async (req, res) => {
    const { 
        companyName, 
        companyLogo, 
        companyDescription, 
        contact_info, 
        location, 
        eligibility, 
        job 
    } = req.body;

    try {
        const newCompany = new Company({
            companyName,
            companyLogo,
            companyDescription,
            contact_info,
            location,
            eligibility,
            job // Job details integrated here
        });

        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(400).json({ error: "Error adding new company: " + error.message });
    }
};
