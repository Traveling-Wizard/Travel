import React from "react";
import { ReactNode } from "react";
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'

interface CardsInterface {
  card_name: string; 
  points: number;
  card_id: number;
}

interface Props {
  // children: ReactNode;
  // open: boolean;
  closeModal: (boolean: boolean) => void;  
  // addCard: (card: CardsInterface) => void
  addCard: string;
}

function Modal({ closeModal }: Props) {
  // const navigate = useNavigate();
  
  const [card, setCard] = useState('Choose a new rewards system...');
  const [points, setPoints] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const test = { points, card };
    console.log(test);

    setIsPending(true);

    // fetch('http://localhost:??', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(test)
    // }).then(() => {
    //   console.log('new card added');
    //   setIsPending(false);
    // })
    setTimeout(() => {
      setIsPending(false);
      closeModal(false);
    }, 2000); // Just for testing purposes since I don't want to hook up the backend now.
  }

  return(
    <div className="modalBackground">

      <div className="modalAdd_Container">
          <button onClick={() => closeModal(false)}>X</button>
          
          <div className="title">
            <h2>Add Your Rewards</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
          <label>Rewards Ecosystem:</label>
            <select
              required
              value={card}
              onChange={(e) => setCard(e.target.value)}
            >
              <option value="DEFAULT">Choose a new rewards system...</option>
              <option value="Chase">Chase Ultimate Rewards</option>
              <option value="Amex">American Express Membership Rewards</option>
            </select>
            <label>Reward Points:</label>
            <input
              inputMode="numeric" 
              pattern="[0-9]*"
              type='text'
              placeholder="100,000?! Looks like a free vacation to me!"
              required
              value={points}
              onChange={(e) => {
                let num = e.target.value.replace(/[\D\s\._\-]+/g, "");
                // num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                setPoints(num);
              }
              }
            />
            
            {!isPending && <button>Add</button>}
            {isPending && <button>Adding Rewards! ...</button>}
          </form>
          <button>Delete</button>

          <p>{points}</p>
          <p>{card}</p>
          <div className="footer">
            {/* <button>Add</button> */}
            

          </div>

      </div>
    </div>

  ) 
}

export default Modal;