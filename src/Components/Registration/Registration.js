import React from 'react';
import Footer from './../../Components/Footer/Footer';
import Navbar2 from '../StudNav/Navbar2';

export default function Registration() {
  return (
    <>
      <Navbar2 />
      <div style={{ minHeight: 'calc(100vh - 120px)', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#808080', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ width: '80%', maxWidth: '800px', padding: '20px' }}>
          <div style={{ backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginTop: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Course Registration Form</h1>
            <form style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', padding: '20px', boxSizing: 'border-box' }} action="registration_process.php" method="POST">

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
  <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="fullname">Year: </label>
  <input style={{ flex: 1, padding: '6px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD', fontSize: '14px' }} type="number" id="number" name="number" required />
</div>

<div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
  <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="fullname">Roll Number: </label>
  <input style={{ flex: 1, padding: '6px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD', fontSize: '14px' }} type="number" id="number" name="number" required />
</div>


<div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
  <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="fullname">Semister: </label>
  <input style={{ flex: 1, padding: '6px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD', fontSize: '14px' }} type="number" id="number" name="number" required />
</div>


<div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
  <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="fullname">Prgram: </label>
  <input style={{ flex: 1, padding: '6px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD', fontSize: '14px' }} type="text" id="text" name="text" required />
</div>

             <div>
              <h3 style={{color:'red'}}>First Selection</h3>
              <label htmlFor="course1">Select Course 1: </label>
              <select id="course1" name="course1" style={{ flex: 1, width: '300px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} required>
                <option disabled selected value="true">maths</option>
                <option value="course1_option1" disabled>other</option>                   
              </select>
             </div>

             <div>
              <h3 style={{color:'red'}}>Second Selection</h3>
              <label htmlFor="course1">Select Course 2: </label>
              <select id="course1" name="course1" style={{ flex: 1, width:'300px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} required>
                <option value="">Select a course</option>
                <option value="course1_option1">Chemistry</option>
                <option value="course1_option2">Physics</option>                  
              </select>
            </div>

            <div>
              <h3 style={{color:'red'}}>Third Selection</h3>
              <label htmlFor="course2">Select Course 3: </label>
              <select id="course2" name="course2" style={{ flex: 1,width:'300px',  padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} required>
                <option value="">Select a course</option>
                <option value="course2_option1">UI/UX Design Fundamentals</option>
                <option value="course2_option2">Introduction to Python Programming</option>
                <option value="course2_option3">App Dev with Flatter</option>
                <option value="course2_option4">Ethical Hacking and Cyber Security</option>
              </select>
            </div>

              <div>
                <h3 style={{color:'red'}}>Fourth Selection</h3>
                <label htmlFor="course3">Select Course 4: </label>
                <select id="course3" name="course3" style={{ flex: 1,width:'300px',  padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} required>
                  <option value="">Select a course</option>
                  <option value="course3_option1">Public Speaking Mastery</option>
                  <option value="course3_option2">Creatuve Writing Workshop</option>
                  <option value="course3_option3">Guitar</option>
                  <option value="course3_option4">Cultivating Inner Peace and Calm </option>
                </select>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <input style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}