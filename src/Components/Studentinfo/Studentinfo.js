import React from 'react'

export default function Studentinfo() {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f2f2f2', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '80%', maxWidth: '800px', padding: '20px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginTop: '20px' }}>
          <h1 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '20px', marginTop: '50px' }}>Teacher Information</h1>
          <form style={{ width: '100%', boxSizing: 'border-box' }} action="registration_process.php" method="POST">
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px'}} htmlFor="fullname">Full Name:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="fullname" name="fullname" required />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="phone">Phone Number:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="tel" id="phone" name="phone" required />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="dob">Date of Birth:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="date" id="dob" name="dob" required />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="address">Address:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="address" name="address" required />
            </div>

            {/* First Course Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="gender">Gender:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} id="gender" name="gender" required />
                
            </div>

            {/* Second Course Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="teacherid">Teacher ID:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} id="teacherid" name="teacherid" required />
            </div>

            {/* Third Course Selection */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }} htmlFor="facultyof">Faculty of:</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} id="facultyof" name="facultyof" required />
                
            </div>


            {/* Other input fields omitted for brevity */}

            <div style={{ textAlign: 'center' }}>
              <input style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}