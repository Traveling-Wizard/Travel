import React from 'react';
import styles from '../styling/Home.module.scss';

function Home(): JSX.Element {
  return (
    <div className='Home'>
      <button type='button' onClick={() => this.setState}>
        Login
      </button>
      <button type='button' onClick={() => this.setState}>
        Signup
      </button>
      <div className='blurb'>
        <p>
          Step into a world of magic and convenience with
          <strong> Wanderlust Wizard</strong> - your enchanted grimoire for
          mastering the arcane art of credit card points management! This
          bewitching app will transfigure your mundane experience of tracking
          reward points into an extraordinary adventure. By conjuring a detailed
          map of your treasure troves across multiple mystical credit card
          kingdoms, Wanderlust Wizard effortlessly deciphers the riddle of
          transfer ratios. Like an all-seeing crystal ball, the app reveals the
          secret alliances of flight partners each banking realm has pact with,
          guiding you to the most bountiful aerial chariots. No longer shall you
          be lost in the labyrinth of numbers and affiliations! With Wanderlust
          Wizard, take control of your points like a true wizard, weaving them
          into the most rewarding travel spells. Embark on this enchanting
          journey, where you're not merely collecting points - you're
          spellbinding them!
        </p>
      </div>
    </div>
  );
}
export default Home;
