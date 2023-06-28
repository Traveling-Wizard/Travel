import React from "react";
import { ReactNode } from "react";
import { useState } from 'react';
const test = require('../../assets/Southwest.png');
import "../../stylesheets/dashboardStyles.scss"


function Transfer_Partner() {
  let bank = 'Chase' // This should be reading from a state value
  const chase = ['Hyatt', 'Marriott', 'IHG_Hotels', 'AerLingus', 'Air_Canada', 'AirFrance_FlyingBlue', 'British_Airways', 'Emirates', 'Iberia', 'JetBlue', 'Singapore', 'Southwest', 'United', "Virgin_Atlantic"];
  const amex = ['Hilton', 'Marriott', 'Choice_Hotels', 'AerLingus', 'Aeromexico', 'Air_Canada', 'All_Nippon_Airways_ANA', 'Avianca_LifeMiles', 'British_Airways', 'Asia_Airlines', 'Delta_Airlines', 'Emirates', 'Etihad', 'AirFrance_FlyingBlue', 'Hawaiian_Airlines', 'Iberia', 'JetBlue', 'Qantas', 'Singapore', 'Virgin_Atlantic'];

  const partners = chase.map((partner, index) => 
    <div className='partners_box' key={index}>
      <img
        src={require(`../../assets/${partner}.png`).default}
        alt={`${partner} logo`}
        className='partner_logo'
      />
      {/* <span className='partner_text'>{partner.split('_').join(' ')} </span> */}
      <div className='partner_description_layer'>
        <span className='partner_description'>Transfer Ratio = 1:1</span>
      </div>
    </div>
  )
  
  return (
    <>
    <h3>{bank} Transfer Partners</h3>
    <div className='partners_container'>
      {partners}

    </div>
    
    </>

  )
}

export default Transfer_Partner;