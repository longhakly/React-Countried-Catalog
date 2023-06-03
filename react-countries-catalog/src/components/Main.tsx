import 'tailwindcss/tailwind.css';
import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className='w-full h-auto font-ubuntu'>
      {children}
    </div>
  );
};

export default Main;
