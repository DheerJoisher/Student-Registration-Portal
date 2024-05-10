import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
const Navbar2 = () => {
  return (
<header class="header">
<a href="http://localhost:3000/"><img src={logo} style={{ maxWidth: '240px' }}></img></a>
      <ul class="main-nav1">
          <li><Link to="/studentlogin/info">Info</Link></li>
          <li><Link to="/studentlogin/registration">Registration</Link></li>
          <li><Link to="/studentlogin/Announcements">Announcements</Link></li>
          <li><Link to="/studentlogin/calendar">Calender</Link></li>
          <div className="login-button">
                    <a href='http://localhost:3000/'>Logout</a>
                  </div>
      </ul>
	</header> 
  );
}

export default Navbar2;