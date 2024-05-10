import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import paanchi from './paanchi.jpg';
import pratham from './pratham.jpg' ;
import dheer from './dheer.jpg';
import sahil from './sahil.jpg'
import vaishvi from './vaishvi.jpeg'


const ProfileCard = () => (
  <>
  <div style={containerStyle}>
    <div style={profileStyle}>
      <img
        src={dheer}
        alt="UI/UX"
        style={imageStyle}
      />
      <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Dheer Joisher</h1>
      <p style={pstyles}>
        <a href="https://github.com/dheerjoisher">
          <FontAwesomeIcon icon={faGithub} /> GitHub Profile
        </a>
      </p>
    </div>
  </div>
  

  <div style={containerStyle}>
    <div style={profileStyle}>
      <img
        src={paanchi}
        alt="UI/UX"
        style={imageStyle}
      />
      <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}> Paanchi Nahar </h1>
      <p style={pstyles}>
        <a href="https://github.com/PaanchiNahar">
          <FontAwesomeIcon icon={faGithub} /> GitHub Profile
        </a>
      </p>
    </div>
  </div>

  
  <div style={containerStyle}>
    <div style={profileStyle}>
      <img
        src={vaishvi}
        alt="UI/UX"
        style={imageStyle}
      />
      <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Vaishvi Khandelwal</h1>
      <p style={pstyles}>
        <a href="https://github.com/vaishvi2811">
          <FontAwesomeIcon icon={faGithub} /> GitHub Profile
        </a>
      </p>
    </div>
  </div>

  
  <div style={containerStyle}>
    <div style={profileStyle}>
      <img
        src={pratham}
        alt="UI/UX"
        style={imageStyle}
      />
      <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Pratham Bhamare</h1>
      <p style={pstyles}>
        <a href="https://github.com/PrathamBhamare">
          <FontAwesomeIcon icon={faGithub} /> GitHub Profile
        </a>
      </p>
    </div>
  </div>

  
  <div style={containerStyle}>
    <div style={profileStyle}>
      <img
        src={sahil}
        alt="UI/UX"
        style={imageStyle}
      />
      <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Sahil Langhe</h1>
      <p style={pstyles}>
        <a href="https://github.com/dheerjoisher">
          <FontAwesomeIcon icon={faGithub} /> GitHub Profile
        </a>
      </p>
    </div>
  </div>
  

  </>

);

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #ccc',
  padding: '20px',
};

const profileStyle = {
  textAlign: 'center',
};

const imageStyle = {
  width: '200px',
  borderRadius: '50%',
};

const pstyles = {
  fontSize: '16px',
};

export default ProfileCard;
