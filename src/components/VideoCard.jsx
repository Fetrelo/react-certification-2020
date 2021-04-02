import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.article`
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);

  header {
    position: relative;
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      img {
        width: 175%;
        object-position: -7.5em -2em;
      }
    }

    img {
      width: 150%;
      transition: 0.2s;
      object-fit: cover;
      object-position: -5em -1em;
    }

    div {
      position: absolute;
      bottom: 0;
      padding: 3%;
      background-image: linear-gradient(0deg, #000 0%, transparent 100%);
      width: 100%;
      color: white;
      text-shadow: #000 0px 0px 5px;
    }
  }

  & > div {
    padding: 3%;
    font-size: 0.7em;
  }
`;

const VideoCard = ({ data, fromPage }) => {
  const formattedDate = new Date(data.snippet.publishedAt);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(formattedDate);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(formattedDate);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(formattedDate);

  const description =
    data.snippet.description !== '' ? (
      <div>{data.snippet.description}</div>
    ) : (
      <div>{`${data.snippet.channelTitle} - ${da} ${mo}, ${ye}`}</div>
    );

  return (
    <Card>
      <Link to={`/${data.id.videoId}`}>
        <header>
          <img src={data.snippet.thumbnails.medium.url} alt={data.etag} />
          <div>{data.snippet.title}</div>
        </header>
      </Link>
      {fromPage === 'home' ? description : null}
    </Card>
  );
};

export default VideoCard;
