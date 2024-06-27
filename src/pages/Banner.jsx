import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

function Banner() {
  const [allMovies, setAllMovies] = useState([]);
  const [activeMovies, setActiveMovies] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3000/data/movieData.json')
      .then(res => res.json())
      .then(data => {
        setAllMovies(data);
        const filteredActiveMovies = data.filter(movie => movie.active);
        setActiveMovies(filteredActiveMovies);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // This useEffect will run whenever allMovies changes
  useEffect(() => {
    const filteredActiveMovies = allMovies.filter(movie => movie.active);
    setActiveMovies(filteredActiveMovies);
  }, [allMovies]);

  const handleSlideChange = id => {
    const newMovies = allMovies.map(movie => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setAllMovies(newMovies);
  };

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
