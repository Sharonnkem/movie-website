import React from 'react';
import './main.css';
import Schedule from './Schedule';
import Trend from './Trend';
import Blog from './Blog';

function Main({ handleSlideChange }) {
  return (
    <main>
      <Schedule handleSlideChange={handleSlideChange} />
      <Trend handleSlideChange={handleSlideChange} />
      <Blog />
    </main>
  );
}

export default Main;
