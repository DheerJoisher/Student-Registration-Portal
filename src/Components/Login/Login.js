import React, { useState } from "react";
import styles from "./Login.module.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

export default function Login() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    styles.Login_mainContainer + " " + (type === "signUp" ? styles.Login_containerRightPanelActive : "");
  
  return (
    <div style={{ 
        background: "#f6f5f7", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column", 
        fontFamily: "Montserrat, sans-serif", 
        height: "100vh", 
        margin: "-20px 0 50px" 
    }}>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className={styles.Login_overlayContainer}>
          <div className={styles.Login_overlay}>
            <div className={`${styles.Login_overlayPanel} ${styles.Login_overlayLeft}`}>
              <h1 style={{ fontSize: "30px",fontWeight: "bold", margin: 0 }}>Welcome Student!</h1>
              <p style={{ fontSize: "18px", fontWeight: 100, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>
                Embark on your academic journey
              </p>
              <button
                className={`${styles.Login_button} ${styles.ghost}`}
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className={`${styles.Login_overlayPanel} ${styles.Login_overlayRight}`}>
              <h1 style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>Hello, Professor!</h1>
              <p style={{ fontSize: "18px", fontWeight: 100, lineHeight: "20px", letterSpacing: "0.5px", margin: "20px 0 30px" }}>
                Ready to dive into the teacher's toolkit?
              </p>
              <button
                className={`${styles.Login_button} ${styles.ghost}`}
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
