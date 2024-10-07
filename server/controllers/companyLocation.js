import Company from '../models/Company.js'; // Adjust path as needed

// Fetch companies by location
export const getCompaniesByLocation = async (req, res) => {
    const { location } = req.params;

    try {
        const companies = await Company.find({ location });
        if (companies.length === 0) {
            return res.status(404).json({ message: 'No companies found in this location' });
        }
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
