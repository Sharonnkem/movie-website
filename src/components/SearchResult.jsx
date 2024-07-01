import React from 'react';
import './search.css';
import './searchResult.css';

function SearchResult({ result, slideChange, clearResults }) {
  const handleClick = () => {
    console.log(`Search result clicked for id: ${result._id}`);
    slideChange(result._id);
    clearResults();
  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
    >
      {result.title}
    </div>
  );
}

export default SearchResult;
