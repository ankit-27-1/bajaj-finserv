import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://your-backend-url/bfhl', { data: JSON.parse(input) });
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const renderResponse = () => {
    if (!response) return null;
    return (
      <div>
        {selectedOptions.includes('Numbers') && <p>Numbers: {response.numbers.join(', ')}</p>}
        {selectedOptions.includes('Alphabets') && <p>Alphabets: {response.alphabets.join(', ')}</p>}
        {selectedOptions.includes('Highest lowercase alphabet') && <p>Highest lowercase alphabet: {response.highest_lowercase_alphabet.join(', ')}</p>}
      </div>
    );
  };

  return (
    <div>
      <h1>Your Roll Number</h1>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <select multiple={true} value={selectedOptions} onChange={(e) => setSelectedOptions([...e.target.selectedOptions].map(option => option.value))}>
        <option value="Numbers">Numbers</option>
        <option value="Alphabets">Alphabets</option>
        <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
      </select>
      {renderResponse()}
    </div>
  );
};

export default App;
