import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

function Banner({ handleSlideChange, allMovies }) {
  const [activeMovies, setActiveMovies] = useState([]);

  useEffect(() => {
    const filteredActiveMovies = allMovies.filter(movie => movie.active);
    setActiveMovies(filteredActiveMovies);
  }, [allMovies]);

  return (
    <div className="banner">
      {activeMovies && activeMovies.length > 0 &&
        activeMovies.map(movie => (
          <div className="movie" key={movie._id}>
            <img 
              src={movie.bgImg} 
              alt="Background" 
              className={`bgImg ${movie.active ? 'active' : ''}`} 
            />
            <div className={`container-fluid class`}>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} /> 
                </div>
              </div>
            </div>
          </div>
        ))
      }

      {allMovies && allMovies.length > 0 && (
        <MovieSwiper slides={allMovies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
