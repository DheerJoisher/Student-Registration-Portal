import React from 'react'
import './ForgotPassword.css'
import img from './img.png'
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    
    <div style={{height : '100vh' , padddingBottom : '50px' , paddingTop : '50px'}}>
        <div className="main-content">
        <div className="text-content" style={{paddingTop : '100px'}}>
            <h2 style={{fontSize : '40px' }} >Error 200!!<br/> Forgot Password</h2>
            <p style={{fontSize : '25px'}} className='my-3'>Please Contact the <br/>Administrative Department</p>
        
        <div>
        <Link to="/" className="hyperlink">Back to Main Page</Link>
        </div></div>
        <div className="image-content">
            <img src={img}/>
        </div>
    </div>

    </div>
    
  )
}
