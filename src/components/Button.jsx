import React from 'react';
import './button.css';

function Button({ icon, name, bgColor = '#48a888', color='#ffffff' }) {
  return (
    <a href="/" className="mainBtn" style={{color: color, background: bgColor}}>
        {icon} {name}
      </a>
  );
}

export default Button;