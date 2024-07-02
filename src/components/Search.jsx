import React, { useState } from 'react';
import './search.css';

function Search({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch('https://movie-website-ten-iota.vercel.app/data/movieData.json')
      .then(res => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.title.toLowerCase().includes(value);
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
