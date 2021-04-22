import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import Toggle from '../components/CustomInputs/Toggle';
import Nav from '../components/Nav';
import GlobalContextProvider from '../state/GlobalContextProvider';

test('Ensure header components get rendered', () => {
  render(
    <GlobalContextProvider>
      <Router>
        <Nav />
      </Router>
    </GlobalContextProvider>
  );
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getAllByRole('group').length).toEqual(2);
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('search')).toBeInTheDocument();
  expect(screen.getByRole('switch')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Toggle component check', () => {
  const {queryByLabelText, getByLabelText} = render(
    <GlobalContextProvider>
      <Toggle labelOn="🌙" labelOff="☀️" />
    </GlobalContextProvider>
  );

  expect(queryByLabelText(/☀️/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/☀️/i));
  expect(queryByLabelText(/🌙/i)).toBeTruthy();
});
