import React from 'react';
import './button.css';

function Button({ icon, name, bgColor, color, onClick }) {
  return (
    <button className="mainBtn" style={{ color: color, background: bgColor }} onClick={onClick}>
      {icon} {name}
    </button>
  );
}

export default Button;
