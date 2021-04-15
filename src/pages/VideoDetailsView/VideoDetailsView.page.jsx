import React, { useContext } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
import VideoPlayer from '../../components/VideoPlayer';
import useSearch from '../../hooks/useSearch';
import { GlobalContext } from '../../state/GlobalContextProvider';

const BodyContainer = styled.div`
  padding: 1%;
  display: grid;
  grid-template-columns: minmax(75%, 2fr) minmax(25%, 1fr);
  grid-gap: 1%;
  background-color: ${(props) => (props.theme === 'dark' ? '#5c5c5c' : '#ffffff')};
  color: ${(props) => (props.theme === 'dark' ? '#c3c3c3' : '#7b7b7b')};

  @media screen and (max-width: 1099px) {
    grid-template-columns: minmax(60%, 2fr) minmax(40%, 1fr);
  }

  @media screen and (max-width: 1099px) {
    grid-template-columns: 1fr;
  }
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3%;
  overflow-y: scroll;
  max-height: 90vh;

  article {
    margin-bottom: 10px;
  }
`;

function VideoDetailsView() {
  const { state: theme } = useContext(GlobalContext);
  const { id } = useParams();
  const results = useSearch();

  return (
    <BodyContainer theme={theme.theme}>
      <VideoPlayer id={id} />
      <VideoList role="list">
        {results.items
          ? results.items
              .filter((video) => video.id.videoId && true)
              .map((video) => (
                <VideoCard key={video.id.videoId} data={video} fromPaeg="videoDetails" />
              ))
          : null}
      </VideoList>
    </BodyContainer>
  );
}

export default VideoDetailsView;
