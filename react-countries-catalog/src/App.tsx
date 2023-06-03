import React from 'react';
import MyComponent from './components/MyComponent';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  return (
    <div>
      <h1 className='text-blue-600'>Welcome to my React app</h1>
      <MyComponent />
    </div>
  );
};

export default App;
