import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState('');

  // Function to fetch companies from the backend
  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/companyinfo');
      setCompanies(response.data);
    } catch (err) {
      setError('Error fetching company data');
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div>
      <h3>Manage Companies</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {companies.map((company) => (
          <li key={company._id}>
            <strong>Company Name:</strong> {company.companyName} <br />
            <strong>Location:</strong> {company.location} <br />
            <strong>Contact Info:</strong> {company.contact_info} <br />
            <strong>Description:</strong> {company.companyDescription}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCompanies;
