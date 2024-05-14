import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
const Navbar2 = () => {
  return (
<header class="header">
<Link to="/studentlogin"><img src={logo} style={{ maxWidth: '240px' }}></img></Link>
      <ul class="main-nav1">
          <li><Link className='navbar-student' to="/studentlogin/info">Info</Link></li>
          <li><Link className='navbar-student' to="/studentlogin/registration">Registration</Link></li>
          <li><Link className='navbar-student' to="/studentlogin/Announcements">Announcements</Link></li>
          <li><Link className='navbar-student' to="/studentlogin/calendar">Calendar</Link></li>
          <div className="login-button">
                <Link  className='navbar-student' to="/">Logout</Link>
                  </div>
      </ul>
	</header> 
  );
}

export default Navbar2;