import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Button1 = () => {
  return (
<header class="header">
		<h1 class="logo1"><b><a href="http://localhost:3000/">Byte Bandits University</a></b></h1>
      <ul class="main-nav1">
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/professor">Professors</Link></li>
          <li><Link to="/Announcements">Announcements</Link></li>
          <li><Link to="/calendar">Calender</Link></li>
          <li><Link to="/carousel">Carousel</Link></li>
      </ul>
	</header> 
  );
}

export default Button1;