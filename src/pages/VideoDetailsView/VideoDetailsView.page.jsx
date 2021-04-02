import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
import VideoPlayer from '../../components/VideoPlayer';
import useSearch from '../../hooks/useSearch';

const BodyContainer = styled.div`
  padding: 1%;
  display: grid;
  grid-template-columns: minmax(75%, 2fr) minmax(25%, 1fr);
  grid-gap: 1%;

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

  article {
    margin-bottom: 10px;
  }
`;

function VideoDetailsView() {
  const { id } = useParams();
  const results = useSearch();

  return (
    <BodyContainer>
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
