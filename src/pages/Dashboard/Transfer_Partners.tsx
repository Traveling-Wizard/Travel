import React from "react";
import { ReactNode } from "react";
import { useState } from 'react';
import hilton from './Hilton.png';


function Transfer_Partner() {
  let bank = 'Chase' // This should be reading from a state value
  const chase = {};
  const amex = ['Hilton', 'Marriott', 'Choice_Hotels', 'AerLingus', 'Aeromexico', 'Air_Canada', 'All-Nippon-Airways-ANA', 'Avianca_LifeMiles', 'British_Airways', 'Asia_Airlines', 'Delta_Airlines', 'Emirates', 'Etihad', 'AirFrance_FlyingBlue', 'Hawaiian_Airlines', 'Iberia', 'JetBlue', 'Qantas', 'Singapore', 'Virgin-Atlantic'];

  // console.log(`../../assets/${'Hilton' + '.png'}`)

  const partners = amex.map((partner, index) => 
    <div className='partners_box' key={index}>
      <img
        src={`./assets/${partner}.png`}
        alt={`${partner} logo`}
        style={{width: '50px'}}
      />
    </div>
  )
  
  return (
    <div className='partners_container'>
      <h3>{bank} Transfer Partners</h3>
      {partners}
      {/* <img src={hilton}/> */}
    </div>

  )
}

export default Transfer_Partner;