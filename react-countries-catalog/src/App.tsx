import React from 'react';
import 'tailwindcss/tailwind.css';
import Main from './components/Main';
import Header from './components/Header';
import ListCatalogs from './components/ListCatalogs';

const App: React.FC = () => {
  return (
    <div>
      <Main>
        <Header/>
        <ListCatalogs/>
      </Main>
    </div>
  );
};

export default App;
