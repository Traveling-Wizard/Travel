import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styling/Modal.module.scss';

function LoginModal(): JSX.Element {
  const navigate = useNavigate();
  const [retryString, setRetryString] = useState<String>('');

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const usernameInput = e.currentTarget.elements[0] as HTMLInputElement;
      const passwordInput = e.currentTarget.elements[1] as HTMLInputElement;

      const username: string = usernameInput.value;
      const password: string = passwordInput.value;

      const response = await fetch('http://localhost:5050/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/dashboard');
      } else {
        setRetryString('Login Failed. Wrong Credentials');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.center}>
      <div className={styles.user}>
        {/* <h3 className={styles.failMessage}>{retryString}</h3> */}
        <h2 className={styles.mainMessage}>Welcome Back Traveler</h2>
        <form onSubmit={handleLogin} className={styles.box}>
          <input type='text' placeholder='Username' className={styles.input} />
          <input
            type='password'
            placeholder='Password'
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
