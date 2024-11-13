import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (password) => {
    const criteria = [/.{8,}/, /[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/];
    const strengthLevels = ['Weak', 'Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
    setStrength(strengthLevels[criteria.filter((regex) => regex.test(password)).length]);
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          checkPasswordStrength(e.target.value);
        }}
        placeholder="Enter your password"
      />
      <div>Password Strength: {strength}</div>
    </div>
  );
};

export default App;
