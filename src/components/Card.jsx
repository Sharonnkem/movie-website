import React from 'react';
import './card.css';

function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="Preview" className="img-fluid" />
        <p>{movie.length} | {movie.category}</p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icons">
            <ion-icon name="play-outline"></ion-icon>
          </div>
          <h4>{movie.date}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;