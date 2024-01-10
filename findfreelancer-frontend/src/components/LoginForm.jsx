import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // TODO: Implement API call to authenticate the user
    // Example: const response = await AuthService.login({ email, password });

    // Simulate successful login for demonstration
    const response = { success: true, user: { email } };

    if (response.success) {
      onLogin(response.user);
    } else {
      // Handle login failure
      console.error('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
