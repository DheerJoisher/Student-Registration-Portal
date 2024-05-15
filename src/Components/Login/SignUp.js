import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

function SignUpForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

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
    const validCredentials = {
      email: "professor@example.com",
      password: "professor123"
    };

    if (email === validCredentials.email && password === validCredentials.password) {
      alert("Login successful!");
      navigate('/Teachlogin'); // Redirect to professor dashboard
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
    <div className={`${styles.Login_formContainer} ${styles.Login_signUpContainer}`}>
      <form onSubmit={handleOnSubmit} className={styles.Login_form}>
        <h1 style={{ color: 'black', fontSize: "30px", fontWeight: "bold", margin: 0 }}>Professor Login</h1>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={styles.Login_input}
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className={styles.Login_input}
        />
        <button type="submit" className={styles.Login_button}>Sign In</button>
        <a href="/error200" className={styles.Login_a} style={{ color: 'black' }}>Forgot your Password?</a>
      </form>
    </div>
  );
}

export default SignUpForm;
