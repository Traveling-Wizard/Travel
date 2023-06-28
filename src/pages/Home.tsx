import React, { useState } from 'react';
// import styles from '../styling/Home.module.scss';
import Overview from './Home/Overview';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';

function Home(): JSX.Element {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [signupModal, setSignupModal] = useState<boolean>(false);

  return (
    <>
      <Navbar loginModal={loginModal} signupModal={signupModal} setLoginModal={setLoginModal} setSignupModal={setSignupModal}/>
      <div>
        {loginModal && <LoginModal />}
        {signupModal && <SignupModal />}
      </div>
      {/* <div>Hello World!</div>; */}
      <Overview />
      <Footer />
    </>
  );
}

export default Home;
