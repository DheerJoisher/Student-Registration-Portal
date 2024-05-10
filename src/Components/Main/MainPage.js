import React, { useEffect, useState } from 'react';
import './MainPage.css'; // Import your CSS file
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';
import Footer from './../../Components/Footer/Footer';

function MainPage() {
  const [heroActive, setHeroActive] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY;

          if (scrollPos > 200) {
            if (!heroActive) {
              setHeroActive(true);
              document.getElementById('mainNav').style.backgroundColor = 'rgba(33, 37, 41, 1)';
              if (window.innerWidth < 956) return;
              document.getElementById('logoImg').classList.add('consize');
            }
          } else {
            if (heroActive) {
              setHeroActive(false);
              document.getElementById('mainNav').style.backgroundColor = 'transparent';
              if (window.innerWidth < 956) return;
              document.getElementById('logoImg').classList.remove('consize');
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroActive]);

  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark p-3" id="mainNav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Divi Logo" id="logoImg" />
          </a>
            <ul>
              <ul className="main-nav">
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/professor">Professors</Link></li>
              <li><Link to="/Announcements">Announcements</Link></li>
              <li><Link to="/calendar">Calender</Link></li>
                <li>
                  <div className="login-button">
                    <a href='http://127.0.0.1:5500/src/SRP%20Login%20Page.html'>Login</a>
                  </div>
                </li>
              </ul>
            </ul>
        </div>
      </nav>

      <div id="hero" className={heroActive ? 'active' : ''}>
        <h1 className="display-3">
          Welcome to Our University!!
        </h1>
      </div>
      <div className="vh-100"></div>
    </div>
    <Footer />
    </>
  );
}

export default MainPage;
