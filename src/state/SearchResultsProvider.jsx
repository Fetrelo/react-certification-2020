import React, { createContext, useState } from 'react';

const SearchContext = createContext({
  search: '',
  results: [],
});

function SearchResultProvider({ children }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [fetchSearch, setFetchSearch] = useState(false);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, results, setResults, fetchSearch, setFetchSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext };

export default SearchResultProvider;
