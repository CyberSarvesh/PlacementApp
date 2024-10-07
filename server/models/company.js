import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        unique: true,
        required: true
    },
    companyLogo: {
        type: String // URL or path to the logo image
    },
    companyDescription: {
        type: String
    },
    contact_info: {
        type: String // Consider using a more appropriate type for contact info
    },
    location: {
        type: String
    },
    eligibility: {
        min_cgpa: {
            type: Number
        },
        min_highschool_score: {
            type: Number
        }
    },
    // Job information integrated into the company model
    job: {
        position: {
            type: String,
            required: true // Position of the job
        },
        description: {
            type: String,
            required: true // Description of the job
        },
        requirements: [{
            type: String // Array of requirements for the job
        }],
        deadline: {
            type: Date // Application deadline for the job
        }
    },
}, { timestamps: true });

const Company = mongoose.model('Company', companySchema);
export default Company;
