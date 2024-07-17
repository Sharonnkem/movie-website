import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import './signin.css';

function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    console.log('Form submitted:', formData);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="signin-container">
      <div className="close-button" onClick={handleClose}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <h2>Welcome <span>Back!</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Username or email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Username or email"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your password"
            required
          />
        </div>
        <div className="button"><Button name="Sign in" type="submit" /></div>
      </form>
      <div className="signup">
      <Link to="/signup">
          <p><ion-icon name="log-in-outline"></ion-icon> Sign up</p>
        </Link>
        <Link to="/password">
        <p><a href="/">Forget password?</a></p>
        </Link>
      </div>
    </div>
  );
}

export default Signin;
