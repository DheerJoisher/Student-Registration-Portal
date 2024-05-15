import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

const SignInForm = () => {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    const validCredentials = {
      email: "student@example.com",
      password: "password123"
    };

    if (email === validCredentials.email && password === validCredentials.password) {
      alert("Login successful!");
      navigate('/studentlogin'); // Redirect to student dashboard
    } else {
      alert("Invalid email or password");
    }

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
        <h1 style={{ color: 'black', fontSize: "30px", fontWeight: "bold", margin: 0 }}>Student Login</h1>
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
        <button type="submit" className={styles.Login_button}>Sign In</button>
        <a href="/error200" className={styles.Login_a} style={{ color: 'black' }}>Forgot your Password?</a>
      </form>
    </div>
  );
};

export default SignInForm;
