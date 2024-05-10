import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-column">
      <h2 style={{ fontSize: '20px' }}><b>About Us</b></h2>
        <ul>
          <li><Link to="/Fyit">FY IT</Link></li>
          <li>231080012, 231080020</li>
          <li>231081039, 231081042</li>
          <li>231081074</li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 style={{ fontSize: '20px' }}><b>Quick Links</b></h2>
        <ul>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/professor">Professors</Link></li>
          <li><Link to="/Announcements">Announcements</Link></li>
          <li><Link to="/calendar">Calender</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 style={{ fontSize: '20px' }}><b>Follow Us</b></h2>
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
