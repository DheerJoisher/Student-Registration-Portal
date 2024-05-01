import React from 'react';
import './MainPage.css';
import img from './img.png';
import { Link } from 'react-router-dom';
export default function MainPage() {
  return (
    <div className="main-page-container">
      <div className="main-content">
        <div className="text-content">
          <h2 >Welcome to Our University</h2>
          <p>This is the text content section.<br/> You can add any information you want to display here.</p>
          <div className="login-button">
          <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="image-content">
          <img src={img} alt="University Image"/>
        </div>
      </div>
    </div>
  );
}
