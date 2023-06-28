import React from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className='addButton '
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;