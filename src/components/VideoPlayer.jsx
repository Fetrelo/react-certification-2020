import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../state/GlobalContextProvider';
import SvgFav from './svg/SvgFav';
import SvgFaved from './svg/SvgFaved';

const VideoWrapper = styled.article`
  display: flex;
  flex-direction: column;

  & > div {
    padding: 1% 2%;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VideoPlayer = ({ id }) => {
  const {
    state: { favVideos, sessionData },
    favVideo,
    unfavVideo,
  } = useContext(GlobalContext);
  const [videoData, setVideoData] = useState({
    id: { videoId: id },
    snippet: { title: '', description: '' },
  });

  const {
    id: { videoId },
    snippet: { title, description },
  } = videoData;

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams({
        key: process.env.REACT_APP_YT_API_KEY,
        id,
        part: 'snippet',
      });
      const request = await fetch(
        `https://www.googleapis.com/youtube/v3/videos/?${params}`
      );
      const response = await request.json();
      const vData = {
        id: { videoId: response.items[0].id },
        etag: response.items[0].etag,
        snippet: {
          title: response.items[0].snippet.title,
          description: response.items[0].snippet.description,
          thumbnails: {
            medium: { url: response.items[0].snippet.thumbnails.medium.url },
          },
        },
      };
      setVideoData(vData);
    })();
  }, [id]);

  const isFav = favVideos.some((v) => v.id.videoId === videoId);

  return (
    <VideoWrapper>
      <iframe
        title="video"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
      />
      <div>
        <TitleDiv>
          <h2>{title}</h2>
          {sessionData && sessionData.isAuthenticated ? (
            isFav ? (
              <SvgFaved
                onClick={() => {
                  unfavVideo(videoData);
                }}
              />
            ) : (
              <SvgFav
                onClick={() => {
                  favVideo(videoData);
                }}
              />
            )
          ) : null}
        </TitleDiv>
        <p>{description}</p>
      </div>
    </VideoWrapper>
  );
};

export default VideoPlayer;
