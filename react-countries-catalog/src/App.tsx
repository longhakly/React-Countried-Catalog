import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Main from './components/Main';
import Header from './components/Header';
import ListCatalogs from './components/ListCatalogs';

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchResults = (results: any) => {
    setSearchResults(results);
  };

  return (
    <div>
      <Main>
        <Header onSearchResults={handleSearchResults} />
        <ListCatalogs searchResults={searchResults} />
      </Main>
    </div>
  );
};

export default App;
