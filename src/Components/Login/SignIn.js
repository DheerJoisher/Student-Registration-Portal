import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Login.module.css";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className={`${styles.Login_formContainer} ${styles.Login_signInContainer}`}>
      <form onSubmit={handleOnSubmit} className={styles.Login_form}>
      <h1 style={{color: 'black', fontSize: "30px", fontWeight: "bold", margin: 0 }}>Student Login</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
          className={styles.Login_input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
          className={styles.Login_input}
        />
         <Link to="/studentlogin"><button className={styles.Login_button}>Sign In</button></Link>
         <Link to="/error200" className={styles.Login_a} style={{color: 'black'}}>Forgot your Password?</Link>
      </form>
    </div>
  );
}

export default SignInForm;
