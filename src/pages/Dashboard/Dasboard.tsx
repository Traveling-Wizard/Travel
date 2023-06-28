import React from 'react';
import Add_Button from './Add_Button';
import { useState, ReactElement } from 'react';
import Modal_Add from './Modal_Add'
import Query from './Query';
import Transfer_Partner from './Transfer_Partners';
import "../../stylesheets/dashboardStyles.scss"

interface CardsInterface {
  card_name: string; 
  points: number;
  card_id: number;
  prevState: null;
}

const Dashboard = () => {

  const [cards, setCards] = useState([{card_name: 'Capital One', points: 50000, card_id: 3}])
  const [addModal, setAddModal] = useState(false); // set to false initially because we want the modal to be closed initially

  function addCard(card: ReactElement) {
    // setCards((currentCards) => {
    //   return [...currentCards, card ]
    // });
  }

  return (
    <>
      <h3>Ready for your next Adventure?</h3>
      <button 
        className='addModalBtn' 
        onClick={() => {setAddModal(true)}}
      >
        "ADD" Modal Button
      </button>
      <br /> <br />
      {/* If user has any existing cards then render them, else not */}
      {cards.map((card) => {
        return 
      })}

      {/* If addModal is true - then render openModal! */}
                                                  {/* addCard={addCard} */}
      {addModal && <Modal_Add closeModal={setAddModal} addCard={'TEST'}/>}

      <Query />
      <br /><br />

      <Transfer_Partner /> 
    </>
  )

}

export default Dashboard;