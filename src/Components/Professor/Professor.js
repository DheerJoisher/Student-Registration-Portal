import React from 'react';

export default function Professor() {
  return (
    <>
      <h1 style={{textAlign: 'center',fontFamily:'Arial',fontSize:'50px'}}>Meet Your Professors</h1>
      
      <div style={containerStyle}>
        {/* Professor 1 */}
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/eKyvMQTe1ogYjKrf9" alt="Priya Patel" style={imageStyle} />
          <h2>Mrs. Priya Patel</h2>
          <p>Associate Professor of Statistics and Mathematics</p>
          <p>Department of Mathematics, College of Engineering </p>
          <p><a href="mailto:erodriguez@university.edu" style={linkStyle}>PriyaPatel@university.edu</a></p>
          <p><a href="https://www.emilyrodriguezresearch.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.PriyaPateresearch.com</a></p>
        </div>
      
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/mffud6vSvFDxFJfb8" alt="Dr. Arun Malik" style={imageStyle} />
          <h2>Dr. Arun Malik</h2>
          <p>Professor of Computer Science</p>
          <p>Department of Computer Science, Lovely Professional University </p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>ArunMalik@university.edu</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.ArunMalikchangcs.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/wYsu78LoWe6VCC6s8" alt="Anupama A.L" style={imageStyle} />
          <h2>Mrs.Anupama A.L</h2>
          <p>Assistant Professor of English </p>
          <p>Department of English Litrature, Saraswathi College of Arts and Science </p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>Anupama@university.edu</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.Anupamaenglishlit.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/C6eEkqhnDmz87YuZA" alt="Gaurav Gupta" style={imageStyle} />
          <h2>Mr.Gaurav Gupta</h2>
          <p>Professor of Computer Science</p>
          <p>Department of Physics faculty , College of Engineering</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>GauravGupta@gmail.com</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.GauravGuptaphysicsdep.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/BqYBL5JU8kthNKL4A" alt="Arjun kumar" style={imageStyle} />
          <h2>Dr. Arjun kumar</h2>
          <p>Professor of Mechanical Engineering</p>
          <p>Department of Mechanical Engineering , MIT College of Engineering</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}> Arjunkumar@MITuniversity.edu</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www. ArjunkumarMITdepofmech.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/8Tbf7sETPyiQQZFt6" alt="Meet Jordan Budhu" style={imageStyle} />
          <h2>Prof.Meet Jordan Budhu</h2>
          <p>Professor of new electrical and computer engineering </p>
          <p>Department of new electrical Computer Science, VIIT College of Engineering</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>MeetJordanBudhu@university.edu</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.MeetJordanBudhuElectircal.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/xXS38RWZxyq214rs6" alt="Rakesh Vaid " style={imageStyle} />
          <h2>Dr. Rakesh Vaid</h2>
          <p>Professor of Electronics,</p>
          <p>Department of Electronics Science,  University of Jammu and Kashmir</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>RakeshVaid@university.edu</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.RakeshVaidelectronics.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/5yWT8vZ5qWTzpSkT7" alt="amruta gharge" style={imageStyle} />
          <h2>Mrs.Amruta Gharge</h2>
          <p>Professor of History and Litrature</p>
          <p>Department of Arts, College of Arts and Litrature</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>amrutagharghe05@gmail.com</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.amrutaghargehistoruylit.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/ZAuwa5PGoecoTuqC6" alt="Vinayak Sharma" style={imageStyle} />
          <h2>Prof.Vinayak Sharma </h2>
          <p>Professor of Information Technology</p>
          <p>Department of Information Technology, VJTI College of Engineering</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>Vinayaks@vjti.edu.ac.in</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.vinayak05it.ac.in.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/Ns3ZhJJKj7v6xf1D8" alt="Sneha Singh" style={imageStyle} />
          <h2>Mrs. Sneha Singh</h2>
          <p>Professor of Mathematics</p>
          <p>Department of Computer Science,Indian Institute of Technology, Delhi</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>snehasmath@delhiuniversity.edu</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.snehasinghmathematician.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://images.app.goo.gl/iuDCXjKYssv8mFYx5" alt=" Himanshu Rai" style={imageStyle} />
          <h2>Mr.Himanshu Rai</h2>
          <p>Professor of Engineering graphics</p>
          <p>Department of Computer Science, MIT College of Engineering</p>
          <p><a href="mailto:mchang@university.edu" style={linkStyle}>HIMANSHUGRAPHICS@MITuniversity.edu</a></p>
          <p><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.HimanshuGRAPICS.com</a></p>
        </div>

        {/* Add more professors here */}
      </div>
    </>
  );
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '20px',
  padding: '20px',
  backgroundColor: '#faedcd',
};

const profileStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' , 
  color : 'black'
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#0077b5'
};