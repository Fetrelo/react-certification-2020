import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Nav';
import HomePage from '../../pages/Home';
import SearchResultProvider from '../../state/SearchResultsProvider';
import VideoDetailsView from '../../pages/VideoDetailsView/VideoDetailsView.page';

function App() {
  return (
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
  );
}

export default App;
