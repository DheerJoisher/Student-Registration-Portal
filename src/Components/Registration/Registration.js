import React from 'react';

export default function Registration() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f2f2f2', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '80%', maxWidth: '800px', padding: '20px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginTop: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Course Registration Form</h1>
          <form style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', padding: '20px', boxSizing: 'border-box' }} action="registration_process.php" method="POST">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="fullname">Full Name:</label>
              <input style={{ flex: 1, padding: '8px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="fullname" name="fullname" required />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="dob">Phone Number:</label>
              <input style={{ flex: 1, padding: '8px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="number" required />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="dob">Date of Birth:</label>
              <input style={{ flex: 1, padding: '8px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="date" id="dob" name="dob" required />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="address">Address:</label>
              <input style={{ flex: 1, padding: '8px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="address" name="address" required />
            </div>

            {/* First Course Selection */}
            <div>
              <h3>First Selection</h3>
              <label htmlFor="course1">Select Course:</label>
              <select id="course1" name="course1">
                <option value="course1_option1">Course 1 Option 1</option>
                <option value="course1_option2">Course 1 Option 2</option>
                <option value="course1_option3">Course 1 Option 3</option>
                <option value="course1_option4">Course 1 Option 4</option>
                <option value="course1_option5">Course 1 Option 5</option>
              </select>
            </div>

            {/* Second Course Selection */}
            <div>
              <h3>Second Selection</h3>
              <label htmlFor="course2">Select Course:</label>
              <select id="course2" name="course2">
                <option value="course2_option1">Course 2 Option 1</option>
                <option value="course2_option2">Course 2 Option 2</option>
                <option value="course2_option3">Course 2 Option 3</option>
                <option value="course2_option4">Course 2 Option 4</option>
                <option value="course2_option5">Course 2 Option 5</option>
              </select>
            </div>

            {/* Third Course Selection */}
            <div>
              <h3>Third Selection</h3>
              <label htmlFor="course3">Select Course:</label>
              <select id="course3" name="course3">
                <option value="course3_option1">Course 3 Option 1</option>
                <option value="course3_option2">Course 3 Option 2</option>
                <option value="course3_option3">Course 3 Option 3</option>
                <option value="course3_option4">Course 3 Option 4</option>
                <option value="course3_option5">Course 3 Option 5</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontWeight: 'bold', display: 'inline-block', width: '200px', textAlign: 'right', marginBottom: '5px' }} htmlFor="reason">Why do you want the course?</label>
              <input style={{ flex: 1, padding: '8px', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', backgroundColor: '#FAEDCD' }} type="text" id="reason" name="reason" />
            </div>

            {/* Other input fields omitted for brevity */}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <input style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

