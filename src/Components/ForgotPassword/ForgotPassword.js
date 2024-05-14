import React from 'react';
import styles from './ForgotPassword.module.css'; // Import the CSS module
import img from './img.png';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div style={{ height: '100vh', paddingBottom: '50px', paddingTop: '50px', backgroundColor: '#c9c9c9', fontFamily: 'Arial, sans-serif' }}>
      <div className={styles.mainContent}>
        <div className={styles.textContent} style={{ paddingTop: '100px' }}>
          <h2 style={{color: 'black', fontSize: '40px' }}>
            Error 200!!<br /> Forgot Password
          </h2>
          <p style={{color: 'black', fontSize: '25px' }} className='my-3'>
            Please Contact the <br />Administrative Department
          </p>
          <div>
            <Link to="/" className={styles.hyperlink}>Back to Main Page</Link>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img src={img} alt="Forgot Password" />
        </div>
      </div>
    </div>
  );
}
