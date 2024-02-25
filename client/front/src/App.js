import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/saveUsername', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Username saved successfully!');
        alert('saved')
      } else {
        console.error('Error saving username:', result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Username Input</h1>
      <input type="text" placeholder="Enter username" value={username} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Save Username</button>
    </div>
  );
}

export default App;
