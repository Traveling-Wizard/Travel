import React from "react";
import { ReactNode } from "react";
import { useState } from 'react';

function Query() {




  return (
    <div>
      <span>Can I use </span>
      {/* <form> */}
      {/* <form onSubmit={handleSubmit}> */}
          {/* <label>Rewards Ecosystem:</label> */}
            <select
              required
              // value={card}
              // onChange={(e) => setCard(e.target.value)}
            >
              <option value="DEFAULT">Points Type</option>
              <option value="Chase">Chase</option>
              <option value="Amex">Amex</option>
            </select>
      {/* </form> */}
      <span> Points to book a </span>
      
      <select>
      <option value="DEFAULT">Flight/Hotel</option>
      <option value="Flight">Flight</option>
      <option value="Hotel">Hotel</option>
      </select>  
      
      <span> with </span>
      <select>
      <option value="DEFAULT">Redemption</option>
      <option value="United">United</option>
      <option value="Delta">Delta</option>
      <option value="Southwest">Southwest</option>

      </select>  
          
    </div>
  )
}

export default Query;