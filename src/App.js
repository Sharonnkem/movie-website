import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'swiper/css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Password from './pages/Password';


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
      movie.active = movie._id === id;
      return movie;
    });
    setAllMovies(newMovies);
  };

  return (
    <Router>
      <Header scroll={scroll} handleSlideChange={handleSlideChange} />
      <Routes>
        <Route path="/" element={
          <>
            <Banner handleSlideChange={handleSlideChange} allMovies={allMovies} />
            <Main handleSlideChange={handleSlideChange} />
          </>
        } />
        <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/password" element={<Password/>} />

      </Routes>
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </Router>
  );
}

export default App;
