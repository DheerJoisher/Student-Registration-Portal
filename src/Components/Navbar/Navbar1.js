import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
const Navbar1 = () => {
  return (
<header class="header">
<Link to="/"><img src={logo} style={{ maxWidth: '240px' }}></img></Link>
      <ul class="main-nav1">
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/professor">Professors</Link></li>
          <li><Link to="/Announcements">Announcements</Link></li>
          <li><Link to="/calendar">Calender</Link></li>
          <div className="login-button">
                   <Link to="/logn">Login</Link>
                  </div>
      </ul>
	</header> 
  );
}

export default Navbar1;