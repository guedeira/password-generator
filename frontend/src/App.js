import React, { useState } from 'react';
import Form from './components/Form/Form';
import PasswordDisplay from './components/PasswordDisplay/PasswordDisplay';
import { generatePassword } from './services/api';

function App() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (criteria) => {
    setLoading(true);
    setError('');
    try {
      const generatedPassword = await generatePassword(criteria);
      setPassword(generatedPassword);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px'}}>
      <h1> Gerador de Senhas</h1>
      <Form onSubmit={handleFormSubmit} />
      {loading && <p>Gerando senha...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <PasswordDisplay password={password} />
    </div>
  );
}

export default App;
