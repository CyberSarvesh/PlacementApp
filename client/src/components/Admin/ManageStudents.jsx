import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/userinfo');
      setUsers(response.data);
    } catch (err) {
      setError('Error fetching user data');
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Manage Users</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>First Name:</strong> {user.firstName} <br />
            <strong>Last Name:</strong> {user.lastName} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>CGPA:</strong> {user.cgpa} <br />
            <strong>College ID:</strong> {user.collegeId}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
