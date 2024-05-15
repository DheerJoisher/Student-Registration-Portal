import React from 'react';
import Navbar1 from './../../Components/Navbar/Navbar1';
import Footer from './../../Components/Footer/Footer';
export default function Professor() {
  return (
    <>
    <Navbar1 />
      <h1 style={{color: '#222222', textAlign: 'center',fontFamily:'Arial',fontSize:'50px'}}>Our Esteemed Faculty</h1>
      <div style={containerStyle}>
        {/* Professor 1 */}
        <div style={profileStyle}>
          <img src="https://media.istockphoto.com/id/1292136923/photo/young-female-student-or-teacher-with-books.jpg?s=612x612&w=0&k=20&c=AOoctmnT1nqXydR_TRmJrXUxK2OdrkfAweoJG2G17dY=" alt=" Priya Patel" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px'}}>Mrs. Priya Patel</h2>
          <p style={pstyles}>Associate Professor of Statistics and Mathematics and Statistics</p>
          <p style={pstyles}>Department of Mathematics, College of Engineering </p>
          <p style={pstyles}><a href="mailto:erodriguez@university.edu" style={linkStyle}>PriyaPatel@university.edu</a></p>
          <p style={pstyles}><a href="https://www.emilyrodriguezresearch.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.PriyaPateresearch.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://t3.ftcdn.net/jpg/04/18/93/10/360_F_418931061_OxjkVMfynUfJwbjEh5qKnS9zmTa9Pxud.jpg" alt="Dr. Arun Malik" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Dr. Arun Malik</h2>
          <p style={pstyles}>Professor of Computer Science</p>
          <p style={pstyles}>Department of Computer Science, Lovely Professional University </p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>ArunMalik@university.edu</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.ArunMalikchangcs.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://thelogicalindian.com/h-upload/2021/12/16/208650-untitled-design-2021-12-16t125652041.jpg" alt="Anupama A.L" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Mrs.Anupama L.</h2>
          <p style={pstyles}>Assistant Professor of English </p>
          <p style={pstyles}>Department of English Litrature, Saraswathi College of Arts and Science </p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>Anupama@university.edu</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.Anupamaenglishlit.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://pbs.twimg.com/media/Dt0YJG6WwAAxFoa.jpg" alt="Gaurav Gupta" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Mr.Gaurav Gupta</h2>
          <p style={pstyles}>Professor of Computer Science</p>
          <p style={pstyles}>Department of Physics faculty , College of Engineering</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>GauravGupta@gmail.com</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.GauravGuptaphysicsdep.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJv-nLIenhvv_HvXLvJtS0_KaJ8PTyADMoEzFg3yClQ&s" alt="Arjun kumar" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Dr. Arjun kumar</h2>
          <p style={pstyles}>Professor of Mechanical Engineering</p>
          <p style={pstyles}>Department of Mechanical Engineering , MIT College of Engineering</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}> Arjunkumar@MITuniversity.edu</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www. ArjunkumarMITdepofmech.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://media.istockphoto.com/id/1005817658/photo/middle-aged-man-with-pleasant-face-expression.jpg?s=612x612&w=0&k=20&c=3YTdAT-m9io-zEF2aOmJsRz7tKVHlHSHvDFSILp6FAY=" alt="Meet Jordan Budhu" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Prof.Meet Jordan Budhu</h2>
          <p style={pstyles}>Professor of new electrical and computer engineering </p>
          <p style={pstyles}>Department of new electrical Computer Science, VIIT College of Engineering</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>MeetJordanBudhu@university.edu</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.MeetJordanBudhuElectircal.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://us.123rf.com/450wm/yuliang11/yuliang111610/yuliang11161000086/63940436-indian-male-reading-book-at-cafe.jpg?ver=6" alt="Rakesh Vaid " style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Dr. Rakesh Vaid</h2>
          <p style={pstyles}>Professor of Electronics,</p>
          <p style={pstyles}>Department of Electronics Science,  University of Jammu and Kashmir</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>RakeshVaid@university.edu</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.RakeshVaidelectronics.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://khemkafoundation.net/wp-content/uploads/2019/04/Shamika-Ravi.jpg" alt="amruta gharge" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Mrs.Amruta Gharge</h2>
          <p style={pstyles}>Professor of History and Litrature</p>
          <p style={pstyles}>Department of Arts, College of Arts and Litrature</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>amrutagharghe05@gmail.com</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.amrutaghargehistoruylit.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://img.freepik.com/premium-photo/happy-young-indian-businessman-teacher-sitting-work-classroom-portrait_562687-3295.jpg" alt="Vinayak Sharma" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Prof.Vinayak Sharma </h2>
          <p style={pstyles}>Professor of Information Technology</p>
          <p style={pstyles}>Department of Information Technology, VJTI College of Engineering</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>Vinayaks@vjti.edu.ac.in</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.vinayak05it.ac.in.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://static.india.com/wp-content/uploads/2014/03/mothering-india.jpg" alt="Sneha Singh" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Mrs. Sneha Singh</h2>
          <p style={pstyles}>Professor of Mathematics</p>
          <p style={pstyles}>Department of Computer Science,Indian Institute of Technology, Delhi</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>snehasmath@delhiuniversity.edu</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.snehasinghmathematician.com</a></p>
        </div>
        <div style={profileStyle}>
          <img src="https://st.depositphotos.com/1010710/2182/i/950/depositphotos_21828113-stock-photo-lecturer-asking-questions.jpg" alt=" Himanshu Rai" style={imageStyle} />
          <h2 style={{ color: 'aqua', fontSize: '30px' }}>Mr.Himanshu Rai</h2>
          <p style={pstyles}>Professor of Engineering graphics</p>
          <p style={pstyles}>Department of Computer Science, MIT College of Engineering</p>
          <p style={pstyles}><a href="mailto:mchang@university.edu" style={linkStyle}>HIMANSHUGRAPHICS@MITuniversity.edu</a></p>
          <p style={pstyles}><a href="https://www.michaelchangcs.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.HimanshuGRAPICS.com</a></p>
        </div>
      </div>
      <Footer/>
    </>
  );
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
  background: '#808080',
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
  marginBottom: '10px'
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
  fontSize: '15px',
  marginBottom: '0px',
  marginTop: '0px',
};