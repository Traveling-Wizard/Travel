import React from 'react';
import { TypeAnimation } from 'react-type-animation'

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
    'Where will next adventure take you?',
    () => showCursorAnimation(false),
  ];

  const CURSOR_CLASS_NAME = 'type';
  const ref = React.createRef<HTMLSpanElement>();
  const showCursorAnimation = (show: boolean) => {
    if(!ref.current) {  
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
    <section>
      <h1>A better way to play the Points Game</h1>
      {/* <p>Stop chasing your next adventure</p> */}
      <span>
        <TypeAnimation
          ref={ref}
          cursor={false}
          sequence={sequence}
          preRenderFirstString={true}
        />
      </span>
      <h1>Your points are worth <u>more</u> than you think</h1>
      <p>Made with love by... </p>
    </section>
  )
};

export default Overview;