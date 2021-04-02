import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import HomePage from "../pages/Home/Home.page";
import youtubeVideos from "../mocks/youtube-videos";

test('Ensure the elements get rendered', () => {
  render(<HomePage />);
  expect(screen.getByRole('heading', { name: /YouTube video search app/i })).toBeInTheDocument();
  expect(screen.getByRole('grid')).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toBeTruthy();
});

test('The information from the mock data is rendered as expected', () => {
  render(<HomePage />);
  // A random video's information will be displayed if it has videoid
  const randVideoIdx = Math.floor((Math.random() * youtubeVideos.items.length)) + 1;
  let randomVideo = youtubeVideos.items[randVideoIdx];
  expect(screen.getByRole('img', {name: randomVideo.etag })).toBeInTheDocument();

  // The first item (not a video) information shouldn't be shown
  randomVideo = youtubeVideos.items[0];
  expect(screen.queryByRole('img', {name: randomVideo.etag})).not.toBeInTheDocument();

  // A video that has description, must show it'
  let videoWithDescription = youtubeVideos.items[2];
  expect(screen.getByText(videoWithDescription.snippet.description)).toBeInTheDocument();
  
  // A video that does not have any description, must show channel title followed by a hyphen'
  videoWithDescription = youtubeVideos.items[8];
  const formattedDate = new Date(videoWithDescription.snippet.publishedAt);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(formattedDate);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(formattedDate);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(formattedDate);
  expect(screen.getByText(`Wizeline - ${da} ${mo}, ${ye}`)).toBeInTheDocument();
});