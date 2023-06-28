import React from 'react';
// import styles from '../styling/Home.module.scss';
import Overview from './Home/Overview';
import Navbar from './Home/Navbar';

function Home(): JSX.Element {
  // return <div className={styles.container}>Hello World!</div>;
  return (
    <>
      <Navbar />
      {/* <div>Hello World!</div>; */}
      <Overview />  
    </>
    
  )
}

export default Home;
