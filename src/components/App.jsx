import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import PrivateRoute from './PrivateRoute';
import HomePage from '../pages/Home/Home.page';
import SearchResultProvider from '../state/SearchResultsProvider';
import VideoDetailsView from '../pages/VideoDetailsView/VideoDetailsView.page';
import FavVideoDetailsView from '../pages/FavVideoDetailsView/FavVideoDetailsView.page';
import FavedVideosView from '../pages/FavedVideosView/FavedVideosView.page';
import GlobalContextProvider from '../state/GlobalContextProvider';

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
            <PrivateRoute component={FavedVideosView} path="/favs" exact />
            <PrivateRoute component={FavVideoDetailsView} path="/favs/:id" />
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
