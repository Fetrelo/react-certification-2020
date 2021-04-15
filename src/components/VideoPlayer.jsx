import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.article`
  display: flex;
  flex-direction: column;

  div {
    padding: 1% 2%;
  }
`;

const VideoPlayer = ({ id }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
      setTitle(response.items[0].snippet.title);
      setDescription(response.items[0].snippet.description);
    })();
  }, [id]);

  return (
    <VideoWrapper>
      <iframe
        title="video"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </VideoWrapper>
  );
};

export default VideoPlayer;
