import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import VideoCard from '../../components/VideoCard';
import { SearchContext } from '../../state/SearchResultsProvider';
//  import youtubeVideos from '../../mocks/youtube-videos';

const BodyContainer = styled.div`
  padding: 5%;

  h1 {
    text-align: center;
    margin: 0px 0px 5% 0px;
    color: #525252;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  grid-gap: 2.5em;
  @media screen and (max-width: 750px) {
    grid-gap: 1.5em;
  }
`;

function HomePage() {
  const { search, results, setResults, fetchSearch, setFetchSearch } = useContext(
    SearchContext
  );

  useEffect(() => {
    if (fetchSearch) {
      setFetchSearch(false);
      return async () => {
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
      };
    }
  }, [search, setResults, fetchSearch, setFetchSearch]);

  return (
    <>
      <Nav />
      <BodyContainer>
        <h1>YouTube video search app</h1>
        <VideoGrid role="grid">
          {results.items
            ? results.items
                .filter((video) => video.id.videoId && true)
                .map((video) => <VideoCard key={video.id.videoId} data={video} />)
            : null}
        </VideoGrid>
      </BodyContainer>
    </>
  );
}

export default HomePage;
