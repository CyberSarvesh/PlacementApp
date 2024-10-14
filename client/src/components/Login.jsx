// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const users = [
    { email: 'student@example.com', password: 'student123', role: 'student' },
    { email: 'hr@example.com', password: 'hr123', role: 'hr' },
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setMessage(`Login successful! Welcome, ${user.role}.`);
      if (user.role === 'student') {
        navigate('/student-dashboard');
      } else if (user.role === 'hr') {
        navigate('/hr-dashboard');
      } else {
        navigate('/admin-dashboard');
      }
    } else {
      setMessage('Invalid email or password. Please try again.');
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
