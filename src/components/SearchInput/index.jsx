import axios from 'axios';
import { useState, useEffect } from 'react';
import { StyledList } from './SearchInput.styles';
import _ from 'lodash';

export function SearchInput() {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = _.debounce(async (value) => {
    try {
      const response = await axios.get(`/search?query=${encodeURIComponent(value)}`);
      setResults(response.data);
    } catch (err) {
      setError('An error occurred while searching');
    }
  }, 500);

  const onChange = (e) => {
    setInputValue(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Search..." value={inputValue} onChange={onChange} />
      {error && <div>{error}</div>}
      {results.length > 0 && inputValue.length > 0 && (
        <StyledList>
          {results.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </StyledList>
      )}
    </>
  );
}
