import React from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'
import styles from '../../styling/CardModal.module.scss';
interface CardsInterface {
  card_name: string;
  points: number;
  card_id: number;
}

interface Props {
  closeModal: (boolean: boolean) => void;
  setCards: (arg: CardsInterface[]) => void;
  cards: CardsInterface[];
}

function Modal({ closeModal, setCards, cards }: Props) {
  // const navigate = useNavigate();

  const [card, setCard] = useState('Choose a new rewards system...');
  const [points, setPoints] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const test = { points, card };
    console.log(test);

    setIsPending(true);

    fetch('http://localhost:5050/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(test),
    })
      .then((response) => response.json())
      .then((data) => {
        setCards([...cards, data]);
        setIsPending(false);
        closeModal(false);
      })
      .catch((err) => console.log(err));

    // Just for testing purposes since I don't want to hook up the backend now.
  };

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.formContainer}>
          <button onClick={() => closeModal(false)} className={styles.xButton}>
            X
          </button>

          <h2>Add Your Rewards</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <label>Rewards Ecosystem:</label>
            <select
              required
              value={card}
              onChange={(e) => setCard(e.target.value)}
            >
              <option value='DEFAULT'>Choose a new rewards system...</option>
              <option value='Chase'>Chase Ultimate Rewards</option>
              <option value='Amex'>American Express Membership Rewards</option>
            </select>
            <label>Reward Points:</label>
            <input
              inputMode='numeric'
              pattern='[0-9]*'
              type='text'
              placeholder='100,000?! Looks like a free vacation to me!'
              required
              value={points}
              onChange={(e) => {
                let num = e.target.value.replace(/[\D\s\._\-]+/g, '');
                // num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                setPoints(num);
              }}
            />

            {!isPending && <button>Add Card</button>}
            {isPending && <button>Adding Rewards! ...</button>}
          </form>
          <button>Delete</button>

          <div className='footer'>{/* <button>Add</button> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
