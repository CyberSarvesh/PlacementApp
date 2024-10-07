import express from 'express';
import { getCompaniesByLocation } from '../controllers/companyLocation.js';

const router = express.Router();

// Route to fetch companies by location
router.get('/:location', getCompaniesByLocation);

export default router;
