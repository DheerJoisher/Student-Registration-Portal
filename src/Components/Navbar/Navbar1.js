import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
const Navbar1 = () => {
  return (
<header class="header">
<a href="http://localhost:3000/"><img src={logo} style={{ maxWidth: '240px' }}></img></a>
      <ul class="main-nav1">
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/professor">Professors</Link></li>
          <li><Link to="/Announcements">Announcements</Link></li>
          <li><Link to="/calendar">Calender</Link></li>
          <div className="login-button">
                    <a href='http://127.0.0.1:5500/src/SRP%20Login%20Page.html'>Login</a>
                  </div>
      </ul>
	</header> 
  );
}

export default Navbar1;