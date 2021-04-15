import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
import useSearch from '../../hooks/useSearch';
import { GlobalContext } from '../../state/GlobalContextProvider';

const BodyContainer = styled.div`
  padding: 5%;
  background-color: ${(props) => (props.theme === 'dark' ? '#313131' : '#ffffff')};

  h1 {
    text-align: center;
    margin: 0px 0px 5% 0px;
    color: ${(props) => (props.theme === 'dark' ? '#be4f4f' : '#525252')};
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
  const results = useSearch();
  const { state: theme } = useContext(GlobalContext);

  return (
    <BodyContainer theme={theme.theme}>
      <h1>YouTube video search app</h1>
      <VideoGrid role="grid">
        {results.items
          ? results.items
              .filter((video) => video.id.videoId && true)
              .map((video) => (
                <VideoCard key={video.id.videoId} data={video} fromPage="home" />
              ))
          : null}
      </VideoGrid>
    </BodyContainer>
  );
}

export default HomePage;
