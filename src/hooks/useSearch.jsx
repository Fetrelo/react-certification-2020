import { useContext, useEffect } from 'react';
import { SearchContext } from '../state/SearchResultsProvider';

function useSearch() {
  const { search, results, setResults, fetchSearch, setFetchSearch } = useContext(
    SearchContext
  );

  useEffect(() => {
    if (fetchSearch) {
      setFetchSearch(false);
      (async () => {
        const params = new URLSearchParams({
          key: process.env.REACT_APP_YT_API_KEY,
          q: search,
          part: 'snippet',
          maxResults: '25',
        });
        const request = await fetch(
          `https://www.googleapis.com/youtube/v3/search/?${params}`
        );
        const response = await request.json();
        setResults(response);
      })();
    }
  }, [search, setResults, fetchSearch, setFetchSearch]);

  return results;
}

export default useSearch;
