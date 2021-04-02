import React from 'react';
import HomePage from '../../pages/Home';
import SearchResultProvider from '../../state/SearchResultsProvider';

function App() {
  return (
    <SearchResultProvider>
      <HomePage />
    </SearchResultProvider>
  );
}

export default App;
