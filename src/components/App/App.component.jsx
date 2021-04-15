import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import HomePage from '../../pages/Home';
import SearchResultProvider from '../../state/SearchResultsProvider';
import VideoDetailsView from '../../pages/VideoDetailsView/VideoDetailsView.page';
import GlobalContextProvider from '../../state/GlobalContextProvider';

function App() {
  return (
    <GlobalContextProvider>
      <SearchResultProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/:id">
              <VideoDetailsView />
            </Route>
          </Switch>
        </Router>
      </SearchResultProvider>
    </GlobalContextProvider>
  );
}

export default App;
