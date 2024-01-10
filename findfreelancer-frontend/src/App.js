import './App.css';
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import { AuthProvider } from './components/AuthContext';

const App = () => {
  const handleRegistration = (user) => {
    console.log('User registered:', user);
  };

  const handleLogin = (user) => {
    console.log('User logged in:', user);
  };

  return (
    <AuthProvider>
      <div>
        <h1>FindFreelancer</h1>
        <RegistrationForm onRegistration={handleRegistration} />
        <LoginForm onLogin={handleLogin} />
      </div>
    </AuthProvider>
  );
};

export default App;
