import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import './signUp.css';

function SignUp() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', passwordRepeat: '' });
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
    console.log('Form submitted:', formData);
    navigate('/');
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="close-button" onClick={handleClose}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <h2>Create <span>New Account</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
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
        <div className="input-container">
          <label htmlFor="passwordRepeat">Repeat your password</label>
          <input
            type="password"
            id="passwordRepeat"
            name="passwordRepeat"
            value={formData.passwordRepeat}
            onChange={handleChange}
            placeholder="Repeat your password"
            required
          />
        </div>
        <div className="button"><Button name="Sign Up" type="submit" /></div>
      </form>
      <div className="signup">
      <p> Have an account?</p>
      <Link to="/signin">
      <p><a href="/signin">Sign in now!</a></p>
      </Link>
      </div>
    </div>
  );
}

export default SignUp;
