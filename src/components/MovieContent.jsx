import React, { useState } from 'react';
import './movieContent.css';
import Button from './Button';
import Modal from './Modal';

function MovieContent({ movie }) {
  const [activeButton, setActiveButton] = useState(null);
  const [modal, setModal] = useState(false);

  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null); // Deselect the button if it's already selected
    } else {
      setActiveButton(buttonName); // Select the new button
    }
  };

  const toggleModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <div className={`content ${movie.active ? 'active' : ''}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span><i>{movie.ageLimit}</i></span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button 
          icon={<ion-icon name="play-outline"></ion-icon>} 
          name="Trailer" 
          color="#48a888" 
          bgColor="#ffffff" 
          onClick={toggleModal}
        />
        <Button 
          icon={<ion-icon name="play-outline"></ion-icon>} 
          name="UpCloud" 
          color={activeButton === 'UpCloud' ? '#48a888' : '#ffffff'} 
          bgColor={activeButton === 'UpCloud' ? '#ffffff' : '#48a888'} 
          onClick={() => handleButtonClick('UpCloud')} 
        />
        <Button 
          icon={<ion-icon name="play-outline"></ion-icon>} 
          name="MegaCloud" 
          color={activeButton === 'MegaCloud' ? '#48a888' : '#ffffff'} 
          bgColor={activeButton === 'MegaCloud' ? '#ffffff' : '#48a888'} 
          onClick={() => handleButtonClick('MegaCloud')} 
        />
      </div>
      {movie.active && <Modal movie={movie} status={modal} toggleModal={toggleModal} />}
    </div>
  );
}

export default MovieContent;
