import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../state/GlobalContextProvider';
import SvgFav from './svg/SvgFav';
import SvgFaved from './svg/SvgFaved';

const StyledFav = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 3%;
  color: white;
  text-shadow: #ffffff 0px 0px 5px;
  background-image: linear-gradient(225deg, #c7a035 0%, #c7a035 40%, transparent 100%);
  border-radius: 0 5px 0 5px;
  z-index: 1;
  transition: 0.3s;
`;

const Card = styled.article`
  border-radius: 5px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  background-color: ${(props) => (props.theme === 'dark' ? '#5c5c5c' : '#ffffff')};
  color: ${(props) => (props.theme === 'dark' ? '#c3c3c3' : '#7b7b7b')};
  position: relative;

  header {
    border-radius: 5px 5px 0px 0px;
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

    div.title {
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

  &:hover ${StyledFav} {
    display: block;
  }
`;

const VideoCard = ({
  data: {
    id: { videoId },
    etag,
    snippet: {
      title,
      description,
      thumbnails: {
        medium: { url },
      },
    },
  },
  showDesc,
  goto,
}) => {
  const {
    state: { theme, favVideos, sessionData },
    favVideo,
    unfavVideo,
  } = useContext(GlobalContext);

  const videoData = {
    id: { videoId },
    etag,
    snippet: {
      title,
      description,
      thumbnails: {
        medium: { url },
      },
    },
  };

  const isFav = favVideos.some((v) => v.id.videoId === videoId);

  return (
    <Card theme={theme}>
      {sessionData && sessionData.isAuthenticated ? (
        isFav ? (
          <StyledFav>
            <SvgFaved
              onClick={() => {
                unfavVideo(videoData);
              }}
            />
          </StyledFav>
        ) : (
          <StyledFav>
            <SvgFav
              onClick={() => {
                favVideo(videoData);
              }}
            />
          </StyledFav>
        )
      ) : null}
      <Link to={`${goto}${videoId}`}>
        <header>
          <img src={url} alt={etag} />
          <div className="title">{title}</div>
        </header>
      </Link>
      {showDesc ? <div>{description}</div> : null}
    </Card>
  );
};

export default VideoCard;
