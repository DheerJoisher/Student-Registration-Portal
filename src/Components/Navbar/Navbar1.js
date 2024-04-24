import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Button1 = () => {
  return (
<header class="header">
		<h1 class="logo"><b><a href="#">Byte Bandits University</a></b></h1>
      <ul class="main-nav">
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/professor">Professors</Link></li>
          <li><Link to="/Announcements">Announcements</Link></li>
          <li><Link to="/calendar">Calender</Link></li>
      </ul>
	</header> 
  );
}

export default Button1;