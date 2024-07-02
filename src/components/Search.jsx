import React, { useState, useEffect, useCallback } from 'react';
import './search.css';

function Search({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = useCallback((value) => {
    fetch('https://movie-website-ten-iota.vercel.app/data/movieData.json')
      .then(res => res.json())
      .then((json) => {
        const results = json.filter((movie) => {
          return value && movie && movie.title.toLowerCase().includes(value);
        });
        setResults(results);
      });
  }, [setResults]);

  useEffect(() => {
    const handleInput = (e) => {
      const value = e.target.value.toLowerCase();
      setInput(value);
      fetchData(value);
    };

    const inputElement = document.querySelector('.search input');
    inputElement.addEventListener('input', handleInput);
    inputElement.addEventListener('touchstart', handleInput);

    return () => {
      inputElement.removeEventListener('input', handleInput);
      inputElement.removeEventListener('touchstart', handleInput);
    };
  }, [fetchData]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search">
      <input 
        type="text" 
        placeholder="Search" 
        value={input} 
        onChange={handleChange} 
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
