import React from 'react';
import './movieContent.css';
import Button from './Button';


function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? 'active' : undefined}`}>
    <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
    <h4>
    <span>{movie.year}</span>
    <span><i>{movie.ageLimit}</i></span>
    <span>{movie.length}</span>
    <span>{movie.category}</span>
    </h4>
    <p>
    {movie.description}
    </p>
    <div className="button">
      <Button icon={<ion-icon name="play-outline"></ion-icon>} 
      name='Trailer' 
      color='#ff3700' 
      bgColor='#ffffff' />
      <Button icon={<ion-icon name="play-outline"></ion-icon>} 
      name='UpCloud' 
       />
      <Button icon={<ion-icon name="play-outline"></ion-icon>} 
      name='MegaCloud' 
       />
    </div>
  </div>
  );
}

export default MovieContent;