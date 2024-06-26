import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h2 style={{ fontSize: '20px', marginBottom: '5px' }}><b>About Us</b></h2>
       <ul> <p>Our team, comprised of dedicated individuals with diverse skills, worked together to develop a Student Registration Portal, 
        focusing on functionality and user satisfaction. </p></ul>

      </div>
      <div className="footer-column">
        <h2 style={{ fontSize: '20px' }}><b>Quick Links</b></h2>
        <ul>
          <li><Link className='footer' to="/courses">Courses</Link></li>
          <li><Link className='footer' to="/professor">Professors</Link></li>
          <li><Link className='footer' to="/Announcements">Announcements</Link></li>
          <li><Link className='footer' to="/calendar">Calender</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 style={{ fontSize: '20px' }}><b>Follow Us</b></h2>
        <ul>
          <li><Link style={{fontWeight: 'bold' ,color: '#bfa75d' }} to="/Fyit">FY IT</Link></li>
          <li>231080012, 231080020</li>
          <li>231081039, 231081042</li>
          <li>231081074</li>
        </ul>
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
