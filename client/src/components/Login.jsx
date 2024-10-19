import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine user type based on the email domain or specific criteria
    const userType = email.includes('@admin.com') ? 'admin' :
                     email.includes('@hr.com') ? 'hr' :
                     email.includes('@student.com') ? 'student' : null;

    if (!userType) {
      setMessage('Invalid email. Please try again.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/${userType}/email/${email}`);
      const user = response.data; // This will include the password now
      console.log(user);
      // Compare the provided password with the fetched password
      if (user.password !== password) {
        console.error('Invalid credentials');
        setMessage('Invalid credentials. Please try again.');
      } else {
        console.log('Login successful:', user);
        setMessage('Login successful!');

        // Redirect to the appropriate dashboard based on user type
        if (userType === 'admin') {
          navigate('/admin-dashboard');
        } else if (userType === 'student') {
          navigate('/student-dashboard');
        } else if (userType === 'hr') {
          navigate('/hr-dashboard');
        }
      }
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : error.message);
      setMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Placement Portal</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p className="register-link">
        Not registered? <a href="/register">Register here</a>
      </p>
      <p className="reset-password">
        <a href="/reset-password">Forgot Password?</a>
      </p>
    </div>
  );
};

export default Login;
