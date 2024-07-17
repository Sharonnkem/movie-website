import React from 'react';
import SearchResult from './SearchResult';
import './search.css';

function SearchResultList({ results, slideChange, clearResults }) {
  return (
    <div className="results-list">
      {results.map(result => (
        <SearchResult
          key={result._id}
          result={result}
          slideChange={slideChange}
          clearResults={clearResults}
        />
      ))}
    </div>
  );
}

export default SearchResultList;
 