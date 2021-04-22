import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
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

function FavedVideosView() {
  const {
    state: { theme, favVideos },
  } = useContext(GlobalContext);

  return (
    <BodyContainer theme={theme.theme}>
      <h1>Marked as &quot;Favourite&quot; videos</h1>
      <VideoGrid role="grid">
        {favVideos
          ? favVideos
              .filter((video) => video.id.videoId && true)
              .map((video) => (
                <VideoCard key={video.id.videoId} data={video} showDesc goto="/favs/" />
              ))
          : null}
      </VideoGrid>
    </BodyContainer>
  );
}

export default FavedVideosView;
