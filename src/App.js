import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import 'swiper/css';

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  const [scroll, setScroll] = useState(0);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  useEffect(() => {
    fetch('https://movie-website-ten-iota.vercel.app/data/movieData.json')
      .then(res => res.json())
      .then(data => {
        setAllMovies(data);
      })
      .catch(e => console.log(e.message));
  }, []);

  const handleSlideChange = id => {
    console.log(`Slide change triggered for id: ${id}`);
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
    <>
      <Header scroll={scroll} handleSlideChange={handleSlideChange} />
      <Banner handleSlideChange={handleSlideChange} allMovies={allMovies} />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </>
  );
}

export default App;

