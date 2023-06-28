import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styling/Home.module.scss';

function SignupModal(): JSX.Element {
  const navigate = useNavigate();
  const [retryString, setRetryString] = useState<String>('');

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const usernameInput = e.currentTarget.elements[0] as HTMLInputElement;
      const passwordInput = e.currentTarget.elements[1] as HTMLInputElement;
      const nameInput = e.currentTarget.elements[2] as HTMLInputElement;

      const username: string = usernameInput.value;
      const password: string = passwordInput.value;
      const name: string = nameInput.value;

      const response = await fetch('http://localhost:5050/users/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, name }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate('/dashboard');
      } else {
        setRetryString('Sign up failed.');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3 className={styles.failMessage}>{retryString}</h3>
      <h2 className={styles.mainMessage}>Sign up Traveler</h2>
      <form onSubmit={handleSignup} className={styles.box}>
        <input type='text' placeholder='Username' className={styles.input} />
        <input
          type='password'
          placeholder='Password'
          className={styles.input}
        />
        <input type='text' placeholder='Name' className={styles.input} />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default SignupModal;
