import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
const Navbar3 = () => {
  return (
<header class="header">
<Link to="/Teachlogin"><img src={logo} style={{ maxWidth: '240px' }}></img></Link>
      <ul class="main-nav1">
          <li><Link className='navbar-teach' to="/Teachlogin/info">Info</Link></li>
          <li><Link className='navbar-teach' to="/Teachlogin/Announcements">Announcements</Link></li>
          <li><Link className='navbar-teach' to="/Teachlogin/calendar">Calender</Link></li>
          <div className="login-button">
                  <Link className='navbar-teach' to="/">Logout</Link>
                  </div>
      </ul>
	</header> 
  );
}

export default Navbar3;