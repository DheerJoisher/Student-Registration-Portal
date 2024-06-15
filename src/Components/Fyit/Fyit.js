import React from 'react';
import paanchi from './paanchi.jpg';
import pratham from './pratham.jpg';
import dheer from './dheer.jpg';
import sahil from './sahil.jpg'
import vaishvi from './vaishvi.jpeg'
import Navbar1 from './../../Components/Navbar/Navbar1';
import Footer from './../../Components/Footer/Footer';

export default function ProfileCard() {
  return (
    <>
    
      <h1 style={{ color: '#222222', textAlign: 'center', fontFamily: 'Arial', fontSize: '50px' }}>Meet the Team!</h1>

      <div style={containerStyle}>
        {/* Professor 1 */}
        <div style={profileStyle}>
          <img src={dheer} alt="Dheer" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color:'aqua' }}>Dheer Joisher, 231080020</h1>
          <p style={pstyles}>
          The visionary coder who turns coffee into code, leading the team with innovation and precision.
          <div style={iconContainerStyle}> 
            <a href="https://github.com/dheerjoisher">
              <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/dheer-joisher-974883289/">
              <img src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png' style={iconStyle} />
            </a>
            </div>
          </p>
        </div>

        <div style={profileStyle}>
          <img src={paanchi} alt="Paanchi" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color:'aqua' }}> Paanchi Nahar, 231081042</h1>
          <p style={pstyles}>
           The creative mind crafting user-friendly interfaces, bringing elegance to every design element.
          <div style={iconContainerStyle}> 
            <a href="https://github.com/PaanchiNahar">
              <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/dheer-joisher-974883289/">
              <img src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png' style={iconStyle} />
            </a>
            </div>
          </p>
        </div>

        <div style={profileStyle}>
          <img src={vaishvi} alt="Paanchi" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' , color:'aqua'}}>Vaishvi Khandelwal, 231081074</h1>
          <p style={pstyles}>
          The meticulous organizer behind the scenes, ensuring seamless integration and functionality.
          <div style={iconContainerStyle}> 
            <a href="https://github.com/vaishvi2811">
              <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/vaishvi-khandelwal-476a96285/">
              <img src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png' style={iconStyle} />
            </a>
            </div>
          </p>
        </div>

        <div style={profileStyle}>
          <img src={pratham} alt="Pratham" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color:'aqua' }}>Pratham Bhamare, 231080012</h1>
          <p style={pstyles}>
          The problem-solving wizard, transforming complex challenges into elegant solutions with ease.
          <div style={iconContainerStyle}> 
            <a href="https://github.com/PrathamBhamare">
              <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/dheer-joisher-974883289/">
              <img src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png' style={iconStyle} />
            </a>
            </div>
          </p>
        </div>

        <div style={profileStyle}>
          <img src={sahil} alt="Sahil" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color:'aqua' }}>Sahil Langhe, 231080039</h1>
          <p style={pstyles}>
          The steadfast backbone of the team, offering invaluable assistance in crafting and fine-tuning component.
          <div style={iconContainerStyle}> 
            <a href="https://github.com/PrathamBhamare">
              <img src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/dheer-joisher-974883289/">
              <img src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png' style={iconStyle} />
            </a>
            </div>
          </p>
        </div>

      </div>
     
    </>
  )
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  marginBottom: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '20px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#808080',
};

const profileStyle = {
  backgroundColor: 'black',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '10px' ,
  height: '400px', // Set a fixed height for all images
  objectFit: 'cover', // Ensure images maintain aspect ratio and cover the container
};

const linkStyle = {
  textDecoration: 'none',
  color: '#0077b5',
  fontSize: '15px',
  marginBottom: '0px',
  marginTop: '0px',
};

const pstyles = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '16px',
  marginBottom: '0px',
  marginTop: '0px',
};

const iconStyle = {
  width: '80px', // Set the width to make it the size of an icon
  objectFit: 'contain',
  height: '70px', // Ensure height adjusts automatically to maintain aspect ratio
  marginRight: '10px',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};



//   <div style={containerStyle}>
//     <div style={profileStyle}>
//       <img
//         src={paanchi}
//         alt="UI/UX"
//         style={imageStyle}
//       />
//       <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}> Paanchi Nahar </h1>
//       <p style={pstyles}>
//         <a href="https://github.com/PaanchiNahar">
//           GitHub Profile
//         </a>
//       </p>
//     </div>
//   </div>

  
//   <div style={containerStyle}>
//     <div style={profileStyle}>
//       <img
//         src={vaishvi}
//         alt="UI/UX"
//         style={imageStyle}
//       />
//       <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Vaishvi Khandelwal</h1>
//       <p style={pstyles}>
//         <a href="https://github.com/vaishvi2811">
//           GitHub Profile
//         </a>
//       </p>
//     </div>
//   </div>

  
//   <div style={containerStyle}>
//     <div style={profileStyle}>
//       <img
//         src={pratham}
//         alt="UI/UX"
//         style={imageStyle}
//       />
//       <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Pratham Bhamare</h1>
//       <p style={pstyles}>
//         <a href="https://github.com/PrathamBhamare">
//           GitHub Profile
//         </a>
//       </p>
//     </div>
//   </div>

  
//   <div style={containerStyle}>
//     <div style={profileStyle}>
//       <img
//         src={sahil}
//         alt="UI/UX"
//         style={imageStyle}
//       />
//       <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Sahil Langhe</h1>
//       <p style={pstyles}>
//         <a href="https://github.com/dheerjoisher">
//           GitHub Profile
//         </a>
//       </p>
//     </div>
//   </div>
//   <Footer />

//   </>

// );

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   border: '1px solid #ccc',
//   padding: '20px',
// };

// const profileStyle = {
//   textAlign: 'center',
// };

// const imageStyle = {
//   width: '200px',
//   borderRadius: '50%',
// };

// const pstyles = {
//   fontSize: '16px',
// };

// export default ProfileCard; */}
