import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from '../../styling/Overview.module.scss';
// stuff
const sequence = [
  'Where will your next adventure take you?',
  2000,
  'Where can I transfer my Chase Ultimate Rewards Points?',
  2000,
  'Where can I transfer my American Express Membership Rewards Points?',
  2000,
  'Where can I transfer my Citi ThankYou Points?',
  2000,
  'Where can I transfer my Capital One Miles?',
  2000,
  'Can I use my Chase points to transfer to United Airlines miles?',
  2000,
  'Can I use my American Express points to transfer to United Airlines miles?',
  2000,
  'Is it better to transfer points to JetBlue from American Express or Chase?',
  2000,
  'Is it better to transfer points to Marriott from American Express or Chase?',
  2000,
  'Where will your next adventure take you?',
  () => showCursorAnimation(false),
];

const CURSOR_CLASS_NAME = 'type';
const ref = React.createRef<HTMLSpanElement>();
const showCursorAnimation = (show: boolean) => {
  if (!ref.current) {
    return;
  }

  const el = ref.current;
  if (show) {
    el.classList.add(CURSOR_CLASS_NAME);
  } else {
    el.classList.remove(CURSOR_CLASS_NAME);
  }
};

interface Props {
  setOpenSignupModal(value: React.SetStateAction<boolean>): void;
}

const Overview = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.blurb}>
        No longer shall you be lost in the labyrinth of numbers and
        affiliations! With Wanderlust Wizard, take control of your points like a
        true mage, weaving them into the most rewarding travel spells. Embark on
        this enchanting journey, where you're not merely collecting points -
        you're spellbinding them!
      </h1>
      {/* <p>Stop chasing your next adventure</p> */}
      <span>
        <TypeAnimation
          ref={ref}
          cursor={false}
          sequence={sequence}
          preRenderFirstString={true}
        />
      </span>
      <img src={require(`../../assets/globe.png`).default} alt="globe"></img>
      <h1 className={styles.blurb}>
        Your points are worth <u>more</u> than you think
      </h1>
    </section>
  );
};

export default Overview;
