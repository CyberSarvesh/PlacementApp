import express from 'express';
import { getAllCompanies, addCompany } from '../controllers/companyInfo.js';

const router = express.Router();

// Route to fetch all companies
router.get('/', getAllCompanies);

// Route to add a new company
router.post('/', addCompany);

export default router;
