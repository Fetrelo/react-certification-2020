import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { BrowserRouter as Router } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import HomePage from "../pages/Home/Home.page";
import GlobalContextProvider from '../state/GlobalContextProvider';
import SearchResultProvider from '../state/SearchResultsProvider';
import Nav from '../components/Nav';

test('Ensure the elements get rendered', async () => {
  render(
    <GlobalContextProvider>
      <SearchResultProvider>
        <Router>
          <Nav />
          <HomePage />
        </Router>
      </SearchResultProvider>
    </GlobalContextProvider>);
  expect(screen.getByRole('heading', { name: /YouTube video search app/i })).toBeInTheDocument();
  expect(screen.getByRole('grid')).toBeInTheDocument();

  const arts = await screen.findAllByRole('article');
  expect(arts).toHaveLength(25);

  // We can count the articles -> actual # of videos returned by the API
  // To check ->
  // expect(getByRole(arts[0], 'header', { name: youtubeVideos.items[0].snippet.title }));
});
