import React from "react";
import { ReactNode } from "react";
import { useState } from 'react';
const test = require('../../assets/Southwest.png');
import "../../stylesheets/dashboardStyles.scss"


function Transfer_Partner() {
  // let bank = 'Chase' // This should be reading from a state value
  const typ = ['1:1', 'Instant'];
  const chase = [ ['Hyatt', ...typ], ['Marriott', '1:1', '2 days'], ['IHG_Hotels', '1:1', '1 day'], ['AerLingus', ...typ], ['Air_Canada', ...typ], ['AirFrance_FlyingBlue', ...typ], ['British_Airways', ...typ], ['Emirates', ...typ], ['Iberia', ...typ], ['JetBlue', ...typ], ['Singapore', '1:1', '12-24 hours'], ['Southwest', ...typ], ['United', ...typ], ["Virgin_Atlantic", ...typ] ];

  const amex = [ ['Hilton', '1:2', 'Instant'], ['Marriott', ...typ], ['Choice_Hotels', ...typ], ['AerLingus', ...typ], ['Aeromexico', '1:1.6', '2-12 days'], ['Air_Canada', ...typ], ['All_Nippon_Airways_ANA', '1:1', '3 days'], ['Avianca_LifeMiles', ...typ], ['British_Airways', ...typ], ['Asia_Airlines', '1:1', '< 1 week'], ['Delta_Airlines', ...typ], ['Emirates', ...typ], ['Etihad', ...typ], ['AirFrance_FlyingBlue', ...typ], ['Hawaiian_Airlines', ...typ], ['Iberia', '1:1', '1-3 days'], ['JetBlue', '1:0.8', 'Instant'], ['Qantas', ...typ], ['Singapore', '1:1', '1-2 days'], ['Virgin_Atlantic', '1:1', '1-2 days']];

  
  const chasePartners = chase.map((partner, index) => 
  <div className='partners_box' key={index}>
      <img
        src={require(`../../assets/${partner[0]}.png`).default}
        alt={`${partner[0]} logo`}
        className='partner_logo'
      />
      <div className='partner_description_layer'>
          <span className='partner_description'>Transfer Ratio: {partner[1]} <br/> Transfer Time: {partner[2]} </span>
      </div>
    </div>
  )
  
  const amexPartners = amex.map((partner, index) => {
    if(partner[0]==='Hilton' || partner[0]==='Aeromexico') {
      return (
      <div className='partners_box' key={index}>
        <img
          src={require(`../../assets/${partner[0]}.png`).default}
          alt={`${partner[0]} logo`}
          className='partner_logo'
        />
        {/* <span className='partner_text'>{partner.split('_').join(' ')} </span> */}
        <div className='partner_description_layer'>
          <span className='partner_description' style={{color: '#50C878'}}>Transfer Ratio: {partner[1]} <br/> Transfer Time: {partner[2]} </span>
        </div>
      </div>
      )
    } else if (partner[0]==='JetBlue') {
      return (
        <div className='partners_box' key={index}>
          <img
            src={require(`../../assets/${partner[0]}.png`).default}
            alt={`${partner[0]} logo`}
            className='partner_logo'
          />

          <div className='partner_description_layer'>
            <span className='partner_description' style={{color: '#f1356d'}}>Transfer Ratio: {partner[1]} <br/> Transfer Time: {partner[2]} </span>
          </div>
        </div>
        )
    } else {
      return (
        <div className='partners_box' key={index}>
          <img
            src={require(`../../assets/${partner[0]}.png`).default}
            alt={`${partner[0]} logo`}
            className='partner_logo'
          />

          <div className='partner_description_layer'>
            <span className='partner_description'>Transfer Ratio: {partner[1]} <br/> Transfer Time: {partner[2]} </span>
          </div>
        </div>
        )
    }
  }
  )

  return (
    <>
    <h3>Chase Transfer Partners</h3>
    <div className='partners_container'>
      {chasePartners}
    </div>
    <br /> <br />

    <h3>American Express Transfer Partners</h3>
    <div className='partners_container'>
      {amexPartners}
    </div>
    </>
  )
}

export default Transfer_Partner;