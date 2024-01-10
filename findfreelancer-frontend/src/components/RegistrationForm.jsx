import React, { useState } from 'react';

const RegistrationForm = ({ onRegistration }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    // TODO: Implement API call to register the user
    // Example: const response = await AuthService.register({ email, password });

    // Simulate successful registration for demonstration
    const response = { success: true, user: { email } };

    if (response.success) {
      onRegistration(response.user);
    } else {
      // Handle registration failure
      console.error('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
