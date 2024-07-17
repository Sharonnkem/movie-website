import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import './signin.css';

function Password() {
  const [formData, setFormData] = useState({ email: '' });
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
      <h2>Forgot <span>Password</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        
        <div className="button"><Button name="Submit" type="submit" /></div>
      </form>
      <div className="signup">
      <p> Don't have an account?</p>
      <Link to="/signup">
      <p>Sign up now!</p>
      </Link>
      </div>
    </div>
  );
}

export default Password;
