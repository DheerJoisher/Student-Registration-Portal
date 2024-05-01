import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>123 University Ave,</p>
        <p>City, Country</p>
        <p>Email: info@bbcuniversity.com</p>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Professors</a></li>
          <li><a href="#">Calendar</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
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