import React, { useState } from 'react';

import styles from '../../styling/Navbar.module.scss';

const Navbar = ({loginModal, signupModal, setLoginModal, setSignupModal}:any) => {

  const toggleLogin = () => {
    setLoginModal(!loginModal);
  };

  const toggleSignup = () => {
    setSignupModal(!signupModal);
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.button} onClick={() => toggleLogin()}>Sign In</button>
      <button className={styles.button} onClick={() => toggleSignup()}>Sign Up</button>
    </div>
  );
};

export default Navbar;
