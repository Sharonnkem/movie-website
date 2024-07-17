import React from 'react';
import './card.css';

function Card({ movie, slideChange }) {
  const scrollToBanner = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = () => {
    slideChange(movie._id);
    scrollToBanner();
  };

  return (
    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="Preview" className="img-fluid" />
        <p>{movie.length} | {movie.category}</p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="card-icons">
            <ion-icon 
              name="play-outline"
              onClick={handleClick}
            ></ion-icon>
          </div>
          <h4>{movie.date}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
