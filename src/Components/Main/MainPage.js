import React from 'react'
import './MainPage.css'
import img from './img.png'

export default function MainPage() {
  return (
    <div style={{height : '100vh' , padddingBottom : '50px' , paddingTop : '50px'}}>
        <div className="main-content">
        <div className="text-content" style={{paddingTop : '100px'}}>
            <h2 style={{fontSize : '35px' }}>Welcome to Our University</h2>
            <p style={{fontSize : '25px'}} className='my-3'>This is the text content section.<br/> You can add any information you want to display here.</p>
        
        <div className="login-button">
            <a href="LoginPage.html" style={{textDecoration: 'none' , color: 'white'}}>Login</a>
        </div></div>
        <div className="image-content">
            <img src={img} alt="University Image"/>
        </div>
    </div>

    </div>
  )
}
