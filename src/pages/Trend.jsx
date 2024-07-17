import React, { useState, useEffect } from 'react';
import './schedule.css';
import Card from '../components/Card';

function Trend({ handleSlideChange }) {

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch('https://movie-website-ten-iota.vercel.app/data/movieData.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  

  return (
    <section id="TVshow" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">TV Shows</h4>
        </div>
        <div className="row mt-5">
          {movies && movies.length > 0 && 
            movies.map(movie => <Card key={movie._id} movie={movie} slideChange={handleSlideChange} />)
          }  
        </div>
      </div>
    </section>
  );
}

export default Trend;