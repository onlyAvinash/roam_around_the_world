import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './Login.module.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      alert('Register successful!');
    } else {
      setShowError(true);
    }
  };

  return (
    <div className={styles.container}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={styles.fade}
      >
        <div className={styles.loginBox}>
          <h2 className={styles.title}>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <button type="submit">Register</button>
            </div>
          </form>
          <div className={styles.signupLink}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
          <CSSTransition
            in={showError}
            timeout={500}
            classNames={styles.alert}
            unmountOnExit
            onExited={() => setShowError(false)}
          >
            <div className={styles.errorBox}>
              <p>fill username, email or password.</p>
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Register;
